import React, { useEffect, useRef, useState } from 'react';
// Accessibility components are defined in this file

// Skip to content link
export const SkipToContentLink: React.FC<{ targetId: string; children: React.ReactNode }> = ({ 
  targetId, 
  children 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg"
    >
      {children}
    </a>
  );
};

// Focus trap component
export const FocusTrap: React.FC<{ 
  children: React.ReactNode; 
  active: boolean;
  returnFocus?: boolean;
}> = ({ children, active, returnFocus = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  useEffect(() => {
    if (active && containerRef.current) {
      previousActiveElement.current = document.activeElement;
      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (firstElement) firstElement.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        if (returnFocus && previousActiveElement.current) {
          (previousActiveElement.current as HTMLElement)?.focus();
        }
      };
    }
  }, [active, returnFocus]);

  return <div ref={containerRef}>{children}</div>;
};

// Screen reader announcements
export const ScreenReaderAnnouncement: React.FC<{ 
  message: string; 
  priority?: 'polite' | 'assertive';
}> = ({ message, priority = 'polite' }) => {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (message) {
      setAnnouncement(message);
      const timer = setTimeout(() => setAnnouncement(''), 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
};

// High contrast mode toggle
export const HighContrastToggle: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('high-contrast');
    if (saved) {
      setIsHighContrast(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', isHighContrast);
    localStorage.setItem('high-contrast', JSON.stringify(isHighContrast));
  }, [isHighContrast]);

  return (
    <button
      onClick={() => setIsHighContrast(!isHighContrast)}
      className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
      aria-label={isHighContrast ? 'Disable high contrast' : 'Enable high contrast'}
    >
      {isHighContrast ? '🌙' : '☀️'}
    </button>
  );
};

// Font size controls
export const FontSizeControls: React.FC = () => {
  const [fontSize, setFontSize] = useState('medium');

  useEffect(() => {
    const saved = localStorage.getItem('font-size');
    if (saved) {
      setFontSize(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('font-size', fontSize);
  }, [fontSize]);

  const sizes = [
    { value: 'small', label: 'Small', size: '0.875rem' },
    { value: 'medium', label: 'Medium', size: '1rem' },
    { value: 'large', label: 'Large', size: '1.125rem' },
    { value: 'xlarge', label: 'Extra Large', size: '1.25rem' },
  ];

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="font-size-select" className="text-sm font-medium">
        Font Size:
      </label>
      <select
        id="font-size-select"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        className="px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        aria-label="Select font size"
      >
        {sizes.map((size) => (
          <option key={size.value} value={size.value}>
            {size.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Keyboard navigation helper
export const useKeyboardNavigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState<HTMLElement[]>([]);

  const registerItems = (newItems: HTMLElement[]) => {
    setItems(newItems);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        setCurrentIndex(prev => (prev + 1) % items.length);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
        break;
      case 'Home':
        e.preventDefault();
        setCurrentIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setCurrentIndex(items.length - 1);
        break;
    }
  };

  useEffect(() => {
    if (items.length > 0) {
      items[currentIndex]?.focus();
    }
  }, [currentIndex, items]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [items]);

  return { registerItems, currentIndex };
};

// ARIA live region for dynamic content
export const AriaLiveRegion: React.FC<{ 
  children: React.ReactNode;
  role?: 'status' | 'alert' | 'log' | 'marquee' | 'timer';
  atomic?: boolean;
}> = ({ children, role = 'status', atomic = true }) => {
  return (
    <div
      role={role}
      aria-live="polite"
      aria-atomic={atomic}
      className="sr-only"
    >
      {children}
    </div>
  );
};

// Accessible modal component
export const AccessibleModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <FocusTrap active={isOpen}>
        <div
          ref={modalRef}
          className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6"
          tabIndex={-1}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 id="modal-title" className="text-xl font-semibold">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </FocusTrap>
    </div>
  );
};

// Accessible button with proper ARIA attributes
export const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
  ariaDescribedBy,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-busy={loading}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
      )}
      {children}
    </button>
  );
};

// Main accessibility wrapper
export const AccessibilityWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [announcement, setAnnouncement] = useState('');

  // Announce route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setAnnouncement('Page content has changed');
    };

    // Listen for route changes (you might need to adapt this based on your router)
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <>
      <SkipToContentLink targetId="main-content">
        Skip to main content
      </SkipToContentLink>
      <ScreenReaderAnnouncement message={announcement} />
      <AriaLiveRegion>
        {announcement}
      </AriaLiveRegion>
      {children}
    </>
  );
};

export default AccessibilityWrapper;
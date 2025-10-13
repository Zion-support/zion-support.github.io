import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key to close modals/overlays
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            modal.setAttribute('aria-hidden', 'true');
            modal.style.display = 'none';
          }
        });
      }

      // Arrow key navigation for custom components
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.getAttribute('role') === 'menuitem') {
          event.preventDefault();
          const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
          const currentIndex = menuItems.indexOf(focusedElement);
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, menuItems.length - 1)
            : Math.max(currentIndex - 1, 0);
          (menuItems[nextIndex] as HTMLElement)?.focus();
        }
      }
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    // Add focus trap for modals
    const handleFocusTrap = (event: FocusEvent) => {
      const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
      if (modal) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.target === lastElement && event.shiftKey) {
          event.preventDefault();
          firstElement?.focus();
        } else if (event.target === firstElement && !event.shiftKey) {
          event.preventDefault();
          lastElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusin', handleFocusTrap);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusin', handleFocusTrap);
    };
  }, []);

  // Apply high contrast mode
  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to main content
      </a>
      
      {/* Accessibility controls */}
      <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-4 focus-within:right-4 z-50 space-y-2">
        {/* High contrast mode toggle */}
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
        >
          {isHighContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        {/* Font size controls */}
        <div className="bg-slate-800 text-white px-4 py-2 rounded-lg">
          <label htmlFor="font-size" className="block text-sm mb-2">
            Font Size: {fontSize}px
          </label>
          <input
            id="font-size"
            type="range"
            min="12"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full"
            aria-label="Adjust font size"
          />
        </div>
      </div>

      {children}
    </>
  );
};

export default EnhancedAccessibility;
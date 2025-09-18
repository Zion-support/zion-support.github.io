"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Accessibility hook for keyboard navigation
export const useAccessibility = () => {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true);
        setFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
      setFocusVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return { isKeyboardUser, focusVisible };
};

// Skip to main content link
export const SkipToContent = () => {
  const handleSkip = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const main = document.getElementById('main-content');
      if (main) {
        main.focus();
        main.scrollIntoView();
      }
    }
  };

  return (
    <motion.a
      href="#main-content"
      onKeyDown={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50 font-semibold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      Skip to main content
    </motion.a>
  );
};

// Screen reader announcements
export const ScreenReaderAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const announce = (message: string) => {
    setAnnouncements(prev => [...prev, message]);
    
    // Remove announcement after 5 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1));
    }, 5000);
  };

  useEffect(() => {
    // Make announce function available globally
    (window as any).announceToScreenReader = announce;
  }, []);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcements.map((announcement, index) => (
        <div key={index}>{announcement}</div>
      ))}
    </div>
  );
};

// Accessible button component
export const AccessibleButton = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  className = '',
  ariaLabel,
  ariaDescribedBy,
  ...props
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  [key: string]: any;
}) => {
  const { focusVisible } = useAccessibility();

  const baseClasses = "font-semibold rounded-lg transition-all duration-300 focus:outline-none";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700",
    secondary: "bg-white/10 text-white border border-white/30 hover:bg-white/20",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  const focusClasses = focusVisible ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-gray-900" : "";

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${focusClasses}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Accessible form field component
export const AccessibleFormField = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder,
  description,
  className = '',
  ...props
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  className?: string;
  [key: string]: any;
}) => {
  const { focusVisible } = useAccessibility();
  const id = `field-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${id}-error`;
  const descriptionId = `${id}-description`;

  const focusClasses = focusVisible ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-gray-900" : "";

  return (
    <div className={`space-y-2 ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white"
      >
        {label}
        {required && <span className="text-red-400 ml-1" aria-label="required">*</span>}
      </label>
      
      {description && (
        <p id={descriptionId} className="text-sm text-gray-400">
          {description}
        </p>
      )}
      
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={[
          error ? errorId : '',
          description ? descriptionId : ''
        ].filter(Boolean).join(' ') || undefined}
        className={`
          w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
          text-white placeholder-gray-400
          focus:outline-none focus:border-cyan-400
          ${focusClasses}
          ${error ? 'border-red-500' : ''}
        `}
        {...props}
      />
      
      <AnimatePresence>
        {error && (
          <motion.p
            id={errorId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// High contrast mode toggle
export const HighContrastToggle = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    // Check for saved preference
    const saved = localStorage.getItem('high-contrast');
    if (saved === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
      localStorage.setItem('high-contrast', 'true');
    } else {
      document.documentElement.classList.remove('high-contrast');
      localStorage.removeItem('high-contrast');
    }
  };

  return (
    <AccessibleButton
      onClick={toggleHighContrast}
      variant="secondary"
      size="small"
      ariaLabel={`Toggle high contrast mode. Currently ${isHighContrast ? 'on' : 'off'}`}
    >
      {isHighContrast ? '🌞 Normal' : '🌙 High Contrast'}
    </AccessibleButton>
  );
};

// Accessibility toolbar
export const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-gray-900 border border-white/20 rounded-lg p-4 mb-4 shadow-xl"
          >
            <h3 className="text-white font-semibold mb-3">Accessibility Tools</h3>
            <div className="space-y-3">
              <HighContrastToggle />
              <AccessibleButton
                onClick={() => {
                  const announce = (window as any).announceToScreenReader;
                  if (announce) {
                    announce('Font size increased');
                  }
                }}
                variant="secondary"
                size="small"
                ariaLabel="Increase font size"
              >
                🔍 Larger Text
              </AccessibleButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AccessibleButton
        onClick={() => setIsOpen(!isOpen)}
        variant="primary"
        size="small"
        ariaLabel={`${isOpen ? 'Close' : 'Open'} accessibility toolbar`}
        className="rounded-full w-12 h-12 flex items-center justify-center"
      >
        ♿
      </AccessibleButton>
    </div>
  );
};
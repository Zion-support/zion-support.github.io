// Accessibility components
import React, { useEffect, useRef, useState } from 'react';
import { focusManagement, screenReader, keyboardNavigation } from './AccessibilityUtils';

// Skip to content link component
export const SkipToContent: React.FC<{ targetId: string; children: React.ReactNode }> = ({ 
  targetId, 
  children 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView();
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
    >
      {children}
    </a>
  );
};

// Screen reader only text component
export const ScreenReaderText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Focus trap component
export const FocusTrap: React.FC<{ 
  children: React.ReactNode; 
  active: boolean;
  onEscape?: () => void;
}> = ({ children, active, onEscape }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (active && containerRef.current) {
      cleanupRef.current = focusManagement.trapFocus(containerRef.current);
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [active]);

  useEffect(() => {
    if (active && onEscape) {
      const handleEscape = (e: KeyboardEvent) => {
        keyboardNavigation.handleEscape(e, onEscape);
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [active, onEscape]);

  return (
    <div ref={containerRef} className={active ? 'focus-trap' : ''}>
      {children}
    </div>
  );
};

// Accessible button component
export const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  className?: string;
}> = ({ 
  children, 
  onClick, 
  disabled = false, 
  ariaLabel, 
  ariaDescribedBy,
  className = '' 
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
};

// Accessible modal component
export const AccessibleModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ isOpen, onClose, title, children, className = '' }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus the modal when it opens
      titleRef.current?.focus();
      
      // Announce to screen readers
      screenReader.announce(`Modal opened: ${title}`);
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, title]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`bg-white rounded-lg shadow-xl max-w-md w-full mx-4 ${className}`}
      >
        <div className="p-6">
          <h2 
            id="modal-title"
            ref={titleRef}
            className="text-xl font-semibold mb-4"
            tabIndex={-1}
          >
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
};

// Accessible form field component
export const AccessibleFormField: React.FC<{
  label: string;
  id: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  required?: boolean;
  error?: string;
  helpText?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}> = ({ 
  label, 
  id, 
  type = 'text', 
  required = false, 
  error, 
  helpText, 
  value, 
  onChange, 
  className = '' 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`form-field ${className}`}>
      <label 
        htmlFor={id}
        className={`block text-sm font-medium mb-1 ${
          error ? 'text-red-600' : 'text-gray-700'
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={`${id}-help ${id}-error`}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error 
            ? 'border-red-500 focus:border-red-500' 
            : isFocused 
              ? 'border-blue-500' 
              : 'border-gray-300'
        }`}
      />
      
      {helpText && (
        <p id={`${id}-help`} className="mt-1 text-sm text-gray-600">
          {helpText}
        </p>
      )}
      
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
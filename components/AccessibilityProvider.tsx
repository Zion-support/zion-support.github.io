'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  generateAriaLabel, 
  checkColorContrast, 
  announceToScreenReader,
  isHighContrastMode,
  prefersReducedMotion,
  runAccessibilityChecks
} from '@/lib/accessibility';

interface AccessibilityContextType {
  isHighContrast: boolean;
  prefersReducedMotion: boolean;
  announce: (message: string) => void;
  checkContrast: (foreground: string, background: string) => any;
  runChecks: (element: HTMLElement) => any;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check initial state
    setIsHighContrast(isHighContrastMode());
    setPrefersReducedMotion(prefersReducedMotion());

    // Set up media query listeners
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  const announce = (message: string) => {
    announceToScreenReader(message);
  };

  const checkContrast = (foreground: string, background: string) => {
    return checkColorContrast(foreground, background);
  };

  const runChecks = (element: HTMLElement) => {
    return runAccessibilityChecks(element);
  };

  const value: AccessibilityContextType = {
    isHighContrast,
    prefersReducedMotion,
    announce,
    checkContrast,
    runChecks
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Skip link component
export const SkipLink: React.FC<{ targetId: string; children: React.ReactNode }> = ({ 
  targetId, 
  children 
}) => {
  return (
    <a
      href={`#${targetId}`}
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg"
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {children}
    </a>
  );
};

// Accessible button component
export const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({ 
  children, 
  onClick, 
  disabled = false, 
  ariaLabel, 
  className = '',
  type = 'button'
}) => {
  const { announce } = useAccessibility();

  const handleClick = () => {
    if (onClick) {
      onClick();
      announce(`Button activated: ${ariaLabel || children}`);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || generateAriaLabel('button')}
      className={`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

// Accessible image component
export const AccessibleImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={`${className}`}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.alt = `Image failed to load: ${alt}`;
      }}
    />
  );
};

// Accessible form field component
export const AccessibleFormField: React.FC<{
  label: string;
  id: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search';
  required?: boolean;
  error?: string;
  helpText?: string;
  className?: string;
  inputClassName?: string;
  value?: string;
  onChange?: (value: string) => void;
}> = ({
  label,
  id,
  type = 'text',
  required = false,
  error,
  helpText,
  className = '',
  inputClassName = '',
  value,
  onChange
}) => {
  const { announce } = useAccessibility();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus = () => {
    announce(`Focused on ${label} field`);
  };

  const handleBlur = () => {
    if (error) {
      announce(`Error: ${error}`);
    }
  };

  return (
    <div className={`form-field ${className}`}>
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby={`${id}-help ${id}-error`}
        aria-invalid={error ? 'true' : 'false'}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${inputClassName}`}
      />
      
      {helpText && (
        <p id={`${id}-help`} className="mt-1 text-sm text-gray-500">
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
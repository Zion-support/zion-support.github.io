// // 'use client'; // Removed for Vite compatibility // Removed for Vite compatibility

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
  enableSkipLinks: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
}

interface AccessibilityEnhancerProps {
  config?: Partial<AccessibilityConfig>;
  children: React.ReactNode;
}

interface AccessibilityEnhancerRef {
  announceToScreenReader: (message: string) => void;
  setFontSize: (size: number) => void;
}

const AccessibilityEnhancer = React.forwardRef<AccessibilityEnhancerRef, AccessibilityEnhancerProps>(({
  config = {},
  children
}, ref) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const announcementRef = useRef<HTMLDivElement>(null);

  const defaultConfig: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableHighContrast: true,
    enableReducedMotion: true,
    enableFocusManagement: true,
    enableSkipLinks: true,
    enableARIALabels: true,
    enableColorContrast: true,
    ...config
  };

  const announceToScreenReader = useCallback((message: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
      announcementRef.current.setAttribute('aria-live', 'polite');
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      setIsKeyboardNavigation(true);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsKeyboardNavigation(false);
  }, []);

  useEffect(() => {
    // Check for user preferences
    if (defaultConfig.enableHighContrast) {
//       const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      setIsHighContrast(prefersHighContrast);
    }

    if (defaultConfig.enableReducedMotion) {
//       const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsReducedMotion(prefersReducedMotion);
    }

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [defaultConfig.enableHighContrast, defaultConfig.enableReducedMotion, handleKeyDown, handleMouseDown]);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (isKeyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Set font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, isKeyboardNavigation, fontSize]);

  // Expose methods via ref
  React.useImperativeHandle(ref, () => ({
    announceToScreenReader,
    setFontSize: (size: number) => {
      setFontSize(Math.max(12, Math.min(24, size)));
    }
  }), [announceToScreenReader]);

  return (
    <div className="accessibility-enhancer">
      {defaultConfig.enableSkipLinks && (
        <div className="skip-links">
          <a 
            href="#main-content" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to main content
          </a>
          <a 
            href="#navigation" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to navigation
          </a>
        </div>
      )}
      
      {children}
      
      {/* Screen reader announcements */}
      {defaultConfig.enableScreenReaderSupport && (
        <div
          ref={announcementRef}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        />
      )}
    </div>
  );
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;
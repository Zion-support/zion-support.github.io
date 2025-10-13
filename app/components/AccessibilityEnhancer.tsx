import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Focus management
    const manageFocus = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstFocusableElement = focusableElements[0] as HTMLElement;
      const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      
      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    };

    // Skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.top = '0';
      
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      return () => {
        skipLink.remove();
      };
    };

    // High contrast mode detection
    const handleHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const updateContrast = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      updateContrast(mediaQuery);
      mediaQuery.addEventListener('change', updateContrast);
      
      return () => {
        mediaQuery.removeEventListener('change', updateContrast);
      };
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const updateMotion = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      updateMotion(mediaQuery);
      mediaQuery.addEventListener('change', updateMotion);
      
      return () => {
        mediaQuery.removeEventListener('change', updateMotion);
      };
    };

    // Initialize all accessibility features
    const cleanupFocus = manageFocus();
    const cleanupSkipLinks = addSkipLinks();
    const cleanupContrast = handleHighContrast();
    const cleanupMotion = handleReducedMotion();

    return () => {
      cleanupFocus();
      cleanupSkipLinks();
      cleanupContrast();
      cleanupMotion();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
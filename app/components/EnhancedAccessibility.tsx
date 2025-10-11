'use client';
import React, { useEffect, useState } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Keyboard navigation enhancement
      if (enableKeyboardNavigation) {
        const handleKeyDown = (event: KeyboardEvent) => {
          // Skip to main content
          if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
            const skipLink = document.querySelector('[href="#main-content"]') as HTMLAnchorElement;
            if (skipLink) {
              skipLink.focus();
              event.preventDefault();
            }
          }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Screen reader enhancements
      if (enableScreenReader) {
        // Add ARIA landmarks
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        // Add skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    }
  }, [enableScreenReader]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // High contrast mode
      if (enableHighContrast) {
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        setIsHighContrast(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
          setIsHighContrast(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
    }
  }, [enableHighContrast]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Focus management
      if (enableFocusManagement) {
        // Trap focus in modals
        const handleFocusTrap = (event: FocusEvent) => {
          const modal = document.querySelector('[role="dialog"]');
          if (modal && !modal.contains(event.target as Node)) {
            const focusableElements = modal.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusableElements.length > 0) {
              (focusableElements[0] as HTMLElement).focus();
            }
          }
        };

        document.addEventListener('focusin', handleFocusTrap);
        return () => document.removeEventListener('focusin', handleFocusTrap);
      }
    }
  }, [enableFocusManagement]);

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
      {children}
    </div>
  );
};

export default EnhancedAccessibility;

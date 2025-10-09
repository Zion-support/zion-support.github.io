'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    // Keyboard navigation
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]');
          if (skipLink) {
            (skipLink as HTMLElement).focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          const focusable = Array.from(document.querySelectorAll(focusableElements)) as HTMLElement[];
          const firstFocusable = focusable[0];
          const lastFocusable = focusable[focusable.length - 1];

          if (event.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable?.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable?.focus();
              event.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;

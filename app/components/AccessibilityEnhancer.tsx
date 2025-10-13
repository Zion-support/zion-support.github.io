import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true,
}) => {
  useEffect(() => {
    // Apply high contrast mode
    if (enableHighContrast) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
    }

    // Apply reduced motion
    if (enableReducedMotion) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
    }

    // Focus management
    if (enableFocusManagement) {
      // Trap focus within modals and dialogs
      const handleFocusTrap = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleFocusTrap);
      return () => document.removeEventListener('keydown', handleFocusTrap);
    }
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement]);

  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyboardNavigation = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'S' && e.ctrlKey && e.shiftKey) {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Skip to navigation
        if (e.key === 'N' && e.ctrlKey && e.shiftKey) {
          e.preventDefault();
          const navigation = document.querySelector('nav');
          if (navigation) {
            const firstLink = navigation.querySelector('a') as HTMLElement;
            firstLink?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyboardNavigation);
      return () => document.removeEventListener('keydown', handleKeyboardNavigation);
    }
  }, [enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
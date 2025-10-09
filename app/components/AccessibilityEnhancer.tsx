'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true,
  enableReducedMotion = true,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]');
          if (skipLink) {
            (skipLink as HTMLElement).focus();
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Focus management
    if (enableFocusManagement) {
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

    // High contrast mode detection
    if (enableHighContrast) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      prefersHighContrast.addEventListener('change', handleContrastChange);
      if (prefersHighContrast.matches) {
        document.body.classList.add('high-contrast');
      }

      return () => prefersHighContrast.removeEventListener('change', handleContrastChange);
    }

    // Reduced motion detection
    if (enableReducedMotion) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };

      prefersReducedMotion.addEventListener('change', handleMotionChange);
      if (prefersReducedMotion.matches) {
        document.body.classList.add('reduced-motion');
      }

      return () => prefersReducedMotion.removeEventListener('change', handleMotionChange);
    }

    // ARIA labels enhancement
    if (enableAriaLabels) {
      // Add missing ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add ARIA labels to images without alt text
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.setAttribute('alt', `Image ${index + 1}`);
        img.setAttribute('aria-hidden', 'true');
      });
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement, enableAriaLabels, enableReducedMotion]);

  return null;
};

export default AccessibilityEnhancer;

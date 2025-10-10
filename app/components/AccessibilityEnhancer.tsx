'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const main = document.querySelector('#main-content');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      return () => {
        const region = document.getElementById('live-region');
        if (region) region.remove();
      };
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const updateContrast = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      updateContrast(mediaQuery);
      mediaQuery.addEventListener('change', updateContrast);

      return () => mediaQuery.removeEventListener('change', updateContrast);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      // Add focus indicators
      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
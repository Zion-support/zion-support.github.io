'use client';
import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableReducedMotion = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            event.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader enhancements
    if (enableScreenReader) {
      // Add ARIA landmarks
      const addAriaLandmarks = () => {
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        const nav = document.querySelector('nav');
        if (nav && !nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }

        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      };

      addAriaLandmarks();
    }
  }, [enableScreenReader]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast) {
      const checkHighContrast = () => {
        if (window.matchMedia('(prefers-contrast: high)').matches) {
          document.body.classList.add('high-contrast');
        }
      };

      checkHighContrast();
      window.matchMedia('(prefers-contrast: high)').addEventListener('change', checkHighContrast);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Reduced motion
    if (enableReducedMotion) {
      const checkReducedMotion = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          document.body.classList.add('reduced-motion');
        }
      };

      checkReducedMotion();
      window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkReducedMotion);
    }
  }, [enableReducedMotion]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
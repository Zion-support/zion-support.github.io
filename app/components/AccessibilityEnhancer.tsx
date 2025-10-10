'use client';
import React, { useEffect, memo } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = memo(({ children }) => {
  useEffect(() => {
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

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const main = document.querySelector('main');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    };

    addAriaLandmarks();
    enhanceFocusManagement();
    addKeyboardNavigation();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;
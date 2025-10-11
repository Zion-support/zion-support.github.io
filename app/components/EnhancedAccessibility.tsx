'use client';
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
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

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = document.querySelector(`label[for="${input.id}"]`);
          if (label) {
            input.setAttribute('aria-labelledby', label.id || 'label-' + Math.random().toString(36).substr(2, 9));
            if (!label.id) {
              label.id = 'label-' + Math.random().toString(36).substr(2, 9);
            }
          }
        }
      });
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize accessibility enhancements
    addAriaLandmarks();
    enhanceFormAccessibility();
    addFocusIndicators();

    // Cleanup
    return () => {
      const style = document.querySelector('style[data-accessibility]');
      if (style) {
        style.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;

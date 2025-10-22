'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && event.shiftKey === false) {
        const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
        if (skipLink && document.activeElement === document.body) {
          skipLink.focus();
        }
      }
    };

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }
        .skip-link:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.setAttribute('data-skip-to-main', 'true');
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance form labels and inputs
    const enhanceForms = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        const element = input as HTMLElement;
        if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
          const label = document.querySelector(`label[for="${element.id}"]`);
          if (label) {
            element.setAttribute('aria-labelledby', label.id || `label-${element.id}`);
          }
        }
      });
    };

    // Add ARIA landmarks
    const addLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.id = 'main-content';
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    addFocusStyles();
    addSkipLink();
    enhanceForms();
    addLandmarks();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
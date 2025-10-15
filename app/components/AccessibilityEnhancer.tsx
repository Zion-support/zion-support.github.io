import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.top = 'auto';
      skipLink.style.width = '1px';
      skipLink.style.height = '1px';
      skipLink.style.overflow = 'hidden';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '16px';
        skipLink.style.top = '16px';
        skipLink.style.width = 'auto';
        skipLink.style.height = 'auto';
        skipLink.style.overflow = 'visible';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
        skipLink.style.top = 'auto';
        skipLink.style.width = '1px';
        skipLink.style.height = '1px';
        skipLink.style.overflow = 'hidden';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #2563eb;
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
        
        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Announce page changes to screen readers
    const announcePageChange = () => {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.id = 'page-announcer';
      document.body.appendChild(announcer);
    };

    // Initialize accessibility enhancements
    addSkipLink();
    addFocusStyles();
    addLandmarks();
    announcePageChange();

    // Cleanup
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
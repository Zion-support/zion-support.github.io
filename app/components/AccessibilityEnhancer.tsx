import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.zIndex = '9999';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '1rem';
        skipLink.style.top = '1rem';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Improve focus management
    const improveFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
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
        
        .focus:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link, index) => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });
    };

    // Improve color contrast
    const improveColorContrast = () => {
      const style = document.createElement('style');
      style.textContent = `
        .text-gray-300 {
          color: #d1d5db !important;
        }
        
        .text-gray-400 {
          color: #9ca3af !important;
        }
        
        .bg-gray-900 {
          background-color: #111827 !important;
        }
        
        .bg-gray-800 {
          background-color: #1f2937 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Run accessibility enhancements
    addSkipLink();
    improveFocusManagement();
    addAriaLabels();
    improveColorContrast();
    addKeyboardNavigation();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
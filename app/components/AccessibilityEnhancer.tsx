import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
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

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    addKeyboardNavigation();
    addFocusIndicators();
    addSkipLinks();
  }, []);

  return null;
};

export default AccessibilityEnhancer;
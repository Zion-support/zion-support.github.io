import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add accessibility enhancements
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
          button.setAttribute('aria-label', button.textContent || 'Button');
        }
      });

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
    };

    enhanceAccessibility();
  }, []);

  return null;
};

export default AccessibilityEnhancer;
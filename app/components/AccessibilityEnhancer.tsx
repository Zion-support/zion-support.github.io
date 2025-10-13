import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
    };

    // Add focus indicators
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #8b5cf6;
          color: white;
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

    // Add skip link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Initialize accessibility features
    addFocusStyles();
    addSkipLink();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;

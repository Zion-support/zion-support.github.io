import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
    };

    document.addEventListener('keydown', handleKeyDown);
    addFocusStyles();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;

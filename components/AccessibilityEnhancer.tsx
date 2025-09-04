import React, { useEffect } from 'react';

const AccessibilityEnhancer: Reac t.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add keyboard navigation support
      const handleKeyDown = (event: KeyboardEven t) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3B82F6 !important;
          outline-offset: 2p x !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, []);

  return null;
};

export default AccessibilityEnhancer;
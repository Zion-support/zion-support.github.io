import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add accessibility enhancements
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
      }

      // Enhance focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add role attributes
      const cards = document.querySelectorAll('.card, [class*="card"]');
      cards.forEach(card => {
        if (!card.getAttribute('role')) {
          card.setAttribute('role', 'article');
        }
      });

      // Enhance form accessibility
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (!input.getAttribute('aria-describedby') && input.getAttribute('required')) {
          const id = `help-${Math.random().toString(36).substr(2, 9)}`;
          input.setAttribute('aria-describedby', id);
          
          const helpText = document.createElement('div');
          helpText.id = id;
          helpText.className = 'sr-only';
          helpText.textContent = 'This field is required';
          input.parentNode?.insertBefore(helpText, input.nextSibling);
        }
      });

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    const cleanup = enhanceAccessibility();
    return cleanup;
  }, []);

  return null;
};

export default AccessibilityEnhancer;
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add accessibility enhancements
    const addKeyboardNavigation = () => {
      // Add keyboard navigation for custom elements
      const focusableElements = document.querySelectorAll('[data-focusable]');
      focusableElements.forEach((element) => {
        element.setAttribute('tabindex', '0');
      });
    };

    const addAriaLabels = () => {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });
    };

    const enhanceFocusManagement = () => {
      // Enhance focus management
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    addKeyboardNavigation();
    addAriaLabels();
    enhanceFocusManagement();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addKeyboardNavigation();
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default AccessibilityEnhancer;

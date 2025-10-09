import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add accessibility enhancements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });
    };

    const addFocusManagement = () => {
      // Add focus management for modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        if (!modal.hasAttribute('tabindex')) {
          modal.setAttribute('tabindex', '-1');
        }
      });
    };

    const enhanceKeyboardNavigation = () => {
      // Add keyboard navigation enhancements
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
      interactiveElements.forEach(element => {
        if (!element.hasAttribute('tabindex')) {
          element.setAttribute('tabindex', '0');
        }
      });
    };

    // Run enhancements
    addAriaLabels();
    addFocusManagement();
    enhanceKeyboardNavigation();

    // Set up observer for dynamic content
    const observer = new MutationObserver(() => {
      addAriaLabels();
      addFocusManagement();
      enhanceKeyboardNavigation();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
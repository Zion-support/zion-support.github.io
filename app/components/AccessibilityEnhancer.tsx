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
      // Add focus management for better keyboard navigation
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).style.outline = '2px solid #06b6d4';
        });
        
        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).style.outline = 'none';
        });
      });
    };

    addAriaLabels();
    addFocusManagement();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
      addFocusManagement();
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
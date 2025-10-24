'use client';

import React, { useEffect} from 'react';

interface Props {

  children: React.ReactNode}

const AccessibilityEnhancer: React.FC<Props> = ({ children}) => {
  useEffect(() => {
    // Initialize accessibility enhancements
    const initAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
      if (mainContent) {
        mainContent.id = 'main-content';
      }

      // Enhance focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableContent = document.querySelectorAll(focusableElements);
      
      focusableContent.forEach((element) => {
        element.setAttribute('tabindex', '0');
      });

      // Add ARIA labels where missing
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Enhance form accessibility
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach((input) => {
<<<<<<< HEAD
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', (input as HTMLInputElement).placeholder || 'Input field');
=======
        const htmlInput = input as HTMLInputElement;
        const label = document.querySelector(`label[for="${htmlInput.id}"]`);
        if (!label && !htmlInput.getAttribute('aria-label')) {
          htmlInput.setAttribute('aria-label', htmlInput.placeholder || 'Input field');
>>>>>>> origin/main
        }
      });
    };

    initAccessibility();
  }, []);

  return (
    <div className="accessibility-enhanced" role="main">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
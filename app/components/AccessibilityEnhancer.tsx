import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusable = document.querySelectorAll(focusableElements);
      
      focusable.forEach((element) => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).classList.add('focus-visible');
        });
        
        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).classList.remove('focus-visible');
        });
      });
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.id = 'main-content';
      }
    };

    // Initialize accessibility enhancements
    addSkipLink();
    enhanceFocusManagement();
    addAriaLandmarks();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;



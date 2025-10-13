import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const enhanceFocusManagement = () => {
      // Add focus management for better keyboard navigation
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableContent = document.querySelectorAll(focusableElements);
      
      focusableContent.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    addSkipLink();
    enhanceFocusManagement();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
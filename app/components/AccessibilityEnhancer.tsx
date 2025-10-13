import React, { useEffect } from 'react';
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };
    const enhanceFocusManagement = () => {
      // Add focus management for better keyboard navigation
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          const focusable = document.querySelectorAll(focusableElements);
          const firstFocusable = focusable[0] as HTMLElement;
          const lastFocusable = focusable[focusable.length - 1] as HTMLElement;
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable?.focus();
              e.preventDefault();
            }
          }
        }
      });
    };
    addSkipLinks();
    enhanceFocusManagement();
    return () => {
      // Cleanup if needed
    };
  }, []);
  return <>{children}</>;
};
export default AccessibilityEnhancer;
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusIndicators = true,
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (typeof window !== 'undefined') {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add focus indicators
      if (enableFocusIndicators) {
        const style = document.createElement('style');
        style.textContent = `
          *:focus {
            outline: 2px solid #06b6d4 !important;
            outline-offset: 2px !important;
          }
          .focus-visible:focus {
            outline: 2px solid #06b6d4 !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(style);
      }

      // Add keyboard navigation support
      if (enableKeyboardNavigation) {
        const handleKeyDown = (event: KeyboardEvent) => {
          // Handle escape key to close modals/dropdowns
          if (event.key === 'Escape') {
            const activeElement = document.activeElement as HTMLElement;
            if (activeElement && activeElement.blur) {
              activeElement.blur();
            }
          }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusIndicators]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
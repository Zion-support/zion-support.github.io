import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    const enhanceAccessibility = () => {
      // Add keyboard navigation support
      if (enableKeyboardNavigation) {
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
          }
        });

        document.addEventListener('mousedown', () => {
          document.body.classList.remove('keyboard-navigation');
        });
      }

      // Add screen reader support
      if (enableScreenReader) {
        // Add skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }

      // Add high contrast support
      if (enableHighContrast) {
        const style = document.createElement('style');
        style.textContent = `
          @media (prefers-contrast: high) {
            .high-contrast {
              filter: contrast(1.5) brightness(1.2);
            }
          }
        `;
        document.head.appendChild(style);
      }
    };

    enhanceAccessibility();
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true
}) => {
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    // Skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.zIndex = '9999';
      
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      cleanupFunctions.push(() => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      });
    };

    // High contrast mode
    if (enableHighContrast) {
      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-high-contrast';
        style.textContent = `
          .high-contrast {
            filter: contrast(150%) brightness(1.2);
          }
          .high-contrast * {
            border-color: currentColor !important;
          }
        `;
        document.head.appendChild(style);
        
        cleanupFunctions.push(() => {
          const existingStyle = document.getElementById('accessibility-high-contrast');
          if (existingStyle) {
            existingStyle.remove();
          }
        });
      };
      addHighContrastStyles();
    }

    // Reduced motion
    if (enableReducedMotion) {
      const addReducedMotionStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-reduced-motion';
        style.textContent = `
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `;
        document.head.appendChild(style);
        
        cleanupFunctions.push(() => {
          const existingStyle = document.getElementById('accessibility-reduced-motion');
          if (existingStyle) {
            existingStyle.remove();
          }
        });
      };
      addReducedMotionStyles();
    }

    // Focus management
    if (enableFocusManagement) {
      const addFocusStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-focus-styles';
        style.textContent = `
          *:focus {
            outline: 2px solid #00ffff !important;
            outline-offset: 2px !important;
          }
          .focus-visible {
            outline: 2px solid #00ffff !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(style);
        
        cleanupFunctions.push(() => {
          const existingStyle = document.getElementById('accessibility-focus-styles');
          if (existingStyle) {
            existingStyle.remove();
          }
        });
      };
      addFocusStyles();
    }

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content with Enter key
        if (event.key === 'Enter' && event.target instanceof HTMLAnchorElement) {
          const target = document.querySelector('#main-content');
          if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      cleanupFunctions.push(() => {
        document.removeEventListener('keydown', handleKeyDown);
      });
    }

    addSkipLink();

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement, enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
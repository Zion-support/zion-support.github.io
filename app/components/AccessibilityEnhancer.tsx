import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;

    const cleanupFunctions: (() => void)[] = [];

    // Enhanced keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      cleanupFunctions.push(() => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      });
    };

    // Enhanced focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return;

      // Add focus indicators
      const addFocusStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-focus-styles';
        style.textContent = `
          *:focus {
            outline: 2px solid #3b82f6 !important;
            outline-offset: 2px !important;
          }
          .focus-visible {
            outline: 2px solid #3b82f6 !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(style);
      };

      addFocusStyles();
      
      cleanupFunctions.push(() => {
        const existingStyle = document.getElementById('accessibility-focus-styles');
        if (existingStyle) {
          existingStyle.remove();
        }
      });
    };

    // High contrast mode
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return;

      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-high-contrast';
        style.textContent = `
          .high-contrast {
            filter: contrast(150%) brightness(110%);
          }
          .high-contrast * {
            border-color: currentColor !important;
          }
        `;
        document.head.appendChild(style);
      };

      addHighContrastStyles();
      
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      if (mediaQuery.matches) {
        document.documentElement.classList.add('high-contrast');
      }

      mediaQuery.addEventListener('change', handleContrastChange);
      
      cleanupFunctions.push(() => {
        mediaQuery.removeEventListener('change', handleContrastChange);
        document.documentElement.classList.remove('high-contrast');
        const existingStyle = document.getElementById('accessibility-high-contrast');
        if (existingStyle) {
          existingStyle.remove();
        }
      });
    };

    // Reduced motion support
    const enhanceReducedMotion = () => {
      if (!enableReducedMotion) return;

      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      if (mediaQuery.matches) {
        document.documentElement.classList.add('reduce-motion');
      }

      mediaQuery.addEventListener('change', handleMotionChange);
      
      cleanupFunctions.push(() => {
        mediaQuery.removeEventListener('change', handleMotionChange);
        document.documentElement.classList.remove('reduce-motion');
      });
    };

    // Initialize all enhancements
    enhanceFocusManagement();
    enhanceKeyboardNavigation();
    enhanceHighContrast();
    enhanceReducedMotion();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceFocusManagement();
      enhanceKeyboardNavigation();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    cleanupFunctions.push(() => {
      observer.disconnect();
    });

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

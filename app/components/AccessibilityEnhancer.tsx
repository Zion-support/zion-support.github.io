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
      skipLink.style.top = '0';
      skipLink.style.zIndex = '9999';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '16px';
        skipLink.style.top = '16px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
        skipLink.style.top = '0';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      return () => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      };
    };

    // High contrast mode
    if (enableHighContrast) {
      const applyHighContrast = () => {
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
        
        return () => {
          const existingStyle = document.getElementById('accessibility-high-contrast');
          if (existingStyle) {
            existingStyle.remove();
          }
        };
      };
      
      cleanupFunctions.push(applyHighContrast());
    }

    // Reduced motion support
    if (enableReducedMotion) {
      const applyReducedMotion = () => {
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
        
        return () => {
          const existingStyle = document.getElementById('accessibility-reduced-motion');
          if (existingStyle) {
            existingStyle.remove();
          }
        };
      };
      
      cleanupFunctions.push(applyReducedMotion());
    }

    // Focus management
    if (enableFocusManagement) {
      const setupFocusManagement = () => {
        let lastFocusedElement: HTMLElement | null = null;
        
        const handleFocusIn = (event: FocusEvent) => {
          lastFocusedElement = event.target as HTMLElement;
        };
        
        const handleFocusOut = (event: FocusEvent) => {
          const target = event.target as HTMLElement;
          if (target && !target.contains(document.activeElement)) {
            lastFocusedElement = target;
          }
        };
        
        document.addEventListener('focusin', handleFocusIn);
        document.addEventListener('focusout', handleFocusOut);
        
        return () => {
          document.removeEventListener('focusin', handleFocusIn);
          document.removeEventListener('focusout', handleFocusOut);
        };
      };
      
      cleanupFunctions.push(setupFocusManagement());
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const setupKeyboardNavigation = () => {
        const handleKeyDown = (event: KeyboardEvent) => {
          // Skip to main content with Alt + M
          if (event.altKey && event.key === 'm') {
            event.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
              mainContent.focus();
              mainContent.scrollIntoView({ behavior: 'smooth' });
            }
          }
          
          // Skip to navigation with Alt + N
          if (event.altKey && event.key === 'n') {
            event.preventDefault();
            const navigation = document.querySelector('nav');
            if (navigation) {
              const firstFocusable = navigation.querySelector('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
              if (firstFocusable) {
                firstFocusable.focus();
              }
            }
          }
        };
        
        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      };
      
      cleanupFunctions.push(setupKeyboardNavigation());
    }

    // Add skip link
    cleanupFunctions.push(addSkipLink());

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement, enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
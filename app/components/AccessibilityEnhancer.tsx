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
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #06b6d4;
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
      
      return () => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      };
    };

    // High contrast mode
    if (enableHighContrast) {
      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-high-contrast';
        style.textContent = `
          @media (prefers-contrast: high) {
            * {
              background-color: white !important;
              color: black !important;
              border-color: black !important;
            }
            .bg-gradient-to-br {
              background: white !important;
            }
            .text-white {
              color: black !important;
            }
            .text-gray-300 {
              color: black !important;
            }
            .border-white\\/20 {
              border-color: black !important;
            }
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
      
      cleanupFunctions.push(addHighContrastStyles());
    }

    // Reduced motion support
    if (enableReducedMotion) {
      const addReducedMotionStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-reduced-motion';
        style.textContent = `
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
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
      
      cleanupFunctions.push(addReducedMotionStyles());
    }

    // Focus management
    if (enableFocusManagement) {
      const setupFocusManagement = () => {
        let focusableElements: HTMLElement[] = [];
        
        const updateFocusableElements = () => {
          focusableElements = Array.from(
            document.querySelectorAll(
              'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
            )
          ) as HTMLElement[];
        };
        
        const trapFocus = (e: KeyboardEvent) => {
          if (e.key !== 'Tab') return;
          
          updateFocusableElements();
          if (focusableElements.length === 0) return;
          
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        };
        
        document.addEventListener('keydown', trapFocus);
        updateFocusableElements();
        
        return () => {
          document.removeEventListener('keydown', trapFocus);
        };
      };
      
      cleanupFunctions.push(setupFocusManagement());
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const setupKeyboardNavigation = () => {
        const handleKeyDown = (e: KeyboardEvent) => {
          // Escape key to close modals/dropdowns
          if (e.key === 'Escape') {
            const activeElement = document.activeElement as HTMLElement;
            if (activeElement && activeElement.blur) {
              activeElement.blur();
            }
          }
          
          // Enter key to activate buttons and links
          if (e.key === 'Enter' || e.key === ' ') {
            const target = e.target as HTMLElement;
            if (target && (target.tagName === 'BUTTON' || target.tagName === 'A')) {
              e.preventDefault();
              target.click();
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
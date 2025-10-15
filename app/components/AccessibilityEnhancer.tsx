<<<<<<< HEAD
'use client';
<<<<<<< HEAD

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
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.top = 'auto';
      skipLink.style.width = '1px';
      skipLink.style.height = '1px';
      skipLink.style.overflow = 'hidden';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '16px';
        skipLink.style.top = '16px';
        skipLink.style.width = 'auto';
        skipLink.style.height = 'auto';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
        skipLink.style.top = 'auto';
        skipLink.style.width = '1px';
        skipLink.style.height = '1px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);
      
      cleanupFunctions.push(() => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      });
    };

    // High contrast mode
    const setupHighContrast = () => {
      if (!enableHighContrast) return;

      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      // Initial check
      if (mediaQuery.matches) {
        document.documentElement.classList.add('high-contrast');
      }

      mediaQuery.addEventListener('change', handleContrastChange);
      
      cleanupFunctions.push(() => {
        mediaQuery.removeEventListener('change', handleContrastChange);
        document.documentElement.classList.remove('high-contrast');
      });
    };

    // Reduced motion
    const setupReducedMotion = () => {
      if (!enableReducedMotion) return;

      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      // Initial check
      if (mediaQuery.matches) {
        document.documentElement.classList.add('reduce-motion');
      }

      mediaQuery.addEventListener('change', handleMotionChange);
      
      cleanupFunctions.push(() => {
        mediaQuery.removeEventListener('change', handleMotionChange);
        document.documentElement.classList.remove('reduce-motion');
      });
    };

    // Focus management
    const setupFocusManagement = () => {
      if (!enableFocusManagement) return;

      let focusableElements: HTMLElement[] = [];
      let currentFocusIndex = -1;

      const updateFocusableElements = () => {
        focusableElements = Array.from(
          document.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el): el is HTMLElement => {
          const element = el as HTMLElement;
          return !element.disabled && 
                 !element.hasAttribute('aria-hidden') && 
                 element.offsetParent !== null;
        });
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          updateFocusableElements();
          
          if (e.shiftKey) {
            // Shift + Tab (backward)
            if (currentFocusIndex <= 0) {
              currentFocusIndex = focusableElements.length - 1;
            } else {
              currentFocusIndex--;
            }
          } else {
            // Tab (forward)
            if (currentFocusIndex >= focusableElements.length - 1) {
              currentFocusIndex = 0;
            } else {
              currentFocusIndex++;
            }
          }

          e.preventDefault();
          focusableElements[currentFocusIndex]?.focus();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      cleanupFunctions.push(() => {
        document.removeEventListener('keydown', handleKeyDown);
      });
    };

    // Keyboard navigation
    const setupKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
            activeElement.click();
          }
        }

        // Enter and Space for custom interactive elements
        if ((e.key === 'Enter' || e.key === ' ') && 
            (e.target as HTMLElement).getAttribute('role') === 'button') {
          e.preventDefault();
          (e.target as HTMLElement).click();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      cleanupFunctions.push(() => {
        document.removeEventListener('keydown', handleKeyDown);
      });
    };

    // Initialize all accessibility features
    addSkipLink();
    setupHighContrast();
    setupReducedMotion();
    setupFocusManagement();
    setupKeyboardNavigation();

=======
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    if (enableScreenReaderSupport) {
      // Add screen reader support
      document.body.setAttribute('aria-live', 'polite');
    }

    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
    }

    if (enableFocusManagement) {
      // Manage focus for better accessibility
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.setAttribute('tabindex', '0');
      });
    }

    return () => {
      if (enableKeyboardNavigation) {
        document.removeEventListener('keydown', handleKeyboardNavigation);
      }
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    // Handle keyboard navigation
    if (event.key === 'Tab') {
      // Ensure proper tab order
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  return <>{children}</>;
};

export default AccessibilityEnhancer;
>>>>>>> main
=======
<<<<<<< HEAD
import React, { useEffect } from 'react;'
const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');''
      skipLink.href = '#main-content;'
      skipLink.textContent = 'Skip to main content;'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50;'
      skipLink.style.zIndex = '9999;'
      document.body.insertBefore(skipLink, document.body.firstChild);
    };
    // High contrast mode toggle
    const addHighContrastToggle = () => {
      const toggle = document.createElement('button');''
      toggle.textContent = 'Toggle High Contrast;'
      toggle.className = 'fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded z-50;'
      toggle.onclick = () => {
        document.body.classList.toggle('high-contrast');''
      };
    };
    // Focus management
    const enhanceFocus = () => {
      // Add focus indicators
      const style = document.createElement('style');''
      style.textContent = `
        *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
        .high-contrast {}
          filter: contrast(150%) brightness(110%);}
        }
      `;
      document.head.appendChild(style);
    };
    // Keyboard navigation enhancement
    const enhanceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {''
        if (e.key === 'Tab') {''
          document.body.classList.add('keyboard-navigation');''
        }
      });
      document.addEventListener('mousedown', () => {''
        document.body.classList.remove('keyboard-navigation');''
      });
    };
    // Initialize accessibility features
    addSkipLink();
    addHighContrastToggle();
    enhanceFocus();
    enhanceKeyboardNavigation();
>>>>>>> main
    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');'"'"
      if (skipLink) {
        skipLink.remove();
      }
      const toggle = document.querySelector('button[onclick*="high-contrast"]');'"'"
      if (toggle) {
        toggle.remove();
      }
    };
<<<<<<< HEAD
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement, enableKeyboardNavigation]);

  return (
    <>
      {children}
      <style jsx global>{`
        /* High contrast mode styles */
        .high-contrast {
          --text-color: #ffffff;
          --bg-color: #000000;
          --border-color: #ffffff;
          --accent-color: #ffff00;
        }

        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }

        .high-contrast button,
        .high-contrast a {
          border: 2px solid var(--border-color) !important;
          padding: 8px 16px !important;
        }

        /* Reduced motion styles */
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }

        /* Focus styles */
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* Screen reader only content */
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        .sr-only:focus {
          position: static !important;
          width: auto !important;
          height: auto !important;
          padding: 0.5rem !important;
          margin: 0 !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
        }

        /* Skip link styles */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }

        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
=======
  }, []);
  return null;
};
export default AccessibilityEnhancer;
=======
import React from 'react';;";
;
interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}
;
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ ';',";
  className = '',;";";";
  children;
}) => {
  return (
    <div: className ={`accessibilityenhancer ${className}`}>;
      {children}
    </div>;
  );
};
;
export default AccessibilityEnhancer;';';";
>>>>>>> main
>>>>>>> main

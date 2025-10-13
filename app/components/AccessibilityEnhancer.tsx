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
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '16px';
        skipLink.style.top = '16px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);
      
      cleanupFunctions.push(() => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      });
    };

    // High contrast mode
    if (enableHighContrast) {
      const applyHighContrast = () => {
        document.documentElement.classList.add('high-contrast');
      };
      
      const removeHighContrast = () => {
        document.documentElement.classList.remove('high-contrast');
      };

      // Check for system preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        applyHighContrast();
      }

      // Listen for changes
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          applyHighContrast();
        } else {
          removeHighContrast();
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      
      cleanupFunctions.push(() => {
        mediaQuery.removeEventListener('change', handleChange);
        removeHighContrast();
      });
    }

    // Reduced motion
    if (enableReducedMotion) {
      const applyReducedMotion = () => {
        document.documentElement.classList.add('reduced-motion');
      };
      
      const removeReducedMotion = () => {
        document.documentElement.classList.remove('reduced-motion');
      };

      // Check for system preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        applyReducedMotion();
      }

      // Listen for changes
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          applyReducedMotion();
        } else {
          removeReducedMotion();
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      
      cleanupFunctions.push(() => {
        mediaQuery.removeEventListener('change', handleChange);
        removeReducedMotion();
      });
    }

    // Focus management
    if (enableFocusManagement) {
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableElement = focusableElements[0] as HTMLElement;
        const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
        
        cleanupFunctions.push(() => {
          element.removeEventListener('keydown', handleTabKey);
        });
      };

      // Apply focus trapping to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"], [role="listbox"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const activeModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          if (activeModal) {
            const closeButton = activeModal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }

        // Arrow keys for menu navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const activeMenu = document.querySelector('[role="menu"]:focus-within');
          if (activeMenu) {
            e.preventDefault();
            const menuItems = Array.from(activeMenu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
            const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);
            
            if (e.key === 'ArrowDown') {
              const nextIndex = (currentIndex + 1) % menuItems.length;
              menuItems[nextIndex]?.focus();
            } else {
              const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
              menuItems[prevIndex]?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      cleanupFunctions.push(() => {
        document.removeEventListener('keydown', handleKeyDown);
      });
    }

    // Add skip link
    addSkipLink();

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement, enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
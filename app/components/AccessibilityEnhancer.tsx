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
      
      cleanupFunctions.push(() => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      });
    };

    // High contrast mode
    if (enableHighContrast) {
      const applyHighContrast = () => {
        document.documentElement.style.setProperty('--contrast-mode', 'high');
        document.body.classList.add('high-contrast');
      };
      
      applyHighContrast();
      cleanupFunctions.push(() => {
        document.documentElement.style.removeProperty('--contrast-mode');
        document.body.classList.remove('high-contrast');
      });
    }

    // Reduced motion
    if (enableReducedMotion) {
      const applyReducedMotion = () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
          document.documentElement.style.setProperty('--motion-reduce', '1');
          document.body.classList.add('reduce-motion');
        }
      };
      
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', applyReducedMotion);
      applyReducedMotion();
      
      cleanupFunctions.push(() => {
        mediaQuery.removeEventListener('change', applyReducedMotion);
        document.documentElement.style.removeProperty('--motion-reduce');
        document.body.classList.remove('reduce-motion');
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

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyboardNavigation = (e: KeyboardEvent) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          if (openModal) {
            const closeButton = openModal.querySelector('[aria-label="Close"], [data-dismiss="modal"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }

        // Arrow keys for menu navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const activeElement = document.activeElement;
          if (activeElement && activeElement.getAttribute('role') === 'menuitem') {
            e.preventDefault();
            const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
            const currentIndex = menuItems.indexOf(activeElement);
            const nextIndex = e.key === 'ArrowDown' 
              ? (currentIndex + 1) % menuItems.length
              : (currentIndex - 1 + menuItems.length) % menuItems.length;
            (menuItems[nextIndex] as HTMLElement).focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyboardNavigation);
      cleanupFunctions.push(() => {
        document.removeEventListener('keydown', handleKeyboardNavigation);
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
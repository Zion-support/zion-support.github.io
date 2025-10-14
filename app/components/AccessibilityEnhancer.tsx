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
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      return () => {
        skipLink.remove();
      };
    };

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return () => {};

      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
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
          }
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      // Apply focus management to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      modals.forEach(modal => {
        const cleanup = trapFocus(modal as HTMLElement);
        cleanupFunctions.push(cleanup);
      });

      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // Keyboard navigation
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return () => {};

      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key handling
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement?.closest('[role="dialog"]')) {
            const closeButton = activeElement.closest('[role="dialog"]')?.querySelector('[aria-label="Close"]') as HTMLElement;
            closeButton?.click();
          }
        }

        // Arrow key navigation for menus
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const menu = (e.target as HTMLElement).closest('[role="menu"]');
          if (menu) {
            e.preventDefault();
            const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
            const currentIndex = items.indexOf(e.target as HTMLElement);
            
            if (e.key === 'ArrowDown') {
              const nextIndex = (currentIndex + 1) % items.length;
              items[nextIndex]?.focus();
            } else {
              const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
              items[prevIndex]?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    };

    // High contrast mode
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return () => {};

      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

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

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery as any);
      addHighContrastStyles();

      return () => {
        const existingStyle = document.getElementById('accessibility-high-contrast');
        existingStyle?.remove();
        mediaQuery.removeEventListener('change', handleContrastChange);
      };
    };

    // Reduced motion
    const enhanceReducedMotion = () => {
      if (!enableReducedMotion) return () => {};

      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduce-motion');
        } else {
          document.body.classList.remove('reduce-motion');
        }
      };

      const addReducedMotionStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-reduced-motion';
        style.textContent = `
          .reduce-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `;
        document.head.appendChild(style);
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery as any);
      addReducedMotionStyles();

      return () => {
        const existingStyle = document.getElementById('accessibility-reduced-motion');
        existingStyle?.remove();
        mediaQuery.removeEventListener('change', handleMotionChange);
      };
    };

    // Initialize all enhancements
    cleanupFunctions.push(addSkipLink());
    cleanupFunctions.push(enhanceFocusManagement());
    cleanupFunctions.push(enhanceKeyboardNavigation());
    cleanupFunctions.push(enhanceHighContrast());
    cleanupFunctions.push(enhanceReducedMotion());

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceFocusManagement();
      enhanceKeyboardNavigation();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    cleanupFunctions.push(() => observer.disconnect());

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement, enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
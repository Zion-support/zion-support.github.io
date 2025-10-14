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
  enableKeyboardNavigation = true,
}) => {
  useEffect(() => {
    // Apply high contrast mode
    if (enableHighContrast) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
    }

    // Apply reduced motion preferences
    if (enableReducedMotion) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
    }

    // Focus management
    if (enableFocusManagement) {
      // Trap focus within modals and dialogs
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

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      // Skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Enhanced keyboard navigation for custom components
      const handleKeyDown = (e: KeyboardEvent) => {
        const target = e.target as HTMLElement;
        
        // Arrow key navigation for custom components
        if (target.getAttribute('role') === 'menuitem' || target.classList.contains('menu-item')) {
          const menuItems = Array.from(document.querySelectorAll('[role="menuitem"], .menu-item'));
          const currentIndex = menuItems.indexOf(target);
          
          if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % menuItems.length;
            (menuItems[nextIndex] as HTMLElement).focus();
          } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
            (menuItems[prevIndex] as HTMLElement).focus();
          }
        }

        // Enter and Space key activation
        if ((e.key === 'Enter' || e.key === ' ') && target.getAttribute('role') === 'button') {
          e.preventDefault();
          target.click();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        skipLink.remove();
      };
    }
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement, enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
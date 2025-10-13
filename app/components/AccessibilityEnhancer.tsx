import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;

    // Enhanced focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        .focus-visible {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      // Enhance focus trap
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
        return () => element.removeEventListener('keydown', handleTabKey);
      };

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

      // Initialize all enhancements
      enhanceFocusManagement()
      enhanceKeyboardNavigation()

      // Re-run enhancements when DOM changes
      const observer = new MutationObserver(() => {
        enhanceFocusManagement()
        enhanceKeyboardNavigation()
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['role', 'aria-expanded', 'aria-hidden']
      });

      return () => {
        observer.disconnect();
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // Enhanced keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Enhance button interactions
      const buttons = document.querySelectorAll('button, [role="button"]');
      buttons.forEach(button => {
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (button as HTMLElement).click();
          }
        });
      });

      // Add ARIA labels to interactive elements
      const interactiveElements = document.querySelectorAll('button, input, select, textarea, a');
      interactiveElements.forEach(element => {
        if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
          const role = element.getAttribute('role') || element.tagName.toLowerCase();
          element.setAttribute('aria-label', `${role} element`);
        }
      });
    };

    // Initialize accessibility enhancements
    const cleanup = enhanceFocusManagement();

    return cleanup;
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
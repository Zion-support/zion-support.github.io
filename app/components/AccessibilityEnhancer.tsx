import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = 'position: absolute; left: -9999px; z-index: 999;';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhanced focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return;

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      // Trap focus in modals
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
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
      modals.forEach(trapFocus);
    };

    // High contrast mode
    const enableHighContrastMode = () => {
      if (!enableHighContrast) return;

      const highContrastStyle = document.createElement('style');
      highContrastStyle.textContent = `
        @media (prefers-contrast: high) {
          * {
            background-color: white !important;
            color: black !important;
            border-color: black !important;
          }
        }
      `;
      document.head.appendChild(highContrastStyle);
    };

    // Screen reader enhancements
    const enhanceScreenReaderSupport = () => {
      if (!enableScreenReader) return;

      // Add ARIA landmarks
      const addLandmarks = () => {
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        const nav = document.querySelector('nav');
        if (nav && !nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }

        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      };

      // Add live regions for dynamic content
      const addLiveRegions = () => {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
      };

      addLandmarks();
      addLiveRegions();
    };

    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;

      // Add keyboard shortcuts
      const addKeyboardShortcuts = () => {
        document.addEventListener('keydown', (e) => {
          // Alt + M: Skip to main content
          if (e.altKey && e.key === 'm') {
            e.preventDefault();
            const main = document.querySelector('#main-content');
            if (main) {
              (main as HTMLElement).focus();
              main.scrollIntoView();
            }
          }

          // Alt + N: Skip to navigation
          if (e.altKey && e.key === 'n') {
            e.preventDefault();
            const nav = document.querySelector('nav');
            if (nav) {
              const firstLink = nav.querySelector('a');
              if (firstLink) {
                (firstLink as HTMLElement).focus();
              }
            }
          }
        });
      };

      addKeyboardShortcuts();
    };

    // Initialize all enhancements
    addSkipLink();
    enhanceFocusManagement();
    enableHighContrastMode();
    enhanceScreenReaderSupport();
    enhanceKeyboardNavigation();

    // Cleanup function
    return () => {
      // Remove any added styles or event listeners if needed
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

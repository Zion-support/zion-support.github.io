import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Initialize accessibility enhancements
    const initAccessibility = () => {
      // Add skip links
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <a href="#navigation" class="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to navigation
        </a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('id', 'main-content');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('id', 'navigation');
      }

      // Add focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (element: HTMLElement) => {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        element.addEventListener('keydown', (e) => {
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
        });
      };

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      modals.forEach(trapFocus);

      // Add keyboard navigation for dropdowns
      const dropdowns = document.querySelectorAll('[aria-expanded]');
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
            (dropdown as HTMLElement).blur();
          }
        });
      });

      // Add high contrast mode support
      const addHighContrastSupport = () => {
        const style = document.createElement('style');
        style.textContent = `
          @media (prefers-contrast: high) {
            .bg-slate-900 { background-color: #000000 !important; }
            .text-gray-300 { color: #ffffff !important; }
            .border-cyan-500 { border-color: #00ffff !important; }
          }
        `;
        document.head.appendChild(style);
      };

      addHighContrastSupport();

      // Add reduced motion support
      const addReducedMotionSupport = () => {
        const style = document.createElement('style');
        style.textContent = `
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `;
        document.head.appendChild(style);
      };

      addReducedMotionSupport();

      // Return cleanup function
      return () => {
        // Cleanup function
        const skipLinksElement = document.querySelector('div:first-child');
        if (skipLinksElement && skipLinksElement.innerHTML.includes('Skip to main content')) {
          skipLinksElement.remove();
        }
      };
    };

    const cleanup = initAccessibility();

    // Cleanup on unmount
    return cleanup;
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
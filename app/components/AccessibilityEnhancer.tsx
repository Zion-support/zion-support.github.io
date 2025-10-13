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
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50';
      skipLink.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `;
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }

        // Tab navigation improvements
        if (e.key === 'Tab') {
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    };

    // Screen reader enhancements
    const enhanceScreenReader = () => {
      if (!enableScreenReader) return;

      // Add ARIA landmarks
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

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          heading.setAttribute('id', `heading-${index}`);
        }
      });
    };

    // High contrast mode
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return;

      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }

      // Listen for changes in contrast preference
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    };

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return;

      // Focus visible elements
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });

        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    // Initialize all enhancements
    addSkipLink();
    const cleanupKeyboard = enhanceKeyboardNavigation();
    enhanceScreenReader();
    const cleanupContrast = enhanceHighContrast();
    enhanceFocusManagement();

    // Cleanup function
    return () => {
      if (cleanupKeyboard) cleanupKeyboard();
      if (cleanupContrast) cleanupContrast();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

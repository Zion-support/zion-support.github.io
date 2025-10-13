import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false
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

      // Handle keyboard navigation
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content with Enter key
        if (e.key === 'Enter' && e.target === document.querySelector('a[href="#main-content"]')) {
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
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

      // Add live regions for dynamic content
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announcePageChange = (pageTitle: string) => {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = `Navigated to ${pageTitle}`;
        }
      };

      // Listen for route changes (if using React Router)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        announcePageChange(document.title);
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        announcePageChange(document.title);
      };

      return () => {
        history.pushState = originalPushState;
        history.replaceState = originalReplaceState;
      };
    };

    // High contrast mode
    const enableHighContrastMode = () => {
      if (!enableHighContrast) return;

      const style = document.createElement('style');
      style.textContent = `
        * {
          background-color: white !important;
          color: black !important;
        }
        *:hover {
          background-color: #f0f0f0 !important;
        }
        a {
          text-decoration: underline !important;
        }
        button, input, select, textarea {
          border: 2px solid black !important;
        }
      `;
      style.id = 'high-contrast-style';
      document.head.appendChild(style);

      return () => {
        const existingStyle = document.getElementById('high-contrast-style');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    };

    // Initialize enhancements
    addSkipLink();
    const cleanupKeyboard = enhanceKeyboardNavigation();
    const cleanupScreenReader = enhanceScreenReader();
    const cleanupHighContrast = enableHighContrastMode();

    // Cleanup function
    return () => {
      if (cleanupKeyboard) cleanupKeyboard();
      if (cleanupScreenReader) cleanupScreenReader();
      if (cleanupHighContrast) cleanupHighContrast();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
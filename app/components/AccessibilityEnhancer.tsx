import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addKeyboardNavigation = () => {
      // Add keyboard navigation support
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          // Ensure focus is visible
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        // Remove keyboard navigation class when using mouse
        document.body.classList.remove('keyboard-navigation');
      });
    };

    const addSkipLinks = () => {
      // Add skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const enhanceFormLabels = () => {
      // Ensure all form inputs have proper labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = input.previousElementSibling;
          if (label && label.tagName === 'LABEL') {
            input.setAttribute('aria-labelledby', label.id || 'label-' + Math.random().toString(36).substr(2, 9));
            if (!label.id) {
              label.id = input.getAttribute('aria-labelledby') || '';
            }
          }
        }
      });
    };

    const addAriaLandmarks = () => {
      // Add ARIA landmarks to improve navigation
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

    const enhanceColorContrast = () => {
      // Add high contrast mode support
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .text-gray-300 { color: #ffffff !important; }
          .text-gray-400 { color: #e5e7eb !important; }
          .bg-white\/10 { background-color: rgba(255, 255, 255, 0.2) !important; }
        }
      `;
      document.head.appendChild(style);
    };

    const addFocusManagement = () => {
      // Improve focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          // Close any open modals or dropdowns
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      });
    };

    // Initialize accessibility enhancements
    addKeyboardNavigation();
    addSkipLinks();
    enhanceFormLabels();
    addAriaLandmarks();
    enhanceColorContrast();
    addFocusManagement();

    // Cleanup function
    return () => {
      // Remove event listeners and cleanup
      document.body.classList.remove('keyboard-navigation');
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Focus management for keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation with Alt + N
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a');
          if (firstLink) {
            firstLink.focus();
          }
        }
      }
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('id', 'main-content');
        main.setAttribute('tabindex', '-1');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          const inputElement = input as HTMLInputElement;
          if (!inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`);
            if (label) {
              inputElement.setAttribute('aria-labelledby', label.id || `label-${inputElement.id}`);
            }
          }
        });
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .text-gray-600 { color: #000 !important; }
          .text-gray-500 { color: #333 !important; }
          .bg-gray-50 { background-color: #fff !important; }
          .border-gray-200 { border-color: #000 !important; }
        }
      `;
      document.head.appendChild(style);
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize accessibility enhancements
    addSkipLink();
    addAriaLandmarks();
    enhanceFormAccessibility();
    addHighContrastSupport();
    addReducedMotionSupport();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
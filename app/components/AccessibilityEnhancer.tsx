import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add ARIA landmarks
    const addAriaLandmarks = () => {
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

    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`);
        }
      });
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white focus:underline';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      const handleFocus = (e: FocusEvent) => {
        const target = e.target as HTMLElement;
        target.classList.add('focus-visible');
      };

      const handleBlur = (e: FocusEvent) => {
        const target = e.target as HTMLElement;
        target.classList.remove('focus-visible');
      };

      focusableElements.forEach(element => {
        element.addEventListener('focus', handleFocus);
        element.addEventListener('blur', handleBlur);
      });

      return () => {
        focusableElements.forEach(element => {
          element.removeEventListener('focus', handleFocus);
          element.removeEventListener('blur', handleBlur);
        });
      };
    };

    // Initialize accessibility enhancements
    addAriaLandmarks();
    addAltText();
    addSkipLinks();
    const cleanup = enhanceFocusManagement();

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
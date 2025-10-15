import { useEffect } from 'react';

export default function AccessibilityEnhancer() {
  useEffect(() => {
    // Accessibility enhancements
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
      }
    };

    enhanceAccessibility();
  }, []);

  return null;
}

import { useEffect } from 'react';

const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Add ARIA landmarks
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add focus management for modals and dropdowns
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add high contrast mode support
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', handleContrastChange);
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      prefersHighContrast.removeEventListener('change', handleContrastChange);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;

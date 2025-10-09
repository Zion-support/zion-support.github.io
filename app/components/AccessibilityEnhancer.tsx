import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.top = 'auto';
    skipLink.style.width = '1px';
    skipLink.style.height = '1px';
    skipLink.style.overflow = 'hidden';
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.left = '16px';
      skipLink.style.top = '16px';
      skipLink.style.width = 'auto';
      skipLink.style.height = 'auto';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.left = '-9999px';
      skipLink.style.top = 'auto';
      skipLink.style.width = '1px';
      skipLink.style.height = '1px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('id', 'main-content');
    }

    // Add focus management for modals and dropdowns
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
        openDropdowns.forEach(dropdown => {
          dropdown.setAttribute('aria-expanded', 'false');
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add high contrast mode support
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const updateHighContrast = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', updateHighContrast);
    updateHighContrast({ matches: prefersHighContrast.matches } as MediaQueryListEvent);

    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    prefersReducedMotion.addEventListener('change', updateReducedMotion);
    updateReducedMotion({ matches: prefersReducedMotion.matches } as MediaQueryListEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      prefersHighContrast.removeEventListener('change', updateHighContrast);
      prefersReducedMotion.removeEventListener('change', updateReducedMotion);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
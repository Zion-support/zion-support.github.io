'use client';
import React, { useEffect } from 'react';

const EnhancedAccessibility: React.FC = () => {
  useEffect(() => {
    // Add skip link if it doesn't exist
    const addSkipLink = () => {
      const existingSkipLink = document.querySelector('a[href="#main-content"]');
      if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900';
        skipLink.textContent = 'Skip to main content';
        skipLink.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById('main-content');
          if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

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

    // Initialize accessibility features
    addSkipLink();
    addAriaLandmarks();

    return () => {
      // Cleanup
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default EnhancedAccessibility;
'use client';
import React, { useEffect } from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addAccessibilityFeatures = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md';
      skipLink.onclick = (e) => {
        e.preventDefault();
        const main = document.querySelector('#main-content');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      };
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add focus management
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        if (!element.getAttribute('tabindex')) {
          element.setAttribute('tabindex', '0');
        }
      });

      // Add keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    addAccessibilityFeatures();

    // Cleanup
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;
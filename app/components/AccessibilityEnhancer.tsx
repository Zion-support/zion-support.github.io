'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50 font-medium transition-all duration-200 hover:bg-cyan-700';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('id', 'main-content');
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

    // Enhance focus management
    const enhanceFocusManagement = () => {
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach(element => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).classList.add('focus-visible');
        });

        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).classList.remove('focus-visible');
        });
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .bg-slate-900 { background-color: #000000 !important; }
          .text-white { color: #ffffff !important; }
          .text-gray-300 { color: #ffffff !important; }
          .border-white\\/10 { border-color: #ffffff !important; }
        }
      `;
      document.head.appendChild(style);
    };

    addSkipLinks();
    addAriaLandmarks();
    enhanceFocusManagement();
    addHighContrastSupport();
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
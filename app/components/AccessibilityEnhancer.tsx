'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element, index) => {
        element.setAttribute('tabindex', index.toString());
      });
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Enhance color contrast
    const enhanceColorContrast = () => {
      const style = document.createElement('style');
      style.textContent = `
        .text-gray-300 {
          color: #d1d5db !important;
        }
        .text-gray-400 {
          color: #9ca3af !important;
        }
        .bg-slate-800 {
          background-color: #1e293b !important;
        }
        .bg-slate-900 {
          background-color: #0f172a !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Initialize accessibility enhancements
    enhanceKeyboardNavigation();
    addAriaLabels();
    enhanceColorContrast();
    addSkipLinks();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
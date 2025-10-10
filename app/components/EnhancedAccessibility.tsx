'use client';
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Enhanced accessibility features
    const addSkipLinks = () => {
      // Add skip links for keyboard navigation
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const enhanceFocusManagement = () => {
      // Enhance focus management
      const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      
      focusableElements.forEach((element) => {
        element.setAttribute('tabindex', '0');
      });
    };

    const addAriaLabels = () => {
      // Add ARIA labels where needed
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });
    };

    const addLandmarks = () => {
      // Add ARIA landmarks
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
      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }
    };

    const enhanceKeyboardNavigation = () => {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content with Tab
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }
        // Close dropdowns with Escape
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    };

    addSkipLinks();
    enhanceFocusManagement();
    addAriaLabels();
    addLandmarks();
    const cleanup = enhanceKeyboardNavigation();

    return () => {
      // Cleanup
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
      cleanup();
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;
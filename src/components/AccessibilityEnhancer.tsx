import React, { useEffect, memo } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = memo(({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = [
        { href: '#main-content', text: 'Skip to main content' },
        { href: '#navigation', text: 'Skip to navigation' },
        { href: '#footer', text: 'Skip to footer' }
      ];

      skipLinks.forEach(link => {
        const skipLink = document.createElement('a');
        skipLink.href = link.href;
        skipLink.textContent = link.text;
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      });
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        .focus-visible:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            dropdown.setAttribute('aria-expanded', 'false');
          });
        }
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .cyber-card {
            border: 2px solid #00ffff !important;
            background: rgba(0, 0, 0, 0.9) !important;
          }
          .neon-button {
            border: 2px solid #00ffff !important;
            background: transparent !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize accessibility enhancements
    addSkipLinks();
    enhanceFocusManagement();
    addAriaLabels();
    enhanceKeyboardNavigation();
    addHighContrastSupport();

    // Cleanup function
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  return <>{children}</>;
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;

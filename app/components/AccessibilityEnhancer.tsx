import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        .skip-link:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach((dropdown) => {
            (dropdown as HTMLElement).click();
          });
        }
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };
      
      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };
      
      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);
    };

    // Initialize all enhancements
    addSkipLinks();
    enhanceFocusManagement();
    addAriaLandmarks();
    enhanceKeyboardNavigation();
    addHighContrastSupport();
    addReducedMotionSupport();

    // Cleanup
    return () => {
      const skipLinks = document.querySelector('.skip-links');
      if (skipLinks) {
        skipLinks.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
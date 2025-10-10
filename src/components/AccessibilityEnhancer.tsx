import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip navigation link
    const addSkipNavigation = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50';
      skipLink.setAttribute('tabindex', '1');
      document.body.insertBefore(skipLink, document.body.firstChild);
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

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      // Handle Escape key for closing modals/dropdowns
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          // Close any open dropdowns or modals
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            dropdown.setAttribute('aria-expanded', 'false');
          });
        }
      });

      // Handle Enter and Space keys for interactive elements
      document.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target instanceof HTMLElement) {
          const target = e.target;
          if (target.getAttribute('role') === 'button' || target.tagName === 'BUTTON') {
            e.preventDefault();
            target.click();
          }
        }
      });
    };

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      // Create live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    // Initialize accessibility enhancements
    addSkipNavigation();
    addAriaLandmarks();
    enhanceFocusManagement();
    addKeyboardNavigation();
    addScreenReaderSupport();

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const updateContrast = () => {
        if (prefersHighContrast.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      updateContrast();
      prefersHighContrast.addEventListener('change', updateContrast);
    };

    addHighContrastSupport();

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const updateMotion = () => {
        if (prefersReducedMotion.matches) {
          document.body.classList.add('reduce-motion');
        } else {
          document.body.classList.remove('reduce-motion');
        }
      };

      updateMotion();
      prefersReducedMotion.addEventListener('change', updateMotion);
    };

    addReducedMotionSupport();

  }, []);

  return null; // This component doesn't render anything visible
};

export default AccessibilityEnhancer;
import { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.zIndex = '9999';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '16px';
        skipLink.style.top = '16px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add ARIA landmarks
    const addLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('id')) {
        main.id = 'main-content';
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
        footer.setAttribute('aria-label', 'Site footer');
      }
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        /* Skip link styles */
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
        
        .sr-only.focus:not-sr-only {
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

    // Add high contrast mode detection
    const addHighContrastSupport = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const updateContrast = () => {
        if (prefersHighContrast.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      prefersHighContrast.addEventListener('change', updateContrast);
      updateContrast();
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const updateMotion = () => {
        if (prefersReducedMotion.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      prefersReducedMotion.addEventListener('change', updateMotion);
      updateMotion();
    };

    // Initialize all accessibility enhancements
    addSkipLink();
    addLandmarks();
    enhanceFocusManagement();
    addKeyboardNavigation();
    addHighContrastSupport();
    addReducedMotionSupport();

    // Re-run landmarks after navigation
    const observer = new MutationObserver(() => {
      addLandmarks();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;

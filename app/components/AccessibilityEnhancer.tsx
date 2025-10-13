import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;

    // Initialize accessibility features
    const initAccessibility = () => {
      // Add skip navigation link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #00ffff;
        color: #000;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      // Add skip link to body if it doesn't exist
      if (!document.querySelector('a[href="#main-content"]')) {
        document.body.insertBefore(skipLink, document.body.firstChild);
      }

      // Enhance focus management
      const enhanceFocusManagement = () => {
        // Add focus indicators to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
        interactiveElements.forEach(element => {
          element.addEventListener('focus', () => {
            element.classList.add('focus-visible');
          });
          element.addEventListener('blur', () => {
            element.classList.remove('focus-visible');
          });
        });
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

      // Enhance keyboard navigation
      const enhanceKeyboardNavigation = () => {
        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
          // Alt + M: Focus main content
          if (e.altKey && e.key === 'm') {
            e.preventDefault();
            const main = document.querySelector('main');
            if (main) {
              main.focus();
              main.scrollIntoView({ behavior: 'smooth' });
            }
          }

          // Alt + N: Focus navigation
          if (e.altKey && e.key === 'n') {
            e.preventDefault();
            const nav = document.querySelector('nav');
            if (nav) {
              const firstLink = nav.querySelector('a');
              if (firstLink) {
                firstLink.focus();
              }
            }
          }

          // Alt + F: Focus footer
          if (e.altKey && e.key === 'f') {
            e.preventDefault();
            const footer = document.querySelector('footer');
            if (footer) {
              footer.focus();
              footer.scrollIntoView({ behavior: 'smooth' });
            }
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
            document.body.classList.add('reduce-motion');
          } else {
            document.body.classList.remove('reduce-motion');
          }
        };

        mediaQuery.addEventListener('change', handleMotionChange);
        handleMotionChange(mediaQuery);
      };

      // Initialize all accessibility features
      enhanceFocusManagement();
      addAriaLandmarks();
      enhanceKeyboardNavigation();
      addHighContrastSupport();
      addReducedMotionSupport();
    };

    // Run initialization
    initAccessibility();

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
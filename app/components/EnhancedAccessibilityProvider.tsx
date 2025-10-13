import React, { useEffect, useRef } from 'react';

interface EnhancedAccessibilityProviderProps {
  children: React.ReactNode;
}

const EnhancedAccessibilityProvider: React.FC<EnhancedAccessibilityProviderProps> = ({ children }) => {
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Focus management for keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && !event.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Escape key to close modals/overlays
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }
    };

    // Announce page changes to screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has loaded';
      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // High contrast mode detection
    const handleHighContrastChange = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    // Reduced motion detection
    const handleReducedMotionChange = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    // Initialize accessibility features
    announcePageChange();
    handleHighContrastChange();
    handleReducedMotionChange();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', handleHighContrastChange);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', handleReducedMotionChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.matchMedia('(prefers-contrast: high)').removeEventListener('change', handleHighContrastChange);
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  // Add ARIA landmarks
  useEffect(() => {
    const addAriaLandmarks = () => {
      // Add main landmark if not present
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      // Add navigation landmarks
      const navs = document.querySelectorAll('nav');
      navs.forEach((nav, index) => {
        if (!nav.getAttribute('aria-label')) {
          nav.setAttribute('aria-label', `Navigation ${index + 1}`);
        }
      });

      // Add banner landmark
      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      // Add contentinfo landmark
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      // Add complementary landmarks
      const asides = document.querySelectorAll('aside');
      asides.forEach((aside, index) => {
        if (!aside.getAttribute('aria-label')) {
          aside.setAttribute('aria-label', `Complementary content ${index + 1}`);
        }
      });
    };

    // Run after DOM updates
    const timeoutId = setTimeout(addAriaLandmarks, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        ref={skipLinkRef}
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true" id="announcements"></div>

      {children}
    </>
  );
};

export default EnhancedAccessibilityProvider;
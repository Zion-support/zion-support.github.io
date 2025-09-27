import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastSupport?: boolean;
  enableReducedMotionSupport?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableScreenReaderSupport = true,
  enableHighContrastSupport = true,
  enableReducedMotionSupport = true
}) => {
  useEffect(() => {
    // Skip links functionality
    if (enableSkipLinks) {
      const skipLinks = document.querySelectorAll('.skip-link');
      skipLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute('href') || '');
          if (target) {
            target.focus();
            target.scrollIntoView();
          }
        });
      });
    }

    // Focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          const focusable = Array.from(document.querySelectorAll(focusableElements));
          const firstFocusable = focusable[0] as HTMLElement;
          const lastFocusable = focusable[focusable.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable.focus();
              e.preventDefault();
            }
          }
        }
      });
    }

    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    }

    // High contrast support
    if (enableHighContrastSupport) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      prefersHighContrast.addEventListener('change', handleContrastChange);
      
      // Initial check
      if (prefersHighContrast.matches) {
        document.body.classList.add('high-contrast');
      }
    }

    // Reduced motion support
    if (enableReducedMotionSupport) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };

      prefersReducedMotion.addEventListener('change', handleMotionChange);
      
      // Initial check
      if (prefersReducedMotion.matches) {
        document.body.classList.add('reduced-motion');
      }
    }
  }, [enableSkipLinks, enableFocusManagement, enableScreenReaderSupport, enableHighContrastSupport, enableReducedMotionSupport]);

  return (
    <>
      {enableSkipLinks && (
        <div className="skip-links">
          <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
            Skip to main content
          </a>
          <a href="#navigation" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50">
            Skip to navigation
          </a>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;
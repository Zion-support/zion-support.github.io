import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip to main content functionality
    const skipToMainButton = document.getElementById('skip-to-main');
    if (skipToMainButton) {
      skipToMainButton.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // High contrast mode detection
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    // Reduced motion detection
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    // Color scheme detection
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Initialize accessibility features
    if (prefersHighContrast.matches) {
      document.documentElement.classList.add('high-contrast');
    }
    if (prefersReducedMotion.matches) {
      document.documentElement.classList.add('reduced-motion');
    }
    if (prefersDarkScheme.matches) {
      document.documentElement.classList.add('dark');
    }

    // Add event listeners
    prefersHighContrast.addEventListener('change', handleHighContrastChange);
    prefersReducedMotion.addEventListener('change', handleReducedMotionChange);
    prefersDarkScheme.addEventListener('change', handleColorSchemeChange);

    // Focus management for modals and dropdowns
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    // Tab trap for modals
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal && modal.contains(document.activeElement)) {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('keydown', handleTabKey);

    // Cleanup
    return () => {
      prefersHighContrast.removeEventListener('change', handleHighContrastChange);
      prefersReducedMotion.removeEventListener('change', handleReducedMotionChange);
      prefersDarkScheme.removeEventListener('change', handleColorSchemeChange);
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('keydown', handleTabKey);
    };
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        id="skip-to-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      {children}
    </>
  );
};

export default AccessibilityEnhancer;

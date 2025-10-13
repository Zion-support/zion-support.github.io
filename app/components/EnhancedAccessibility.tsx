import React, { useEffect, useCallback } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  // Skip to main content functionality
  const handleSkipToMain = useCallback(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Keyboard navigation enhancements
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // ESC key to close modals/dropdowns
    if (event.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }

    // Tab key navigation improvements
    if (event.key === 'Tab') {
      const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  }, []);

  // Focus management for better accessibility
  const manageFocus = useCallback(() => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible:focus {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        *:focus {
          outline: 3px solid #ffffff !important;
          outline-offset: 3px !important;
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // ARIA landmark improvements
  const enhanceARIALandmarks = useCallback(() => {
    // Ensure main content has proper landmark
    const mainContent = document.getElementById('main-content');
    if (mainContent && !mainContent.getAttribute('role')) {
      mainContent.setAttribute('role', 'main');
    }

    // Add navigation landmarks
    const navElements = document.querySelectorAll('nav');
    navElements.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });

    // Add heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
    });
  }, []);

  // Color contrast improvements
  const improveColorContrast = useCallback(() => {
    // Check for high contrast mode preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Monitor contrast changes
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    contrastQuery.addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    });
  }, []);

  // Motion preferences
  const handleMotionPreferences = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Monitor motion preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    });
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    manageFocus();
    enhanceARIALandmarks();
    improveColorContrast();
    handleMotionPreferences();

    // Add skip to main content button
    const skipButton = document.createElement('button');
    skipButton.textContent = 'Skip to main content';
    skipButton.className = 'sr-only focus:not-sr-only absolute top-4 left-4 z-50 bg-cyan-500 text-white px-4 py-2 rounded-md font-semibold';
    skipButton.onclick = handleSkipToMain;
    document.body.insertBefore(skipButton, document.body.firstChild);

    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      const skipButton = document.querySelector('button[onclick]');
      if (skipButton) {
        document.body.removeChild(skipButton);
      }
    };
  }, [manageFocus, enhanceARIALandmarks, improveColorContrast, handleMotionPreferences, handleSkipToMain, handleKeyDown]);

  // Expose accessibility functions globally for debugging
  useEffect(() => {
    (window as any).announceToScreenReader = announceToScreenReader;
  }, [announceToScreenReader]);

  return <>{children}</>;
};

export default EnhancedAccessibility;
import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  
  // Keyboard navigation enhancements
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!enableKeyboardNavigation) return;

    // Skip to main content
    if (event.key === 'Tab' && event.shiftKey && event.altKey) {
      event.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.focus();
        main.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Escape key to close modals/dropdowns
    if (event.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }
  }, [enableKeyboardNavigation]);

  // Focus management
  const manageFocus = useCallback(() => {
    if (!enableFocusManagement) return;

    // Add focus indicators
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
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .text-gray-600 {
          color: #000000 !important;
        }
        .text-gray-300 {
          color: #ffffff !important;
        }
        .bg-gray-100 {
          background-color: #ffffff !important;
          border: 1px solid #000000 !important;
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enableFocusManagement]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // High contrast mode detection
  const handleHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
        announceToScreenReader('High contrast mode enabled');
      } else {
        document.documentElement.classList.remove('high-contrast');
        announceToScreenReader('High contrast mode disabled');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [enableHighContrast, announceToScreenReader]);

  // Reduced motion detection
  const handleReducedMotion = useCallback(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
        announceToScreenReader('Reduced motion mode enabled');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [announceToScreenReader]);

  // Add ARIA landmarks
  const addAriaLandmarks = useCallback(() => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  useEffect(() => {
    const cleanupFocus = manageFocus();
    const cleanupHighContrast = handleHighContrast();
    const cleanupReducedMotion = handleReducedMotion();
    
    addAriaLandmarks();

    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    return () => {
      if (cleanupFocus) cleanupFocus();
      if (cleanupHighContrast) cleanupHighContrast();
      if (cleanupReducedMotion) cleanupReducedMotion();
      
      if (enableKeyboardNavigation) {
        document.removeEventListener('keydown', handleKeyboardNavigation);
      }
    };
  }, [
    manageFocus,
    handleHighContrast,
    handleReducedMotion,
    addAriaLandmarks,
    handleKeyboardNavigation,
    enableKeyboardNavigation
  ]);

  return null;
};

export default AccessibilityEnhancer;
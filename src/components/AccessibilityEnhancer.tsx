import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusable = document.querySelectorAll(focusableElements);
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
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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

  // High contrast mode detection
  const detectHighContrastMode = useCallback(() => {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
        announceToScreenReader('High contrast mode enabled');
      } else {
        document.body.classList.remove('high-contrast');
        announceToScreenReader('High contrast mode disabled');
      }
    };

    prefersHighContrast.addEventListener('change', handleContrastChange);
    
    // Initial check
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
    }

    return () => {
      prefersHighContrast.removeEventListener('change', handleContrastChange);
    };
  }, [announceToScreenReader]);

  // Reduced motion detection
  const detectReducedMotion = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
        announceToScreenReader('Reduced motion mode enabled');
      } else {
        document.body.classList.remove('reduced-motion');
        announceToScreenReader('Reduced motion mode disabled');
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    
    // Initial check
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
    };
  }, [announceToScreenReader]);

  // Focus management
  const manageFocus = useCallback(() => {
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach((element, index) => {
      element.setAttribute('tabindex', index.toString());
    });
  }, []);

  // ARIA labels enhancement
  const enhanceARIALabels = useCallback(() => {
    // Add ARIA labels to interactive elements without them
    const interactiveElements = document.querySelectorAll('button:not([aria-label]), [role="button"]:not([aria-label])');
    
    interactiveElements.forEach((element) => {
      const text = element.textContent?.trim();
      if (text && !element.getAttribute('aria-label')) {
        element.setAttribute('aria-label', text);
      }
    });
  }, []);

  useEffect(() => {
    const keyboardCleanup = enhanceKeyboardNavigation();
    const contrastCleanup = detectHighContrastMode();
    const motionCleanup = detectReducedMotion();
    
    // Initial setup
    manageFocus();
    enhanceARIALabels();

    return () => {
      keyboardCleanup();
      contrastCleanup();
      motionCleanup();
    };
  }, [enhanceKeyboardNavigation, detectHighContrastMode, detectReducedMotion, manageFocus, enhanceARIALabels]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
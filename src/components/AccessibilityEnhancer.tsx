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
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
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
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, []);

  // Focus management
  const manageFocus = useCallback(() => {
    const skipLinks = document.querySelectorAll('[data-skip-link]');
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href') || '');
        if (target) {
          (target as HTMLElement).focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  // High contrast mode detection
  const detectHighContrast = useCallback(() => {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
    }
  }, []);

  // Reduced motion detection
  const detectReducedMotion = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }
  }, []);

  useEffect(() => {
    const cleanupKeyboard = enhanceKeyboardNavigation();
    manageFocus();
    detectHighContrast();
    detectReducedMotion();

    return () => {
      if (cleanupKeyboard) cleanupKeyboard();
    };
  }, [enhanceKeyboardNavigation, manageFocus, detectHighContrast, detectReducedMotion]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
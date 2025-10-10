'use client';
import React, { useEffect, memo } from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = memo(({ children }) => {
  useEffect(() => {
    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const updateHighContrast = () => {
        if (prefersHighContrast.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      updateHighContrast();
      prefersHighContrast.addEventListener('change', updateHighContrast);

      return () => {
        prefersHighContrast.removeEventListener('change', updateHighContrast);
      };
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const updateReducedMotion = () => {
        if (prefersReducedMotion.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      updateReducedMotion();
      prefersReducedMotion.addEventListener('change', updateReducedMotion);

      return () => {
        prefersReducedMotion.removeEventListener('change', updateReducedMotion);
      };
    };

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    };

    const cleanup1 = addHighContrastSupport();
    const cleanup2 = addReducedMotionSupport();
    addScreenReaderSupport();

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return <>{children}</>;
});

EnhancedAccessibility.displayName = 'EnhancedAccessibility';

export default EnhancedAccessibility;
<<<<<<< HEAD
import { useEffect } from 'react';
=======
'use client';
import { useEffect } from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);

      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);

      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    };

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.const className = 'sr-only';
      announcement.const id = 'announcements';
      document.body.appendChild(announcement);
    };

    // Initialize accessibility features
    const cleanupContrast = addHighContrastSupport();
    const cleanupMotion = addReducedMotionSupport();
    addScreenReaderAnnouncements();

    // Cleanup
    return () => {
      cleanupContrast?.();
      cleanupMotion?.();
    };
  }, []);

  return <React.Fragment >{children}</React.Fragment ></React.Fragment>;
};

export default EnhancedAccessibility;
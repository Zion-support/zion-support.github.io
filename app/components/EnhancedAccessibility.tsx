'use client';
import { useEffect } from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode support
    const addHighContrastSupport = ($2) => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = ($2) => {
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
    const addReducedMotionSupport = ($2) => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = ($2) => {
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
    const addScreenReaderAnnouncements = ($2) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
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

  return <>{children}</>;
};

export default EnhancedAccessibility;
'use client';
import { useEffect } from 'react';

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
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    };

    // Initialize accessibility features
    const cleanup1 = addHighContrastSupport();
    const cleanup2 = addReducedMotionSupport();
    addScreenReaderAnnouncements();

    // Cleanup function
    return () => {
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
      const announcement = document.getElementById('announcements');
      if (announcement) {
        document.body.removeChild(announcement);
      }
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;
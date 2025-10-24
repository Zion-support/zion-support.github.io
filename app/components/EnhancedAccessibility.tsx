'use client';

import React, { useEffect } from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode support
    const addHighContrastSupport = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        const handleContrastChange = (e: MediaQueryListEvent) => {
          if (e.matches) {
            document.documentElement.classList.add('high-contrast');
          } else {
            document.documentElement.classList.remove('high-contrast');
          }
        };
        mediaQuery.addEventListener('change', handleContrastChange);
        handleContrastChange(mediaQuery as any);

        return () => mediaQuery.removeEventListener('change', handleContrastChange);
      }
      return () => {};
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleMotionChange = (e: MediaQueryListEvent) => {
          if (e.matches) {
            document.documentElement.classList.add('reduce-motion');
          } else {
            document.documentElement.classList.remove('reduce-motion');
          }
        };
        mediaQuery.addEventListener('change', handleMotionChange);
        handleMotionChange(mediaQuery as any);

        return () => mediaQuery.removeEventListener('change', handleMotionChange);
      }
      return () => {};
    };

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      if (typeof document !== 'undefined') {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.id = 'announcements';
        document.body.appendChild(announcement);
      }
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

  return <React.Fragment>{children}</React.Fragment>;
};

export default EnhancedAccessibility;
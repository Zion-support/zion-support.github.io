'use client';

import React, { useEffect } from 'react';

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
      handleContrastChange(mediaQuery as any);

      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduced-motion');
        } else {
          document.documentElement.classList.remove('reduced-motion');
        }
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery as any);

      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.documentElement.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.documentElement.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    const cleanupHighContrast = addHighContrastSupport();
    const cleanupReducedMotion = addReducedMotionSupport();
    const cleanupKeyboard = addKeyboardNavigation();

    return () => {
      cleanupHighContrast();
      cleanupReducedMotion();
      cleanupKeyboard();
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;

'use client';
import { useEffect } from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Add high contrast mode support
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);

 mediaQuery.removeEventListener('change', handleContrastChange);
    };

    // Add reduced motion support
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);

 mediaQuery.removeEventListener('change', handleMotionChange);
    };

    // Add screen reader announcements
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
      cleanupContrast?.();
      cleanupMotion?.();
    };
  }, []);

  return <React.Fragment />{children}</React.Fragment>;
};

export default EnhancedAccessibility;
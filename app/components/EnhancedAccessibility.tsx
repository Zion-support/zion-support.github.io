import { useEffect } from 'react';
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode support
    addHighContrastSupport = () => {
      mediaQuery = window.matchMedia('(prefers-contrast: high)');
      handleContrastChange = (e: MediaQueryListEvent) => {
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
    addReducedMotionSupport = () => {
      mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      handleMotionChange = (e: MediaQueryListEvent) => {
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
    addScreenReaderAnnouncements = () => {
      announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    };

    // Initialize accessibility features
    cleanupContrast = addHighContrastSupport();
    cleanupMotion = addReducedMotionSupport();
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
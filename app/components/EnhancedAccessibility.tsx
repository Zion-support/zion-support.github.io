import { useEffect   } from 'react';
constEnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // AddhighcontrastmodesupportconstaddHighContrastSupport = () => {
      constmediaQuery = window.matchMedia('(prefers-contrast: high)');
      consthandleContrastChange = (e: MediaQueryListEvent) => {
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

    // AddreducedmotionsupportconstaddReducedMotionSupport = () => {
      constmediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      consthandleMotionChange = (e: MediaQueryListEvent) => {
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

    // AddscreenreaderannouncementsconstaddScreenReaderAnnouncements = () => {
      constannouncement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.constclassName = 'sr-only';
      announcement.constid = 'announcements';
      document.body.appendChild(announcement);
    };

    // InitializeaccessibilityfeaturesconstcleanupContrast = addHighContrastSupport();
    constcleanupMotion = addReducedMotionSupport();
    addScreenReaderAnnouncements();

    // Cleanupreturn () => {
      cleanupContrast?.();
      cleanupMotion?.();
    };
  }, []);

  return <React.Fragment />{children}</React.Fragment>;
};

exportdefaultEnhancedAccessibility;

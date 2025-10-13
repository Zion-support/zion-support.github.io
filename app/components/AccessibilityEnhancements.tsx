import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancementsProps {
  children: React.ReactNode;
}

const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({ children }) => {
  // Enhance keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhance focus management
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Enhance screen reader support
  const enhanceScreenReaderSupport = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add live region for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    return () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, []);

  // Enhance color contrast
  const enhanceColorContrast = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add high contrast mode support
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleContrastChange);
    handleContrastChange({ matches: mediaQuery.matches } as MediaQueryListEvent);

    return () => {
      mediaQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Enhance motion preferences
  const enhanceMotionPreferences = useCallback(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    handleMotionChange({ matches: mediaQuery.matches } as MediaQueryListEvent);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const cleanupKeyboard = enhanceKeyboardNavigation();
    const cleanupScreenReader = enhanceScreenReaderSupport();
    const cleanupContrast = enhanceColorContrast();
    const cleanupMotion = enhanceMotionPreferences();

    return () => {
      cleanupKeyboard?.();
      cleanupScreenReader?.();
      cleanupContrast?.();
      cleanupMotion?.();
    };
  }, [enhanceKeyboardNavigation, enhanceScreenReaderSupport, enhanceColorContrast, enhanceMotionPreferences]);

  return <>{children}</>;
};

export default AccessibilityEnhancements;

import { useState, useEffect } from 'react';

interface UseAccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableLargeText?: boolean;
}

interface AccessibilityFeatures {
  isHighContrast: boolean;
  isReducedMotion: boolean;
  isLargeText: boolean;
  isScreenReader: boolean;
}

export const useAccessibility = (options: UseAccessibilityOptions = {}) => {
  const {
    enableKeyboardNavigation = true,
    enableFocusManagement = true,
    enableScreenReaderSupport = true,
    enableHighContrast = true,
    enableReducedMotion = true,
    enableLargeText = true,
  } = options;

  const [features, setFeatures] = useState<AccessibilityFeatures>({
    isHighContrast: false,
    isReducedMotion: false,
    isLargeText: false,
    isScreenReader: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for high contrast mode
    const checkHighContrast = () => {
      if (enableHighContrast) {
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        setFeatures(prev => ({ ...prev, isHighContrast: mediaQuery.matches }));
      }
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      if (enableReducedMotion) {
        const mediaQuery = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        );
        setFeatures(prev => ({ ...prev, isReducedMotion: mediaQuery.matches }));
      }
    };

    // Check for large text preference
    const checkLargeText = () => {
      if (enableLargeText) {
        const mediaQuery = window.matchMedia(
          '(prefers-reduced-motion: no-preference)'
        );
        setFeatures(prev => ({ ...prev, isLargeText: false })); // Simplified for now
      }
    };

    // Check for screen reader
    const checkScreenReader = () => {
      if (enableScreenReaderSupport) {
        const hasScreenReader =
          window.navigator.userAgent.includes('NVDA') ||
          window.navigator.userAgent.includes('JAWS') ||
          window.navigator.userAgent.includes('VoiceOver');
        setFeatures(prev => ({ ...prev, isScreenReader: hasScreenReader }));
      }
    };

    // Initialize checks
    checkHighContrast();
    checkReducedMotion();
    checkLargeText();
    checkScreenReader();

    // Set up media query listeners
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setFeatures(prev => ({ ...prev, isHighContrast: e.matches }));
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setFeatures(prev => ({ ...prev, isReducedMotion: e.matches }));
    };

    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Keyboard navigation setup
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.altKey) {
          const mainContent = document.querySelector('main');
          if (mainContent) {
            mainContent.focus();
            e.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        highContrastQuery.removeEventListener(
          'change',
          handleHighContrastChange
        );
        reducedMotionQuery.removeEventListener(
          'change',
          handleReducedMotionChange
        );
      };
    }

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener(
        'change',
        handleReducedMotionChange
      );
    };
  }, [
    enableKeyboardNavigation,
    enableFocusManagement,
    enableScreenReaderSupport,
    enableHighContrast,
    enableReducedMotion,
    enableLargeText,
  ]);

  return {
    features,
    isAccessible:
      features.isHighContrast ||
      features.isReducedMotion ||
      features.isLargeText ||
      features.isScreenReader,
    enableKeyboardNavigation,
    enableFocusManagement,
    enableScreenReaderSupport,
  };
};

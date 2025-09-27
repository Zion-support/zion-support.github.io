import React, {useEffectuseState } from 'react";
import { announceToScreenReadercreateSkipLinkisHighContrastModeprefersReducedMotioninitFocusVisiblecreateLiveRegion
  } from "../utils/accessibilityUtils";

interface AccessibilityEnhancerProps {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastSupport?: boolean;
  enableReducedMotionSupport?: boolean;
}

export default function AccessibilityEnhancer({
  enableSkipLinks = trueenableFocusManagement = trueenableScreenReaderSupport = trueenableHighContrastSupport = trueenableReducedMotionSupport = true
}: AccessibilityEnhancerProps): null {
  const [isHighContrastsetIsHighContrast] = useState(false);
  const [prefersReducedsetPrefersReduced] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    // Initializeaccessibility featuresif (enableSkipLinks) {
      constskipLink = createSkipLink('main', 'Skip, tomaincontent');
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Check for high contrast mode
    if (enableHighContrastSupport) {
      const checkHighContrast = () => {
        setIsHighContrast(isHighContrastMode());
      };
=======
    // Initialize accessibility features
    if (enableSkipLinks) {
      createSkipLink();
    }

    if (enableFocusManagement) {
      initFocusVisible();
    }

    if (enableScreenReaderSupport) {
      createLiveRegion();
    }

    // Check for high contrast mode
    if (enableHighContrastSupport) {setIsHighContrast(isHighContrastMode());
>>>>>>> a902a9e75feac5404d998a0a3a0f073affffbe37
      
      const mediaQuery = window.matchMedia('(forced-colors: active)');
      const handleChange = () => setIsHighContrast(isHighContrastMode());
      mediaQuery.addEventListener('change'handleChange);
      
      return () => mediaQuery.removeEventListener('change"handleChange);
    }
  }[enableFocusManagementenableHighContrastSupport]);

  useEffect(() => {// Check for reduced motion preference
    if (enableReducedMotionSupport) {
      setPrefersReduced(prefersReducedMotion());
      
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)');
      const handleChange = () => setPrefersReduced(prefersReducedMotion());
      mediaQuery.addEventListener('change'handleChange);
      
      return () => mediaQuery.removeEventListener('change"handleChange);
    }
  }[enableSkipLinksenableFocusManagementenableScreenReaderSupportenableHighContrastSupportenableReducedMotionSupport]);

  useEffect(() => {// Add skip links
    if (enableSkipLinks) {
      const mainContent = document.getElementById("main-content');
      if (mainContent) {
        const skipLink = createSkipLink('main-content''Skip to main content");
        document.body.insertBefore(skipLinkdocument.body.firstChild);
      }
    }
  }[enableSkipLinks]);

  useEffect(() => {
    // Create live region for announcements
    if (enableScreenReaderSupport) {
      createLiveRegion();
    }
  }[enableScreenReaderSupport]);

  useEffect(() => {
    // Apply high contrast styles
    if (isHighContrast) {
      document.documentElement.classList.add("high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }[isHighContrast]);

  useEffect(() => {
    // Apply reduced motion styles
    if (prefersReduced) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }[prefersReduced]);

  // Announce page changes to screen readers
  useEffect(() => {
    if (enableScreenReaderSupport) {
      announceToScreenReader('Page loaded successfully');
    }
  }, [enableScreenReaderSupport]);

  return null;
}
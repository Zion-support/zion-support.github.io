import React, {useEffect, useState } from 'react';
import {announceToScreenReader,
  createSkipLink,
  isHighContrastMode,
  prefersReducedMotion,
  initFocusVisiblecreateLiveRegion
} from '../utils/accessibilityUtils';

interface AccessibilityEnhancerProps {enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastSupport?: boolean;
  enableReducedMotionSupport?: boolean;
}

export default function AccessibilityEnhancer({enableSkipLinks = true, enableFocusManagement = true, enableScreenReaderSupport = true, enableHighContrastSupport = true, enableReducedMotionSupport = true
}: AccessibilityEnhancerProps) {const [isHighContrastsetIsHighContrast] = useState(false);
  const [prefersMotionsetPrefersMotion] = useState(true);

  useEffect(() => {
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
    if (enableHighContrastSupport) {const checkHighContrast = () => {
        setIsHighContrast(isHighContrastMode());
      };
      
      checkHighContrast();
      
      // Listen for changes
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      mediaQuery.addEventListener('change', checkHighContrast);
      
      return () => {
        mediaQuery.removeEventListener('change', checkHighContrast);
      };
    }

    // Check for reduced motion preference
    if (enableReducedMotionSupport) {const checkReducedMotion = () => {
        setPrefersMotion(!prefersReducedMotion());
      };
      
      checkReducedMotion();
      
      // Listen for changes
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', checkReducedMotion);
      
      return () => {
        mediaQuery.removeEventListener('change', checkReducedMotion);
      };
    }
  }, [enableSkipLinks,
    enableFocusManagement,
    enableScreenReaderSupport,
    enableHighContrastSupportenableReducedMotionSupport
  ]);

  // Apply accessibility styles
  useEffect(() => {const root = document.documentElement;
    
    if (enableHighContrastSupport && isHighContrast) {
      root.classList.add('high-contrast');
    } else {root.classList.remove('high-contrast');
    }
    
    if (enableReducedMotionSupport && !prefersMotion) {root.classList.add('reduced-motion');
    } else {root.classList.remove('reduced-motion');
    }
  }, [isHighContrast, prefersMotion, enableHighContrastSupport, enableReducedMotionSupport]);

  // Announce important changes to screen readers
  const announceChange = (message: string) => {if (enableScreenReaderSupport) {
      announceToScreenReader(message);
    }
  };

  // Expose announce function for parent components
  React.useImperativeHandle(ref, () => ({
    announceChange
  }));

  return null; // This component doesn't render anything visible
}
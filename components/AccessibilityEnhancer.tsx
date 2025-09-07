import React, { useEffect } from 'react';
import { useAccessibility } from './AccessibilityProvider';

const AccessibilityEnhancer: React.FC = () => {
  const { highContrast, largeText, reducedMotion } = useAccessibility();

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Add live region for screen reader announcements
    if (!document.getElementById('live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
  }, [highContrast, largeText, reducedMotion]);

  return null;
};

export default AccessibilityEnhancer;
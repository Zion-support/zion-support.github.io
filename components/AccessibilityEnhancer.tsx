'use client';

import { useEffect, useState } from 'react';

interface AccessibilityFeatures {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: false,
  });

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setFeatures(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    }));

    // Apply accessibility features
    applyAccessibilityFeatures({
      ...features,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    });

    // Listen for changes in user preferences
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setFeatures(prev => ({ ...prev, reducedMotion: e.matches }));
      applyAccessibilityFeatures({ ...features, reducedMotion: e.matches });
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setFeatures(prev => ({ ...prev, highContrast: e.matches }));
      applyAccessibilityFeatures({ ...features, highContrast: e.matches });
    };

    motionMediaQuery.addEventListener('change', handleMotionChange);
    contrastMediaQuery.addEventListener('change', handleContrastChange);

    // Keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setFeatures(prev => ({ ...prev, focusVisible: true }));
        document.body.classList.add('focus-visible');
      }
    };

    const handleMouseDown = () => {
      setFeatures(prev => ({ ...prev, focusVisible: false }));
      document.body.classList.remove('focus-visible');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      motionMediaQuery.removeEventListener('change', handleMotionChange);
      contrastMediaQuery.removeEventListener('change', handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const applyAccessibilityFeatures = (newFeatures: AccessibilityFeatures) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newFeatures.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (newFeatures.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${newFeatures.fontSize}`);

    // Apply focus visible
    if (newFeatures.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const toggleHighContrast = () => {
    const newValue = !features.highContrast;
    setFeatures(prev => ({ ...prev, highContrast: newValue }));
    applyAccessibilityFeatures({ ...features, highContrast: newValue });
  };

  const toggleReducedMotion = () => {
    const newValue = !features.reducedMotion;
    setFeatures(prev => ({ ...prev, reducedMotion: newValue }));
    applyAccessibilityFeatures({ ...features, reducedMotion: newValue });
  };

  const setFontSize = (size: 'small' | 'medium' | 'large') => {
    setFeatures(prev => ({ ...prev, fontSize: size }));
    applyAccessibilityFeatures({ ...features, fontSize: size });
  };

  return (
    <div className="accessibility-controls fixed top-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
        Accessibility Options
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs text-gray-600 dark:text-gray-400">
            High Contrast
          </label>
          <button
            onClick={toggleHighContrast}
            className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors ${
              features.highContrast ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-label="Toggle high contrast mode"
          >
            <span
              className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                features.highContrast ? 'translate-x-3' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-xs text-gray-600 dark:text-gray-400">
            Reduced Motion
          </label>
          <button
            onClick={toggleReducedMotion}
            className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors ${
              features.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-label="Toggle reduced motion"
          >
            <span
              className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                features.reducedMotion ? 'translate-x-3' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <div>
          <label className="text-xs text-gray-600 dark:text-gray-400 block mb-1">
            Font Size
          </label>
          <div className="flex space-x-1">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  features.fontSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
import React, { useEffect, useState } from 'react';

interface AccessibilityState {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

export default function AccessibilityEnhancer() {
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: false,
    screenReader: false
  });

  useEffect(() => {
    // Detect user preferences
    const detectPreferences = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Check for screen reader
      const hasScreenReader = window.speechSynthesis !== undefined || 
                             'speechSynthesis' in window ||
                             navigator.userAgent.includes('NVDA') ||
                             navigator.userAgent.includes('JAWS') ||
                             navigator.userAgent.includes('VoiceOver');

      setAccessibilityState(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
        screenReader: hasScreenReader
      }));
    };

    // Apply accessibility enhancements
    const applyAccessibilityEnhancements = () => {
      const root = document.documentElement;
      
      // Apply high contrast mode
      if (accessibilityState.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }

      // Apply reduced motion
      if (accessibilityState.reducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }

      // Apply font size
      root.classList.remove('font-small', 'font-medium', 'font-large');
      root.classList.add(`font-${accessibilityState.fontSize}`);

      // Enhance focus visibility
      if (accessibilityState.focusVisible) {
        root.classList.add('enhanced-focus');
      } else {
        root.classList.remove('enhanced-focus');
      }
    };

    // Add keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      // Skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('id')) {
        main.id = 'main-content';
        main.setAttribute('role', 'main');
      }

      // Enhance form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = document.querySelector(`label[for="${input.id}"]`);
          if (label) {
            input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
            if (!label.id) {
              label.id = `label-${input.id}`;
            }
          }
        }
      });

      // Add loading states
      const buttons = document.querySelectorAll('button[type="submit"]');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          button.setAttribute('aria-busy', 'true');
          button.textContent = 'Loading...';
        });
      });
    };

    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Initialize
    detectPreferences();
    applyAccessibilityEnhancements();
    enhanceKeyboardNavigation();

    // Listen for preference changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)')
    ];

    mediaQueries.forEach(mq => {
      mq.addEventListener('change', detectPreferences);
    });

    return () => {
      mediaQueries.forEach(mq => {
        mq.removeEventListener('change', detectPreferences);
      });
    };
  }, [accessibilityState]);

  // Toggle functions
  const toggleHighContrast = () => {
    setAccessibilityState(prev => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  };

  const toggleReducedMotion = () => {
    setAccessibilityState(prev => ({
      ...prev,
      reducedMotion: !prev.reducedMotion
    }));
  };

  const setFontSize = (size: 'small' | 'medium' | 'large') => {
    setAccessibilityState(prev => ({
      ...prev,
      fontSize: size
    }));
  };

  const toggleFocusVisible = () => {
    setAccessibilityState(prev => ({
      ...prev,
      focusVisible: !prev.focusVisible
    }));
  };

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-50 max-w-xs">
      <h3 className="font-bold mb-3 text-gray-900">Accessibility Controls</h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">High Contrast</label>
          <button
            onClick={toggleHighContrast}
            className={`w-12 h-6 rounded-full transition-colors ${
              accessibilityState.highContrast ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label="Toggle high contrast mode"
          >
            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
              accessibilityState.highContrast ? 'translate-x-6' : 'translate-x-0.5'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">Reduced Motion</label>
          <button
            onClick={toggleReducedMotion}
            className={`w-12 h-6 rounded-full transition-colors ${
              accessibilityState.reducedMotion ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label="Toggle reduced motion"
          >
            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
              accessibilityState.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">Font Size</label>
          <div className="flex space-x-1">
            {(['small', 'medium', 'large'] as const).map(size => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  accessibilityState.fontSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">Enhanced Focus</label>
          <button
            onClick={toggleFocusVisible}
            className={`w-12 h-6 rounded-full transition-colors ${
              accessibilityState.focusVisible ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label="Toggle enhanced focus visibility"
          >
            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
              accessibilityState.focusVisible ? 'translate-x-6' : 'translate-x-0.5'
            }`} />
          </button>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-600">
          <div>Screen Reader: {accessibilityState.screenReader ? 'Detected' : 'Not detected'}</div>
          <div>Motion: {accessibilityState.reducedMotion ? 'Reduced' : 'Normal'}</div>
          <div>Contrast: {accessibilityState.highContrast ? 'High' : 'Normal'}</div>
        </div>
      </div>
    </div>
  );
}
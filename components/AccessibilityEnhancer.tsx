<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

export default function AccessibilityEnhancer() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }));

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setSettings(prev => ({ ...prev, highContrast: highContrastQuery.matches }));

    // Detect screen reader usage
    const screenReaderDetected = 
      'speechSynthesis' in window || 
      'speechRecognition' in window ||
      navigator.userAgent.includes('NVDA') ||
      navigator.userAgent.includes('JAWS') ||
      navigator.userAgent.includes('VoiceOver');
    
    setSettings(prev => ({ ...prev, screenReader: screenReaderDetected }));

    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: mediaQuery.matches,
      highContrast: highContrastQuery.matches,
      screenReader: screenReaderDetected,
    });
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Apply screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [setting]: !settings[setting],
    };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  return (
    <div className="accessibility-panel fixed top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
      <h3 className="font-bold text-lg mb-3">Accessibility Settings</h3>
      
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={() => toggleSetting('highContrast')}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.largeText}
            onChange={() => toggleSetting('largeText')}
            className="rounded"
          />
          <span>Large Text</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={() => toggleSetting('reducedMotion')}
            className="rounded"
          />
          <span>Reduced Motion</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.focusVisible}
            onChange={() => toggleSetting('focusVisible')}
            className="rounded"
          />
          <span>Enhanced Focus</span>
        </label>

        <div className="text-sm text-gray-600">
          Screen Reader: {settings.screenReader ? 'Detected' : 'Not detected'}
        </div>
      </div>
    </div>
  );
}
=======
      }
      if (liveRegion && liveRegion.parentNode) {;
        liveRegion && liveRegion.parentNode.removeChild(liveRegion);
      }
    }
  }, []);
  return null;
    } else {
      root.class_list.remove ('reduced - motion');
    }
  }
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage && localStorage.setItem('highContrast', newValue && newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
    setFontSize(newSize);
    localStorage && localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  }
  return (
    <>;
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">;
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Options</h3>;
        <div className="space-y-2">;
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}>;
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast;
          </button>;
          <div className="text-xs text-gray-600 dark:text-gray-300">Font Size:</div>;
          <div className="flex gap-1">;
            {['small', 'normal', 'large', 'extra-large'].map((size) => (;
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${;
                  fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
                }`}
                aria-label={`Set font size to ${size}`}
              >;
                {size && size.charAt(0).toUpperCase()}
              </button>;
            ))}
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      {/* Screen reader only content */}
}
export default AccessibilityEnhancer;

          </div>;
        </div>;
      </div>;
};


      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">;
        Skip to main content;
      </a>;
      {/* Screen reader only content */}
      <div className="sr-only">;
        <h1>Zion Tech Group - Technology Solutions Provider</h1>;
        <p>;
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum;
          computing, blockchain infrastructure, and innovative development services.;
        </p>;
      </div>;
      {/* Main content */}
      <div id="main-content">{children}</div>;
    </>;
  );
}
export default AccessibilityEnhancer;
export default AccessibilityEnhancer;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6

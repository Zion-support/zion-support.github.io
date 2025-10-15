import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false
  });

  useEffect(() => {
    // Check for system preferences
    const mediaQueries = {
      highContrast: window.matchMedia('(prefers-contrast: high)'),
      largeText: window.matchMedia('(prefers-reduced-motion: no-preference)'),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      screenReader: window.matchMedia('(prefers-reduced-motion: reduce)')
    };

    // Set initial settings based on system preferences
    setSettings({
      highContrast: mediaQueries.highContrast.matches,
      largeText: false, // Default to false, user can enable
      reducedMotion: mediaQueries.reducedMotion.matches,
      screenReader: false // Default to false, user can enable
    });

    // Listen for changes in system preferences
    const handleChange = () => {
      setSettings(prev => ({
        ...prev,
        highContrast: mediaQueries.highContrast.matches,
        reducedMotion: mediaQueries.reducedMotion.matches
      }));
    };

    mediaQueries.highContrast.addEventListener('change', handleChange);
    mediaQueries.reducedMotion.addEventListener('change', handleChange);

    return () => {
      mediaQueries.highContrast.removeEventListener('change', handleChange);
      mediaQueries.reducedMotion.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to the document
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, [settings]);

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="accessibility-provider">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Accessibility Options
          </h3>
          
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={() => toggleSetting('highContrast')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={() => toggleSetting('largeText')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 dark:text-gray-300">Large Text</span>
          </label>
          
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={() => toggleSetting('reducedMotion')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
          </label>
          
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={settings.screenReader}
              onChange={() => toggleSetting('screenReader')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700 dark:text-gray-300">Screen Reader Mode</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
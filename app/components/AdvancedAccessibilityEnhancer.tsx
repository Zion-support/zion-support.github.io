'use client';
import React, { useEffect, useState } from 'react';
import { Eye, Volume2, MousePointer, Keyboard, Contrast, ZoomIn } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: false,
    reducedMotion: false,
    focusIndicator: false
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
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
    
    // Apply screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
    
    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-indicator');
    } else {
      root.classList.remove('focus-indicator');
    }
    
    // Save settings
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
    setSettings(newSettings);
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      screenReader: false,
      keyboardNavigation: false,
      reducedMotion: false,
      focusIndicator: false
    };
    applySettings(defaultSettings);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle accessibility options"
      >
        <Eye className="w-6 h-6" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Accessibility Settings
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Contrast className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              </div>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ZoomIn className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              </div>
              <button
                onClick={() => toggleSetting('largeText')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
              </div>
              <button
                onClick={() => toggleSetting('screenReader')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
              </div>
              <button
                onClick={() => toggleSetting('keyboardNavigation')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
              </div>
              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
              </div>
              <button
                onClick={() => toggleSetting('focusIndicator')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={resetSettings}
              className="w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;

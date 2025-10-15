import React, { useState, useEffect } from 'react';
import { ZoomIn, Volume2, Keyboard, MousePointer } from 'lucide-react';

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

  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
        setIsEnabled(true);
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    updateSetting(key, !settings[key]);
  };

  useEffect(() => {
    // Apply CSS classes based on settings
    const root = document.documentElement;
    Object.entries(settings).forEach(([key, value]) => {
      if (value) {
        root.classList.add(key);
      } else {
        root.classList.remove(key);
      }
    });

    // Inject accessibility styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%);
      }
      .large-text {
        font-size: 1.2em;
      }
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      .screen-reader-optimized {
        /* Enhanced screen reader support */
      }
      .focus-visible *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [settings]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isEnabled ? 'Disable' : 'Enable'} Accessibility
      </button>

      {/* Settings Panel */}
      {isEnabled && (
        <div className="fixed bottom-20 left-4 z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Accessibility Settings
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ZoomIn className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              </div>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ZoomIn className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              </div>
              <button
                onClick={() => toggleSetting('largeText')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.largeText ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
              </div>
              <button
                onClick={() => toggleSetting('screenReader')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
              </div>
              <button
                onClick={() => toggleSetting('keyboardNavigation')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
              </div>
              <button
                onClick={() => toggleSetting('focusIndicator')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;
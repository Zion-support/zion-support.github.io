import React, { useState, useEffect, useCallback } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, MousePointer, Keyboard, Contrast, Type } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindSupport: boolean;
  audioDescriptions: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlindSupport: false,
    audioDescriptions: false
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Screen reader support
    if (newSettings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }
    
    // Color blind support
    if (newSettings.colorBlindSupport) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  // Apply settings when component mounts or settings change
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings, applyAccessibilitySettings]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Accessibility Settings</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility settings"
            >
              <EyeOff className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Contrast className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm">High Contrast</span>
              </div>
              <button
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-600'
                }`}
                aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Type className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm">Large Text</span>
              </div>
              <button
                onClick={() => updateSetting('largeText', !settings.largeText)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-600'
                }`}
                aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MousePointer className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm">Reduced Motion</span>
              </div>
              <button
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-600'
                }`}
                aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Focus Visible */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Keyboard className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm">Focus Indicators</span>
              </div>
              <button
                onClick={() => updateSetting('focusVisible', !settings.focusVisible)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.focusVisible ? 'bg-blue-600' : 'bg-gray-600'
                }`}
                aria-label={`${settings.focusVisible ? 'Disable' : 'Enable'} focus indicators`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.focusVisible ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader Support */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Volume2 className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm">Screen Reader</span>
              </div>
              <button
                onClick={() => updateSetting('screenReader', !settings.screenReader)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.screenReader ? 'bg-blue-600' : 'bg-gray-600'
                }`}
                aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader support`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Color Blind Support */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Eye className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm">Color Blind Support</span>
              </div>
              <button
                onClick={() => updateSetting('colorBlindSupport', !settings.colorBlindSupport)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.colorBlindSupport ? 'bg-blue-600' : 'bg-gray-600'
                }`}
                aria-label={`${settings.colorBlindSupport ? 'Disable' : 'Enable'} color blind support`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.colorBlindSupport ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                const defaultSettings: AccessibilitySettings = {
                  highContrast: false,
                  largeText: false,
                  reducedMotion: false,
                  focusVisible: true,
                  screenReader: false,
                  keyboardNavigation: true,
                  colorBlindSupport: false,
                  audioDescriptions: false
                };
                setSettings(defaultSettings);
                applyAccessibilitySettings(defaultSettings);
              }}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;
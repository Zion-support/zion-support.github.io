'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'normal',
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true
  });

  const [isVisible, setIsVisible] = useState(false);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    
    // Apply high contrast
    if (newSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply font size
    document.documentElement.classList.remove('font-normal', 'font-large', 'font-extra-large');
    document.documentElement.classList.add(`font-${newSettings.fontSize}`);

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }

    // Check for system preferences
    if (window.matchMedia) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      if (prefersReducedMotion || prefersHighContrast) {
        applySettings({
          ...settings,
          reducedMotion: prefersReducedMotion,
          highContrast: prefersHighContrast
        });
      }
    }
  }, [applySettings, settings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [key]: !settings[key]
    };
    applySettings(newSettings);
  };

  const changeFontSize = (size: 'normal' | 'large' | 'extra-large') => {
    const newSettings = {
      ...settings,
      fontSize: size
    };
    applySettings(newSettings);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-2 text-white z-50 hover:bg-slate-800 transition-colors"
        aria-label="Accessibility settings"
        title="Accessibility Settings"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-16 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 text-white z-50 max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-cyan-400">Accessibility Settings</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close accessibility settings"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-sm">
                High Contrast
              </label>
              <button
                id="high-contrast"
                onClick={() => toggleSetting('highContrast')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Font Size Selection */}
            <div>
              <label className="text-sm block mb-2">Font Size</label>
              <div className="flex space-x-2">
                {(['normal', 'large', 'extra-large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => changeFontSize(size)}
                    className={`px-3 py-1 rounded text-xs ${
                      settings.fontSize === size
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-sm">
                Reduced Motion
              </label>
              <button
                id="reduced-motion"
                onClick={() => toggleSetting('reducedMotion')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.reducedMotion}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="screen-reader" className="text-sm">
                Screen Reader Mode
              </label>
              <button
                id="screen-reader"
                onClick={() => toggleSetting('screenReader')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.screenReader ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.screenReader}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Detect screen reader usage
    const detectScreenReader = () => {
      const hasScreenReader = window.navigator.userAgent.includes('NVDA') ||
                             window.navigator.userAgent.includes('JAWS') ||
                             window.navigator.userAgent.includes('VoiceOver') ||
                             window.navigator.userAgent.includes('TalkBack');
      setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));
    };

    detectScreenReader();

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
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

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusVisible: true,
      screenReader: false
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
        aria-label="Accessibility settings"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed bottom-20 left-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-6 w-80 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Accessibility Settings
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close accessibility settings"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-sm font-medium text-gray-700">
                High Contrast
              </label>
              <input
                type="checkbox"
                id="high-contrast"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <label htmlFor="large-text" className="text-sm font-medium text-gray-700">
                Large Text
              </label>
              <input
                type="checkbox"
                id="large-text"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-sm font-medium text-gray-700">
                Reduced Motion
              </label>
              <input
                type="checkbox"
                id="reduced-motion"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>

            {/* Focus Visible */}
            <div className="flex items-center justify-between">
              <label htmlFor="focus-visible" className="text-sm font-medium text-gray-700">
                Enhanced Focus
              </label>
              <input
                type="checkbox"
                id="focus-visible"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Reset to Default
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              These settings are saved locally and will persist across sessions.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;

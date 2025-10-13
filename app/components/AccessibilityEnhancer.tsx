import React, { useState, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
}

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
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
      focusVisible: true
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg">
          <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
          <div className="space-y-2">
            <label className="flex items-center text-white text-xs">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="mr-2"
              />
              High Contrast
            </label>
            <label className="flex items-center text-white text-xs">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="mr-2"
              />
              Large Text
            </label>
            <label className="flex items-center text-white text-xs">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="mr-2"
              />
              Reduced Motion
            </label>
            <button
              onClick={resetSettings}
              className="text-cyan-400 hover:text-cyan-300 text-xs underline"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;

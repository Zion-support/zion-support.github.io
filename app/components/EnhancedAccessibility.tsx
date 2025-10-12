'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false
  });

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply accessibility settings
    applyAccessibilitySettings(settings);
  }, [settings]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (newSettings.screenReader) {
      root.classList.add('screen-reader');
    } else {
      root.classList.remove('screen-reader');
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  // Only show in development or when accessibility is enabled
  if (process.env.NODE_ENV !== 'development' && !settings.screenReader) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 text-xs text-white z-50">
      <div className="space-y-2">
        <div className="font-semibold text-cyan-400 mb-2">Accessibility</div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => updateSetting('highContrast', e.target.checked)}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.largeText}
            onChange={(e) => updateSetting('largeText', e.target.checked)}
            className="rounded"
          />
          <span>Large Text</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
            className="rounded"
          />
          <span>Reduced Motion</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.screenReader}
            onChange={(e) => updateSetting('screenReader', e.target.checked)}
            className="rounded"
          />
          <span>Screen Reader</span>
        </label>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;

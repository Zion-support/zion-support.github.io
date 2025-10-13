'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
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
    
    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}px`;
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const updateSettings = (newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  return (
    <div className="accessibility-provider">
      {children}
      <div className="accessibility-controls fixed bottom-4 right-4 z-50">
        <button
          onClick={() => updateSettings({ ...settings, highContrast: !settings.highContrast })}
          className="bg-blue-600 text-white px-3 py-2 rounded mr-2 text-sm"
          aria-label="Toggle high contrast"
        >
          {settings.highContrast ? 'Normal' : 'High Contrast'}
        </button>
        <button
          onClick={() => updateSettings({ ...settings, fontSize: Math.min(settings.fontSize + 2, 24) })}
          className="bg-blue-600 text-white px-3 py-2 rounded mr-2 text-sm"
          aria-label="Increase font size"
        >
          A+
        </button>
        <button
          onClick={() => updateSettings({ ...settings, fontSize: Math.max(settings.fontSize - 2, 12) })}
          className="bg-blue-600 text-white px-3 py-2 rounded mr-2 text-sm"
          aria-label="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={() => updateSettings({ ...settings, reducedMotion: !settings.reducedMotion })}
          className="bg-blue-600 text-white px-3 py-2 rounded text-sm"
          aria-label="Toggle reduced motion"
        >
          {settings.reducedMotion ? 'Motion On' : 'Motion Off'}
        </button>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
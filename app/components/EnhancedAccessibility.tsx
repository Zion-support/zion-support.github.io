'use client'
import React, { useEffect, useState } from 'react'

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
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    document.documentElement.style.fontSize = `${settings.fontSize}px`;
  }, [settings]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  };

  return (
    <div className="accessibility-enhanced">
      {children}
      <div className="accessibility-controls fixed bottom-4 right-4 z-50">
        <button
          onClick={() => updateSettings({ highContrast: !settings.highContrast })}
          className="bg-blue-600 text-white px-3 py-2 rounded mr-2"
          aria-label="Toggle high contrast"
        >
          {settings.highContrast ? 'Normal' : 'High Contrast'}
        </button>
        <button
          onClick={() => updateSettings({ fontSize: Math.min(settings.fontSize + 2, 24) })}
          className="bg-blue-600 text-white px-3 py-2 rounded mr-2"
          aria-label="Increase font size"
        >
          A+
        </button>
        <button
          onClick={() => updateSettings({ fontSize: Math.max(settings.fontSize - 2, 12) })}
          className="bg-blue-600 text-white px-3 py-2 rounded"
          aria-label="Decrease font size"
        >
          A-
        </button>
      </div>
    </div>
  );
};

export default EnhancedAccessibility
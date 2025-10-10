'use client';
import React, { useState, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false
  });

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }

    document.body.style.fontSize = settings.fontSize === 'small' ? '14px' : 
                                  settings.fontSize === 'large' ? '18px' : '16px';
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="accessibility-panel fixed top-4 right-4 z-50 bg-slate-800 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
      
      <div className="space-y-4">
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
            checked={settings.reducedMotion}
            onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>

        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting('fontSize', e.target.value)}
            className="w-full p-2 rounded bg-slate-700 text-white"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.screenReader}
            onChange={(e) => updateSetting('screenReader', e.target.checked)}
            className="rounded"
          />
          <span>Screen Reader Mode</span>
        </label>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
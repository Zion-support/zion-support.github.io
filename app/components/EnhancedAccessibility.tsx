import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
}

interface EnhancedAccessibilityProps {
  className?: string;
  children?: React.ReactNode;
  onMetricsUpdate?: (metrics: any) => void;
  enableMonitoring?: boolean;
}

export default function EnhancedAccessibility({ 
  className = '', 
  children,
  onMetricsUpdate,
  enableMonitoring = true
}: EnhancedAccessibilityProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true
  });

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
    
    // Apply settings to document
    const root = document.documentElement;
    root.classList.toggle('high-contrast', newSettings.highContrast);
    root.classList.toggle('large-text', newSettings.largeText);
    root.classList.toggle('reduced-motion', newSettings.reducedMotion);
    root.classList.toggle('screen-reader', newSettings.screenReader);
    root.classList.toggle('focus-visible', newSettings.focusVisible);
  };

  return (
    <div className={`enhanced-accessibility ${className}`}>
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-white text-sm font-semibold mb-2">Accessibility Settings</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => updateSetting('highContrast', e.target.checked)}
              className="rounded"
            />
            <Contrast className="w-4 h-4" />
            <span>High Contrast</span>
          </label>
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={(e) => updateSetting('largeText', e.target.checked)}
              className="rounded"
            />
            <Type className="w-4 h-4" />
            <span>Large Text</span>
          </label>
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
              className="rounded"
            />
            <Eye className="w-4 h-4" />
            <span>Reduced Motion</span>
          </label>
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              checked={settings.screenReader}
              onChange={(e) => updateSetting('screenReader', e.target.checked)}
              className="rounded"
            />
            <Volume2 className="w-4 h-4" />
            <span>Screen Reader</span>
          </label>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Render children */}
      {children}
    </div>
  );
}
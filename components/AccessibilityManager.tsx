import React, { useEffect, useState } from "react";

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: "small" | "normal" | "large" | "xlarge";
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const AccessibilityManager: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: "normal",
    reducedMotion: false,
    focusVisible: true,
    screenReader: false
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    
    // Apply accessibility styles
    applyAccessibilityStyles();
  }, [settings]);

  const applyAccessibilityStyles = () => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Font size
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-xlarge');
    root.classList.add(`font-${settings.fontSize}`);
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="accessibility-manager">
      <h2>Accessibility Settings</h2>
      <div className="settings-grid">
        <label>
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => updateSetting('highContrast', e.target.checked)}
          />
          High Contrast
        </label>
        
        <label>
          Font Size:
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting('fontSize', e.target.value)}
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
        </label>
        
        <label>
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
          />
          Reduce Motion
        </label>
        
        <label>
          <input
            type="checkbox"
            checked={settings.focusVisible}
            onChange={(e) => updateSetting('focusVisible', e.target.checked)}
          />
          Enhanced Focus Indicators
        </label>
        
        <label>
          <input
            type="checkbox"
            checked={settings.screenReader}
            onChange={(e) => updateSetting('screenReader', e.target.checked)}
          />
          Screen Reader Optimized
        </label>
      </div>
    </div>
  );
};

export default AccessibilityManager;
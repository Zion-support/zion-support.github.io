import React, { useState, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'normal' | 'large' | 'extra-large';
  reducedMotion: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'normal',
    reducedMotion: false,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enhanced accessibility features
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.style.setProperty('--font-size-multiplier', 
      settings.fontSize === 'large' ? '1.2' : 
      settings.fontSize === 'extra-large' ? '1.4' : 
      settings.fontSize === 'small' ? '0.9' : '1'
    );

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader announcements
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      document.body.appendChild(announcement);
    }
  }, [settings]);

  return (
    <div className="accessibility-panel">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="accessibility-toggle"
        aria-label="Toggle accessibility settings"
      >
        ♿
      </button>
      
      {isVisible && (
        <div className="accessibility-settings">
          <h3>Accessibility Settings</h3>
          
          <label>
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
            />
            High Contrast Mode
          </label>
          
          <label>
            Font Size:
            <select
              value={settings.fontSize}
              onChange={(e) => setSettings(prev => ({ ...prev, fontSize: e.target.value as AccessibilitySettings['fontSize'] }))}
            >
              <option value="small">Small</option>
              <option value="normal">Normal</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </label>
          
          <label>
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
            />
            Reduce Motion
          </label>
          
          <label>
            <input
              type="checkbox"
              checked={settings.screenReader}
              onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
            />
            Screen Reader Support
          </label>
        </div>
      )}
    </div>
  );
};

export default EnhancedAccessibility;
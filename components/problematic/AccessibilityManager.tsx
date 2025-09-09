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
    focusVisible: false,
    screenReader: false
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error parsing accessibility settings:', error);
      }
    }

    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));
  }, []);

  useEffect(() => {
    // Apply accessibility settings
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

    // Save settings
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="accessibility-manager fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 max-w-xs">
      <h3 className="text-sm font-semibold mb-3 text-gray-900">Accessibility Options</h3>
      
      <div className="space-y-4">
        {/* High Contrast */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">High Contrast</label>
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => updateSetting('highContrast', e.target.checked)}
            className="rounded"
          />
        </div>

        {/* Font Size */}
        <div>
          <label className="text-sm text-gray-700 block mb-2">Font Size</label>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting('fontSize', e.target.value as AccessibilitySettings['fontSize'])}
            className="w-full p-1 border rounded text-sm"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
        </div>

        {/* Reduced Motion */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">Reduce Motion</label>
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
            className="rounded"
          />
        </div>

        {/* Focus Visible */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">Enhanced Focus</label>
          <input
            type="checkbox"
            checked={settings.focusVisible}
            onChange={(e) => updateSetting('focusVisible', e.target.checked)}
            className="rounded"
          />
        </div>

        {/* Screen Reader */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">Screen Reader</label>
          <input
            type="checkbox"
            checked={settings.screenReader}
            onChange={(e) => updateSetting('screenReader', e.target.checked)}
            className="rounded"
          />
        </div>
      </div>

      <style jsx>{`
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --border-color: #000000;
          filter: contrast(150%);
        }
        
        .font-small {
          font-size: 0.875rem;
        }
        
        .font-normal {
          font-size: 1rem;
        }
        
        .font-large {
          font-size: 1.125rem;
        }
        
        .font-xlarge {
          font-size: 1.25rem;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default AccessibilityManager;
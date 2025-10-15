import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  enableKeyboard: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableLargeText: boolean;
  enableReducedMotion: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    enableKeyboard: true,
    enableScreenReader: true,
    enableHighContrast: false,
    enableFocusManagement: true,
    enableLargeText: false,
    enableReducedMotion: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (settings.enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text mode
    if (settings.enableLargeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply reduced motion
    if (settings.enableReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [settings]);

  useEffect(() => {
    applyAccessibilitySettings();
  }, [applyAccessibilitySettings]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!settings.enableKeyboard) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.enableKeyboard, handleKeyDown]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-700">
        <h3 className="text-white font-semibold mb-3">Accessibility Settings</h3>
        <div className="space-y-2">
          <label className="flex items-center text-sm text-gray-300">
            <input
              type="checkbox"
              checked={settings.enableHighContrast}
              onChange={() => toggleSetting('enableHighContrast')}
              className="mr-2"
            />
            High Contrast
          </label>
          <label className="flex items-center text-sm text-gray-300">
            <input
              type="checkbox"
              checked={settings.enableLargeText}
              onChange={() => toggleSetting('enableLargeText')}
              className="mr-2"
            />
            Large Text
          </label>
          <label className="flex items-center text-sm text-gray-300">
            <input
              type="checkbox"
              checked={settings.enableReducedMotion}
              onChange={() => toggleSetting('enableReducedMotion')}
              className="mr-2"
            />
            Reduced Motion
          </label>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="mt-3 text-xs text-gray-400 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;

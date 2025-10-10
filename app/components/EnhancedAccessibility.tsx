import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableReducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorScheme: 'light' | 'dark' | 'auto';
}

const defaultSettings: AccessibilitySettings = {
  enableKeyboardNavigation: true,
  enableScreenReaderSupport: true,
  enableHighContrast: false,
  enableFocusManagement: true,
  enableReducedMotion: false,
  fontSize: 'medium',
  colorScheme: 'dark'
};

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings({ ...defaultSettings, ...JSON.parse(savedSettings) });
    }

    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      enableReducedMotion: prefersReducedMotion,
      enableHighContrast: prefersHighContrast
    }));

    // Show accessibility panel after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (settings.enableReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Color scheme
    root.classList.remove('color-light', 'color-dark', 'color-auto');
    root.classList.add(`color-${settings.colorScheme}`);

    // Focus management
    if (settings.enableFocusManagement) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [settings]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  };

  const handleMouseDown = () => {
    document.body.classList.remove('keyboard-navigation');
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 bg-slate-800 rounded-lg shadow-lg p-4 max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Accessibility Settings</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close accessibility panel"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-3">
            {/* High Contrast */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.enableHighContrast}
                onChange={(e) => updateSetting('enableHighContrast', e.target.checked)}
                className="rounded"
              />
              <span className="text-white text-sm">High Contrast</span>
            </label>

            {/* Reduced Motion */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.enableReducedMotion}
                onChange={(e) => updateSetting('enableReducedMotion', e.target.checked)}
                className="rounded"
              />
              <span className="text-white text-sm">Reduced Motion</span>
            </label>

            {/* Font Size */}
            <div>
              <label className="text-white text-sm block mb-1">Font Size</label>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value as any)}
                className="w-full p-1 rounded bg-slate-700 text-white text-sm"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* Color Scheme */}
            <div>
              <label className="text-white text-sm block mb-1">Color Scheme</label>
              <select
                value={settings.colorScheme}
                onChange={(e) => updateSetting('colorScheme', e.target.value as any)}
                className="w-full p-1 rounded bg-slate-700 text-white text-sm"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-3 rounded text-sm transition-colors"
            >
              Reset to Default
            </button>
          </div>
        </div>
      )}

      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default EnhancedAccessibility;
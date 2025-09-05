import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  reducedMotion: false,
  fontSize: 'medium',
  focusVisible: true,
  screenReader: false,
};

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window === 'undefined') return defaultSettings;
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
  });

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('accessibility-settings', JSON.stringify(updated));
      return updated;
    });
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  };

  useEffect(() => {
    // Apply accessibility settings to document
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-high-contrast', settings.highContrast.toString());
      document.documentElement.setAttribute('data-reduced-motion', settings.reducedMotion.toString());
      document.documentElement.setAttribute('data-font-size', settings.fontSize);
    }
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityControls: React.FC = () => {
  const { settings, updateSettings } = useAccessibility();

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Accessibility</h3>
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => updateSettings({ highContrast: e.target.checked })}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>
        <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
          <span>Font Size:</span>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSettings({ fontSize: e.target.value as 'small' | 'medium' | 'large' })}
            className="text-xs border border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </div>
  );
};
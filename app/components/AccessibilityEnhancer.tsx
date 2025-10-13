import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, MousePointer, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindFriendly: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
  isEnabled: boolean;
  toggleAccessibility: () => void;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: false,
  colorBlindFriendly: false,
  fontSize: 16,
  lineHeight: 1.5,
  letterSpacing: 0,
  wordSpacing: 0,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsed });
        setIsEnabled(true);
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    if (isEnabled) {
      applyAccessibilitySettings(settings);
    } else {
      resetAccessibilitySettings();
    }
  }, [settings, isEnabled]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
    resetAccessibilitySettings();
  };

  const toggleAccessibility = () => {
    setIsEnabled(!isEnabled);
  };

  const applyAccessibilitySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader
    if (settings.screenReader) {
      root.classList.add('screen-reader-friendly');
    } else {
      root.classList.remove('screen-reader-friendly');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Color blind friendly
    if (settings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

    // Font size
    root.style.setProperty('--font-size', `${settings.fontSize}px`);
    root.style.setProperty('--line-height', settings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);
    root.style.setProperty('--word-spacing', `${settings.wordSpacing}px`);
  };

  const resetAccessibilitySettings = () => {
    const root = document.documentElement;
    root.classList.remove(
      'high-contrast',
      'large-text',
      'reduced-motion',
      'screen-reader-friendly',
      'keyboard-navigation',
      'color-blind-friendly'
    );
    root.style.removeProperty('--font-size');
    root.style.removeProperty('--line-height');
    root.style.removeProperty('--letter-spacing');
    root.style.removeProperty('--word-spacing');
  };

  const value: AccessibilityContextType = {
    settings,
    updateSettings,
    resetSettings,
    isEnabled,
    toggleAccessibility,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const { settings, updateSettings, isEnabled, toggleAccessibility } = useAccessibility();

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Accessibility</h3>
            <button
              onClick={toggleAccessibility}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                isEnabled
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-600 text-gray-300'
              }`}
            >
              {isEnabled ? 'ON' : 'OFF'}
            </button>
          </div>

          {isEnabled && (
            <div className="space-y-3">
              {/* High Contrast */}
              <label className="flex items-center space-x-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                  className="rounded"
                />
                <Contrast className="w-4 h-4" />
                <span>High Contrast</span>
              </label>

              {/* Large Text */}
              <label className="flex items-center space-x-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSettings({ largeText: e.target.checked })}
                  className="rounded"
                />
                <Type className="w-4 h-4" />
                <span>Large Text</span>
              </label>

              {/* Reduced Motion */}
              <label className="flex items-center space-x-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                  className="rounded"
                />
                <Eye className="w-4 h-4" />
                <span>Reduce Motion</span>
              </label>

              {/* Font Size Slider */}
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Font Size: {settings.fontSize}px</label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={settings.fontSize}
                  onChange={(e) => updateSettings({ fontSize: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Line Height Slider */}
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Line Height: {settings.lineHeight}</label>
                <input
                  type="range"
                  min="1"
                  max="2"
                  step="0.1"
                  value={settings.lineHeight}
                  onChange={(e) => updateSettings({ lineHeight: parseFloat(e.target.value) })}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;

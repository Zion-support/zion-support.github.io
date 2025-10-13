import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  screenReader: boolean;
  focusVisible: boolean;
  colorBlind: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  keyboardNavigation: boolean;
  skipLinks: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSetting: (key: keyof AccessibilitySettings, value: any) => void;
  resetSettings: () => void;
  announceToScreenReader: (message: string) => void;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityManagerProps {
  children: React.ReactNode;
}

const AccessibilityManager: React.FC<AccessibilityManagerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false,
    focusVisible: true,
    colorBlind: 'none',
    keyboardNavigation: true,
    skipLinks: true,
  });
  const [isVisible, setIsVisible] = useState(false);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--animation-iteration-count', '1');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--animation-iteration-count');
    }

    // Font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      'extra-large': '20px',
    };
    root.style.setProperty('--base-font-size', fontSizeMap[newSettings.fontSize]);

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blind support
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlind !== 'none') {
      root.classList.add(newSettings.colorBlind);
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Skip links
    if (newSettings.skipLinks) {
      root.classList.add('skip-links-enabled');
    } else {
      root.classList.remove('skip-links-enabled');
    }
  }, []);

  // Update a specific setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };
      applyAccessibilitySettings(newSettings);
      
      // Save to localStorage
      localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
      
      return newSettings;
    });
  }, [applyAccessibilitySettings]);

  // Reset all settings to default
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      reducedMotion: false,
      fontSize: 'medium',
      screenReader: false,
      focusVisible: true,
      colorBlind: 'none',
      keyboardNavigation: true,
      skipLinks: true,
    };
    
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  }, [applyAccessibilitySettings]);

  // Announce message to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applyAccessibilitySettings(parsedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applyAccessibilitySettings]);

  // Detect system preferences
  useEffect(() => {
    // Detect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      updateSetting('reducedMotion', true);
    }

    // Detect high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      updateSetting('highContrast', true);
    }

    // Listen for system preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      updateSetting('reducedMotion', e.matches);
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      updateSetting('highContrast', e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, [updateSetting]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A: Toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(prev => !prev);
        announceToScreenReader(isVisible ? 'Accessibility panel closed' : 'Accessibility panel opened');
      }

      // Alt + 1: Skip to main content
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          announceToScreenReader('Skipped to main content');
        }
      }

      // Alt + 2: Skip to navigation
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
          announceToScreenReader('Skipped to navigation');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, announceToScreenReader]);

  const contextValue: AccessibilityContextType = {
    settings,
    updateSetting,
    resetSettings,
    announceToScreenReader,
    isVisible,
    setIsVisible,
  };

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
      <AccessibilityPanel />
    </AccessibilityContext.Provider>
  );
};

// Accessibility Panel Component
const AccessibilityPanel: React.FC = () => {
  const { settings, updateSetting, resetSettings, isVisible, setIsVisible } = useAccessibility();

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm"
      role="dialog"
      aria-labelledby="accessibility-panel-title"
      aria-modal="true"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 id="accessibility-panel-title" className="text-lg font-semibold">
          Accessibility Settings
        </h2>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close accessibility panel"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        {/* High Contrast */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => updateSetting('highContrast', e.target.checked)}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>

        {/* Reduced Motion */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>

        {/* Font Size */}
        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting('fontSize', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>

        {/* Color Blind Support */}
        <div>
          <label className="block text-sm font-medium mb-2">Color Blind Support</label>
          <select
            value={settings.colorBlind}
            onChange={(e) => updateSetting('colorBlind', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="none">None</option>
            <option value="protanopia">Protanopia</option>
            <option value="deuteranopia">Deuteranopia</option>
            <option value="tritanopia">Tritanopia</option>
          </select>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetSettings}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default AccessibilityManager;
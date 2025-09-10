import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  onSettingsChange
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Detect user preferences
  useEffect(() => {
    if (!enabled) return;

    const detectPreferences = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast
      }));
    };

    detectPreferences();

    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, [enabled]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Apply focus visibility
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Notify parent component
    if (onSettingsChange) {
      onSettingsChange(settings);
    }
  }, [settings, enabled, onSettingsChange]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }

      // Alt + 1-5 for quick settings
      if (e.altKey && e.key >= '1' && e.key <= '5') {
        e.preventDefault();
        const settingIndex = parseInt(e.key) - 1;
        const settingKeys = ['highContrast', 'reducedMotion', 'fontSize', 'focusVisible', 'screenReader'];
        const settingKey = settingKeys[settingIndex];
        
        if (settingKey) {
          if (settingKey === 'fontSize') {
            setSettings(prev => ({
              ...prev,
              fontSize: prev.fontSize === 'small' ? 'medium' : prev.fontSize === 'medium' ? 'large' : 'small'
            }));
          } else {
            setSettings(prev => ({
              ...prev,
              [settingKey]: !prev[settingKey as keyof AccessibilitySettings]
            }));
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled]);

  // Screen reader detection
  useEffect(() => {
    if (!enabled) return;

    const detectScreenReader = () => {
      // Check for common screen reader indicators
      const hasScreenReader = 
        window.speechSynthesis !== undefined ||
        navigator.userAgent.includes('NVDA') ||
        navigator.userAgent.includes('JAWS') ||
        navigator.userAgent.includes('VoiceOver') ||
        document.querySelector('[aria-live]') !== null;

      setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));
    };

    detectScreenReader();
  }, [enabled]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      reducedMotion: false,
      fontSize: 'medium',
      focusVisible: true,
      screenReader: false
    });
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Accessibility Settings
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
              <span className="text-sm text-gray-700 dark:text-gray-300">
                High Contrast
              </span>
            </label>

            {/* Reduced Motion */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Reduced Motion
              </span>
            </label>

            {/* Font Size */}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Font Size
              </label>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value)}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* Focus Visible */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Enhanced Focus Indicators
              </span>
            </label>

            {/* Screen Reader Status */}
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Screen Reader: {settings.screenReader ? 'Detected' : 'Not Detected'}
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full px-3 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Reset Settings
            </button>
          </div>

          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            <p>Keyboard shortcuts:</p>
            <p>Alt + A: Toggle panel</p>
            <p>Alt + 1-5: Quick settings</p>
          </div>
        </div>
      )}

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-gold text-zion-blue-dark px-4 py-2 rounded font-medium z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AccessibilityEnhancer;
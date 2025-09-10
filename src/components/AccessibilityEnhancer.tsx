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
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)')
    ];

    const handleChange = () => detectPreferences();
    mediaQueries.forEach(mq => mq.addEventListener('change', handleChange));

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleChange));
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

    // Apply focus visible
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

  // Keyboard navigation
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle accessibility panel with Alt + A
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }

      // Quick settings with Alt + number keys
      if (e.altKey && e.key >= '1' && e.key <= '5') {
        e.preventDefault();
        const key = parseInt(e.key);
        
        switch (key) {
          case 1:
            setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
            break;
          case 2:
            setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
            break;
          case 3:
            setSettings(prev => ({ 
              ...prev, 
              fontSize: prev.fontSize === 'small' ? 'medium' : 
                       prev.fontSize === 'medium' ? 'large' : 'small'
            }));
            break;
          case 4:
            setSettings(prev => ({ ...prev, focusVisible: !prev.focusVisible }));
            break;
          case 5:
            setIsVisible(prev => !prev);
            break;
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
      // Simple screen reader detection
      const hasScreenReader = 
        window.speechSynthesis ||
        navigator.userAgent.includes('NVDA') ||
        navigator.userAgent.includes('JAWS') ||
        navigator.userAgent.includes('VoiceOver');
      
      setSettings(prev => ({ ...prev, screenReader: !!hasScreenReader }));
    };

    detectScreenReader();
  }, [enabled]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  if (!enabled || !isVisible) {
    return (
      <button
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => setIsVisible(true)}
        aria-label="Open accessibility settings"
        title="Open accessibility settings (Alt + A)"
      >
        ♿
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Accessibility Settings
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close accessibility settings"
        >
          ✕
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            High Contrast
          </label>
          <button
            onClick={() => updateSetting('highContrast', !settings.highContrast)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-pressed={settings.highContrast}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.highContrast ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Reduced Motion
          </label>
          <button
            onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-pressed={settings.reducedMotion}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Font Size
          </label>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting('fontSize', e.target.value)}
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Focus Indicators
          </label>
          <button
            onClick={() => updateSetting('focusVisible', !settings.focusVisible)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-pressed={settings.focusVisible}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Keyboard shortcuts: Alt + A (toggle), Alt + 1-5 (quick settings)
        </p>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
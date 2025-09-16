import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersLargeText = window.matchMedia('(min-resolution: 2dppx)').matches;

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      largeText: prefersLargeText
    }));

    // Apply initial settings
    applyAccessibilitySettings({
      highContrast: prefersHighContrast,
      largeText: prefersLargeText,
      reducedMotion: prefersReducedMotion,
      focusVisible: true,
      screenReader: false
    });

    // Keyboard shortcut to toggle accessibility panel
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isVisible]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '1.2em';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    applyAccessibilitySettings(newSettings);
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Accessibility Settings</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close accessibility settings"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={() => toggleSetting('highContrast')}
            className="rounded border-gray-300"
            aria-describedby="high-contrast-desc"
          />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">High Contrast</div>
            <div id="high-contrast-desc" className="text-sm text-gray-600 dark:text-gray-400">
              Increases color contrast for better visibility
            </div>
          </div>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={settings.largeText}
            onChange={() => toggleSetting('largeText')}
            className="rounded border-gray-300"
            aria-describedby="large-text-desc"
          />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">Large Text</div>
            <div id="large-text-desc" className="text-sm text-gray-600 dark:text-gray-400">
              Increases text size for better readability
            </div>
          </div>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={() => toggleSetting('reducedMotion')}
            className="rounded border-gray-300"
            aria-describedby="reduced-motion-desc"
          />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">Reduce Motion</div>
            <div id="reduced-motion-desc" className="text-sm text-gray-600 dark:text-gray-400">
              Reduces animations and transitions
            </div>
          </div>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={settings.focusVisible}
            onChange={() => toggleSetting('focusVisible')}
            className="rounded border-gray-300"
            aria-describedby="focus-visible-desc"
          />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">Focus Indicators</div>
            <div id="focus-visible-desc" className="text-sm text-gray-600 dark:text-gray-400">
              Shows clear focus indicators for keyboard navigation
            </div>
          </div>
        </label>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={() => announceToScreenReader('Accessibility settings applied')}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Apply accessibility settings"
        >
          Apply Settings
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Press Ctrl+Shift+A to toggle this panel
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
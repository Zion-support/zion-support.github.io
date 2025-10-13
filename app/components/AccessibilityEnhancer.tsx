import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
  });

  useEffect(() => {
    // Check for user's system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    }));

    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    });
  }, []);

  const applyAccessibilitySettings = (newSettings: typeof settings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

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
  };

  const toggleSetting = (setting: keyof typeof settings) => {
    const newSettings = {
      ...settings,
      [setting]: !settings[setting],
    };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applyAccessibilitySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Add keyboard navigation for accessibility panel
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 max-w-sm">
          <div className="flex items-center justify-between mb-4">
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

          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={() => toggleSetting('highContrast')}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <Contrast className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                High Contrast
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={() => toggleSetting('largeText')}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <Type className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Large Text
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={() => toggleSetting('reducedMotion')}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <EyeOff className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Reduced Motion
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={() => toggleSetting('screenReader')}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <Volume2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Screen Reader Mode
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={() => toggleSetting('focusVisible')}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Focus Indicators
              </span>
            </label>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Press Ctrl+Shift+A to toggle this panel
            </p>
          </div>
        </div>
      )}

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AccessibilityEnhancer;
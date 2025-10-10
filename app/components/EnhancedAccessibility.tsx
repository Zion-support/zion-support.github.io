'use client';

import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        ♿
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Accessibility Settings</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close accessibility settings"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={() => toggleSetting('highContrast')}
            className="rounded"
          />
          <Contrast className="w-4 h-4" />
          <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.largeText}
            onChange={() => toggleSetting('largeText')}
            className="rounded"
          />
          <Type className="w-4 h-4" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={() => toggleSetting('reducedMotion')}
            className="rounded"
          />
          <Eye className="w-4 h-4" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Reduce Motion</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.focusVisible}
            onChange={() => toggleSetting('focusVisible')}
            className="rounded"
          />
          <EyeOff className="w-4 h-4" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
        </label>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
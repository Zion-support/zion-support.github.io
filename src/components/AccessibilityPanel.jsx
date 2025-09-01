import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AccessibilityPanel = ({ isOpen, onToggle }) => {
  const [settings, setSettings] = useState({
    highContrast: false,
    fontSize: 100,
    colorBlindness: 'none',
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });

  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    applySettings(settings);
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applySettings = (newSettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--high-contrast', '1');
      root.classList.add('high-contrast');
    } else {
      root.style.setProperty('--high-contrast', '0');
      root.classList.remove('high-contrast');
    }
    
    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}%`);
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }
    
    // Apply focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-visible', 'auto');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }
    
    // Color blindness
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(newSettings.colorBlindness);
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    const defaultSettings = {
      highContrast: false,
      fontSize: 100,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none'
    };
    setSettings(defaultSettings);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      className="fixed inset-y-0 left-0 w-80 bg-white dark:bg-gray-800 shadow-xl z-50 overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Accessibility
          </h2>
          <button
            onClick={onToggle}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              High Contrast
            </label>
            <button
              onClick={() => updateSetting('highContrast', !settings.highContrast)}
              className={`p-2 rounded-lg ${
                settings.highContrast
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {settings.highContrast ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Font Size: {settings.fontSize}%
            </label>
            <input
              type="range"
              min="80"
              max="200"
              value={settings.fontSize}
              onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Reduced Motion
            </label>
            <button
              onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
              className={`p-2 rounded-lg ${
                settings.reducedMotion
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {settings.reducedMotion ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Focus Indicator */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Focus Indicator
            </label>
            <button
              onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
              className={`p-2 rounded-lg ${
                settings.focusIndicator
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {settings.focusIndicator ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetSettings}
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </motion.div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Type, 
  Contrast, 
  Settings, 
  X, 
  RotateCcw,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

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

  const increaseFontSize = () => {
    if (settings.fontSize < 150) {
      updateSetting('fontSize', settings.fontSize + 10);
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 80) {
      updateSetting('fontSize', settings.fontSize - 10);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        className="fixed right-4 bottom-20 z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Accessibility
            </h3>
            <button
              onClick={onToggle}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Font Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Font Size
                </label>
                <span className="text-sm text-gray-500">{settings.fontSize}%</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-200"
                    style={{ width: `${((settings.fontSize - 80) / 70) * 100}%` }}
                  />
                </div>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Contrast className="w-4 h-4" />
                High Contrast
              </label>
              <button
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Reduced Motion
              </label>
              <button
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Indicator */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Focus Indicator
              </label>
              <button
                onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusIndicator ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Accessibility Score */}
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Accessibility Score
                </span>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {accessibilityScore}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${accessibilityScore}%` }}
                />
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to Defaults
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

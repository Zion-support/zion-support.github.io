import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Type, 
  Contrast, 
  Settings, 
  X, 
  CheckCircle,
  RotateCcw,
  Plus,
  Minus
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
    if (settings.fontSize < 200) {
      updateSetting('fontSize', settings.fontSize + 10);
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 50) {
      updateSetting('fontSize', settings.fontSize - 10);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      className="fixed left-6 bottom-24 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-40"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          Accessibility Panel
        </h3>
        <button
          onClick={onToggle}
          className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6 max-h-96 overflow-y-auto">
        {/* Accessibility Score */}
        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {accessibilityScore}%
          </div>
          <div className="text-sm text-green-600 dark:text-green-400">
            Accessibility Score
          </div>
        </div>

        {/* Font Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Font Size: {settings.fontSize}%
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={decreaseFontSize}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((settings.fontSize - 50) / 150) * 100}%` }}
              />
            </div>
            <button
              onClick={increaseFontSize}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* High Contrast */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Contrast className="w-4 h-4" />
            High Contrast
          </label>
          <button
            onClick={() => updateSetting('highContrast', !settings.highContrast)}
            className={`w-10 h-6 rounded-full transition-colors ${
              settings.highContrast ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
              settings.highContrast ? 'translate-x-4' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* Reduced Motion */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Eye className="w-4 h-4" />
            Reduced Motion
          </label>
          <button
            onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
            className={`w-10 h-6 rounded-full transition-colors ${
              settings.reducedMotion ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
              settings.reducedMotion ? 'translate-x-4' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* Focus Indicator */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Settings className="w-4 h-4" />
            Focus Indicator
          </label>
          <button
            onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
            className={`w-10 h-6 rounded-full transition-colors ${
              settings.focusIndicator ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
              settings.focusIndicator ? 'translate-x-4' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* Color Blindness */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Color Blindness Support
          </label>
          <select
            value={settings.colorBlindness}
            onChange={(e) => updateSetting('colorBlindness', e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset to Default
        </button>
      </div>
    </motion.div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  EyeIcon,
  EyeSlashIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  SunIcon,
  MoonIcon,
  AdjustmentsHorizontalIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MagnifyingGlassIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';
interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}
const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none'
  });
  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }
  }, []);
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    // Font size
    root.style.setProperty('--font-size-multiplier', (newSettings.fontSize / 16).toString());
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    // Color blindness filters
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(newSettings.colorBlindness);
    }
    // Focus indicators
    if (newSettings.focusIndicator) {
      root.classList.add('show-focus-indicator');
    } else {
      root.classList.remove('show-focus-indicator');
    }
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };
  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };
  const toggleHighContrast = () => {
    updateSetting('highContrast', !settings.highContrast);
  };
  const increaseFontSize = () => {
    const newSize = Math.min(settings.fontSize + 2, 24);
    updateSetting('fontSize', newSize);
  };
  const decreaseFontSize = () => {
    const newSize = Math.max(settings.fontSize - 2, 12);
    updateSetting('fontSize', newSize);
  };
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 16,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  };
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };
  const announcePageChange = (pageName: string) => {
    speakText(`Navigated to ${pageName}`);
  };
  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
        aria-label="Toggle accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
      </button>
      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            id="accessibility-panel"
            className="fixed bottom-24 left-6 z-50 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-gray-200 dark:border-slate-700 max-h-96 overflow-y-auto"
            role="dialog"
            aria-labelledby="accessibility-title"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Close accessibility panel"
                >
                  ×
                </button>
              </div>
              {/* High Contrast Toggle */}
              <div className="mb-4">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    High Contrast Mode
                  </span>
                  <button
                    onClick={toggleHighContrast}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                      settings.highContrast ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Increases contrast for better visibility
                </p>
              </div>
              {/* Font Size Control */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Font Size: {settings.fontSize}px
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 bg-gray-100 dark:bg-slate-700 rounded-md hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                    aria-label="Decrease font size"
                  >
                    <ArrowDownIcon className="w-4 h-4" />
                  </button>
                  <div className="flex-1 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 bg-gray-100 dark:bg-slate-700 rounded-md hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                    aria-label="Increase font size"
                  >
                    <ArrowUpIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Reduced Motion Toggle */}
              <div className="mb-4">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reduced Motion
                  </span>
                  <button
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                      settings.reducedMotion ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Reduces animations and motion effects
                </p>
              </div>
              {/* Focus Indicator Toggle */}
              <div className="mb-4">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Enhanced Focus Indicators
                  </span>
                  <button
                    onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                      settings.focusIndicator ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicator}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Makes focus indicators more visible
                </p>
              </div>
              {/* Color Blindness Support */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Color Blindness Support
                </label>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>
              {/* Screen Reader Support */}
              <div className="mb-4">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Screen Reader Announcements
                  </span>
                  <button
                    onClick={() => updateSetting('screenReader', !settings.screenReader)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                      settings.screenReader ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.screenReader}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Announces page changes and important events
                </p>
              </div>
              {/* Keyboard Navigation */}
              <div className="mb-4">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Enhanced Keyboard Navigation
                  </span>
                  <button
                    onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                      settings.keyboardNavigation ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.keyboardNavigation}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Improves keyboard navigation experience
                </p>
              </div>
              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => speakText('Accessibility settings panel opened. You can adjust various accessibility options here.')}
                  className="w-full px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <SpeakerWaveIcon className="w-4 h-4" />
                  <span>Test Screen Reader</span>
                </button>
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Reset to Defaults
                </button>
              </div>
              {/* Keyboard Shortcuts Help */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Keyboard Shortcuts
                </h3>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div>Tab: Navigate between elements</div>
                  <div>Enter/Space: Activate buttons</div>
                  <div>Arrow keys: Adjust sliders</div>
                  <div>Escape: Close panels</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
export default EnhancedAccessibility;
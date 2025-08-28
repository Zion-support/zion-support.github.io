import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Type, 
  Volume2, 
  VolumeX, 
  Settings, 
  X, 
  ChevronDown, 
  ChevronUp,
  Sun,
  Moon,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'normal' | 'large' | 'extra-large';
  theme: 'auto' | 'light' | 'dark';
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  focusIndicator: true,
  colorBlindMode: 'none',
  fontSize: 'normal',
  theme: 'auto'
};

export function AccessibilityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [announcement, setAnnouncement] = useState<string>('');

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blind modes
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (settings.colorBlindMode !== 'none') {
      root.classList.add(settings.colorBlindMode);
    }

    // Font size
    root.classList.remove('text-large', 'text-extra-large');
    if (settings.fontSize === 'large') {
      root.classList.add('text-large');
    } else if (settings.fontSize === 'extra-large') {
      root.classList.add('text-extra-large');
    }

    // Theme
    if (settings.theme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else if (settings.theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.remove('light-theme', 'dark-theme');
    }
  }, [settings]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Announce changes for screen readers
    if (settings.screenReader) {
      announceChange(key, value);
    }
  }, [settings.screenReader]);

  const announceChange = useCallback((key: string, value: any) => {
    const messages: Record<string, string> = {
      highContrast: value ? 'High contrast mode enabled' : 'High contrast mode disabled',
      largeText: value ? 'Large text mode enabled' : 'Large text mode disabled',
      reducedMotion: value ? 'Reduced motion enabled' : 'Reduced motion disabled',
      screenReader: value ? 'Screen reader announcements enabled' : 'Screen reader announcements disabled',
      focusIndicator: value ? 'Focus indicators enabled' : 'Focus indicators disabled',
      colorBlindMode: `Color blind mode set to ${value === 'none' ? 'off' : value}`,
      fontSize: `Font size set to ${value}`,
      theme: `Theme set to ${value}`
    };

    const message = messages[key];
    if (message) {
      setAnnouncement(message);
      setTimeout(() => setAnnouncement(''), 3000);
    }
  }, []);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    if (settings.screenReader) {
      setAnnouncement('Settings reset to default');
      setTimeout(() => setAnnouncement(''), 3000);
    }
  }, [settings.screenReader]);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  // Screen reader announcements
  useEffect(() => {
    if (announcement && settings.screenReader) {
      const announcementEl = document.createElement('div');
      announcementEl.setAttribute('aria-live', 'polite');
      announcementEl.setAttribute('aria-atomic', 'true');
      announcementEl.className = 'sr-only';
      announcementEl.textContent = announcement;
      
      document.body.appendChild(announcementEl);
      
      setTimeout(() => {
        document.body.removeChild(announcementEl);
      }, 100);
    }
  }, [announcement, settings.screenReader]);

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleVisibility}
        className="fixed bottom-6 left-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg border border-blue-500 transition-all duration-200 group"
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <>
      {/* Screen Reader Announcements */}
      {announcement && (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </div>
      )}

      {/* Main Accessibility Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -20, scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-600 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
          <div className="flex items-center space-x-2">
            <Accessibility className="w-5 h-5" />
            <span className="text-sm font-semibold">Accessibility</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleExpanded}
              className="p-1.5 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-colors duration-200"
              title={isExpanded ? 'Collapse' : 'Expand'}
              aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
            >
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            <button
              onClick={toggleVisibility}
              className="p-1.5 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-colors duration-200"
              title="Close"
              aria-label="Close accessibility panel"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => updateSetting('highContrast', !settings.highContrast)}
              className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center space-y-2 ${
                settings.highContrast
                  ? 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-600'
              }`}
              aria-pressed={settings.highContrast}
            >
              <Contrast className="w-5 h-5" />
              <span className="text-xs font-medium">High Contrast</span>
            </button>

            <button
              onClick={() => updateSetting('largeText', !settings.largeText)}
              className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center space-y-2 ${
                settings.largeText
                  ? 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-600'
              }`}
              aria-pressed={settings.largeText}
            >
              <Type className="w-5 h-5" />
              <span className="text-xs font-medium">Large Text</span>
            </button>

            <button
              onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
              className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center space-y-2 ${
                settings.reducedMotion
                  ? 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-600'
              }`}
              aria-pressed={settings.reducedMotion}
            >
              <Eye className="w-5 h-5" />
              <span className="text-xs font-medium">Reduced Motion</span>
            </button>

            <button
              onClick={() => updateSetting('screenReader', !settings.screenReader)}
              className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center space-y-2 ${
                settings.screenReader
                  ? 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-600'
              }`}
              aria-pressed={settings.screenReader}
            >
              <Volume2 className="w-5 h-5" />
              <span className="text-xs font-medium">Screen Reader</span>
            </button>
          </div>

          {/* Font Size Control */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Font Size
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateSetting('fontSize', 'normal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  settings.fontSize === 'normal'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:hover:bg-slate-600'
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => updateSetting('fontSize', 'large')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  settings.fontSize === 'large'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:hover:bg-slate-600'
                }`}
              >
                Large
              </button>
              <button
                onClick={() => updateSetting('fontSize', 'extra-large')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  settings.fontSize === 'extra-large'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:hover:bg-slate-600'
                }`}
              >
                Extra Large
              </button>
            </div>
          </div>

          {/* Theme Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Theme
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateSetting('theme', 'auto')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  settings.theme === 'auto'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:hover:bg-slate-600'
                }`}
              >
                Auto
              </button>
              <button
                onClick={() => updateSetting('theme', 'light')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  settings.theme === 'light'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:hover:bg-slate-600'
                }`}
              >
                <Sun className="w-3 h-3 inline mr-1" />
                Light
              </button>
              <button
                onClick={() => updateSetting('theme', 'dark')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  settings.theme === 'dark'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:hover:bg-slate-600'
                }`}
              >
                <Moon className="w-3 h-3 inline mr-1" />
                Dark
              </button>
            </div>
          </div>

          {/* Focus Indicator Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Focus Indicators
            </label>
            <button
              onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-300 dark:bg-slate-600'
              }`}
              role="switch"
              aria-checked={settings.focusIndicator}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Expanded View */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-4 border-t border-gray-200 dark:border-slate-600 space-y-4"
              >
                {/* Color Blind Mode */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Color Blind Support
                  </label>
                  <select
                    value={settings.colorBlindMode}
                    onChange={(e) => updateSetting('colorBlindMode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="none">No Color Blind Support</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>

                {/* Status Indicators */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Status
                  </label>
                  <div className="space-y-2">
                    {Object.entries(settings).map(([key, value]) => {
                      if (key === 'colorBlindMode' || key === 'fontSize' || key === 'theme') return null;
                      
                      const status = value ? 'enabled' : 'disabled';
                      const icon = value ? CheckCircle : XCircle;
                      const color = value ? 'text-green-600' : 'text-gray-400';
                      
                      return (
                        <div key={key} className="flex items-center space-x-2 text-sm">
                          <icon className={`w-4 h-4 ${color}`} />
                          <span className="text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}: {status}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset to Default</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

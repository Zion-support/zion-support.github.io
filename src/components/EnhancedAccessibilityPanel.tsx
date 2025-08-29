import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Keyboard, 
  MousePointer, 
  Sun, 
  Moon,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindFriendly: boolean;
  dyslexiaFriendly: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  theme: 'light' | 'dark' | 'auto';
}

interface AccessibilityPanelProps {
  enabled?: boolean;
  showControls?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const EnhancedAccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  enabled = true,
  showControls = true,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindFriendly: false,
    dyslexiaFriendly: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    theme: 'auto'
  });

  const [activeTab, setActiveTab] = useState<'visual' | 'navigation' | 'reading' | 'advanced'>('visual');

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-multiplier', '1.5');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-multiplier');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--font-size-multiplier', '1.25');
    } else {
      root.style.removeProperty('--font-size-multiplier');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-visible', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }

    // Color blind friendly
    if (newSettings.colorBlindFriendly) {
      root.classList.add('colorblind-friendly');
    } else {
      root.classList.remove('colorblind-friendly');
    }

    // Dyslexia friendly
    if (newSettings.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
      root.style.setProperty('--font-family', 'OpenDyslexic, Arial, sans-serif');
      root.style.setProperty('--line-height', '1.8');
      root.style.setProperty('--letter-spacing', '0.1em');
    } else {
      root.classList.remove('dyslexia-friendly');
      root.style.removeProperty('--font-family');
      root.style.removeProperty('--line-height');
      root.style.removeProperty('--letter-spacing');
    }

    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', `${newSettings.lineHeight}`);
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}em`);

    // Theme
    if (newSettings.theme === 'light') {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    } else if (newSettings.theme === 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.remove('light-theme', 'dark-theme');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
    onSettingsChange?.(settings);
  }, [settings, applySettings, onSettingsChange]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }

      // Alt + C to toggle high contrast
      if (event.altKey && event.key === 'c') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }

      // Alt + L to toggle large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
      }

      // Alt + M to toggle reduced motion
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    if (settings.screenReader) {
      announceToScreenReader(`${key} changed to ${value}`);
    }
  }, [settings.screenReader, announceToScreenReader]);

  if (!enabled) return null;

  const tabs = [
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'navigation', label: 'Navigation', icon: Keyboard },
    { id: 'reading', label: 'Reading', icon: Type },
    { id: 'advanced', label: 'Advanced', icon: Settings }
  ] as const;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            className="fixed bottom-6 left-20 z-40 w-96 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-purple-400/30 rounded-2xl shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Accessibility className="w-5 h-5 mr-2 text-purple-500" />
                  Accessibility
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-white dark:bg-slate-600 text-purple-600 dark:text-purple-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-1" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="space-y-4">
                {/* Visual Tab */}
                {activeTab === 'visual' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Eye className="w-4 h-4 mr-2" />
                        High Contrast
                      </label>
                      <button
                        onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.highContrast ? 'bg-purple-600' : 'bg-gray-200'
                        }`}
                        aria-label="Toggle high contrast"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Type className="w-4 h-4 mr-2" />
                        Large Text
                      </label>
                      <button
                        onClick={() => handleSettingChange('largeText', !settings.largeText)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.largeText ? 'bg-purple-600' : 'bg-gray-200'
                        }`}
                        aria-label="Toggle large text"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.largeText ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Contrast className="w-4 h-4 mr-2" />
                        Color Blind Friendly
                      </label>
                      <button
                        onClick={() => handleSettingChange('colorBlindFriendly', !settings.colorBlindFriendly)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.colorBlindFriendly ? 'bg-purple-600' : 'bg-gray-200'
                        }`}
                        aria-label="Toggle color blind friendly mode"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.colorBlindFriendly ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Font Size: {settings.fontSize}px
                      </label>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleSettingChange('fontSize', Math.max(12, settings.fontSize - 2))}
                          className="p-1 rounded bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500"
                          aria-label="Decrease font size"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <div className="flex-1 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full transition-all duration-200"
                            style={{ width: `${((settings.fontSize - 12) / 20) * 100}%` }}
                          />
                        </div>
                        <button
                          onClick={() => handleSettingChange('fontSize', Math.min(32, settings.fontSize + 2))}
                          className="p-1 rounded bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500"
                          aria-label="Increase font size"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Tab */}
                {activeTab === 'navigation' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Keyboard className="w-4 h-4 mr-2" />
                        Keyboard Navigation
                      </label>
                      <button
                        onClick={() => handleSettingChange('keyboardNavigation', !settings.keyboardNavigation)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.keyboardNavigation ? 'bg-purple-600' : 'bg-gray-200'
                        }`}
                        aria-label="Toggle keyboard navigation"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        <MousePointer className="w-4 h-4 mr-2" />
                        Focus Indicator
                      </label>
                      <button
                        onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.focusIndicator ? 'bg-purple-600' : 'bg-gray-200'
                        }`}
                        aria-label="Toggle focus indicator"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                        <Info className="w-4 h-4 mr-1" />
                        Keyboard Shortcuts
                      </h4>
                      <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                        <div>• Alt + A: Toggle accessibility panel</div>
                        <div>• Alt + C: Toggle high contrast</div>
                        <div>• Alt + L: Toggle large text</div>
                        <div>• Alt + M: Toggle reduced motion</div>
                        <div>• Tab: Navigate between elements</div>
                        <div>• Enter/Space: Activate buttons</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reading Tab */}
                {activeTab === 'reading' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Type className="w-4 h-4 mr-2" />
                        Dyslexia Friendly
                      </label>
                      <button
                        onClick={() => handleSettingChange('dyslexiaFriendly', !settings.dyslexiaFriendly)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.dyslexiaFriendly ? 'bg-purple-600' : 'bg-gray-200'
                        }`}
                        aria-label="Toggle dyslexia friendly mode"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.dyslexiaFriendly ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Line Height: {settings.lineHeight}
                      </label>
                      <input
                        type="range"
                        min="1.2"
                        max="2.0"
                        step="0.1"
                        value={settings.lineHeight}
                        onChange={(e) => handleSettingChange('lineHeight', parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Letter Spacing: {settings.letterSpacing}em
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="0.2"
                        step="0.01"
                        value={settings.letterSpacing}
                        onChange={(e) => handleSettingChange('letterSpacing', parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {/* Advanced Tab */}
                {activeTab === 'advanced' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Volume2 className="w-4 h-4 mr-2" />
                        Screen Reader
                      </label>
                      <button
                        onClick={() => handleSettingChange('screenReader', !settings.screenReader)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.screenReader ? 'bg-purple-600' : 'bg-gray-200'
                        }`}
                        aria-label="Toggle screen reader announcements"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        <EyeOff className="w-4 h-4 mr-2" />
                        Reduced Motion
                      </label>
                      <button
                        onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.reducedMotion ? 'bg-purple-600' : 'bg-gray-200'
                        }`}
                        aria-label="Toggle reduced motion"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Theme
                      </label>
                      <select
                        value={settings.theme}
                        onChange={(e) => handleSettingChange('theme', e.target.value as 'light' | 'dark' | 'auto')}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      >
                        <option value="auto">Auto (System)</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                      </select>
                    </div>

                    <button
                      onClick={() => {
                        const defaultSettings: AccessibilitySettings = {
                          highContrast: false,
                          largeText: false,
                          reducedMotion: false,
                          screenReader: false,
                          keyboardNavigation: false,
                          focusIndicator: true,
                          colorBlindFriendly: false,
                          dyslexiaFriendly: false,
                          fontSize: 16,
                          lineHeight: 1.5,
                          letterSpacing: 0,
                          theme: 'auto'
                        };
                        setSettings(defaultSettings);
                      }}
                      className="w-full flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset to Defaults
                    </button>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-600">
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Press Alt + A to quickly toggle this panel
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true" />
    </>
  );
};

export default EnhancedAccessibilityPanel;
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Type, 
  Volume2, 
  VolumeX, 
  MousePointer, 
  Keyboard, 
  Settings,
  X,
  Plus,
  Minus,
  Contrast,
  Accessibility,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityEnhancerProps {
  className?: string;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 16,
  highContrast: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: false,
  focusIndicator: true
};

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  className = '',
  showPanel = false,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(showPanel);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'navigation'>('general');

  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
        applySettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.setProperty('--zion-font-size-base', `${newSettings.fontSize}px`);
    root.style.setProperty('--zion-font-size-sm', `${newSettings.fontSize * 0.875}px`);
    root.style.setProperty('--zion-font-size-lg', `${newSettings.fontSize * 1.125}px`);
    root.style.setProperty('--zion-font-size-xl', `${newSettings.fontSize * 1.25}px`);
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--zion-bg-primary', '#000000');
      root.style.setProperty('--zion-bg-secondary', '#1a1a1a');
      root.style.setProperty('--zion-text-primary', '#ffffff');
      root.style.setProperty('--zion-text-secondary', '#e5e5e5');
      root.style.setProperty('--zion-border-color', '#ffffff');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--zion-bg-primary');
      root.style.removeProperty('--zion-bg-secondary');
      root.style.removeProperty('--zion-text-primary');
      root.style.removeProperty('--zion-text-secondary');
      root.style.removeProperty('--zion-border-color');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }
  }, []);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
    onSettingsChange?.(newSettings);
  }, [settings, applySettings, onSettingsChange]);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
    localStorage.removeItem('zion-accessibility-settings');
    onSettingsChange?.(DEFAULT_SETTINGS);
  }, [applySettings, onSettingsChange]);

  const increaseFontSize = useCallback(() => {
    const newSize = Math.min(settings.fontSize + 2, 24);
    updateSetting('fontSize', newSize);
  }, [settings.fontSize, updateSetting]);

  const decreaseFontSize = useCallback(() => {
    const newSize = Math.max(settings.fontSize - 2, 12);
    updateSetting('fontSize', newSize);
  }, [settings.fontSize, updateSetting]);

  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast', !settings.highContrast);
  }, [settings.highContrast, updateSetting]);

  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  }, [settings.reducedMotion, updateSetting]);

  const toggleScreenReader = useCallback(() => {
    updateSetting('screenReader', !settings.screenReader);
  }, [settings.screenReader, updateSetting]);

  const toggleKeyboardNavigation = useCallback(() => {
    updateSetting('keyboardNavigation', !settings.keyboardNavigation);
  }, [settings.keyboardNavigation, updateSetting]);

  const toggleFocusIndicator = useCallback(() => {
    updateSetting('focusIndicator', !settings.focusIndicator);
  }, [settings.focusIndicator, updateSetting]);

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'navigation', label: 'Navigation', icon: Keyboard }
  ] as const;

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="fixed bottom-24 right-6 w-96 max-h-[80vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <Accessibility className="w-6 h-6 text-cyan-500" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Accessibility
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-cyan-600 border-b-2 border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'general' && (
                    <motion.div
                      key="general"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Font Size Control */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Font Size: {settings.fontSize}px
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={decreaseFontSize}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Decrease font size"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                            />
                          </div>
                          <button
                            onClick={increaseFontSize}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Increase font size"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Screen Reader Support */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Volume2 className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Screen Reader Support
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Enhanced ARIA labels and descriptions
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleScreenReader}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.screenReader ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'visual' && (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* High Contrast */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Contrast className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              High Contrast
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Enhanced color contrast for better visibility
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleHighContrast}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.highContrast ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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
                      </div>

                      {/* Reduced Motion */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <MousePointer className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Reduced Motion
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Minimize animations and transitions
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleReducedMotion}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'navigation' && (
                    <motion.div
                      key="navigation"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Keyboard Navigation */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Keyboard className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Enhanced Keyboard Navigation
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Improved tab order and keyboard shortcuts
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleKeyboardNavigation}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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
                      </div>

                      {/* Focus Indicator */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Focus Indicators
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Clear focus indicators for keyboard users
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleFocusIndicator}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.focusIndicator ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Reset Button */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={resetSettings}
                    className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityEnhancer;
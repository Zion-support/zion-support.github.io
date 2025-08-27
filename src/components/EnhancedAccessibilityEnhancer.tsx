import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Palette, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  X,
  Accessibility,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  fontSize: number;
  theme: 'light' | 'dark' | 'auto';
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    fontSize: 16,
    theme: 'auto'
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (enabled) {
      setIsVisible(true);
      applyAccessibilitySettings(settings);
    }
  }, [enabled, settings]);

  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
      root.style.setProperty('--accent-color', '#fbbf24');
    } else {
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--accent-color');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Apply high saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation', '1.5');
    } else {
      root.style.setProperty('--saturation', '1');
    }

    // Apply font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);

    // Apply theme
    if (newSettings.theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (newSettings.theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }

    // Notify parent component
    onSettingsChange?.(newSettings);
  }, [onSettingsChange]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  }, [settings, applyAccessibilitySettings]);

  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      fontSize: 16,
      theme: 'auto'
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  }, [applyAccessibilitySettings]);

  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast', !settings.highContrast);
  }, [settings.highContrast, updateSetting]);

  const toggleLargeText = useCallback(() => {
    updateSetting('largeText', !settings.largeText);
  }, [settings.largeText, updateSetting]);

  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  }, [settings.reducedMotion, updateSetting]);

  const toggleHighSaturation = useCallback(() => {
    updateSetting('highSaturation', !settings.highSaturation);
  }, [settings.highSaturation, updateSetting]);

  const changeFontSize = useCallback((increment: boolean) => {
    const newSize = increment ? settings.fontSize + 2 : settings.fontSize - 2;
    if (newSize >= 12 && newSize <= 24) {
      updateSetting('fontSize', newSize);
    }
  }, [settings.fontSize, updateSetting]);

  const changeTheme = useCallback((theme: 'light' | 'dark' | 'auto') => {
    updateSetting('theme', theme);
  }, [updateSetting]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Floating accessibility button */}
      {showControls && (
        <motion.button
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Accessibility Settings"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Accessibility panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Accessibility className="w-6 h-6 mr-2 text-cyan-500" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <Contrast className="w-5 h-5 mr-3 text-cyan-500" />
                    <span className="text-gray-900 dark:text-white">High Contrast</span>
                  </div>
                  <button
                    onClick={toggleHighContrast}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-300'
                    }`}
                    aria-label={`High contrast ${settings.highContrast ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <Type className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="text-gray-900 dark:text-white">Large Text</span>
                  </div>
                  <button
                    onClick={toggleLargeText}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Large text ${settings.largeText ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-gray-900 dark:text-white">Reduced Motion</span>
                  </div>
                  <button
                    onClick={toggleReducedMotion}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Reduced motion ${settings.reducedMotion ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* High Saturation */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <Palette className="w-5 h-5 mr-3 text-purple-500" />
                    <span className="text-gray-900 dark:text-white">High Saturation</span>
                  </div>
                  <button
                    onClick={toggleHighSaturation}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highSaturation ? 'bg-purple-500' : 'bg-gray-300'
                    }`}
                    aria-label={`High saturation ${settings.highSaturation ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highSaturation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Font Size Control */}
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Type className="w-5 h-5 mr-3 text-orange-500" />
                    <span className="text-gray-900 dark:text-white">Font Size: {settings.fontSize}px</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => changeFontSize(false)}
                      disabled={settings.fontSize <= 12}
                      className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Decrease font size"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => changeFontSize(true)}
                      disabled={settings.fontSize >= 24}
                      className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Increase font size"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Theme Selection */}
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Monitor className="w-5 h-5 mr-3 text-indigo-500" />
                    <span className="text-gray-900 dark:text-white">Theme</span>
                  </div>
                  <div className="flex space-x-2">
                    {(['light', 'dark', 'auto'] as const).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => changeTheme(theme)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          settings.theme === theme
                            ? 'bg-indigo-500 text-white'
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Select ${theme} theme`}
                      >
                        {theme === 'light' && <Sun className="w-4 h-4 inline mr-1" />}
                        {theme === 'dark' && <Moon className="w-4 h-4 inline mr-1" />}
                        {theme === 'auto' && <Monitor className="w-4 h-4 inline mr-1" />}
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={resetSettings}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Reset accessibility settings"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset to Default
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(EnhancedAccessibilityEnhancer);
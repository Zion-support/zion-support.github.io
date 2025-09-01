import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  lineHeight: number;
  letterSpacing: number;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

export function AccessibilityEnhancer({ enabled = true, showSettings = true }: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    lineHeight: 1.5,
    letterSpacing: 0,
    keyboardNavigation: false
  });

  useEffect(() => {
    if (!enabled) return;

    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-enhancer-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }

    // Apply initial settings
    applySettings(settings);
  }, [enabled]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}px`;

    // Apply line height
    root.style.lineHeight = newSettings.lineHeight.toString();

    // Apply letter spacing
    root.style.letterSpacing = `${newSettings.letterSpacing}px`;

    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply high saturation
    if (newSettings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }

    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = {
      ...settings,
      [key]: value
    };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-enhancer-settings', JSON.stringify(newSettings));
  };

  const increaseFontSize = () => {
    if (settings.fontSize < 24) {
      updateSetting('fontSize', settings.fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 12) {
      updateSetting('fontSize', settings.fontSize - 2);
    }
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 16,
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      lineHeight: 1.5,
      letterSpacing: 0,
      keyboardNavigation: false
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.setItem('accessibility-enhancer-settings', JSON.stringify(defaultSettings));
  };

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-20 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Enhanced accessibility settings"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-6 bottom-24 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-40"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Enhanced Accessibility
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-6 max-h-96 overflow-y-auto">
              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Font Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center text-sm font-medium text-gray-900 dark:text-white">
                    {settings.fontSize}px
                  </span>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <ZoomIn className="w-4 h-4" />
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

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Type className="w-4 h-4" />
                  Large Text
                </label>
                <button
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.largeText ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-4' : 'translate-x-0'
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

              {/* High Saturation */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Eye className="w-4 h-4" />
                  High Saturation
                </label>
                <button
                  onClick={() => updateSetting('highSaturation', !settings.highSaturation)}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.highSaturation ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.highSaturation ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Settings className="w-4 h-4" />
                  Keyboard Navigation
                </label>
                <button
                  onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Default
              </button>

              {/* Status */}
              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <p><strong>Current Settings:</strong></p>
                <p>Font Size: {settings.fontSize}px</p>
                <p>Line Height: {settings.lineHeight}</p>
                <p>Letter Spacing: {settings.letterSpacing}px</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

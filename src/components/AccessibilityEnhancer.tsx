import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// Switch component replaced with checkbox
// Label component replaced with simple label
// Separator component replaced with simple div
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
  });
  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };
  const handleSettingChange = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: false,
    };
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
    applySettings(defaultSettings);
  };
  return (
    <>
      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
        <a href="#main-content" className="bg-zion-cyan text-white px-4 py-2 rounded-md">
          Skip to main content
        </a>
        <a href="#navigation" className="bg-zion-cyan text-white px-4 py-2 rounded-md ml-2">
          Skip to navigation
        </a>
      </div>
      {/* Accessibility Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"

  const resetSettings = () => {
    setSettings({
      fontSize: 16,
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      lineHeight: 1.5,
      letterSpacing: 0,
      keyboardNavigation: false,
      screenReader: false
    });
  };

  if (!enabled) return null;

  return (<>
      {/* Accessibility Toggle Button */}
      {showSettings && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 z-50 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label="Accessibility Settings"
          title="Accessibility Settings"
        >
          <Settings className="w-6 h-6" />
        </button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && showSettings && (
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
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray -500" />
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
                    <span className="text-sm text-gray-500">{settings.fontSize}px</span>
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
                        style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
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

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    Large Text
                  </label>
                  <button
                    onClick={() => updateSetting('largeText', !settings.largeText)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
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

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Keyboard Navigation
                  </label>
                  <button
                    onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
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
        )}
      </AnimatePresence>
    </>
  );
};

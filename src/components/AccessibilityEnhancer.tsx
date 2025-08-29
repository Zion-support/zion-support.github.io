import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Move, 
  Keyboard,
  Monitor,
  Smartphone,
  Tablet,
  X,
  Settings,
  Accessibility,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  fontSize: number;
  zoomLevel: number;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false,
    fontSize: 16,
    zoomLevel: 100
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        // // // // console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Show accessibility panel after a delay
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Apply accessibility settings
    applyAccessibilitySettings(settings);
  }, [settings]);

  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion mode
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // High saturation mode
    if (newSettings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Font size
    root.style.fontSize = `${newSettings.fontSize}px`;

    // Zoom level
    root.style.zoom = `${newSettings.zoomLevel / 100}`;
  }, []);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateFontSize = (delta: number) => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(12, Math.min(24, prev.fontSize + delta))
    }));
  };

  const updateZoomLevel = (delta: number) => {
    setSettings(prev => ({
      ...prev,
      zoomLevel: Math.max(50, Math.min(200, prev.zoomLevel + delta))
    }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: false,
      fontSize: 16,
      zoomLevel: 100
    };
    setSettings(defaultSettings);
  };

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  };

  const handleKeyboardShortcuts = useCallback((event: KeyboardEvent) => {
    // Ctrl/Cmd + Alt + A to toggle accessibility panel
    if ((event.ctrlKey || event.metaKey) && event.altKey && event.key === 'a') {
      event.preventDefault();
      setIsOpen(prev => !prev);
      announceToScreenReader('Accessibility panel toggled');
    }

    // Ctrl/Cmd + Alt + C to toggle high contrast
    if ((event.ctrlKey || event.metaKey) && event.altKey && event.key === 'c') {
      event.preventDefault();
      toggleSetting('highContrast');
      announceToScreenReader('High contrast mode toggled');
    }

    // Ctrl/Cmd + Alt + L to toggle large text
    if ((event.ctrlKey || event.metaKey) && event.altKey && event.key === 'l') {
      event.preventDefault();
      toggleSetting('largeText');
      announceToScreenReader('Large text mode toggled');
    }

    // Ctrl/Cmd + Alt + M to toggle reduced motion
    if ((event.ctrlKey || event.metaKey) && event.altKey && event.key === 'm') {
      event.preventDefault();
      toggleSetting('reducedMotion');
      announceToScreenReader('Reduced motion mode toggled');
    }
  }, [settings.screenReader]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts);
  }, [handleKeyboardShortcuts]);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Ctrl+Alt+A)"
      >
        <Accessibility className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <Accessibility className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Accessibility Settings
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Visual Enhancements */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-blue-600" />
                    Visual Enhancements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={() => toggleSetting('highContrast')}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={() => toggleSetting('largeText')}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highSaturation}
                        onChange={() => toggleSetting('highSaturation')}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">High Saturation</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={() => toggleSetting('focusIndicator')}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Focus Indicators</span>
                    </label>
                  </div>
                </div>

                {/* Motion & Interaction */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Move className="w-5 h-5 mr-2 text-green-600" />
                    Motion & Interaction
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={() => toggleSetting('reducedMotion')}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Reduce Motion</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={() => toggleSetting('screenReader')}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Screen Reader Mode</span>
                    </label>
                  </div>
                </div>

                {/* Text & Zoom Controls */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Type className="w-5 h-5 mr-2 text-purple-600" />
                    Text & Zoom Controls
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Font Size: {settings.fontSize}px
                      </label>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateFontSize(-1)}
                          className="p-2 bg-gray-100 dark:bg-slate-700 rounded hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                          aria-label="Decrease font size"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateFontSize(1)}
                          className="p-2 bg-gray-100 dark:bg-slate-700 rounded hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                          aria-label="Increase font size"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Zoom Level: {settings.zoomLevel}%
                      </label>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateZoomLevel(-10)}
                          className="p-2 bg-gray-100 dark:bg-slate-700 rounded hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                          aria-label="Zoom out"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateZoomLevel(10)}
                          className="p-2 bg-gray-100 dark:bg-slate-700 rounded hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                          aria-label="Zoom in"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Keyboard className="w-5 h-5 mr-2 text-orange-600" />
                    Keyboard Shortcuts
                  </h3>
                  <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Toggle Panel:</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-slate-600 rounded text-xs font-mono">Ctrl+Alt+A</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">High Contrast:</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-slate-600 rounded text-xs font-mono">Ctrl+Alt+C</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Large Text:</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-slate-600 rounded text-xs font-mono">Ctrl+Alt+L</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Reduce Motion:</span>
                      <kbd className="px-2 py-1 bg-white dark:bg-slate-600 rounded text-xs font-mono">Ctrl+Alt+M</kbd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-slate-700">
                <button
                  onClick={resetSettings}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Reset to Defaults
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
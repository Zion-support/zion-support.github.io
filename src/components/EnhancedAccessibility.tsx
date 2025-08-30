import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard,
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

export const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });

  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }
  }, []);

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      // Remove after announcement
      setTimeout(() => {
        if (announcement.parentNode) {
          announcement.parentNode.removeChild(announcement);
        }
      }, 1000);

      setAnnouncements(prev => [...prev, message]);
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    
    const action = newSettings[key] ? 'enabled' : 'disabled';
    announceToScreenReader(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${action}`);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true
    };
    setSettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  };

  const handleKeyboardNavigation = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-blue-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
        onKeyDown={handleKeyboardNavigation}
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Accessibility</h2>
                      <p className="text-blue-100">Customize your experience</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label="Close accessibility settings"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="space-y-6">
                  {/* Visual Settings */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Eye className="w-5 h-5 mr-2 text-blue-600" />
                      Visual Settings
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={() => toggleSetting('highContrast')}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 dark:text-gray-300">High Contrast Mode</span>
                        {settings.highContrast && <Check className="w-4 h-4 text-green-500" />}
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.largeText}
                          onChange={() => toggleSetting('largeText')}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                        {settings.largeText && <Check className="w-4 h-4 text-green-500" />}
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={() => toggleSetting('reducedMotion')}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                        {settings.reducedMotion && <Check className="w-4 h-4 text-green-500" />}
                      </label>
                    </div>
                  </div>

                  {/* Navigation Settings */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Keyboard className="w-5 h-5 mr-2 text-purple-600" />
                      Navigation
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={() => toggleSetting('keyboardNavigation')}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Enhanced Keyboard Navigation</span>
                        {settings.keyboardNavigation && <Check className="w-4 h-4 text-green-500" />}
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.focusIndicator}
                          onChange={() => toggleSetting('focusIndicator')}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Focus Indicators</span>
                        {settings.focusIndicator && <Check className="w-4 h-4 text-green-500" />}
                      </label>
                    </div>
                  </div>

                  {/* Screen Reader */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Volume2 className="w-5 h-5 mr-2 text-green-600" />
                      Screen Reader
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.screenReader}
                          onChange={() => toggleSetting('screenReader')}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Enhanced Screen Reader Support</span>
                        {settings.screenReader && <Check className="w-4 h-4 text-green-500" />}
                      </label>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={resetSettings}
                      className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Reset to Default
                    </button>
                  </div>

                  {/* Announcements */}
                  {announcements.length > 0 && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Announcements</h4>
                      <div className="space-y-1">
                        {announcements.slice(-3).map((announcement, index) => (
                          <div key={index} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                            {announcement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements[announcements.length - 1]}
      </div>
    </>
  );
};

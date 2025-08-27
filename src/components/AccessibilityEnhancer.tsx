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
  Monitor,
  Smartphone,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    applyAccessibilitySettings(settings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
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
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Eye className="w-6 h-6 text-white" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 w-80 max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-purple-400/20 rounded-2xl shadow-2xl shadow-purple-400/10 z-40 overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-purple-400/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 id="accessibility-title" className="text-white font-semibold">
                    Accessibility Settings
                  </h3>
                  <p id="accessibility-description" className="text-purple-400 text-sm">
                    Customize your experience
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded"
                aria-label="Close accessibility settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Visual Settings */}
              <div>
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Visual Settings
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <Contrast className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">High Contrast</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={() => toggleSetting('highContrast')}
                      className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <Type className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">Large Text</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={() => toggleSetting('largeText')}
                      className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <EyeOff className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">Reduced Motion</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={() => toggleSetting('reducedMotion')}
                      className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                  </label>
                </div>
              </div>

              {/* Navigation Settings */}
              <div>
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  Navigation Settings
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <MousePointer className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">Focus Indicator</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={() => toggleSetting('focusIndicator')}
                      className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <Keyboard className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">Keyboard Navigation</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={() => toggleSetting('keyboardNavigation')}
                      className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                  </label>
                </div>
              </div>

              {/* Screen Reader Support */}
              <div>
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  Screen Reader Support
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">Enhanced Announcements</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={() => toggleSetting('screenReader')}
                      className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                  </label>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm font-medium rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500/50"
              >
                Reset to Defaults
              </button>

              {/* Keyboard Shortcuts Info */}
              <div className="p-3 bg-purple-500/10 border border-purple-400/20 rounded-lg">
                <h5 className="text-purple-400 font-medium mb-2">Keyboard Shortcuts</h5>
                <div className="text-xs text-gray-300 space-y-1">
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Tab</kbd> Navigate between elements</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Enter</kbd> Activate buttons/links</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Space</kbd> Toggle checkboxes</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Escape</kbd> Close modals</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility settings panel opened
      </div>
    </>
  );
}

// CSS classes for accessibility features
export const accessibilityStyles = `
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .high-contrast {
    --text-primary: #ffffff;
    --text-secondary: #e5e7eb;
    --bg-primary: #000000;
    --bg-secondary: #111827;
    --accent: #fbbf24;
  }

  .large-text {
    font-size: 1.2em;
    line-height: 1.6;
  }

  .reduced-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .focus-visible *:focus {
    outline: 3px solid #fbbf24 !important;
    outline-offset: 2px !important;
  }

  .keyboard-navigation *:focus {
    outline: 3px solid #fbbf24 !important;
    outline-offset: 2px !important;
  }
`;
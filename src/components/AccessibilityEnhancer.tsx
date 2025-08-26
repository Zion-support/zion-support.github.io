import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Palette, 
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
  darkMode: 'light' | 'dark' | 'auto';
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    darkMode: 'auto',
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    applyAccessibilitySettings();
    // Save settings to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.style.setProperty('--background', '0 0% 0%');
      root.style.setProperty('--foreground', '0 0% 100%');
      root.style.setProperty('--card', '0 0% 0%');
      root.style.setProperty('--card-foreground', '0 0% 100%');
    } else {
      root.style.setProperty('--background', '0 0% 7%');
      root.style.setProperty('--foreground', '142 71% 45%');
      root.style.setProperty('--card', '0 0% 7%');
      root.style.setProperty('--card-foreground', '142 71% 45%');
    }

    // Apply text size
    root.style.setProperty('--font-size-base', `${settings.fontSize}px`);
    root.style.setProperty('--line-height-base', settings.lineHeight.toString());
    root.style.setProperty('--letter-spacing-base', `${settings.letterSpacing}px`);

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
    }

    // Apply dark mode
    if (settings.darkMode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (settings.darkMode === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      // Auto mode - respect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      darkMode: 'auto',
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Accessibility className="w-6 h-6 mr-2 text-cyan-400" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-1">High Contrast</h3>
                    <p className="text-gray-400 text-sm">Enhanced contrast for better visibility</p>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ x: settings.highContrast ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Large Text</h3>
                    <p className="text-gray-400 text-sm">Increase text size for better readability</p>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ x: settings.largeText ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Reduced Motion</h3>
                    <p className="text-gray-400 text-sm">Minimize animations and transitions</p>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ x: settings.reducedMotion ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>

                {/* Dark Mode */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Theme</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'light', icon: Sun, label: 'Light' },
                      { value: 'dark', icon: Moon, label: 'Dark' },
                      { value: 'auto', icon: Monitor, label: 'Auto' }
                    ].map(({ value, icon: Icon, label }) => (
                      <button
                        key={value}
                        onClick={() => updateSetting('darkMode', value)}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          settings.darkMode === value
                            ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                            : 'border-gray-600 text-gray-400 hover:border-gray-500'
                        }`}
                        aria-label={`Set theme to ${label}`}
                      >
                        <Icon className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size Slider */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Font Size: {settings.fontSize}px</h3>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={settings.fontSize}
                    onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Line Height Slider */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Line Height: {settings.lineHeight}</h3>
                  <input
                    type="range"
                    min="1.2"
                    max="2.0"
                    step="0.1"
                    value={settings.lineHeight}
                    onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetSettings}
                  className="w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                >
                  Reset to Defaults
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #22ddd2;
          cursor: pointer;
          border: 2px solid #ffffff;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #22ddd2;
          cursor: pointer;
          border: 2px solid #ffffff;
        }
      `}</style>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Type, 
  Volume2, 
  VolumeX,
  Monitor,
  X,
  Settings
} from 'lucide-react';

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    soundEnabled: true,
    focusIndicators: true
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (e) {
        console.warn('Failed to parse accessibility settings:', e);
      }
    }
  }, []);

  const applySettings = (newSettings) => {
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
  };

  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const toggleSound = () => {
    updateSetting('soundEnabled', !settings.soundEnabled);
  };

  const toggleFocusIndicators = () => {
    updateSetting('focusIndicators', !settings.focusIndicators);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Accessibility className="w-6 h-6 text-white" />
        </motion.div>
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-zinc-900/95 backdrop-blur-md border border-zion-cyan/30 rounded-2xl shadow-2xl shadow-zion-cyan/20"
            role="dialog"
            aria-label="Accessibility settings"
            tabIndex={-1}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-zion-cyan" />
                  Accessibility
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white text-sm">High Contrast</span>
                  </div>
                  <button
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-zion-cyan' : 'bg-zinc-600'
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

                {/* Large Text */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Type className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white text-sm">Large Text</span>
                  </div>
                  <button
                    onClick={() => updateSetting('largeText', !settings.largeText)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-zion-cyan' : 'bg-zinc-600'
                    }`}
                    role="switch"
                    aria-checked={settings.largeText}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white text-sm">Reduced Motion</span>
                  </div>
                  <button
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-zion-cyan' : 'bg-zinc-600'
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

                {/* Sound Toggle */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    {settings.soundEnabled ? (
                      <Volume2 className="w-4 h-4 text-zion-cyan" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-zion-slate-light" />
                    )}
                    <span className="text-white text-sm">Sound</span>
                  </div>
                  <button
                    onClick={toggleSound}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.soundEnabled ? 'bg-zion-cyan' : 'bg-zinc-600'
                    }`}
                    role="switch"
                    aria-checked={settings.soundEnabled}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicators */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Accessibility className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white text-sm">Focus Indicators</span>
                  </div>
                  <button
                    onClick={toggleFocusIndicators}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicators ? 'bg-zion-cyan' : 'bg-zinc-600'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicators}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 p-4 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl">
                <p className="text-sm text-zion-cyan-light">
                  These settings help make the website more accessible. Changes are saved automatically.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
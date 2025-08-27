import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Type, 
  Eye, 
  Volume2, 
  Keyboard, 
  X,
  Plus,
  Minus,
  Contrast,
  Sun,
  Moon,
  Settings
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  theme: 'light' | 'dark' | 'auto';
}

export function Accessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    highContrast: false,
    reducedMotion: false,
    soundEnabled: true,
    theme: 'auto'
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }

    // Add keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
        switch (e.key) {
          case '=':
          case '+':
            e.preventDefault();
            increaseFontSize();
            break;
          case '-':
            e.preventDefault();
            decreaseFontSize();
            break;
          case '0':
            e.preventDefault();
            resetSettings();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}px`;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply theme
    if (newSettings.theme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else if (newSettings.theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.remove('light-theme', 'dark-theme');
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
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
      reducedMotion: false,
      soundEnabled: true,
      theme: 'auto'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        aria-label="Accessibility Settings"
        title="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-4 bottom-20 z-50 w-80 bg-slate-900 border border-cyan-400/20 rounded-lg shadow-2xl backdrop-blur-xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-cyan-400" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Font Size Control */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Font Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize <= 12}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                    aria-label="Decrease font size"
                  >
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-white font-mono min-w-[3rem] text-center">
                    {settings.fontSize}px
                  </span>
                  <button
                    onClick={increaseFontSize}
                    disabled={settings.fontSize >= 24}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                    aria-label="Increase font size"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Contrast className="w-4 h-4" />
                    High Contrast
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => updateSetting('highContrast', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </label>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Reduced Motion
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </label>
              </div>

              {/* Theme Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['auto', 'light', 'dark'] as const).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => updateSetting('theme', theme)}
                      className={`p-2 rounded-md text-xs font-medium transition-colors ${
                        settings.theme === theme
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {theme === 'auto' && 'Auto'}
                      {theme === 'light' && <Sun className="w-4 h-4 mx-auto" />}
                      {theme === 'dark' && <Moon className="w-4 h-4 mx-auto" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sound Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Volume2 className="w-4 h-4" />
                    Sound Effects
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.soundEnabled}
                    onChange={(e) => updateSetting('soundEnabled', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.soundEnabled ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </label>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  Keyboard Shortcuts
                </h3>
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Increase Font:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl + +</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Decrease Font:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl + -</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Reset Font:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl + 0</kbd>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors text-sm font-medium"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Type, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Keyboard, 
  X,
  Plus,
  Minus,
  Settings,
  Accessibility,
  Sun,
  Moon
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  keyboardNavigation: boolean;
  darkMode: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    highContrast: false,
    reducedMotion: false,
    soundEnabled: true,
    keyboardNavigation: false,
    darkMode: false
  });

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${newSettings.fontSize}px`;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Dark mode
    if (newSettings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Ctrl/Cmd + Plus to increase font size
      if ((e.ctrlKey || e.metaKey) && e.key === '=') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 24) }));
      }
      
      // Ctrl/Cmd + Minus to decrease font size
      if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 2, 12) }));
      }
      
      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 16,
      highContrast: false,
      reducedMotion: false,
      soundEnabled: true,
      keyboardNavigation: false,
      darkMode: false
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
        aria-label="Accessibility Settings"
        title="Accessibility Settings (Ctrl+Shift+A)"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-6 bottom-20 z-50 w-80 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-2xl shadow-zion-cyan/10 text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-zion-cyan" />
                <h3 className="font-semibold">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-zion-cyan/20 rounded transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Settings Content */}
            <div className="p-4 space-y-4">
              {/* Font Size */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium">
                  <Type className="w-4 h-4 text-zion-cyan" />
                  <span>Font Size</span>
                  <span className="text-zion-cyan">{settings.fontSize}px</span>
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateSetting('fontSize', Math.max(settings.fontSize - 2, 12))}
                    className="p-2 bg-zion-slate hover:bg-zion-slate-light rounded transition-colors"
                    aria-label="Decrease font size"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="flex-1 h-2 bg-zion-slate rounded-full">
                    <div 
                      className="h-full bg-zion-cyan rounded-full transition-all duration-300"
                      style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => updateSetting('fontSize', Math.min(settings.fontSize + 2, 24))}
                    className="p-2 bg-zion-slate hover:bg-zion-slate-light rounded transition-colors"
                    aria-label="Increase font size"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm font-medium">
                  <Contrast className="w-4 h-4 text-zion-cyan" />
                  <span>High Contrast</span>
                </label>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-zion-cyan' : 'bg-zion-slate'
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
                <label className="flex items-center space-x-2 text-sm font-medium">
                  <Eye className="w-4 h-4 text-zion-cyan" />
                  <span>Reduced Motion</span>
                </label>
                <button
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-zion-cyan' : 'bg-zion-slate'
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

              {/* Sound */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm font-medium">
                  {settings.soundEnabled ? (
                    <Volume2 className="w-4 h-4 text-zion-cyan" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-zion-cyan" />
                  )}
                  <span>Sound Effects</span>
                </label>
                <button
                  onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.soundEnabled ? 'bg-zion-cyan' : 'bg-zion-slate'
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

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm font-medium">
                  <Keyboard className="w-4 h-4 text-zion-cyan" />
                  <span>Keyboard Navigation</span>
                </label>
                <button
                  onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-zion-cyan' : 'bg-zion-slate'
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

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm font-medium">
                  {settings.darkMode ? (
                    <Moon className="w-4 h-4 text-zion-cyan" />
                  ) : (
                    <Sun className="w-4 h-4 text-zion-cyan" />
                  )}
                  <span>Dark Mode</span>
                </label>
                <button
                  onClick={() => updateSetting('darkMode', !settings.darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.darkMode ? 'bg-zion-cyan' : 'bg-zion-slate'
                  }`}
                  role="switch"
                  aria-checked={settings.darkMode}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-zion-slate hover:bg-zion-slate-light text-zion-cyan rounded transition-colors"
              >
                Reset to Defaults
              </button>

              {/* Keyboard Shortcuts Help */}
              <div className="pt-2 border-t border-zion-cyan/20">
                <h4 className="text-xs font-medium text-zion-cyan mb-2">Keyboard Shortcuts</h4>
                <div className="text-xs space-y-1 text-gray-300">
                  <div>Ctrl+Shift+A: Toggle panel</div>
                  <div>Ctrl+Plus: Increase font</div>
                  <div>Ctrl+Minus: Decrease font</div>
                  <div>Ctrl+Shift+H: High contrast</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
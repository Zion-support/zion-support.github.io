import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  MousePointer, 
  Keyboard,
  Contrast,
  Sun,
  Moon,
  Monitor,
  Settings,
  X,
  CheckCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  highContrastText: boolean;
  focusIndicator: boolean;
  soundEffects: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
}

export const EnhancedAccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    highContrastText: false,
    focusIndicator: true,
    soundEffects: true,
    keyboardNavigation: true,
    screenReader: false,
    colorBlindness: 'none',
    fontSize: 'medium'
  });

  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'keyboard'>('general');

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    
    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(updatedSettings));
    
    // Apply visual changes
    const root = document.documentElement;
    
    if (updatedSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (updatedSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (updatedSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (updatedSettings.highContrastText) {
      root.classList.add('high-contrast-text');
    } else {
      root.classList.remove('high-contrast-text');
    }
    
    // Apply color blindness filters
    root.style.filter = updatedSettings.colorBlindness !== 'none' 
      ? `url(#${updatedSettings.colorBlindness}-filter)` 
      : 'none';
    
    // Apply font size
    root.style.fontSize = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'xlarge': '20px'
    }[updatedSettings.fontSize];
  }, [settings]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: any) => {
    applySettings({ [key]: value });
  }, [applySettings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Escape to close panel
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Apply initial settings
  useEffect(() => {
    applySettings(settings);
  }, []);

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'audio', label: 'Audio', icon: Volume2 },
    { id: 'keyboard', label: 'Keyboard', icon: Keyboard }
  ] as const;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        title="Accessibility Settings (Alt + A)"
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Accessibility className="w-6 h-6 mr-3 text-cyan-400" />
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-cyan-400 border-b-2 border-cyan-400 bg-slate-800'
                        : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'general' && (
                    <motion.div
                      key="general"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">General Settings</h3>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-white font-medium">High Contrast Mode</label>
                            <p className="text-slate-400 text-sm">Enhance contrast for better visibility</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.highContrast ? 'bg-cyan-600' : 'bg-slate-600'
                            }`}
                            aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-white font-medium">Reduced Motion</label>
                            <p className="text-slate-400 text-sm">Reduce animations for motion sensitivity</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.reducedMotion ? 'bg-cyan-600' : 'bg-slate-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-white font-medium">Large Text</label>
                            <p className="text-slate-400 text-sm">Increase text size for better readability</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('largeText', !settings.largeText)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.largeText ? 'bg-cyan-600' : 'bg-slate-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.largeText ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'visual' && (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Visual Settings</h3>
                        
                        <div>
                          <label className="text-white font-medium block mb-2">Font Size</label>
                          <select
                            value={settings.fontSize}
                            onChange={(e) => handleSettingChange('fontSize', e.target.value)}
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          >
                            <option value="small">Small (14px)</option>
                            <option value="medium">Medium (16px)</option>
                            <option value="large">Large (18px)</option>
                            <option value="xlarge">Extra Large (20px)</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-white font-medium block mb-2">Color Blindness Support</label>
                          <select
                            value={settings.colorBlindness}
                            onChange={(e) => handleSettingChange('colorBlindness', e.target.value)}
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          >
                            <option value="none">None</option>
                            <option value="protanopia">Protanopia (Red-Blind)</option>
                            <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                            <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-white font-medium">Focus Indicators</label>
                            <p className="text-slate-400 text-sm">Show clear focus indicators</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.focusIndicator ? 'bg-cyan-600' : 'bg-slate-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'audio' && (
                    <motion.div
                      key="audio"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Audio Settings</h3>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-white font-medium">Sound Effects</label>
                            <p className="text-slate-400 text-sm">Enable audio feedback for interactions</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('soundEffects', !settings.soundEffects)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.soundEffects ? 'bg-cyan-600' : 'bg-slate-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-white font-medium">Screen Reader Support</label>
                            <p className="text-slate-400 text-sm">Optimize for screen readers</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('screenReader', !settings.screenReader)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.screenReader ? 'bg-cyan-600' : 'bg-slate-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'keyboard' && (
                    <motion.div
                      key="keyboard"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Keyboard Navigation</h3>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-white font-medium">Enhanced Keyboard Navigation</label>
                            <p className="text-slate-400 text-sm">Enable advanced keyboard shortcuts</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('keyboardNavigation', !settings.keyboardNavigation)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings.keyboardNavigation ? 'bg-cyan-600' : 'bg-slate-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        <div className="bg-slate-800 rounded-lg p-4">
                          <h4 className="text-white font-medium mb-3">Keyboard Shortcuts</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-300">Open Accessibility Panel:</span>
                              <kbd className="bg-slate-700 px-2 py-1 rounded text-cyan-400">Alt + A</kbd>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300">Close Panel:</span>
                              <kbd className="bg-slate-700 px-2 py-1 rounded text-cyan-400">Escape</kbd>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300">Navigate Tabs:</span>
                              <kbd className="bg-slate-700 px-2 py-1 rounded text-cyan-400">Tab</kbd>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-700 bg-slate-800/50">
                <div className="flex items-center justify-between">
                  <p className="text-slate-400 text-sm">
                    Settings are automatically saved and applied
                  </p>
                  <button
                    onClick={() => {
                      const defaultSettings: AccessibilitySettings = {
                        highContrast: false,
                        reducedMotion: false,
                        largeText: false,
                        highContrastText: false,
                        focusIndicator: true,
                        soundEffects: true,
                        keyboardNavigation: true,
                        screenReader: false,
                        colorBlindness: 'none',
                        fontSize: 'medium'
                      };
                      setSettings(defaultSettings);
                      applySettings(defaultSettings);
                    }}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
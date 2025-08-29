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
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindFriendly: boolean;
}

export const EnhancedAccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindFriendly: false
  });

  const [activeTab, setActiveTab] = useState<'visual' | 'navigation' | 'audio'>('visual');

  useEffect(() => {
    // Apply accessibility settings to document
    applyAccessibilitySettings();
    
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applyAccessibilitySettings(parsed);
    }
  }, []);

  const applyAccessibilitySettings = (newSettings = settings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--zion-cyan', '0 255 255');
      root.style.setProperty('--zion-purple', '255 0 255');
    } else {
      root.classList.remove('high-contrast');
      root.style.setProperty('--zion-cyan', '34 221 210');
      root.style.setProperty('--zion-purple', '147 51 234');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '120%';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '100%';
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--transition-fast', '0ms');
      root.style.setProperty('--transition-normal', '0ms');
      root.style.setProperty('--transition-slow', '0ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.setProperty('--transition-fast', '150ms ease-in-out');
      root.style.setProperty('--transition-normal', '250ms ease-in-out');
      root.style.setProperty('--transition-slow', '350ms ease-in-out');
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '59 130 246');
    } else {
      root.style.setProperty('--focus-ring', 'transparent');
    }
    
    // Color blind friendly
    if (newSettings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindFriendly: false
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
    localStorage.removeItem('zion-accessibility-settings');
  };

  const tabs = [
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'navigation', label: 'Navigation', icon: Keyboard },
    { id: 'audio', label: 'Audio', icon: Volume2 }
  ] as const;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-4 bottom-20 z-50 w-80 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
              <h2 id="accessibility-panel-title" className="text-lg font-semibold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-slate-700/50">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-cyan-400 border-b-2 border-cyan-400'
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                    aria-selected={activeTab === tab.id}
                    role="tab"
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Visual Tab */}
              {activeTab === 'visual' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Contrast className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">High Contrast</div>
                        <div className="text-xs text-slate-400">Enhanced color contrast</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        settings.highContrast ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform transform ${
                          settings.highContrast ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Type className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">Large Text</div>
                        <div className="text-xs text-slate-400">Increase text size</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => updateSetting('largeText', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        settings.largeText ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform transform ${
                          settings.largeText ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">Color Blind Friendly</div>
                        <div className="text-xs text-slate-400">Optimized color schemes</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.colorBlindFriendly}
                        onChange={(e) => updateSetting('colorBlindFriendly', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        settings.colorBlindFriendly ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform transform ${
                          settings.colorBlindFriendly ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Tab */}
              {activeTab === 'navigation' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Keyboard className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">Keyboard Navigation</div>
                        <div className="text-xs text-slate-400">Enhanced keyboard support</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform transform ${
                          settings.keyboardNavigation ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MousePointer className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">Focus Indicator</div>
                        <div className="text-xs text-slate-400">Visible focus outlines</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform transform ${
                          settings.focusIndicator ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Audio Tab */}
              {activeTab === 'audio' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">Screen Reader</div>
                        <div className="text-xs text-slate-400">Enhanced screen reader support</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => updateSetting('screenReader', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        settings.screenReader ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform transform ${
                          settings.screenReader ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <EyeOff className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">Reduced Motion</div>
                        <div className="text-xs text-slate-400">Minimize animations</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-cyan-500' : 'bg-slate-600'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform transform ${
                          settings.reducedMotion ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </div>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-slate-700/50 flex gap-2">
              <button
                onClick={resetSettings}
                className="flex-1 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg transition-colors"
              >
                Apply
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  MousePointer, 
  Keyboard, 
  Monitor, 
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'normal' | 'large' | 'extra-large';
  lineSpacing: 'normal' | 'relaxed' | 'very-relaxed';
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindness: 'none',
    fontSize: 'normal',
    lineSpacing: 'normal'
  });

  const [showHelp, setShowHelp] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<string>('');

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
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

    // High saturation
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

    // Color blindness simulation
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(newSettings.colorBlindness);
    }

    // Font size
    root.classList.remove('text-large', 'text-extra-large');
    if (newSettings.fontSize !== 'normal') {
      root.classList.add(`text-${newSettings.fontSize}`);
    }

    // Line spacing
    root.classList.remove('line-relaxed', 'line-very-relaxed');
    if (newSettings.lineSpacing !== 'normal') {
      root.classList.add(`line-${newSettings.lineSpacing}`);
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }
  }, [applySettings]);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: false,
      keyboardNavigation: false,
      colorBlindness: 'none',
      fontSize: 'normal',
      lineSpacing: 'normal'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  }, [applySettings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to open accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }

      // Ctrl/Cmd + Shift + H for high contrast
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        updateSetting('highContrast', !settings.highContrast);
      }

      // Ctrl/Cmd + Shift + L for large text
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        updateSetting('largeText', !settings.largeText);
      }

      // Ctrl/Cmd + Shift + M for reduced motion
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'M') {
        e.preventDefault();
        updateSetting('reducedMotion', !settings.reducedMotion);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, settings, updateSetting]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Help content
  const helpContent = {
    'high-contrast': 'High contrast mode increases the contrast between text and background colors for better readability.',
    'large-text': 'Large text mode increases font sizes throughout the website for easier reading.',
    'reduced-motion': 'Reduced motion mode disables animations and transitions for users sensitive to motion.',
    'high-saturation': 'High saturation mode increases color intensity for better visibility.',
    'focus-indicator': 'Focus indicator mode provides clear visual feedback for keyboard navigation.',
    'color-blindness': 'Color blindness simulation helps designers understand how colors appear to users with different types of color vision deficiency.',
    'font-size': 'Font size controls allow you to adjust text size to your preference.',
    'line-spacing': 'Line spacing controls allow you to adjust the space between lines of text for better readability.'
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-zion-slate border border-zion-cyan/30 rounded-2xl p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            id="accessibility-panel"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 id="accessibility-title" className="text-xl font-bold text-white flex items-center">
                <Settings className="w-5 h-5 mr-2 text-zion-cyan" />
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

            <p id="accessibility-description" className="text-gray-400 text-sm mb-6">
              Customize your viewing experience with these accessibility features.
            </p>

            {/* Quick Actions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    settings.highContrast
                      ? 'bg-zion-cyan/20 border-zion-cyan text-zion-cyan'
                      : 'bg-zion-slate-light/20 border-zion-cyan/30 text-gray-300 hover:bg-zion-cyan/10'
                  }`}
                  aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                >
                  <Eye className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs">High Contrast</span>
                </button>

                <button
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    settings.largeText
                      ? 'bg-zion-cyan/20 border-zion-cyan text-zion-cyan'
                      : 'bg-zion-slate-light/20 border-zion-cyan/30 text-gray-300 hover:bg-zion-cyan/10'
                  }`}
                  aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text mode`}
                >
                  <Type className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs">Large Text</span>
                </button>

                <button
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    settings.reducedMotion
                      ? 'bg-zion-cyan/20 border-zion-cyan text-zion-cyan'
                      : 'bg-zion-slate-light/20 border-zion-cyan/30 text-gray-300 hover:bg-zion-cyan/10'
                  }`}
                  aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion mode`}
                >
                  <MousePointer className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs">Reduced Motion</span>
                </button>

                <button
                  onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    settings.focusIndicator
                      ? 'bg-zion-cyan/20 border-zion-cyan text-zion-cyan'
                      : 'bg-zion-slate-light/20 border-zion-cyan/30 text-gray-300 hover:bg-zion-cyan/10'
                  }`}
                  aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicators`}
                >
                  <Keyboard className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs">Focus Indicators</span>
                </button>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Advanced Settings</h3>
              
              {/* Color Blindness */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Color Blindness Simulation
                </label>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                  className="w-full p-2 bg-zion-slate-light/20 border border-zion-cyan/30 rounded-lg text-white focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>

              {/* Font Size */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Font Size
                </label>
                <div className="flex space-x-2">
                  {(['normal', 'large', 'extra-large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`px-3 py-1 rounded text-sm transition-all duration-200 ${
                        settings.fontSize === size
                          ? 'bg-zion-cyan text-white'
                          : 'bg-zion-slate-light/20 text-gray-300 hover:bg-zion-cyan/10'
                      }`}
                    >
                      {size === 'normal' ? 'Normal' : size === 'large' ? 'Large' : 'Extra Large'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Line Spacing */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Line Spacing
                </label>
                <div className="flex space-x-2">
                  {(['normal', 'relaxed', 'very-relaxed'] as const).map((spacing) => (
                    <button
                      key={spacing}
                      onClick={() => updateSetting('lineSpacing', spacing)}
                      className={`px-3 py-1 rounded text-sm transition-all duration-200 ${
                        settings.lineSpacing === spacing
                          ? 'bg-zion-cyan text-white'
                          : 'bg-zion-slate-light/20 text-gray-300 hover:bg-zion-cyan/10'
                      }`}
                    >
                      {spacing === 'normal' ? 'Normal' : spacing === 'relaxed' ? 'Relaxed' : 'Very Relaxed'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Keyboard Shortcuts</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Open Accessibility Panel:</span>
                  <kbd className="px-2 py-1 bg-zion-slate-light/20 rounded text-xs">Ctrl/Cmd + Shift + A</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Toggle High Contrast:</span>
                  <kbd className="px-2 py-1 bg-zion-slate-light/20 rounded text-xs">Ctrl/Cmd + Shift + H</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Toggle Large Text:</span>
                  <kbd className="px-2 py-1 bg-zion-slate-light/20 rounded text-xs">Ctrl/Cmd + Shift + L</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Toggle Reduced Motion:</span>
                  <kbd className="px-2 py-1 bg-zion-slate-light/20 rounded text-xs">Ctrl/Cmd + Shift + M</kbd>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <button
                onClick={resetToDefaults}
                className="flex-1 px-4 py-2 bg-zion-slate-light/20 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-200"
              >
                Reset to Defaults
              </button>
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="px-4 py-2 bg-zion-slate-light/20 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-200"
                aria-label="Show help"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Help Tooltip */}
            {showHelp && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg"
              >
                <p className="text-sm text-gray-300">
                  {helpContent[currentFeature as keyof typeof helpContent] || 
                   'Hover over any setting to see detailed help information.'}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {settings.highContrast && 'High contrast mode enabled'}
        {settings.largeText && 'Large text mode enabled'}
        {settings.reducedMotion && 'Reduced motion mode enabled'}
      </div>
    </>
  );
};
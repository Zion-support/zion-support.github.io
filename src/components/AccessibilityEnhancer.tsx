import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Sun,
  Moon,
  Contrast,
  Type,
  Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  reducedMotion: boolean;
  highContrastMode: 'default' | 'high' | 'ultra';
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

export function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    highContrastMode: 'default',
    focusIndicator: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlindness: 'none'
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    const fontSizeMap = {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.25rem'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      if (settings.highContrastMode === 'ultra') {
        root.classList.add('ultra-high-contrast');
      }
    } else {
      root.classList.remove('high-contrast', 'ultra-high-contrast');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blindness simulation
    if (settings.colorBlindness !== 'none') {
      root.classList.add(`color-blind-${settings.colorBlindness}`);
    } else {
      root.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia');
    }
  }, [settings]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
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
  }, [settings.screenReader]);

  // Update setting helper
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Announce changes to screen reader
    const keyNames = {
      highContrast: 'high contrast',
      fontSize: 'font size',
      reducedMotion: 'reduced motion',
      highContrastMode: 'high contrast mode',
      focusIndicator: 'focus indicator',
      screenReader: 'screen reader',
      keyboardNavigation: 'keyboard navigation',
      colorBlindness: 'color blindness simulation'
    };
    
    announceToScreenReader(`${keyNames[key]} ${value === true ? 'enabled' : value === false ? 'disabled' : 'set to ' + value}`);
  }, [announceToScreenReader]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!settings.keyboardNavigation) return;

      // Ctrl/Cmd + H: Toggle high contrast
      if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        updateSetting('highContrast', !settings.highContrast);
      }

      // Ctrl/Cmd + L: Toggle large text
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        const sizes = ['small', 'medium', 'large', 'xlarge'] as const;
        const currentIndex = sizes.indexOf(settings.fontSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        updateSetting('fontSize', sizes[nextIndex]);
      }

      // Ctrl/Cmd + M: Toggle reduced motion
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        updateSetting('reducedMotion', !settings.reducedMotion);
      }

      // Escape: Close accessibility panel
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isOpen, updateSetting]);

  // Show accessibility panel after a delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {children}
      
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 id="accessibility-title" className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Accessibility className="w-5 h-5" />
                  <span>Accessibility</span>
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>

              {/* Font Size Control */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <Type className="w-4 h-4" />
                  <span>Text Size</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                        settings.fontSize === size
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate-light/20 text-white hover:bg-zion-slate-light/30'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <Contrast className="w-4 h-4" />
                  <span>High Contrast</span>
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => updateSetting('highContrast', e.target.checked)}
                      className="rounded border-zion-slate-light/30 text-zion-cyan focus:ring-zion-cyan/30"
                    />
                    <span className="text-white">Enable High Contrast</span>
                  </label>
                  
                  {settings.highContrast && (
                    <div className="ml-6 space-y-2">
                      {(['default', 'high', 'ultra'] as const).map((mode) => (
                        <label key={mode} className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="contrastMode"
                            checked={settings.highContrastMode === mode}
                            onChange={(e) => updateSetting('highContrastMode', mode)}
                            className="border-zion-slate-light/30 text-zion-cyan focus:ring-zion-cyan/30"
                          />
                          <span className="text-white capitalize">{mode}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Reduced Motion */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>Motion</span>
                </h4>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                    className="rounded border-zion-slate-light/30 text-zion-cyan focus:ring-zion-cyan/30"
                  />
                  <span className="text-white">Reduce Motion</span>
                </label>
              </div>

              {/* Focus Indicator */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <Keyboard className="w-4 h-4" />
                  <span>Focus</span>
                </h4>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicator}
                    onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                    className="rounded border-zion-slate-light/30 text-zion-cyan focus:ring-zion-cyan/30"
                  />
                  <span className="text-white">Enhanced Focus Indicators</span>
                </label>
              </div>

              {/* Screen Reader */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <Volume2 className="w-4 h-4" />
                  <span>Screen Reader</span>
                </h4>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={(e) => updateSetting('screenReader', e.target.checked)}
                    className="rounded border-zion-slate-light/30 text-zion-cyan focus:ring-zion-cyan/30"
                  />
                  <span className="text-white">Enable Screen Reader Support</span>
                </label>
              </div>

              {/* Color Blindness Simulation */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Color Vision</span>
                </h4>
                <div className="space-y-2">
                  {(['none', 'protanopia', 'deuteranopia', 'tritanopia'] as const).map((type) => (
                    <label key={type} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="colorBlindness"
                        checked={settings.colorBlindness === type}
                        onChange={(e) => updateSetting('colorBlindness', type)}
                        className="border-zion-slate-light/30 text-zion-cyan focus:ring-zion-cyan/30"
                      />
                      <span className="text-white capitalize">
                        {type === 'none' ? 'Normal' : type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="pt-4 border-t border-zion-slate-light/20">
                <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                  <Keyboard className="w-4 h-4" />
                  <span>Keyboard Shortcuts</span>
                </h4>
                <div className="text-xs text-zion-slate-light space-y-1">
                  <div>Ctrl/Cmd + H: Toggle High Contrast</div>
                  <div>Ctrl/Cmd + L: Cycle Text Size</div>
                  <div>Ctrl/Cmd + M: Toggle Reduced Motion</div>
                  <div>Tab: Navigate Elements</div>
                  <div>Escape: Close Panel</div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-zion-slate-light/20">
                <button
                  onClick={() => {
                    const defaultSettings: AccessibilitySettings = {
                      highContrast: false,
                      fontSize: 'medium',
                      reducedMotion: false,
                      highContrastMode: 'default',
                      focusIndicator: true,
                      screenReader: false,
                      keyboardNavigation: true,
                      colorBlindness: 'none'
                    };
                    setSettings(defaultSettings);
                    announceToScreenReader('Accessibility settings reset to default');
                  }}
                  className="w-full px-4 py-2 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset to Default</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

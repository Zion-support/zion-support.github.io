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

export function AccessibilityEnhancer() {
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
    } else {
      root.classList.remove('high-contrast');
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
      root.classList.add(`color-blindness-${settings.colorBlindness}`);
    } else {
      root.classList.remove('color-blindness-protanopia', 'color-blindness-deuteranopia', 'color-blindness-tritanopia');
    }

    // High contrast mode
    root.style.setProperty('--high-contrast-mode', settings.highContrastMode);
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const navigation = document.querySelector('nav, [role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }

      // Skip to footer
      if (e.key === 'Tab' && e.ctrlKey) {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          (footer as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

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

  // Toggle settings
  const toggleSetting = (key: keyof AccessibilitySettings, value?: any) => {
    const newValue = value !== undefined ? value : !settings[key];
    setSettings(prev => ({ ...prev, [key]: newValue }));
    
    // Announce changes to screen readers
    const settingNames = {
      highContrast: 'High contrast',
      fontSize: 'Font size',
      reducedMotion: 'Reduced motion',
      focusIndicator: 'Focus indicator',
      screenReader: 'Screen reader mode',
      keyboardNavigation: 'Keyboard navigation',
      colorBlindness: 'Color blindness mode'
    };
    
    announceToScreenReader(`${settingNames[key]} ${newValue ? 'enabled' : 'disabled'}`);
  };

  // Reset to defaults
  const resetToDefaults = () => {
    const defaults: AccessibilitySettings = {
      highContrast: false,
      fontSize: 'medium',
      reducedMotion: false,
      highContrastMode: 'default',
      focusIndicator: true,
      screenReader: false,
      keyboardNavigation: true,
      colorBlindness: 'none'
    };
    setSettings(defaults);
    announceToScreenReader('Accessibility settings reset to defaults');
  };

  // Show accessibility panel after a delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
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
                <h3 id="accessibility-title" className="text-lg font-semibold text-white">
                  Accessibility Settings
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>
              
              <p id="accessibility-description" className="text-sm text-zion-slate-light">
                Customize your experience with these accessibility options
              </p>

              {/* Font Size */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-white">
                  <Type className="w-4 h-4" />
                  <span>Font Size</span>
                </label>
                <div className="flex space-x-2">
                  {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSetting('fontSize', size)}
                      className={`px-3 py-1 rounded text-xs transition-colors ${
                        settings.fontSize === size
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate-light/20 text-zion-slate-light hover:bg-zion-slate-light/30'
                      }`}
                      aria-pressed={settings.fontSize === size}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-white">
                  <Contrast className="w-4 h-4" />
                  <span>High Contrast</span>
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-zion-cyan' : 'bg-zion-slate-light/30'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                    aria-label="Toggle high contrast"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className="text-sm text-zion-slate-light">
                    {settings.highContrast ? 'On' : 'Off'}
                  </span>
                </div>
              </div>

              {/* Reduced Motion */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-white">
                  <MousePointer className="w-4 h-4" />
                  <span>Reduced Motion</span>
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-zion-cyan' : 'bg-zion-slate-light/30'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                    aria-label="Toggle reduced motion"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className="text-sm text-zion-slate-light">
                    {settings.reducedMotion ? 'On' : 'Off'}
                  </span>
                </div>
              </div>

              {/* Focus Indicator */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-white">
                  <Keyboard className="w-4 h-4" />
                  <span>Focus Indicator</span>
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-zion-cyan' : 'bg-zion-slate-light/30'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicator}
                    aria-label="Toggle focus indicator"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className="text-sm text-zion-slate-light">
                    {settings.focusIndicator ? 'On' : 'Off'}
                  </span>
                </div>
              </div>

              {/* Keyboard Shortcuts Info */}
              <div className="bg-zion-slate-light/10 rounded-lg p-4 space-y-2">
                <h4 className="text-sm font-medium text-white">Keyboard Shortcuts</h4>
                <div className="text-xs text-zion-slate-light space-y-1">
                  <div>Alt + Tab: Skip to main content</div>
                  <div>Alt + Shift + Tab: Skip to navigation</div>
                  <div>Ctrl + Tab: Skip to footer</div>
                  <div>Escape: Close panels</div>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetToDefaults}
                className="w-full px-4 py-2 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Defaults</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Accessibility Styles */}
      <style jsx global>{`
        /* High Contrast Mode */
        .high-contrast {
          --zion-cyan: 0 255 255;
          --zion-purple: 255 0 255;
          --zion-neon: 255 255 0;
        }

        /* Reduced Motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Focus Indicators */
        .focus-visible *:focus {
          outline: 3px solid var(--zion-cyan) !important;
          outline-offset: 2px !important;
        }

        /* Color Blindness Simulations */
        .color-blindness-protanopia {
          filter: url('#protanopia-filter');
        }

        .color-blindness-deuteranopia {
          filter: url('#deuteranopia-filter');
        }

        .color-blindness-tritanopia {
          filter: url('#tritanopia-filter');
        }

        /* Screen Reader Only */
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
      `}</style>

      {/* SVG Filters for Color Blindness */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="protanopia-filter">
            <feColorMatrix type="matrix" values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0"/>
          </filter>
          <filter id="deuteranopia-filter">
            <feColorMatrix type="matrix" values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0"/>
          </filter>
          <filter id="tritanopia-filter">
            <feColorMatrix type="matrix" values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0"/>
          </filter>
        </defs>
      </svg>
    </>
  );
}

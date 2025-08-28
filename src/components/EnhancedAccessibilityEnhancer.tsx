import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindMode: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

export function EnhancedAccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindMode: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });

  const [currentDevice, setCurrentDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Detect device type
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCurrentDevice('mobile');
      } else if (width < 1024) {
        setCurrentDevice('tablet');
      } else {
        setCurrentDevice('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.style.setProperty('--zion-cyan', '255 255 255');
      root.style.setProperty('--zion-purple', '255 255 255');
      root.style.setProperty('--zion-neon', '255 255 255');
      root.classList.add('high-contrast');
    } else {
      root.style.setProperty('--zion-cyan', '56 189 248');
      root.style.setProperty('--zion-purple', '168 85 247');
      root.style.setProperty('--zion-neon', '34 221 210');
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--font-size-base', '18px');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--font-size-base', '16px');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.classList.add('reduced-motion');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blind mode
    if (settings.colorBlindMode) {
      root.classList.add('colorblind-friendly');
    } else {
      root.classList.remove('colorblind-friendly');
    }

    // Custom font settings
    root.style.setProperty('--font-size', `${settings.fontSize}px`);
    root.style.setProperty('--line-height', settings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);

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

  const toggleSetting = (key: keyof AccessibilitySettings, value?: any) => {
    const newValue = value !== undefined ? value : !settings[key];
    setSettings(prev => ({ ...prev, [key]: newValue }));
    
    // Announce changes to screen readers
    const settingNames = {
      highContrast: 'High contrast mode',
      largeText: 'Large text mode',
      reducedMotion: 'Reduced motion mode',
      screenReader: 'Screen reader mode',
      keyboardNavigation: 'Keyboard navigation mode',
      focusIndicator: 'Focus indicator mode',
      colorBlindMode: 'Color blind friendly mode'
    };
    
    if (key in settingNames) {
      announceToScreenReader(`${settingNames[key as keyof typeof settingNames]} ${newValue ? 'enabled' : 'disabled'}`);
    }
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindMode: false,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0
    });
    announceToScreenReader('Accessibility settings reset to default');
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Eye className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            className="fixed bottom-24 right-6 z-40 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 id="accessibility-title" className="text-lg font-semibold text-white">
                    Accessibility Settings
                  </h3>
                  <p id="accessibility-description" className="text-sm text-gray-400 mt-1">
                    Customize your experience for better accessibility
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Close accessibility settings"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Settings Content */}
            <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
              {/* Visual Settings */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Visual Settings
                </h4>
                
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <Contrast className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">High Contrast</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('highContrast')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.highContrast}
                      aria-label="Toggle high contrast mode"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <Type className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Large Text</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('largeText')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.largeText}
                      aria-label="Toggle large text mode"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.largeText ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <VolumeX className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Reduced Motion</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('reducedMotion')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.reducedMotion}
                      aria-label="Toggle reduced motion mode"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Color Blind Friendly</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('colorBlindMode')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.colorBlindMode ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.colorBlindMode}
                      aria-label="Toggle color blind friendly mode"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.colorBlindMode ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                </div>
              </div>

              {/* Navigation Settings */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Navigation
                </h4>
                
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <Keyboard className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Keyboard Navigation</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('keyboardNavigation')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.keyboardNavigation}
                      aria-label="Toggle keyboard navigation mode"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <MousePointer className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Focus Indicators</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('focusIndicator')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.focusIndicator ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.focusIndicator}
                      aria-label="Toggle focus indicators"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                </div>
              </div>

              {/* Font Size Control */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Font Size
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Size: {settings.fontSize}px</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                        className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition-colors duration-200"
                        aria-label="Decrease font size"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleSetting('fontSize', Math.min(24, settings.fontSize + 2))}
                        className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition-colors duration-200"
                        aria-label="Increase font size"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Device Info */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Current Device
                </h4>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  {currentDevice === 'desktop' && <Monitor className="w-5 h-5 text-cyan-400" />}
                  {currentDevice === 'tablet' && <Tablet className="w-5 h-5 text-cyan-400" />}
                  {currentDevice === 'mobile' && <Smartphone className="w-5 h-5 text-cyan-400" />}
                  <span className="text-white capitalize">{currentDevice}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700/50 bg-gray-800/30">
              <div className="flex items-center justify-between">
                <button
                  onClick={resetSettings}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Reset all accessibility settings"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="text-sm">Reset</span>
                </button>
                
                <div className="text-xs text-gray-500">
                  Alt+Tab: Skip to content
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Help */}
      {settings.keyboardNavigation && (
        <div className="fixed bottom-6 left-6 z-30">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 text-xs text-gray-400">
            <div className="font-medium text-white mb-2">Keyboard Shortcuts</div>
            <div className="space-y-1">
              <div>Alt+Tab: Skip to content</div>
              <div>Alt+Shift+Tab: Skip to navigation</div>
              <div>Escape: Close modals</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

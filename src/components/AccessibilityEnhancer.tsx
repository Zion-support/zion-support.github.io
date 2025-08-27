import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  Keyboard,
  MousePointer,
  Accessibility,
  Settings
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: true,
    keyboardNavigation: true
  });

  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [wordSpacing, setWordSpacing] = useState(0);

  const settingsRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Apply accessibility settings to document
  const applyAccessibilitySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (updatedSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--zion-cyan', '#00ffff');
      root.style.setProperty('--zion-purple', '#ff00ff');
      root.style.setProperty('--zion-slate', '#ffffff');
      root.style.setProperty('--zion-slate-light', '#e0e0e0');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--zion-cyan');
      root.style.removeProperty('--zion-purple');
      root.style.removeProperty('--zion-slate');
      root.style.removeProperty('--zion-slate-light');
    }

    // Large text mode
    if (updatedSettings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }

    // Reduced motion
    if (updatedSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }

    // High saturation
    if (updatedSettings.highSaturation) {
      root.classList.add('high-saturation');
      root.style.filter = 'saturate(1.5) contrast(1.2)';
    } else {
      root.classList.remove('high-saturation');
      root.style.filter = '';
    }

    // Focus indicator
    if (updatedSettings.focusIndicator) {
      root.classList.add('focus-indicator');
      root.style.setProperty('--focus-outline', '3px solid #00ffff');
    } else {
      root.classList.remove('focus-indicator');
      root.style.removeProperty('--focus-outline');
    }

    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Apply font settings
  const applyFontSettings = useCallback(() => {
    const root = document.documentElement;
    root.style.setProperty('--font-size', `${fontSize}px`);
    root.style.setProperty('--line-height', lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${letterSpacing}px`);
    root.style.setProperty('--word-spacing', `${wordSpacing}px`);

    // Save to localStorage
    localStorage.setItem('zion-font-settings', JSON.stringify({
      fontSize,
      lineHeight,
      letterSpacing,
      wordSpacing
    }));
  }, [fontSize, lineHeight, letterSpacing, wordSpacing]);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    try {
      const savedSettings = localStorage.getItem('zion-accessibility-settings');
      const savedFontSettings = localStorage.getItem('zion-font-settings');

      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      }

      if (savedFontSettings) {
        const parsed = JSON.parse(savedFontSettings);
        setFontSize(parsed.fontSize || 16);
        setLineHeight(parsed.lineHeight || 1.5);
        setLetterSpacing(parsed.letterSpacing || 0);
        setWordSpacing(parsed.wordSpacing || 0);
        applyFontSettings();
      }
    } catch (error) {
      console.warn('Failed to load accessibility settings:', error);
    }
  }, [enabled, applyAccessibilitySettings, applyFontSettings]);

  // Apply font settings when they change
  useEffect(() => {
    if (enabled) {
      applyFontSettings();
    }
  }, [enabled, applyFontSettings]);

  // Keyboard navigation
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
          break;

        case 'Escape':
          if (isOpen) {
            setIsOpen(false);
            toggleRef.current?.focus();
          }
          break;

        case 'h':
        case 'H':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            setIsOpen(!isOpen);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation, isOpen]);

  // Focus management
  useEffect(() => {
    if (!enabled) return;

    // Add focus indicators to all interactive elements
    const addFocusIndicators = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]'
      );

      interactiveElements.forEach((element) => {
        if (!element.hasAttribute('data-focus-indicator-added')) {
          element.setAttribute('data-focus-indicator-added', 'true');
          
          element.addEventListener('focus', () => {
            element.classList.add('focus-visible');
          });

          element.addEventListener('blur', () => {
            element.classList.remove('focus-visible');
          });
        }
      });
    };

    // Run after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addFocusIndicators);
    } else {
      addFocusIndicators();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', addFocusIndicators);
    };
  }, [enabled]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enabled || !settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enabled, settings.screenReader]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    applyAccessibilitySettings({ [key]: value });
    announceToScreenReader(`${key} ${value ? 'enabled' : 'disabled'}`);
  }, [applyAccessibilitySettings, announceToScreenReader]);

  // Handle font setting changes
  const handleFontSettingChange = useCallback((key: string, value: number) => {
    switch (key) {
      case 'fontSize':
        setFontSize(value);
        announceToScreenReader(`Font size changed to ${value}px`);
        break;
      case 'lineHeight':
        setLineHeight(value);
        announceToScreenReader(`Line height changed to ${value}`);
        break;
      case 'letterSpacing':
        setLetterSpacing(value);
        announceToScreenReader(`Letter spacing changed to ${value}px`);
        break;
      case 'wordSpacing':
        setWordSpacing(value);
        announceToScreenReader(`Word spacing changed to ${value}px`);
        break;
    }
  }, [announceToScreenReader]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: true,
      keyboardNavigation: true
    };

    setSettings(defaultSettings);
    setFontSize(16);
    setLineHeight(1.5);
    setLetterSpacing(0);
    setWordSpacing(0);

    applyAccessibilitySettings(defaultSettings);
    announceToScreenReader('Settings reset to defaults');
  }, [applyAccessibilitySettings, announceToScreenReader]);

  if (!enabled || !showControls) {
    return null;
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        ref={toggleRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={settingsRef}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <motion.div
              className="bg-zion-slate-900 border border-zion-cyan/30 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Accessibility className="w-6 h-6 mr-3 text-zion-cyan" />
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <EyeOff className="w-6 h-6" />
                </button>
              </div>

              {/* Visual Settings */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan mb-4 flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Visual Settings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-800 border-zion-cyan/30 rounded focus:ring-zion-cyan/50"
                      />
                      <span className="text-white">High Contrast</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-800 border-zion-cyan/30 rounded focus:ring-zion-cyan/50"
                      />
                      <span className="text-white">Large Text</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-800 border-zion-cyan/30 rounded focus:ring-zion-cyan/50"
                      />
                      <span className="text-white">Reduced Motion</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highSaturation}
                        onChange={(e) => handleSettingChange('highSaturation', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-800 border-zion-cyan/30 rounded focus:ring-zion-cyan/50"
                      />
                      <span className="text-white">High Saturation</span>
                    </label>
                  </div>
                </div>

                {/* Font Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan mb-4 flex items-center">
                    <Type className="w-5 h-5 mr-2" />
                    Font Settings
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm mb-2">
                        Font Size: {fontSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={fontSize}
                        onChange={(e) => handleFontSettingChange('fontSize', parseInt(e.target.value))}
                        className="w-full h-2 bg-zion-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm mb-2">
                        Line Height: {lineHeight}
                      </label>
                      <input
                        type="range"
                        min="1.2"
                        max="2.0"
                        step="0.1"
                        value={lineHeight}
                        onChange={(e) => handleFontSettingChange('lineHeight', parseFloat(e.target.value))}
                        className="w-full h-2 bg-zion-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm mb-2">
                        Letter Spacing: {letterSpacing}px
                      </label>
                      <input
                        type="range"
                        min="-2"
                        max="4"
                        step="0.5"
                        value={letterSpacing}
                        onChange={(e) => handleFontSettingChange('letterSpacing', parseFloat(e.target.value))}
                        className="w-full h-2 bg-zion-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm mb-2">
                        Word Spacing: {wordSpacing}px
                      </label>
                      <input
                        type="range"
                        min="-2"
                        max="8"
                        step="0.5"
                        value={wordSpacing}
                        onChange={(e) => handleFontSettingChange('wordSpacing', parseFloat(e.target.value))}
                        className="w-full h-2 bg-zion-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan mb-4 flex items-center">
                    <Keyboard className="w-5 h-5 mr-2" />
                    Navigation Settings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => handleSettingChange('focusIndicator', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-800 border-zion-cyan/30 rounded focus:ring-zion-cyan/50"
                      />
                      <span className="text-white">Focus Indicators</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => handleSettingChange('keyboardNavigation', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-800 border-zion-cyan/30 rounded focus:ring-zion-cyan/50"
                      />
                      <span className="text-white">Keyboard Navigation</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => handleSettingChange('screenReader', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-800 border-zion-cyan/30 rounded focus:ring-zion-cyan/50"
                      />
                      <span className="text-white">Screen Reader Support</span>
                    </label>
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan mb-4 flex items-center">
                    <MousePointer className="w-5 h-5 mr-2" />
                    Keyboard Shortcuts
                  </h3>
                  <div className="bg-zion-slate-800 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Open/Close Panel:</span>
                      <kbd className="px-2 py-1 bg-zion-slate-700 rounded text-zion-cyan">Ctrl/Cmd + H</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Close Panel:</span>
                      <kbd className="px-2 py-1 bg-zion-slate-700 rounded text-zion-cyan">Escape</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Navigate:</span>
                      <kbd className="px-2 py-1 bg-zion-slate-700 rounded text-zion-cyan">Tab</kbd>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-zion-slate-700">
                  <button
                    onClick={resetToDefaults}
                    className="px-6 py-3 bg-zion-slate-800 text-white rounded-lg hover:bg-zion-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                  >
                    Reset to Defaults
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                  >
                    Apply & Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility settings panel is {isOpen ? 'open' : 'closed'}
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
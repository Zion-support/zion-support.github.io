import React, { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Keyboard, 
  MousePointer, 
  Monitor, 
  Smartphone,
  Accessibility,
  Settings,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
  defaultSettings?: Partial<AccessibilitySettings>;
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showSettings = false,
  defaultSettings = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(showSettings);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    ...defaultSettings
  });

  const focusableElements = useRef<HTMLElement[]>([]);
  const currentFocusIndex = useRef(0);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply color blindness filters
    document.documentElement.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (updatedSettings.colorBlindness !== 'none') {
      document.documentElement.classList.add(updatedSettings.colorBlindness);
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target } = event;
      
      // Skip if target is an input, textarea, or contenteditable
      if (target instanceof HTMLElement && 
          (target.tagName === 'INPUT' || 
           target.tagName === 'TEXTAREA' || 
           target.contentEditable === 'true')) {
        return;
      }

      switch (key) {
        case 'Tab':
          // Enhanced tab navigation
          event.preventDefault();
          const focusable = document.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusable.length > 0) {
            if (event.shiftKey) {
              currentFocusIndex.current = currentFocusIndex.current > 0 
                ? currentFocusIndex.current - 1 
                : focusable.length - 1;
            } else {
              currentFocusIndex.current = currentFocusIndex.current < focusable.length - 1 
                ? currentFocusIndex.current + 1 
                : 0;
            }
            
            (focusable[currentFocusIndex.current] as HTMLElement)?.focus();
          }
          break;

        case 'Escape':
          // Close modals, dropdowns, etc.
          const modals = document.querySelectorAll('[data-modal]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;

        case 'Enter':
        case ' ':
          // Activate focused element
          if (target instanceof HTMLElement) {
            target.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Enhanced focus management
  const setupFocusManagement = useCallback(() => {
    if (!settings.focusIndicator) return;

    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 3px solid #0ea5e9 !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
      }
      
      .high-contrast .focus-visible {
        outline: 3px solid #ffffff !important;
        outline-offset: 2px !important;
      }
      
      .large-text {
        font-size: 1.2em !important;
        line-height: 1.6 !important;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .protanopia {
        filter: url('#protanopia');
      }
      
      .deuteranopia {
        filter: url('#deuteranopia');
      }
      
      .tritanopia {
        filter: url('#tritanopia');
      }
    `;
    document.head.appendChild(style);

    // Add focus-visible class to all focusable elements
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });
      
      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });

    return () => {
      document.head.removeChild(style);
    };
  }, [settings.focusIndicator]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Setup accessibility features
  useEffect(() => {
    if (!enabled) return;

    const cleanupKeyboard = setupKeyboardNavigation();
    const cleanupFocus = setupFocusManagement();

    return () => {
      cleanupKeyboard?.();
      cleanupFocus?.();
    };
  }, [enabled, setupKeyboardNavigation, setupFocusManagement]);

  // Announce page changes for screen readers
  useEffect(() => {
    if (settings.screenReader) {
      const pageTitle = document.title;
      announceToScreenReader(`Page loaded: ${pageTitle}`);
    }
  }, [settings.screenReader, announceToScreenReader]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Accessibility Settings"
        aria-expanded={isVisible}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            className="fixed bottom-20 left-4 z-40 bg-slate-900/95 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 w-80 max-h-96 overflow-y-auto"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-modal="true"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-blue-400" />
                Accessibility
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <Eye className="w-4 h-4" />
                  High Contrast
                </label>
                <button
                  onClick={() => applySettings({ highContrast: !settings.highContrast })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`High contrast ${settings.highContrast ? 'enabled' : 'disabled'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <Monitor className="w-4 h-4" />
                  Large Text
                </label>
                <button
                  onClick={() => applySettings({ largeText: !settings.largeText })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.largeText ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Large text ${settings.largeText ? 'enabled' : 'disabled'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <MousePointer className="w-4 h-4" />
                  Reduced Motion
                </label>
                <button
                  onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Reduced motion ${settings.reducedMotion ? 'enabled' : 'disabled'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Screen Reader */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <Volume2 className="w-4 h-4" />
                  Screen Reader
                </label>
                <button
                  onClick={() => applySettings({ screenReader: !settings.screenReader })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.screenReader ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Screen reader ${settings.screenReader ? 'enabled' : 'disabled'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <Keyboard className="w-4 h-4" />
                  Keyboard Navigation
                </label>
                <button
                  onClick={() => applySettings({ keyboardNavigation: !settings.keyboardNavigation })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Keyboard navigation ${settings.keyboardNavigation ? 'enabled' : 'disabled'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <Eye className="w-4 h-4" />
                  Focus Indicator
                </label>
                <button
                  onClick={() => applySettings({ focusIndicator: !settings.focusIndicator })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Focus indicator ${settings.focusIndicator ? 'enabled' : 'disabled'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Color Blindness */}
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">
                  Color Blindness Support
                </label>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => applySettings({ colorBlindness: e.target.value as any })}
                  className="w-full p-2 bg-slate-800 text-white rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-slate-700">
                <h4 className="text-sm font-medium text-white mb-2">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      applySettings({
                        highContrast: true,
                        largeText: true,
                        focusIndicator: true
                      });
                    }}
                    className="px-3 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                  >
                    High Visibility
                  </button>
                  <button
                    onClick={() => {
                      applySettings({
                        reducedMotion: true,
                        screenReader: true,
                        keyboardNavigation: true
                      });
                    }}
                    className="px-3 py-2 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 transition-colors"
                  >
                    Accessibility Mode
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Color Blindness SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
          </filter>
        </defs>
      </svg>
    </>
  );
};
import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  Accessibility,
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'normal' | 'large' | 'extra-large';
}

interface EnhancedAccessibilityEnhancerProps {
  enabled: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  autoDetect = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'normal'
  });
  const [isActive, setIsActive] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusTrackerRef = useRef<NodeJS.Timeout>();

  // Auto-detect accessibility preferences
  const detectAccessibilityPreferences = useCallback(() => {
    if (!autoDetect) return;

    const mediaQueries = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      prefersHighContrast: window.matchMedia('(prefers-contrast: high)'),
      prefersLargeText: window.matchMedia('(prefers-reduced-motion: no-preference)')
    };

    const newSettings = { ...settings };

    if (mediaQueries.prefersReducedMotion.matches) {
      newSettings.reducedMotion = true;
      addNotification('Reduced motion preference detected and applied');
    }

    if (mediaQueries.prefersHighContrast.matches) {
      newSettings.highContrast = true;
      addNotification('High contrast preference detected and applied');
    }

    setSettings(newSettings);
  }, [autoDetect, settings]);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      body.style.setProperty('--text-color', '#ffffff');
      body.style.setProperty('--bg-color', '#000000');
      body.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      body.style.removeProperty('--text-color');
      body.style.removeProperty('--bg-color');
      body.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
      body.style.fontSize = '18px';
      body.style.lineHeight = '1.6';
    } else {
      root.classList.remove('large-text');
      body.style.fontSize = '';
      body.style.lineHeight = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      body.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      body.style.removeProperty('--animation-duration');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
      body.style.setProperty('--focus-outline', '3px solid #06b6d4');
    } else {
      root.classList.remove('focus-visible');
      body.style.removeProperty('--focus-outline');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(`color-blindness-${newSettings.colorBlindness}`);
    } else {
      root.classList.remove('color-blindness-protanopia', 'color-blindness-deuteranopia', 'color-blindness-tritanopia');
    }

    // Font size
    const fontSizeMap = {
      'normal': '16px',
      'large': '18px',
      'extra-large': '20px'
    };
    body.style.setProperty('--base-font-size', fontSizeMap[newSettings.fontSize]);

    setSettings(newSettings);
    setIsActive(true);
  }, []);

  // Add notification
  const addNotification = useCallback((message: string) => {
    setNotifications(prev => [...prev, message]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== message));
    }, 5000);
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target } = event;
      const element = target as HTMLElement;

      // Skip if in input/textarea
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') return;

      switch (key) {
        case 'Tab':
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).indexOf(element);
          
          if (event.shiftKey) {
            const prevElement = focusableElements[currentIndex - 1] as HTMLElement;
            if (prevElement) {
              event.preventDefault();
              prevElement.focus();
            }
          } else {
            const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
            if (nextElement) {
              event.preventDefault();
              nextElement.focus();
            }
          }
          break;

        case 'Enter':
        case ' ':
          // Activate buttons and links with Enter/Space
          if (element.tagName === 'BUTTON' || element.tagName === 'A') {
            event.preventDefault();
            element.click();
          }
          break;

        case 'Escape':
          // Close modals and panels
          const modals = document.querySelectorAll('[role="dialog"], [data-modal]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;

        case 'h':
        case 'H':
          // Quick navigation to home
          if (event.ctrlKey) {
            event.preventDefault();
            window.location.href = '/';
          }
          break;

        case 's':
        case 'S':
          // Quick navigation to services
          if (event.ctrlKey) {
            event.preventDefault();
            window.location.href = '/services';
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus tracking
  const setupFocusTracking = useCallback(() => {
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);

      // Clear previous focus tracker
      if (focusTrackerRef.current) {
        clearTimeout(focusTrackerRef.current);
      }

      // Add focus indicator
      if (settings.focusIndicator) {
        target.style.outline = '3px solid #06b6d4';
        target.style.outlineOffset = '2px';
        
        // Remove focus indicator after a delay
        focusTrackerRef.current = setTimeout(() => {
          target.style.outline = '';
          target.style.outlineOffset = '';
        }, 3000);
      }

      // Announce focus changes for screen readers
      if (settings.screenReader) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Focused on ${target.textContent || target.tagName.toLowerCase()}`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [settings.focusIndicator, settings.screenReader]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'assertive');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  // Toggle settings
  const toggleSetting = useCallback((key: keyof AccessibilitySettings, value?: any) => {
    const newSettings = { ...settings };
    
    if (typeof value !== 'undefined') {
      newSettings[key] = value;
    } else {
      newSettings[key] = !newSettings[key];
    }

    applySettings(newSettings);
    
    // Announce changes
    const settingNames = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      screenReader: 'Screen reader support',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicator: 'Focus indicator'
    };

    if (key in settingNames) {
      const isEnabled = newSettings[key];
      announceToScreenReader(`${settingNames[key]} ${isEnabled ? 'enabled' : 'disabled'}`);
    }
  }, [settings, applySettings, announceToScreenReader]);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    detectAccessibilityPreferences();
    const keyboardCleanup = setupKeyboardNavigation();
    const focusCleanup = setupFocusTracking();

    return () => {
      keyboardCleanup?.();
      focusCleanup?.();
    };
  }, [enabled, detectAccessibilityPreferences, setupKeyboardNavigation, setupFocusTracking]);

  // Apply initial settings
  useEffect(() => {
    if (enabled) {
      applySettings(settings);
    }
  }, [enabled, applySettings]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility settings"
        aria-expanded={isVisible}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-7 h-7 text-white mx-auto" />
        {isActive && (
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
        )}
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            id="accessibility-panel"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 z-40 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 id="accessibility-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p id="accessibility-description" className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Customize your experience with enhanced accessibility features
              </p>

              {/* Settings Grid */}
              <div className="space-y-4">
                {/* Visual Settings */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Visual</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Contrast className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('highContrast')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.highContrast ? 'bg-purple-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Type className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('largeText')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.largeText ? 'bg-purple-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('reducedMotion')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-purple-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Navigation Settings */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Navigation</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Keyboard className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('keyboardNavigation')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.keyboardNavigation ? 'bg-purple-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} keyboard navigation`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MousePointer className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('focusIndicator')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-purple-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Screen Reader Support */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Screen Reader</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Support</span>
                    </div>
                    <button
                      onClick={() => toggleSetting('screenReader')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.screenReader ? 'bg-purple-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} enhanced screen reader support`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Color Blindness Support */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Color Vision</h3>
                  
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => toggleSetting('colorBlindness', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    aria-label="Select color blindness type"
                  >
                    <option value="none">No color blindness</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>

                {/* Font Size */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Font Size</h3>
                  
                  <select
                    value={settings.fontSize}
                    onChange={(e) => toggleSetting('fontSize', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    aria-label="Select font size"
                  >
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                  </select>
                </div>
              </div>

              {/* Keyboard Shortcuts Info */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Keyboard Shortcuts</h4>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div>Tab: Navigate between elements</div>
                  <div>Enter/Space: Activate buttons</div>
                  <div>Ctrl+H: Go to Home</div>
                  <div>Ctrl+S: Go to Services</div>
                  <div>Escape: Close panels</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            role="alert"
          >
            <Check className="w-4 h-4" />
            <span className="text-sm">{notification}</span>
          </motion.div>
        ))}
      </div>

      {/* Screen Reader Only Class */}
      <style jsx>{`
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
        
        .high-contrast {
          --text-color: #ffffff !important;
          --bg-color: #000000 !important;
          --accent-color: #ffff00 !important;
        }
        
        .large-text {
          font-size: 18px !important;
          line-height: 1.6 !important;
        }
        
        .reduced-motion {
          --animation-duration: 0.01ms !important;
        }
        
        .focus-visible {
          --focus-outline: 3px solid #06b6d4 !important;
        }
        
        .color-blindness-protanopia {
          filter: url('#protanopia-filter') !important;
        }
        
        .color-blindness-deuteranopia {
          filter: url('#deuteranopia-filter') !important;
        }
        
        .color-blindness-tritanopia {
          filter: url('#tritanopia-filter') !important;
        }
      `}</style>
    </>
  );
};
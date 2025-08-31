import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Move, 
  Keyboard,
  Accessibility,
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'high' | 'medium' | 'low';
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
  });

  const focusableElements = useRef<HTMLElement[]>([]);
  const currentFocusIndex = useRef(0);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.style.setProperty('--high-contrast', 'true');
      document.body.classList.add('high-contrast');
    } else {
      document.documentElement.style.removeProperty('--high-contrast');
      document.body.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.style.fontSize = '18px';
      document.body.classList.add('large-text');
    } else {
      document.documentElement.style.fontSize = '16px';
      document.body.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.style.setProperty('--reduced-motion', 'true');
      document.body.classList.add('reduced-motion');
    } else {
      document.documentElement.style.removeProperty('--reduced-motion');
      document.body.classList.remove('reduced-motion');
    }

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.style.setProperty('--focus-visible', 'auto');
    } else {
      document.documentElement.style.setProperty('--focus-visible', 'none');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        // Update focusable elements
        focusableElements.current = Array.from(
          document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        currentFocusIndex.current = Math.max(
          0,
          Math.min(
            focusableElements.current.length - 1,
            currentFocusIndex.current + direction
          )
        );
        focusableElements.current[currentFocusIndex.current]?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, [enableScreenReader]);

  const toggleAccessibility = () => {
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true,
    };
    applySettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  };

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={toggleAccessibility}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Accessibility size={24} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={toggleAccessibility}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        High Contrast
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Increase contrast for better visibility
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ highContrast: !settings.highContrast })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`High contrast ${settings.highContrast ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Type size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Large Text
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Increase text size for better readability
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ largeText: !settings.largeText })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Large text ${settings.largeText ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Move size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Reduced Motion
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Reduce animations and motion
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Reduced motion ${settings.reducedMotion ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Keyboard size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Focus Indicators
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Show keyboard focus indicators
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ focusIndicators: !settings.focusIndicators })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicators ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Focus indicators ${settings.focusIndicators ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                >
                  Reset to Default
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Check size={16} className="text-green-500" />
                  <span>Accessibility features active</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Styles */}
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
          --text-color: #000000;
          --bg-color: #ffffff;
          --accent-color: #0000ff;
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .reduced-motion {
          --animation-duration: 0.01ms;
        }
      `}</style>
    </>
  );
};
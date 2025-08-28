import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Type, 
  MousePointer, 
  Keyboard,
  ZoomIn,
  ZoomOut,
  RotateCcw,
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
  focusIndicators: boolean;
  zoomLevel: number;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled: boolean;
  showControls?: boolean;
}

export default function EnhancedAccessibilityEnhancer({ 
  enabled, 
  showControls = false 
}: EnhancedAccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false,
    zoomLevel: 100
  });

  useEffect(() => {
    if (!enabled) return;

    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }

    // Apply initial settings
    applySettings(settings);
  }, [enabled]);

  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    
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

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Apply zoom level
    document.documentElement.style.fontSize = `${updatedSettings.zoomLevel}%`;

    // Save to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(updatedSettings));
    
    // Update state
    setSettings(updatedSettings);
  }, [settings]);

  const toggleSetting = useCallback((setting: keyof AccessibilitySettings) => {
    const newValue = !settings[setting];
    applySettings({ [setting]: newValue });
  }, [settings, applySettings]);

  const adjustZoom = useCallback((delta: number) => {
    const newZoom = Math.max(50, Math.min(200, settings.zoomLevel + delta));
    applySettings({ zoomLevel: newZoom });
  }, [settings.zoomLevel, applySettings]);

  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: false,
      zoomLevel: 100
    };
    applySettings(defaultSettings);
  }, [applySettings]);

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

  const setupKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          event.preventDefault();
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
          const nextIndex = event.shiftKey ? 
            (currentIndex - 1 + focusableElements.length) % focusableElements.length :
            (currentIndex + 1) % focusableElements.length;
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;

        case 'Escape':
          // Close modals or return to main content
          const modals = document.querySelectorAll('[role="dialog"]');
          if (modals.length > 0) {
            const lastModal = modals[modals.length - 1] as HTMLElement;
            lastModal.focus();
          }
          break;

        case 'h':
        case 'H':
          // Navigate to header
          const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          if (headers.length > 0) {
            (headers[0] as HTMLElement).focus();
            announceToScreenReader('Navigated to header');
          }
          break;

        case 'm':
        case 'M':
          // Navigate to main content
          const main = document.querySelector('main');
          if (main) {
            (main as HTMLElement).focus();
            announceToScreenReader('Navigated to main content');
          }
          break;

        case 'n':
        case 'N':
          // Navigate to navigation
          const nav = document.querySelector('nav');
          if (nav) {
            (nav as HTMLElement).focus();
            announceToScreenReader('Navigated to navigation');
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, announceToScreenReader]);

  useEffect(() => {
    if (settings.keyboardNavigation) {
      const cleanup = setupKeyboardNavigation();
      return cleanup;
    }
  }, [settings.keyboardNavigation, setupKeyboardNavigation]);

  if (!enabled) return null;

  if (!showControls) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          title="Accessibility Controls"
          aria-label="Open accessibility controls"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Accessibility className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Accessibility Controls</h1>
                <p className="text-green-100">Enhance your browsing experience</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-green-200 transition-colors"
              aria-label="Close accessibility controls"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Visual Enhancements */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Visual Enhancements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${
                  settings.highContrast 
                    ? 'bg-blue-50 border-blue-200 text-blue-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={settings.highContrast}
              >
                <Contrast className="w-5 h-5" />
                <span>High Contrast</span>
              </button>

              <button
                onClick={() => toggleSetting('largeText')}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${
                  settings.largeText 
                    ? 'bg-blue-50 border-blue-200 text-blue-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={settings.largeText}
              >
                <Type className="w-5 h-5" />
                <span>Large Text</span>
              </button>

              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${
                  settings.reducedMotion 
                    ? 'bg-blue-50 border-blue-200 text-blue-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={settings.reducedMotion}
              >
                <Eye className="w-5 h-5" />
                <span>Reduced Motion</span>
              </button>

              <button
                onClick={() => toggleSetting('focusIndicators')}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${
                  settings.focusIndicators 
                    ? 'bg-blue-50 border-blue-200 text-blue-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={settings.focusIndicators}
              >
                <MousePointer className="w-5 h-5" />
                <span>Focus Indicators</span>
              </button>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Text Size</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => adjustZoom(-10)}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                aria-label="Decrease text size"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              
              <span className="text-lg font-medium min-w-[60px] text-center">
                {settings.zoomLevel}%
              </span>
              
              <button
                onClick={() => adjustZoom(10)}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                aria-label="Increase text size"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => toggleSetting('keyboardNavigation')}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${
                  settings.keyboardNavigation 
                    ? 'bg-blue-50 border-blue-200 text-blue-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={settings.keyboardNavigation}
              >
                <Keyboard className="w-5 h-5" />
                <span>Enhanced Keyboard Navigation</span>
              </button>

              <button
                onClick={() => toggleSetting('screenReader')}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${
                  settings.screenReader 
                    ? 'bg-blue-50 border-blue-200 text-blue-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={settings.screenReader}
              >
                <Volume2 className="w-5 h-5" />
                <span>Screen Reader Support</span>
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          {settings.keyboardNavigation && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Keyboard Shortcuts</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Tab</span>
                  <span className="text-sm text-gray-500">Navigate between focusable elements</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">H</span>
                  <span className="text-sm text-gray-500">Jump to header</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">M</span>
                  <span className="text-sm text-gray-500">Jump to main content</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">N</span>
                  <span className="text-sm text-gray-500">Jump to navigation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Escape</span>
                  <span className="text-sm text-gray-500">Close modals</span>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <button
              onClick={resetSettings}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset to Defaults</span>
            </button>
            
            <div className="text-sm text-gray-500">
              Settings are automatically saved
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

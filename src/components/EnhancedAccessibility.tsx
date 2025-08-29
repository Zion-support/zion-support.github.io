import React, { useEffect, useState, useCallback } from 'react';
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
  Monitor,
  Smartphone
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  fontSize: number;
  zoomLevel: number;
  soundEnabled: boolean;
  keyboardNavigation: boolean;
  screenReaderMode: boolean;
}

export const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    fontSize: 16,
    zoomLevel: 100,
    soundEnabled: true,
    keyboardNavigation: false,
    screenReaderMode: false
  });

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
    } else {
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--transition-duration', '0s');
      root.style.setProperty('--animation-duration', '0s');
    } else {
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }

    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation', '1.5');
    } else {
      root.style.removeProperty('--saturation');
    }

    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);

    // Zoom level
    root.style.setProperty('--zoom-level', `${newSettings.zoomLevel}%`);

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }

    // Screen reader mode
    if (newSettings.screenReaderMode) {
      document.body.classList.add('screen-reader-mode');
    } else {
      document.body.classList.remove('screen-reader-mode');
    }

    // Save settings to localStorage
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

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }

      // Alt + C to toggle high contrast
      if (event.altKey && event.key === 'c') {
        event.preventDefault();
        handleSettingChange('highContrast', !settings.highContrast);
      }

      // Alt + L to toggle large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        handleSettingChange('largeText', !settings.largeText);
      }

      // Alt + M to toggle reduced motion
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        handleSettingChange('reducedMotion', !settings.reducedMotion);
      }

      // Alt + Plus/Minus to adjust zoom
      if (event.altKey && event.key === '=') {
        event.preventDefault();
        handleSettingChange('zoomLevel', Math.min(200, settings.zoomLevel + 10));
      }

      if (event.altKey && event.key === '-') {
        event.preventDefault();
        handleSettingChange('zoomLevel', Math.max(50, settings.zoomLevel - 10));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings, handleSettingChange]);

  // Focus management for keyboard navigation
  useEffect(() => {
    if (settings.keyboardNavigation) {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        element.setAttribute('tabindex', '0');
      });

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 3px solid #0ea5e9 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [settings.keyboardNavigation]);

  // Announce changes to screen readers
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

  // Handle setting changes with announcements
  const handleSettingChangeWithAnnouncement = useCallback((key: keyof AccessibilitySettings, value: any) => {
    handleSettingChange(key, value);
    
    const messages = {
      highContrast: value ? 'High contrast enabled' : 'High contrast disabled',
      largeText: value ? 'Large text enabled' : 'Large text disabled',
      reducedMotion: value ? 'Reduced motion enabled' : 'Reduced motion disabled',
      keyboardNavigation: value ? 'Keyboard navigation enabled' : 'Keyboard navigation disabled',
      screenReaderMode: value ? 'Screen reader mode enabled' : 'Screen reader mode disabled'
    };

    if (messages[key]) {
      announceToScreenReader(messages[key]);
    }
  }, [handleSettingChange, announceToScreenReader]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        aria-label="Accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Monitor className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Accessibility Settings</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Visual Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Visual Settings</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => handleSettingChangeWithAnnouncement('highContrast', e.target.checked)}
                        className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700">High Contrast (Alt + C)</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => handleSettingChangeWithAnnouncement('largeText', e.target.checked)}
                        className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700">Large Text (Alt + L)</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => handleSettingChangeWithAnnouncement('reducedMotion', e.target.checked)}
                        className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700">Reduced Motion (Alt + M)</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.highSaturation}
                        onChange={(e) => handleSettingChange('highSaturation', e.target.checked)}
                        className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700">High Saturation</span>
                    </label>
                  </div>
                </div>

                {/* Font Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Font Size: {settings.fontSize}px
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={settings.fontSize}
                    onChange={(e) => handleSettingChange('fontSize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Zoom Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zoom Level: {settings.zoomLevel}%
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSettingChange('zoomLevel', Math.max(50, settings.zoomLevel - 10))}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleSettingChange('zoomLevel', Math.min(200, settings.zoomLevel + 10))}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Navigation Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Navigation Settings</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => handleSettingChangeWithAnnouncement('keyboardNavigation', e.target.checked)}
                        className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700">Keyboard Navigation</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.screenReaderMode}
                        onChange={(e) => handleSettingChangeWithAnnouncement('screenReaderMode', e.target.checked)}
                        className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700">Screen Reader Mode</span>
                    </label>
                  </div>
                </div>

                {/* Keyboard Shortcuts Help */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Keyboard Shortcuts</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Alt + A: Toggle this panel</div>
                    <div>Alt + C: Toggle high contrast</div>
                    <div>Alt + L: Toggle large text</div>
                    <div>Alt + M: Toggle reduced motion</div>
                    <div>Alt + +/-: Adjust zoom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screen reader only content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility settings panel opened
      </div>
    </>
  );
};
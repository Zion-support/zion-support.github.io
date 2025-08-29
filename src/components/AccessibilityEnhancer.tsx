import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, MousePointer, Sun, Moon, Contrast, Type, ZoomIn, ZoomOut } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: number;
  zoomLevel: number;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 16,
    zoomLevel: 100
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('zionAccessibilitySettings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...prev, ...parsed });
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }

    // Apply initial settings
    applySettings(settings);
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(`color-blindness-${newSettings.colorBlindness}`);
    } else {
      root.classList.remove('color-blindness-protanopia', 'color-blindness-deuteranopia', 'color-blindness-tritanopia');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-indicator', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-indicator', 'none');
    }

    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    
    // Zoom level
    root.style.setProperty('--zoom-level', `${newSettings.zoomLevel}%`);

    // Save to localStorage
    localStorage.setItem('zionAccessibilitySettings', JSON.stringify(newSettings));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const toggleHighContrast = () => updateSetting('highContrast', !settings.highContrast);
  const toggleLargeText = () => updateSetting('largeText', !settings.largeText);
  const toggleReducedMotion = () => updateSetting('reducedMotion', !settings.reducedMotion);
  const toggleScreenReader = () => updateSetting('screenReader', !settings.screenReader);
  const toggleKeyboardNavigation = () => updateSetting('keyboardNavigation', !settings.keyboardNavigation);
  const toggleFocusIndicator = () => updateSetting('focusIndicator', !settings.focusIndicator);

  const increaseFontSize = () => {
    const newSize = Math.min(settings.fontSize + 2, 24);
    updateSetting('fontSize', newSize);
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(settings.fontSize - 2, 12);
    updateSetting('fontSize', newSize);
  };

  const increaseZoom = () => {
    const newZoom = Math.min(settings.zoomLevel + 25, 200);
    updateSetting('zoomLevel', newZoom);
  };

  const decreaseZoom = () => {
    const newZoom = Math.max(settings.zoomLevel - 25, 50);
    updateSetting('zoomLevel', newZoom);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none',
      fontSize: 16,
      zoomLevel: 100
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  };

  const announceToScreenReader = (message: string) => {
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
  };

  useEffect(() => {
    // Keyboard navigation support
    if (settings.keyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.altKey) {
          e.preventDefault();
          const mainContent = document.querySelector('main');
          if (mainContent) {
            (mainContent as HTMLElement).focus();
            announceToScreenReader('Skipped to main content');
          }
        }

        // Skip to navigation
        if (e.key === 'Tab' && e.shiftKey && e.altKey) {
          e.preventDefault();
          const navigation = document.querySelector('nav, [role="navigation"]');
          if (navigation) {
            (navigation as HTMLElement).focus();
            announceToScreenReader('Skipped to navigation');
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings.keyboardNavigation]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 w-80 bg-slate-900/95 backdrop-blur-lg rounded-lg border border-slate-700/50 shadow-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Accessibility Settings</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility settings"
            >
              <EyeOff className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Visual Enhancements */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Visual Enhancements</h4>
              
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                  settings.highContrast
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Contrast className="w-4 h-4" />
                  High Contrast
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.highContrast ? 'bg-blue-500 border-blue-300' : 'border-gray-400'
                }`} />
              </button>

              <button
                onClick={toggleLargeText}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                  settings.largeText
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Large Text
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.largeText ? 'bg-blue-500 border-blue-300' : 'border-gray-400'
                }`} />
              </button>

              <button
                onClick={toggleReducedMotion}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                  settings.reducedMotion
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <MousePointer className="w-4 h-4" />
                  Reduced Motion
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.reducedMotion ? 'bg-blue-500 border-blue-300' : 'border-gray-400'
                }`} />
              </button>
            </div>

            {/* Navigation & Focus */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Navigation & Focus</h4>
              
              <button
                onClick={toggleKeyboardNavigation}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                  settings.keyboardNavigation
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  Enhanced Keyboard Navigation
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.keyboardNavigation ? 'bg-blue-500 border-blue-300' : 'border-gray-400'
                }`} />
              </button>

              <button
                onClick={toggleFocusIndicator}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                  settings.focusIndicator
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Focus Indicator
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.focusIndicator ? 'bg-blue-500 border-blue-300' : 'border-gray-400'
                }`} />
              </button>
            </div>

            {/* Font Size Controls */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Font Size</h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-slate-800 border border-slate-600 text-gray-300 rounded hover:bg-slate-700 transition-colors"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center text-white font-medium">
                  {settings.fontSize}px
                </span>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-slate-800 border border-slate-600 text-gray-300 rounded hover:bg-slate-700 transition-colors"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Zoom Level</h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseZoom}
                  className="p-2 bg-slate-800 border border-slate-600 text-gray-300 rounded hover:bg-slate-700 transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center text-white font-medium">
                  {settings.zoomLevel}%
                </span>
                <button
                  onClick={increaseZoom}
                  className="p-2 bg-slate-800 border border-slate-600 text-gray-300 rounded hover:bg-slate-700 transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Color Blindness */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Color Blindness Support</h4>
              <select
                value={settings.colorBlindness}
                onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                className="w-full p-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="none">No Color Blindness</option>
                <option value="protanopia">Protanopia (Red-Green)</option>
                <option value="deuteranopia">Deuteranopia (Red-Green)</option>
                <option value="tritanopia">Tritanopia (Blue-Yellow)</option>
              </select>
            </div>

            {/* Screen Reader */}
            <div className="space-y-3">
              <button
                onClick={toggleScreenReader}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                  settings.screenReader
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  {settings.screenReader ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  Screen Reader Support
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.screenReader ? 'bg-blue-500 border-blue-300' : 'border-gray-400'
                }`} />
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full p-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Reset to Defaults
            </button>
          </div>

          {/* Keyboard Shortcuts Help */}
          {settings.keyboardNavigation && (
            <div className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-600/50">
              <h5 className="text-sm font-medium text-gray-300 mb-2">Keyboard Shortcuts</h5>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Alt + Tab: Skip to main content</div>
                <div>Alt + Shift + Tab: Skip to navigation</div>
                <div>Tab: Navigate through elements</div>
                <div>Enter/Space: Activate buttons</div>
              </div>
            </div>
          )}
        </div>
      )}

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
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #1f2937;
          --accent: #3b82f6;
        }
        
        .color-blindness-protanopia {
          filter: url('#protanopia-filter');
        }
        
        .color-blindness-deuteranopia {
          filter: url('#deuteranopia-filter');
        }
        
        .color-blindness-tritanopia {
          filter: url('#tritanopia-filter');
        }
      `}</style>
    </>
  );
};

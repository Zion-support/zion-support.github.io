import React, { useState, useEffect, useCallback } from 'react';
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
  Smartphone,
  Tablet
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  fontSize: number;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  deviceMode: 'desktop' | 'tablet' | 'mobile';
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    fontSize: 16,
    colorBlindMode: 'none',
    deviceMode: 'desktop'
  });

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Color blind modes
    const colorBlindFilters = {
      none: 'none',
      protanopia: 'url(#protanopia)',
      deuteranopia: 'url(#deuteranopia)',
      tritanopia: 'url(#tritanopia)'
    };
    root.style.filter = colorBlindFilters[newSettings.colorBlindMode];

    // Device mode simulation
    if (newSettings.deviceMode !== 'desktop') {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        const width = newSettings.deviceMode === 'mobile' ? '375' : '768';
        viewport.setAttribute('content', `width=${width}, initial-scale=1`);
      }
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (event.shiftKey) {
            if (currentIndex <= 0) {
              event.preventDefault();
              (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
            }
          } else {
            if (currentIndex >= focusableElements.length - 1) {
              event.preventDefault();
              (focusableElements[0] as HTMLElement).focus();
            }
          }
          break;
        case 'Escape':
          // Close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;
        case 'Enter':
        case ' ':
          // Activate focused elements
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.click();
          }
          break;
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

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    
    // Announce changes to screen reader
    const settingNames = {
      highContrast: 'High contrast mode',
      largeText: 'Large text mode',
      reducedMotion: 'Reduced motion mode',
      screenReader: 'Screen reader mode',
      keyboardNavigation: 'Keyboard navigation mode',
      fontSize: 'Font size',
      colorBlindMode: 'Color blind mode',
      deviceMode: 'Device mode'
    };
    
    announceToScreenReader(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`);
  }, [settings, announceToScreenReader]);

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50`}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div 
          className={`fixed ${getPositionClasses()} z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6`}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white">
              Accessibility Settings
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Contrast className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              </div>
              <button
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.highContrast}
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
              <div className="flex items-center space-x-2">
                <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              </div>
              <button
                onClick={() => updateSetting('largeText', !settings.largeText)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.largeText ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.largeText}
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
              <div className="flex items-center space-x-2">
                <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
              </div>
              <button
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.reducedMotion}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
              </div>
              <button
                onClick={() => updateSetting('screenReader', !settings.screenReader)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.screenReader ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.screenReader}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
              </div>
              <button
                onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.keyboardNavigation ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.keyboardNavigation}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Font Size */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Font Size</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-700 dark:text-gray-300 min-w-[3rem] text-center">
                  {settings.fontSize}px
                </span>
                <button
                  onClick={() => updateSetting('fontSize', Math.min(24, settings.fontSize + 2))}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Color Blind Mode */}
            <div className="space-y-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Color Blind Mode</span>
              <select
                value={settings.colorBlindMode}
                onChange={(e) => updateSetting('colorBlindMode', e.target.value)}
                className="w-full p-2 text-sm border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia (Red-Blind)</option>
                <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                <option value="tritanopia">Tritanopia (Blue-Blind)</option>
              </select>
            </div>

            {/* Device Mode */}
            <div className="space-y-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Device Mode</span>
              <div className="flex space-x-2">
                {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => updateSetting('deviceMode', mode)}
                    className={`p-2 rounded-md text-xs transition-colors ${
                      settings.deviceMode === mode
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                    aria-pressed={settings.deviceMode === mode}
                  >
                    {mode === 'desktop' && <Monitor className="w-4 h-4" />}
                    {mode === 'tablet' && <Tablet className="w-4 h-4" />}
                    {mode === 'mobile' && <Smartphone className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Use Tab to navigate, Enter/Space to activate, and Escape to close. 
              These settings are saved automatically.
            </p>
          </div>
        </div>
      )}

      {/* Color Blind SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
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

      {/* Screen Reader Only Class */}
      <style>{`
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
    </>
  );
};
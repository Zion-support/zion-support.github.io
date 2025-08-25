import React, { useState, useEffect, useCallback } from 'react';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  Volume2, 
  VolumeX, 
  MousePointer, 
  Keyboard,
  Sun,
  Moon,
  Monitor,
  Settings,
  X,
  Plus,
  Minus,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  theme: 'light' | 'dark' | 'auto';
}

const EnhancedAccessibility: React.FC<{ position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' }> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 100,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    theme: 'auto'
  });

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-filter', 'contrast(1.5) brightness(1.2)');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-filter');
    }
    
    // Font size
    root.style.setProperty('--font-size-multiplier', `${newSettings.fontSize / 100}`);
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }
    
    // Color blindness
    if (newSettings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.setProperty('--color-filter', filters[newSettings.colorBlindness]);
    } else {
      root.style.removeProperty('--color-filter');
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('show-focus');
    } else {
      root.classList.remove('show-focus');
    }
    
    // Theme
    if (newSettings.theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (newSettings.theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const savedSettings = JSON.parse(saved);
        setSettings(savedSettings);
        applySettings(savedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Reset to defaults
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 100,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none',
      theme: 'auto'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  }, [applySettings]);

  // Increase/decrease font size
  const adjustFontSize = useCallback((direction: 'increase' | 'decrease') => {
    const newSize = direction === 'increase' 
      ? Math.min(settings.fontSize + 10, 200)
      : Math.max(settings.fontSize - 10, 80);
    updateSetting('fontSize', newSize);
  }, [settings.fontSize, updateSetting]);

  // Toggle high contrast
  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast', !settings.highContrast);
  }, [settings.highContrast, updateSetting]);

  // Toggle reduced motion
  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  }, [settings.reducedMotion, updateSetting]);

  // Toggle screen reader mode
  const toggleScreenReader = useCallback(() => {
    updateSetting('screenReader', !settings.screenReader);
  }, [settings.screenReader, updateSetting]);

  // Toggle keyboard navigation
  const toggleKeyboardNavigation = useCallback(() => {
    updateSetting('keyboardNavigation', !settings.keyboardNavigation);
  }, [settings.keyboardNavigation, updateSetting]);

  // Toggle focus indicator
  const toggleFocusIndicator = useCallback(() => {
    updateSetting('focusIndicator', !settings.focusIndicator);
  }, [settings.focusIndicator, updateSetting]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to open accessibility panel
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Ctrl/Cmd + Plus to increase font size
      if ((event.ctrlKey || event.metaKey) && event.key === '=') {
        event.preventDefault();
        adjustFontSize('increase');
      }
      
      // Ctrl/Cmd + Minus to decrease font size
      if ((event.ctrlKey || event.metaKey) && event.key === '-') {
        event.preventDefault();
        adjustFontSize('decrease');
      }
      
      // Ctrl/Cmd + 0 to reset font size
      if ((event.ctrlKey || event.metaKey) && event.key === '0') {
        event.preventDefault();
        updateSetting('fontSize', 100);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, adjustFontSize, updateSetting]);

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      case 'bottom-left':
        return 'bottom-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50`}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        title="Accessibility Settings (Ctrl+Shift+A)"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className={`fixed ${getPositionClasses()} z-50 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Accessibility Settings</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
              aria-label="Close accessibility panel"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Font Size Control */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Type className="w-4 h-4 mr-2" />
                Font Size: {settings.fontSize}%
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => adjustFontSize('decrease')}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Decrease font size"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-cyan-500 rounded-full transition-all duration-300"
                    style={{ width: `${((settings.fontSize - 80) / 120) * 100}%` }}
                  />
                </div>
                <button
                  onClick={() => adjustFontSize('increase')}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Increase font size"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => updateSetting('fontSize', 100)}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Reset font size"
                  title="Reset (Ctrl+0)"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Contrast className="w-4 h-4 mr-2" />
                High Contrast
              </label>
              <button
                onClick={toggleHighContrast}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle high contrast"
                role="switch"
                aria-checked={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Eye className="w-4 h-4 mr-2" />
                Reduced Motion
              </label>
              <button
                onClick={toggleReducedMotion}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle reduced motion"
                role="switch"
                aria-checked={settings.reducedMotion}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Indicator Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <MousePointer className="w-4 h-4 mr-2" />
                Focus Indicator
              </label>
              <button
                onClick={toggleFocusIndicator}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusIndicator ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle focus indicator"
                role="switch"
                aria-checked={settings.focusIndicator}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Navigation Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Keyboard className="w-4 h-4 mr-2" />
                Keyboard Navigation
              </label>
              <button
                onClick={toggleKeyboardNavigation}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle keyboard navigation"
                role="switch"
                aria-checked={settings.keyboardNavigation}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Color Blindness Support */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Color Blindness Support
              </label>
              <select
                value={settings.colorBlindness}
                onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia (Red-Blind)</option>
                <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                <option value="tritanopia">Tritanopia (Blue-Blind)</option>
              </select>
            </div>

            {/* Theme Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme
              </label>
              <div className="flex space-x-2">
                {(['light', 'dark', 'auto'] as const).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => updateSetting('theme', theme)}
                    className={`p-2 rounded-md transition-colors ${
                      settings.theme === theme
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    aria-label={`Select ${theme} theme`}
                  >
                    {theme === 'light' && <Sun className="w-4 h-4" />}
                    {theme === 'dark' && <Moon className="w-4 h-4" />}
                    {theme === 'auto' && <Monitor className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={resetSettings}
                className="w-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Reset to Defaults
              </button>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="pt-2 text-xs text-gray-500 dark:text-gray-400 space-y-1">
              <div><strong>Keyboard Shortcuts:</strong></div>
              <div>Ctrl+Shift+A: Open/Close Panel</div>
              <div>Ctrl+Plus: Increase Font Size</div>
              <div>Ctrl+Minus: Decrease Font Size</div>
              <div>Ctrl+0: Reset Font Size</div>
            </div>
          </div>
        </div>
      )}

      {/* SVG Filters for Color Blindness */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0 0, 0.433, 0.567, 0, 0 0, 0.475, 0.525, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default EnhancedAccessibility;
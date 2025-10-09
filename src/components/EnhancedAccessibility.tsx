import React, { useEffect, useState, useCallback } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
  zoomLevel: number;
  colorBlind: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface AccessibilityProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
  enableColorBlindSupport?: boolean;
  enableZoomControl?: boolean;
}

const EnhancedAccessibility: React.FC<AccessibilityProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true,
  enableColorBlindSupport = true,
  enableZoomControl = true,
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    zoomLevel: 100,
    colorBlind: 'none',
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Apply high contrast mode
  useEffect(() => {
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [settings.highContrast]);

  // Apply large text mode
  useEffect(() => {
    if (settings.largeText) {
      document.documentElement.style.fontSize = '1.2rem';
    } else {
      document.documentElement.style.fontSize = '1rem';
    }
  }, [settings.largeText]);

  // Apply reduced motion
  useEffect(() => {
    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [settings.reducedMotion]);

  // Apply color blind support
  useEffect(() => {
    document.documentElement.setAttribute('data-color-blind', settings.colorBlind);
  }, [settings.colorBlind]);

  // Apply zoom level
  useEffect(() => {
    document.documentElement.style.zoom = `${settings.zoomLevel}%`;
  }, [settings.zoomLevel]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Toggle accessibility panel
      if (e.key === 'Tab' && e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }

      // Escape key to close panel
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, isVisible]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && settings.focusVisible) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement, settings.focusVisible]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // Toggle functions
  const toggleHighContrast = () => {
    const newSettings = { ...settings, highContrast: !settings.highContrast };
    saveSettings(newSettings);
    announceToScreenReader(`High contrast ${newSettings.highContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleLargeText = () => {
    const newSettings = { ...settings, largeText: !settings.largeText };
    saveSettings(newSettings);
    announceToScreenReader(`Large text ${newSettings.largeText ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    const newSettings = { ...settings, reducedMotion: !settings.reducedMotion };
    saveSettings(newSettings);
    announceToScreenReader(`Reduced motion ${newSettings.reducedMotion ? 'enabled' : 'disabled'}`);
  };

  const toggleScreenReader = () => {
    const newSettings = { ...settings, screenReader: !settings.screenReader };
    saveSettings(newSettings);
    announceToScreenReader(`Screen reader mode ${newSettings.screenReader ? 'enabled' : 'disabled'}`);
  };

  const toggleFocusVisible = () => {
    const newSettings = { ...settings, focusVisible: !settings.focusVisible };
    saveSettings(newSettings);
    announceToScreenReader(`Focus indicators ${newSettings.focusVisible ? 'enabled' : 'disabled'}`);
  };

  const adjustZoom = (delta: number) => {
    const newZoom = Math.max(50, Math.min(200, settings.zoomLevel + delta));
    const newSettings = { ...settings, zoomLevel: newZoom };
    saveSettings(newSettings);
    announceToScreenReader(`Zoom level set to ${newZoom}%`);
  };

  const setColorBlind = (type: AccessibilitySettings['colorBlind']) => {
    const newSettings = { ...settings, colorBlind: type };
    saveSettings(newSettings);
    announceToScreenReader(`Color blind support set to ${type === 'none' ? 'none' : type}`);
  };

  // Reset all settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusVisible: true,
      zoomLevel: 100,
      colorBlind: 'none',
    };
    saveSettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-3 text-white hover:bg-slate-800 transition-colors duration-200 z-50"
        aria-label="Open accessibility settings"
        title="Open accessibility settings (Alt + A)"
      >
        <Eye className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 text-white z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-cyan-400">Accessibility Settings</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close accessibility settings"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        {enableHighContrast && (
          <div className="flex items-center justify-between">
            <span className="text-sm">High Contrast</span>
            <button
              onClick={toggleHighContrast}
              className={`flex items-center px-3 py-1 rounded ${
                settings.highContrast ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
              aria-pressed={settings.highContrast}
            >
              {settings.highContrast ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm">Large Text</span>
          <button
            onClick={toggleLargeText}
            className={`flex items-center px-3 py-1 rounded ${
              settings.largeText ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            aria-pressed={settings.largeText}
          >
            <Type className="w-4 h-4" />
          </button>
        </div>

        {enableReducedMotion && (
          <div className="flex items-center justify-between">
            <span className="text-sm">Reduced Motion</span>
            <button
              onClick={toggleReducedMotion}
              className={`flex items-center px-3 py-1 rounded ${
                settings.reducedMotion ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
              aria-pressed={settings.reducedMotion}
            >
              {settings.reducedMotion ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        )}

        {enableScreenReader && (
          <div className="flex items-center justify-between">
            <span className="text-sm">Screen Reader</span>
            <button
              onClick={toggleScreenReader}
              className={`flex items-center px-3 py-1 rounded ${
                settings.screenReader ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
              aria-pressed={settings.screenReader}
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm">Focus Indicators</span>
          <button
            onClick={toggleFocusVisible}
            className={`flex items-center px-3 py-1 rounded ${
              settings.focusVisible ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            aria-pressed={settings.focusVisible}
          >
            <Contrast className="w-4 h-4" />
          </button>
        </div>

        {enableZoomControl && (
          <div className="flex items-center justify-between">
            <span className="text-sm">Zoom: {settings.zoomLevel}%</span>
            <div className="flex space-x-1">
              <button
                onClick={() => adjustZoom(-10)}
                className="p-1 bg-gray-700 hover:bg-gray-600 rounded"
                aria-label="Decrease zoom"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => adjustZoom(10)}
                className="p-1 bg-gray-700 hover:bg-gray-600 rounded"
                aria-label="Increase zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {enableColorBlindSupport && (
          <div className="flex items-center justify-between">
            <span className="text-sm">Color Blind Support</span>
            <select
              value={settings.colorBlind}
              onChange={(e) => setColorBlind(e.target.value as AccessibilitySettings['colorBlind'])}
              className="bg-gray-700 text-white text-xs px-2 py-1 rounded"
            >
              <option value="none">None</option>
              <option value="protanopia">Protanopia</option>
              <option value="deuteranopia">Deuteranopia</option>
              <option value="tritanopia">Tritanopia</option>
            </select>
          </div>
        )}

        <button
          onClick={resetSettings}
          className="w-full mt-4 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
        >
          Reset Settings
        </button>
      </div>

      <div className="mt-4 text-xs text-gray-400">
        <p>Press Alt + A to toggle this panel</p>
        <p>Press Alt + Shift + Tab to skip to main content</p>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
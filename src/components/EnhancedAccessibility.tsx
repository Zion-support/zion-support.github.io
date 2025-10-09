import React, { useEffect, useState, useCallback } from 'react';

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

  // Load settings from localStorage;
  useEffect(() => {
        if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage;
      localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Apply high contrast mode;
  useEffect(() => {
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [settings.highContrast]);

  // Apply large text mode;
  useEffect(() => {
    if (settings.largeText) {
      document.documentElement.style.fontSize = '1.2rem';
    } else {
      document.documentElement.style.fontSize = '1rem';
    }
  }, [settings.largeText]);

  // Apply reduced motion;
  useEffect(() => {
    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [settings.reducedMotion]);

  // Apply color blind support;
  useEffect(() => {
    document.documentElement.setAttribute('data-color-blind', settings.colorBlind);
  }, [settings.colorBlind]);

  // Apply zoom level;
  useEffect(() => {
    document.documentElement.style.zoom = `${settings.zoomLevel}%`;
  }, [settings.zoomLevel]);

  // Keyboard navigation;
  useEffect(() => {
    if (!enableKeyboardNavigation) return null;
                    if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Toggle accessibility panel;
      if (e.key === 'Tab' && e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }

      // Escape key to close panel;
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, isVisible]);

  // Focus management;
  useEffect(() => {
    if (!enableFocusManagement) return null;
          if (target && settings.focusVisible) {
        target.classList.add('focus-visible');
      }
    }
          if (target) {
        target.classList.remove('focus-visible');
      }
    }
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    }
  }, [enableFocusManagement, settings.focusVisible]);

  // Screen reader announcements;
          announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // Toggle functions;
      saveSettings(newSettings);
    announceToScreenReader(`High contrast ${newSettings.highContrast ? 'enabled' : 'disabled'}`);
  }
      saveSettings(newSettings);
    announceToScreenReader(`Large text ${newSettings.largeText ? 'enabled' : 'disabled'}`);
  }
      saveSettings(newSettings);
    announceToScreenReader(`Reduced motion ${newSettings.reducedMotion ? 'enabled' : 'disabled'}`);
  }
      saveSettings(newSettings);
    announceToScreenReader(`Screen reader mode ${newSettings.screenReader ? 'enabled' : 'disabled'}`);
  }
      saveSettings(newSettings);
    announceToScreenReader(`Focus indicators ${newSettings.focusVisible ? 'enabled' : 'disabled'}`);
  }
          saveSettings(newSettings);
    announceToScreenReader(`Zoom level set to ${newZoom}%`);
  }
      saveSettings(newSettings);
    announceToScreenReader(`Color blind support set to ${type === 'none' ? 'none' : type}`);
  }
  // Reset all settings;
      saveSettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default')
  }
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-3 text-white hover:bg-slate-800 transition-colors duration-200 z-50"
        aria-label="Open accessibility settings"
        title="Open accessibility settings (Alt + A)"
      >
        <Eye className="w-5 h-5" />
      </button>)
  }

  return (
    <div>
      <div>
        <h3 className="font-bold text-cyan-400">Accessibility Settings</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close accessibility settings"
        >
          ×
        </button>
      </div>
      <div>
        {enableHighContrast && (
          <div>
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

        <div>
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
          <div>
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
          <div>
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

        <div>
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
          <div>
            <span className="text-sm">Zoom: {settings.zoomLevel}%</span>
            <div>
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
          <div>
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
        >Reset Settings</button>
      </div>
      <div>
        <p>Press Alt + A to toggle this panel</p>
        <p>Press Alt + Shift + Tab to skip to main content</p>
      </div>
    </div>);
}
export default EnhancedAccessibility
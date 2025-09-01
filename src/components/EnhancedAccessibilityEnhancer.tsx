import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  Accessibility, 
  Keyboard, 
  MousePointer, 
  Smartphone,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  zoomLevel: number;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showSettings = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    zoomLevel: 100,
    colorBlindness: 'none'
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Apply accessibility settings
  const applySettings = React.useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(`color-blind-${newSettings.colorBlindness}`);
    } else {
      root.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Update settings
  const updateSettings = React.useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    applySettings(updatedSettings);
  }, [settings, applySettings]);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, [enabled, applySettings]);

  // Screen reader announcements
  useEffect(() => {
    if (!enabled || !settings.screenReader) return;

    const announce = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;

      document.body.appendChild(announcement);
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce when settings change
    announce('Accessibility settings updated');
  }, [settings.screenReader]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
      let nextIndex = 0;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault();
          nextIndex = currentIndex >= focusableElements.length - 1 ? 0 : currentIndex + 1;
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          nextIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
        case 'Home':
          event.preventDefault();
          (focusableElements[0] as HTMLElement)?.focus();
          break;
        case 'End':
          event.preventDefault();
          (focusableElements[focusableElements.length - 1] as HTMLElement)?.focus();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enabled || !settings.focusIndicators) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      target.classList.add('focus-visible');
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focus-visible');
      setCurrentFocus(null);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enabled, settings.focusIndicators]);

  // Zoom functionality
  const handleZoom = (direction: 'in' | 'out') => {
    const newZoomLevel = direction === 'in' 
      ? Math.min(settings.zoomLevel + 10, 200)
      : Math.max(settings.zoomLevel - 10, 50);
    
    updateSettings({ zoomLevel: newZoomLevel });
    document.body.style.zoom = `${newZoomLevel}%`;
  };

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Accessibility Settings</h2>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Contrast className="w-5 h-5 text-blue-600" />
                <span>High Contrast</span>
              </div>
              <button
                onClick={() => updateSettings({ highContrast: !settings.highContrast })}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`w-4 h-4 h-4 bg-white rounded-full transition-transform ${
                  settings.highContrast ? 'transform translate-x-6' : 'transform translate-x-1'
                }`} />
              </button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Type className="w-5 h-5 text-blue-600" />
                <span>Large Text</span>
              </div>
              <button
                onClick={() => updateSettings({ largeText: !settings.largeText })}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`w-4 h-4 h-4 bg-white rounded-full transition-transform ${
                  settings.largeText ? 'transform translate-x-6' : 'transform translate-x-1'
                }`} />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-blue-600" />
                <span>Reduced Motion</span>
              </div>
              <button
                onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`w-4 h-4 h-4 bg-white rounded-full transition-transform ${
                  settings.reducedMotion ? 'transform translate-x-6' : 'transform translate-x-1'
                }`} />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <ZoomIn className="w-5 h-5 text-blue-600" />
                <span>Zoom Level: {settings.zoomLevel}%</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleZoom('out')}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleZoom('in')}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Color Blindness */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-blue-600" />
                <span>Color Blindness</span>
              </div>
              <select
                value={settings.colorBlindness}
                onChange={(e) => updateSettings({ colorBlindness: e.target.value as any })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia (Red-Blind)</option>
                <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                <option value="tritanopia">Tritanopia (Blue-Blind)</option>
              </select>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                const defaultSettings: AccessibilitySettings = {
                  highContrast: false,
                  largeText: false,
                  reducedMotion: false,
                  screenReader: false,
                  keyboardNavigation: false,
                  focusIndicators: true,
                  zoomLevel: 100,
                  colorBlindness: 'none'
                };
                setSettings(defaultSettings);
                applySettings(defaultSettings);
                document.body.style.zoom = '100%';
              }}
              className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
            >
              Reset to Default
            </button>
          </div>
        </div>
      )}

      {/* Focus Indicator */}
      {currentFocus && settings.focusIndicators && (
        <div className="fixed pointer-events-none z-50">
          <div className="absolute border-2 border-blue-500 rounded shadow-lg animate-pulse" />
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
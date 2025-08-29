import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut, RotateCcw, Keyboard, MousePointer, Accessibility } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlind: boolean;
  zoomLevel: number;
}

export function AccessibilityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    colorBlind: false,
    zoomLevel: 100
  });
  const [isOpen, setIsOpen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusHistoryRef = useRef<HTMLElement[]>([]);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Initialize accessibility settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...prev, ...parsed });
      } catch (e) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '3px solid #3b82f6');
      root.style.setProperty('--focus-ring-offset', '2px');
    } else {
      root.style.removeProperty('--focus-ring');
      root.style.removeProperty('--focus-ring-offset');
    }

    // Color blind support
    if (newSettings.colorBlind) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Zoom level
    root.style.zoom = `${newSettings.zoomLevel / 100}`;
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: AccessibilitySettings) => {
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  }, [applySettings]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean | number) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
      
      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (e.shiftKey) {
            if (currentIndex <= 0) {
              e.preventDefault();
              (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
            }
          } else {
            if (currentIndex >= focusableElements.length - 1) {
              e.preventDefault();
              (focusableElements[0] as HTMLElement).focus();
            }
          }
          break;
          
        case 'ArrowUp':
        case 'ArrowDown':
          e.preventDefault();
          const direction = e.key === 'ArrowUp' ? -1 : 1;
          const nextIndex = (currentIndex + direction + focusableElements.length) % focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement).focus();
          break;
          
        case 'Escape':
          // Close modals, dropdowns, etc.
          const activeModals = document.querySelectorAll('[data-modal="true"]');
          activeModals.forEach(modal => {
            (modal as HTMLElement).style.display = 'none';
          });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus tracking
  useEffect(() => {
    const handleFocusChange = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && target !== currentFocus) {
        setCurrentFocus(target);
        focusHistoryRef.current.push(target);
        
        // Keep only last 10 focus positions
        if (focusHistoryRef.current.length > 10) {
          focusHistoryRef.current.shift();
        }

        // Enhanced focus indicator
        if (settings.focusIndicator) {
          target.style.outline = '3px solid #3b82f6';
          target.style.outlineOffset = '2px';
          
          setTimeout(() => {
            if (target.style.outline === '3px solid #3b82f6') {
              target.style.outline = '';
              target.style.outlineOffset = '';
            }
          }, 2000);
        }
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [currentFocus, settings.focusIndicator]);

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

  // Zoom controls
  const handleZoom = useCallback((direction: 'in' | 'out' | 'reset') => {
    let newZoom = settings.zoomLevel;
    
    switch (direction) {
      case 'in':
        newZoom = Math.min(200, newZoom + 25);
        break;
      case 'out':
        newZoom = Math.max(50, newZoom - 25);
        break;
      case 'reset':
        newZoom = 100;
        break;
    }
    
    handleSettingChange('zoomLevel', newZoom);
    announceToScreenReader(`Zoom level set to ${newZoom}%`);
  }, [settings.zoomLevel, handleSettingChange, announceToScreenReader]);

  // Toggle visibility
  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
    announceToScreenReader(isVisible ? 'Accessibility panel hidden' : 'Accessibility panel shown');
  }, [isVisible, announceToScreenReader]);

  // Toggle panel
  const togglePanel = useCallback(() => {
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility settings closed' : 'Accessibility settings opened');
  }, [isOpen, announceToScreenReader]);

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 left-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Show accessibility options"
        title="Accessibility Options"
      >
        <Accessibility className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Main Accessibility Button */}
      <button
        onClick={togglePanel}
        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 mb-2"
        aria-label="Toggle accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          ref={settingsRef}
          id="accessibility-panel"
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700 max-w-sm"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-describedby="accessibility-description"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-slate-900 dark:text-white">
              Accessibility Options
            </h2>
            <button
              onClick={togglePanel}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              aria-label="Close accessibility settings"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          <p id="accessibility-description" className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            Customize your experience with these accessibility features
          </p>

          {/* Zoom Controls */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Zoom Level: {settings.zoomLevel}%
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => handleZoom('out')}
                className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleZoom('reset')}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg transition-colors text-sm"
              >
                Reset
              </button>
              <button
                onClick={() => handleZoom('in')}
                className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Toggle Settings */}
          <div className="space-y-3">
            {[
              { key: 'highContrast', label: 'High Contrast', icon: Contrast },
              { key: 'largeText', label: 'Large Text', icon: Type },
              { key: 'reducedMotion', label: 'Reduced Motion', icon: Eye },
              { key: 'screenReader', label: 'Screen Reader Support', icon: Volume2 },
              { key: 'keyboardNavigation', label: 'Enhanced Keyboard Navigation', icon: Keyboard },
              { key: 'focusIndicator', label: 'Focus Indicators', icon: MousePointer },
              { key: 'colorBlind', label: 'Color Blind Support', icon: EyeOff }
            ].map(({ key, label, icon: Icon }) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[key as keyof AccessibilitySettings] as boolean}
                  onChange={(e) => handleSettingChange(key as keyof AccessibilitySettings, e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <Icon className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>
              </label>
            ))}
          </div>

          {/* Current Focus Info */}
          {currentFocus && (
            <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current Focus:</p>
              <p className="text-sm font-mono text-slate-800 dark:text-slate-200 truncate">
                {currentFocus.tagName.toLowerCase()}
                {currentFocus.id && `#${currentFocus.id}`}
                {currentFocus.className && `.${currentFocus.className.split(' ').join('.')}`}
              </p>
            </div>
          )}

          {/* Hide Panel Button */}
          <button
            onClick={toggleVisibility}
            className="w-full mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-colors text-sm"
          >
            Hide Accessibility Panel
          </button>
        </div>
      )}
    </div>
  );
}

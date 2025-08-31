import React, { useEffect, useState, useCallback } from 'react';
import { SkipToContent, Volume2, VolumeX, Eye, EyeOff, Contrast, Type, ZoomIn, ZoomOut } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  zoomLevel: number;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
  enableSoundToggle?: boolean;
  enableZoomControls?: boolean;
}

export function EnhancedAccessibilityEnhancer({
  children,
  enableSkipLinks = true,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
  enableSoundToggle = true,
  enableZoomControls = true,
}: AccessibilityEnhancerProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    soundEnabled: true,
    zoomLevel: 100,
  });

  const [isAccessibilityMenuOpen, setIsAccessibilityMenuOpen] = useState(false);

  // Load accessibility preferences from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Zoom level
    root.style.fontSize = `${settings.zoomLevel}%`;
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey) {
        const skipLink = document.getElementById('skip-to-main');
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Toggle accessibility menu
      if (event.key === 'Escape') {
        setIsAccessibilityMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  const handleSkipToContent = () => {
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings, value?: boolean) => {
    const newValue = value !== undefined ? value : !settings[key];
    saveSettings({ [key]: newValue });
  };

  const adjustZoom = (delta: number) => {
    const newZoom = Math.max(50, Math.min(200, settings.zoomLevel + delta));
    saveSettings({ zoomLevel: newZoom });
  };

  return (
    <>
      {/* Skip Links */}
      {enableSkipLinks && (
        <div className="skip-links">
          <a
            id="skip-to-main"
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-white px-4 py-2 rounded-md z-50"
            onClick={handleSkipToContent}
          >
            Skip to main content
          </a>
          <a
            href="#navigation"
            className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-zion-cyan text-white px-4 py-2 rounded-md z-50"
          >
            Skip to navigation
          </a>
        </div>
      )}

      {/* Accessibility Menu Toggle */}
      <button
        aria-label="Accessibility settings"
        aria-expanded={isAccessibilityMenuOpen}
        aria-controls="accessibility-menu"
        className="fixed top-4 right-4 z-50 bg-zion-cyan text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan-light transition-colors focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2"
        onClick={() => setIsAccessibilityMenuOpen(!isAccessibilityMenuOpen)}
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Accessibility Menu */}
      {isAccessibilityMenuOpen && (
        <div
          id="accessibility-menu"
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed top-20 right-4 z-50 bg-white dark:bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-xl p-6 min-w-80"
        >
          <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white mb-4">
            Accessibility Settings
          </h3>

          <div className="space-y-4">
            {/* High Contrast Toggle */}
            {enableHighContrast && (
              <div className="flex items-center justify-between">
                <label htmlFor="high-contrast" className="flex items-center space-x-2 text-sm">
                  <Contrast className="w-4 h-4" />
                  <span>High Contrast</span>
                </label>
                <button
                  id="high-contrast"
                  aria-pressed={settings.highContrast}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-300'
                  }`}
                  onClick={() => toggleSetting('highContrast')}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            )}

            {/* Large Text Toggle */}
            {enableLargeText && (
              <div className="flex items-center justify-between">
                <label htmlFor="large-text" className="flex items-center space-x-2 text-sm">
                  <Type className="w-4 h-4" />
                  <span>Large Text</span>
                </label>
                <button
                  id="large-text"
                  aria-pressed={settings.largeText}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-zion-cyan' : 'bg-gray-300'
                  }`}
                  onClick={() => toggleSetting('largeText')}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            )}

            {/* Reduced Motion Toggle */}
            {enableReducedMotion && (
              <div className="flex items-center justify-between">
                <label htmlFor="reduced-motion" className="flex items-center space-x-2 text-sm">
                  <EyeOff className="w-4 h-4" />
                  <span>Reduced Motion</span>
                </label>
                <button
                  id="reduced-motion"
                  aria-pressed={settings.reducedMotion}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-300'
                  }`}
                  onClick={() => toggleSetting('reducedMotion')}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            )}

            {/* Sound Toggle */}
            {enableSoundToggle && (
              <div className="flex items-center justify-between">
                <label htmlFor="sound-toggle" className="flex items-center space-x-2 text-sm">
                  {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span>Sound {settings.soundEnabled ? 'On' : 'Off'}</span>
                </label>
                <button
                  id="sound-toggle"
                  aria-pressed={settings.soundEnabled}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.soundEnabled ? 'bg-zion-cyan' : 'bg-gray-300'
                  }`}
                  onClick={() => toggleSetting('soundEnabled')}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            )}

            {/* Zoom Controls */}
            {enableZoomControls && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">Zoom Level: {settings.zoomLevel}%</label>
                <div className="flex items-center space-x-2">
                  <button
                    aria-label="Zoom out"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    onClick={() => adjustZoom(-10)}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    aria-label="Reset zoom"
                    className="px-3 py-2 bg-zion-cyan text-white rounded-md hover:bg-zion-cyan-light transition-colors"
                    onClick={() => saveSettings({ zoomLevel: 100 })}
                  >
                    Reset
                  </button>
                  <button
                    aria-label="Zoom in"
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    onClick={() => adjustZoom(10)}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            aria-label="Close accessibility menu"
            className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setIsAccessibilityMenuOpen(false)}
          >
            <span className="sr-only">Close</span>
            ×
          </button>
        </div>
      )}

      {/* Apply accessibility classes to children */}
      <div
        className={`
          ${settings.highContrast ? 'high-contrast' : ''}
          ${settings.largeText ? 'large-text' : ''}
          ${settings.reducedMotion ? 'reduced-motion' : ''}
        `}
      >
        {children}
      </div>

      {/* Focus indicator for keyboard navigation */}
      <style jsx>{`
        .high-contrast {
          --zion-cyan: #000000;
          --zion-purple: #ffffff;
          --zion-slate-dark: #000000;
          --zion-slate-light: #ffffff;
          filter: contrast(150%);
        }

        .large-text {
          font-size: 1.2em;
          line-height: 1.6;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Focus styles */
        *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* Skip links */
        .skip-links a:focus {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}

// Accessibility hook for components
export function useAccessibility() {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  useEffect(() => {
    const handleKeyDown = () => setIsKeyboardUser(true);
    const handleMouseDown = () => setIsKeyboardUser(false);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return { isKeyboardUser };
}

// Screen reader only text component
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only" aria-hidden="false">
      {children}
    </span>
  );
}

// Visually hidden component
export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only" aria-hidden="true">
      {children}
    </span>
  );
}
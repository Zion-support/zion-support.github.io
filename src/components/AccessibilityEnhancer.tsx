import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Detect screen reader usage
  const detectScreenReader = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    // Check for common screen reader indicators
    const hasScreenReader = 
      window.navigator.userAgent.includes('NVDA') ||
      window.navigator.userAgent.includes('JAWS') ||
      window.navigator.userAgent.includes('VoiceOver') ||
      window.navigator.userAgent.includes('TalkBack') ||
      // Check for screen reader specific properties
      (window as any).speechSynthesis ||
      (window as any).webkitSpeechSynthesis ||
      // Check for accessibility APIs
      (window as any).chrome?.accessibilityFeatures ||
      (window as any).navigator?.accessibilityFeatures;

    return !!hasScreenReader;
  }, []);

  // Load settings from localStorage
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

    // Detect system preferences
    if (typeof window !== 'undefined') {
      const mediaQueries = {
        highContrast: window.matchMedia('(prefers-contrast: high)'),
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
      };

      setSettings(prev => ({
        ...prev,
        highContrast: mediaQueries.highContrast.matches,
        reducedMotion: mediaQueries.reducedMotion.matches,
        screenReader: detectScreenReader()
      }));

      // Listen for changes
      const handleChange = () => {
        setSettings(prev => ({
          ...prev,
          highContrast: mediaQueries.highContrast.matches,
          reducedMotion: mediaQueries.reducedMotion.matches
        }));
      };

      mediaQueries.highContrast.addEventListener('change', handleChange);
      mediaQueries.reducedMotion.addEventListener('change', handleChange);

      return () => {
        mediaQueries.highContrast.removeEventListener('change', handleChange);
        mediaQueries.reducedMotion.removeEventListener('change', handleChange);
      };
    }
  }, [detectScreenReader]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility styles
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--accessibility-high-contrast', settings.highContrast ? '1' : '0');
    root.style.setProperty('--accessibility-large-text', settings.largeText ? '1.2' : '1');
    root.style.setProperty('--accessibility-reduced-motion', settings.reducedMotion ? '1' : '0');
    root.style.setProperty('--accessibility-focus-visible', settings.focusVisible ? '1' : '0');

    // Add/remove classes
    root.classList.toggle('accessibility-high-contrast', settings.highContrast);
    root.classList.toggle('accessibility-large-text', settings.largeText);
    root.classList.toggle('accessibility-reduced-motion', settings.reducedMotion);
    root.classList.toggle('accessibility-focus-visible', settings.focusVisible);
    root.classList.toggle('accessibility-screen-reader', settings.screenReader);

    // Announce changes to screen readers
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Accessibility settings updated';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings]);

  // Keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          event.preventDefault();
        }
      }

      // Toggle focus visible mode
      if (event.key === 'Tab') {
        setSettings(prev => ({ ...prev, focusVisible: true }));
      }
    };

    const handleMouseDown = () => {
      setSettings(prev => ({ ...prev, focusVisible: false }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusVisible: false,
      screenReader: detectScreenReader()
    });
  }, [detectScreenReader]);

  // Show accessibility panel
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key === 'a') {
        setIsVisible(prev => !prev);
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      {isVisible && (
        <div 
          className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 max-w-sm"
          role="dialog"
          aria-labelledby="accessibility-panel-title"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 id="accessibility-panel-title" className="text-lg font-semibold">
              Accessibility Settings
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close accessibility panel"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="rounded"
              />
              <span>High Contrast</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="rounded"
              />
              <span>Large Text</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded"
              />
              <span>Reduce Motion</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="rounded"
              />
              <span>Enhanced Focus</span>
            </label>

            <div className="pt-2 border-t">
              <button
                onClick={resetSettings}
                className="w-full text-sm text-blue-600 hover:text-blue-800"
              >
                Reset to Defaults
              </button>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Press Alt+A to toggle this panel
          </div>
        </div>
      )}

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
    </>
  );
}

// Hook for accessibility settings
export function useAccessibility() {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window === 'undefined') {
      return {
        highContrast: false,
        largeText: false,
        reducedMotion: false,
        focusVisible: false,
        screenReader: false
      };
    }

    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {
          highContrast: false,
          largeText: false,
          reducedMotion: false,
          focusVisible: false,
          screenReader: false
        };
      }
    }

    return {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusVisible: false,
      screenReader: false
    };
  });

  return settings;
}
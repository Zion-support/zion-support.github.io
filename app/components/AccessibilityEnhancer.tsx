'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useAnalytics } from './AnalyticsProvider';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
  colorBlind: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false,
    keyboardNavigation: false,
    focusVisible: true,
    colorBlind: 'none'
  });

  const { trackEvent } = useAnalytics();

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
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
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

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Color blind support
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (settings.colorBlind !== 'none') {
      root.classList.add(settings.colorBlind);
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Screen reader optimizations
    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
  }, [settings]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A for accessibility menu
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        toggleAccessibilityMenu();
      }

      // Alt + 1 for high contrast toggle
      if (event.altKey && event.key === '1') {
        event.preventDefault();
        toggleHighContrast();
      }

      // Alt + 2 for reduced motion toggle
      if (event.altKey && event.key === '2') {
        event.preventDefault();
        toggleReducedMotion();
      }

      // Alt + 3 for font size increase
      if (event.altKey && event.key === '3') {
        event.preventDefault();
        increaseFontSize();
      }

      // Alt + 4 for font size decrease
      if (event.altKey && event.key === '4') {
        event.preventDefault();
        decreaseFontSize();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    trackEvent('accessibility_setting_changed', {
      setting: key,
      value: value
    });
  }, [trackEvent]);

  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast', !settings.highContrast);
  }, [settings.highContrast, updateSetting]);

  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  }, [settings.reducedMotion, updateSetting]);

  const increaseFontSize = useCallback(() => {
    const sizes = ['small', 'medium', 'large'] as const;
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex < sizes.length - 1) {
      updateSetting('fontSize', sizes[currentIndex + 1]);
    }
  }, [settings.fontSize, updateSetting]);

  const decreaseFontSize = useCallback(() => {
    const sizes = ['small', 'medium', 'large'] as const;
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex > 0) {
      updateSetting('fontSize', sizes[currentIndex - 1]);
    }
  }, [settings.fontSize, updateSetting]);

  const toggleAccessibilityMenu = useCallback(() => {
    // This would open an accessibility menu
    // For now, we'll just log it
    console.log('Accessibility menu toggled');
  }, []);

  // Add ARIA live region for announcements
  useEffect(() => {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-announcements';
    document.body.appendChild(liveRegion);

    return () => {
      const existing = document.getElementById('accessibility-announcements');
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  // Announce setting changes
  useEffect(() => {
    const liveRegion = document.getElementById('accessibility-announcements');
    if (liveRegion) {
      liveRegion.textContent = `Accessibility setting updated`;
    }
  }, [settings]);

  return (
    <>
      {children}
      
      {/* Accessibility Controls - Hidden by default, shown on focus */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50">
        <div className="bg-slate-800 text-white p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">Accessibility Controls</h3>
          <div className="space-y-2 text-sm">
            <button
              onClick={toggleHighContrast}
              className="block w-full text-left hover:bg-slate-700 p-2 rounded"
            >
              {settings.highContrast ? '✓' : '○'} High Contrast
            </button>
            <button
              onClick={toggleReducedMotion}
              className="block w-full text-left hover:bg-slate-700 p-2 rounded"
            >
              {settings.reducedMotion ? '✓' : '○'} Reduced Motion
            </button>
            <div className="p-2">
              <span className="block mb-1">Font Size:</span>
              <button
                onClick={decreaseFontSize}
                className="mr-2 px-2 py-1 bg-slate-600 rounded hover:bg-slate-500"
                disabled={settings.fontSize === 'small'}
              >
                A-
              </button>
              <span className="mx-2">{settings.fontSize}</span>
              <button
                onClick={increaseFontSize}
                className="px-2 py-1 bg-slate-600 rounded hover:bg-slate-500"
                disabled={settings.fontSize === 'large'}
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
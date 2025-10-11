'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false
  });

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Check for screen reader
    const screenReader = window.speechSynthesis !== undefined;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      screenReader
    }));

    // Apply initial styles
    applyAccessibilityStyles({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      screenReader
    });
  }, []);

  const applyAccessibilityStyles = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [setting]: !settings[setting]
    };
    setSettings(newSettings);
    applyAccessibilityStyles(newSettings);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView();
        }
      }
      
      // Toggle accessibility menu
      if (event.key === 'Tab' && event.altKey && event.ctrlKey) {
        event.preventDefault();
        const menu = document.querySelector('.accessibility-menu');
        if (menu) {
          (menu as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {children}
      
      {/* Accessibility Menu */}
      <div className="accessibility-menu fixed top-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 opacity-0 focus-within:opacity-100 hover:opacity-100 transition-opacity">
        <h3 className="font-bold mb-2">Accessibility Options</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={() => toggleSetting('highContrast')}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={() => toggleSetting('largeText')}
              className="rounded"
            />
            <span>Large Text</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={() => toggleSetting('reducedMotion')}
              className="rounded"
            />
            <span>Reduce Motion</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.focusVisible}
              onChange={() => toggleSetting('focusVisible')}
              className="rounded"
            />
            <span>Enhanced Focus</span>
          </label>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          <p>Keyboard shortcuts:</p>
          <p>Alt+Shift+Tab: Skip to main content</p>
          <p>Ctrl+Alt+Tab: Focus this menu</p>
        </div>
      </div>
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      {/* Screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="announcements"
      />
    </>
  );
};

export default EnhancedAccessibility;
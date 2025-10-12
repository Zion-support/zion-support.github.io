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

  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Detect screen reader
    const screenReader = window.speechSynthesis && window.speechSynthesis.getVoices().length > 0;
    setSettings(prev => ({ ...prev, screenReader }));

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSettings(prev => ({ ...prev, reducedMotion: prefersReducedMotion }));

    // Listen for changes in reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const announceToScreenReader = (message: string) => {
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
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    // Alt + A to toggle accessibility panel
    if (event.altKey && event.key === 'a') {
      event.preventDefault();
      setShowPanel(prev => {
        const newState = !prev;
        announceToScreenReader(newState ? 'Accessibility panel opened' : 'Accessibility panel closed');
        return newState;
      });
    }

    // Alt + H for high contrast
    if (event.altKey && event.key === 'h') {
      event.preventDefault();
      toggleSetting('highContrast');
      announceToScreenReader(settings.highContrast ? 'High contrast disabled' : 'High contrast enabled');
    }

    // Alt + L for large text
    if (event.altKey && event.key === 'l') {
      event.preventDefault();
      toggleSetting('largeText');
      announceToScreenReader(settings.largeText ? 'Large text disabled' : 'Large text enabled');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings]);

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      {showPanel && (
        <div className="fixed top-4 right-4 bg-gray-900 text-white p-6 rounded-lg shadow-2xl border border-gray-700 max-w-sm z-50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Accessibility Settings</h2>
            <button
              onClick={() => setShowPanel(false)}
              className="text-gray-400 hover:text-white text-xl"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-sm">
                High Contrast
              </label>
              <input
                id="high-contrast"
                type="checkbox"
                checked={settings.highContrast}
                onChange={() => toggleSetting('highContrast')}
                className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label htmlFor="large-text" className="text-sm">
                Large Text
              </label>
              <input
                id="large-text"
                type="checkbox"
                checked={settings.largeText}
                onChange={() => toggleSetting('largeText')}
                className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-sm">
                Reduced Motion
              </label>
              <input
                id="reduced-motion"
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={() => toggleSetting('reducedMotion')}
                className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label htmlFor="focus-visible" className="text-sm">
                Enhanced Focus
              </label>
              <input
                id="focus-visible"
                type="checkbox"
                checked={settings.focusVisible}
                onChange={() => toggleSetting('focusVisible')}
                className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
              />
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-400">
              Keyboard shortcuts: Alt+A (panel), Alt+H (contrast), Alt+L (text)
            </p>
          </div>
        </div>
      )}
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default EnhancedAccessibility;
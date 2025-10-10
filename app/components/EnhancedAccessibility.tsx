'use client';
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Type, Volume2, VolumeX } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: false
  });

  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Check system preferences
    const mediaQueries = {
      highContrast: window.matchMedia('(prefers-contrast: high)'),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
    };

    setSettings(prev => ({
      ...prev,
      highContrast: mediaQueries.highContrast.matches,
      reducedMotion: mediaQueries.reducedMotion.matches
    }));

    // Listen for changes
    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    mediaQueries.highContrast.addEventListener('change', handleHighContrastChange);
    mediaQueries.reducedMotion.addEventListener('change', handleReducedMotionChange);

    return () => {
      mediaQueries.highContrast.removeEventListener('change', handleHighContrastChange);
      mediaQueries.reducedMotion.removeEventListener('change', handleReducedMotionChange);
    };
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
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    if (settings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
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

  const handleKeyDown = (e: KeyboardEvent) => {
    // Alt + A to toggle accessibility panel
    if (e.altKey && e.key === 'a') {
      e.preventDefault();
      setShowPanel(prev => !prev);
      announceToScreenReader(showPanel ? 'Accessibility panel closed' : 'Accessibility panel opened');
    }

    // Alt + 1 to toggle high contrast
    if (e.altKey && e.key === '1') {
      e.preventDefault();
      toggleSetting('highContrast');
      announceToScreenReader(settings.highContrast ? 'High contrast disabled' : 'High contrast enabled');
    }

    // Alt + 2 to toggle large text
    if (e.altKey && e.key === '2') {
      e.preventDefault();
      toggleSetting('largeText');
      announceToScreenReader(settings.largeText ? 'Large text disabled' : 'Large text enabled');
    }

    // Alt + 3 to toggle reduced motion
    if (e.altKey && e.key === '3') {
      e.preventDefault();
      toggleSetting('reducedMotion');
      announceToScreenReader(settings.reducedMotion ? 'Reduced motion disabled' : 'Reduced motion enabled');
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
        <div className="fixed top-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Accessibility Settings</h2>
            <button
              onClick={() => setShowPanel(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={() => toggleSetting('highContrast')}
                className="w-4 h-4"
              />
              <Eye className="w-4 h-4" />
              <span>High Contrast</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={() => toggleSetting('largeText')}
                className="w-4 h-4"
              />
              <Type className="w-4 h-4" />
              <span>Large Text</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={() => toggleSetting('reducedMotion')}
                className="w-4 h-4"
              />
              <VolumeX className="w-4 h-4" />
              <span>Reduced Motion</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={() => toggleSetting('screenReader')}
                className="w-4 h-4"
              />
              <Volume2 className="w-4 h-4" />
              <span>Screen Reader Mode</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={() => toggleSetting('focusVisible')}
                className="w-4 h-4"
              />
              <EyeOff className="w-4 h-4" />
              <span>Enhanced Focus</span>
            </label>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-700 text-xs text-gray-400">
            <p>Keyboard shortcuts:</p>
            <p>Alt + A: Toggle panel</p>
            <p>Alt + 1: High contrast</p>
            <p>Alt + 2: Large text</p>
            <p>Alt + 3: Reduced motion</p>
          </div>
        </div>
      )}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-4 left-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-40"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Eye className="w-5 h-5" />
      </button>
    </>
  );
};

export default EnhancedAccessibility;
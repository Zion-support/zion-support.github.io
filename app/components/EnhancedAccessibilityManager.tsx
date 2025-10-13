import React, { useState, useEffect, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindSupport: boolean;
  dyslexiaSupport: boolean;
}

interface AccessibilityManagerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
  enableKeyboardShortcuts?: boolean;
  enableVoiceNavigation?: boolean;
}

const EnhancedAccessibilityManager: React.FC<AccessibilityManagerProps> = ({
  onSettingsChange,
  enableKeyboardShortcuts = true,
  enableVoiceNavigation = false
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindSupport: false,
    dyslexiaSupport: false
  });

  const [isVisible, setIsVisible] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsedSettings }));
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    if (onSettingsChange) {
      onSettingsChange(settings);
    }
  }, [settings, onSettingsChange]);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
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

    // Screen reader mode
    if (settings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('focus-indicators');
    } else {
      root.classList.remove('focus-indicators');
    }

    // Color blind support
    if (settings.colorBlindSupport) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Dyslexia support
    if (settings.dyslexiaSupport) {
      root.classList.add('dyslexia-support');
    } else {
      root.classList.remove('dyslexia-support');
    }

  }, [settings]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsVisible(prev => !prev);
        announce('Accessibility panel toggled');
      }

      // Alt + H for high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        toggleSetting('highContrast');
        announce('High contrast mode toggled');
      }

      // Alt + L for large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        toggleSetting('largeText');
        announce('Large text mode toggled');
      }

      // Alt + R for reduced motion
      if (event.altKey && event.key === 'r') {
        event.preventDefault();
        toggleSetting('reducedMotion');
        announce('Reduced motion mode toggled');
      }

      // Alt + S for screen reader mode
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        toggleSetting('screenReader');
        announce('Screen reader mode toggled');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts]);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    setAnnouncements(prev => [...prev, message]);
    
    // Create a live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;
    
    document.body.appendChild(liveRegion);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(liveRegion);
    }, 1000);
  }, []);

  // Toggle a specific setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  // Reset all settings
  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: true,
      focusIndicators: true,
      colorBlindSupport: false,
      dyslexiaSupport: false
    });
    announce('Accessibility settings reset');
  }, [announce]);

  // Skip to main content
  const skipToMain = useCallback(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
      announce('Skipped to main content');
    }
  }, [announce]);

  // Skip to navigation
  const skipToNav = useCallback(() => {
    const navigation = document.querySelector('nav');
    if (navigation) {
      const firstLink = navigation.querySelector('a');
      if (firstLink) {
        firstLink.focus();
        announce('Skipped to navigation');
      }
    }
  }, [announce]);

  if (!isVisible) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          aria-label="Open accessibility options"
          title="Open accessibility options (Alt + A)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
        <button
          onClick={skipToMain}
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to main content
        </button>
        <button
          onClick={skipToNav}
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to navigation
        </button>
      </div>

      {/* Accessibility Panel */}
      <div className="fixed top-4 right-4 bg-slate-800 text-white p-6 rounded-lg shadow-xl max-w-sm z-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Accessibility Options</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close accessibility options"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* High Contrast */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={() => toggleSetting('highContrast')}
              className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
            />
            <span className="text-sm">High Contrast (Alt + H)</span>
          </label>

          {/* Large Text */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={() => toggleSetting('largeText')}
              className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
            />
            <span className="text-sm">Large Text (Alt + L)</span>
          </label>

          {/* Reduced Motion */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={() => toggleSetting('reducedMotion')}
              className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
            />
            <span className="text-sm">Reduced Motion (Alt + R)</span>
          </label>

          {/* Screen Reader Mode */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.screenReader}
              onChange={() => toggleSetting('screenReader')}
              className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
            />
            <span className="text-sm">Screen Reader Mode (Alt + S)</span>
          </label>

          {/* Focus Indicators */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.focusIndicators}
              onChange={() => toggleSetting('focusIndicators')}
              className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
            />
            <span className="text-sm">Enhanced Focus Indicators</span>
          </label>

          {/* Color Blind Support */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.colorBlindSupport}
              onChange={() => toggleSetting('colorBlindSupport')}
              className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
            />
            <span className="text-sm">Color Blind Support</span>
          </label>

          {/* Dyslexia Support */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.dyslexiaSupport}
              onChange={() => toggleSetting('dyslexiaSupport')}
              className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
            />
            <span className="text-sm">Dyslexia Support</span>
          </label>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-700">
          <button
            onClick={resetSettings}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Reset Settings
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-400">
          <p>Keyboard shortcuts:</p>
          <ul className="mt-1 space-y-1">
            <li>Alt + A: Toggle this panel</li>
            <li>Alt + H: High contrast</li>
            <li>Alt + L: Large text</li>
            <li>Alt + R: Reduced motion</li>
            <li>Alt + S: Screen reader mode</li>
          </ul>
        </div>
      </div>

      {/* Announcements for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </>
  );
};

export default EnhancedAccessibilityManager;
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, MousePointer, Keyboard } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: false,
    focusVisible: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));
  }, []);

  // Apply accessibility settings
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

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Screen reader optimizations
    if (settings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'assertive');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const handleToggle = (key: keyof AccessibilitySettings, label: string) => {
    toggleSetting(key);
    announceToScreenReader(`${label} ${settings[key] ? 'disabled' : 'enabled'}`);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-50 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2"
        aria-label="Toggle Accessibility Settings"
        aria-expanded={isVisible}
      >
        <Eye className="w-5 h-5" />
        <span className="text-sm font-medium">Accessibility</span>
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed bottom-16 left-4 z-50 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Accessibility Settings
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility settings"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">High Contrast</div>
                  <div className="text-xs text-gray-400">Enhanced color contrast</div>
                </div>
              </div>
              <button
                onClick={() => handleToggle('highContrast', 'High contrast')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.highContrast}
                aria-label="Toggle high contrast mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <VolumeX className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Reduced Motion</div>
                  <div className="text-xs text-gray-400">Minimize animations</div>
                </div>
              </div>
              <button
                onClick={() => handleToggle('reducedMotion', 'Reduced motion')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.reducedMotion}
                aria-label="Toggle reduced motion"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Type className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Large Text</div>
                  <div className="text-xs text-gray-400">Increase text size</div>
                </div>
              </div>
              <button
                onClick={() => handleToggle('largeText', 'Large text')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.largeText}
                aria-label="Toggle large text"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Screen Reader</div>
                  <div className="text-xs text-gray-400">Optimize for screen readers</div>
                </div>
              </div>
              <button
                onClick={() => handleToggle('screenReader', 'Screen reader optimization')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.screenReader ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.screenReader}
                aria-label="Toggle screen reader optimization"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Keyboard className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Keyboard Navigation</div>
                  <div className="text-xs text-gray-400">Enhanced keyboard support</div>
                </div>
              </div>
              <button
                onClick={() => handleToggle('keyboardNavigation', 'Keyboard navigation')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.keyboardNavigation}
                aria-label="Toggle keyboard navigation"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Visible */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MousePointer className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Focus Indicators</div>
                  <div className="text-xs text-gray-400">Enhanced focus visibility</div>
                </div>
              </div>
              <button
                onClick={() => handleToggle('focusVisible', 'Focus indicators')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusVisible ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.focusVisible}
                aria-label="Toggle focus indicators"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <div className="pt-4 border-t border-gray-700">
              <button
                onClick={() => {
                  setSettings({
                    highContrast: false,
                    reducedMotion: false,
                    largeText: false,
                    screenReader: false,
                    keyboardNavigation: false,
                    focusVisible: false
                  });
                  announceToScreenReader('Accessibility settings reset');
                }}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibility;
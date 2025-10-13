import React, { useState, useEffect } from 'react';
import { Settings, Eye, Type, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  audioDescription: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  colorScheme: 'auto' | 'light' | 'dark' | 'high-contrast';
}

const AccessibilityControls: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    audioDescription: false,
    fontSize: 'normal',
    colorScheme: 'auto'
  });

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }

    // Check system preferences
    const mediaQueries = {
      highContrast: window.matchMedia('(prefers-contrast: high)'),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      colorScheme: window.matchMedia('(prefers-color-scheme: dark)')
    };

    setSettings(prev => ({
      ...prev,
      highContrast: mediaQueries.highContrast.matches,
      reducedMotion: mediaQueries.reducedMotion.matches,
      colorScheme: mediaQueries.colorScheme.matches ? 'dark' : 'light'
    }));
  }, []);

  useEffect(() => {
    // Apply settings to document
    const body = document.body;
    const root = document.documentElement;

    // High contrast
    if (settings.highContrast) {
      body.classList.add('high-contrast');
      root.style.setProperty('--contrast-mode', 'high');
    } else {
      body.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-mode');
    }

    // Large text
    if (settings.largeText) {
      body.classList.add('large-text');
      root.style.setProperty('--font-size-multiplier', '1.25');
    } else {
      body.classList.remove('large-text');
      root.style.removeProperty('--font-size-multiplier');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      body.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      body.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }

    // Screen reader
    if (settings.screenReader) {
      body.classList.add('screen-reader');
    } else {
      body.classList.remove('screen-reader');
    }

    // Font size
    const fontSizeMap = {
      normal: '1rem',
      large: '1.125rem',
      'extra-large': '1.25rem'
    };
    root.style.setProperty('--base-font-size', fontSizeMap[settings.fontSize]);

    // Color scheme
    if (settings.colorScheme === 'high-contrast') {
      root.setAttribute('data-theme', 'high-contrast');
    } else if (settings.colorScheme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else if (settings.colorScheme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      audioDescription: false,
      fontSize: 'normal',
      colorScheme: 'auto'
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <FuturisticButton
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        size="sm"
        className="fixed bottom-4 left-4 z-50"
        icon={<Settings className="w-4 h-4" />}
        aria-label="Accessibility Settings"
      >
        Accessibility
      </FuturisticButton>

      {/* Settings Panel */}
      {isOpen && (
        <div className="fixed bottom-16 left-4 z-50 w-80 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Accessibility Settings</h3>
            <FuturisticButton
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Close
            </FuturisticButton>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <label className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span className="text-white">High Contrast</span>
              </div>
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
              />
            </label>

            {/* Large Text */}
            <label className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Type className="w-4 h-4 text-cyan-400" />
                <span className="text-white">Large Text</span>
              </div>
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
              />
            </label>

            {/* Reduced Motion */}
            <label className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4 text-cyan-400" />
                <span className="text-white">Reduced Motion</span>
              </div>
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
              />
            </label>

            {/* Audio Description */}
            <label className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {settings.audioDescription ? (
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                ) : (
                  <VolumeX className="w-4 h-4 text-cyan-400" />
                )}
                <span className="text-white">Audio Description</span>
              </div>
              <input
                type="checkbox"
                checked={settings.audioDescription}
                onChange={(e) => updateSetting('audioDescription', e.target.checked)}
                className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
              />
            </label>

            {/* Font Size */}
            <div>
              <label className="block text-white mb-2">Font Size</label>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value as any)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="normal">Normal</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>

            {/* Color Scheme */}
            <div>
              <label className="block text-white mb-2">Color Scheme</label>
              <select
                value={settings.colorScheme}
                onChange={(e) => updateSetting('colorScheme', e.target.value as any)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="auto">Auto</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="high-contrast">High Contrast</option>
              </select>
            </div>

            {/* Reset Button */}
            <FuturisticButton
              onClick={resetSettings}
              variant="outline"
              size="sm"
              className="w-full"
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Reset to Defaults
            </FuturisticButton>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityControls;
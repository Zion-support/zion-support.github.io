'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
  skipLinks: boolean;
  altText: boolean;
  ariaLabels: boolean;
  colorBlindSupport: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false,
    keyboardNavigation: true,
    focusVisible: true,
    skipLinks: true,
    altText: true,
    ariaLabels: true,
    colorBlindSupport: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${newSettings.fontSize}`);

    // Screen reader support
    if (newSettings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Skip links
    if (newSettings.skipLinks) {
      const skipLink = document.getElementById('skip-link');
      if (skipLink) {
        skipLink.style.display = 'block';
      }
    } else {
      const skipLink = document.getElementById('skip-link');
      if (skipLink) {
        skipLink.style.display = 'none';
      }
    }

    // Alt text for images
    if (newSettings.altText) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', 'Image');
        }
      });
    }

    // ARIA labels
    if (newSettings.ariaLabels) {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent) {
          button.setAttribute('aria-label', 'Button');
        }
      });
    }

    // Color blind support
    if (newSettings.colorBlindSupport) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }
  };

  const handleSettingChange = (key: keyof AccessibilitySettings, value: boolean | string) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      reducedMotion: false,
      fontSize: 'medium',
      screenReader: false,
      keyboardNavigation: true,
      focusVisible: true,
      skipLinks: true,
      altText: true,
      ariaLabels: true,
      colorBlindSupport: false
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(defaultSettings));
  };

  return (
    <>
      {/* Skip Link */}
      {settings.skipLinks && (
        <a
          href="#main-content"
          id="skip-link"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
      )}

      {/* Accessibility Panel */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Toggle accessibility settings"
        >
          ♿
        </button>

        {isVisible && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Accessibility Settings
            </h3>

            <div className="space-y-4">
              {/* High Contrast */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">High Contrast</span>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                  className="rounded"
                />
              </label>

              {/* Reduced Motion */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Reduced Motion</span>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                  className="rounded"
                />
              </label>

              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size
                </label>
                <select
                  value={settings.fontSize}
                  onChange={(e) => handleSettingChange('fontSize', e.target.value as 'small' | 'medium' | 'large')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>

              {/* Screen Reader */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Screen Reader Support</span>
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => handleSettingChange('screenReader', e.target.checked)}
                  className="rounded"
                />
              </label>

              {/* Keyboard Navigation */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Keyboard Navigation</span>
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => handleSettingChange('keyboardNavigation', e.target.checked)}
                  className="rounded"
                />
              </label>

              {/* Focus Visible */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Focus Visible</span>
                <input
                  type="checkbox"
                  checked={settings.focusVisible}
                  onChange={(e) => handleSettingChange('focusVisible', e.target.checked)}
                  className="rounded"
                />
              </label>

              {/* Skip Links */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Skip Links</span>
                <input
                  type="checkbox"
                  checked={settings.skipLinks}
                  onChange={(e) => handleSettingChange('skipLinks', e.target.checked)}
                  className="rounded"
                />
              </label>

              {/* Alt Text */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Alt Text</span>
                <input
                  type="checkbox"
                  checked={settings.altText}
                  onChange={(e) => handleSettingChange('altText', e.target.checked)}
                  className="rounded"
                />
              </label>

              {/* ARIA Labels */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">ARIA Labels</span>
                <input
                  type="checkbox"
                  checked={settings.ariaLabels}
                  onChange={(e) => handleSettingChange('ariaLabels', e.target.checked)}
                  className="rounded"
                />
              </label>

              {/* Color Blind Support */}
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Color Blind Support</span>
                <input
                  type="checkbox"
                  checked={settings.colorBlindSupport}
                  onChange={(e) => handleSettingChange('colorBlindSupport', e.target.checked)}
                  className="rounded"
                />
              </label>
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={resetSettings}
                className="flex-1 bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EnhancedAccessibility;
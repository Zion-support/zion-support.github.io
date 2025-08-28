import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

export function AccessibilityEnhancer() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: false,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load accessibility preferences from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applyAccessibilitySettings(parsed);
    }

    // Check for system preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }
  }, []);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
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

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-indicator');
    } else {
      root.classList.remove('focus-indicator');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  }, [settings, applyAccessibilitySettings]);

  // Toggle accessibility panel
  const togglePanel = () => setIsVisible(!isVisible);

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        togglePanel();
      }
      
      // Alt + H for high contrast
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        handleSettingChange('highContrast', !settings.highContrast);
      }
      
      // Alt + L for large text
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        handleSettingChange('largeText', !settings.largeText);
      }
      
      // Alt + M for reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        handleSettingChange('reducedMotion', !settings.reducedMotion);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [settings, handleSettingChange]);

  // Add ARIA labels and roles to interactive elements
  useEffect(() => {
    const addAccessibilityAttributes = () => {
      // Add role="button" to clickable divs
      const clickableDivs = document.querySelectorAll('div[onClick], div[onclick]');
      clickableDivs.forEach(div => {
        if (!div.getAttribute('role')) {
          div.setAttribute('role', 'button');
        }
        if (!div.getAttribute('tabindex')) {
          div.setAttribute('tabindex', '0');
        }
      });

      // Add aria-label to images without alt text
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          img.setAttribute('aria-label', 'Image');
        }
      });

      // Add aria-expanded to dropdowns
      const dropdowns = document.querySelectorAll('[data-dropdown]');
      dropdowns.forEach(dropdown => {
        if (!dropdown.getAttribute('aria-expanded')) {
          dropdown.setAttribute('aria-expanded', 'false');
        }
      });
    };

    // Run after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addAccessibilityAttributes);
    } else {
      addAccessibilityAttributes();
    }

    // Run periodically to catch dynamically added elements
    const interval = setInterval(addAccessibilityAttributes, 5000);
    return () => clearInterval(interval);
  }, []);

  // Add skip links for keyboard navigation
  useEffect(() => {
    const addSkipLinks = () => {
      if (document.getElementById('skip-links')) return;

      const skipLinks = document.createElement('div');
      skipLinks.id = 'skip-links';
      skipLinks.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black';
      
      skipLinks.innerHTML = `
        <a href="#main-content" class="block mb-2">Skip to main content</a>
        <a href="#navigation" class="block mb-2">Skip to navigation</a>
        <a href="#footer" class="block">Skip to footer</a>
      `;

      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();
  }, []);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
        aria-label="Accessibility Settings"
        title="Accessibility Settings (Alt + A)"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed bottom-20 left-6 z-40 w-80 bg-white/95 backdrop-blur-sm border border-gray-300 rounded-lg shadow-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Accessibility Settings</h3>
            <button
              onClick={togglePanel}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
              aria-label="Close accessibility panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="high-contrast" className="text-sm font-medium text-gray-700">
                  High Contrast
                </label>
                <p className="text-xs text-gray-500">Enhanced color contrast</p>
              </div>
              <input
                id="high-contrast"
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="large-text" className="text-sm font-medium text-gray-700">
                  Large Text
                </label>
                <p className="text-xs text-gray-500">Increased font sizes</p>
              </div>
              <input
                id="large-text"
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="reduced-motion" className="text-sm font-medium text-gray-700">
                  Reduced Motion
                </label>
                <p className="text-xs text-gray-500">Minimize animations</p>
              </div>
              <input
                id="reduced-motion"
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>

            {/* Focus Indicator */}
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="focus-indicator" className="text-sm font-medium text-gray-700">
                  Focus Indicator
                </label>
                <p className="text-xs text-gray-500">Enhanced focus visibility</p>
              </div>
              <input
                id="focus-indicator"
                type="checkbox"
                checked={settings.focusIndicator}
                onChange={(e) => handleSettingChange('focusIndicator', e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
            </div>

            {/* Keyboard Shortcuts */}
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Keyboard Shortcuts</h4>
              <div className="text-xs text-gray-500 space-y-1">
                <div>Alt + A: Toggle this panel</div>
                <div>Alt + H: Toggle high contrast</div>
                <div>Alt + L: Toggle large text</div>
                <div>Alt + M: Toggle reduced motion</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

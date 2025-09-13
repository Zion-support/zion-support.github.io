'use client';

import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  highContrast: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect screen reader usage
    const detectScreenReader = () => {
      const hasScreenReader = 
        window.navigator.userAgent.includes('NVDA') ||
        window.navigator.userAgent.includes('JAWS') ||
        window.navigator.userAgent.includes('VoiceOver') ||
        window.navigator.userAgent.includes('TalkBack') ||
        document.querySelector('[aria-live]') !== null;
      
      setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));
    };

    // Detect reduced motion preference
    const detectReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setSettings(prev => ({ ...prev, reducedMotion: prefersReducedMotion }));
    };

    // Load saved settings
    const loadSettings = () => {
      const saved = localStorage.getItem('accessibility-settings');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setSettings(prev => ({ ...prev, ...parsed }));
        } catch (e) {
          console.warn('Failed to load accessibility settings');
        }
      }
    };

    detectScreenReader();
    detectReducedMotion();
    loadSettings();

    // Listen for changes in reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => detectReducedMotion();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    // Font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

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

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={togglePanel}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Open accessibility settings"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </button>

        {isVisible && (
          <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 w-80 border">
            <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
            
            {/* Font Size */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Font Size</label>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xlarge">Extra Large</option>
              </select>
            </div>

            {/* High Contrast */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="mr-2 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm">High Contrast</span>
              </label>
            </div>

            {/* Reduced Motion */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="mr-2 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm">Reduce Motion</span>
              </label>
            </div>

            {/* Focus Visible */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.focusVisible}
                  onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                  className="mr-2 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm">Enhanced Focus</span>
              </label>
            </div>

            {/* Screen Reader Status */}
            <div className="mb-4">
              <div className="text-sm text-gray-600">
                Screen Reader: {settings.screenReader ? 'Detected' : 'Not Detected'}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setSettings({
                  fontSize: 'medium',
                  highContrast: false,
                  reducedMotion: false,
                  focusVisible: false,
                  screenReader: false,
                });
              }}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Reset Settings
            </button>
          </div>
        )}
      </div>

      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="screen-reader-announcements"
      />
    </>
  );
};

// Hook for accessibility features
export const useAccessibility = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.warn('Failed to load accessibility settings');
      }
    }
  }, []);

  const announce = (message: string) => {
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  };

  return { settings, announce };
};

// Focus management hook
export const useFocusManagement = () => {
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const trapFocus = (element: HTMLElement) => {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0] as HTMLElement;
    const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  };

  const focusFirst = (element: HTMLElement) => {
    const firstFocusableElement = element.querySelector(focusableElements) as HTMLElement;
    firstFocusableElement?.focus();
  };

  return { trapFocus, focusFirst };
};

export default AdvancedAccessibilityEnhancer;
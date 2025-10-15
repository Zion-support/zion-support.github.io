import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  enableKeyboard: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableLargeText: boolean;
  enableReducedMotion: boolean;
}

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    enableKeyboard: true,
    enableScreenReader: true,
    enableHighContrast: false,
    enableFocusManagement: true,
    enableLargeText: false,
    enableReducedMotion: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;

    // High contrast mode
    if (settings.enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (settings.enableLargeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (settings.enableReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus management
    if (settings.enableFocusManagement) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  // Keyboard navigation
  useEffect(() => {
    if (!settings.enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView();
        }
      }

      // Toggle accessibility panel
      if (e.key === 'F1') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.enableKeyboard]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.enableScreenReader]);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    
    announceToScreenReader(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`);
  };

  if (!isVisible) return <>{children}</>;

  return (
    <>
      {children}
      <div className="fixed top-4 right-4 bg-slate-800 text-white p-6 rounded-lg shadow-lg z-50 max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Accessibility Settings</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white text-xl"
            aria-label="Close accessibility settings"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="keyboard-nav" className="text-sm">
              Keyboard Navigation
            </label>
            <input
              id="keyboard-nav"
              type="checkbox"
              checked={settings.enableKeyboard}
              onChange={(e) => updateSetting('enableKeyboard', e.target.checked)}
              className="w-4 h-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="screen-reader" className="text-sm">
              Screen Reader Support
            </label>
            <input
              id="screen-reader"
              type="checkbox"
              checked={settings.enableScreenReader}
              onChange={(e) => updateSetting('enableScreenReader', e.target.checked)}
              className="w-4 h-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="high-contrast" className="text-sm">
              High Contrast
            </label>
            <input
              id="high-contrast"
              type="checkbox"
              checked={settings.enableHighContrast}
              onChange={(e) => updateSetting('enableHighContrast', e.target.checked)}
              className="w-4 h-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="focus-management" className="text-sm">
              Focus Management
            </label>
            <input
              id="focus-management"
              type="checkbox"
              checked={settings.enableFocusManagement}
              onChange={(e) => updateSetting('enableFocusManagement', e.target.checked)}
              className="w-4 h-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="large-text" className="text-sm">
              Large Text
            </label>
            <input
              id="large-text"
              type="checkbox"
              checked={settings.enableLargeText}
              onChange={(e) => updateSetting('enableLargeText', e.target.checked)}
              className="w-4 h-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="reduced-motion" className="text-sm">
              Reduced Motion
            </label>
            <input
              id="reduced-motion"
              type="checkbox"
              checked={settings.enableReducedMotion}
              onChange={(e) => updateSetting('enableReducedMotion', e.target.checked)}
              className="w-4 h-4"
            />
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-600 text-xs text-gray-400">
          Press F1 to toggle this panel
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;

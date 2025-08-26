import React, { useState, useEffect, useCallback } from 'react';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Sun,
  Moon,
  Contrast,
  Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindMode: boolean;
  dyslexiaFriendly: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindMode: false,
    dyslexiaFriendly: false
  });

  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    const savedTheme = localStorage.getItem('accessibility-theme');

    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize));
    }
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark' | 'auto');
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }

    // Apply dyslexia friendly font
    if (settings.dyslexiaFriendly) {
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
    } else {
      root.style.fontFamily = 'Inter, system-ui, sans-serif';
    }

    // Apply color blind mode
    if (settings.colorBlindMode) {
      root.classList.add('color-blind-mode');
    } else {
      root.classList.remove('color-blind-mode');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('accessibility-font-size', fontSize.toString());
  }, [fontSize]);

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    
    localStorage.setItem('accessibility-theme', theme);
  }, [theme]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Quick navigation shortcuts
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'h':
            e.preventDefault();
            window.location.href = '/';
            break;
          case 's':
            e.preventDefault();
            window.location.href = '/services';
            break;
          case 'c':
            e.preventDefault();
            window.location.href = '/contact';
            break;
          case 'a':
            e.preventDefault();
            window.location.href = '/about';
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus indicator enhancement
  useEffect(() => {
    if (settings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }
  }, [settings.focusIndicator]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
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
  }, [settings.screenReader]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    
    const action = newSettings[key] ? 'enabled' : 'disabled';
    announceToScreenReader(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${action}`);
  };

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(prev => prev + 2);
      announceToScreenReader(`Font size increased to ${fontSize + 2}px`);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(prev => prev - 2);
      announceToScreenReader(`Font size decreased to ${fontSize - 2}px`);
    }
  };

  const resetFontSize = () => {
    setFontSize(16);
    announceToScreenReader('Font size reset to default');
  };

  const cycleTheme = () => {
    const themes: ('light' | 'dark' | 'auto')[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    announceToScreenReader(`Theme changed to ${nextTheme}`);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6 mx-auto" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          className="fixed bottom-24 right-6 z-40 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6"
          role="dialog"
          aria-labelledby="accessibility-title"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white">
              Accessibility Settings
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Font Size Controls */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Font Size: {fontSize}px
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={resetFontSize}
                  className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                  aria-label="Reset font size"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Theme Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Theme
              </label>
              <button
                onClick={cycleTheme}
                className="flex items-center space-x-2 p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded w-full justify-center"
              >
                {theme === 'light' && <Sun className="w-4 h-4" />}
                {theme === 'dark' && <Moon className="w-4 h-4" />}
                {theme === 'auto' && <Monitor className="w-4 h-4" />}
                <span className="capitalize">{theme}</span>
              </button>
            </div>

            {/* Accessibility Toggles */}
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={() => toggleSetting('highContrast')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                <Contrast className="w-4 h-4 text-gray-500" />
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={() => toggleSetting('largeText')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                <Eye className="w-4 h-4 text-gray-500" />
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={() => toggleSetting('reducedMotion')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                <MousePointer className="w-4 h-4 text-gray-500" />
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={() => toggleSetting('keyboardNavigation')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                <Keyboard className="w-4 h-4 text-gray-500" />
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.focusIndicator}
                  onChange={() => toggleSetting('focusIndicator')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
                <Eye className="w-4 h-4 text-gray-500" />
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.dyslexiaFriendly}
                  onChange={() => toggleSetting('dyslexiaFriendly')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Dyslexia Friendly Font</span>
                <Eye className="w-4 h-4 text-gray-500" />
              </label>
            </div>

            {/* Keyboard Shortcuts Help */}
            {settings.keyboardNavigation && (
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Keyboard Shortcuts
                </h3>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div>Alt + Tab: Skip to main content</div>
                  <div>Ctrl/Cmd + H: Home</div>
                  <div>Ctrl/Cmd + S: Services</div>
                  <div>Ctrl/Cmd + C: Contact</div>
                  <div>Ctrl/Cmd + A: About</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Skip to main content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AccessibilityEnhancer;
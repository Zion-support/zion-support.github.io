import React, { useEffect, useState, ReactNode } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Moon, Sun, RotateCcw } from 'lucide-react';

interface AccessibilityManagerProps {
  children: ReactNode;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  colorBlind: boolean;
  fontSize: number;
  theme: 'light' | 'dark' | 'auto';
}

const AccessibilityManager: React.FC<AccessibilityManagerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    colorBlind: false,
    fontSize: 16,
    theme: 'auto'
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
    }

    // Detect system preferences
    const mediaQueries = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      prefersColorScheme: window.matchMedia('(prefers-color-scheme: dark)'),
      prefersContrast: window.matchMedia('(prefers-contrast: high)')
    };

    // Apply system preferences
    setSettings(prev => ({
      ...prev,
      reducedMotion: mediaQueries.prefersReducedMotion.matches,
      highContrast: mediaQueries.prefersContrast.matches,
      theme: mediaQueries.prefersColorScheme.matches ? 'dark' : 'light'
    }));

    // Listen for changes
    const handleChange = () => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: mediaQueries.prefersReducedMotion.matches,
        highContrast: mediaQueries.prefersContrast.matches,
        theme: mediaQueries.prefersColorScheme.matches ? 'dark' : 'light'
      }));
    };

    mediaQueries.prefersReducedMotion.addEventListener('change', handleChange);
    mediaQueries.prefersColorScheme.addEventListener('change', handleChange);
    mediaQueries.prefersContrast.addEventListener('change', handleChange);

    return () => {
      mediaQueries.prefersReducedMotion.removeEventListener('change', handleChange);
      mediaQueries.prefersColorScheme.removeEventListener('change', handleChange);
      mediaQueries.prefersContrast.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to the document
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Color blind support
    if (settings.colorBlind) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Font size
    root.style.fontSize = `${settings.fontSize}px`;

    // Theme
    if (settings.theme === 'dark') {
      root.classList.add('dark');
    } else if (settings.theme === 'light') {
      root.classList.remove('dark');
    } else {
      // Auto theme - let system preference handle it
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      colorBlind: false,
      fontSize: 16,
      theme: 'auto'
    });
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white hover:bg-slate-700/90 transition-all duration-300"
          aria-label="Open accessibility settings"
        >
          <Eye className="w-5 h-5" />
        </button>
        
        {isOpen && (
          <div className="absolute top-16 right-0 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg p-6 w-80 text-white">
            <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
            
            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>High Contrast</span>
                </label>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <Type className="w-4 h-4" />
                  <span>Large Text</span>
                </label>
                <button
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>Reduce Motion</span>
                </label>
                <button
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Color Blind Support */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <EyeOff className="w-4 h-4" />
                  <span>Color Blind Support</span>
                </label>
                <button
                  onClick={() => updateSetting('colorBlind', !settings.colorBlind)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.colorBlind ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.colorBlind ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Font Size: {settings.fontSize}px
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={settings.fontSize}
                  onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Theme */}
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <select
                  value={settings.theme}
                  onChange={(e) => updateSetting('theme', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                >
                  <option value="auto">Auto</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AccessibilityManager;
import React, { useEffect, useState, useCallback } from 'react';
import { Eye, EyeOff, Type, Volume2, VolumeX, MousePointer, Keyboard } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusVisible: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
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

    // Large text
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

    // Screen reader optimizations
    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
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
  }, [settings]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Announce changes to screen readers
    const announcements = {
      highContrast: value ? 'High contrast mode enabled' : 'High contrast mode disabled',
      largeText: value ? 'Large text mode enabled' : 'Large text mode disabled',
      reducedMotion: value ? 'Reduced motion enabled' : 'Reduced motion disabled',
      screenReader: value ? 'Screen reader optimizations enabled' : 'Screen reader optimizations disabled',
      keyboardNavigation: value ? 'Keyboard navigation mode enabled' : 'Keyboard navigation mode disabled',
      focusVisible: value ? 'Enhanced focus indicators enabled' : 'Enhanced focus indicators disabled',
    };
    
    setAnnouncement(announcements[key]);
  }, []);

  const announce = useCallback((message: string) => {
    setAnnouncement(message);
    // Clear announcement after 3 seconds
    setTimeout(() => setAnnouncement(''), 3000);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(prev => !prev);
        announce(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
      }

      // Escape to close panel
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        announce('Accessibility panel closed');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, announce]);

  return (
    <>
      {children}
      
      {/* Accessibility Panel Toggle */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          announce(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
        }}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full border border-cyan-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Accessibility Settings</h2>
              <button
                onClick={() => {
                  setIsOpen(false);
                  announce('Accessibility panel closed');
                }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <EyeOff className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {/* High Contrast */}
              <label className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">High Contrast</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="w-5 h-5 text-cyan-500 bg-slate-600 border-slate-500 rounded focus:ring-cyan-500 focus:ring-2"
                />
              </label>

              {/* Large Text */}
              <label className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Type className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Large Text</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSetting('largeText', e.target.checked)}
                  className="w-5 h-5 text-cyan-500 bg-slate-600 border-slate-500 rounded focus:ring-cyan-500 focus:ring-2"
                />
              </label>

              {/* Reduced Motion */}
              <label className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <VolumeX className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Reduced Motion</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="w-5 h-5 text-cyan-500 bg-slate-600 border-slate-500 rounded focus:ring-cyan-500 focus:ring-2"
                />
              </label>

              {/* Screen Reader Optimizations */}
              <label className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Screen Reader Optimized</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => updateSetting('screenReader', e.target.checked)}
                  className="w-5 h-5 text-cyan-500 bg-slate-600 border-slate-500 rounded focus:ring-cyan-500 focus:ring-2"
                />
              </label>

              {/* Keyboard Navigation */}
              <label className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Keyboard className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Keyboard Navigation</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                  className="w-5 h-5 text-cyan-500 bg-slate-600 border-slate-500 rounded focus:ring-cyan-500 focus:ring-2"
                />
              </label>

              {/* Enhanced Focus Indicators */}
              <label className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <MousePointer className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium">Enhanced Focus Indicators</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.focusVisible}
                  onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                  className="w-5 h-5 text-cyan-500 bg-slate-600 border-slate-500 rounded focus:ring-cyan-500 focus:ring-2"
                />
              </label>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-gray-400 text-sm">
                Press <kbd className="bg-slate-600 px-2 py-1 rounded text-xs">Alt + A</kbd> to toggle this panel
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default EnhancedAccessibility;
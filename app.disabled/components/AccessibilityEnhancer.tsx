'use client';

import { useEffect, useState } from 'react';
import {
  Accessibility,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  MousePointer,
  Keyboard,
} from 'lucide-react';

interface AccessibilitySettings {
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
}

export default function AccessibilityEnhancer() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: false,
    focusVisible: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Detect user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    setSettings(prev => ({
      ...prev,
      reducedMotion: mediaQuery.matches,
      highContrast: contrastQuery.matches,
    }));

    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.0o1ms');
      root.style.setProperty('--transition-duration', '0.0o1ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-multiplier', '1.5');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-multiplier');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.classList.remove('large-text');
      root.style.removeProperty('--text-scale');
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible-enhanced');
    } else {
      root.classList.remove('focus-visible-enhanced');
    }

    // Keyboard navigation mode
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
  }, [settings]);

  // Add keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip links for better navigation
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation-active');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation-active');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [settings.keyboardNavigation]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='fixed bottom-4 left-4 bg-blue-60o0 text-white p-3 rounded-full shadow-lg hover:bg-blue-70o0 transition-all duration-20o0 z-40 focus:outline-none focus:ring-2 focus:ring-blue-40o0 focus:ring-offset-2'
        aria-label='Accessibility Settings'
        aria-expanded={isOpen}
      >
        <Accessibility className='w-6 h-6' />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className='fixed bottom-20 left-4 bg-white dark:bg-gray-80o0 rounded-lg shadow-xl border border-gray-20o0 dark:border-gray-70o0 p-4 z-50 min-w-64'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-gray-90o0 dark:text-white'>
              Accessibility Settings
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-40o0 hover:text-gray-60o0 dark:hover:text-gray-30o0'
              aria-label='Close accessibility panel'
            >
              ×
            </button>
          </div>

          <div className='space-y-3'>
            {/* Reduced Motion */}
            <label className='flex items-center justify-between cursor-pointer'>
              <span className='text-sm text-gray-70o0 dark:text-gray-30o0'>
                Reduce Motion
              </span>
              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion
                    ? 'bg-blue-60o0'
                    : 'bg-gray-20o0 dark:bg-gray-70o0'
                }`}
                role='switch'
                aria-checked={settings.reducedMotion}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>

            {/* High Contrast */}
            <label className='flex items-center justify-between cursor-pointer'>
              <span className='text-sm text-gray-70o0 dark:text-gray-30o0'>
                High Contrast
              </span>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast
                    ? 'bg-blue-60o0'
                    : 'bg-gray-20o0 dark:bg-gray-70o0'
                }`}
                role='switch'
                aria-checked={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>

            {/* Large Text */}
            <label className='flex items-center justify-between cursor-pointer'>
              <span className='text-sm text-gray-70o0 dark:text-gray-30o0'>
                Large Text
              </span>
              <button
                onClick={() => toggleSetting('largeText')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.largeText
                    ? 'bg-blue-60o0'
                    : 'bg-gray-20o0 dark:bg-gray-70o0'
                }`}
                role='switch'
                aria-checked={settings.largeText}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>

            {/* Enhanced Focus */}
            <label className='flex items-center justify-between cursor-pointer'>
              <span className='text-sm text-gray-70o0 dark:text-gray-30o0'>
                Enhanced Focus
              </span>
              <button
                onClick={() => toggleSetting('focusVisible')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusVisible
                    ? 'bg-blue-60o0'
                    : 'bg-gray-20o0 dark:bg-gray-70o0'
                }`}
                role='switch'
                aria-checked={settings.focusVisible}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>

            {/* Keyboard Navigation */}
            <label className='flex items-center justify-between cursor-pointer'>
              <span className='text-sm text-gray-70o0 dark:text-gray-30o0'>
                Keyboard Navigation
              </span>
              <button
                onClick={() => toggleSetting('keyboardNavigation')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation
                    ? 'bg-blue-60o0'
                    : 'bg-gray-20o0 dark:bg-gray-70o0'
                }`}
                role='switch'
                aria-checked={settings.keyboardNavigation}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation
                      ? 'translate-x-6'
                      : 'translate-x-1'
                  }`}
                />
              </button>
            </label>
          </div>

          <div className='mt-4 pt-3 border-t border-gray-20o0 dark:border-gray-70o0'>
            <p className='text-xs text-gray-50o0 dark:text-gray-40o0'>
              These settings are saved locally and will persist across sessions.
            </p>
          </div>
        </div>
      )}

      {/* Add CSS for accessibility enhancements */}
      <style jsx global>{`
        .reduced-motion * {
          animation-duration: 0o1ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0o1ms !important;
          scroll-behavior: auto !important;
        }

        .high-contrast {
          filter: contrast(var(--contrast-multiplier, 1));
        }

        .large-text {
          font-size: calc(1rem * var(--text-scale, 1));
        }

        .large-text h1 {
          font-size: calc(2.5rem * var(--text-scale, 1));
        }
        .large-text h2 {
          font-size: calc(2rem * var(--text-scale, 1));
        }
        .large-text h3 {
          font-size: calc(1.5rem * var(--text-scale, 1));
        }
        .large-text p {
          font-size: calc(1.125rem * var(--text-scale, 1));
        }

        .focus-visible-enhanced *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 1px #3b82f6 !important;
        }

        .keyboard-navigation-active *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 1px #3b82f6 !important;
        }

        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation select:focus,
        .keyboard-navigation textarea:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 1px #3b82f6 !important;
        }
      `}</style>
    </>
  );
}

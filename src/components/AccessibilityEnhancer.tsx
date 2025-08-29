import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Contrast, 
  Type, 
  MousePointer,
  Keyboard,
  Accessibility
} from 'lucide-react';

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
    focusIndicator: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      
      // Apply settings to document
      if (key === 'highContrast') {
        document.documentElement.classList.toggle('high-contrast', newSettings.highContrast);
      }
      if (key === 'largeText') {
        document.documentElement.classList.toggle('large-text', newSettings.largeText);
      }
      if (key === 'reducedMotion') {
        document.documentElement.classList.toggle('reduced-motion', newSettings.reducedMotion);
      }
      if (key === 'focusIndicator') {
        document.documentElement.classList.toggle('focus-visible', newSettings.focusIndicator);
      }
      
      // Save to localStorage
      localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
      
      return newSettings;
    });
  }, []);

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

  const enhanceKeyboardNavigation = useCallback(() => {
    // Add skip links
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(({ href, text }) => {
      if (!document.querySelector(`a[href="${href}"]`)) {
        const skipLink = document.createElement('a');
        skipLink.href = href;
        skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-blue focus:text-white focus:rounded focus:outline-none';
        skipLink.textContent = text;
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    });

    // Enhance focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && element.tagName === 'BUTTON') {
            e.preventDefault();
            (element as HTMLButtonElement).click();
          }
        });
      }
    });
  }, []);

  const enhanceFormAccessibility = useCallback(() => {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        if (input instanceof HTMLElement) {
          // Ensure proper labeling
          if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
            const label = input.closest('label');
            if (label) {
              const labelText = label.textContent?.trim();
              if (labelText) {
                input.setAttribute('aria-label', labelText);
              }
            }
          }

          // Add error handling
          if (input.hasAttribute('required')) {
            input.setAttribute('aria-required', 'true');
          }
        }
      });
    });
  }, []);

  const enhanceImageAccessibility = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        // Ensure alt text for decorative images
        if (!img.alt && img.getAttribute('role') !== 'presentation') {
          img.setAttribute('alt', '');
          img.setAttribute('role', 'presentation');
        }

        // Add loading state announcement
        img.addEventListener('load', () => {
          announceToScreenReader(`Image loaded: ${img.alt || 'image'}`);
        });

        img.addEventListener('error', () => {
          announceToScreenReader(`Image failed to load: ${img.alt || 'image'}`);
        });
      }
    });
  }, [announceToScreenReader]);

  const enhanceColorContrast = useCallback(() => {
    // Add CSS custom properties for better contrast
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --text-primary: #ffffff !important;
        --text-secondary: #e5e7eb !important;
        --background-primary: #000000 !important;
        --background-secondary: #1f2937 !important;
        --accent-color: #22ddd2 !important;
      }
      
      .high-contrast * {
        color: var(--text-primary) !important;
        background-color: var(--background-primary) !important;
        border-color: var(--accent-color) !important;
      }
      
      .high-contrast .bg-slate-900 { background-color: var(--background-primary) !important; }
      .high-contrast .text-white { color: var(--text-primary) !important; }
      .high-contrast .text-gray-300 { color: var(--text-secondary) !important; }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      
      // Apply saved settings
      if (parsed.highContrast) document.documentElement.classList.add('high-contrast');
      if (parsed.largeText) document.documentElement.classList.add('large-text');
      if (parsed.reducedMotion) document.documentElement.classList.add('reduced-motion');
      if (parsed.focusIndicator) document.documentElement.classList.add('focus-visible');
    }

    // Check system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
      document.documentElement.classList.add('reduced-motion');
    }

    // Apply enhancements
    enhanceKeyboardNavigation();
    enhanceFormAccessibility();
    enhanceImageAccessibility();
    enhanceColorContrast();

    // Announce page load
    setTimeout(() => {
      announceToScreenReader('Page loaded successfully');
    }, 1000);
  }, [enhanceKeyboardNavigation, enhanceFormAccessibility, enhanceImageAccessibility, enhanceColorContrast, announceToScreenReader]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }

      // Alt + H for high contrast
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        toggleSetting('highContrast');
      }

      // Alt + L for large text
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        toggleSetting('largeText');
      }

      // Alt + M for reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        toggleSetting('reducedMotion');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleSetting]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-zion-blue hover:bg-zion-blue-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Accessibility Settings
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close accessibility settings"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            High Contrast
          </label>
          <button
            onClick={() => toggleSetting('highContrast')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
              settings.highContrast ? 'bg-zion-blue' : 'bg-gray-200'
            }`}
            aria-pressed={settings.highContrast}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.highContrast ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Large Text
          </label>
          <button
            onClick={() => toggleSetting('largeText')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
              settings.largeText ? 'bg-zion-blue' : 'bg-gray-200'
            }`}
            aria-pressed={settings.largeText}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.largeText ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Reduced Motion
          </label>
          <button
            onClick={() => toggleSetting('reducedMotion')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
              settings.reducedMotion ? 'bg-zion-blue' : 'bg-gray-200'
            }`}
            aria-pressed={settings.reducedMotion}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Focus Indicators
          </label>
          <button
            onClick={() => toggleSetting('focusIndicator')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
              settings.focusIndicator ? 'bg-zion-blue' : 'bg-gray-200'
            }`}
            aria-pressed={settings.focusIndicator}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Screen Reader
          </label>
          <button
            onClick={() => toggleSetting('screenReader')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
              settings.screenReader ? 'bg-zion-blue' : 'bg-gray-200'
            }`}
            aria-pressed={settings.screenReader}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.screenReader ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Keyboard shortcuts: Alt + A (toggle), Alt + H (high contrast), Alt + L (large text), Alt + M (reduced motion)
        </p>
      </div>
    </div>
  );
}
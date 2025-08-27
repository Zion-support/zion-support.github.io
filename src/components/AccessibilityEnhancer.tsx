import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard,
  Settings,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highContrastText: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

export function AccessibilityEnhancer({ 
  enabled = true, 
  showControls = true 
}: { 
  enabled?: boolean; 
  showControls?: boolean; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highContrastText: false,
    focusIndicator: true,
    screenReader: false
  });

  // Apply accessibility settings to document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '18px';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }

    // High contrast text
    if (newSettings.highContrastText) {
      root.classList.add('high-contrast-text');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
    } else {
      root.classList.remove('high-contrast-text');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, []);

  // Handle keyboard navigation
  const handleKeyboardNavigation = useCallback((e: KeyboardEvent) => {
    // Skip to main content
    if (e.key === 'Tab' && e.altKey) {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        (main as HTMLElement).focus();
      }
    }

    // Toggle accessibility menu
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Add skip links
  const addSkipLinks = useCallback(() => {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(({ href, text }) => {
      if (!document.querySelector(`a[href="${href}"]`)) {
        const skipLink = document.createElement('a');
        skipLink.href = href;
        skipLink.textContent = text;
        skipLink.className = 'skip-link sr-only focus:not-sr-only';
        skipLink.style.cssText = `
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
          background: #000;
          color: #fff;
          padding: 8px 16px;
          text-decoration: none;
          border-radius: 4px;
          transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
          skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
          skipLink.style.top = '-40px';
        });
        
        document.body.appendChild(skipLink);
      }
    });
  }, []);

  // Enhance form accessibility
  const enhanceFormAccessibility = useCallback(() => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        const inputElement = input as HTMLInputElement;
        
        // Add labels if missing
        if (!inputElement.labels?.length && !inputElement.getAttribute('aria-label')) {
          const placeholder = inputElement.placeholder;
          if (placeholder) {
            inputElement.setAttribute('aria-label', placeholder);
          }
        }

        // Add error handling
        if (inputElement.hasAttribute('required')) {
          inputElement.setAttribute('aria-required', 'true');
        }

        // Add validation feedback
        inputElement.addEventListener('invalid', (e) => {
          e.preventDefault();
          const errorMessage = inputElement.validationMessage;
          inputElement.setAttribute('aria-invalid', 'true');
          inputElement.setAttribute('aria-describedby', `error-${inputElement.id || 'input'}`);
          
          // Create error message element
          let errorElement = document.getElementById(`error-${inputElement.id || 'input'}`);
          if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = `error-${inputElement.id || 'input'}`;
            errorElement.className = 'error-message sr-only';
            errorElement.setAttribute('role', 'alert');
            inputElement.parentNode?.appendChild(errorElement);
          }
          errorElement.textContent = errorMessage;
        });
      });
    });
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Apply initial settings
    applyAccessibilitySettings(settings);

    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Add skip links
    addSkipLinks();

    // Enhance form accessibility
    enhanceFormAccessibility();

    // Add ARIA landmarks
    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [enabled, settings, applyAccessibilitySettings, handleKeyboardNavigation, addSkipLinks, enhanceFormAccessibility]);

  // Update settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings, applyAccessibilitySettings]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  if (!enabled || !showControls) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        className="fixed bottom-4 left-4 z-50 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="fixed bottom-20 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 w-80 max-h-96 overflow-y-auto"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      High Contrast
                    </span>
                  </div>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                      settings.highContrast ? 'bg-cyan-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Type className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Large Text
                    </span>
                  </div>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, largeText: !prev.largeText }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                      settings.largeText ? 'bg-cyan-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.largeText}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MousePointer className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Reduced Motion
                    </span>
                  </div>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                      settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Keyboard className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Focus Indicator
                    </span>
                  </div>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                      settings.focusIndicator ? 'bg-cyan-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicator}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts Info */}
              <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Keyboard Shortcuts
                </h3>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div>• <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">Tab</kbd> Navigate through elements</div>
                  <div>• <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">Alt + Tab</kbd> Skip to main content</div>
                  <div>• <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">Escape</kbd> Close this panel</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
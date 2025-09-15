import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityFeatures {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusHighlight: boolean;
  screenReaderMode: boolean;
}

interface FocusTrapConfig {
  containerRef: React.RefObject<HTMLElement>;
  onEscape?: () => void;
  returnFocus?: boolean;
}

export function AccessibilityEnhancer() {
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusHighlight: true,
    screenReaderMode: false
  });

  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Screen reader announcements
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = { message, priority, id: Date.now() };
    setAnnouncements(prev => [...prev, announcement]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a.id !== announcement.id));
    }, 5000);
  }, []);

  // High contrast mode
  const toggleHighContrast = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, highContrast: !prev.highContrast };
      
      if (newFeatures.highContrast) {
        document.documentElement.classList.add('high-contrast');
        announce('High contrast mode enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('high-contrast');
        announce('High contrast mode disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Reduced motion mode
  const toggleReducedMotion = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, reducedMotion: !prev.reducedMotion };
      
      if (newFeatures.reducedMotion) {
        document.documentElement.classList.add('reduced-motion');
        announce('Reduced motion enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('reduced-motion');
        announce('Reduced motion disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Large text mode
  const toggleLargeText = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, largeText: !prev.largeText };
      
      if (newFeatures.largeText) {
        document.documentElement.classList.add('large-text');
        announce('Large text mode enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('large-text');
        announce('Large text mode disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Focus highlight mode
  const toggleFocusHighlight = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, focusHighlight: !prev.focusHighlight };
      
      if (newFeatures.focusHighlight) {
        document.documentElement.classList.add('focus-highlight');
        announce('Focus highlighting enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('focus-highlight');
        announce('Focus highlighting disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Screen reader mode
  const toggleScreenReaderMode = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, screenReaderMode: !prev.screenReaderMode };
      
      if (newFeatures.screenReaderMode) {
        document.documentElement.classList.add('screen-reader-mode');
        announce('Screen reader mode enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('screen-reader-mode');
        announce('Screen reader mode disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          announce('Moved to main content');
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          (navigation as HTMLElement).focus();
          announce('Moved to navigation');
        }
      }

      // Skip to footer
      if (event.key === 'Tab' && event.ctrlKey) {
        event.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          (footer as HTMLElement).focus();
          announce('Moved to footer');
        }

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

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [announce]);

  // Focus management
  useEffect(() => {
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus indicator
      if (features.focusHighlight) {
        target.style.outline = '3px solid #22ddd2';
        target.style.outlineOffset = '2px';
      }
      
      // Announce focus changes for screen readers
      if (features.screenReaderMode && target.getAttribute('aria-label')) {
        announce(target.getAttribute('aria-label') || 'Element focused');
      }
    };

    const handleBlur = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [features.focusHighlight, features.screenReaderMode, announce]);

  // Auto-detect user preferences
  useEffect(() => {
    // Check for user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      setFeatures(prev => ({ ...prev, reducedMotion: true }));
      document.documentElement.classList.add('reduced-motion');
    }

    // Check for user's high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    if (prefersHighContrast.matches) {
      setFeatures(prev => ({ ...prev, highContrast: true }));
      document.documentElement.classList.add('high-contrast');
    }

    // Check for user's large text preference
    const prefersLargeText = window.matchMedia('(prefers-font-size: large)');
    if (prefersLargeText.matches) {
      setFeatures(prev => ({ ...prev, largeText: true }));
      document.documentElement.classList.add('large-text');
    }
  }, []);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Accessibility Menu Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Accessibility options"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>

        {/* Accessibility Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Accessibility Options
                </h3>
                
                <div className="space-y-3">
                  <button
                    onClick={toggleHighContrast}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      features.highContrast 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>High Contrast</span>
                      <div className={`w-4 h-4 rounded border-2 ${
                        features.highContrast ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
                      }`}>
                        {features.highContrast && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={toggleReducedMotion}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      features.reducedMotion 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>Reduced Motion</span>
                      <div className={`w-4 h-4 rounded border-2 ${
                        features.reducedMotion ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
                      }`}>
                        {features.reducedMotion && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={toggleLargeText}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      features.largeText 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>Large Text</span>
                      <div className={`w-4 h-4 rounded border-2 ${
                        features.largeText ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
                      }`}>
                        {features.largeText && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={toggleFocusHighlight}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      features.focusHighlight 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>Focus Highlight</span>
                      <div className={`w-4 h-4 rounded border-2 ${
                        features.focusHighlight ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
                      }`}>
                        {features.focusHighlight && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={toggleScreenReaderMode}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      features.screenReaderMode 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>Screen Reader Mode</span>
                      <div className={`w-4 h-4 rounded border-2 ${
                        features.screenReaderMode ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
                      }`}>
                        {features.screenReaderMode && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Keyboard Shortcuts:</strong><br />
                    Alt + Tab: Skip to main content<br />
                    Alt + Shift + Tab: Skip to navigation<br />
                    Ctrl + Tab: Skip to footer
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="accessibility-announcements"
      >
        {announcements.map((announcement) => (
          <div key={announcement.id} aria-live={announcement.priority}>
            {announcement.message}
          </div>
        ))}
      </div>
    </>
  );
}

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

// Focus Trap Hook
export function useFocusTrap({ containerRef, onEscape, returnFocus }: FocusTrapConfig) {
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Store previous focus
    previousFocus.current = document.activeElement as HTMLElement;

    // Focus first focusable element
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onEscape) {
        onEscape();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = Array.from(container.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )).filter(el => !(el as HTMLElement).disabled) as HTMLElement[];

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      
      // Return focus when unmounting
      if (returnFocus && previousFocus.current) {
        previousFocus.current.focus();
      }
    };
  }, [containerRef, onEscape, returnFocus]);
}

// Skip Link Component
export function SkipLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
    >
      {children}
    </a>
  );
}

// Announcement Hook
export function useAnnouncement() {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = { message, priority, id: Date.now() };
    setAnnouncements(prev => [...prev, announcement]);
    
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a.id !== announcement.id));
    }, 5000);
  }, []);

  return { announcements, announce };
}

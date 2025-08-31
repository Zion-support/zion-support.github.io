import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showAccessibilityPanel?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
  enableFocusIndicators?: boolean;
  enableScreenReaderOptimization?: boolean;
  enableKeyboardNavigation?: boolean;
  enableVoiceNavigation?: boolean;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicators: boolean;
  screenReaderOptimized: boolean;
  keyboardNavigation: boolean;
  voiceNavigation: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showAccessibilityPanel = false,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
  enableFocusIndicators = true,
  enableScreenReaderOptimization = true,
  enableKeyboardNavigation = true,
  enableVoiceNavigation = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicators: false,
    screenReaderOptimized: false,
    keyboardNavigation: false,
    voiceNavigation: false
  });

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [skipLinks, setSkipLinks] = useState<HTMLElement[]>([]);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const focusHistoryRef = useRef<HTMLElement[]>([]);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }

    // Initialize speech recognition if available
    if (enableVoiceNavigation && 'webkitSpeechRecognition' in window) {
      try {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
          handleVoiceCommand(transcript);
        };

        recognitionRef.current.onerror = (event: any) => {
          console.warn('Speech recognition error:', event.error);
          setIsListening(false);
        };
      } catch (error) {
        console.warn('Speech recognition not supported:', error);
      }
    }

    // Add skip links
    addSkipLinks();

    // Setup keyboard navigation
    if (enableKeyboardNavigation) {
      setupKeyboardNavigation();
    }

    // Setup focus management
    setupFocusManagement();

    // Setup screen reader announcements
    if (enableScreenReaderOptimization) {
      setupScreenReaderOptimization();
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [enabled, enableVoiceNavigation, enableKeyboardNavigation, enableScreenReaderOptimization]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    applyAccessibilitySettings();
    
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings, enabled]);

  // Add skip links for keyboard navigation
  const addSkipLinks = useCallback(() => {
    const skipLinkContainer = document.createElement('div');
    skipLinkContainer.className = 'skip-links-container';
    skipLinkContainer.setAttribute('role', 'navigation');
    skipLinkContainer.setAttribute('aria-label', 'Skip links');

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' },
      { href: '#search', text: 'Skip to search' }
    ];

    skipLinks.forEach(({ href, text }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.className = 'skip-link';
      link.setAttribute('tabindex', '0');
      
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          (target as HTMLElement).focus();
        }
      });

      skipLinkContainer.appendChild(link);
    });

    document.body.insertBefore(skipLinkContainer, document.body.firstChild);
    setSkipLinks(Array.from(skipLinkContainer.children) as HTMLElement[]);
  }, []);

  // Setup keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          announceToScreenReader('Moved to main content');
        }
      }

      // Skip to navigation with Alt + N
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const navigation = document.querySelector('nav, [role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
          announceToScreenReader('Moved to navigation');
        }
      }

      // Skip to search with Alt + S
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        const search = document.querySelector('input[type="search"], [role="search"]');
        if (search) {
          (search as HTMLElement).focus();
          announceToScreenReader('Moved to search');
        }
      }

      // Toggle accessibility panel with Alt + A
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsPanelOpen(prev => !prev);
        announceToScreenReader(isPanelOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
      }

      // Escape key to close panels
      if (event.key === 'Escape') {
        setIsPanelOpen(false);
        announceToScreenReader('Accessibility panel closed');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isPanelOpen]);

  // Setup focus management
  const setupFocusManagement = useCallback(() => {
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Add to focus history
      focusHistoryRef.current = focusHistoryRef.current.filter(el => el !== target);
      focusHistoryRef.current.unshift(target);
      
      // Limit history size
      if (focusHistoryRef.current.length > 10) {
        focusHistoryRef.current = focusHistoryRef.current.slice(0, 10);
      }

      // Announce focus changes for screen readers
      if (settings.screenReaderOptimized) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent?.trim() ||
                     target.tagName.toLowerCase();
        
        if (label) {
          announceToScreenReader(`Focused on ${label}`);
        }
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target === currentFocus) {
        setCurrentFocus(null);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [settings.screenReaderOptimized, currentFocus]);

  // Setup screen reader optimization
  const setupScreenReaderOptimization = useCallback(() => {
    // Add live regions for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only sr-live-region';
    liveRegion.id = 'accessibility-announcements';
    document.body.appendChild(liveRegion);

    // Add visually hidden class for screen reader only content
    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
      
      .sr-live-region {
        position: absolute !important;
        left: -10000px !important;
        top: auto !important;
        width: 1px !important;
        height: 1px !important;
        overflow: hidden !important;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      .focus-visible {
        outline: 3px solid #3B82F6 !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        filter: contrast(1.5) brightness(1.2);
      }
      
      .large-text {
        font-size: 1.2em !important;
        line-height: 1.6 !important;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback(() => {
    const body = document.body;
    const html = document.documentElement;

    // High contrast
    if (settings.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      body.classList.add('large-text');
    } else {
      body.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      html.style.setProperty('--reduced-motion', 'true');
      body.classList.add('reduced-motion');
    } else {
      html.style.removeProperty('--reduced-motion');
      body.classList.remove('reduced-motion');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      document.addEventListener('keydown', handleTabKey);
    } else {
      document.removeEventListener('keydown', handleTabKey);
    }
  }, [settings]);

  // Handle tab key for focus indicators
  const handleTabKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
      
      setTimeout(() => {
        document.body.classList.remove('keyboard-navigation');
      }, 1000);
    }
  }, []);

  // Handle voice commands
  const handleVoiceCommand = useCallback((transcript: string) => {
    if (transcript.includes('open') || transcript.includes('show')) {
      if (transcript.includes('menu') || transcript.includes('navigation')) {
        const nav = document.querySelector('nav, [role="navigation"]');
        if (nav) {
          (nav as HTMLElement).focus();
          announceToScreenReader('Navigation menu opened');
        }
      } else if (transcript.includes('search')) {
        const search = document.querySelector('input[type="search"], [role="search"]');
        if (search) {
          (search as HTMLElement).focus();
          announceToScreenReader('Search field focused');
        }
      } else if (transcript.includes('accessibility')) {
        setIsPanelOpen(true);
        announceToScreenReader('Accessibility panel opened');
      }
    } else if (transcript.includes('close') || transcript.includes('hide')) {
      if (transcript.includes('accessibility')) {
        setIsPanelOpen(false);
        announceToScreenReader('Accessibility panel closed');
      }
    } else if (transcript.includes('go to') || transcript.includes('navigate to')) {
      if (transcript.includes('home')) {
        window.location.href = '/';
      } else if (transcript.includes('about')) {
        window.location.href = '/about';
      } else if (transcript.includes('contact')) {
        window.location.href = '/contact';
      } else if (transcript.includes('services')) {
        window.location.href = '/services';
      }
    }
  }, []);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    const liveRegion = document.getElementById('accessibility-announcements');
    if (liveRegion) {
      liveRegion.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }

    // Add to announcements list
    setAnnouncements(prev => [...prev, message]);
    
    // Remove old announcements
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1));
    }, 5000);
  }, []);

  // Toggle voice navigation
  const toggleVoiceNavigation = useCallback(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      announceToScreenReader('Voice navigation stopped');
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        announceToScreenReader('Voice navigation started. Say "help" for commands.');
      } catch (error) {
        console.error('Failed to start voice recognition:', error);
        announceToScreenReader('Voice navigation failed to start');
      }
    }
  }, [isListening]);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Panel */}
      <AnimatePresence>
        {showAccessibilityPanel && isPanelOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-y-auto"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 id="accessibility-panel-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close accessibility panel"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div id="accessibility-panel-description" className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Customize your experience with these accessibility features.
              </div>

              <div className="space-y-4">
                {/* High Contrast */}
                {enableHighContrast && (
                  <div className="flex items-center justify-between">
                    <label htmlFor="high-contrast" className="text-sm font-medium text-gray-900 dark:text-white">
                      High Contrast
                    </label>
                    <button
                      id="high-contrast"
                      onClick={() => toggleSetting('highContrast')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
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
                )}

                {/* Large Text */}
                {enableLargeText && (
                  <div className="flex items-center justify-between">
                    <label htmlFor="large-text" className="text-sm font-medium text-gray-900 dark:text-white">
                      Large Text
                    </label>
                    <button
                      id="large-text"
                      onClick={() => toggleSetting('largeText')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
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
                )}

                {/* Reduced Motion */}
                {enableReducedMotion && (
                  <div className="flex items-center justify-between">
                    <label htmlFor="reduced-motion" className="text-sm font-medium text-gray-900 dark:text-white">
                      Reduced Motion
                    </label>
                    <button
                      id="reduced-motion"
                      onClick={() => toggleSetting('reducedMotion')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
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
                )}

                {/* Focus Indicators */}
                {enableFocusIndicators && (
                  <div className="flex items-center justify-between">
                    <label htmlFor="focus-indicators" className="text-sm font-medium text-gray-900 dark:text-white">
                      Focus Indicators
                    </label>
                    <button
                      id="focus-indicators"
                      onClick={() => toggleSetting('focusIndicators')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.focusIndicators ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                      role="switch"
                      aria-checked={settings.focusIndicators}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                )}

                {/* Screen Reader Optimization */}
                {enableScreenReaderOptimization && (
                  <div className="flex items-center justify-between">
                    <label htmlFor="screen-reader" className="text-sm font-medium text-gray-900 dark:text-white">
                      Screen Reader Optimized
                    </label>
                    <button
                      id="screen-reader"
                      onClick={() => toggleSetting('screenReaderOptimized')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.screenReaderOptimized ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                      role="switch"
                      aria-checked={settings.screenReaderOptimized}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.screenReaderOptimized ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                )}

                {/* Voice Navigation */}
                {enableVoiceNavigation && recognitionRef.current && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="voice-navigation" className="text-sm font-medium text-gray-900 dark:text-white">
                        Voice Navigation
                      </label>
                      <button
                        id="voice-navigation"
                        onClick={toggleVoiceNavigation}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          isListening ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        role="switch"
                        aria-checked={isListening}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            isListening ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isListening ? 'Listening for voice commands...' : 'Click to enable voice navigation'}
                    </p>
                  </div>
                )}
              </div>

              {/* Keyboard Shortcuts */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + M</kbd> Skip to main content</div>
                  <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + N</kbd> Skip to navigation</div>
                  <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + S</kbd> Skip to search</div>
                  <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + A</kbd> Toggle this panel</div>
                  <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Escape</kbd> Close panels</div>
                </div>
              </div>

              {/* Voice Commands */}
              {enableVoiceNavigation && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Voice Commands</h3>
                  <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                    <div>"Open menu" - Navigate to main menu</div>
                    <div>"Go to home" - Navigate to homepage</div>
                    <div>"Search" - Focus search field</div>
                    <div>"Close accessibility" - Close this panel</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Toggle Button */}
      {showAccessibilityPanel && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsPanelOpen(!isPanelOpen)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg z-40 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Open accessibility settings"
          aria-expanded={isPanelOpen}
          aria-controls="accessibility-panel"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </motion.button>
      )}

      {/* Announcements Display */}
      <AnimatePresence>
        {announcements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-20 left-4 bg-green-600 text-white rounded-lg shadow-lg p-3 z-40 max-w-sm"
            role="status"
            aria-live="polite"
          >
            <div className="text-sm">
              {announcements[announcements.length - 1]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

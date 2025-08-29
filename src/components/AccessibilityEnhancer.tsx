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
      }
    };

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

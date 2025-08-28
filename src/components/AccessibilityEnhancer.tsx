import React, { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Type, 
  MousePointer, 
  Keyboard,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
}

interface AccessibilityEnhancerProps {
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
  enableScreenReader?: boolean;
  enableKeyboardNavigation?: boolean;
  enableFocusIndicators?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
  enableScreenReader = true,
  enableKeyboardNavigation = true,
  enableFocusIndicators = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false
  });
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusHistoryRef = useRef<HTMLElement[]>([]);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...prev, message]);
      
      // Remove announcement after 5 seconds
      setTimeout(() => {
        setAnnouncements(prev => prev.filter(announcement => announcement !== message));
      }, 5000);
    }
  }, [settings.screenReader]);

  // High contrast mode
  const toggleHighContrast = useCallback(() => {
    const newValue = !settings.highContrast;
    setSettings(prev => ({ ...prev, highContrast: newValue }));
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
      announce('High contrast mode enabled');
    } else {
      document.documentElement.classList.remove('high-contrast');
      announce('High contrast mode disabled');
    }
  }, [settings.highContrast, announce]);

  // Large text mode
  const toggleLargeText = useCallback(() => {
    const newValue = !settings.largeText;
    setSettings(prev => ({ ...prev, largeText: newValue }));
    
    if (newValue) {
      document.documentElement.classList.add('large-text');
      announce('Large text mode enabled');
    } else {
      document.documentElement.classList.remove('large-text');
      announce('Large text mode disabled');
    }
  }, [settings.largeText, announce]);

  // Reduced motion mode
  const toggleReducedMotion = useCallback(() => {
    const newValue = !settings.reducedMotion;
    setSettings(prev => ({ ...prev, reducedMotion: newValue }));
    
    if (newValue) {
      document.documentElement.classList.add('reduced-motion');
      announce('Reduced motion mode enabled');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      announce('Reduced motion mode disabled');
    }
  }, [settings.reducedMotion, announce]);

  // Screen reader mode
  const toggleScreenReader = useCallback(() => {
    const newValue = !settings.screenReader;
    setSettings(prev => ({ ...prev, screenReader: newValue }));
    
    if (newValue) {
      announce('Screen reader mode enabled');
    } else {
      announce('Screen reader mode disabled');
    }
  }, [settings.screenReader, announce]);

  // Keyboard navigation mode
  const toggleKeyboardNavigation = useCallback(() => {
    const newValue = !settings.keyboardNavigation;
    setSettings(prev => ({ ...prev, keyboardNavigation: newValue }));
    
    if (newValue) {
      document.documentElement.classList.add('keyboard-navigation');
      announce('Keyboard navigation mode enabled');
    } else {
      document.documentElement.classList.remove('keyboard-navigation');
      announce('Keyboard navigation mode disabled');
    }
  }, [settings.keyboardNavigation, announce]);

  // Focus indicators mode
  const toggleFocusIndicators = useCallback(() => {
    const newValue = !settings.focusIndicators;
    setSettings(prev => ({ ...prev, focusIndicators: newValue }));
    
    if (newValue) {
      document.documentElement.classList.add('focus-indicators');
      announce('Focus indicators enabled');
    } else {
      document.documentElement.classList.remove('focus-indicators');
      announce('Focus indicators disabled');
    }
  }, [settings.focusIndicators, announce]);

  // Enhanced keyboard navigation
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!settings.keyboardNavigation) return;

    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);

    switch (event.key) {
      case 'Tab':
        // Enhanced tab navigation with visual feedback
        if (event.shiftKey) {
          // Shift+Tab (backward)
          if (currentIndex <= 0) {
            event.preventDefault();
            (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
          }
        } else {
          // Tab (forward)
          if (currentIndex >= focusableElements.length - 1) {
            event.preventDefault();
            (focusableElements[0] as HTMLElement).focus();
          }
        }
        break;
      
      case 'Escape':
        // Close modals and dropdowns
        const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
        modals.forEach(modal => {
          if (modal.classList.contains('open') || modal.getAttribute('aria-expanded') === 'true') {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
            if (closeButton) {
              (closeButton as HTMLElement).click();
            }
          }
        });
        break;
      
      case 'Enter':
      case ' ':
        // Enhanced activation for custom elements
        const target = event.target as HTMLElement;
        if (target.getAttribute('role') === 'button' || target.getAttribute('role') === 'menuitem') {
          event.preventDefault();
          target.click();
        }
        break;
    }
  }, [settings.keyboardNavigation]);

  // Focus management
  const handleFocusChange = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target && target !== currentFocus) {
      setCurrentFocus(target);
      focusHistoryRef.current.push(target);
      
      // Keep only last 10 focus changes
      if (focusHistoryRef.current.length > 10) {
        focusHistoryRef.current.shift();
      }

      // Announce focus changes for screen readers
      if (settings.screenReader && target.getAttribute('aria-label')) {
        announce(`Focused: ${target.getAttribute('aria-label')}`);
      }
    }
  }, [currentFocus, settings.screenReader, announce]);

  // Skip to main content functionality
  const createSkipLinks = useCallback(() => {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-black px-4 py-2 rounded z-50';
      document.body.appendChild(skipLink);
    });
  }, []);

  // ARIA enhancements
  const enhanceARIA = useCallback(() => {
    // Add missing ARIA labels
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      }
    });

    // Add missing ARIA labels for images
    const images = document.querySelectorAll('img:not([alt]):not([aria-label])');
    images.forEach(img => {
      img.setAttribute('alt', 'Decorative image');
    });

    // Enhance form labels
    const inputs = document.querySelectorAll('input:not([id]):not([aria-label])');
    inputs.forEach((input, index) => {
      const label = input.getAttribute('placeholder') || `Input ${index + 1}`;
      input.setAttribute('aria-label', label);
    });
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    createSkipLinks();
    enhanceARIA();

    // Add event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);
    document.addEventListener('focusin', handleFocusChange);

    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
      document.documentElement.classList.add('reduced-motion');
    }

    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    if (prefersHighContrast) {
      setSettings(prev => ({ ...prev, highContrast: true }));
      document.documentElement.classList.add('high-contrast');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.removeEventListener('focusin', handleFocusChange);
    };
  }, [createSkipLinks, enhanceARIA, handleKeyboardNavigation, handleFocusChange]);

  // Accessibility status checker
  const checkAccessibilityStatus = useCallback(() => {
    const issues: string[] = [];
    const warnings: string[] = [];

    // Check for missing alt text
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
    }

    // Check for missing ARIA labels
    const elementsWithoutAria = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby]), input:not([aria-label]):not([aria-labelledby])');
    if (elementsWithoutAria.length > 0) {
      warnings.push(`${elementsWithoutAria.length} interactive elements missing ARIA labels`);
    }

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length > 0) {
      const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
      let previousLevel = 0;
      for (const level of headingLevels) {
        if (level > previousLevel + 1) {
          warnings.push('Heading structure has gaps');
          break;
        }
        previousLevel = level;
      }
    }

    return { issues, warnings };
  }, []);

  // Toggle visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Toggle settings
  const toggleSettings = () => setShowSettings(!showSettings);

  // Get accessibility score
  const getAccessibilityScore = useCallback(() => {
    const { issues, warnings } = checkAccessibilityStatus();
    let score = 100;
    
    score -= issues.length * 10;
    score -= warnings.length * 5;
    
    return Math.max(0, score);
  }, [checkAccessibilityStatus]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Options"
        aria-label="Open accessibility options"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-20 z-40 w-80 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl"
            role="dialog"
            aria-label="Accessibility options"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-semibold">Accessibility</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleSettings}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Settings"
                  aria-label="Accessibility settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleVisibility}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Close"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Accessibility Score */}
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">{getAccessibilityScore()}</div>
                <div className="text-purple-400 text-sm">Accessibility Score</div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Quick Actions
                </h4>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={toggleHighContrast}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      settings.highContrast 
                        ? 'bg-green-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                    aria-pressed={settings.highContrast}
                  >
                    <Contrast className="w-4 h-4 mx-auto mb-1" />
                    High Contrast
                  </button>
                  
                  <button
                    onClick={toggleLargeText}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      settings.largeText 
                        ? 'bg-green-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                    aria-pressed={settings.largeText}
                  >
                    <Type className="w-4 h-4 mx-auto mb-1" />
                    Large Text
                  </button>
                  
                  <button
                    onClick={toggleReducedMotion}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      settings.reducedMotion 
                        ? 'bg-green-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                    aria-pressed={settings.reducedMotion}
                  >
                    <Eye className="w-4 h-4 mx-auto mb-1" />
                    Reduced Motion
                  </button>
                  
                  <button
                    onClick={toggleFocusIndicators}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      settings.focusIndicators 
                        ? 'bg-green-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                    aria-pressed={settings.focusIndicators}
                  >
                    <MousePointer className="w-4 h-4 mx-auto mb-1" />
                    Focus Indicators
                  </button>
                </div>
              </div>

              {/* Current Focus Info */}
              {currentFocus && (
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <h4 className="text-white font-semibold text-sm mb-2">Current Focus</h4>
                  <div className="text-xs text-slate-300">
                    <div>Element: {currentFocus.tagName.toLowerCase()}</div>
                    {currentFocus.textContent && (
                      <div>Text: {currentFocus.textContent.substring(0, 50)}...</div>
                    )}
                    {currentFocus.getAttribute('aria-label') && (
                      <div>Label: {currentFocus.getAttribute('aria-label')}</div>
                    )}
                  </div>
                </div>
              )}

              {/* Accessibility Issues */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                  Issues Found
                </h4>
                
                {(() => {
                  const { issues, warnings } = checkAccessibilityStatus();
                  return (
                    <div className="space-y-2">
                      {issues.map((issue, index) => (
                        <div key={index} className="text-sm text-red-300 bg-red-900/20 p-2 rounded">
                          {issue}
                        </div>
                      ))}
                      {warnings.map((warning, index) => (
                        <div key={index} className="text-sm text-yellow-300 bg-yellow-900/20 p-2 rounded">
                          {warning}
                        </div>
                      ))}
                      {issues.length === 0 && warnings.length === 0 && (
                        <div className="text-sm text-green-300 bg-green-900/20 p-2 rounded">
                          No accessibility issues found!
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-32 left-20 z-30 w-64 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-4"
            role="dialog"
            aria-label="Accessibility settings"
          >
            <h4 className="text-white font-semibold mb-3">Advanced Settings</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Screen Reader</span>
                <button
                  onClick={toggleScreenReader}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.screenReader ? 'bg-purple-600' : 'bg-slate-600'
                  }`}
                  aria-pressed={settings.screenReader}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Keyboard Navigation</span>
                <button
                  onClick={toggleKeyboardNavigation}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-purple-600' : 'bg-slate-600'
                  }`}
                  aria-pressed={settings.keyboardNavigation}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </>
  );
};

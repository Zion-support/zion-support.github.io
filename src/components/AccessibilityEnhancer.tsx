import React, { useEffect, useCallback, useRef, useState } from 'react';
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
  Accessibility,
  HelpCircle,
  X,
  CheckCircle,
  AlertCircle
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
  enableFocusIndicators = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false,
  });
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  
  const focusHistoryRef = useRef<HTMLElement[]>([]);
  const skipLinksRef = useRef<HTMLDivElement>(null);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    if (!settings.screenReader) return;
    
    setAnnouncements(prev => [...prev, message]);
    
    // Remove announcement after 5 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(msg => msg !== message));
    }, 5000);
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
        announce(`Focused on ${target.getAttribute('aria-label')}`);
      }
    }
  }, [currentFocus, settings.screenReader, announce]);

  // Skip links for keyboard navigation
  const createSkipLinks = useCallback(() => {
    if (!skipLinksRef.current) return;
    
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' },
      { href: '#search', text: 'Skip to search' },
    ];
    
    skipLinksRef.current.innerHTML = skipLinks.map(link => `
      <a href="${link.href}" 
         class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
        ${link.text}
      </a>
    `).join('');
  }, []);

  // Enhanced keyboard navigation
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!settings.keyboardNavigation) return;
    
    const { key, ctrlKey, altKey, shiftKey } = event;
    
    // Navigation shortcuts
    if (altKey && key === 'h') {
      event.preventDefault();
      document.querySelector('header')?.focus();
      announce('Navigated to header');
    }
    
    if (altKey && key === 'm') {
      event.preventDefault();
      document.querySelector('main')?.focus();
      announce('Navigated to main content');
    }
    
    if (altKey && key === 'f') {
      event.preventDefault();
      document.querySelector('footer')?.focus();
      announce('Navigated to footer');
    }
    
    // Search shortcut
    if (ctrlKey && key === 'k') {
      event.preventDefault();
      const searchInput = document.querySelector('input[type="search"], input[placeholder*="search"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
        announce('Search input focused');
      }
    }
    
    // Help shortcut
    if (key === 'F1') {
      event.preventDefault();
      setIsOpen(true);
      announce('Accessibility menu opened');
    }
  }, [settings.keyboardNavigation, announce]);

  // Initialize accessibility features
  useEffect(() => {
    // Create skip links
    createSkipLinks();
    
    // Add focus event listeners
    document.addEventListener('focusin', handleFocusChange);
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
      document.documentElement.classList.add('reduced-motion');
    }
    
    // Check high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    if (prefersHighContrast) {
      setSettings(prev => ({ ...prev, highContrast: true }));
      document.documentElement.classList.add('high-contrast');
    }
    
    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [createSkipLinks, handleFocusChange, handleKeyboardNavigation]);

  // Accessibility menu component
  const AccessibilityMenu = () => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-labelledby="accessibility-menu-title"
          aria-describedby="accessibility-menu-description"
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto"
            role="document"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 id="accessibility-menu-title" className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <Accessibility className="w-5 h-5 mr-2" />
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close accessibility menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div id="accessibility-menu-description" className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Visual Adjustments</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                  </div>
                  <button
                    onClick={toggleHighContrast}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                    aria-label="Toggle high contrast mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                  </div>
                  <button
                    onClick={toggleLargeText}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.largeText}
                    aria-label="Toggle large text mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                  </div>
                  <button
                    onClick={toggleReducedMotion}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                    aria-label="Toggle reduced motion mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Navigation & Interaction</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                  </div>
                  <button
                    onClick={toggleKeyboardNavigation}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.keyboardNavigation}
                    aria-label="Toggle keyboard navigation mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Focus Indicators</span>
                  </div>
                  <button
                    onClick={toggleFocusIndicators}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicators ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicators}
                    aria-label="Toggle focus indicators"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Screen Reader</span>
                  </div>
                  <button
                    onClick={toggleScreenReader}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.screenReader}
                    aria-label="Toggle screen reader mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Alt + H</span>
                    <span>Go to header</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + M</span>
                    <span>Go to main content</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + F</span>
                    <span>Go to footer</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ctrl + K</span>
                    <span>Focus search</span>
                  </div>
                  <div className="flex justify-between">
                    <span>F1</span>
                    <span>Open this menu</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Screen reader announcements
  const ScreenReaderAnnouncements = () => (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {announcements.map((announcement, index) => (
        <div key={index}>{announcement}</div>
      ))}
    </div>
  );

  return (
    <>
      {/* Skip Links */}
      <div ref={skipLinksRef} className="sr-only" />
      
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (F1)"
      >
        <Accessibility className="w-6 h-6" />
      </button>
      
      {/* Accessibility Menu */}
      <AccessibilityMenu />
      
      {/* Screen Reader Announcements */}
      <ScreenReaderAnnouncements />
      
      {/* Focus History Display (for debugging) */}
      {process.env.NODE_ENV === 'development' && currentFocus && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          <div>Current Focus: {currentFocus.tagName.toLowerCase()}</div>
          <div>Classes: {currentFocus.className}</div>
          <div>Text: {currentFocus.textContent?.slice(0, 50)}...</div>
        </div>
      )}
    </>
  );
};

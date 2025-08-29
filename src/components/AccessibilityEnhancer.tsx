import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Sun, 
  Moon,
  Keyboard,
  Accessibility,
  HelpCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindSupport: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: true,
    keyboardNavigation: true,
    focusIndicator: true,
    colorBlindSupport: false
  });
  
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcement, setAnnouncement] = useState<string>('');
  const focusHistory = useRef<HTMLElement[]>([]);
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Initialize accessibility features
    initializeAccessibility();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Setup focus management
    setupFocusManagement();
    
    // Setup screen reader announcements
    setupScreenReader();
    
    // Apply initial settings
    applyAccessibilitySettings();
    
    return () => {
      // Cleanup
      cleanupAccessibility();
    };
  }, []);

  useEffect(() => {
    // Apply settings when they change
    applyAccessibilitySettings();
  }, [settings]);

  const initializeAccessibility = () => {
    // Add skip link for keyboard users
    addSkipLink();
    
    // Add ARIA landmarks
    addARIALandmarks();
    
    // Setup focus trap for modals
    setupFocusTrap();
    
    // Add high contrast mode support
    addHighContrastSupport();
    
    // Add color blind support
    addColorBlindSupport();
  };

  const addSkipLink = () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    skipLinkRef.current = skipLink;
  };

  const addARIALandmarks = () => {
    // Add main landmark if not present
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('id', 'main-content');
    }
    
    // Add navigation landmarks
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });
    
    // Add banner landmark
    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }
    
    // Add contentinfo landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  };

  const setupFocusTrap = () => {
    // Focus trap for modals and dropdowns
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') !== 'true') {
            const focusable = modal.querySelectorAll(focusableElements);
            const firstFocusable = focusable[0] as HTMLElement;
            const lastFocusable = focusable[focusable.length - 1] as HTMLElement;
            
            if (e.shiftKey) {
              if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
              }
            } else {
              if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
              }
            }
          }
        });
      }
    });
  };

  const addHighContrastSupport = () => {
    // Add high contrast CSS variables
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --bg-primary: #000000 !important;
        --bg-secondary: #ffffff !important;
        --text-primary: #ffffff !important;
        --text-secondary: #000000 !important;
        --border-color: #ffffff !important;
        --accent-color: #ffff00 !important;
      }
      
      .high-contrast * {
        background-color: var(--bg-primary) !important;
        color: var(--text-primary) !important;
        border-color: var(--border-color) !important;
      }
      
      .high-contrast .btn-primary {
        background-color: var(--accent-color) !important;
        color: var(--bg-primary) !important;
      }
    `;
    document.head.appendChild(style);
  };

  const addColorBlindSupport = () => {
    // Add color blind friendly color schemes
    const style = document.createElement('style');
    style.textContent = `
      .color-blind-support {
        --success-color: #0066cc !important;
        --error-color: #cc6600 !important;
        --warning-color: #cc0066 !important;
        --info-color: #66cc00 !important;
      }
      
      .color-blind-support .success {
        background-color: var(--success-color) !important;
      }
      
      .color-blind-support .error {
        background-color: var(--error-color) !important;
      }
      
      .color-blind-support .warning {
        background-color: var(--warning-color) !important;
      }
      
      .color-blind-support .info {
        background-color: var(--info-color) !important;
      }
    `;
    document.head.appendChild(style);
  };

  const setupKeyboardNavigation = () => {
    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (settings.keyboardNavigation) {
        handleKeyboardNavigation(e);
      }
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        handleKeyboardShortcuts(e);
      }
    });
  };

  const handleKeyboardNavigation = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    
    switch (e.key) {
      case 'Tab':
        // Enhanced tab navigation
        if (e.shiftKey) {
          // Shift+Tab: Navigate backwards
          if (target === getFirstFocusableElement()) {
            e.preventDefault();
            getLastFocusableElement()?.focus();
          }
        } else {
          // Tab: Navigate forwards
          if (target === getLastFocusableElement()) {
            e.preventDefault();
            getFirstFocusableElement()?.focus();
          }
        }
        break;
        
      case 'Enter':
      case ' ':
        // Activate interactive elements
        if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
          e.preventDefault();
          target.click();
        }
        break;
        
      case 'Escape':
        // Close modals and dropdowns
        closeModalsAndDropdowns();
        break;
        
      case 'Home':
        // Navigate to top of page
        e.preventDefault();
        document.body.scrollTo({ top: 0, behavior: 'smooth' });
        break;
        
      case 'End':
        // Navigate to bottom of page
        e.preventDefault();
        document.body.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;
    }
  };

  const handleKeyboardShortcuts = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'h':
        // Ctrl/Cmd + H: Toggle high contrast
        e.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
        break;
        
      case 'l':
        // Ctrl/Cmd + L: Toggle large text
        e.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
        break;
        
      case 'm':
        // Ctrl/Cmd + M: Toggle reduced motion
        e.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
        break;
        
      case 'k':
        // Ctrl/Cmd + K: Toggle keyboard navigation
        e.preventDefault();
        setSettings(prev => ({ ...prev, keyboardNavigation: !prev.keyboardNavigation }));
        break;
        
      case 'a':
        // Ctrl/Cmd + A: Open accessibility panel
        e.preventDefault();
        setIsOpen(true);
        break;
    }
  };

  const setupFocusManagement = () => {
    // Track focus changes
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      
      // Add to focus history
      focusHistory.current.push(target);
      if (focusHistory.current.length > 10) {
        focusHistory.current.shift();
      }
      
      // Announce focus changes for screen readers
      if (settings.screenReader) {
        announceFocusChange(target);
      }
      
      // Add focus indicator
      if (settings.focusIndicator) {
        addFocusIndicator(target);
      }
    });
    
    // Remove focus indicator on blur
    document.addEventListener('focusout', (e) => {
      const target = e.target as HTMLElement;
      removeFocusIndicator(target);
    });
  };

  const setupScreenReader = () => {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(liveRegion);
  };

  const announceFocusChange = (element: HTMLElement) => {
    let announcement = '';
    
    if (element.tagName === 'BUTTON') {
      announcement = `Button: ${element.textContent || element.getAttribute('aria-label') || 'Unlabeled button'}`;
    } else if (element.tagName === 'A') {
      announcement = `Link: ${element.textContent || element.getAttribute('aria-label') || 'Unlabeled link'}`;
    } else if (element.tagName === 'INPUT') {
      const type = element.getAttribute('type') || 'text';
      const label = element.getAttribute('aria-label') || element.getAttribute('placeholder') || 'Input field';
      announcement = `${type} input: ${label}`;
    } else if (element.getAttribute('role')) {
      const role = element.getAttribute('role');
      const label = element.getAttribute('aria-label') || element.textContent || 'Element';
      announcement = `${role}: ${label}`;
    }
    
    if (announcement) {
      setAnnouncement(announcement);
      setTimeout(() => setAnnouncement(''), 3000);
    }
  };

  const addFocusIndicator = (element: HTMLElement) => {
    element.style.outline = '3px solid #06b6d4';
    element.style.outlineOffset = '2px';
    element.style.borderRadius = '4px';
  };

  const removeFocusIndicator = (element: HTMLElement) => {
    element.style.outline = '';
    element.style.outlineOffset = '';
    element.style.borderRadius = '';
  };

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }
    
    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }
    
    // Apply color blind support
    if (settings.colorBlindSupport) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }
  };

  const getFirstFocusableElement = (): HTMLElement | null => {
    const focusable = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    return focusable[0] as HTMLElement || null;
  };

  const getLastFocusableElement = (): HTMLElement | null => {
    const focusable = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    return focusable[focusable.length - 1] as HTMLElement || null;
  };

  const closeModalsAndDropdowns = () => {
    // Close all modals
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      modal.setAttribute('aria-hidden', 'true');
    });
    
    // Close all dropdowns
    const dropdowns = document.querySelectorAll('[role="menu"]');
    dropdowns.forEach(dropdown => {
      dropdown.setAttribute('aria-hidden', 'true');
    });
    
    // Return focus to trigger element
    if (currentFocus) {
      currentFocus.focus();
    }
  };

  const cleanupAccessibility = () => {
    // Remove event listeners
    document.removeEventListener('keydown', handleKeyboardNavigation);
    document.removeEventListener('keydown', handleKeyboardShortcuts);
    
    // Remove focus indicators
    document.querySelectorAll('*').forEach(element => {
      removeFocusIndicator(element as HTMLElement);
    });
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility size={24} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 w-80 z-50 border border-gray-200 dark:border-gray-700"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close accessibility panel"
              >
                ×
              </button>
            </div>
            
            <p id="accessibility-description" className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Customize your experience with these accessibility features
            </p>

            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast size={20} className="text-purple-600" />
                  <span className="text-sm font-medium">High Contrast</span>
                </div>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-purple-600' : 'bg-gray-300'
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
                <div className="flex items-center gap-2">
                  <ZoomIn size={20} className="text-blue-600" />
                  <span className="text-sm font-medium">Large Text</span>
                </div>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-blue-600' : 'bg-gray-300'
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
                <div className="flex items-center gap-2">
                  <Eye size={20} className="text-green-600" />
                  <span className="text-sm font-medium">Reduced Motion</span>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-green-600' : 'bg-gray-300'
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

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard size={20} className="text-orange-600" />
                  <span className="text-sm font-medium">Keyboard Navigation</span>
                </div>
                <button
                  onClick={() => toggleSetting('keyboardNavigation')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-orange-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.keyboardNavigation}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sun size={20} className="text-yellow-600" />
                  <span className="text-sm font-medium">Focus Indicator</span>
                </div>
                <button
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-yellow-600' : 'bg-gray-300'
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

              {/* Color Blind Support */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HelpCircle size={20} className="text-red-600" />
                  <span className="text-sm font-medium">Color Blind Support</span>
                </div>
                <button
                  onClick={() => toggleSetting('colorBlindSupport')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.colorBlindSupport ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.colorBlindSupport}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.colorBlindSupport ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Keyboard Shortcuts
              </h3>
              <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <div><kbd className="bg-white dark:bg-gray-600 px-1 py-0.5 rounded">Ctrl/Cmd + H</kbd> High Contrast</div>
                <div><kbd className="bg-white dark:bg-gray-600 px-1 py-0.5 rounded">Ctrl/Cmd + L</kbd> Large Text</div>
                <div><kbd className="bg-white dark:bg-gray-600 px-1 py-0.5 rounded">Ctrl/Cmd + M</kbd> Reduced Motion</div>
                <div><kbd className="bg-white dark:bg-gray-600 px-1 py-0.5 rounded">Ctrl/Cmd + K</kbd> Keyboard Nav</div>
                <div><kbd className="bg-white dark:bg-gray-600 px-1 py-0.5 rounded">Ctrl/Cmd + A</kbd> Open Panel</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      {announcement && (
        <div
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {announcement}
        </div>
      )}

      {/* Focus History Display */}
      {currentFocus && (
        <div className="fixed top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white text-xs z-50 max-w-xs">
          <div className="font-semibold mb-1">Current Focus:</div>
          <div className="truncate">
            {currentFocus.tagName.toLowerCase()}: {currentFocus.textContent?.slice(0, 50) || 'No text content'}
          </div>
        </div>
      )}
    </>
  );
};

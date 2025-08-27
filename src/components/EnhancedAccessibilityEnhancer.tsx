import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Palette, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  X,
  Accessibility,
  Sun,
  Moon,
  Monitor,
  Keyboard,
  MousePointer,
  Braille,
  Headphones,
  Speech,
  Languages,
  HelpCircle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  fontSize: number;
  theme: 'light' | 'dark' | 'auto';
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  language: string;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    fontSize: 16,
    theme: 'auto',
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindness: 'none',
    language: 'en'
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [showHelp, setShowHelp] = useState(false);

  const focusHistoryRef = useRef<HTMLElement[]>([]);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Enhanced accessibility settings application
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
      root.style.setProperty('--accent-color', '#fbbf24');
      root.style.setProperty('--border-color', '#fbbf24');
      document.body.classList.add('high-contrast');
    } else {
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--border-color');
      document.body.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
      document.body.classList.add('large-text');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
      document.body.classList.remove('large-text');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
      document.body.classList.add('reduced-motion');
    } else {
      root.style.removeProperty('--reduced-motion');
      document.body.classList.remove('reduced-motion');
    }

    // Apply high saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation', '1.5');
      document.body.classList.add('high-saturation');
    } else {
      root.style.setProperty('--saturation', '1');
      document.body.classList.remove('high-saturation');
    }

    // Apply color blindness filters
    if (newSettings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.setProperty('--color-filter', filters[newSettings.colorBlindness]);
      document.body.classList.add(`color-blind-${newSettings.colorBlindness}`);
    } else {
      root.style.removeProperty('--color-filter');
      document.body.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia');
    }

    // Apply focus indicators
    if (newSettings.focusIndicators) {
      document.body.classList.add('enhanced-focus');
    } else {
      document.body.classList.remove('enhanced-focus');
    }

    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }

    // Apply screen reader optimizations
    if (newSettings.screenReader) {
      document.body.classList.add('screen-reader-optimized');
      // Add ARIA landmarks if not present
      addARIALandmarks();
    } else {
      document.body.classList.remove('screen-reader-optimized');
    }

    // Apply theme
    if (newSettings.theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    } else if (newSettings.theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      // Auto theme - respect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
      } else {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
      }
    }

    // Notify parent component
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
  }, [onSettingsChange]);

  // Add ARIA landmarks for screen readers
  const addARIALandmarks = useCallback(() => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('aria-label', 'Main content');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
      footer.setAttribute('aria-label', 'Site footer');
    }
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if in input/textarea
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (e.shiftKey) {
            // Shift+Tab - go to previous focusable element
            const focusableElements = getFocusableElements();
            const currentIndex = focusableElements.indexOf(target);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            focusableElements[prevIndex]?.focus();
            e.preventDefault();
          }
          break;
        
        case 'Escape':
          // Close modals, dropdowns, etc.
          closeAllModals();
          break;
        
        case 'h':
        case 'H':
          // Go to home
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/';
          }
          break;
        
        case 's':
        case 'S':
          // Go to services
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/services';
          }
          break;
        
        case 'c':
        case 'C':
          // Go to contact
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/contact';
          }
          break;
        
        case 'a':
        case 'A':
          // Go to about
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/about';
          }
          break;
        
        case 'b':
        case 'B':
          // Go back
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.history.back();
          }
          break;
        
        case 'f':
        case 'F':
          // Focus search
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const searchInput = document.querySelector('input[type="search"], input[placeholder*="search"]') as HTMLInputElement;
            searchInput?.focus();
          }
          break;
      }
    };

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      setFocusHistory(prev => [...prev.slice(-9), target]);
      
      // Announce focus changes for screen readers
      if (settings.screenReader) {
        announceToScreenReader(`${target.textContent || target.getAttribute('aria-label') || 'Element'} focused`);
      }
      
      // Add focus indicator
      target.classList.add('focused');
    };

    const handleBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focused');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [settings.keyboardNavigation, settings.screenReader]);

  // Get all focusable elements
  const getFocusableElements = useCallback(() => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]',
      '[role="tab"]',
      '[role="menuitem"]'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
  }, []);

  // Close all modals and dropdowns
  const closeAllModals = useCallback(() => {
    const modals = document.querySelectorAll('[role="dialog"], .modal, .dropdown');
    modals.forEach(modal => {
      const element = modal as HTMLElement;
      element.style.display = 'none';
      element.setAttribute('aria-hidden', 'true');
    });
  }, []);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    setAnnouncements(prev => [...prev, message]);
    
    // Create live region for screen readers
    let liveRegion = document.getElementById('accessibility-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'accessibility-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
    
    // Clear after announcement
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    if (enabled) {
      setIsVisible(true);
      applyAccessibilitySettings(settings);
      const cleanup = setupKeyboardNavigation();
      return cleanup;
    }
  }, [enabled, settings, applyAccessibilitySettings, setupKeyboardNavigation]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings, applyAccessibilitySettings]);

  // Handle system theme changes
  useEffect(() => {
    if (settings.theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        applyAccessibilitySettings(settings);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [settings, applyAccessibilitySettings]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Accessibility Control Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-20 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Accessibility size={20} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 w-96 max-h-96 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Accessibility size={20} />
                Accessibility Settings
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowHelp(!showHelp)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1"
                  title="Help"
                >
                  <HelpCircle size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1"
                  title="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Help Section */}
            {showHelp && (
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Keyboard Shortcuts</h4>
                <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <div>Ctrl/Cmd + H: Go to Home</div>
                  <div>Ctrl/Cmd + S: Go to Services</div>
                  <div>Ctrl/Cmd + C: Go to Contact</div>
                  <div>Ctrl/Cmd + A: Go to About</div>
                  <div>Ctrl/Cmd + B: Go Back</div>
                  <div>Ctrl/Cmd + F: Focus Search</div>
                  <div>Escape: Close Modals</div>
                </div>
              </div>
            )}

            {/* Visual Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">High Saturation</span>
                <input
                  type="checkbox"
                  checked={settings.highSaturation}
                  onChange={(e) => setSettings(prev => ({ ...prev, highSaturation: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
                <input
                  type="checkbox"
                  checked={settings.focusIndicators}
                  onChange={(e) => setSettings(prev => ({ ...prev, focusIndicators: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>
            </div>

            {/* Color Blindness Filter */}
            <div className="mt-4">
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-2 block">Color Blindness Filter</label>
              <select
                value={settings.colorBlindness}
                onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia (Red-Blind)</option>
                <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                <option value="tritanopia">Tritanopia (Blue-Blind)</option>
              </select>
            </div>

            {/* Theme Selection */}
            <div className="mt-4">
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-2 block">Theme</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSettings(prev => ({ ...prev, theme: 'light' }))}
                  className={`p-2 rounded-lg flex items-center gap-2 ${
                    settings.theme === 'light' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Sun size={16} />
                  Light
                </button>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, theme: 'dark' }))}
                  className={`p-2 rounded-lg flex items-center gap-2 ${
                    settings.theme === 'dark' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Moon size={16} />
                  Dark
                </button>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, theme: 'auto' }))}
                  className={`p-2 rounded-lg flex items-center gap-2 ${
                    settings.theme === 'auto' 
                      ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Monitor size={16} />
                  Auto
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <div className="mt-6">
              <button
                onClick={() => {
                  const defaultSettings: AccessibilitySettings = {
                    highContrast: false,
                    largeText: false,
                    reducedMotion: false,
                    highSaturation: false,
                    fontSize: 16,
                    theme: 'auto',
                    screenReader: false,
                    keyboardNavigation: true,
                    focusIndicators: true,
                    colorBlindness: 'none',
                    language: 'en'
                  };
                  setSettings(defaultSettings);
                }}
                className="w-full p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <RotateCcw size={16} />
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus History Indicator */}
      {settings.focusIndicators && currentFocus && (
        <div className="fixed top-4 right-4 z-40 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
          <div className="flex items-center gap-2">
            <Keyboard size={14} />
            Focus: {currentFocus.tagName.toLowerCase()}
          </div>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcements[announcements.length - 1]}
      </div>
    </>
  );
};

export default React.memo(EnhancedAccessibilityEnhancer);
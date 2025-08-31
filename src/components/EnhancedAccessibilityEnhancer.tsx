import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Palette, 
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Accessibility,
  Settings,
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
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  theme: 'light' | 'dark' | 'auto';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
  autoDetect?: boolean;
}

export default function EnhancedAccessibilityEnhancer({
  enabled = true,
  showSettings = false,
  autoDetect = true
}: AccessibilityEnhancerProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'medium',
    theme: 'auto'
  });

  const [isOpen, setIsOpen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const focusRef = useRef<HTMLDivElement>(null);

  // Auto-detect accessibility preferences
  useEffect(() => {
    if (!autoDetect || !enabled) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');

    setSettings(prev => ({
      ...prev,
      reducedMotion: mediaQuery.matches,
      theme: prefersDark.matches ? 'dark' : 'light',
      highContrast: prefersHighContrast.matches
    }));

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, theme: e.matches ? 'dark' : 'light' }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    prefersDark.addEventListener('change', handleThemeChange);
    prefersHighContrast.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      prefersDark.removeEventListener('change', handleThemeChange);
      prefersHighContrast.removeEventListener('change', handleContrastChange);
    };
  }, [autoDetect, enabled]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      body.style.setProperty('--text-color', '#ffffff');
      body.style.setProperty('--bg-color', '#000000');
      body.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      body.style.removeProperty('--text-color');
      body.style.removeProperty('--bg-color');
      body.style.removeProperty('--accent-color');
    }

    // Large text
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '20px',
      xlarge: '24px'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      body.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      body.style.removeProperty('--animation-duration');
    }

    // Color blindness simulation
    const colorBlindnessFilters = {
      none: 'none',
      protanopia: 'url(#protanopia)',
      deuteranopia: 'url(#deuteranopia)',
      tritanopia: 'url(#tritanopia)'
    };
    root.style.filter = colorBlindnessFilters[settings.colorBlindness];

    // Theme
    if (settings.theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (settings.theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      // Auto theme
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', isDark);
      root.classList.toggle('light', !isDark);
    }

    // Focus indicator
    if (settings.focusIndicator) {
      body.classList.add('focus-visible');
    } else {
      body.classList.remove('focus-visible');
    }

    // Announce changes to screen readers
    if (settings.screenReader) {
      announceToScreenReader('Accessibility settings updated');
    }
  }, [settings, enabled]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsNavigating(true);
        setTimeout(() => setIsNavigating(false), 1000);
      }

      // Enhanced keyboard shortcuts
      if (e.altKey) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            navigateToSection('main');
            break;
          case '2':
            e.preventDefault();
            navigateToSection('navigation');
            break;
          case '3':
            e.preventDefault();
            navigateToSection('content');
            break;
          case '0':
            e.preventDefault();
            showAccessibilityMenu();
            break;
        }
      }

      // Skip to main content
      if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        skipToMainContent();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enabled) return;

    const handleFocusChange = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      
      if (target && !focusHistory.includes(target)) {
        setFocusHistory(prev => [...prev.slice(-9), target]);
      }

      // Announce focus changes to screen readers
      if (settings.screenReader && target) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent?.trim() || 
                     target.tagName.toLowerCase();
        announceToScreenReader(`Focused on ${label}`);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [enabled, settings.screenReader]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);

    setAnnouncements(prev => [...prev, message]);
  }, [settings.screenReader]);

  // Navigation functions
  const navigateToSection = useCallback((section: string) => {
    const sectionElement = document.querySelector(`[data-section="${section}"]`);
    if (sectionElement) {
      (sectionElement as HTMLElement).focus();
      announceToScreenReader(`Navigated to ${section} section`);
    }
  }, [announceToScreenReader]);

  const skipToMainContent = useCallback(() => {
    const mainContent = document.querySelector('main') || 
                       document.querySelector('[role="main"]') ||
                       document.querySelector('#main-content');
    
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      announceToScreenReader('Skipped to main content');
    }
  }, [announceToScreenReader]);

  const showAccessibilityMenu = useCallback(() => {
    setIsOpen(true);
    announceToScreenReader('Accessibility menu opened');
  }, [announceToScreenReader]);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    announceToScreenReader(`${key} setting updated`);
  }, [announceToScreenReader]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none',
      fontSize: 'medium',
      theme: 'auto'
    });
    announceToScreenReader('Settings reset to defaults');
  }, [announceToScreenReader]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 z-50 p-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-32 right-4 z-50 w-96 bg-zion-slate-dark border border-white/20 rounded-xl shadow-2xl backdrop-blur-lg max-h-[80vh] overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 id="accessibility-title" className="text-lg font-semibold text-white flex items-center">
                  <Accessibility className="w-5 h-5 mr-2 text-green-400" />
                  Accessibility Settings
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p id="accessibility-description" className="text-sm text-gray-300 mb-4">
                Customize your experience with these accessibility options
              </p>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {/* Visual Settings */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Visual Settings
                  </h4>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => updateSetting('highContrast', e.target.checked)}
                      className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">High Contrast</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={(e) => updateSetting('largeText', e.target.checked)}
                      className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">Large Text</span>
                  </label>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Font Size</label>
                    <select
                      value={settings.fontSize}
                      onChange={(e) => updateSetting('fontSize', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="xlarge">Extra Large</option>
                    </select>
                  </div>
                </div>

                {/* Motion Settings */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white flex items-center">
                    <MousePointer className="w-4 h-4 mr-2" />
                    Motion & Interaction
                  </h4>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                      className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">Reduced Motion</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                      className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">Focus Indicators</span>
                  </label>
                </div>

                {/* Navigation Settings */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white flex items-center">
                    <Keyboard className="w-4 h-4 mr-2" />
                    Navigation
                  </h4>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                      className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">Enhanced Keyboard Navigation</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => updateSetting('screenReader', e.target.checked)}
                      className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-300">Screen Reader Support</span>
                  </label>
                </div>

                {/* Theme Settings */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white flex items-center">
                    <Palette className="w-4 h-4 mr-2" />
                    Theme
                  </h4>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Color Theme</label>
                    <select
                      value={settings.theme}
                      onChange={(e) => updateSetting('theme', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="auto">Auto (System)</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-600">
                <button
                  onClick={resetToDefaults}
                  className="flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Indicator */}
      {settings.focusIndicator && currentFocus && (
        <div
          ref={focusRef}
          className="fixed pointer-events-none z-[9999] border-2 border-green-400 rounded transition-all duration-200"
          style={{
            top: currentFocus.offsetTop - 2,
            left: currentFocus.offsetLeft - 2,
            width: currentFocus.offsetWidth + 4,
            height: currentFocus.offsetHeight + 4,
          }}
        />
      )}

      {/* Keyboard Navigation Indicator */}
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-4 right-4 z-50 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg shadow-lg flex items-center space-x-2"
        >
          <Keyboard className="w-4 h-4" />
          <span>Keyboard Navigation Active</span>
        </motion.div>
      )}

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements[announcements.length - 1]}
      </div>

      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        <a
          href="#main-content"
          className="block px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={skipToMainContent}
        >
          Skip to main content
        </a>
      </div>
    </>
  );
}

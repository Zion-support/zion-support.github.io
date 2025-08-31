<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
=======
import React, { useState, useEffect, useCallback } from 'react';
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
<<<<<<< HEAD
  Type,
  Contrast,
=======
  Contrast,
  Type,
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
  MousePointer,
  Keyboard,
  Smartphone,
  Monitor,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Accessibility,
<<<<<<< HEAD
  ZoomIn,
  ZoomOut,
  RotateCcw
=======
  Headphones,
  RotateCcw,
  Tablet,
  Check,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
<<<<<<< HEAD
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  zoomLevel: number;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
=======
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindSupport: boolean;
  dyslexiaFriendly: boolean;
  zoomLevel: number;
  language: string;
}

interface AccessibilityEnhancerProps {
  enabled: boolean;
  showPanel?: boolean;
  autoEnhance?: boolean;
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  highSaturation: false,
  focusIndicator: true,
  screenReader: false,
  keyboardNavigation: true,
  zoomLevel: 100
};

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
<<<<<<< HEAD
  onSettingsChange
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isPanelOpen, setIsPanelOpen] = useState(showPanel);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

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
        console.warn('Failed to parse saved accessibility settings');
      }
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);

    // Detect keyboard user
    const handleKeyDown = () => setIsKeyboardUser(true);
    const handleMouseDown = () => setIsKeyboardUser(false);
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Focus management
    const handleFocusChange = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      
      if (settings.focusIndicator) {
        target.style.outline = '2px solid #06b6d4';
        target.style.outlineOffset = '2px';
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusOut);

    // Screen reader announcements
    const announcementDiv = document.createElement('div');
    announcementDiv.setAttribute('aria-live', 'polite');
    announcementDiv.setAttribute('aria-atomic', 'true');
    announcementDiv.className = 'sr-only';
    document.body.appendChild(announcementDiv);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusOut);
      document.body.removeChild(announcementDiv);
    };
  }, [enabled, settings.focusIndicator]);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--color-primary', '#ffffff');
      root.style.setProperty('--color-secondary', '#000000');
      root.style.setProperty('--color-background', '#000000');
      root.style.setProperty('--color-text', '#ffffff');
    } else {
      root.style.removeProperty('--color-primary');
      root.style.removeProperty('--color-secondary');
      root.style.removeProperty('--color-background');
      root.style.removeProperty('--color-text');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '';
      root.style.removeProperty('--text-scale');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--motion-reduced', 'true');
    } else {
      root.style.removeProperty('--motion-reduced');
    }

    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation-high', 'true');
    } else {
      root.style.removeProperty('--saturation-high');
    }

    // Zoom level
    root.style.setProperty('--zoom-level', `${newSettings.zoomLevel}%`);

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    onSettingsChange?.(newSettings);
  }, [onSettingsChange]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean | number) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Announce changes for screen readers
    if (settings.screenReader) {
      announceToScreenReader(`Setting ${key} changed to ${value}`);
    }
  }, [settings, applyAccessibilitySettings]);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    const announcementDiv = document.querySelector('[aria-live="polite"]') as HTMLElement;
    if (announcementDiv) {
      announcementDiv.textContent = message;
      setTimeout(() => {
        announcementDiv.textContent = '';
      }, 1000);
    }
    
    // Also add to announcements list for visual display
    setAnnouncements(prev => [...prev, message]);
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(announcement => announcement !== message));
    }, 3000);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      // Alt + A: Toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsPanelOpen(prev => !prev);
      }
      
      // Alt + H: Toggle high contrast
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        handleSettingChange('highContrast', !settings.highContrast);
      }
      
      // Alt + L: Toggle large text
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        handleSettingChange('largeText', !settings.largeText);
      }
      
      // Alt + M: Toggle reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        handleSettingChange('reducedMotion', !settings.reducedMotion);
      }
      
      // Alt + Plus: Zoom in
      if (e.altKey && e.key === '=') {
        e.preventDefault();
        handleSettingChange('zoomLevel', Math.min(settings.zoomLevel + 10, 200));
      }
      
      // Alt + Minus: Zoom out
      if (e.altKey && e.key === '-') {
        e.preventDefault();
        handleSettingChange('zoomLevel', Math.max(settings.zoomLevel - 10, 50));
      }
      
      // Alt + 0: Reset zoom
      if (e.altKey && e.key === '0') {
        e.preventDefault();
        handleSettingChange('zoomLevel', 100);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [enabled, settings, handleSettingChange]);

  // Skip to main content functionality
  const handleSkipToContent = useCallback(() => {
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      announceToScreenReader('Moved to main content');
    }
  }, [announceToScreenReader]);
=======
  autoEnhance = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindSupport: false,
    dyslexiaFriendly: false,
    zoomLevel: 100,
    language: 'en'
  });

  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  // Enhanced accessibility scanning
  const scanAccessibility = useCallback(() => {
    if (!enabled) return;
    
    setIsScanning(true);
    const issues: string[] = [];

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.hasAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text or aria-label`);
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach((input, index) => {
      if (!input.hasAttribute('aria-label') && !input.hasAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label && !input.hasAttribute('placeholder')) {
          issues.push(`Form input ${index + 1} missing label or aria-label`);
        }
      }
    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element, index) => {
      if (!element.hasAttribute('tabindex') && element.tagName !== 'A' && element.tagName !== 'BUTTON') {
        issues.push(`Interactive element ${index + 1} may not be keyboard accessible`);
      }
    });

    // Check for color contrast (basic check)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor || color === 'transparent') {
        issues.push(`Potential contrast issue with text element ${index + 1}`);
      }
    });

    setAccessibilityIssues(issues);
    setIsScanning(false);
  }, [enabled]);

  // Apply accessibility enhancements
  const applyAccessibilityEnhancements = useCallback(() => {
    if (!enabled) return;

    // Apply high contrast
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--bg-color', '#000000');
      document.documentElement.style.setProperty('--accent-color', '#ffff00');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--text-color');
      document.documentElement.style.removeProperty('--bg-color');
      document.documentElement.style.removeProperty('--accent-color');
    }

    // Apply large text
    if (settings.largeText) {
      document.documentElement.style.fontSize = '18px';
      document.documentElement.style.lineHeight = '1.6';
    } else {
      document.documentElement.style.fontSize = '16px';
      document.documentElement.style.lineHeight = '1.5';
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--transition-duration');
    }

    // Apply focus indicators
    if (settings.focusIndicators) {
      document.documentElement.style.setProperty('--focus-outline', '3px solid #00ffff');
      document.documentElement.style.setProperty('--focus-outline-offset', '2px');
    } else {
      document.documentElement.style.removeProperty('--focus-outline');
      document.documentElement.style.removeProperty('--focus-outline-offset');
    }

    // Apply dyslexia-friendly font
    if (settings.dyslexiaFriendly) {
      document.documentElement.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      document.documentElement.style.letterSpacing = '0.1em';
      document.documentElement.style.wordSpacing = '0.2em';
    } else {
      document.documentElement.style.fontFamily = '';
      document.documentElement.style.letterSpacing = '';
      document.documentElement.style.wordSpacing = '';
    }

    // Apply zoom level
    document.documentElement.style.zoom = `${settings.zoomLevel}%`;
  }, [enabled, settings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
          break;

        case 'Escape':
          // Close modals and panels
          const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
              modal.setAttribute('aria-hidden', 'true');
            }
          });
          break;

        case 'h':
          // Navigate to next heading
          if (event.ctrlKey) {
            event.preventDefault();
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const currentHeading = Array.from(headings).findIndex(h => h === document.activeElement);
            const nextHeading = headings[(currentHeading + 1) % headings.length] as HTMLElement;
            nextHeading?.focus();
          }
          break;

        case 'l':
          // Navigate to next link
          if (event.ctrlKey) {
            event.preventDefault();
            const links = document.querySelectorAll('a[href]');
            const currentLink = Array.from(links).findIndex(l => l === document.activeElement);
            const nextLink = links[(currentLink + 1) % links.length] as HTMLElement;
            nextLink?.focus();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilityEnhancements();
  }, [applyAccessibilityEnhancements]);

  // Auto-enhance on mount
  useEffect(() => {
    if (enabled && autoEnhance) {
      scanAccessibility();
    }
  }, [enabled, autoEnhance, scanAccessibility]);
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1

  if (!enabled) return null;

  return (
    <>
<<<<<<< HEAD
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded focus:outline-none"
        onClick={handleSkipToContent}
      >
        Skip to main content
      </a>

      {/* Accessibility Panel Toggle Button */}
      <button
        onClick={() => setIsPanelOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Accessibility settings"
        aria-expanded={isPanelOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
=======
      {/* Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            id="accessibility-panel"
            className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-slate-800 shadow-2xl z-40 overflow-y-auto"
=======
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-6 bottom-24 z-50 w-80 max-h-[80vh] bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-modal="true"
          >
<<<<<<< HEAD
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 id="accessibility-panel-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
=======
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 p-4 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <h3 id="accessibility-panel-title" className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Accessibility className="w-5 h-5 text-purple-400" />
                  <span>Accessibility</span>
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
<<<<<<< HEAD

              {/* Settings */}
              <div className="space-y-6">
                {/* Visual Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Visual Settings
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                      <Contrast className="w-4 h-4 text-gray-500" />
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                      <Type className="w-4 h-4 text-gray-500" />
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highSaturation}
                        onChange={(e) => handleSettingChange('highSaturation', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">High Saturation</span>
                      <Eye className="w-4 h-4 text-gray-500" />
                    </label>
                  </div>
                </div>

                {/* Motion Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Motion Settings
                  </h3>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                      className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Reduce Motion</span>
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  </label>
                </div>

                {/* Navigation Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Navigation Settings
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => handleSettingChange('focusIndicator', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Focus Indicators</span>
                      <MousePointer className="w-4 h-4 text-gray-500" />
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => handleSettingChange('keyboardNavigation', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                      <Keyboard className="w-4 h-4 text-gray-500" />
                    </label>
                  </div>
=======
              <p id="accessibility-panel-description" className="text-sm text-gray-300 mt-1">
                Customize your experience for better accessibility
              </p>
            </div>

            {/* Panel Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Visual Enhancements */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Visual Enhancements
                </h4>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Contrast className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">High Contrast</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Type className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Large Text</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.dyslexiaFriendly}
                    onChange={(e) => setSettings(prev => ({ ...prev, dyslexiaFriendly: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <RotateCcw className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Dyslexia Friendly</span>
                </label>
              </div>

              {/* Navigation & Interaction */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Navigation & Interaction
                </h4>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Keyboard className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Enhanced Keyboard Navigation</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicators}
                    onChange={(e) => setSettings(prev => ({ ...prev, focusIndicators: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <MousePointer className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Focus Indicators</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Reduced Motion</span>
                </label>
              </div>

              {/* Zoom Control */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Zoom Control
                </h4>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, zoomLevel: Math.max(50, prev.zoomLevel - 10) }))}
                    className="p-2 bg-slate-800/50 text-purple-400 rounded-lg hover:bg-slate-700/50 transition-colors"
                    aria-label="Zoom out"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  
                  <span className="text-sm text-white min-w-[4rem] text-center">
                    {settings.zoomLevel}%
                  </span>
                  
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, zoomLevel: Math.min(200, prev.zoomLevel + 10) }))}
                    className="p-2 bg-slate-800/50 text-purple-400 rounded-lg hover:bg-slate-700/50 transition-colors"
                    aria-label="Zoom in"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
                </div>

<<<<<<< HEAD
                {/* Zoom Control */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Zoom Control
                  </h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleSettingChange('zoomLevel', Math.max(settings.zoomLevel - 10, 50))}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    
                    <span className="text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
                      {settings.zoomLevel}%
                    </span>
                    
                    <button
                      onClick={() => handleSettingChange('zoomLevel', Math.min(settings.zoomLevel + 10, 200))}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleSettingChange('zoomLevel', 100)}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Reset zoom"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Keyboard Shortcuts
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + A</kbd> Toggle panel</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + H</kbd> High contrast</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + L</kbd> Large text</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + M</kbd> Reduce motion</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + +/-</kbd> Zoom in/out</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + 0</kbd> Reset zoom</div>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setSettings(defaultSettings);
                    applyAccessibilitySettings(defaultSettings);
                    announceToScreenReader('Accessibility settings reset to default');
                  }}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Reset to Default
=======
              {/* Accessibility Scan */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Accessibility Scan
                </h4>
                
                <button
                  onClick={scanAccessibility}
                  disabled={isScanning}
                  className="w-full flex items-center justify-center space-x-2 p-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors disabled:opacity-50"
                >
                  {isScanning ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Settings className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                  <span className="text-sm">
                    {isScanning ? 'Scanning...' : 'Scan for Issues'}
                  </span>
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
                </button>

                {accessibilityIssues.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-yellow-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{accessibilityIssues.length} issues found</span>
                    </div>
                    <div className="max-h-32 overflow-y-auto space-y-1">
                      {accessibilityIssues.slice(0, 5).map((issue, index) => (
                        <div key={index} className="text-xs text-gray-400 bg-slate-800/50 p-2 rounded">
                          {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
<<<<<<< HEAD
=======

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Quick Actions
                </h4>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <Contrast className="w-4 h-4" />
                    <span className="text-xs">Toggle Contrast</span>
                  </button>
                  
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, largeText: !prev.largeText }))}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <Type className="w-4 h-4" />
                    <span className="text-xs">Toggle Text Size</span>
                  </button>
                </div>
              </div>
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD

      {/* Announcements */}
      <AnimatePresence>
        {announcements.length > 0 && (
          <div className="fixed top-4 left-4 z-50 space-y-2">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{announcement}</span>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Focus indicator styles */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        [data-motion-reduced="true"] * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        [data-zoom-level] {
          transform: scale(var(--zoom-level, 1));
          transform-origin: top left;
        }
      `}</style>
=======
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
    </>
  );
};
<<<<<<< HEAD
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { AnimatePresence, motion               } from 'framer-motion.ts';
import { Accessibility,
    AlertTriangle,
    CheckCircle,
    Contrast,
    Eye,
    EyeOff,
    Info,
    X,
    ZoomIn,
    ZoomOut
import { useCallback, useEffect, useState               } from 'react.ts';
=======
import React, { useState, useEffect, useCallback, useRef } from 'react.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
import { Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Keyboard,
  MousePointer,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  X,
  Settings,
  Contrast,
  Type,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Info,
  Shield,
  Users,
  Smartphone,
  Monitor
              } from 'lucide-react.ts';
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
import React, { useState, useEffect, useCallback, useMemo } from 'react.ts';
import { Eye, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Move, 
  Keyboard,
  Accessibility,
  Settings,
  X,
  Check,
  AlertTriangle
              } from 'lucide-react.ts';

interface AccessibilitySettings {














  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;














}

<<<<<<< HEAD
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
  });
=======
interface AccessibilityAnnouncement {














  id: string;
<<<<<<< HEAD
  name: string;
  description: string;
  enabled: boolean;
  category: 'visual' | 'motor' | 'cognitive' | 'auditory';
  wcagLevel: 'A' | 'AA' | 'AAA';

interface AccessibilityAudit {
  id: string;
  issue: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  element: string;
  recommendation: string;
  wcagCriteria: string;

export default function EnhancedAccessibilityEnhancer(...args: any[]): any {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState<Set<string>>(new Set());
  const [auditResults, setAuditResults] = useState<any>([]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [contrastMode, setContrastMode] = useState<any>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);
  const [screenReaderMode, setScreenReaderMode] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(true);
  const [colorBlindMode, setColorBlindMode] = useState(false);

const accessibilityFeatures: AccessibilityFeature[] = [;
    {
id: 'high-contrast',;
name: 'High Contrast Mode',;
description: 'Increase contrast for better readability',;
enabled: false,;
category: 'visual',;
wcagLevel: 'AA';
    













},
    {
      id: 'large-text',
      name: 'Large Text',
      description: 'Increase font size for better readability',
      enabled: false,
      category: 'visual',
      wcagLevel: 'AA'
    },
    {
      id: 'reduced-motion',
      name: 'Reduced Motion',
      description: 'Reduce animations for vestibular disorders',
      enabled: false,
      category: 'motor',
      wcagLevel: 'A'
    },
    {
      id: 'focus-indicator',
      name: 'Focus Indicator',
      description: 'Highlight focused elements clearly',
      enabled: true,
      category: 'motor',
      wcagLevel: 'A'
    },
    {
      id: 'keyboard-navigation',
      name: 'Keyboard Navigation',
      description: 'Enable full keyboard navigation',
      enabled: true,
      category: 'motor',
      wcagLevel: 'A'
    },
    {
      id: 'screen-reader',
      name: 'Screen Reader Support',
      description: 'Optimize for screen readers',
      enabled: false,
      category: 'auditory',
      wcagLevel: 'AA'
    },
    {
      id: 'color-blind-friendly',
      name: 'Color Blind Friendly',
      description: 'Use patterns and labels instead of just colors',
      enabled: false,
      category: 'visual',
      wcagLevel: 'AA'

  ];

  // Apply accessibility features
  const applyFeature = useCallback((featureId: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring, enabled: boolean)               => {
    const feature = accessibilityFeatures.find(f => f.id === featureId);
    if (!feature) return;

    setActiveFeatures(prev => {
      const newSet = new Set(prev);
      if (enabled) {
        newSet.add(featureId);
      } else {
        newSet.delete(featureId);

      return newSet;
    });

    // Apply specific feature
    switch (featureId) {
      case 'high-contrast':
        if (enabled) {
          document.documentElement.classList.add('high-contrast');
          setContrastMode('high');
        } else {
          document.documentElement.classList.remove('high-contrast');
          setContrastMode('normal');

        break;

      case 'large-text':
        if (enabled) {
          setFontSize(20);
        } else {
          setFontSize(16);

        break;

      case 'reduced-motion':
        if (enabled) {
          document.documentElement.classList.add('reduced-motion');
          setReducedMotion(true);
        } else {
          document.documentElement.classList.remove('reduced-motion');
          setReducedMotion(false);

        break;

      case 'focus-indicator':
        setFocusIndicator(enabled);
        break;

      case 'keyboard-navigation':
        setKeyboardNavigation(enabled);
        break;

      case 'screen-reader':
        setScreenReaderMode(enabled);
        break;

      case 'color-blind-friendly':
        setColorBlindMode(enabled);
        break;

  }, [accessibilityFeatures]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(async () => {
    setIsAuditing(true);
    const results: AccessibilityAudit[] = [];

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        results.push({
          id: `alt-${index}`,
          issue: 'Missing alt text for image',
          severity: 'high',
          element: img.outerHTML.slice(0, 100),
          recommendation: 'Add descriptive alt text or aria-label',
          wcagCriteria: '1.1.1 Non-text Content (A)'
        });

=======
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
}

const EnhancedAccessibilityEnhancer: React.FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<any>(() => {
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? JSON.parse(saved) : {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      colorBlindMode: false,
      dyslexiaFriendly: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true
    };
  });
  
  const [announcements, setAnnouncements] = useState<any>([]);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<any>(null);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  const focusableElements = useRef<HTMLElement[]>([]);
  const currentFocusIndex = useRef(0);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.style.setProperty('--high-contrast', 'true');
      document.body.classList.add('high-contrast');
    } else {
      document.documentElement.style.removeProperty('--high-contrast');
      document.body.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.style.fontSize = '18px';
      document.body.classList.add('large-text');
    } else {
      document.documentElement.style.fontSize = '16px';
      document.body.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.style.setProperty('--reduced-motion', 'true');
      document.body.classList.add('reduced-motion');
    } else {
      document.documentElement.style.removeProperty('--reduced-motion');
      document.body.classList.remove('reduced-motion');
    }

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.style.setProperty('--focus-visible', 'auto');
    } else {
      document.documentElement.style.setProperty('--focus-visible', 'none');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
<<<<<<< HEAD
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        // Update focusable elements
        focusableElements.current = Array.from(
          document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];
=======
    const handleKeyDown = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyanyKeyboardEvent)               => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsVisible(prev => !prev);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        currentFocusIndex.current = Math.max(
          0,
          Math.min(
            focusableElements.current.length - 1,
            currentFocusIndex.current + direction
          )
        );
        focusableElements.current[currentFocusIndex.current]?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, [enableScreenReader]);

  const toggleAccessibility = () => {
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
  };

<<<<<<< HEAD
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
=======
    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    interactiveElements.forEach((element, index) => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex === '-1' && !element.getAttribute('aria-hidden')) {
        results.push({
          id: anyanyanyanyanyanyanyanyanyanyanyanyanyany`keyboard-${index}`,
          issue: 'Element not keyboard accessible',
          severity: 'high',
          element: element.outerHTML.slice(0, 100),
          recommendation: 'Ensure element is keyboard accessible or hide with aria-hidden',
          wcagCriteria: '2.1.1 Keyboard (A)'
        });

    });

    // Simulate audit time
    await new Promise(resolve               => setTimeout(resolve, 2000));

    setAuditResults(results);
    setIsAuditing(false);
  }, []);

<<<<<<< HEAD
  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Apply focus indicator
  useEffect(() => {
    if (focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');

  }, [focusIndicator]);

  // Apply keyboard navigation
  useEffect(() => {
    if (keyboardNavigation) {
      document.documentElement.classList.add('keyboard-navigation');
    } else {
      document.documentElement.classList.remove('keyboard-navigation');

  }, [keyboardNavigation]);

  // Apply color blind mode
  useEffect(() => {
    if (colorBlindMode) {
      document.documentElement.classList.add('color-blind-friendly');
    } else {
      document.documentElement.classList.remove('color-blind-friendly');

  }, [colorBlindMode]);

  // Apply screen reader mode
  useEffect(() => {
    if (screenReaderMode) {
      document.documentElement.classList.add('screen-reader-mode');
      // Add more screen reader optimizations
      document.documentElement.setAttribute('aria-live', 'polite');
    } else {
      document.documentElement.classList.remove('screen-reader-mode');
      document.documentElement.removeAttribute('aria-live');

  }, [screenReaderMode]);
=======
  // Announce changes to screen readers
  const announce = useCallback((message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const announcement: AccessibilityAnnouncement = {
      id: anyanyanyanyanyanyanyanyanyanyanyanyanyanyDate.now().toString(),
      message,
      type,
      timestamp: new Date()
    };
    
    setAnnouncements(prev               => [...prev, announcement]);
    setCurrentAnnouncement(announcement);
    
    // Remove announcement after 5 seconds
    setTimeout(() => {
      setCurrentAnnouncement(null);
    }, 5000);
    
    // Remove from list after 10 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a.id !== announcement.id));
    }, 10000);
  }, []);

  // Handle setting changes
  const handleSettingChange = useCallback((key: anyanyanyanyanyanyanyanyanyanyanyanyanyanykeyof AccessibilitySettings, value: boolean)               => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    const settingNames = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      colorBlindMode: 'Color blind mode',
      dyslexiaFriendly: 'Dyslexia friendly',
      screenReader: 'Screen reader mode',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicators: 'Focus indicators'
    };
    
    announce(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`);
  }, [announce]);

  // Reset all settings
  const resetSettings = useCallback(() => {
    setSettings({
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
<<<<<<< HEAD
      focusIndicators: true,
=======
      focusIndicators: true
    });
    announce('All accessibility settings have been reset');
  }, [announce]);

  // Toggle panel visibility
  const togglePanel = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  // Close panel
  const closePanel = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Get setting icon
  const getSettingIcon = (key: anyanyanyanyanyanyanyanyanyanyanyanyanyanykeyof AccessibilitySettings)               => {
    const icons = {
      highContrast: Palette,
      largeText: Type,
      reducedMotion: Monitor,
      colorBlindMode: Eye,
      dyslexiaFriendly: Type,
      screenReader: Volume2,
      keyboardNavigation: Keyboard,
      focusIndicators: MousePointer
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    };
    applySettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  };

<<<<<<< HEAD
=======
  // Get setting description
  const getSettingDescription = (key: anyanyanyanyanyanyanyanyanyanyanyanyanyanykeyof AccessibilitySettings)               => {
    const descriptions = {
      highContrast: 'Increases contrast for better visibility',
      largeText: 'Makes text larger and easier to read',
      reducedMotion: 'Reduces animations and motion',
      colorBlindMode: 'Adjusts colors for color blindness',
      dyslexiaFriendly: 'Uses dyslexia-friendly fonts and spacing',
      screenReader: 'Optimizes for screen readers',
      keyboardNavigation: 'Enhances keyboard navigation',
      focusIndicators: 'Shows clear focus indicators'
    };
    return descriptions[key];
  };

  // Get keyboard shortcut
  const getKeyboardShortcut = (key: anyanyanyanyanyanyanyanyanyanyanyanyanyanykeyof AccessibilitySettings)               => {
    const shortcuts = {
      highContrast: 'Ctrl/Cmd + Shift + H',
      largeText: 'Ctrl/Cmd + Shift + L',
      reducedMotion: 'None',
      colorBlindMode: 'None',
      dyslexiaFriendly: 'None',
      screenReader: 'None',
      keyboardNavigation: 'None',
      focusIndicators: 'None'
    };
    return shortcuts[key];
  };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={toggleAccessibility}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Accessibility size={24} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={toggleAccessibility}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        High Contrast
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Increase contrast for better visibility
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ highContrast: !settings.highContrast })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`High contrast ${settings.highContrast ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

<<<<<<< HEAD
                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Type size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Large Text
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Increase text size for better readability
                      </p>
                    </div>
=======
                {/* Accessibility Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Accessibility Features
                  </h3>
                  <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                    {accessibilityFeatures.map((feature)               => (
                      <div
                        key={feature.id}
                        className={`p-4 rounded-xl border transition-all ${
                          activeFeatures.has(feature.id)
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}

                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                feature.category === 'visual' ? 'bg-blue-100 text-blue-800' :
                                feature.category === 'motor' ? 'bg-green-100 text-green-800' :
                                feature.category === 'cognitive' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {feature.category}
                              </span>
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                                WCAG {feature.wcagLevel}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {feature.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>
                          </div>

                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={activeFeatures.has(feature.id)}
                              onChange={(e) => applyFeature(feature.id, e.target.checked)}
                              className="w-5 h-5 text-zion-purple rounded focus:ring-zion-purple"
                            />
                          </label>
                        </div>
                      </div>
                    ))}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  </div>
                  <button
                    onClick={() => applySettings({ largeText: !settings.largeText })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Large text ${settings.largeText ? 'enabled' : 'disabled'}`}
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
                    <Move size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Reduced Motion
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Reduce animations and motion
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Reduced motion ${settings.reducedMotion ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Keyboard size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Focus Indicators
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Show keyboard focus indicators
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ focusIndicators: !settings.focusIndicators })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicators ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Focus indicators ${settings.focusIndicators ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                >
                  Reset to Default
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Check size={16} className="text-green-500" />
                  <span>Accessibility features active</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Styles */}
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
        
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --accent-color: #0000ff;
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .reduced-motion {
          --animation-duration: 0.01ms;
        }
      `}</style>
    </>
  );
<<<<<<< HEAD
};
=======
}}}}}}}}}}}}}}}}}}}
=======
      <button
        onClick={togglePanel}
        className="fixed bottom-6 right-6 z-50 p-4 bg-zion-cyan text-zion-slate-dark rounded-full shadow-lg hover:bg-zion-cyan-light transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Ctrl/Cmd + Shift + A)"
      >
        <Settings size={24} />
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-zion-slate-light text-zion-slate-dark rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-slate/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-zion-cyan rounded-lg">
                  <Settings size={24} className="text-zion-slate-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Accessibility Settings</h2>
                  <p className="text-sm text-zion-slate/70">
                    Customize your experience for better accessibility
                  </p>
                </div>
              </div>
              <button
                onClick={closePanel}
                className="p-2 hover:bg-zion-slate/10 rounded-lg transition-colors"
                aria-label="Close accessibility settings"
              >
                <X size={20} />
              </button>
            </div>

            {/* Settings Grid */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                {Object.entries(settings).map(([key, value])               => {
                  const settingKey = key as keyof AccessibilitySettings;
                  const Icon = getSettingIcon(settingKey);
                  const description = getSettingDescription(settingKey);
                  const shortcut = getKeyboardShortcut(settingKey);
                  
                  return (
                    <div
                      key={key}
                      className="p-4 border border-zion-slate/20 rounded-lg hover:border-zion-cyan/50 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-zion-slate/10 rounded-lg">
                          <Icon size={20} className="text-zion-cyan" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => handleSettingChange(settingKey, e.target.checked)}
                                className="sr-only"
                              />
                              <div className={`
                                w-11 h-6 bg-zion-slate/30 rounded-full transition-colors
                                ${value ? 'bg-zion-cyan' : ''}
                              `}>
                                <div className={`
                                  w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out
                                  ${value ? 'translate-x-5' : 'translate-x-0.5'}
                                `} />
                              </div>
                            </label>
                          </div>
                          <p className="text-sm text-zion-slate/70 mb-2">{description}</p>
                          {shortcut !== 'None' && (
                            <p className="text-xs text-zion-cyan font-mono bg-zion-slate/10 px-2 py-1 rounded">
                              {shortcut}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zion-slate/20 bg-zion-slate/5">
              <div className="flex items-center justify-between">
                <button
                  onClick={resetSettings}
                  className="px-4 py-2 text-sm text-zion-slate/70 hover:text-zion-slate hover:bg-zion-slate/10 rounded-lg transition-colors"
                >
                  Reset All Settings
                </button>
                <div className="text-xs text-zion-slate/50">
                  Press Ctrl/Cmd + Shift + A to toggle this panel
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Announcements */}
      {currentAnnouncement && (
        <div
          className={`
            fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg
            transition-all duration-300 ease-in-out
            ${currentAnnouncement.type === 'success' ? 'bg-green-500 text-white' : ''}
            ${currentAnnouncement.type === 'warning' ? 'bg-yellow-500 text-white' : ''}
            ${currentAnnouncement.type === 'error' ? 'bg-red-500 text-white' : ''}
            ${currentAnnouncement.type === 'info' ? 'bg-zion-cyan text-zion-slate-dark' : ''}
          `}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center space-x-2">
            {currentAnnouncement.type === 'success' && <Check size={16} />}
            {currentAnnouncement.type === 'warning' && <AlertTriangle size={16} />}
            {currentAnnouncement.type === 'error' && <AlertTriangle size={16} />}
            {currentAnnouncement.type === 'info' && <Settings size={16} />}
            <span>{currentAnnouncement.message}</span>
          </div>
        </div>
      )}

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentAnnouncement?.message}
      </div>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

<<<<<<< HEAD
<<<<<<< HEAD
import { AnimatePresence, motion          } from 'framer-motion.ts';
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
import { useCallback, useEffect, useState          } from 'react.ts';
=======
import React, { useState, useEffect, useCallback, useRef } from 'react.ts';
import { motion, AnimatePresence          } from 'framer-motion.ts';
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
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Palette, 
  Monitor, 
  Smartphone,
  Keyboard,
  MousePointer,
  Settings,
  X,
  Check,
  AlertTriangle
         } from 'lucide-react.ts';

interface AccessibilitySettings {









  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  colorBlindMode: boolean;
  dyslexiaFriendly: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;









}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

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
  const applyFeature = useCallback((featureId: anyanyanyanyanyanyanyanyanystring, enabled: boolean)          => {
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

  // Memoized settings object for performance
  const settingsObject = useMemo(() => ({
    'high-contrast': settings.highContrast,
    'large-text': settings.largeText,
    'reduced-motion': settings.reducedMotion,
    'color-blind-mode': settings.colorBlindMode,
    'dyslexia-friendly': settings.dyslexiaFriendly,
    'keyboard-nav': settings.keyboardNavigation,
    'focus-visible': settings.focusIndicators
  }), [settings]);

  // Apply accessibility classes to body
  useEffect(() => {
    const body = document.body;
    
    // Remove all accessibility classes first
    Object.keys(settingsObject).forEach(key => {
      body.classList.remove(key);
    });
    
    // Add active classes
    Object.entries(settingsObject).forEach(([key, value]) => {
      if (value) {
        body.classList.add(key);
      }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    });
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings, settingsObject]);

<<<<<<< HEAD
    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        results.push({
          id: `heading-${index}`,
          issue: 'Improper heading hierarchy',
          severity: 'medium',
          element: heading.outerHTML.slice(0, 100),
          recommendation: 'Maintain proper heading hierarchy (h1 → h2 → h3)',
          wcagCriteria: '1.3.1 Info and Relationships (A)'
        });

      previousLevel = level;
    });

    // Check for form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control, index) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');
=======
  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: anyanyanyanyanyanyanyanyanyKeyboardEvent)          => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
      
      // Ctrl/Cmd + Shift + H for high contrast
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
      
      // Ctrl/Cmd + Shift + L for large text
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
      }
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

      if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
        results.push({
          id: `label-${index}`,
          issue: 'Missing label for form control',
          severity: 'high',
          element: control.outerHTML.slice(0, 100),
          recommendation: 'Add label, aria-label, or aria-labelledby',
          wcagCriteria: '3.3.2 Labels or Instructions (A)'
        });

    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;

      // Simple contrast check (this is a simplified version)
      if (color === backgroundColor) {
        results.push({
          id: `contrast-${index}`,
          issue: 'Poor color contrast',
          severity: 'medium',
          element: element.outerHTML.slice(0, 100),
          recommendation: 'Ensure sufficient color contrast (4.5:1 for normal text)',
          wcagCriteria: '1.4.3 Contrast (Minimum) (AA)'
        });

    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    interactiveElements.forEach((element, index) => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex === '-1' && !element.getAttribute('aria-hidden')) {
        results.push({
          id: anyanyanyanyanyanyanyanyany`keyboard-${index}`,
          issue: 'Element not keyboard accessible',
          severity: 'high',
          element: element.outerHTML.slice(0, 100),
          recommendation: 'Ensure element is keyboard accessible or hide with aria-hidden',
          wcagCriteria: '2.1.1 Keyboard (A)'
        });

    });

    // Simulate audit time
    await new Promise(resolve          => setTimeout(resolve, 2000));

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
      id: anyanyanyanyanyanyanyanyanyDate.now().toString(),
      message,
      type,
      timestamp: new Date()
    };
    
    setAnnouncements(prev          => [...prev, announcement]);
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
  const handleSettingChange = useCallback((key: anyanyanyanyanyanyanyanyanykeyof AccessibilitySettings, value: boolean)          => {
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
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      colorBlindMode: false,
      dyslexiaFriendly: false,
      screenReader: false,
      keyboardNavigation: false,
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
  const getSettingIcon = (key: anyanyanyanyanyanyanyanyanykeyof AccessibilitySettings)          => {
    const icons = {
      highContrast: Palette,
      largeText: Type,
      reducedMotion: Monitor,
      colorBlindMode: Eye,
      dyslexiaFriendly: Type,
      screenReader: Volume2,
      keyboardNavigation: Keyboard,
      focusIndicators: MousePointer
    };
    return icons[key];
  };

  // Get setting description
  const getSettingDescription = (key: anyanyanyanyanyanyanyanyanykeyof AccessibilitySettings)          => {
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
  const getKeyboardShortcut = (key: anyanyanyanyanyanyanyanyanykeyof AccessibilitySettings)          => {
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

  return (
    <>
      {/* Floating Accessibility Button */}
<<<<<<< HEAD
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Accessibility Settings"

        <Accessibility className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Accessibility Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zion-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Accessibility Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      WCAG 2.1 AA compliant accessibility features
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zion-slate-800 rounded-lg transition-colors"

                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <button
                    onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
                    className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"

                    <ZoomIn className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Increase Text</span>
                  </button>

                  <button
                    onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                    className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all"

                    <ZoomOut className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Decrease Text</span>
                  </button>

                  <button
                    onClick={() => setContrastMode(prev => prev === 'normal' ? 'high' : 'normal')}
                    className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all"

                    <Contrast className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Toggle Contrast</span>
                  </button>

                  <button
                    onClick={() => setReducedMotion(!reducedMotion)}
                    className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all"

                    {reducedMotion ? (
                      <Eye className="w-6 h-6 mx-auto mb-2" />
                    ) : (
                      <EyeOff className="w-6 h-6 mx-auto mb-2" />
                    )}
                    <span className="text-sm font-medium">
                      {reducedMotion ? 'Show Motion' : 'Reduce Motion'}
                    </span>
                  </button>
                </div>

                {/* Accessibility Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Accessibility Features
                  </h3>
                  <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                    {accessibilityFeatures.map((feature)          => (
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
                  </div>
                </div>

                {/* Accessibility Audit */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Accessibility Audit
                    </h3>
                    <button
                      onClick={runAccessibilityAudit}
                      disabled={isAuditing}
                      className="px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark disabled:opacity-50 transition-colors"

                      {isAuditing ? 'Auditing...' : 'Run Audit'}
                    </button>
                  </div>

                  {auditResults.length > 0 && (
                    <div className="space-y-3">
                      {auditResults.map((result) => (
                        <div
                          key={result.id}
                          className={`p-4 rounded-xl border ${
                            result.severity === 'critical' ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' :
                            result.severity === 'high' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' :
                            result.severity === 'medium' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
                            'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                          }`}

                          <div className="flex items-start space-x-3">
                            {result.severity === 'critical' || result.severity === 'high' ? (
                              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                            ) : (
                              <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                            )}
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  result.severity === 'critical' ? 'bg-red-100 text-red-800' :
                                  result.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                                  result.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {result.severity.toUpperCase()}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {result.wcagCriteria}
                                </span>
                              </div>
                              <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                                {result.issue}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {result.recommendation}
                              </p>
                              <details className="text-xs text-gray-500">
                                <summary className="cursor-pointer hover:text-gray-700">
                                  Show element
                                </summary>
                                <code className="block mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
                                  {result.element}
                                </code>
                              </details>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {auditResults.length === 0 && !isAuditing && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                      <p>No accessibility issues found! Great job!</p>
                    </div>
                  )}
                </div>

                {/* WCAG Compliance Summary */}
                <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 p-6 rounded-xl border border-zion-purple/20">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    WCAG 2.1 Compliance Status
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">A</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Level A</div>
                      <div className="text-xs text-gray-500">Basic accessibility</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">AA</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Level AA</div>
                      <div className="text-xs text-gray-500">Standard compliance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">AAA</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Level AAA</div>
                      <div className="text-xs text-gray-500">Enhanced accessibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
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
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                {Object.entries(settings).map(([key, value])          => {
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

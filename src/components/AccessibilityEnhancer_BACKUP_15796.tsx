import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Palette,
  Keyboard,
  MousePointer,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Brain
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
<<<<<<< HEAD
  highSaturation: boolean;
=======
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindFriendly: boolean;
>>>>>>> origin/main
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}
<<<<<<< HEAD
interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}
export function AccessibilityEnhancer({ 
  enabled = true, 
  showSettings = false 
}: AccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(showSettings);
=======

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'visual' | 'auditory' | 'motor' | 'cognitive';
  impact: 'high' | 'medium' | 'low';
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> origin/main
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindFriendly: false,
    fontSize: 100,
    lineHeight: 1.5,
    letterSpacing: 0,
  });
<<<<<<< HEAD
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  // Load saved settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, [applySettings]);
  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {;
      // Skip if not in keyboard navigation mode;
      if (!settings.keyboardNavigation) return;
      const target = event.target as HTMLElement;
      // Tab navigation enhancement
      if (event.key = == 'Tab') {
        const focusableElements = document.querySelectorAll(;
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        if (event.shiftKey && target = == firstElement) {;
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && target = == lastElement) {;
          event.preventDefault();
          firstElement.focus();
        }
      }
      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const currentElement = target.closest('[data-navigation-group]');
        if (currentElement) {
          event.preventDefault();
          navigateWithArrows(currentElement, event.key);
        }
      }
      // Enter/Space for interactive elements
      if (['Enter', ' '].includes(event.key)) {
        if (target.getAttribute('role') === 'button' || target.classList.contains('interactive')) {
          event.preventDefault();
          target.click();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);
  // Arrow key navigation helper
  const navigateWithArrows = (container: Element, direction: string) => {
    const focusableElements = Array.from(container.querySelectorAll(;
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    )).filter(el => !(el as HTMLElement).hidden);
    const currentIndex = focusableElements.findIndex(el => el === document.activeElement);
    let nextIndex = currentIndex;
    switch (direction) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        break;
    }
    (focusableElements[nextIndex] as HTMLElement)?.focus();
  };
  // Screen reader announcements
  const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader]);
  // Add accessibility attributes to interactive elements
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(element = > {;
      const el = element as HTMLElement;
      // Add role if missing
      if (el.tagName = == 'BUTTON' && !el.getAttribute('role')) {;
        el.setAttribute('role', 'button');
      }
      // Add aria-label for elements without text
      if (!el.textContent?.trim() && !el.getAttribute('aria-label')) {
        const title = el.getAttribute('title');
        if (title) {
          el.setAttribute('aria-label', title);
        }
      }
      // Add focus indicator
      if (settings.focusIndicator) {
        el.classList.add('focus-visible');
      }
    });
  }, [settings.focusIndicator]);
  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* High contrast mode */;
      .high-contrast {;
        --text-primary: #ffffff !important;
        --text-secondary: #e5e7eb !important;
        --bg-primary: #000000 !important;
        --bg-secondary: #1f2937 !important;
        --accent: #ffff00 !important;
        --border: #ffffff !important;
      }
      .high-contrast * {
        color: var(--text-primary) !important;
        background-color: var(--bg-primary) !important;
        border-color: var(--border) !important;
      }
      /* Large text mode */
      .large-text {
        font-size: 1.2em !important;
      }
      .large-text h1 { font-size: 2.5em !important; }
      .large-text h2 { font-size: 2em !important; }
      .large-text h3 { font-size: 1.75em !important; }
      .large-text p { font-size: 1.3em !important; }
      /* Reduced motion */
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      /* Focus indicators */
      .focus-visible:focus {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      .focus-visible:focus:not(:focus-visible) {
        outline: none !important;
      }
      /* Screen reader only */
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
      /* Skip to main content link */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }
    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--base-font-size', '18px');
      root.style.setProperty('--heading-scale', '1.3');
    } else {
      root.style.setProperty('--base-font-size', '16px');
      root.style.setProperty('--heading-scale', '1.2');
    }
=======

  const [features, setFeatures] = useState<AccessibilityFeature[]>([
    {
      id: 'skip-links',
      name: 'Skip Links',
      description: 'Quick navigation to main content areas',
      enabled: true,
      category: 'motor',
      impact: 'high'
    },
    {
      id: 'focus-indicators',
      name: 'Focus Indicators',
      description: 'Clear visual indicators for keyboard navigation',
      enabled: true,
      category: 'visual',
      impact: 'high'
    },
    {
      id: 'alt-text',
      name: 'Alt Text',
      description: 'Descriptive text for images and media',
      enabled: true,
      category: 'visual',
      impact: 'high'
    },
    {
      id: 'semantic-html',
      name: 'Semantic HTML',
      description: 'Proper HTML structure for screen readers',
      enabled: true,
      category: 'cognitive',
      impact: 'medium'
    },
    {
      id: 'color-contrast',
      name: 'Color Contrast',
      description: 'High contrast ratios for better readability',
      enabled: true,
      category: 'visual',
      impact: 'high'
    },
    {
      id: 'keyboard-shortcuts',
      name: 'Keyboard Shortcuts',
      description: 'Alternative navigation methods',
      enabled: false,
      category: 'motor',
      impact: 'medium'
    }
  ]);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

>>>>>>> origin/main
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
<<<<<<< HEAD
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation-filter', 'saturate(1.5)');
    } else {
      root.style.removeProperty('--saturation-filter');
=======
      root.classList.remove('reduced-motion');
    }

    // Color blind friendly
    if (settings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
>>>>>>> origin/main
    }
    // Font size
<<<<<<< HEAD
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);
  };
  // Save settings to localStorage
  const saveSettings = (newSettings: AccessibilitySettings) => {
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
    setSettings(newSettings);
    applySettings(newSettings);
  };
  // Update individual setting
  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K, 
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    saveSettings(newSettings);
    // Show notification
    const notification = `Updated ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
    setNotifications(prev => [...prev, notification]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== notification));
    }, 3000);
  };
  // Reset to default settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
=======
    root.style.setProperty('--text-scale', `${settings.fontSize / 100}`);
    
    // Line height
    root.style.setProperty('--line-height', settings.lineHeight.toString());
    
    // Letter spacing
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);

  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Toggle accessibility panel
      if (e.key === 'a' && e.altKey) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isOpen]);

  // Toggle feature
  const toggleFeature = useCallback((featureId: string) => {
    setFeatures(prev => prev.map(feature => 
      feature.id === featureId 
        ? { ...feature, enabled: !feature.enabled }
        : feature
    ));
  }, []);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    setSettings({
>>>>>>> origin/main
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      colorBlindFriendly: false,
      fontSize: 100,
      lineHeight: 1.5,
<<<<<<< HEAD
      letterSpacing: 0
    };
    saveSettings(defaultSettings);
    setNotifications(prev => [...prev, 'Settings reset to default']);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== 'Settings reset to default'));
    }, 3000);
  };
  // Quick accessibility actions
  const quickActions = [
    {
      name: 'High Contrast',
      icon: Contrast,
      action: () => updateSetting('highContrast', !settings.highContrast),
      active: settings.highContrast,
      description: 'Increase contrast for better readability'
    },
    {
      name: 'Large Text',
      icon: Type,
      action: () => updateSetting('largeText', !settings.largeText),
      active: settings.largeText,
      description: 'Increase text size for better readability'
    },
    {
      name: 'Reduced Motion',
      icon: EyeOff,
      action: () => updateSetting('reducedMotion', !settings.reducedMotion),
      active: settings.reducedMotion,
      description: 'Reduce animations for motion sensitivity'
    },
    {
      name: 'High Saturation',
      icon: Eye,
      action: () => updateSetting('highSaturation', !settings.highSaturation),
      active: settings.highSaturation,
      description: 'Increase color saturation'
    }
  ];
  // Font size controls
  const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32];
  useEffect(() => {
    // Show accessibility panel after page load
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (!enabled || !isVisible) return null;
  return (
    <>
      {/* Accessibility Toggle Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          aria-label="Accessibility settings"
          title="Accessibility Settings"
        >
          <Settings className="w-6 h-6" />
        </motion.button>
      </div>
      {/* Accessibility Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 left-0 w-96 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-400/20 shadow-2xl shadow-cyan-400/10 overflow-y-auto z-40"
=======
      letterSpacing: 0,
    });
  }, []);

  // Get impact color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'visual': return <Eye className="w-4 h-4" />;
      case 'auditory': return <Volume2 className="w-4 h-4" />;
      case 'motor': return <MousePointer className="w-4 h-4" />;
      case 'cognitive': return <Brain className="w-4 h-4" />;
      default: return <Accessibility className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Accessibility className="w-6 h-6 mx-auto" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl border-l border-gray-200 z-40 overflow-y-auto"
>>>>>>> origin/main
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Accessibility className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Accessibility</h2>
                </div>
                <button
<<<<<<< HEAD
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-cyan-400/20 text-cyan-400 rounded-lg transition-colors"
=======
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
>>>>>>> origin/main
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
<<<<<<< HEAD
              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.name}
                      onClick={action.action}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        action.active
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                          : 'bg-slate-800/50 border-slate-600 text-gray-300 hover:bg-slate-700/50'
                      }`}
                      title={action.description}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <action.icon className="w-5 h-5" />
                        <span className="text-xs font-medium text-center">{action.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              {/* Font Size Control */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Font Size</h3>
                <div className="flex items-center space-x-2">
                  <ZoomOut className="w-5 h-5 text-cyan-400" />
                  <div className="flex-1 grid grid-cols-4 gap-2">
                    {fontSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => updateSetting('fontSize', size)}
                        className={`p-2 rounded text-xs font-medium transition-colors ${
                          settings.fontSize === size
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <ZoomIn className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              {/* Line Height Control */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Line Height</h3>
                <div className="space-y-2">
                  {[1.2, 1.4, 1.6, 1.8, 2.0].map((height) => (
                    <button
                      key={height}
                      onClick={() => updateSetting('lineHeight', height)}
                      className={`w-full p-2 rounded text-sm transition-colors ${
                        settings.lineHeight === height
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      Line Height: {height}
                    </button>
                  ))}
                </div>
              </div>
              {/* Letter Spacing Control */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Letter Spacing</h3>
                <div className="space-y-2">
                  {[-1, 0, 1, 2, 3].map((spacing) => (
                    <button
                      key={spacing}
                      onClick={() => updateSetting('letterSpacing', spacing)}
                      className={`w-full p-2 rounded text-sm transition-colors ${
                        settings.letterSpacing === spacing
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      Letter Spacing: {spacing}px
                    </button>
                  ))}
                </div>
              </div>
              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Default
              </button>
              {/* WCAG Compliance Info */}
              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  WCAG 2.1 AA Compliant
                </h4>
                <p className="text-sm text-gray-300">
                  This website meets Web Content Accessibility Guidelines 2.1 Level AA standards for accessibility.
                </p>
              </div>
            </div>
            {/* Accessibility Scan */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-300">Accessibility Scan</h4>
                <button
                  onClick={scanForIssues}
                  disabled={isScanning}
                  className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  {isScanning ? 'Scanning...' : 'Scan Now'}
                </button>
              </div>
              {issues.length > 0 && (
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {issues.map((issue) => (
=======
              <p className="text-cyan-100 mt-2 text-sm">
                Customize your experience for better accessibility
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Quick Actions */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.highContrast
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Contrast className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">High Contrast</span>
                  </button>

                  <button
                    onClick={() => updateSetting('largeText', !settings.largeText)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.largeText
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ZoomIn className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Large Text</span>
                  </button>

                  <button
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.reducedMotion
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <EyeOff className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Reduced Motion</span>
                  </button>

                  <button
                    onClick={() => updateSetting('colorBlindFriendly', !settings.colorBlindFriendly)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.colorBlindFriendly
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Palette className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Color Blind Friendly</span>
                  </button>
                </div>
              </div>

              {/* Text Settings */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Text Settings</h3>
                
                {/* Font Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Font Size: {settings.fontSize}%
                  </label>
                  <input
                    type="range"
                    min="80"
                    max="200"
                    step="10"
                    value={settings.fontSize}
                    onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Line Height */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Line Height: {settings.lineHeight}
                  </label>
                  <input
                    type="range"
                    min="1.2"
                    max="2.0"
                    step="0.1"
                    value={settings.lineHeight}
                    onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Letter Spacing */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Letter Spacing: {settings.letterSpacing}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={settings.letterSpacing}
                    onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Navigation Settings */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">Enhanced Keyboard Navigation</span>
                    <p className="text-xs text-gray-500">Use Alt + Tab to skip to main content</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={(e) => updateSetting('screenReader', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">Screen Reader Optimized</span>
                    <p className="text-xs text-gray-500">Enhanced ARIA labels and semantic structure</p>
                  </div>
                </label>
              </div>

              {/* Accessibility Features Status */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Features Status</h3>
                <div className="space-y-2">
                  {features.map((feature) => (
>>>>>>> origin/main
                    <div
                      key={feature.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(feature.category)}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getImpactColor(feature.impact)}`}>
                              {feature.impact}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {feature.enabled ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        )}
                        <button
                          onClick={() => toggleFeature(feature.id)}
                          className={`px-3 py-1 text-xs rounded-full transition-colors ${
                            feature.enabled
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                          }`}
                        >
                          {feature.enabled ? 'Enabled' : 'Disabled'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
<<<<<<< HEAD
              )}
              {issues.length === 0 && !isScanning && (
                <div className="text-center py-4 text-gray-400 text-sm">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  No accessibility issues found
=======
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={resetToDefaults}
                  className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                >
                  Reset to Defaults
                </button>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Alt + A:</span>
                    <span>Toggle accessibility panel</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + Tab:</span>
                    <span>Skip to main content</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tab:</span>
                    <span>Navigate through elements</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enter/Space:</span>
                    <span>Activate buttons/links</span>
                  </div>
>>>>>>> origin/main
                </div>
              </div>
            </div>
<<<<<<< HEAD
            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={resetSettings}
                className="flex-1 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white text-sm rounded-lg transition-colors"
              >
                Reset All
              </button>
              <button
                onClick={() => setIsExpanded(false)}
                className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
              >
                Apply
              </button>
            </div>
=======
>>>>>>> origin/main
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {notifications.map((notification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">{notification}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
=======

      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
        <a
          href="#main-content"
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg ml-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Skip to navigation
        </a>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
>>>>>>> origin/main

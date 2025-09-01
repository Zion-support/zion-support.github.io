import React, { useEffect, useState, useCallback } from 'react';
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
  Brain,
  Type
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
<<<<<<< HEAD
  focusIndicator: boolean;
  highSaturation: boolean;
  dyslexiaFriendly: boolean;
  colorBlindMode: boolean;
=======
  colorBlindFriendly: boolean;
>>>>>>> origin/main
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
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

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enabled?: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
}

<<<<<<< HEAD
export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enabled = true,
  showControls = false,
  autoDetect = true
}) => {
=======
export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> origin/main
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    highSaturation: false,
    dyslexiaFriendly: false,
    colorBlindMode: false
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

  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Array<{ id: string; type: 'success' | 'warning' | 'info'; message: string }>>([]);

  // Auto-detect user preferences
  useEffect(() => {
    if (!enabled || !autoDetect) return;

    const mediaQueries = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      prefersHighContrast: window.matchMedia('(prefers-contrast: high)'),
      prefersLargeText: window.matchMedia('(prefers-reduced-data: reduce)')
    };

    const handleMediaChange = () => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: mediaQueries.prefersReducedMotion.matches,
        highContrast: mediaQueries.prefersHighContrast.matches,
        largeText: mediaQueries.prefersLargeText.matches
      }));
    };

    handleMediaChange();

    mediaQueries.prefersReducedMotion.addEventListener('change', handleMediaChange);
    mediaQueries.prefersHighContrast.addEventListener('change', handleMediaChange);
    mediaQueries.prefersLargeText.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueries.prefersReducedMotion.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersHighContrast.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersLargeText.removeEventListener('change', handleMediaChange);
    };
  }, [enabled, autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
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

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // High saturation
    if (settings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }

    // Dyslexia friendly
    if (settings.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }

    // Color blind mode
    if (settings.colorBlindMode) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
>>>>>>> origin/main
    }
<<<<<<< HEAD

  }, [enabled, settings]);
=======
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
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8

  // Add notification
  const addNotification = useCallback((type: 'success' | 'warning' | 'info', message: string) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, type, message }]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsedSettings }));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
<<<<<<< HEAD
=======

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
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
    }
  }, [enabled]);

  // Save settings
  useEffect(() => {
    if (!enabled) return;

    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [enabled, settings]);

  if (!enabled) return null;

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-zion-cyan text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
<<<<<<< HEAD
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-zion-slate-800 border-l border-gray-200 dark:border-zion-slate-700 shadow-xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zion-slate-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-zion-cyan" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-zion-slate-700 rounded-lg transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
=======
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
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Contrast className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">High Contrast</span>
                </div>
<<<<<<< HEAD
=======
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
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
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
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">Large Text</span>
=======
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
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
                </div>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
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
                <div className="flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">Reduced Motion</span>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">Focus Indicator</span>
                </div>
                <button
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Help */}
              <div className="pt-4 border-t border-gray-200 dark:border-zion-slate-700">
                <button
                  onClick={() => addNotification('info', 'Keyboard shortcuts: Tab to navigate, Shift+Tab to go back, Escape to close modals')}
                  className="flex items-center gap-2 text-sm text-zion-cyan hover:text-zion-cyan-dark transition-colors"
                >
                  <Info className="w-4 h-4" />
                  Keyboard Shortcuts
                </button>
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

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-colors z-40 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
        aria-label="Open accessibility panel"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className={`flex items-center gap-3 p-4 rounded-lg shadow-lg max-w-sm ${
                notification.type === 'success' ? 'bg-green-500 text-white' :
                notification.type === 'warning' ? 'bg-yellow-500 text-white' :
                'bg-blue-500 text-white'
              }`}
            >
              {notification.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {notification.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
              {notification.type === 'info' && <Info className="w-5 h-5" />}
              <span className="text-sm font-medium">{notification.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Render children */}
      {children}

      {/* CSS for accessibility features */}
      <style jsx>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        .high-contrast {
          filter: contrast(1.5);
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .high-saturation {
          filter: saturate(1.5);
        }
        
        .dyslexia-friendly {
          font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;
          line-height: 1.6;
          letter-spacing: 0.1em;
        }
        
        .color-blind-friendly {
          filter: grayscale(0.3) contrast(1.2);
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
>>>>>>> origin/main

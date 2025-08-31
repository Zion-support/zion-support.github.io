import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
  Headphones,
  RotateCcw,
  Tablet,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  Move
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'normal' | 'large' | 'extra-large';
  dyslexiaFriendly: boolean;
  zoomLevel: number;
  language: string;
}

interface EnhancedAccessibilityEnhancerProps {
  children?: React.ReactNode;
  enabled?: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  children,
  enabled = true,
  showPanel = false,
  autoDetect = true,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'normal',
    dyslexiaFriendly: false,
    zoomLevel: 100,
    language: 'en'
  });

  const [notifications, setNotifications] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'visual' | 'navigation' | 'screenReader' | 'advanced'>('visual');
  const [scanResults, setScanResults] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [showAdvancedPanel, setShowAdvancedPanel] = useState(false);
  const [customSettings, setCustomSettings] = useState({
    focusRingColor: '#0066cc',
    focusRingWidth: '3px',
    focusRingStyle: 'solid',
    highContrastTheme: 'dark',
    dyslexiaFont: 'OpenDyslexic',
    customZoomLevels: [75, 100, 125, 150, 175, 200]
  });

  const accessibilityRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  // Detect user's accessibility preferences
  const detectAccessibilityPreferences = useCallback(() => {
    if (!autoDetect) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersLargeText = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      largeText: prefersLargeText
    }));

    addNotification('Accessibility preferences detected automatically');
  }, [autoDetect]);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply visual settings
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply color blindness simulation
    if (updatedSettings.colorBlindness !== 'none') {
      document.documentElement.setAttribute('data-color-blindness', updatedSettings.colorBlindness);
    } else {
      document.documentElement.removeAttribute('data-color-blindness');
    }

    // Apply font size
    document.documentElement.setAttribute('data-font-size', updatedSettings.fontSize);

    // Apply dyslexia-friendly font
    if (updatedSettings.dyslexiaFriendly) {
      document.documentElement.classList.add('dyslexia-friendly');
    } else {
      document.documentElement.classList.remove('dyslexia-friendly');
    }

    // Apply zoom level
    document.documentElement.style.zoom = `${updatedSettings.zoomLevel}%`;

    addNotification('Accessibility settings applied');
  }, [settings]);

  // Add notification
  const addNotification = useCallback((message: string) => {
    const newNotification = `${new Date().toLocaleTimeString()}: ${message}`;
    setNotifications(prev => [...prev.slice(-4), newNotification]);
  }, []);

  // Setup keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        // Track focus for screen reader announcements
        const target = e.target as HTMLElement;
        if (target && target !== lastFocusedElementRef.current) {
          lastFocusedElementRef.current = target;
          announceToScreenReader(`Focused on ${target.textContent || target.getAttribute('aria-label') || 'element'}`);
        }
      }

      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Setup focus tracking
  const setupFocusTracking = useCallback(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && settings.focusIndicator) {
        target.style.outline = `${customSettings.focusRingWidth} ${customSettings.focusRingStyle} ${customSettings.focusRingColor}`;
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.style.outline = '';
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [settings.focusIndicator, customSettings]);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, [settings.screenReader]);

  // Scan accessibility
  const scanAccessibility = useCallback(async () => {
    setIsScanning(true);
    
    try {
      // Simulate accessibility scan
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const results = {
        score: 85,
        issues: [
          { type: 'contrast', severity: 'medium', message: 'Some text may have insufficient contrast' },
          { type: 'alt-text', severity: 'low', message: 'Some images missing alt text' },
          { type: 'heading-structure', severity: 'low', message: 'Heading hierarchy could be improved' }
        ],
        recommendations: [
          'Increase contrast for better readability',
          'Add alt text to all images',
          'Ensure proper heading structure'
        ]
      };
      
      setScanResults(results);
      addNotification('Accessibility scan completed');
    } catch (error) {
      addNotification('Accessibility scan failed');
    } finally {
      setIsScanning(false);
    }
  }, [addNotification]);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    const newValue = !settings[key];
    applySettings({ [key]: newValue });
  }, [settings, applySettings]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none',
      fontSize: 'normal',
      dyslexiaFriendly: false,
      zoomLevel: 100,
      language: 'en'
    };
    
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    addNotification('Settings reset to defaults');
  }, [applySettings, addNotification]);

  // Effects
  useEffect(() => {
    if (!enabled) return;

    detectAccessibilityPreferences();
    const cleanupKeyboard = setupKeyboardNavigation();
    const cleanupFocus = setupFocusTracking();

    return () => {
      cleanupKeyboard?.();
      cleanupFocus?.();
    };
  }, [enabled, detectAccessibilityPreferences, setupKeyboardNavigation, setupFocusTracking]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle accessibility panel"
      >
        <Accessibility size={24} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={accessibilityRef}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Accessibility size={20} />
                Accessibility
              </h2>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Close accessibility panel"
              >
                <X size={18} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {(['visual', 'navigation', 'screenReader', 'advanced'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Visual Tab */}
              {activeTab === 'visual' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">High Contrast</span>
                    <button
                      onClick={() => toggleSetting('highContrast')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Large Text</span>
                    <button
                      onClick={() => toggleSetting('largeText')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Reduced Motion</span>
                    <button
                      onClick={() => toggleSetting('reducedMotion')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Font Size</label>
                    <select
                      value={settings.fontSize}
                      onChange={(e) => applySettings({ fontSize: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="normal">Normal</option>
                      <option value="large">Large</option>
                      <option value="extra-large">Extra Large</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Color Blindness</label>
                    <select
                      value={settings.colorBlindness}
                      onChange={(e) => applySettings({ colorBlindness: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="none">None</option>
                      <option value="protanopia">Protanopia (Red-Blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dyslexia Friendly</span>
                    <button
                      onClick={() => toggleSetting('dyslexiaFriendly')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.dyslexiaFriendly ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.dyslexiaFriendly ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Zoom Level: {settings.zoomLevel}%</label>
                    <input
                      type="range"
                      min="75"
                      max="200"
                      step="25"
                      value={settings.zoomLevel}
                      onChange={(e) => applySettings({ zoomLevel: parseInt(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Tab */}
              {activeTab === 'navigation' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                    <button
                      onClick={() => toggleSetting('keyboardNavigation')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Focus Indicators</span>
                    <button
                      onClick={() => toggleSetting('focusIndicator')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Focus Ring Color</label>
                    <input
                      type="color"
                      value={customSettings.focusRingColor}
                      onChange={(e) => setCustomSettings(prev => ({ ...prev, focusRingColor: e.target.value }))}
                      className="w-full h-10 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Focus Ring Width</label>
                    <select
                      value={customSettings.focusRingWidth}
                      onChange={(e) => setCustomSettings(prev => ({ ...prev, focusRingWidth: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="1px">1px</option>
                      <option value="2px">2px</option>
                      <option value="3px">3px</option>
                      <option value="4px">4px</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Screen Reader Tab */}
              {activeTab === 'screenReader' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Screen Reader Support</span>
                    <button
                      onClick={() => toggleSetting('screenReader')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
                    <select
                      value={settings.language}
                      onChange={(e) => applySettings({ language: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="pt">Portuguese</option>
                    </select>
                  </div>

                  <button
                    onClick={scanAccessibility}
                    disabled={isScanning}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isScanning ? 'Scanning...' : 'Scan Accessibility'}
                  </button>

                  {scanResults && (
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Scan Results</h4>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <p>Score: {scanResults.score}/100</p>
                        <p className="mt-2">Issues found: {scanResults.issues.length}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Advanced Tab */}
              {activeTab === 'advanced' && (
                <div className="space-y-4">
                  <button
                    onClick={resetToDefaults}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Reset to Defaults
                  </button>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Notifications</label>
                    <div className="max-h-32 overflow-y-auto space-y-1">
                      {notifications.map((notification, index) => (
                        <div key={index} className="text-xs text-gray-500 dark:text-gray-400 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                          {notification}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%);
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .dyslexia-friendly {
          font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;
          line-height: 1.5;
          letter-spacing: 0.1em;
        }
        
        [data-color-blindness="protanopia"] {
          filter: url('#protanopia-filter');
        }
        
        [data-color-blindness="deuteranopia"] {
          filter: url('#deuteranopia-filter');
        }
        
        [data-color-blindness="tritanopia"] {
          filter: url('#tritanopia-filter');
        }
        
        [data-font-size="large"] {
          font-size: 1.2em;
        }
        
        [data-font-size="extra-large"] {
          font-size: 1.4em;
        }
        
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
      `}</style>
    </>
  );
};
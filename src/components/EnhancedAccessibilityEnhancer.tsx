import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Monitor,
  Type,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Settings,
  Palette,
  Smartphone,
  Globe,
  Languages,
  Keyboard,
  MousePointer,
  Braille,
  Headphones,
  Speech,
  Highlighter,
  Focus,
  Navigation,
  Shield,
  CheckSquare,
  Square
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
  focusIndicator: boolean;
  keyboardNavigation: boolean;
  altText: boolean;
  ariaLabels: boolean;
  highContrastMode: 'default' | 'high-contrast' | 'dark' | 'light';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  lineSpacing: 'tight' | 'normal' | 'relaxed';
  letterSpacing: 'tight' | 'normal' | 'wide';
  cursorSize: 'small' | 'medium' | 'large';
  focusRing: 'default' | 'thick' | 'colored';
  animations: 'all' | 'reduced' | 'none';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export function EnhancedAccessibilityEnhancer({
  enabled = true,
  showPanel = false,
  onSettingsChange
}: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    colorBlind: false,
    dyslexia: false,
    focusIndicator: false,
    keyboardNavigation: false,
    altText: false,
    ariaLabels: false,
    highContrastMode: 'default',
    fontSize: 'medium',
    lineSpacing: 'normal',
    letterSpacing: 'normal',
    cursorSize: 'medium',
    focusRing: 'default',
    animations: 'all'
  });

  const [currentFontSize, setCurrentFontSize] = useState(16);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [language, setLanguage] = useState('en');
  const [accessibilityScore, setAccessibilityScore] = useState(0);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      body.style.setProperty('--zion-bg', '#000000');
      body.style.setProperty('--zion-text', '#ffffff');
      body.style.setProperty('--zion-primary', '#ffff00');
      body.style.setProperty('--zion-secondary', '#00ffff');
    } else {
      root.classList.remove('high-contrast');
      body.style.removeProperty('--zion-bg');
      body.style.removeProperty('--zion-text');
      body.style.removeProperty('--zion-primary');
      body.style.removeProperty('--zion-secondary');
    }

    // Font size
    const fontSizeMap = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'extra-large': '20px'
    };
    root.style.fontSize = fontSizeMap[newSettings.fontSize];
    setCurrentFontSize(parseInt(fontSizeMap[newSettings.fontSize]));

    // Line spacing
    const lineSpacingMap = {
      'tight': '1.2',
      'normal': '1.5',
      'relaxed': '2.0'
    };
    root.style.setProperty('--line-height', lineSpacingMap[newSettings.lineSpacing]);

    // Letter spacing
    const letterSpacingMap = {
      'tight': '0.5px',
      'normal': '1px',
      'wide': '2px'
    };
    root.style.setProperty('--letter-spacing', letterSpacingMap[newSettings.letterSpacing]);

    // Cursor size
    const cursorSizeMap = {
      'small': 'default',
      'medium': 'pointer',
      'large': 'crosshair'
    };
    body.style.cursor = cursorSizeMap[newSettings.cursorSize];

    // Focus ring
    const focusRingMap = {
      'default': '2px solid #3b82f6',
      'thick': '4px solid #3b82f6',
      'colored': '3px solid #ef4444'
    };
    root.style.setProperty('--focus-ring', focusRingMap[newSettings.focusRing]);

    // Animations
    if (newSettings.animations === 'reduced') {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else if (newSettings.animations === 'none') {
      root.style.setProperty('--reduced-motion', 'no-preference');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.setAttribute('aria-live', 'polite');
      root.setAttribute('aria-atomic', 'true');
    } else {
      root.removeAttribute('aria-live');
      root.removeAttribute('aria-atomic');
    }

    // Color blind support
    if (newSettings.colorBlind) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.classList.add('dyslexia-friendly');
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
    } else {
      root.classList.remove('dyslexia-friendly');
      root.style.fontFamily = '';
    }

    // Focus indicators
    if (newSettings.focusIndicator) {
      root.classList.add('show-focus-indicators');
    } else {
      root.classList.remove('show-focus-indicators');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation-mode');
      document.addEventListener('keydown', handleKeyboardNavigation);
    } else {
      root.classList.remove('keyboard-navigation-mode');
      document.removeEventListener('keydown', handleKeyboardNavigation);
    }

    // Alt text and ARIA labels
    if (newSettings.altText || newSettings.ariaLabels) {
      enhanceImagesAndElements(newSettings.altText, newSettings.ariaLabels);
    }

    // Update active features
    const features = [];
    if (newSettings.highContrast) features.push('High Contrast');
    if (newSettings.largeText) features.push('Large Text');
    if (newSettings.reducedMotion) features.push('Reduced Motion');
    if (newSettings.screenReader) features.push('Screen Reader');
    if (newSettings.colorBlind) features.push('Color Blind Support');
    if (newSettings.dyslexia) features.push('Dyslexia Support');
    if (newSettings.focusIndicator) features.push('Focus Indicators');
    if (newSettings.keyboardNavigation) features.push('Keyboard Navigation');
    setActiveFeatures(features);

    // Apply feature-specific settings
    const feature = features.find(f => f.id === featureId);
    if (feature) {
      const newSettings = { ...settings };
      
      switch (featureId) {
        case 'high-contrast':
          newSettings.highContrast = !newSettings.highContrast;
          break;
        case 'large-text':
          newSettings.largeText = !newSettings.largeText;
          break;
        case 'reduced-motion':
          newSettings.reducedMotion = !newSettings.reducedMotion;
          break;
        case 'screen-reader':
          newSettings.screenReader = !newSettings.screenReader;
          break;
        case 'keyboard-navigation':
          newSettings.keyboardNavigation = !newSettings.keyboardNavigation;
          break;
        case 'focus-indicators':
          newSettings.focusIndicators = !newSettings.focusIndicators;
          break;
        case 'color-blind-support':
          newSettings.colorBlindSupport = !newSettings.colorBlindSupport;
          break;
        case 'dyslexia-friendly':
          newSettings.dyslexiaFriendly = !newSettings.dyslexiaFriendly;
          break;
      }
      
      applyAccessibilitySettings(newSettings);
    }
  }, [features, settings, applyAccessibilitySettings]);

  // Calculate WCAG compliance score
  useEffect(() => {
    const scores = { A: 0, AA: 0, AAA: 0 };
    const totalFeatures = features.length;
    
    features.forEach(feature => {
      if (feature.enabled) {
        scores[feature.wcagLevel]++;
      }
    });

    setWcagScore({
      A: Math.round((scores.A / totalFeatures) * 100),
      AA: Math.round((scores.AA / totalFeatures) * 100),
      AAA: Math.round((scores.AAA / totalFeatures) * 100)
    });
  }, [features]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to open accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(true);
      }
      
      // Escape to close
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      
      // Tab navigation enhancement
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
        setTimeout(() => {
          document.body.classList.remove('keyboard-navigation');
        }, 1000);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Enhance images and elements with alt text and ARIA labels
  const enhanceImagesAndElements = useCallback((altText: boolean, ariaLabels: boolean) => {
    if (altText) {
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt) {
          img.alt = `Image ${index + 1}`;
        }
      });
    }

    if (ariaLabels) {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      const links = document.querySelectorAll('a');
      links.forEach((link, index) => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });
    }
  }, []);

  // Calculate accessibility score
  const calculateAccessibilityScore = useCallback((currentSettings: AccessibilitySettings) => {
    let score = 0;
    const totalFeatures = 10;

    if (currentSettings.highContrast) score++;
    if (currentSettings.largeText) score++;
    if (currentSettings.reducedMotion) score++;
    if (currentSettings.screenReader) score++;
    if (currentSettings.colorBlind) score++;
    if (currentSettings.dyslexia) score++;
    if (currentSettings.focusIndicator) score++;
    if (currentSettings.keyboardNavigation) score++;
    if (currentSettings.altText) score++;
    if (currentSettings.ariaLabels) score++;

    const percentage = Math.round((score / totalFeatures) * 100);
    setAccessibilityScore(percentage);
  }, []);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      colorBlind: false,
      dyslexia: false,
      focusIndicator: false,
      keyboardNavigation: false,
      altText: false,
      ariaLabels: false,
      highContrastMode: 'default',
      fontSize: 'medium',
      lineSpacing: 'normal',
      letterSpacing: 'normal',
      cursorSize: 'medium',
      focusRing: 'default',
      animations: 'all'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  }, [applySettings]);

  // Toggle voice recognition
  const toggleVoiceRecognition = useCallback(() => {
    if (!voiceRecognition) return;
    
    if (isListening) {
      voiceRecognition.stop();
      setIsListening(false);
    } else {
      voiceRecognition.start();
      setIsListening(true);
    }
  }, [voiceRecognition, isListening]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.div
        className="fixed bottom-20 right-4 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-zion-purple to-zion-pink text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open Accessibility Settings"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Accessibility Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Accessibility className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Accessibility Center</h2>
                      <p className="text-zion-slate-100">Customize your experience for better accessibility</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
                      className="text-white hover:text-zion-slate-100 transition-colors flex items-center space-x-2"
                      aria-label="Show keyboard shortcuts"
                    >
                      <Keyboard className="w-5 h-5" />
                      <span className="text-sm">Shortcuts</span>
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-zion-slate-100 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Settings */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Visual Settings */}
                    <div className="bg-zion-slate-50 dark:bg-zion-slate-800 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-zion-slate-900 dark:text-white mb-4 flex items-center">
                        <Palette className="w-5 h-5 mr-2 text-zion-purple" />
                        Visual Settings
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.highContrast}
                              onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                              className="w-4 h-4 text-zion-purple rounded focus:ring-zion-purple"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">High Contrast</span>
                          </label>
                        </div>

                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.largeText}
                              onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                              className="w-4 h-4 text-zion-purple rounded focus:ring-zion-purple"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">Large Text</span>
                          </label>
                        </div>

                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.colorBlind}
                              onChange={(e) => handleSettingChange('colorBlind', e.target.checked)}
                              className="w-4 h-4 text-zion-purple rounded focus:ring-zion-purple"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">Color Blind Support</span>
                          </label>
                        </div>

                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.dyslexia}
                              onChange={(e) => handleSettingChange('dyslexia', e.target.checked)}
                              className="w-4 h-4 text-zion-purple rounded focus:ring-zion-purple"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">Dyslexia Support</span>
                          </label>
                        </div>
                      </div>

                      {/* Font Size Control */}
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                          Font Size
                        </label>
                        <div className="flex space-x-2">
                          {(['small', 'medium', 'large', 'extra-large'] as const).map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSettingChange('fontSize', size)}
                              className={`px-3 py-1 rounded text-sm ${
                                settings.fontSize === size
                                  ? 'bg-zion-purple text-white'
                                  : 'bg-zion-slate-200 dark:bg-zion-slate-700 text-zion-slate-700 dark:text-zion-slate-300'
                              }`}
                            >
                              {size.charAt(0).toUpperCase() + size.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Interaction Settings */}
                    <div className="bg-zion-slate-50 dark:bg-zion-slate-800 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-zion-slate-900 dark:text-white mb-4 flex items-center">
                        <MousePointer className="w-5 h-5 mr-2 text-zion-cyan" />
                        Interaction Settings
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.reducedMotion}
                              onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                              className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">Reduced Motion</span>
                          </label>
                        </div>

                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.focusIndicator}
                              onChange={(e) => handleSettingChange('focusIndicator', e.target.checked)}
                              className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">Focus Indicators</span>
                          </label>
                        </div>

                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.keyboardNavigation}
                              onChange={(e) => handleSettingChange('keyboardNavigation', e.target.checked)}
                              className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">Keyboard Navigation</span>
                          </label>
                        </div>

                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.screenReader}
                              onChange={(e) => handleSettingChange('screenReader', e.target.checked)}
                              className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">Screen Reader</span>
                          </label>
                        </div>
                      </div>

                      {/* Cursor Size Control */}
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
                          Cursor Size
                        </label>
                        <div className="flex space-x-2">
                          {(['small', 'medium', 'large'] as const).map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSettingChange('cursorSize', size)}
                              className={`px-3 py-1 rounded text-sm ${
                                settings.cursorSize === size
                                  ? 'bg-zion-cyan text-white'
                                  : 'bg-zion-slate-200 dark:bg-zion-slate-700 text-zion-slate-700 dark:text-zion-slate-300'
                              }`}
                            >
                              {size.charAt(0).toUpperCase() + size.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content Enhancement */}
                    <div className="bg-zion-slate-50 dark:bg-zion-slate-800 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-zion-slate-900 dark:text-white mb-4 flex items-center">
                        <CheckSquare className="w-5 h-5 mr-2 text-zion-green" />
                        Content Enhancement
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.altText}
                              onChange={(e) => handleSettingChange('altText', e.target.checked)}
                              className="w-4 h-4 text-zion-green rounded focus:ring-zion-green"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">Alt Text for Images</span>
                          </label>
                        </div>

                        <div>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.ariaLabels}
                              onChange={(e) => handleSettingChange('ariaLabels', e.target.checked)}
                              className="w-4 h-4 text-zion-green rounded focus:ring-zion-green"
                            />
                            <span className="text-zion-slate-700 dark:text-zion-slate-300">ARIA Labels</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Accessibility Score */}
                    <div className="bg-gradient-to-br from-zion-green to-zion-cyan p-6 rounded-lg text-white">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">{accessibilityScore}%</div>
                        <div className="text-sm opacity-90">Accessibility Score</div>
                        <div className="mt-4">
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div 
                              className="bg-white h-2 rounded-full transition-all duration-500"
                              style={{ width: `${accessibilityScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Active Features */}
                    <div className="bg-zion-slate-50 dark:bg-zion-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-zion-slate-900 dark:text-white mb-3">Active Features</h4>
                      {activeFeatures.length > 0 ? (
                        <div className="space-y-2">
                          {activeFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm text-zion-slate-600 dark:text-zion-slate-400">
                              <CheckCircle className="w-4 h-4 text-zion-green" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-zion-slate-500 dark:text-zion-slate-500">No features active</p>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-zion-slate-50 dark:bg-zion-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-zion-slate-900 dark:text-white mb-3">Quick Actions</h4>
                      <div className="space-y-2">
                        <button
                          onClick={resetToDefaults}
                          className="w-full px-3 py-2 bg-zion-slate-200 dark:bg-zion-slate-700 text-zion-slate-700 dark:text-zion-slate-300 rounded text-sm hover:bg-zion-slate-300 dark:hover:bg-zion-slate-600 transition-colors"
                        >
                          Reset to Defaults
                        </button>
                        <button
                          onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                          className="w-full px-3 py-2 bg-zion-purple text-white rounded text-sm hover:bg-zion-purple/80 transition-colors"
                        >
                          Toggle High Contrast
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Shortcuts Panel */}
                <AnimatePresence>
                  {showKeyboardShortcuts && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 bg-zion-slate-50 dark:bg-zion-slate-800 p-6 rounded-lg overflow-hidden"
                    >
                      <h3 className="text-lg font-semibold text-zion-slate-900 dark:text-white mb-4">Keyboard Shortcuts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-zion-slate-600 dark:text-zion-slate-400">Open Accessibility Panel</span>
                            <kbd className="px-2 py-1 bg-zion-slate-200 dark:bg-zion-slate-700 rounded text-xs">Ctrl/Cmd + Shift + A</kbd>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zion-slate-600 dark:text-zion-slate-400">Toggle High Contrast</span>
                            <kbd className="px-2 py-1 bg-zion-slate-200 dark:bg-zion-slate-700 rounded text-xs">Ctrl/Cmd + Shift + H</kbd>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zion-slate-600 dark:text-zion-slate-400">Toggle Large Text</span>
                            <kbd className="px-2 py-1 bg-zion-slate-200 dark:bg-zion-slate-700 rounded text-xs">Ctrl/Cmd + Shift + L</kbd>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-zion-slate-600 dark:text-zion-slate-400">Toggle Reduced Motion</span>
                            <kbd className="px-2 py-1 bg-zion-slate-200 dark:bg-zion-slate-700 rounded text-xs">Ctrl/Cmd + Shift + R</kbd>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zion-slate-600 dark:text-zion-slate-400">Navigate with Arrow Keys</span>
                            <kbd className="px-2 py-1 bg-zion-slate-200 dark:bg-zion-slate-700 rounded text-xs">Arrow Keys</kbd>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zion-slate-600 dark:text-zion-slate-400">Activate Element</span>
                            <kbd className="px-2 py-1 bg-zion-slate-200 dark:bg-zion-slate-700 rounded text-xs">Enter/Space</kbd>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
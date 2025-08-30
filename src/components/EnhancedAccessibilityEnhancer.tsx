import React, { useState, useEffect, useCallback } from 'react';
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
  Languages
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
    ariaLabels: false
  });

  const [currentFontSize, setCurrentFontSize] = useState(16);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [language, setLanguage] = useState('en');
  const [accessibilityScore, setAccessibilityScore] = useState(0);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--accent-color', '#ff0000');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      setCurrentFontSize(18);
    } else {
      root.style.fontSize = '16px';
      setCurrentFontSize(16);
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #0066cc');
    } else {
      root.style.removeProperty('--focus-outline');
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

    // Screen reader enhancements
    if (newSettings.screenReader) {
      enhanceScreenReaderSupport();
    }

    // Alt text enhancements
    if (newSettings.altText) {
      enhanceAltText();
    }

    // ARIA labels
    if (newSettings.ariaLabels) {
      enhanceAriaLabels();
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      enhanceKeyboardNavigation();
    }

    setSettings(newSettings);
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }

    // Calculate accessibility score
    calculateAccessibilityScore(newSettings);
  }, [onSettingsChange]);

  // Enhance screen reader support
  const enhanceScreenReaderSupport = () => {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content landmark
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }
  };

  // Enhance alt text for images
  const enhanceAltText = () => {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt) {
        img.alt = `Image ${index + 1}`;
      }
    });
  };

  // Enhance ARIA labels
  const enhanceAriaLabels = () => {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach((link, index) => {
      if (!link.textContent?.trim()) {
        link.setAttribute('aria-label', `Link ${index + 1}`);
      }
    });
  };

  // Enhance keyboard navigation
  const enhanceKeyboardNavigation = () => {
    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);
  };

  // Handle keyboard navigation
  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    switch (event.key) {
      case 'Tab':
        // Tab navigation is handled by browser
        break;
      case 'Enter':
      case ' ':
        // Activate focused element
        const focusedElement = document.activeElement as HTMLElement;
        if (focusedElement && focusedElement.click) {
          event.preventDefault();
          focusedElement.click();
        }
        break;
      case 'Escape':
        // Close modals or panels
        setIsOpen(false);
        break;
    }
  };

  // Calculate accessibility score
  const calculateAccessibilityScore = (currentSettings: AccessibilitySettings) => {
    let score = 0;
    const totalSettings = Object.keys(currentSettings).length;

    Object.values(currentSettings).forEach(enabled => {
      if (enabled) score++;
    });

    const percentage = Math.round((score / totalSettings) * 100);
    setAccessibilityScore(percentage);
  };

  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(currentFontSize + 2, 24);
    setCurrentFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(currentFontSize - 2, 12);
    setCurrentFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const resetFontSize = () => {
    setCurrentFontSize(16);
    document.documentElement.style.fontSize = '16px';
  };

  // Theme controls
  const changeTheme = (theme: 'light' | 'dark' | 'auto') => {
    setCurrentTheme(theme);
    const root = document.documentElement;
    
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }
  };

  // Language support
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  // Initialize accessibility features
  useEffect(() => {
    if (enabled) {
      // Apply initial settings
      applySettings(settings);
      
      // Add CSS variables for accessibility
      const style = document.createElement('style');
      style.textContent = `
        :root {
          --focus-outline: 2px solid #0066cc;
          --reduced-motion: no-preference;
        }
        
        .high-contrast {
          --text-color: #000000 !important;
          --bg-color: #ffffff !important;
          --accent-color: #ff0000 !important;
        }
        
        .color-blind-friendly {
          filter: grayscale(100%);
        }
        
        .dyslexia-friendly {
          font-family: OpenDyslexic, Arial, sans-serif;
          line-height: 1.5;
          letter-spacing: 0.1em;
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
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      // Cleanup
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Accessibility Panel"
      >
        <Accessibility className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Accessibility Panel Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Accessibility Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Customize your experience for better accessibility
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Visual Accessibility */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Visual Accessibility
                    </h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={(e) => applySettings({ ...settings, highContrast: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>High Contrast Mode</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.largeText}
                          onChange={(e) => applySettings({ ...settings, largeText: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Large Text</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.colorBlind}
                          onChange={(e) => applySettings({ ...settings, colorBlind: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Color Blind Friendly</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.focusIndicator}
                          onChange={(e) => applySettings({ ...settings, focusIndicator: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Enhanced Focus Indicators</span>
                      </label>
                    </div>

                    {/* Font Size Controls */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Font Size</h4>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={decreaseFontSize}
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center">{currentFontSize}px</span>
                        <button
                          onClick={increaseFontSize}
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                        <button
                          onClick={resetFontSize}
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Interaction & Navigation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Smartphone className="w-5 h-5 mr-2" />
                      Interaction & Navigation
                    </h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={(e) => applySettings({ ...settings, reducedMotion: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Reduced Motion</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={(e) => applySettings({ ...settings, keyboardNavigation: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Enhanced Keyboard Navigation</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.screenReader}
                          onChange={(e) => applySettings({ ...settings, screenReader: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Screen Reader Support</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.altText}
                          onChange={(e) => applySettings({ ...settings, altText: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Enhanced Alt Text</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.ariaLabels}
                          onChange={(e) => applySettings({ ...settings, ariaLabels: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>ARIA Labels</span>
                      </label>
                    </div>

                    {/* Theme Selection */}
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Theme</h4>
                      <div className="flex space-x-2">
                        {(['light', 'dark', 'auto'] as const).map((theme) => (
                          <button
                            key={theme}
                            onClick={() => changeTheme(theme)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              currentTheme === theme
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            {theme === 'light' && <Sun className="w-4 h-4 inline mr-1" />}
                            {theme === 'dark' && <Moon className="w-4 h-4 inline mr-1" />}
                            {theme === 'auto' && <Monitor className="w-4 h-4 inline mr-1" />}
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessibility Score */}
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Accessibility Score</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your current accessibility level
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${
                        accessibilityScore >= 80 ? 'text-green-600' :
                        accessibilityScore >= 60 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {accessibilityScore}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {accessibilityScore >= 80 ? 'Excellent' :
                         accessibilityScore >= 60 ? 'Good' :
                         accessibilityScore >= 40 ? 'Fair' : 'Needs Improvement'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        accessibilityScore >= 80 ? 'bg-green-500' :
                        accessibilityScore >= 60 ? 'bg-yellow-500' :
                        accessibilityScore >= 40 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${accessibilityScore}%` }}
                    />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => applySettings({
                      highContrast: true,
                      largeText: true,
                      reducedMotion: true,
                      screenReader: true,
                      colorBlind: false,
                      dyslexia: false,
                      focusIndicator: true,
                      keyboardNavigation: true,
                      altText: true,
                      ariaLabels: true
                    })}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Apply All Accessibility Features
                  </button>
                  
                  <button
                    onClick={() => applySettings({
                      highContrast: false,
                      largeText: false,
                      reducedMotion: false,
                      screenReader: false,
                      colorBlind: false,
                      dyslexia: false,
                      focusIndicator: false,
                      keyboardNavigation: false,
                      altText: false,
                      ariaLabels: false
                    })}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Reset to Default
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
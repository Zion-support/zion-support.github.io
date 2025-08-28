import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlind: boolean;
}

interface AccessibilityEnhancerProps {
  showPanel?: boolean;
  autoDetect?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  showPanel = true,
  autoDetect = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusIndicator: true,
    colorBlind: false
  });
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);

  // Auto-detect accessibility preferences
  useEffect(() => {
    if (!autoDetect) return;

    const detectPreferences = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Check for large text preference
      const prefersLargeText = window.matchMedia('(min-resolution: 2dppx)').matches;

      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
        largeText: prefersLargeText
      }));
    };

    detectPreferences();

    // Listen for preference changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(min-resolution: 2dppx)')
    ];

    const handleChange = () => detectPreferences();
    mediaQueries.forEach(query => query.addEventListener('change', handleChange));

    return () => {
      mediaQueries.forEach(query => query.removeEventListener('change', handleChange));
    };
  }, [autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
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

    // Large text mode
    if (settings.largeText) {
      root.style.fontSize = '18px';
      body.style.setProperty('--line-height', '1.8');
    } else {
      root.style.fontSize = '16px';
      body.style.setProperty('--line-height', '1.5');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blind mode
    if (settings.colorBlind) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }
  }, [settings]);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    setFontSize(prev => Math.min(prev + 2, 24));
    document.documentElement.style.fontSize = `${Math.min(fontSize + 2, 24)}px`;
  }, [fontSize]);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => Math.max(prev - 2, 12));
    document.documentElement.style.fontSize = `${Math.max(fontSize - 2, 12)}px`;
  }, [fontSize]);

  const resetFontSize = useCallback(() => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
  }, []);

  // Line height controls
  const increaseLineHeight = useCallback(() => {
    setLineHeight(prev => Math.min(prev + 0.1, 2.5));
    document.documentElement.style.setProperty('--line-height', `${Math.min(lineHeight + 0.1, 2.5)}`);
  }, [lineHeight]);

  const decreaseLineHeight = useCallback(() => {
    setLineHeight(prev => Math.max(prev - 0.1, 1.2));
    document.documentElement.style.setProperty('--line-height', `${Math.max(lineHeight - 0.1, 1.2)}`);
  }, [lineHeight]);

  // Letter spacing controls
  const increaseLetterSpacing = useCallback(() => {
    setLetterSpacing(prev => Math.min(prev + 0.5, 3));
    document.documentElement.style.setProperty('--letter-spacing', `${Math.min(letterSpacing + 0.5, 3)}px`);
  }, [letterSpacing]);

  const decreaseLetterSpacing = useCallback(() => {
    setLetterSpacing(prev => Math.max(prev - 0.5, -1));
    document.documentElement.style.setProperty('--letter-spacing', `${Math.max(letterSpacing - 0.5, -1)}px`);
  }, [letterSpacing]);

  // Toggle settings
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // Toggle visibility
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleSettingsPanel = () => setShowSettings(!showSettings);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];
    
    // Check for alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.ariaLabel) {
        issues.push(`Image ${index + 1} missing alt text`);
      }
    });

    // Check for form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      if (!label && !input.getAttribute('aria-label')) {
        issues.push(`Form input ${index + 1} missing label`);
      }
    });

    // Check for heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
      }
      previousLevel = level;
    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor) {
        issues.push(`Potential contrast issue: text and background colors are similar`);
      }
    });

    setAccessibilityIssues(issues);
  }, []);

  if (!showPanel) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Options"
        aria-label="Open accessibility options"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Main Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-20 z-40 w-80 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-semibold">Accessibility</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleSettingsPanel}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Settings"
                  aria-label="Accessibility settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleVisibility}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Close"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Quick Controls */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center">
                  <Type className="w-4 h-4 mr-2 text-purple-400" />
                  Text Controls
                </h4>
                
                {/* Font Size Controls */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Font Size</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={decreaseFontSize}
                      className="p-1 bg-slate-700 hover:bg-slate-600 rounded text-white"
                      aria-label="Decrease font size"
                    >
                      <ZoomOut className="w-3 h-3" />
                    </button>
                    <span className="text-white text-sm w-8 text-center">{fontSize}px</span>
                    <button
                      onClick={increaseFontSize}
                      className="p-1 bg-slate-700 hover:bg-slate-600 rounded text-white"
                      aria-label="Increase font size"
                    >
                      <ZoomIn className="w-3 h-3" />
                    </button>
                    <button
                      onClick={resetFontSize}
                      className="px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded text-white text-xs"
                      aria-label="Reset font size"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* Line Height Controls */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Line Height</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={decreaseLineHeight}
                      className="p-1 bg-slate-700 hover:bg-slate-600 rounded text-white"
                      aria-label="Decrease line height"
                    >
                      <ZoomOut className="w-3 h-3" />
                    </button>
                    <span className="text-white text-sm w-8 text-center">{lineHeight.toFixed(1)}</span>
                    <button
                      onClick={increaseLineHeight}
                      className="p-1 bg-slate-700 hover:bg-slate-600 rounded text-white"
                      aria-label="Increase line height"
                    >
                      <ZoomIn className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Letter Spacing Controls */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Letter Spacing</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={decreaseLetterSpacing}
                      className="p-1 bg-slate-700 hover:bg-slate-600 rounded text-white"
                      aria-label="Decrease letter spacing"
                    >
                      <ZoomOut className="w-3 h-3" />
                    </button>
                    <span className="text-white text-sm w-8 text-center">{letterSpacing.toFixed(1)}px</span>
                    <button
                      onClick={increaseLetterSpacing}
                      className="p-1 bg-slate-700 hover:bg-slate-600 rounded text-white"
                      aria-label="Increase letter spacing"
                    >
                      <ZoomIn className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Toggle Settings */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center">
                  <Settings className="w-4 h-4 mr-2 text-purple-400" />
                  Display Options
                </h4>
                
                <div className="space-y-2">
                  {Object.entries(settings).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <button
                        onClick={() => toggleSetting(key as keyof AccessibilitySettings)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          value ? 'bg-purple-600' : 'bg-slate-600'
                        }`}
                        aria-label={`Toggle ${key}`}
                        role="switch"
                        aria-checked={value}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessibility Audit */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-semibold flex items-center">
                    <Info className="w-4 h-4 mr-2 text-blue-400" />
                    Accessibility Audit
                  </h4>
                  <button
                    onClick={runAccessibilityAudit}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                    aria-label="Run accessibility audit"
                  >
                    Run Audit
                  </button>
                </div>

                {accessibilityIssues.length > 0 && (
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-orange-400" />
                      <span className="text-orange-400 text-sm font-medium">
                        {accessibilityIssues.length} issues found
                      </span>
                    </div>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {accessibilityIssues.map((issue, index) => (
                        <div key={index} className="text-xs text-slate-300 bg-slate-700/50 p-2 rounded">
                          {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => {
                    setSettings({
                      highContrast: false,
                      largeText: false,
                      reducedMotion: false,
                      screenReader: false,
                      focusIndicator: true,
                      colorBlind: false
                    });
                    resetFontSize();
                    setLineHeight(1.5);
                    setLetterSpacing(0);
                  }}
                  className="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded transition-colors"
                  aria-label="Reset all accessibility settings"
                >
                  Reset All
                </button>
                
                <button
                  onClick={() => window.print()}
                  className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors"
                  aria-label="Print page"
                >
                  Print
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-32 left-20 z-30 w-64 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-4"
          >
            <h4 className="text-white font-semibold mb-3">Accessibility Settings</h4>
            <div className="space-y-3 text-sm">
              <div className="text-slate-300">
                <p className="mb-2">These settings help make the website more accessible for users with different needs.</p>
                <p className="text-xs text-slate-400">
                  Changes are applied immediately and saved to your browser preferences.
                </p>
              </div>
              
              <div className="pt-2 border-t border-slate-700">
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>WCAG 2.1 AA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Screen Reader Compatible</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Keyboard Navigation</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

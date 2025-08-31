import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  enabled?: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  autoDetect = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusIndicator: true,
    colorBlind: false
  });
  
  const [isOpen, setIsOpen] = useState(false);
  const [accessibilityScore, setAccessibilityScore] = useState(0);
  const [issues, setIssues] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const focusIndicatorRef = useRef<HTMLDivElement>(null);

  // Accessibility analysis
  const analyzeAccessibility = useCallback(async () => {
    setIsAnalyzing(true);
    const newIssues: string[] = [];
    const newSuggestions: string[] = [];
    let score = 100;

    try {
      // Check for alt text on images
      const images = document.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
      if (imagesWithoutAlt.length > 0) {
        newIssues.push(`${imagesWithoutAlt.length} images missing alt text`);
        score -= 15;
      }

      // Check for proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
      let prevLevel = 0;
      let hasSkippedLevels = false;
      
      headingLevels.forEach(level => {
        if (level > prevLevel + 1) {
          hasSkippedLevels = true;
        }
        prevLevel = level;
      });
      
      if (hasSkippedLevels) {
        newIssues.push('Heading structure has skipped levels');
        score -= 10;
      }

      // Check for form labels
      const formInputs = document.querySelectorAll('input, select, textarea');
      const inputsWithoutLabels = Array.from(formInputs).filter(input => {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledBy = input.getAttribute('aria-labelledby');
        return !label && !ariaLabel && !ariaLabelledBy;
      });
      
      if (inputsWithoutLabels.length > 0) {
        newIssues.push(`${inputsWithoutLabels.length} form inputs missing labels`);
        score -= 20;
      }

      // Check for color contrast
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      let lowContrastElements = 0;
      
      textElements.forEach(element => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // Simple contrast check (this is a basic implementation)
        if (color && backgroundColor) {
          // Add more sophisticated contrast checking here
          if (color === backgroundColor) {
            lowContrastElements++;
          }
        }
      });
      
      if (lowContrastElements > 0) {
        newIssues.push(`${lowContrastElements} elements may have low contrast`);
        score -= 10;
      }

      // Check for keyboard navigation
      const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
      const nonFocusableElements = Array.from(focusableElements).filter(el => {
        const tabIndex = el.getAttribute('tabindex');
        return tabIndex === '-1' || el.getAttribute('disabled') === 'true';
      });
      
      if (nonFocusableElements.length > 0) {
        newSuggestions.push('Consider keyboard navigation for interactive elements');
      }

      // Check for ARIA attributes
      const elementsWithoutAria = Array.from(document.querySelectorAll('[role]')).filter(el => {
        const role = el.getAttribute('role');
        const ariaLabel = el.getAttribute('aria-label');
        const ariaLabelledBy = el.getAttribute('aria-labelledby');
        return !ariaLabel && !ariaLabelledBy;
      });
      
      if (elementsWithoutAria.length > 0) {
        newSuggestions.push('Add descriptive labels to ARIA elements');
      }

      // Check for language attributes
      const htmlElement = document.documentElement;
      if (!htmlElement.lang) {
        newIssues.push('Missing language attribute on HTML element');
        score -= 5;
      }

      // Check for skip links
      const skipLinks = document.querySelectorAll('a[href^="#"]');
      if (skipLinks.length === 0) {
        newSuggestions.push('Consider adding skip navigation links');
      }

      // Check for semantic HTML
      const semanticElements = document.querySelectorAll('main, nav, section, article, aside, header, footer');
      if (semanticElements.length < 3) {
        newSuggestions.push('Use more semantic HTML elements for better structure');
      }

    } catch (error) {
      console.warn('Accessibility analysis failed:', error);
    }

    setIssues(newIssues);
    setSuggestions(newSuggestions);
    setAccessibilityScore(Math.max(0, score));
    setIsAnalyzing(false);
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Apply color blind support
    if (updatedSettings.colorBlind) {
      document.documentElement.classList.add('color-blind-support');
    } else {
      document.documentElement.classList.remove('color-blind-support');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Toggle individual setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    applySettings({ [key]: !settings[key] });
  }, [settings, applySettings]);

  // Reset all settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusIndicator: true,
      colorBlind: false
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  }, [applySettings]);

  // Auto-detect accessibility preferences
  useEffect(() => {
    if (autoDetect) {
      // Check for user's motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        applySettings({ reducedMotion: true });
      }

      // Check for user's color scheme preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        applySettings({ highContrast: true });
      }

      // Check for user's font size preference
      const prefersLargeText = window.matchMedia('(prefers-font-size: large)').matches;
      if (prefersLargeText) {
        applySettings({ largeText: true });
      }
    }
  }, [autoDetect, applySettings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Run initial analysis
  useEffect(() => {
    if (enabled) {
      analyzeAccessibility();
    }
  }, [enabled, analyzeAccessibility]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-7 h-7 text-white mx-auto" />
        {accessibilityScore < 80 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">
              {Math.round(accessibilityScore)}
            </span>
          </div>
        )}
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-20 left-6 z-40 w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-purple-400" />
                  Accessibility Settings
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility settings"
                >
                  ×
                </button>
              </div>

              {/* Accessibility Score */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Accessibility Score</span>
                  <span className={`text-2xl font-bold ${
                    accessibilityScore >= 90 ? 'text-green-400' :
                    accessibilityScore >= 70 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {Math.round(accessibilityScore)}
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      accessibilityScore >= 90 ? 'bg-green-500' :
                      accessibilityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${accessibilityScore}%` }}
                  />
                </div>
              </div>

              {/* Settings Toggles */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5 text-purple-400" />
                    <span className="text-white">High Contrast</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.highContrast ? 'bg-purple-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-purple-400" />
                    <span className="text-white">Large Text</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.largeText ? 'bg-purple-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-purple-400" />
                    <span className="text-white">Reduced Motion</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-purple-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ZoomIn className="w-5 h-5 text-purple-400" />
                    <span className="text-white">Focus Indicator</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-purple-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={analyzeAccessibility}
                  disabled={isAnalyzing}
                  className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                </button>
                
                <button
                  onClick={resetSettings}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Reset
                </button>
              </div>

              {/* Issues and Suggestions */}
              {issues.length > 0 && (
                <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <h4 className="text-sm font-medium text-red-400 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Issues Found
                  </h4>
                  <div className="space-y-1 text-xs text-red-300">
                    {issues.map((issue, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {suggestions.length > 0 && (
                <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Suggestions
                  </h4>
                  <div className="space-y-1 text-xs text-blue-300">
                    {suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Indicator */}
      <div
        ref={focusIndicatorRef}
        className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-200 ${
          settings.focusIndicator ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          boxShadow: '0 0 0 3px rgba(147, 51, 234, 0.5)',
          borderRadius: '4px'
        }}
      />

      {/* Accessibility CSS */}
      <style jsx>{`
        .high-contrast {
          --text-color: #ffffff;
          --bg-color: #000000;
          --accent-color: #ffff00;
        }

        .large-text {
          font-size: 1.2em;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible *:focus {
          outline: 3px solid #9333ea !important;
          outline-offset: 2px !important;
        }

        .color-blind-support {
          filter: contrast(1.2) saturate(1.2);
        }
      `}</style>
    </>
  );
};
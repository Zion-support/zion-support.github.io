import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  MousePointer, 
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
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindFriendly: boolean;
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  element: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  suggestion: string;
}

export function AccessibilityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindFriendly: false
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('show-focus-indicators');
    } else {
      root.classList.remove('show-focus-indicators');
    }

    // Color blind friendly
    if (settings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }
  }, [settings]);

  // Scan for accessibility issues
  const scanForIssues = useCallback(async () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          id: `img-alt-${index}`,
          type: 'error',
          element: 'Image',
          description: 'Image missing alt text or aria-label',
          impact: 'high',
          suggestion: 'Add descriptive alt text or aria-label attribute'
        });
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level - previousLevel > 1) {
        newIssues.push({
          id: `heading-structure-${index}`,
          type: 'warning',
          element: 'Heading',
          description: 'Heading level skipped (h1 → h3)',
          impact: 'medium',
          suggestion: 'Maintain proper heading hierarchy (h1, h2, h3...)'
        });
      }
      previousLevel = level;
    });

    // Check for form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach((input, index) => {
      const inputElement = input as HTMLInputElement;
      if (!inputElement.labels?.length && !inputElement.getAttribute('aria-label')) {
        newIssues.push({
          id: `form-label-${index}`,
          type: 'error',
          element: 'Form Input',
          description: 'Form input missing label or aria-label',
          impact: 'high',
          suggestion: 'Add proper label or aria-label attribute'
        });
      }
    });

    // Check for sufficient color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // This is a simplified check - in production you'd use a proper contrast checker
      if (color === backgroundColor) {
        newIssues.push({
          id: `contrast-${index}`,
          type: 'warning',
          element: 'Text Element',
          description: 'Potential contrast issue detected',
          impact: 'medium',
          suggestion: 'Ensure sufficient contrast between text and background colors'
        });
      }
    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    interactiveElements.forEach((element, index) => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex === '-1') {
        newIssues.push({
          id: `keyboard-nav-${index}`,
          type: 'warning',
          element: 'Interactive Element',
          description: 'Element removed from tab order',
          impact: 'medium',
          suggestion: 'Ensure all interactive elements are keyboard accessible'
        });
      }
    });

    // Simulate scanning delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  // Reset all settings
  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true,
      colorBlindFriendly: false
    });
  }, []);

  // Show component after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6 w-96 max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Accessibility</h3>
                  <p className="text-sm text-gray-400">Enhance your experience</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`p-3 rounded-lg border transition-all ${
                  settings.highContrast
                    ? 'border-green-500/50 bg-green-500/20 text-green-400'
                    : 'border-gray-600 bg-slate-700/50 text-gray-300 hover:border-green-500/30'
                }`}
              >
                <Contrast className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">High Contrast</span>
              </button>

              <button
                onClick={() => toggleSetting('largeText')}
                className={`p-3 rounded-lg border transition-all ${
                  settings.largeText
                    ? 'border-green-500/50 bg-green-500/20 text-green-400'
                    : 'border-gray-600 bg-slate-700/50 text-gray-300 hover:border-green-500/30'
                }`}
              >
                <Type className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Large Text</span>
              </button>

              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`p-3 rounded-lg border transition-all ${
                  settings.reducedMotion
                    ? 'border-green-500/50 bg-green-500/20 text-green-400'
                    : 'border-gray-600 bg-slate-700/50 text-gray-300 hover:border-green-500/30'
                }`}
              >
                <EyeOff className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Reduced Motion</span>
              </button>

              <button
                onClick={() => toggleSetting('focusIndicators')}
                className={`p-3 rounded-lg border transition-all ${
                  settings.focusIndicators
                    ? 'border-green-500/50 bg-green-500/20 text-green-400'
                    : 'border-gray-600 bg-slate-700/50 text-gray-300 hover:border-green-500/30'
                }`}
              >
                <MousePointer className="w-5 h-5 mx-auto mb-2" />
                <span className="text-xs">Focus Indicators</span>
              </button>
            </div>

            {/* Advanced Settings */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Advanced Settings</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.colorBlindFriendly}
                    onChange={() => toggleSetting('colorBlindFriendly')}
                    className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Color Blind Friendly</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={() => toggleSetting('keyboardNavigation')}
                    className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Enhanced Keyboard Navigation</span>
                </label>
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
                    <div
                      key={issue.id}
                      className={`p-2 rounded-lg text-xs ${
                        issue.type === 'error' ? 'bg-red-500/20 border border-red-500/30' :
                        issue.type === 'warning' ? 'bg-yellow-500/20 border border-yellow-500/30' :
                        'bg-blue-500/20 border border-blue-500/30'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {issue.type === 'error' ? <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5" /> :
                         issue.type === 'warning' ? <AlertTriangle className="w-3 h-3 text-yellow-400 mt-0.5" /> :
                         <Info className="w-3 h-3 text-blue-400 mt-0.5" />}
                        <div>
                          <div className="font-medium text-white">{issue.element}</div>
                          <div className="text-gray-300">{issue.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {issues.length === 0 && !isScanning && (
                <div className="text-center py-4 text-gray-400 text-sm">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  No accessibility issues found
                </div>
              )}
            </div>

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
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-200"
            aria-label="Accessibility Settings"
          >
            <Eye className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccessibilityEnhancer;

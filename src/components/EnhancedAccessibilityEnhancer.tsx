import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Type, 
  MousePointer, 
  Keyboard, 
  Accessibility, 
  AlertTriangle, 
  CheckCircle, 
  X, 
  Settings,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  HelpCircle,
  Info
} from 'lucide-react';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'high' | 'medium' | 'low';
  fix?: string;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showIssues?: boolean;
  autoFix?: boolean;
  highContrast?: boolean;
  largeText?: boolean;
  reducedMotion?: boolean;
  screenReader?: boolean;
  keyboardNavigation?: boolean;
  focusIndicator?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showIssues = false,
  autoFix = true,
  highContrast = false,
  largeText = false,
  reducedMotion = false,
  screenReader = false,
  keyboardNavigation = true,
  focusIndicator = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [accessibilityIssues, setAccessibilityIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [currentSettings, setCurrentSettings] = useState({
    highContrast,
    largeText,
    reducedMotion,
    screenReader,
    keyboardNavigation,
    focusIndicator
  });
  const [isFixing, setIsFixing] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);

  // Accessibility scanning function
  const scanAccessibility = useCallback(async () => {
    if (!enabled) return;

    setIsScanning(true);
    const issues: AccessibilityIssue[] = [];

    try {
      // Scan for missing alt text on images
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.ariaLabel) {
          issues.push({
            id: `img-alt-${index}`,
            type: 'error',
            message: 'Image missing alt text or aria-label',
            element: img,
            severity: 'high',
            fix: 'Add alt text or aria-label attribute'
          });
        }
      });

      // Scan for missing form labels
      const formControls = document.querySelectorAll('input, select, textarea');
      formControls.forEach((control, index) => {
        const id = control.id;
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = control.getAttribute('aria-label');
        const ariaLabelledBy = control.getAttribute('aria-labelledby');

        if (!label && !ariaLabel && !ariaLabelledBy) {
          issues.push({
            id: `form-label-${index}`,
            type: 'error',
            message: 'Form control missing label or aria-label',
            element: control as HTMLElement,
            severity: 'high',
            fix: 'Add label element or aria-label attribute'
          });
        }
      });

      // Scan for missing heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          issues.push({
            id: `heading-structure-${index}`,
            type: 'warning',
            message: `Heading level ${level} follows level ${previousLevel} (skipped level ${previousLevel + 1})`,
            element: heading as HTMLElement,
            severity: 'medium',
            fix: 'Ensure proper heading hierarchy (h1 → h2 → h3)'
          });
        }
        previousLevel = level;
      });

      // Scan for missing ARIA landmarks
      const landmarks = document.querySelectorAll('main, nav, header, footer, aside, section[role]');
      if (landmarks.length === 0) {
        issues.push({
          id: 'missing-landmarks',
          type: 'warning',
          message: 'No ARIA landmarks found',
          element: document.body,
          severity: 'medium',
          fix: 'Add semantic HTML elements or ARIA landmarks'
        });
      }

      // Scan for color contrast issues (basic check)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // Basic contrast check (simplified)
        if (color === backgroundColor || color === 'transparent') {
          issues.push({
            id: `contrast-${index}`,
            type: 'warning',
            message: 'Potential color contrast issue',
            element: element as HTMLElement,
            severity: 'medium',
            fix: 'Ensure sufficient color contrast (4.5:1 for normal text)'
          });
        }
      });

      // Scan for keyboard navigation issues
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
      interactiveElements.forEach((element, index) => {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex === '-1' && element.tagName !== 'DIV' && element.tagName !== 'SPAN') {
          issues.push({
            id: `keyboard-${index}`,
            type: 'warning',
            message: 'Interactive element has tabindex="-1"',
            element: element as HTMLElement,
            severity: 'medium',
            fix: 'Remove tabindex="-1" or ensure element is not interactive'
          });
        }
      });

      // Scan for missing focus indicators
      const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const outline = style.outline;
        const boxShadow = style.boxShadow;
        
        if (outline === 'none' && boxShadow === 'none') {
          issues.push({
            id: `focus-${index}`,
            type: 'info',
            message: 'Element may lack visible focus indicator',
            element: element as HTMLElement,
            severity: 'low',
            fix: 'Add visible focus indicator (outline, box-shadow, or border)'
          });
        }
      });

      // Scan for missing language attributes
      const htmlElement = document.documentElement;
      if (!htmlElement.lang) {
        issues.push({
          id: 'missing-lang',
          type: 'error',
          message: 'HTML element missing lang attribute',
          element: htmlElement,
          severity: 'high',
          fix: 'Add lang attribute to HTML element'
        });
      }

      // Scan for missing skip links
      const skipLinks = document.querySelectorAll('a[href^="#"], a[href^="/#"]');
      if (skipLinks.length === 0) {
        issues.push({
          id: 'missing-skip-links',
          type: 'info',
          message: 'No skip navigation links found',
          element: document.body,
          severity: 'low',
          fix: 'Add skip navigation links for keyboard users'
        });
      }

    } catch (error) {
      console.error('Accessibility scan failed:', error);
    }

    setAccessibilityIssues(issues);
    setIsScanning(false);
  }, [enabled]);

  // Auto-fix accessibility issues
  const autoFixIssues = useCallback(async () => {
    if (!autoFix || accessibilityIssues.length === 0) return;

    setIsFixing(true);
    const fixedIssues: string[] = [];

    try {
      for (const issue of accessibilityIssues) {
        if (issue.element && issue.fix) {
          switch (issue.type) {
            case 'error':
              if (issue.message.includes('missing alt text')) {
                const img = issue.element as HTMLImageElement;
                if (img.src) {
                  const altText = img.src.split('/').pop()?.split('.')[0] || 'Image';
                  img.alt = altText;
                  fixedIssues.push(issue.id);
                }
              } else if (issue.message.includes('missing label')) {
                const control = issue.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                const label = document.createElement('label');
                label.textContent = control.placeholder || control.name || 'Form control';
                label.htmlFor = control.id || `control-${Date.now()}`;
                if (!control.id) control.id = label.htmlFor;
                control.parentNode?.insertBefore(label, control);
                fixedIssues.push(issue.id);
              }
              break;

            case 'warning':
              if (issue.message.includes('tabindex="-1"')) {
                issue.element.removeAttribute('tabindex');
                fixedIssues.push(issue.id);
              }
              break;

            case 'info':
              if (issue.message.includes('focus indicator')) {
                issue.element.style.outline = '2px solid #007bff';
                issue.element.style.outlineOffset = '2px';
                fixedIssues.push(issue.id);
              }
              break;
          }
        }
      }

      // Remove fixed issues from the list
      setAccessibilityIssues(prev => prev.filter(issue => !fixedIssues.includes(issue.id)));

      if (fixedIssues.length > 0) {
        console.log(`Auto-fixed ${fixedIssues.length} accessibility issues`);
      }
    } catch (error) {
      console.error('Auto-fix failed:', error);
    } finally {
      setIsFixing(false);
    }
  }, [autoFix, accessibilityIssues]);

  // Apply accessibility settings
  const applySettings = useCallback((settings: typeof currentSettings) => {
    setCurrentSettings(settings);

    // Apply high contrast
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--bg-color', '#000000');
      document.documentElement.style.setProperty('--accent-color', '#ffff00');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--text-color');
      document.documentElement.style.removeProperty('--bg-color');
      document.documentElement.style.removeProperty('--accent-color');
    }

    // Apply large text
    if (settings.largeText) {
      document.documentElement.style.fontSize = '18px';
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.style.fontSize = '';
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      document.documentElement.style.removeProperty('--animation-duration');
    }

    // Apply focus indicator
    if (settings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
      document.documentElement.style.setProperty('--focus-outline', '3px solid #007bff');
    } else {
      document.documentElement.classList.remove('focus-visible');
      document.documentElement.style.removeProperty('--focus-outline');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, []);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        applySettings(settings);
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Initial scan
    scanAccessibility();

    // Set up mutation observer for dynamic content
    observerRef.current = new MutationObserver(() => {
      // Re-scan when DOM changes
      setTimeout(scanAccessibility, 1000);
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['alt', 'aria-label', 'tabindex']
    });

    // Set up keyboard navigation
    if (keyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.altKey) {
          const main = document.querySelector('main');
          if (main) {
            (main as HTMLElement).focus();
            event.preventDefault();
          }
        }

        // Skip to navigation
        if (event.key === 'Tab' && event.altKey) {
          const nav = document.querySelector('nav');
          if (nav) {
            (nav as HTMLElement).focus();
            event.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled, keyboardNavigation, scanAccessibility]);

  // Auto-fix effect
  useEffect(() => {
    if (autoFix && accessibilityIssues.length > 0) {
      const timer = setTimeout(autoFixIssues, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoFix, accessibilityIssues, autoFixIssues]);

  if (!enabled) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl border-l border-gray-200 dark:border-gray-700 z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Accessibility className="w-6 h-6 text-blue-500" />
                  Accessibility Panel
                </h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={scanAccessibility}
                  disabled={isScanning}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 flex items-center justify-center gap-2"
                  aria-label="Scan for accessibility issues"
                >
                  {isScanning ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                  {isScanning ? 'Scanning...' : 'Scan Accessibility'}
                </button>

                {accessibilityIssues.length > 0 && (
                  <button
                    onClick={autoFixIssues}
                    disabled={isFixing}
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 flex items-center justify-center gap-2"
                    aria-label="Auto-fix accessibility issues"
                  >
                    {isFixing ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <CheckCircle className="w-4 h-4" />
                    )}
                    {isFixing ? 'Fixing...' : 'Auto-Fix Issues'}
                  </button>
                )}
              </div>

              {/* Accessibility Settings */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentSettings.highContrast}
                      onChange={(e) => applySettings({ ...currentSettings, highContrast: e.target.checked })}
                      className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                    />
                    <Contrast className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentSettings.largeText}
                      onChange={(e) => applySettings({ ...currentSettings, largeText: e.target.checked })}
                      className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                    />
                    <Type className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentSettings.reducedMotion}
                      onChange={(e) => applySettings({ ...currentSettings, reducedMotion: e.target.checked })}
                      className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                    />
                    <RotateCcw className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentSettings.focusIndicator}
                      onChange={(e) => applySettings({ ...currentSettings, focusIndicator: e.target.checked })}
                      className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                    />
                    <MousePointer className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
                  </label>
                </div>
              </div>

              {/* Accessibility Issues */}
              {accessibilityIssues.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Issues Found ({accessibilityIssues.length})
                  </h3>
                  
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {accessibilityIssues.map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-3 rounded-lg border ${
                          issue.severity === 'high' ? 'border-red-300 bg-red-50 dark:bg-red-900/20' :
                          issue.severity === 'medium' ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20' :
                          'border-blue-300 bg-blue-50 dark:bg-blue-900/20'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            issue.severity === 'high' ? 'bg-red-500' :
                            issue.severity === 'medium' ? 'bg-yellow-500' :
                            'bg-blue-500'
                          }`} />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {issue.message}
                            </div>
                            {issue.fix && (
                              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                <strong>Fix:</strong> {issue.fix}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Help Section */}
              <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Keyboard Shortcuts</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div>Alt + Tab: Skip to navigation</div>
                  <div>Shift + Alt + Tab: Skip to main content</div>
                  <div>Tab: Navigate through elements</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Accessibility Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(true)}
          className="fixed top-4 right-4 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="Open accessibility panel"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};
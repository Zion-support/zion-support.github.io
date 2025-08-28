import React, { useEffect, useState } from 'react';
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
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  suggestion?: string;
}

export function AccessibilityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    // Initialize accessibility features
    initializeAccessibility();
    
    // Scan for accessibility issues
    scanAccessibility();
    
    // Apply current settings
    applyAccessibilitySettings();
  }, []);

  useEffect(() => {
    applyAccessibilitySettings();
  }, [settings]);

  const initializeAccessibility = () => {
    // Add skip links
    addSkipLinks();
    
    // Enhance keyboard navigation
    enhanceKeyboardNavigation();
    
    // Add ARIA landmarks
    addARIALandmarks();
  };

  const addSkipLinks = () => {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(({ href, text }) => {
      if (!document.querySelector(`a[href="${href}"]`)) {
        const skipLink = document.createElement('a');
        skipLink.href = href;
        skipLink.textContent = text;
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    });
  };

  const enhanceKeyboardNavigation = () => {
    // Add keyboard event listeners for interactive elements
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Enhance focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  };

  const addARIALandmarks = () => {
    // Add missing ARIA landmarks
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.getAttribute('role')) {
      mainContent.setAttribute('role', 'main');
      mainContent.id = 'main-content';
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.id = 'navigation';
    }
  };

  const scanAccessibility = async () => {
    setIsScanning(true);
    
    try {
      const newIssues: AccessibilityIssue[] = [];
      
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          newIssues.push({
            type: 'error',
            message: 'Image missing alt text',
            element: img.src || 'Unknown image',
            suggestion: 'Add descriptive alt text or aria-label'
          });
        }
      });

      // Check for proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          newIssues.push({
            type: 'warning',
            message: 'Heading level skipped',
            element: heading.textContent || 'Unknown heading',
            suggestion: 'Use proper heading hierarchy (h1 → h2 → h3)'
          });
        }
        previousLevel = level;
      });

      // Check for form labels
      const formInputs = document.querySelectorAll('input, select, textarea');
      formInputs.forEach((input) => {
        const id = input.getAttribute('id');
        if (id && !document.querySelector(`label[for="${id}"]`)) {
          newIssues.push({
            type: 'warning',
            message: 'Form input missing label',
            element: id,
            suggestion: 'Add a label element with matching for attribute'
          });
        }
      });

      // Check for color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div');
      textElements.forEach((element) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        if (color === backgroundColor) {
          newIssues.push({
            type: 'error',
            message: 'Poor color contrast detected',
            element: element.textContent?.substring(0, 50) || 'Unknown element',
            suggestion: 'Ensure sufficient contrast between text and background'
          });
        }
      });

      setIssues(newIssues);
    } catch (error) {
      console.warn('Accessibility scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('show-focus');
    } else {
      root.classList.remove('show-focus');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getIssueIcon = (type: AccessibilityIssue['type']) => {
    switch (type) {
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'info':
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
    }
  };

  const getIssueColor = (type: AccessibilityIssue['type']) => {
    switch (type) {
      case 'error':
        return 'border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'info':
        return 'border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800';
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-20 z-40 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl max-h-96 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5" />
                <h3 className="font-semibold">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {/* Settings */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </h4>
                
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={() => toggleSetting('highContrast')}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <Contrast className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={() => toggleSetting('largeText')}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <Type className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={() => toggleSetting('reducedMotion')}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <MousePointer className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={() => toggleSetting('focusIndicator')}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <Keyboard className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Show Focus</span>
                  </label>
                </div>
              </div>

              {/* Issues */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Accessibility Issues
                  </h4>
                  <button
                    onClick={scanAccessibility}
                    disabled={isScanning}
                    className="text-xs bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-2 py-1 rounded transition-colors"
                  >
                    {isScanning ? 'Scanning...' : 'Scan'}
                  </button>
                </div>

                {issues.length > 0 ? (
                  <div className="space-y-2">
                    {issues.slice(0, 5).map((issue, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border ${getIssueColor(issue.type)}`}
                      >
                        <div className="flex items-start space-x-2">
                          {getIssueIcon(issue.type)}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-900 dark:text-white">
                              {issue.message}
                            </p>
                            {issue.suggestion && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                {issue.suggestion}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    {issues.length > 5 && (
                      <p className="text-xs text-gray-500 text-center">
                        +{issues.length - 5} more issues found
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      No accessibility issues found
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for accessibility features */}
      <style jsx>{`
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

        .focus-visible {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }

        .high-contrast {
          --tw-text-opacity: 1;
          --tw-bg-opacity: 1;
        }

        .high-contrast * {
          color: #000 !important;
          background-color: #fff !important;
          border-color: #000 !important;
        }

        .large-text {
          font-size: 1.2em;
        }

        .large-text * {
          font-size: 1.2em;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .show-focus *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }

        .keyboard-navigation *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
}

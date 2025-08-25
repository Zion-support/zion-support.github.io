import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon, 
  EyeSlashIcon, 
  SpeakerWaveIcon, 
  SpeakerXMarkIcon,
  SunIcon,
  MoonIcon,
  AdjustmentsHorizontalIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  severity: 'low' | 'medium' | 'high';
  fix?: string;
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showScanner?: boolean;
  className?: string;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  position = 'bottom-right',
  showScanner = true,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'medium'
  });
  
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<'settings' | 'scanner' | 'help'>('settings');

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Font size
    root.style.setProperty('--font-size-base', {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'xlarge': '20px'
    }[settings.fontSize]);
    
    // Color blindness simulation
    root.style.setProperty('--color-blindness', settings.colorBlindness);
    
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Load saved settings on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }
      
      // Skip to navigation
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const nav = document.querySelector('nav') || document.querySelector('header');
        if (nav) {
          (nav as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus indicator
  useEffect(() => {
    if (settings.focusIndicator) {
      document.body.classList.add('show-focus-indicator');
    } else {
      document.body.classList.remove('show-focus-indicator');
    }
  }, [settings.focusIndicator]);

  // Accessibility scanner
  const runAccessibilityScan = useCallback(async () => {
    setIsScanning(true);
    setIssues([]);
    
    // Simulate scanning delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newIssues: AccessibilityIssue[] = [];
    
    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          id: `img-${index}`,
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element: img.tagName.toLowerCase(),
          severity: 'medium',
          fix: 'Add alt text or aria-label attribute'
        });
      }
    });
    
    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        newIssues.push({
          id: `heading-${index}`,
          type: 'warning',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading.tagName.toLowerCase(),
          severity: 'low',
          fix: 'Ensure proper heading hierarchy'
        });
      }
      previousLevel = level;
    });
    
    // Check for form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control, index) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');
      
      if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
        newIssues.push({
          id: `form-${index}`,
          type: 'error',
          message: 'Form control missing label or aria-label',
          element: control.tagName.toLowerCase(),
          severity: 'high',
          fix: 'Add label element or aria-label attribute'
        });
      }
    });
    
    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor || color === 'transparent') {
        newIssues.push({
          id: `contrast-${index}`,
          type: 'warning',
          message: 'Potential color contrast issue',
          element: element.tagName.toLowerCase(),
          severity: 'medium',
          fix: 'Ensure sufficient color contrast ratio'
        });
      }
    });
    
    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Toggle setting
  const toggleSetting = (key: keyof AccessibilitySettings, value?: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value !== undefined ? value : !prev[key]
    }));
  };

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed ${getPositionClasses()} z-50 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-hidden`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close accessibility panel"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {[
                { id: 'settings', label: 'Settings', icon: AdjustmentsHorizontalIcon },
                { id: 'scanner', label: 'Scanner', icon: InformationCircleIcon },
                { id: 'help', label: 'Help', icon: InformationCircleIcon }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-120px)]">
              {activeTab === 'settings' && (
                <div className="space-y-4">
                  {/* Visual Settings */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Visual Settings
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={() => toggleSetting('highContrast')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          High Contrast Mode
                        </span>
                      </label>
                      
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.largeText}
                          onChange={() => toggleSetting('largeText')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Large Text
                        </span>
                      </label>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Font Size
                        </label>
                        <select
                          value={settings.fontSize}
                          onChange={(e) => toggleSetting('fontSize', e.target.value)}
                          className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xlarge">Extra Large</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Color Blindness Support
                        </label>
                        <select
                          value={settings.colorBlindness}
                          onChange={(e) => toggleSetting('colorBlindness', e.target.value)}
                          className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                          <option value="none">None</option>
                          <option value="protanopia">Protanopia (Red-Blind)</option>
                          <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                          <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Motion Settings */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Motion & Navigation
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={() => toggleSetting('reducedMotion')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Reduced Motion
                        </span>
                      </label>
                      
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={() => toggleSetting('keyboardNavigation')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Enhanced Keyboard Navigation
                        </span>
                      </label>
                      
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.focusIndicator}
                          onChange={() => toggleSetting('focusIndicator')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Enhanced Focus Indicators
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Screen Reader */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Screen Reader
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.screenReader}
                          onChange={() => toggleSetting('screenReader')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Enhanced Screen Reader Support
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'scanner' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      Accessibility Scanner
                    </h3>
                    <button
                      onClick={runAccessibilityScan}
                      disabled={isScanning}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-sm rounded-md transition-colors"
                    >
                      {isScanning ? 'Scanning...' : 'Run Scan'}
                    </button>
                  </div>
                  
                  {issues.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Found {issues.length} issue{issues.length !== 1 ? 's' : ''}
                      </h4>
                      {issues.map(issue => (
                        <div
                          key={issue.id}
                          className={`p-3 rounded-md border-l-4 ${
                            issue.type === 'error'
                              ? 'bg-red-50 border-red-400 dark:bg-red-900/20 dark:border-red-600'
                              : issue.type === 'warning'
                              ? 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-600'
                              : 'bg-blue-50 border-blue-400 dark:bg-blue-900/20 dark:border-blue-600'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {issue.type === 'error' ? (
                              <ExclamationTriangleIcon className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            ) : issue.type === 'warning' ? (
                              <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <InformationCircleIcon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm text-gray-900 dark:text-white font-medium">
                                {issue.message}
                              </p>
                              {issue.element && (
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                  Element: {issue.element}
                                </p>
                              )}
                              {issue.fix && (
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                  Fix: {issue.fix}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {issues.length === 0 && !isScanning && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <InformationCircleIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-sm">Click "Run Scan" to check for accessibility issues</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'help' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Accessibility Help
                  </h3>
                  
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <h4 className="font-medium mb-2">Keyboard Shortcuts</h4>
                      <ul className="space-y-1 text-xs">
                        <li>• <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Tab</kbd> - Navigate through interactive elements</li>
                        <li>• <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Alt + Tab</kbd> - Skip to main content</li>
                        <li>• <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Shift + Alt + Tab</kbd> - Skip to navigation</li>
                        <li>• <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Enter</kbd> or <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Space</kbd> - Activate buttons and links</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Screen Reader Support</h4>
                      <p className="text-xs">
                        This website is optimized for screen readers with proper ARIA labels, 
                        semantic HTML, and keyboard navigation support.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Need More Help?</h4>
                      <p className="text-xs">
                        Contact our support team for additional accessibility assistance.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for accessibility features */}
      <style>{`
        /* High contrast mode */
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --border-color: #000000;
          --accent-color: #0000ff;
        }
        
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }
        
        /* Reduced motion */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Large text */
        .large-text {
          font-size: 1.2em;
        }
        
        /* Focus indicators */
        .show-focus-indicator *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        /* Color blindness support */
        [style*="--color-blindness: protanopia"] {
          filter: url('#protanopia');
        }
        
        [style*="--color-blindness: deuteranopia"] {
          filter: url('#deuteranopia');
        }
        
        [style*="--color-blindness: tritanopia"] {
          filter: url('#tritanopia');
        }
        
        /* Font size variables */
        :root {
          --font-size-base: 16px;
        }
        
        body {
          font-size: var(--font-size-base);
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibility;
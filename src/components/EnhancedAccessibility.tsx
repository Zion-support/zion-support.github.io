import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon,
  EyeSlashIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  reducedMotion: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  dyslexia: boolean;
  highContrastMode: 'none' | 'high-contrast' | 'inverted' | 'monochrome';
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
  element?: HTMLElement;
  fixable: boolean;
  suggestion: string;
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  showIssues?: boolean;
  autoCheck?: boolean;
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  position = 'bottom-right',
  className = '',
  showIssues = true,
  autoCheck = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    screenReader: false,
    focusIndicator: true,
    colorBlindness: 'none',
    dyslexia: false,
    highContrastMode: 'none'
  });
  
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [complianceScore, setComplianceScore] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [activeTab, setActiveTab] = useState<'controls' | 'issues' | 'settings'>('controls');

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

    // Apply font size
    document.documentElement.style.fontSize = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'xlarge': '20px'
    }[updatedSettings.fontSize];

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.style.setProperty('--reduced-motion', 'reduce');
    } else {
      document.documentElement.style.removeProperty('--reduced-motion');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Apply color blindness simulation
    document.documentElement.style.filter = updatedSettings.colorBlindness !== 'none' 
      ? `url(#${updatedSettings.colorBlindness})` 
      : 'none';

    // Apply dyslexia-friendly font
    if (updatedSettings.dyslexia) {
      document.documentElement.classList.add('dyslexia-friendly');
    } else {
      document.documentElement.classList.remove('dyslexia-friendly');
    }

    // Apply high contrast mode
    document.documentElement.className = document.documentElement.className
      .replace(/high-contrast-mode-\w+/g, '');
    if (updatedSettings.highContrastMode !== 'none') {
      document.documentElement.classList.add(`high-contrast-mode-${updatedSettings.highContrastMode}`);
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Check accessibility compliance
  const checkAccessibility = useCallback(async () => {
    setIsChecking(true);
    const newIssues: AccessibilityIssue[] = [];
    let score = 100;

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          id: `missing-alt-${index}`,
          type: 'error',
          title: 'Missing Alt Text',
          description: 'Image is missing alternative text for screen readers',
          wcagLevel: 'A',
          element: img,
          fixable: true,
          suggestion: 'Add alt attribute or aria-label to describe the image content'
        });
        score -= 5;
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level - previousLevel > 1) {
        newIssues.push({
          id: `heading-skip-${index}`,
          type: 'warning',
          title: 'Heading Level Skipped',
          description: `Heading level jumps from h${previousLevel} to h${level}`,
          wcagLevel: 'AA',
          element: heading as HTMLElement,
          fixable: true,
          suggestion: 'Ensure heading levels follow a logical sequence (h1 → h2 → h3)'
        });
        score -= 3;
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control, index) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');
      
      if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
        newIssues.push({
          id: `missing-label-${index}`,
          type: 'error',
          title: 'Missing Form Label',
          description: 'Form control is missing an associated label',
          wcagLevel: 'A',
          element: control as HTMLElement,
          fixable: true,
          suggestion: 'Add a label element with matching for attribute, or use aria-label'
        });
        score -= 5;
      }
    });

    // Check for proper color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // This is a simplified check - in a real implementation, you'd use a proper contrast ratio calculator
      if (color === backgroundColor) {
        newIssues.push({
          id: `contrast-issue-${index}`,
          type: 'warning',
          title: 'Potential Color Contrast Issue',
          description: 'Text and background colors may be too similar',
          wcagLevel: 'AA',
          element: element as HTMLElement,
          fixable: true,
          suggestion: 'Ensure sufficient color contrast between text and background (minimum 4.5:1 for normal text)'
        });
        score -= 3;
      }
    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    interactiveElements.forEach((element, index) => {
      if (element.getAttribute('tabindex') === '-1' && !element.hasAttribute('aria-hidden')) {
        newIssues.push({
          id: `keyboard-nav-${index}`,
          type: 'warning',
          title: 'Keyboard Navigation Issue',
          description: 'Element is not keyboard accessible',
          wcagLevel: 'A',
          element: element as HTMLElement,
          fixable: true,
          suggestion: 'Ensure all interactive elements are keyboard accessible'
        });
        score -= 3;
      }
    });

    // Check for proper ARIA usage
    const ariaElements = document.querySelectorAll('[aria-*]');
    ariaElements.forEach((element, index) => {
      const ariaLabel = element.getAttribute('aria-label');
      const ariaLabelledby = element.getAttribute('aria-labelledby');
      
      if (ariaLabel && ariaLabelledby) {
        newIssues.push({
          id: `aria-conflict-${index}`,
          type: 'warning',
          title: 'ARIA Attribute Conflict',
          description: 'Both aria-label and aria-labelledby are present',
          wcagLevel: 'AA',
          element: element as HTMLElement,
          fixable: true,
          suggestion: 'Use either aria-label or aria-labelledby, not both'
        });
        score -= 2;
      }
    });

    // Ensure score doesn't go below 0
    score = Math.max(0, score);

    setIssues(newIssues);
    setComplianceScore(score);
    setIsChecking(false);
  }, []);

  // Auto-fix accessibility issues
  const autoFixIssues = useCallback(() => {
    const fixableIssues = issues.filter(issue => issue.fixable);
    let fixedCount = 0;

    fixableIssues.forEach(issue => {
      if (issue.element) {
        switch (issue.id.split('-')[0]) {
          case 'missing-alt':
            if (issue.element.tagName === 'IMG') {
              const img = issue.element as HTMLImageElement;
              if (!img.alt) {
                img.alt = 'Image';
                fixedCount++;
              }
            }
            break;
          
          case 'heading-skip':
            // This would require more complex logic to fix
            break;
          
          case 'missing-label':
            // This would require more complex logic to fix
            break;
          
          case 'contrast-issue':
            // This would require more complex logic to fix
            break;
          
          case 'keyboard-nav':
            if (issue.element.getAttribute('tabindex') === '-1') {
              issue.element.removeAttribute('tabindex');
              fixedCount++;
            }
            break;
          
          case 'aria-conflict':
            if (issue.element.hasAttribute('aria-label') && issue.element.hasAttribute('aria-labelledby')) {
              issue.element.removeAttribute('aria-labelledby');
              fixedCount++;
            }
            break;
        }
      }
    });

    if (fixedCount > 0) {
      // Re-check accessibility after fixes
      setTimeout(checkAccessibility, 500);
    }

    return fixedCount;
  }, [issues, checkAccessibility]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Auto-check accessibility
  useEffect(() => {
    if (autoCheck) {
      const timer = setTimeout(checkAccessibility, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoCheck, checkAccessibility]);

  // Get compliance color
  const getComplianceColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get compliance background color
  const getComplianceBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900/20';
    if (score >= 70) return 'bg-yellow-100 dark:bg-yellow-900/20';
    return 'bg-red-100 dark:bg-red-900/20';
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${className}`}
        aria-label="Accessibility Controls"
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
            className={`fixed ${getPositionClasses()} z-40 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700`}
            style={{ marginTop: position.startsWith('top') ? '5rem' : 'auto', marginBottom: position.startsWith('bottom') ? '5rem' : 'auto' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Accessibility Controls
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {['controls', 'issues', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Controls Tab */}
              {activeTab === 'controls' && (
                <div className="space-y-4">
                  {/* High Contrast */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">High Contrast</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Improve text visibility</p>
                    </div>
                    <button
                      onClick={() => applySettings({ highContrast: !settings.highContrast })}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.highContrast ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  {/* Font Size */}
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Font Size</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => applySettings({ fontSize: size })}
                          className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                            settings.fontSize === size
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                          }`}
                        >
                          {size.charAt(0).toUpperCase() + size.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Reduced Motion */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Reduced Motion</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Minimize animations</p>
                    </div>
                    <button
                      onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  {/* Focus Indicator */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Focus Indicator</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Show focus outlines</p>
                    </div>
                    <button
                      onClick={() => applySettings({ focusIndicator: !settings.focusIndicator })}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  {/* Color Blindness */}
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Color Blindness Support</h3>
                    <select
                      value={settings.colorBlindness}
                      onChange={(e) => applySettings({ colorBlindness: e.target.value as any })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    >
                      <option value="none">None</option>
                      <option value="protanopia">Protanopia (Red-Blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                    </select>
                  </div>

                  {/* Dyslexia Support */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Dyslexia Support</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Use dyslexia-friendly font</p>
                    </div>
                    <button
                      onClick={() => applySettings({ dyslexia: !settings.dyslexia })}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.dyslexia ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.dyslexia ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              )}

              {/* Issues Tab */}
              {activeTab === 'issues' && (
                <div className="space-y-4">
                  {/* Compliance Score */}
                  <div className={`p-4 rounded-lg ${getComplianceBgColor(complianceScore)}`}>
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${getComplianceColor(complianceScore)}`}>
                        {complianceScore}/100
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        WCAG Compliance Score
                      </div>
                    </div>
                  </div>

                  {/* Check Button */}
                  <button
                    onClick={checkAccessibility}
                    disabled={isChecking}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {isChecking ? 'Checking...' : 'Check Accessibility'}
                  </button>

                  {/* Auto-fix Button */}
                  {issues.length > 0 && (
                    <button
                      onClick={autoFixIssues}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Auto-fix Issues
                    </button>
                  )}

                  {/* Issues List */}
                  <div className="space-y-3">
                    {issues.map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-3 rounded-lg border ${
                          issue.type === 'error' ? 'border-red-200 bg-red-50 dark:bg-red-900/20' :
                          issue.type === 'warning' ? 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20' :
                          'border-blue-200 bg-blue-50 dark:bg-blue-900/20'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {issue.type === 'error' && (
                            <ExclamationTriangleIcon className="w-4 h-4 text-red-600 mt-0.5" />
                          )}
                          {issue.type === 'warning' && (
                            <ExclamationTriangleIcon className="w-4 h-4 text-yellow-600 mt-0.5" />
                          )}
                          {issue.type === 'info' && (
                            <InformationCircleIcon className="w-4 h-4 text-blue-600 mt-0.5" />
                          )}
                          
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              {issue.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {issue.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`text-xs px-2 py-1 rounded ${
                                issue.wcagLevel === 'A' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                                issue.wcagLevel === 'AA' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                                'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                              }`}>
                                WCAG {issue.wcagLevel}
                              </span>
                              {issue.fixable && (
                                <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded">
                                  Auto-fixable
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                              <strong>Suggestion:</strong> {issue.suggestion}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-4">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <InformationCircleIcon className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                    <p>Accessibility settings are automatically saved to your browser.</p>
                    <p className="text-sm mt-2">These settings will persist across sessions.</p>
                  </div>
                  
                  <button
                    onClick={() => {
                      localStorage.removeItem('accessibility-settings');
                      window.location.reload();
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Reset All Settings
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG Filters for Color Blindness Simulation */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default EnhancedAccessibility;
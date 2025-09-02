import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Move, 
  Keyboard,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  lineHeight: 'tight' | 'normal' | 'loose';
  spacing: 'compact' | 'normal' | 'comfortable';
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'high' | 'medium' | 'low';
  wcagLevel: 'A' | 'AA' | 'AAA';
  fix?: () => void;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoFix?: boolean;
  complianceLevel?: 'A' | 'AA' | 'AAA';
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  autoFix = true,
  complianceLevel = 'AA'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindness: 'none',
    fontSize: 'medium',
    lineHeight: 'normal',
    spacing: 'normal'
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [currentIssue, setCurrentIssue] = useState<AccessibilityIssue | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      body.style.filter = 'contrast(1.5) brightness(1.1)';
    } else {
      root.classList.remove('high-contrast');
      body.style.filter = '';
    }

    // Large text mode
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Line height
    const lineHeightMap = {
      tight: '1.2',
      normal: '1.5',
      loose: '1.8'
    };
    root.style.lineHeight = lineHeightMap[settings.lineHeight];

    // Spacing
    const spacingMap = {
      compact: '0.5rem',
      normal: '1rem',
      comfortable: '1.5rem'
    };
    root.style.setProperty('--spacing-base', spacingMap[settings.spacing]);

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--motion-reduce', '1');
    } else {
      root.style.setProperty('--motion-reduce', '0');
    }

    // Color blindness simulation
    if (settings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      body.style.filter = filters[settings.colorBlindness];
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      enableKeyboardNavigation();
    } else {
      disableKeyboardNavigation();
    }

    // Screen reader enhancements
    if (settings.screenReader) {
      enableScreenReaderEnhancements();
    } else {
      disableScreenReaderEnhancements();
    }

  }, [settings, enabled]);

  // Enable keyboard navigation
  const enableKeyboardNavigation = () => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('keydown', handleKeyboardNavigation);
      element.setAttribute('tabindex', '0');
    });
  };

  // Disable keyboard navigation
  const disableKeyboardNavigation = () => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]'
    );

    focusableElements.forEach((element) => {
      element.removeEventListener('keydown', handleKeyboardNavigation);
    });
  };

  // Handle keyboard navigation
  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    
    switch (event.key) {
      case 'Enter':
      case ' ':
        if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
          event.preventDefault();
          target.click();
        }
        break;
      case 'Escape':
        // Close modals, dropdowns, etc.
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            (modal as HTMLElement).click();
          }
        });
        break;
    }
  };

  // Enable screen reader enhancements
  const enableScreenReaderEnhancements = () => {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA descriptions to complex elements
    const complexElements = document.querySelectorAll('[data-complex]');
    complexElements.forEach(element => {
      element.setAttribute('aria-describedby', `${element.id}-description`);
    });

    // Enhance form labels
    const inputs = document.querySelectorAll('input:not([aria-labelledby])');
    inputs.forEach(input => {
      const label = input.closest('label') || document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
      }
    });
  };

  // Disable screen reader enhancements
  const disableScreenReaderEnhancements = () => {
    // Remove added ARIA attributes
    const elementsWithAria = document.querySelectorAll('[aria-label*="Button "], [aria-describedby*="-description"]');
    elementsWithAria.forEach(element => {
      element.removeAttribute('aria-label');
      element.removeAttribute('aria-describedby');
    });
  };

  // Scan for accessibility issues
  const scanForIssues = async () => {
    setIsScanning(true);
    setScanProgress(0);
    setIssues([]);

    const newIssues: AccessibilityIssue[] = [];

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          id: `img-alt-${index}`,
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element: img,
          severity: 'high',
          wcagLevel: 'A',
          fix: () => {
            img.setAttribute('alt', 'Descriptive text for image');
            img.setAttribute('aria-label', 'Descriptive text for image');
          }
        });
      }
    });

    setScanProgress(25);

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        newIssues.push({
          id: `heading-structure-${index}`,
          type: 'warning',
          message: `Heading level ${level} follows heading level ${previousLevel} (skipped level ${previousLevel + 1})`,
          element: heading as HTMLElement,
          severity: 'medium',
          wcagLevel: 'AA'
        });
      }
      previousLevel = level;
    });

    setScanProgress(50);

    // Check for proper form labels
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach((input, index) => {
      const label = input.closest('label') || document.querySelector(`label[for="${input.id}"]`);
      if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        newIssues.push({
          id: `form-label-${index}`,
          type: 'error',
          message: 'Form input missing label or aria-label',
          element: input as HTMLElement,
          severity: 'high',
          wcagLevel: 'A',
          fix: () => {
            input.setAttribute('aria-label', 'Input field');
          }
        });
      }
    });

    setScanProgress(75);

    // Check for proper color contrast
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // Simple contrast check (this is a simplified version)
      if (color === backgroundColor) {
        newIssues.push({
          id: `color-contrast-${index}`,
          type: 'warning',
          message: 'Text color may not provide sufficient contrast with background',
          element: element as HTMLElement,
          severity: 'medium',
          wcagLevel: 'AA'
        });
      }
    });

    setScanProgress(100);
    setIssues(newIssues);
    setIsScanning(false);

    // Auto-fix if enabled
    if (autoFix) {
      setTimeout(() => {
        autoFixIssues(newIssues);
      }, 1000);
    }
  };

  // Auto-fix accessibility issues
  const autoFixIssues = (issuesToFix: AccessibilityIssue[]) => {
    const fixableIssues = issuesToFix.filter(issue => issue.fix);
    
    fixableIssues.forEach((issue, index) => {
      setTimeout(() => {
        if (issue.fix) {
          issue.fix();
          setIssues(prev => prev.filter(i => i.id !== issue.id));
        }
      }, index * 200);
    });
  };

  // Handle settings change
  const handleSettingChange = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Get issue count by type
  const getIssueCount = (type: 'error' | 'warning' | 'info') => {
    return issues.filter(issue => issue.type === type).length;
  };

  // Get compliance score
  const getComplianceScore = () => {
    const totalIssues = issues.length;
    const criticalIssues = issues.filter(issue => issue.severity === 'high').length;
    
    if (criticalIssues > 0) return 0;
    if (totalIssues === 0) return 100;
    
    return Math.max(0, 100 - (totalIssues * 10));
  };

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Accessibility Panel"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6 text-white" />
        {issues.length > 0 && (
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {issues.length}
          </div>
        )}
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-6 bottom-20 z-50 w-80 max-h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            ref={panelRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5" />
                <h3 className="font-semibold">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {/* Compliance Score */}
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {getComplianceScore()}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  WCAG {complianceLevel} Compliance
                </div>
              </div>

              {/* Issue Summary */}
              {issues.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Issues Found:</h4>
                  <div className="flex space-x-2 text-sm">
                    <span className="flex items-center space-x-1 text-red-600">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{getIssueCount('error')}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-yellow-600">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{getIssueCount('warning')}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-blue-600">
                      <Info className="w-4 h-4" />
                      <span>{getIssueCount('info')}</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Scan Button */}
              <button
                onClick={scanForIssues}
                disabled={isScanning}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
              >
                {isScanning ? 'Scanning...' : 'Scan for Issues'}
              </button>

              {/* Scan Progress */}
              {isScanning && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              )}

              {/* Settings */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Settings</h4>
                
                {/* High Contrast */}
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                </label>

                {/* Large Text */}
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                </label>

                {/* Reduced Motion */}
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                </label>

                {/* Focus Indicators */}
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicators}
                    onChange={(e) => handleSettingChange('focusIndicators', e.target.checked)}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
                </label>

                {/* Font Size */}
                <div className="space-y-1">
                  <label className="text-sm text-gray-700 dark:text-gray-300">Font Size</label>
                  <select
                    value={settings.fontSize}
                    onChange={(e) => handleSettingChange('fontSize', e.target.value)}
                    className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                  </select>
                </div>

                {/* Color Blindness */}
                <div className="space-y-1">
                  <label className="text-sm text-gray-700 dark:text-gray-300">Color Blindness Simulation</label>
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => handleSettingChange('colorBlindness', e.target.value)}
                    className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Color Blindness Filters */}
      {settings.colorBlindness !== 'none' && (
        <svg style={{ position: 'absolute', left: '-9999px' }}>
          <defs>
            <filter id="protanopia">
              <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0" />
            </filter>
            <filter id="deuteranopia">
              <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" />
            </filter>
            <filter id="tritanopia">
              <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" />
            </filter>
          </defs>
        </svg>
      )}
    </>
  );
};

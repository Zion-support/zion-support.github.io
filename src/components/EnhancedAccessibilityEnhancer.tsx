import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  Smartphone,
  Monitor,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Accessibility,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'high' | 'medium' | 'low';
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  zoomLevel: number;
}

interface AccessibilityFeatures {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showIssues?: boolean;
  autoFix?: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
  announceChanges?: boolean;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  highSaturation: false,
  focusIndicator: true,
  screenReader: false,
  keyboardNavigation: true,
  zoomLevel: 100
};

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showIssues = false,
  autoFix = true,
  showControls = true,
  autoDetect = true,
  announceChanges = true,
  showPanel = false,
  onSettingsChange
}) => {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusIndicator: true,
    screenReader: false,
    keyboardNavigation: true
  });
  const [isOpen, setIsOpen] = useState(showPanel);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    if (announceChanges) {
      setAnnouncements(prev => [...prev, message]);
      setTimeout(() => {
        setAnnouncements(prev => prev.filter(a => a !== message));
      }, 3000);
    }
  }, [announceChanges]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
    
    announceToScreenReader(`${key} ${value ? 'enabled' : 'disabled'}`);
  }, [settings, onSettingsChange, announceToScreenReader]);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.setAttribute('data-high-contrast', 'true');
      root.style.setProperty('--high-contrast', '1');
    } else {
      root.removeAttribute('data-high-contrast');
      root.style.removeProperty('--high-contrast');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.setAttribute('data-large-text', 'true');
      root.style.setProperty('--large-text', '1');
    } else {
      root.removeAttribute('data-large-text');
      root.style.removeProperty('--large-text');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.setAttribute('data-motion-reduced', 'true');
      root.style.setProperty('--reduced-motion', '1');
    } else {
      root.removeAttribute('data-motion-reduced');
      root.style.removeProperty('--reduced-motion');
    }
    
    // Zoom level
    root.style.setProperty('--zoom-level', `${newSettings.zoomLevel / 100}`);
    root.setAttribute('data-zoom-level', newSettings.zoomLevel.toString());
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.setAttribute('data-focus-indicator', 'true');
    } else {
      root.removeAttribute('data-focus-indicator');
    }
  }, []);

  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (element instanceof HTMLElement) {
            element.click();
          }
        }
      });

      // Add focus indicators
      element.addEventListener('focus', () => {
        setCurrentFocus(element as HTMLElement);
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  }, []);

  // ARIA improvements
  const enhanceARIA = useCallback(() => {
    // Add missing alt attributes to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        const filename = img.src.split('/').pop() || '';
        const altText = filename.replace(/\.(jpg|jpeg|png|gif|svg)$/i, '').replace(/[-_]/g, ' ');
        img.alt = altText || 'Image';
      }
    });

    // Add missing labels to form inputs
    const inputs = document.querySelectorAll('input:not([id]), textarea:not([id]), select:not([id])');
    inputs.forEach((input, index) => {
      if (input instanceof HTMLElement) {
        const id = `input-${index}-${Date.now()}`;
        input.id = id;
        
        // Create label if none exists
        const existingLabel = document.querySelector(`label[for="${id}"]`);
        if (!existingLabel) {
          const label = document.createElement('label');
          label.htmlFor = id;
          label.textContent = input.getAttribute('placeholder') || input.getAttribute('name') || 'Input field';
          input.parentNode?.insertBefore(label, input);
        }
      }
    });

    // Add missing ARIA labels to buttons
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      if (button instanceof HTMLButtonElement && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  }, []);

  // Color contrast checking
  const checkColorContrast = useCallback(() => {
    const elements = document.querySelectorAll('*');
    const contrastIssues: AccessibilityIssue[] = [];

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const style = window.getComputedStyle(element);
        const backgroundColor = style.backgroundColor;
        const color = style.color;

        // Simple contrast check (this is a basic implementation)
        if (backgroundColor && color && backgroundColor !== 'transparent') {
          // Add contrast checking logic here
          // For now, we'll just check if colors are defined
          if (backgroundColor === color) {
            contrastIssues.push({
              id: `contrast-${Date.now()}-${Math.random()}`,
              type: 'error',
              message: 'Low color contrast detected',
              element,
              severity: 'high'
            });
          }
        }
      }
    });

    if (contrastIssues.length > 0) {
      setIssues(prev => [...prev, ...contrastIssues]);
    }
  }, []);

  // Screen reader support
  const enhanceScreenReaderSupport = useCallback(() => {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    
    if (!document.querySelector('.skip-link')) {
      skipLink.classList.add('skip-link');
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, []);

  // Auto-fix accessibility issues
  const autoFixIssues = useCallback(() => {
    if (!autoFix) return;
    
    setIsEnhancing(true);
    
    // Apply all enhancements
    enhanceKeyboardNavigation();
    enhanceARIA();
    enhanceScreenReaderSupport();
    
    // Apply current settings
    applyAccessibilitySettings(settings);
    
    setIsEnhancing(false);
    announceToScreenReader('Accessibility enhancements applied');
  }, [autoFix, enhanceKeyboardNavigation, enhanceARIA, enhanceScreenReaderSupport, applyAccessibilitySettings, settings]);

  // Auto-detect accessibility issues
  const autoDetectIssues = useCallback(() => {
    if (!autoDetect) return;
    
    checkColorContrast();
    // Add more detection logic here
  }, [autoDetect, checkColorContrast]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.key) {
          case 'a':
            e.preventDefault();
            setIsOpen(!isOpen);
            break;
          case 'h':
            e.preventDefault();
            handleSettingChange('highContrast', !settings.highContrast);
            break;
          case 'l':
            e.preventDefault();
            handleSettingChange('largeText', !settings.largeText);
            break;
          case 'm':
            e.preventDefault();
            handleSettingChange('reducedMotion', !settings.reducedMotion);
            break;
          case '=':
          case '+':
            e.preventDefault();
            handleSettingChange('zoomLevel', Math.min(settings.zoomLevel + 10, 200));
            break;
          case '-':
            e.preventDefault();
            handleSettingChange('zoomLevel', Math.max(settings.zoomLevel - 10, 50));
            break;
          case '0':
            e.preventDefault();
            handleSettingChange('zoomLevel', 100);
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, settings, handleSettingChange]);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;
    
    if (autoDetect) {
      autoDetectIssues();
    }
    
    if (autoFix) {
      autoFixIssues();
    }
    
    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, [enabled, autoDetect, autoFix, autoDetectIssues, autoFixIssues, applyAccessibilitySettings, settings]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Panel Toggle */}
      {showControls && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Accessibility settings"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
            ref={containerRef}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                  <Accessibility className="w-6 h-6 text-blue-600" />
                  <span>Accessibility</span>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* Visual Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Visual Settings
                  </h3>
                  <div className="space-y-4">
                    {/* High Contrast */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Contrast className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                      </div>
                      <button
                        onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Large Text */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                      </div>
                      <button
                        onClick={() => handleSettingChange('largeText', !settings.largeText)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.largeText ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Reduced Motion */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                      </div>
                      <button
                        onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Focus Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">Focus Indicator</span>
                      </div>
                      <button
                        onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Zoom Control */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Zoom Control
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{settings.zoomLevel}%</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleSettingChange('zoomLevel', Math.max(settings.zoomLevel - 10, 50))}
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Zoom out"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleSettingChange('zoomLevel', Math.min(settings.zoomLevel + 10, 200))}
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Zoom in"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleSettingChange('zoomLevel', 100)}
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Reset zoom"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Keyboard Shortcuts
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + A</kbd> Toggle panel</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + H</kbd> High contrast</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + L</kbd> Large text</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + M</kbd> Reduce motion</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + +/-</kbd> Zoom in/out</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + 0</kbd> Reset zoom</div>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setSettings(defaultSettings);
                    applyAccessibilitySettings(defaultSettings);
                    announceToScreenReader('Accessibility settings reset to default');
                  }}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announcements */}
      <AnimatePresence>
        {announcements.length > 0 && (
          <div className="fixed top-4 left-4 z-50 space-y-2">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{announcement}</span>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Focus indicator styles */}
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
        
        [data-motion-reduced="true"] * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        [data-zoom-level] {
          transform: scale(var(--zoom-level, 1));
          transform-origin: top left;
        }
      `}</style>
    </>
  );
};
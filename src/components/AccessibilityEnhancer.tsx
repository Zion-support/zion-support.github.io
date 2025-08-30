import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Palette, 
  MousePointer,
  Keyboard,
  Braille,
  Accessibility,
  Settings,
  CheckCircle,
  AlertTriangle,
  Info,
  ZoomIn,
  ZoomOut,
  Contrast,
  Highlighter,
  Focus,
  Navigation,
  Speech
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
  zoomLevel: number;
  speechRate: number;
  highlightLinks: boolean;
  showFocus: boolean;
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'high' | 'medium' | 'low';
  fix?: string;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    colorBlind: false,
    dyslexia: false,
    zoomLevel: 100,
    speechRate: 1,
    highlightLinks: false,
    showFocus: false
  });

  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const focusRef = useRef<HTMLDivElement>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
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
      document.documentElement.style.fontSize = '120%';
    } else {
      document.documentElement.style.fontSize = '100%';
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.style.setProperty('--motion-reduce', 'reduce');
    } else {
      document.documentElement.style.removeProperty('--motion-reduce');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('show-focus');
    } else {
      document.documentElement.classList.remove('show-focus');
    }

    // Apply color blind support
    if (updatedSettings.colorBlind) {
      document.documentElement.classList.add('color-blind-support');
    } else {
      document.documentElement.classList.remove('color-blind-support');
    }

    // Apply dyslexia support
    if (updatedSettings.dyslexia) {
      document.documentElement.classList.add('dyslexia-support');
    } else {
      document.documentElement.classList.remove('dyslexia-support');
    }

    // Apply zoom
    document.documentElement.style.zoom = `${updatedSettings.zoomLevel}%`;

    // Apply link highlighting
    if (updatedSettings.highlightLinks) {
      document.documentElement.classList.add('highlight-links');
    } else {
      document.documentElement.classList.remove('highlight-links');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings(parsed);
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Scan for accessibility issues
  const scanAccessibility = useCallback(async () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
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
            fix: 'Add alt text or aria-label attribute'
          });
        }
      });

      // Check for proper heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          newIssues.push({
            id: `heading-hierarchy-${index}`,
            type: 'warning',
            message: `Heading hierarchy skipped from h${previousLevel} to h${level}`,
            element: heading as HTMLElement,
            severity: 'medium',
            fix: 'Maintain proper heading hierarchy (h1 → h2 → h3)'
          });
        }
        previousLevel = level;
      });

      // Check for proper form labels
      const formInputs = document.querySelectorAll('input, select, textarea');
      formInputs.forEach((input, index) => {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        
        if (!label && !ariaLabel && !input.getAttribute('placeholder')) {
          newIssues.push({
            id: `form-label-${index}`,
            type: 'error',
            message: 'Form input missing label or aria-label',
            element: input as HTMLElement,
            severity: 'high',
            fix: 'Add label element or aria-label attribute'
          });
        }
      });

      // Check for proper ARIA attributes
      const elementsWithRole = document.querySelectorAll('[role]');
      elementsWithRole.forEach((element, index) => {
        const role = element.getAttribute('role');
        const ariaLabel = element.getAttribute('aria-label');
        const ariaLabelledby = element.getAttribute('aria-labelledby');
        
        if (!ariaLabel && !ariaLabelledby) {
          newIssues.push({
            id: `aria-label-${index}`,
            type: 'warning',
            message: `Element with role="${role}" missing aria-label or aria-labelledby`,
            element: element as HTMLElement,
            severity: 'medium',
            fix: 'Add aria-label or aria-labelledby attribute'
          });
        }
      });

      // Check for sufficient color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // This is a simplified check - in a real implementation, you'd use a color contrast library
        if (color === backgroundColor) {
          newIssues.push({
            id: `color-contrast-${index}`,
            type: 'warning',
            message: 'Text color may not provide sufficient contrast',
            element: element as HTMLElement,
            severity: 'medium',
            fix: 'Ensure text has sufficient contrast with background'
          });
        }
      });

    } catch (error) {
      console.error('Error scanning accessibility:', error);
    }

    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Speak text
  const speakText = useCallback((text: string) => {
    if (speechSynthesis && settings.screenReader) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = settings.speechRate;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  }, [speechSynthesis, settings.screenReader, settings.speechRate]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
      
      let nextIndex = currentIndex;
      
      switch (event.key) {
        case 'Tab':
          // Let default tab behavior work
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault();
          nextIndex = (currentIndex + 1) % focusableElements.length;
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
          break;
        case 'Enter':
        case ' ':
          if (document.activeElement instanceof HTMLElement) {
            event.preventDefault();
            document.activeElement.click();
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
      
      if (nextIndex !== currentIndex) {
        (focusableElements[nextIndex] as HTMLElement)?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Track focus for visual indicator
  useEffect(() => {
    const handleFocusChange = () => {
      setCurrentFocus(document.activeElement as HTMLElement);
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, []);

  // Auto-scan on mount
  useEffect(() => {
    scanAccessibility();
  }, [scanAccessibility]);

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'info': return <Info className="w-4 h-4 text-blue-500" />;
      default: return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'border-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default: return 'border-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Accessibility Settings"
        onMouseEnter={() => speakText('Accessibility Settings')}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 w-96 max-h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-blue-500" />
                  Accessibility
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close accessibility panel"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => applySettings({ largeText: !settings.largeText })}
                  className={`p-2 rounded-lg border transition-colors ${
                    settings.largeText 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  aria-label="Toggle large text"
                >
                  <Type className="w-4 h-4 mx-auto mb-1" />
                  <span className="text-xs">Large Text</span>
                </button>

                <button
                  onClick={() => applySettings({ highContrast: !settings.highContrast })}
                  className={`p-2 rounded-lg border transition-colors ${
                    settings.highContrast 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  aria-label="Toggle high contrast"
                >
                  <Contrast className="w-4 h-4 mx-auto mb-1" />
                  <span className="text-xs">High Contrast</span>
                </button>

                <button
                  onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                  className={`p-2 rounded-lg border transition-colors ${
                    settings.reducedMotion 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  aria-label="Toggle reduced motion"
                >
                  <Eye className="w-4 h-4 mx-auto mb-1" />
                  <span className="text-xs">Reduced Motion</span>
                </button>

                <button
                  onClick={() => applySettings({ screenReader: !settings.screenReader })}
                  className={`p-2 rounded-lg border transition-colors ${
                    settings.screenReader 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  aria-label="Toggle screen reader"
                >
                  <Speech className="w-4 h-4 mx-auto mb-1" />
                  <span className="text-xs">Screen Reader</span>
                </button>
              </div>

              {/* Zoom Control */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Zoom Level: {settings.zoomLevel}%
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => applySettings({ zoomLevel: Math.max(50, settings.zoomLevel - 10) })}
                    className="p-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="10"
                    value={settings.zoomLevel}
                    onChange={(e) => applySettings({ zoomLevel: parseInt(e.target.value) })}
                    className="flex-1"
                  />
                  <button
                    onClick={() => applySettings({ zoomLevel: Math.min(200, settings.zoomLevel + 10) })}
                    className="p-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Speech Rate */}
              {settings.screenReader && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Speech Rate: {settings.speechRate}x
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={settings.speechRate}
                    onChange={(e) => applySettings({ speechRate: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                </div>
              )}

              {/* Accessibility Issues */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Issues Found: {issues.length}
                  </h4>
                  <button
                    onClick={scanAccessibility}
                    disabled={isScanning}
                    className="px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded transition-colors"
                  >
                    {isScanning ? 'Scanning...' : 'Scan'}
                  </button>
                </div>
                
                {issues.length > 0 && (
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {issues.slice(0, 3).map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-2 rounded border ${getSeverityColor(issue.severity)}`}
                      >
                        <div className="flex items-start gap-2">
                          {getIssueIcon(issue.type)}
                          <div className="flex-1">
                            <p className="text-xs font-medium text-gray-900 dark:text-white">
                              {issue.message}
                            </p>
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Indicator */}
      {settings.showFocus && currentFocus && (
        <div
          ref={focusRef}
          className="fixed pointer-events-none z-[9999] border-2 border-blue-500 rounded transition-all duration-200"
          style={{
            left: currentFocus.offsetLeft - 2,
            top: currentFocus.offsetTop - 2,
            width: currentFocus.offsetWidth + 4,
            height: currentFocus.offsetHeight + 4
          }}
        />
      )}

      {/* Global CSS Classes */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .show-focus *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .color-blind-support {
          filter: grayscale(100%) contrast(120%);
        }
        
        .dyslexia-support {
          font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif !important;
          line-height: 1.6 !important;
          letter-spacing: 0.1em !important;
        }
        
        .highlight-links a {
          background-color: #fef3c7 !important;
          border: 2px solid #f59e0b !important;
          padding: 2px 4px !important;
          border-radius: 4px !important;
        }
        
        [data-motion="reduce"] *,
        [data-motion="reduce"] *::before,
        [data-motion="reduce"] *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </>
  );
};
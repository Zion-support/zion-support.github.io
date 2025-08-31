import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  severity: 'high' | 'medium' | 'low';
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
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showIssues = false,
  autoFix = true,
  showControls = true,
  autoDetect = true,
  announceChanges = true
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    
    const body = document.body;
    if (body.firstChild) {
      body.insertBefore(skipLink, body.firstChild);
    }

    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    body.appendChild(liveRegion);
  }, []);

  // High contrast mode
  const toggleHighContrast = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, highContrast: !prev.highContrast };
      
      if (newFeatures.highContrast) {
        document.documentElement.classList.add('high-contrast');
        document.documentElement.style.setProperty('--high-contrast', '1');
      } else {
        document.documentElement.classList.remove('high-contrast');
        document.documentElement.style.setProperty('--high-contrast', '0');
      }
      
      return newFeatures;
    });
  }, []);

  // Reduced motion
  const toggleReducedMotion = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, reducedMotion: !prev.reducedMotion };
      
      if (newFeatures.reducedMotion) {
        document.documentElement.classList.add('reduced-motion');
        document.documentElement.style.setProperty('--reduced-motion', '1');
      } else {
        document.documentElement.classList.remove('reduced-motion');
        document.documentElement.style.setProperty('--reduced-motion', '0');
      }
      
      return newFeatures;
    });
  }, []);

  // Large text
  const toggleLargeText = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, largeText: !prev.largeText };
      
      if (newFeatures.largeText) {
        document.documentElement.classList.add('large-text');
        document.documentElement.style.setProperty('--large-text', '1');
      } else {
        document.documentElement.classList.remove('large-text');
        document.documentElement.style.setProperty('--large-text', '0');
      }
      
      return newFeatures;
    });
  }, []);

  // Focus indicators
  const toggleFocusIndicators = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, focusIndicator: !prev.focusIndicator };
      
      if (newFeatures.focusIndicator) {
        document.documentElement.classList.add('focus-indicators');
        document.documentElement.style.setProperty('--focus-indicators', '1');
      } else {
        document.documentElement.classList.remove('focus-indicators');
        document.documentElement.style.setProperty('--focus-indicators', '0');
      }
      
      return newFeatures;
    });
  }, []);

  // Main enhancement function
  const runEnhancements = useCallback(async () => {
    if (!enabled) return;
    
    setIsEnhancing(true);
    
    try {
      await Promise.all([
        enhanceKeyboardNavigation(),
        enhanceARIA(),
        checkColorContrast(),
        enhanceScreenReaderSupport()
      ]);
      
      if (announceChanges) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = 'Accessibility enhancements applied successfully';
        }
      }
    } catch (error) {
      console.error('Accessibility enhancement error:', error);
    } finally {
      setIsEnhancing(false);
    }
  }, [enabled, enhanceKeyboardNavigation, enhanceARIA, checkColorContrast, enhanceScreenReaderSupport, announceChanges]);

  // Auto-detect user preferences
  const detectUserPreferences = useCallback(() => {
    if (!autoDetect) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setFeatures(prev => ({ ...prev, reducedMotion: true }));
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.style.setProperty('--reduced-motion', '1');
    }
    
    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    if (prefersHighContrast) {
      setFeatures(prev => ({ ...prev, highContrast: true }));
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--high-contrast', '1');
    }
  }, [autoDetect]);

  // Effect for initial enhancements
  useEffect(() => {
    if (enabled) {
      runEnhancements();
      detectUserPreferences();
    }
  }, [enabled, runEnhancements, detectUserPreferences]);

  // Effect for auto-fixing issues
  useEffect(() => {
    if (autoFix && issues.length > 0) {
      issues.forEach(issue => {
        if (issue.element && issue.type === 'error') {
          // Auto-fix logic here
          console.log(`Auto-fixing accessibility issue: ${issue.message}`);
        }
      });
    }
  }, [autoFix, issues]);

  // Accessibility controls panel
  const renderControls = () => {
    if (!showControls) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-4 top-20 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 min-w-64"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Accessibility Controls
          </h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isOpen ? '−' : '+'}
          </button>
        </div>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              <button
                onClick={toggleHighContrast}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  features.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  features.highContrast ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
              <button
                onClick={toggleReducedMotion}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  features.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  features.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              <button
                onClick={toggleLargeText}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  features.largeText ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  features.largeText ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
              <button
                onClick={toggleFocusIndicators}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  features.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  features.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  // Accessibility issues display
  const renderIssues = () => {
    if (!showIssues || issues.length === 0) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-sm z-50"
      >
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          Accessibility Issues ({issues.length})
        </h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {issues.map(issue => (
            <div
              key={issue.id}
              className={`p-2 rounded text-xs ${
                issue.severity === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                issue.severity === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:bg-blue-200'
              }`}
            >
              <div className="font-medium">{issue.type.toUpperCase()}</div>
              <div>{issue.message}</div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  // Status indicator
  const renderStatus = () => {
    if (!enabled) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 z-50"
        title={`Accessibility Enhancement: ${isEnhancing ? 'Enhancing...' : 'Enhanced'}`}
      >
        <div className={`w-3 h-3 rounded-full ${
          isEnhancing ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'
        }`} />
      </motion.div>
    );
  };

  if (!enabled) return null;

  return (
    <>
      {renderStatus()}
      {renderControls()}
      {renderIssues()}
    </>
  );
};
import React, { useEffect, useState, useCallback } from 'react';
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
  focusIndicator: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false
  });
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);

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

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Check for accessibility issues
  const checkAccessibility = useCallback(() => {
    const issues: string[] = [];

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text`);
      }
    });

    // Check for missing ARIA labels on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((el, index) => {
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) {
        if (el.tagName === 'BUTTON' && !el.textContent?.trim()) {
          issues.push(`Button ${index + 1} missing accessible label`);
        }
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (currentLevel - previousLevel > 1) {
        issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
      }
      previousLevel = currentLevel;
    });

    // Check for sufficient color contrast (basic check)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((el, index) => {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor || color === 'transparent') {
        issues.push(`Element ${index + 1} has insufficient color contrast`);
      }
    });

    setAccessibilityIssues(issues);
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if not in keyboard navigation mode
      if (!settings.keyboardNavigation) return;

      const target = event.target as HTMLElement;
      
      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (event.shiftKey) {
            // Shift+Tab: previous element
            const prevElement = findPreviousFocusableElement(target);
            if (prevElement) {
              event.preventDefault();
              prevElement.focus();
            }
          } else {
            // Tab: next element
            const nextElement = findNextFocusableElement(target);
            if (nextElement) {
              event.preventDefault();
              nextElement.focus();
            }
          }
          break;
        
        case 'Enter':
        case ' ':
          // Enhanced enter/space handling
          if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
            event.preventDefault();
            target.click();
          }
          break;
        
        case 'Escape':
          // Close modals and panels
          const modals = document.querySelectorAll('[role="dialog"], .modal, .panel');
          modals.forEach(modal => {
            if (modal.classList.contains('open') || modal.getAttribute('aria-hidden') === 'false') {
              const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
              if (closeButton) {
                (closeButton as HTMLElement).click();
              }
            }
          });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Find next focusable element
  const findNextFocusableElement = (currentElement: HTMLElement): HTMLElement | null => {
    const focusableSelectors = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';
    const focusableElements = Array.from(document.querySelectorAll(focusableSelectors)) as HTMLElement[];
    const currentIndex = focusableElements.indexOf(currentElement);
    return focusableElements[currentIndex + 1] || focusableElements[0];
  };

  // Find previous focusable element
  const findPreviousFocusableElement = (currentElement: HTMLElement): HTMLElement | null => {
    const focusableSelectors = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';
    const focusableElements = Array.from(document.querySelectorAll(focusableSelectors)) as HTMLElement[];
    const currentIndex = focusableElements.indexOf(currentElement);
    return focusableElements[currentIndex - 1] || focusableElements[focusableElements.length - 1];
  };

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader]);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }

    // Show accessibility button after 5 seconds
    const timer = setTimeout(() => setIsVisible(true), 5000);
    
    // Check accessibility on mount
    checkAccessibility();

    return () => clearTimeout(timer);
  }, [applySettings, checkAccessibility]);

  useEffect(() => {
    const cleanup = setupKeyboardNavigation();
    return cleanup;
  }, [setupKeyboardNavigation]);

  // Announce setting changes
  useEffect(() => {
    if (settings.highContrast) {
      announceToScreenReader('High contrast mode enabled');
    }
    if (settings.largeText) {
      announceToScreenReader('Large text mode enabled');
    }
    if (settings.reducedMotion) {
      announceToScreenReader('Reduced motion mode enabled');
    }
  }, [settings.highContrast, settings.largeText, settings.reducedMotion, announceToScreenReader]);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        className="fixed bottom-6 right-24 z-50"
      >
        <button
          onClick={() => setShowPanel(!showPanel)}
          className="group relative p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110"
          aria-label="Accessibility settings"
        >
          <Eye className="w-6 h-6 text-white" />
          
          {/* Accessibility Issues Indicator */}
          {accessibilityIssues.length > 0 && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{accessibilityIssues.length}</span>
            </div>
          )}
        </button>
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-96 max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-purple-400/20 rounded-2xl shadow-2xl shadow-purple-400/10 z-40 overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-purple-400/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 id="accessibility-panel-title" className="text-white font-semibold">Accessibility</h3>
                  <p className="text-purple-400 text-sm">Enhanced experience</p>
                </div>
              </div>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Settings */}
              <div>
                <h4 className="text-white font-medium mb-3">Settings</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => applySettings({ highContrast: e.target.checked })}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <Contrast className="w-5 h-5 text-purple-400" />
                    <span className="text-white text-sm">High Contrast</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={(e) => applySettings({ largeText: e.target.checked })}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <Type className="w-5 h-5 text-purple-400" />
                    <span className="text-white text-sm">Large Text</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => applySettings({ reducedMotion: e.target.checked })}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <MousePointer className="w-5 h-5 text-purple-400" />
                    <span className="text-white text-sm">Reduced Motion</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => applySettings({ keyboardNavigation: e.target.checked })}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <Keyboard className="w-5 h-5 text-purple-400" />
                    <span className="text-white text-sm">Enhanced Keyboard Navigation</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => applySettings({ focusIndicator: e.target.checked })}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <MousePointer className="w-5 h-5 text-purple-400" />
                    <span className="text-white text-sm">Enhanced Focus Indicators</span>
                  </label>
                </div>
              </div>

              {/* Accessibility Issues */}
              {accessibilityIssues.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    Issues Found ({accessibilityIssues.length})
                  </h4>
                  <div className="space-y-2">
                    {accessibilityIssues.slice(0, 5).map((issue, index) => (
                      <div key={index} className="p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                        <p className="text-yellow-400 text-sm">{issue}</p>
                      </div>
                    ))}
                    {accessibilityIssues.length > 5 && (
                      <p className="text-gray-400 text-sm text-center">
                        +{accessibilityIssues.length - 5} more issues
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* No Issues State */}
              {accessibilityIssues.length === 0 && (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-white font-medium">All Good!</p>
                  <p className="text-gray-400 text-sm">No accessibility issues found</p>
                </div>
              )}

              {/* Quick Actions */}
              <div>
                <h4 className="text-white font-medium mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => checkAccessibility()}
                    className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 text-sm hover:bg-purple-500/30 transition-colors"
                  >
                    Recheck Issues
                  </button>
                  <button
                    onClick={() => {
                      setSettings({
                        highContrast: false,
                        largeText: false,
                        reducedMotion: false,
                        screenReader: false,
                        keyboardNavigation: false,
                        focusIndicator: false
                      });
                      applySettings({
                        highContrast: false,
                        largeText: false,
                        reducedMotion: false,
                        screenReader: false,
                        keyboardNavigation: false,
                        focusIndicator: false
                      });
                    }}
                    className="p-3 bg-gray-500/20 border border-gray-500/30 rounded-lg text-gray-400 text-sm hover:bg-gray-500/30 transition-colors"
                  >
                    Reset All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Class */}
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
        
        .high-contrast {
          filter: contrast(1.5) saturate(1.2);
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
          outline: 3px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
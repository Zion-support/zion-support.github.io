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
  Settings,
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
}

interface AccessibilityEnhancerProps {
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
  enableScreenReader?: boolean;
  enableKeyboardNavigation?: boolean;
  enableFocusIndicators?: boolean;
}

export function AccessibilityEnhancer({
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
  enableScreenReader = true,
  enableKeyboardNavigation = true,
  enableFocusIndicators = true
}: AccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false
  });
  const [showSettings, setShowSettings] = useState(false);
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  
  const announcementRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

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

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);

    setAnnouncements(prev => [...prev, message]);
  }, [settings.screenReader]);

  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    // Find all focusable elements
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];

    focusableElementsRef.current = Array.from(
      document.querySelectorAll(focusableSelectors.join(','))
    ) as HTMLElement[];

    // Add keyboard event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if target is in an input field
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (e.shiftKey) {
            // Shift+Tab: navigate backwards
            const currentIndex = focusableElementsRef.current.indexOf(target);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElementsRef.current.length - 1;
            focusableElementsRef.current[prevIndex]?.focus();
            e.preventDefault();
          } else {
            // Tab: navigate forwards
            const currentIndex = focusableElementsRef.current.indexOf(target);
            const nextIndex = currentIndex < focusableElementsRef.current.length - 1 ? currentIndex + 1 : 0;
            focusableElementsRef.current[nextIndex]?.focus();
            e.preventDefault();
          }
          break;

        case 'Enter':
        case ' ':
          // Activate buttons and links with Enter/Space
          if (target.tagName === 'BUTTON' || target.tagName === 'A') {
            e.preventDefault();
            target.click();
            announceToScreenReader(`Activated ${target.textContent || target.getAttribute('aria-label') || 'element'}`);
          }
          break;

        case 'Escape':
          // Close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
              if (closeButton) {
                (closeButton as HTMLElement).click();
                announceToScreenReader('Modal closed');
              }
            }
          });
          break;

        case 'h':
        case 'H':
          // Navigate to headings
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
            const currentHeading = headings.findIndex(h => h === target);
            const nextHeading = headings[currentHeading + 1] || headings[0];
            (nextHeading as HTMLElement)?.focus();
            announceToScreenReader(`Navigated to ${nextHeading?.textContent || 'heading'}`);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, announceToScreenReader]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text or aria-label`);
      }
    });

    // Check for missing form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control, index) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');
      
      if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
        issues.push(`Form control ${index + 1} missing label or aria-label`);
      }
    });

    // Check for proper heading structure
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (currentLevel - previousLevel > 1) {
        issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
      }
      previousLevel = currentLevel;
    });

    // Check for proper ARIA usage
    const ariaElements = document.querySelectorAll('[aria-*]');
    ariaElements.forEach((element, index) => {
      const ariaAttributes = Array.from(element.attributes)
        .filter(attr => attr.name.startsWith('aria-'));
      
      ariaAttributes.forEach(attr => {
        if (attr.name === 'aria-label' && !attr.value.trim()) {
          issues.push(`Element ${index + 1} has empty aria-label`);
        }
        if (attr.name === 'aria-describedby' && !document.getElementById(attr.value)) {
          issues.push(`Element ${index + 1} references non-existent aria-describedby element`);
        }
      });
    });

    setAccessibilityIssues(issues);
    
    if (issues.length > 0) {
      announceToScreenReader(`Found ${issues.length} accessibility issues`);
    } else {
      announceToScreenReader('No accessibility issues found');
    }
  }, [announceToScreenReader]);

  // Initialize accessibility features
  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings:', error);
      }
    }

    // Run initial audit
    runAccessibilityAudit();

    // Setup keyboard navigation
    if (settings.keyboardNavigation) {
      const cleanup = enhanceKeyboardNavigation();
      return cleanup;
    }
  }, [settings.keyboardNavigation, enhanceKeyboardNavigation, runAccessibilityAudit]);

  // Toggle visibility
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleSettings = () => setShowSettings(!showSettings);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Features"
        aria-label="Toggle accessibility features"
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
            className="fixed bottom-6 left-20 z-40 w-80 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-purple-400" />
                <h3 id="accessibility-panel-title" className="text-white font-semibold">
                  Accessibility Features
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleSettings}
                  className="p-1 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  title="Settings"
                  aria-label="Accessibility settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleVisibility}
                  className="p-1 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  title="Close"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center">
                  <Keyboard className="w-4 h-4 mr-2 text-purple-400" />
                  Quick Actions
                </h4>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => applySettings({ highContrast: !settings.highContrast })}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      settings.highContrast 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                    aria-pressed={settings.highContrast}
                  >
                    <Contrast className="w-4 h-4 mx-auto mb-1" />
                    High Contrast
                  </button>
                  
                  <button
                    onClick={() => applySettings({ largeText: !settings.largeText })}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      settings.largeText 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                    aria-pressed={settings.largeText}
                  >
                    <Type className="w-4 h-4 mx-auto mb-1" />
                    Large Text
                  </button>
                  
                  <button
                    onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      settings.reducedMotion 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                    aria-pressed={settings.reducedMotion}
                  >
                    <Eye className="w-4 h-4 mx-auto mb-1" />
                    Reduced Motion
                  </button>
                  
                  <button
                    onClick={() => applySettings({ focusIndicators: !settings.focusIndicators })}
                    className={`p-2 rounded text-sm font-medium transition-colors ${
                      settings.focusIndicators 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                    aria-pressed={settings.focusIndicators}
                  >
                    <MousePointer className="w-4 h-4 mx-auto mb-1" />
                    Focus Indicators
                  </button>
                </div>
              </div>

              {/* Accessibility Issues */}
              {accessibilityIssues.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                    Issues Found ({accessibilityIssues.length})
                  </h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {accessibilityIssues.slice(0, 5).map((issue, index) => (
                      <div key={index} className="text-sm text-slate-300 bg-slate-800/50 p-2 rounded">
                        {issue}
                      </div>
                    ))}
                    {accessibilityIssues.length > 5 && (
                      <div className="text-xs text-slate-500 text-center">
                        +{accessibilityIssues.length - 5} more issues
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={runAccessibilityAudit}
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Run Audit
                </button>
                
                <button
                  onClick={() => announceToScreenReader('Accessibility features activated')}
                  className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
                  title="Test Screen Reader"
                  aria-label="Test screen reader announcement"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-32 left-20 z-30 w-64 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-4"
            role="dialog"
            aria-labelledby="accessibility-settings-title"
          >
            <h4 id="accessibility-settings-title" className="text-white font-semibold mb-3">
              Accessibility Settings
            </h4>
            <div className="space-y-3 text-sm">
              {Object.entries(settings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-slate-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </span>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => applySettings({ [key]: e.target.checked })}
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    aria-label={`Toggle ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcements[announcements.length - 1]}
      </div>
    </>
  );
}

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  MousePointer,
  Keyboard,
  Braille,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Sun,
  Moon,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindSupport: boolean;
  dyslexiaFriendly: boolean;
}

interface AccessibilityMetrics {
  contrastRatio: number;
  fontSize: number;
  focusVisible: boolean;
  keyboardAccessible: boolean;
  screenReaderCompatible: boolean;
  colorBlindFriendly: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC<{ 
  enabled?: boolean; 
  showControls?: boolean;
  defaultSettings?: Partial<AccessibilitySettings>;
}> = ({ 
  enabled = false, 
  showControls = false,
  defaultSettings = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindSupport: false,
    dyslexiaFriendly: false,
    ...defaultSettings
  });

  const [metrics, setMetrics] = useState<AccessibilityMetrics | null>(null);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);
  
  const announcementRef = useRef<HTMLDivElement>(null);
  const focusTrapRef = useRef<HTMLDivElement>(null);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;
    
    setAnnouncements(prev => [...prev, message]);
    
    // Create live region for announcements
    let liveRegion = document.getElementById('accessibility-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'accessibility-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
    
    // Clear announcement after a delay
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a !== message));
    }, 5000);
  }, [settings.screenReader]);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
      announceToScreenReader('High contrast mode enabled');
    } else {
      document.documentElement.classList.remove('high-contrast');
      announceToScreenReader('High contrast mode disabled');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
      announceToScreenReader('Large text mode enabled');
    } else {
      document.documentElement.classList.remove('large-text');
      announceToScreenReader('Large text mode disabled');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      announceToScreenReader('Reduced motion mode enabled');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      announceToScreenReader('Reduced motion mode disabled');
    }

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.classList.add('focus-visible');
      announceToScreenReader('Focus indicators enabled');
    } else {
      document.documentElement.classList.remove('focus-visible');
      announceToScreenReader('Focus indicators disabled');
    }

    // Apply color blind support
    if (updatedSettings.colorBlindSupport) {
      document.documentElement.classList.add('color-blind-support');
      announceToScreenReader('Color blind support enabled');
    } else {
      document.documentElement.classList.remove('color-blind-support');
      announceToScreenReader('Color blind support disabled');
    }

    // Apply dyslexia friendly
    if (updatedSettings.dyslexiaFriendly) {
      document.documentElement.classList.add('dyslexia-friendly');
      announceToScreenReader('Dyslexia friendly mode enabled');
    } else {
      document.documentElement.classList.remove('dyslexia-friendly');
      announceToScreenReader('Dyslexia friendly mode disabled');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings, announceToScreenReader]);

  // Measure accessibility metrics
  const measureAccessibility = useCallback(() => {
    // Contrast ratio measurement (simplified)
    const contrastRatio = 4.5; // This would need actual measurement
    
    // Font size measurement
    const fontSize = parseInt(getComputedStyle(document.body).fontSize);
    
    // Focus visibility check
    const focusVisible = document.documentElement.classList.contains('focus-visible');
    
    // Keyboard accessibility check
    const keyboardAccessible = settings.keyboardNavigation;
    
    // Screen reader compatibility check
    const screenReaderCompatible = settings.screenReader;
    
    // Color blind friendliness check
    const colorBlindFriendly = settings.colorBlindSupport;

    setMetrics({
      contrastRatio,
      fontSize,
      focusVisible,
      keyboardAccessible,
      screenReaderCompatible,
      colorBlindFriendly
    });
  }, [settings]);

  // Keyboard navigation handler
  const handleKeyboardNavigation = useCallback((e: KeyboardEvent) => {
    if (!settings.keyboardNavigation) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
    
    switch (e.key) {
      case 'Tab':
        // Tab navigation is handled by browser
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        (focusableElements[nextIndex] as HTMLElement).focus();
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
        (focusableElements[prevIndex] as HTMLElement).focus();
        break;
      case 'Enter':
      case ' ':
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.click();
        }
        break;
      case 'Escape':
        setIsVisible(false);
        break;
    }
  }, [settings.keyboardNavigation]);

  // Focus management
  const handleFocusChange = useCallback((e: FocusEvent) => {
    const target = e.target as HTMLElement;
    setCurrentFocus(target);
    
    if (settings.screenReader && target.getAttribute('aria-label')) {
      announceToScreenReader(target.getAttribute('aria-label') || '');
    }
  }, [settings.screenReader, announceToScreenReader]);

  // Focus trap for modal
  const handleFocusTrap = useCallback((e: KeyboardEvent) => {
    if (!focusTrapRef.current || !isVisible) return;
    
    const focusableElements = focusTrapRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }, [isVisible]);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Add event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);
    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('keydown', handleFocusTrap);

    // Initial measurement
    measureAccessibility();

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('keydown', handleFocusTrap);
    };
  }, [enabled, handleKeyboardNavigation, handleFocusChange, handleFocusTrap, measureAccessibility, applySettings]);

  // Monitor keyboard vs mouse usage
  useEffect(() => {
    if (!enabled) return;

    const handleMouseDown = () => setIsKeyboardMode(false);
    const handleKeyDown = () => setIsKeyboardMode(true);

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);

  if (!enabled || !showControls) return null;

  return (
    <>
      {/* Accessibility Announcements */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-4 right-4 z-50"
          >
            <div 
              ref={focusTrapRef}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm"
              role="dialog"
              aria-labelledby="accessibility-panel-title"
              aria-describedby="accessibility-panel-description"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-blue-500" />
                  <h3 
                    id="accessibility-panel-title"
                    className="font-semibold text-gray-900 dark:text-white"
                  >
                    Accessibility
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    aria-label={isExpanded ? "Show less options" : "Show more options"}
                  >
                    <Settings className="w-4 h-4 text-gray-500" />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p 
                  id="accessibility-panel-description"
                  className="text-sm text-gray-600 dark:text-gray-400 mb-4"
                >
                  Customize your browsing experience for better accessibility
                </p>

                {/* Quick Settings */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">High Contrast</span>
                    <button
                      onClick={() => applySettings({ highContrast: !settings.highContrast })}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        settings.highContrast ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.highContrast ? 'translate-x-4' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Large Text</span>
                    <button
                      onClick={() => applySettings({ largeText: !settings.largeText })}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        settings.largeText ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.largeText ? 'translate-x-4' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Reduced Motion</span>
                    <button
                      onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.reducedMotion ? 'translate-x-4' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Screen Reader</span>
                    <button
                      onClick={() => applySettings({ screenReader: !settings.screenReader })}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        settings.screenReader ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                      aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader support`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.screenReader ? 'translate-x-4' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Current Focus Indicator */}
                {currentFocus && (
                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                      Current Focus:
                    </div>
                    <div className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                      {currentFocus.tagName.toLowerCase()}
                      {currentFocus.textContent && `: ${currentFocus.textContent.slice(0, 50)}${currentFocus.textContent.length > 50 ? '...' : ''}`}
                    </div>
                  </div>
                )}

                {/* Keyboard Mode Indicator */}
                <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    {isKeyboardMode ? (
                      <Keyboard className="w-4 h-4 text-green-500" />
                    ) : (
                      <MousePointer className="w-4 h-4 text-blue-500" />
                    )}
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {isKeyboardMode ? 'Keyboard Navigation Active' : 'Mouse Navigation Active'}
                    </span>
                  </div>
                </div>

                {/* Advanced Settings */}
                {isExpanded && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Advanced Settings</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Focus Indicators</span>
                        <button
                          onClick={() => applySettings({ focusIndicators: !settings.focusIndicators })}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            settings.focusIndicators ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.focusIndicators ? 'translate-x-4' : 'translate-x-0'
                          }`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Color Blind Support</span>
                        <button
                          onClick={() => applySettings({ colorBlindSupport: !settings.colorBlindSupport })}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            settings.colorBlindSupport ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.colorBlindSupport ? 'translate-x-4' : 'translate-x-0'
                          }`} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Dyslexia Friendly</span>
                        <button
                          onClick={() => applySettings({ dyslexiaFriendly: !settings.dyslexiaFriendly })}
                          className={`w-10 h-6 rounded-full transition-colors ${
                            settings.dyslexiaFriendly ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.dyslexiaFriendly ? 'translate-x-4' : 'translate-x-0'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={measureAccessibility}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded-lg transition-colors"
                  >
                    Test Accessibility
                  </button>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {isExpanded ? 'Less' : 'More'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Toggle Button */}
        {!isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsVisible(true)}
            className="fixed top-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            title="Show Accessibility Options"
            aria-label="Open accessibility options"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
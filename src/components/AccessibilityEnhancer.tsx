import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  lineHeight: number;
  letterSpacing: number;
  keyboardNavigation: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showSettings = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    lineHeight: 1.5,
    letterSpacing: 0,
    keyboardNavigation: false,
    screenReader: false
  });

  const [isOpen, setIsOpen] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${settings.fontSize}px`;
    
    // Apply line height
    root.style.lineHeight = settings.lineHeight.toString();
    
    // Apply letter spacing
    root.style.letterSpacing = `${settings.letterSpacing}px`;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply high saturation
    if (settings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }
  }, [settings, enabled]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Tab navigation enhancement
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey && target === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && target === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const currentElement = target.closest('[data-navigation-group]');
        if (currentElement) {
          event.preventDefault();
          navigateWithArrows(currentElement, event.key);
        }
      }

      // Enter/Space for interactive elements
      if (['Enter', ' '].includes(event.key)) {
        if (target.getAttribute('role') === 'button' || target.classList.contains('interactive')) {
          event.preventDefault();
          target.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, enabled]);

  // Arrow key navigation helper
  const navigateWithArrows = (container: Element, direction: string) => {
    const focusableElements = Array.from(container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !(el as HTMLElement).hidden);

    const currentIndex = focusableElements.findIndex(el => el === document.activeElement);
    let nextIndex = currentIndex;

    switch (direction) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        break;
    }

    (focusableElements[nextIndex] as HTMLElement)?.focus();
  };

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  // Add accessibility attributes to interactive elements
  useEffect(() => {
    if (!enabled) return;

    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach((element) => {
      const el = element as HTMLElement;
      
      // Add focus indicators
      if (!el.classList.contains('accessibility-enhanced')) {
        el.classList.add('accessibility-enhanced');
        el.style.outline = '2px solid transparent';
        el.style.outlineOffset = '2px';
        
        el.addEventListener('focus', () => {
          el.style.outline = '2px solid #3b82f6';
        });
        
        el.addEventListener('blur', () => {
          el.style.outline = '2px solid transparent';
        });
      }
    });
  }, [enabled]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const increaseFontSize = () => {
    if (settings.fontSize < 24) {
      updateSetting('fontSize', settings.fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 12) {
      updateSetting('fontSize', settings.fontSize - 2);
    }
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 16,
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      lineHeight: 1.5,
      letterSpacing: 0,
      keyboardNavigation: false,
      screenReader: false
    });
  };

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      {showSettings && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 z-50 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label="Accessibility Settings"
          title="Accessibility Settings"
        >
          <Settings className="w-6 h-6" />
        </button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && showSettings && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className="fixed right-4 bottom-20 z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Accessibility
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Font Size */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Type className="w-4 h-4" />
                      Font Size
                    </label>
                    <span className="text-sm text-gray-500">{settings.fontSize}px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={decreaseFontSize}
                      className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-200"
                        style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={increaseFontSize}
                      className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Contrast className="w-4 h-4" />
                    High Contrast
                  </label>
                  <button
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
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
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    Large Text
                  </label>
                  <button
                    onClick={() => updateSetting('largeText', !settings.largeText)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
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
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Reduced Motion
                  </label>
                  <button
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Keyboard Navigation
                  </label>
                  <button
                    onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetSettings}
                  className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset to Defaults
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

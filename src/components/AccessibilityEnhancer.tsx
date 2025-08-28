import React, { useEffect, useCallback, useRef, useState } from 'react';
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
  Monitor,
  Smartphone,
  Accessibility,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false
  });
  
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusIndicatorRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

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

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }
  }, [applySettings]);

  // Focus management
  useEffect(() => {
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Update focus indicator position
      if (focusIndicatorRef.current && target) {
        const rect = target.getBoundingClientRect();
        focusIndicatorRef.current.style.left = `${rect.left}px`;
        focusIndicatorRef.current.style.top = `${rect.top}px`;
        focusIndicatorRef.current.style.width = `${rect.width}px`;
        focusIndicatorRef.current.style.height = `${rect.height}px`;
        focusIndicatorRef.current.style.display = 'block';
      }
    };

    const handleFocusOut = () => {
      if (focusIndicatorRef.current) {
        focusIndicatorRef.current.style.display = 'none';
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip if target is an input or textarea
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          event.preventDefault();
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).indexOf(target);
          const nextIndex = event.shiftKey ? currentIndex - 1 : currentIndex + 1;
          const nextElement = focusableElements[nextIndex] as HTMLElement;
          
          if (nextElement) {
            nextElement.focus();
          }
          break;

        case 'Enter':
        case ' ':
          // Activate buttons and links with Enter/Space
          if (target.tagName === 'BUTTON' || target.tagName === 'A') {
            event.preventDefault();
            target.click();
          }
          break;

        case 'Escape':
          // Close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
          modals.forEach(modal => {
            if (modal.classList.contains('open')) {
              (modal as HTMLElement).click();
            }
          });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

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

  // Toggle accessibility panel
  const togglePanel = useCallback(() => {
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
  }, [isOpen, announceToScreenReader]);

  // Handle escape key to close panel
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  // Focus trap for accessibility panel
  useEffect(() => {
    if (!isOpen || !settingsRef.current) return;

    const focusableElements = settingsRef.current.querySelectorAll(
      'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  return (
    <>
      {/* Focus Indicator */}
      {settings.focusIndicator && (
        <div
          ref={focusIndicatorRef}
          className="fixed pointer-events-none z-[9999] border-2 border-blue-500 rounded transition-all duration-200 ease-out"
          style={{ display: 'none' }}
          aria-hidden="true"
        />
      )}

      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-panel-title"
          >
            <motion.div
              ref={settingsRef}
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 id="accessibility-panel-title" className="text-xl font-bold text-gray-900">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="p-6 space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <label htmlFor="high-contrast" className="font-medium text-gray-900">
                        High Contrast
                      </label>
                      <p className="text-sm text-gray-500">Enhanced color contrast for better visibility</p>
                    </div>
                  </div>
                  <button
                    id="high-contrast"
                    onClick={() => applySettings({ highContrast: !settings.highContrast })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
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
                    <Type className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <label htmlFor="large-text" className="font-medium text-gray-900">
                        Large Text
                      </label>
                      <p className="text-sm text-gray-500">Increase text size for better readability</p>
                    </div>
                  </div>
                  <button
                    id="large-text"
                    onClick={() => applySettings({ largeText: !settings.largeText })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.largeText}
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
                    <MousePointer className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <label htmlFor="reduced-motion" className="font-medium text-gray-900">
                        Reduced Motion
                      </label>
                      <p className="text-sm text-gray-500">Minimize animations and transitions</p>
                    </div>
                  </div>
                  <button
                    id="reduced-motion"
                    onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
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
                    <Keyboard className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <label htmlFor="focus-indicator" className="font-medium text-gray-900">
                        Focus Indicator
                      </label>
                      <p className="text-sm text-gray-500">Highlight focused elements</p>
                    </div>
                  </div>
                  <button
                    id="focus-indicator"
                    onClick={() => applySettings({ focusIndicator: !settings.focusIndicator })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicator}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Keyboard className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <label htmlFor="keyboard-nav" className="font-medium text-gray-900">
                        Enhanced Keyboard Navigation
                      </label>
                      <p className="text-sm text-gray-500">Improved keyboard controls</p>
                    </div>
                  </div>
                  <button
                    id="keyboard-nav"
                    onClick={() => applySettings({ keyboardNavigation: !settings.keyboardNavigation })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.keyboardNavigation}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    These settings help make the website more accessible for everyone.
                  </p>
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
                    className="text-sm text-zion-cyan hover:text-zion-purple font-medium transition-colors"
                  >
                    Reset to Default
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

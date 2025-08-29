import React, { useEffect, useState, useRef } from 'react';
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
  Accessibility,
  HelpCircle
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
    focusIndicator: true,
  });
  
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusRingRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (settings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }
    
    if (settings.focusIndicator) {
      document.body.classList.add('focus-indicator');
    } else {
      document.body.classList.remove('focus-indicator');
    }
  }, [settings]);

  // Focus management
  useEffect(() => {
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      if (settings.focusIndicator && focusRingRef.current) {
        const rect = target.getBoundingClientRect();
        focusRingRef.current.style.left = `${rect.left}px`;
        focusRingRef.current.style.top = `${rect.top}px`;
        focusRingRef.current.style.width = `${rect.width}px`;
        focusRingRef.current.style.height = `${rect.height}px`;
        focusRingRef.current.style.display = 'block';
      }
    };

    const handleBlur = () => {
      if (focusRingRef.current) {
        focusRingRef.current.style.display = 'none';
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [settings.focusIndicator]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Escape to close panel
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
      
      // Tab navigation enhancement
      if (event.key === 'Tab' && settings.keyboardNavigation) {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (event.shiftKey) {
          // Shift + Tab: go backwards
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
          (focusableElements[prevIndex] as HTMLElement).focus();
        } else {
          // Tab: go forwards
          const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
          (focusableElements[nextIndex] as HTMLElement).focus();
        }
        
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
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
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      
      // Announce changes to screen reader
      const settingName = key.replace(/([A-Z])/g, ' $1').toLowerCase();
      const status = newSettings[key] ? 'enabled' : 'disabled';
      announceToScreenReader(`${settingName} ${status}`);
      
      return newSettings;
    });
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
    });
    announceToScreenReader('Accessibility settings reset to default');
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
        aria-label="Toggle accessibility options"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Focus Indicator Ring */}
      {settings.focusIndicator && (
        <div
          ref={focusRingRef}
          className="fixed pointer-events-none z-40 border-2 border-blue-500 rounded transition-all duration-200"
          style={{ display: 'none' }}
          aria-hidden="true"
        />
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 overflow-y-auto"
            id="accessibility-panel"
            role="dialog"
            aria-label="Accessibility options"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Accessibility</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">High Contrast</h3>
                      <p className="text-sm text-gray-500">Increase color contrast</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    aria-pressed={settings.highContrast}
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
                    <Type className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Large Text</h3>
                      <p className="text-sm text-gray-500">Increase font size</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    aria-pressed={settings.largeText}
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
                    <MousePointer className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Reduced Motion</h3>
                      <p className="text-sm text-gray-500">Reduce animations</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    aria-pressed={settings.reducedMotion}
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
                  <div className="flex items-center space-x-3">
                    <Keyboard className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Keyboard Navigation</h3>
                      <p className="text-sm text-gray-500">Enhanced tab navigation</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    aria-pressed={settings.keyboardNavigation}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Focus Indicator</h3>
                      <p className="text-sm text-gray-500">Show focus ring</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    aria-pressed={settings.focusIndicator}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Help Section */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-gray-600" />
                  <h3 className="font-medium text-gray-900">Keyboard Shortcuts</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Alt + A</kbd> Toggle accessibility panel</li>
                  <li><kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Tab</kbd> Navigate between elements</li>
                  <li><kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Escape</kbd> Close panels</li>
                </ul>
              </div>

              {/* Reset Button */}
              <div className="mt-6">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel {isOpen ? 'opened' : 'closed'}
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
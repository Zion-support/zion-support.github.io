import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Contrast, 
  Type, 
  MousePointer,
  Keyboard,
  Accessibility,
  SkipForward,
  SkipBack
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface EnhancedAccessibilityProps {
  enableSettings?: boolean;
  enableSkipLinks?: boolean;
  enableFocusTrap?: boolean;
}

export function EnhancedAccessibility({
  enableSettings = true,
  enableSkipLinks = true,
  enableFocusTrap = true
}: EnhancedAccessibilityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: false,
    screenReader: false,
    keyboardNavigation: true
  });
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);
  
  const settingsRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const skipLinksRef = useRef<HTMLDivElement>(null);

  // Focus management
  const updateFocusableElements = useCallback(() => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];
    
    const elements = document.querySelectorAll<HTMLElement>(focusableSelectors.join(','));
    focusableElementsRef.current = Array.from(elements);
  }, []);

  // Keyboard navigation
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!settings.keyboardNavigation) return;

    const { key, shiftKey } = event;
    
    switch (key) {
      case 'Tab':
        event.preventDefault();
        if (shiftKey) {
          setCurrentFocusIndex(prev => 
            prev > 0 ? prev - 1 : focusableElementsRef.current.length - 1
          );
        } else {
          setCurrentFocusIndex(prev => 
            prev < focusableElementsRef.current.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'Enter':
      case ' ':
        if (document.activeElement) {
          (document.activeElement as HTMLElement).click();
        }
        break;
    }
  }, [settings.keyboardNavigation]);

  // Focus trap for modals
  const createFocusTrap = useCallback((container: HTMLElement) => {
    if (!enableFocusTrap) return;

    const focusableElements = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

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

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, [enableFocusTrap]);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
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
      document.documentElement.classList.add('focus-indicator');
    } else {
      document.documentElement.classList.remove('focus-indicator');
    }

    // Store settings in localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applyAccessibilitySettings]);

  // Initialize accessibility features
  useEffect(() => {
    updateFocusableElements();
    
    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Detect keyboard mode
    const handleKeyDown = () => setIsKeyboardMode(true);
    const handleMouseDown = () => setIsKeyboardMode(false);
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    // Update focusable elements on DOM changes
    const observer = new MutationObserver(updateFocusableElements);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      observer.disconnect();
    };
  }, [handleKeyboardNavigation, updateFocusableElements]);

  // Focus management effect
  useEffect(() => {
    if (focusableElementsRef.current[currentFocusIndex]) {
      focusableElementsRef.current[currentFocusIndex].focus();
    }
  }, [currentFocusIndex]);

  // Skip links
  const SkipLinks = () => (
    <div ref={skipLinksRef} className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="block absolute top-0 left-0 bg-zion-cyan text-white px-4 py-2 z-50 transform -translate-y-full focus:translate-y-0 transition-transform duration-200"
      >
        Skip to main content
      </a>
      <a
        href="#navigation"
        className="block absolute top-0 left-0 bg-zion-purple text-white px-4 py-2 z-50 transform -translate-y-full focus:translate-y-0 transition-transform duration-200 mt-12"
      >
        Skip to navigation
      </a>
    </div>
  );

  // Accessibility settings panel
  const AccessibilitySettings = () => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 right-4 z-50 bg-slate-800 border border-zion-cyan/30 rounded-lg p-6 shadow-2xl backdrop-blur-sm min-w-80"
          ref={settingsRef}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Accessibility className="w-5 h-5 mr-2 text-zion-cyan" />
              Accessibility Settings
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility settings"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => applyAccessibilitySettings({ highContrast: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-slate-700 border-gray-600 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <Contrast className="w-5 h-5 text-zion-cyan" />
              <span className="text-white">High Contrast</span>
            </label>

            {/* Large Text */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => applyAccessibilitySettings({ largeText: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-slate-700 border-gray-600 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <Type className="w-5 h-5 text-zion-cyan" />
              <span className="text-white">Large Text</span>
            </label>

            {/* Reduced Motion */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => applyAccessibilitySettings({ reducedMotion: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-slate-700 border-gray-600 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <Eye className="w-5 h-5 text-zion-cyan" />
              <span className="text-white">Reduced Motion</span>
            </label>

            {/* Focus Indicator */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.focusIndicator}
                onChange={(e) => applyAccessibilitySettings({ focusIndicator: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-slate-700 border-gray-600 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <MousePointer className="w-5 h-5 text-zion-cyan" />
              <span className="text-white">Enhanced Focus</span>
            </label>

            {/* Keyboard Navigation */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.keyboardNavigation}
                onChange={(e) => applyAccessibilitySettings({ keyboardNavigation: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-slate-700 border-gray-600 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <Keyboard className="w-5 h-5 text-zion-cyan" />
              <span className="text-white">Keyboard Navigation</span>
            </label>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-400 mb-3">Keyboard Shortcuts:</p>
            <div className="text-xs text-gray-400 space-y-1">
              <p>Tab: Navigate between elements</p>
              <p>Shift+Tab: Navigate backwards</p>
              <p>Enter/Space: Activate elements</p>
              <p>Escape: Close panels</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Skip Links */}
      {enableSkipLinks && <SkipLinks />}

      {/* Accessibility Toggle Button */}
      {enableSettings && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed bottom-4 left-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-zion-cyan text-white shadow-zion-cyan/50' 
              : 'bg-slate-800/80 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan hover:text-white'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Accessibility settings"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Accessibility Settings Panel */}
      {enableSettings && <AccessibilitySettings />}

      {/* Keyboard Mode Indicator */}
      {isKeyboardMode && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 left-4 z-50 bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-lg px-3 py-2 text-xs text-zion-cyan"
        >
          <Keyboard className="w-4 h-4 inline mr-2" />
          Keyboard Mode
        </motion.div>
      )}
    </>
  );
}
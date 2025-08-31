import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Move, 
  Keyboard,
  Accessibility,
  Settings,
  X,
  Check,
  AlertTriangle
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
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false,
  });

  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);

  // Auto-detect user preferences
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const mediaQueries = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      prefersHighContrast: window.matchMedia('(prefers-contrast: high)'),
      prefersLargeText: window.matchMedia('(prefers-contrast: more)')
    };

    const handleMediaChange = () => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: mediaQueries.prefersReducedMotion.matches,
        highContrast: mediaQueries.prefersHighContrast.matches,
        largeText: mediaQueries.prefersLargeText.matches
      }));
    };

    // Set initial values
    handleMediaChange();

    // Listen for changes
    mediaQueries.prefersReducedMotion.addEventListener('change', handleMediaChange);
    mediaQueries.prefersHighContrast.addEventListener('change', handleMediaChange);
    mediaQueries.prefersLargeText.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueries.prefersReducedMotion.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersHighContrast.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersLargeText.removeEventListener('change', handleMediaChange);
    };
  }, [enableKeyboardNavigation]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--zion-slate-light', '#ffffff');
      root.style.setProperty('--zion-slate', '#e2e8f0');
      root.style.setProperty('--zion-slate-dark', '#1e293b');
      root.style.setProperty('--zion-slate-darker', '#0f172a');
    } else {
      root.style.removeProperty('--zion-slate-light');
      root.style.removeProperty('--zion-slate');
      root.style.removeProperty('--zion-slate-dark');
      root.style.removeProperty('--zion-slate-darker');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-base', '1.125rem');
      root.style.setProperty('--text-lg', '1.25rem');
      root.style.setProperty('--text-xl', '1.5rem');
    } else {
      root.style.fontSize = '16px';
      root.style.removeProperty('--text-base');
      root.style.removeProperty('--text-lg');
      root.style.removeProperty('--text-xl');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--transition-duration', '0.1s');
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }

    // Focus indicator
    if (settings.focusIndicators) {
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

  }, [enableKeyboardNavigation, settings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }

      // Enhanced tab navigation
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
        const nextIndex = event.shiftKey ? currentIndex - 1 : currentIndex + 1;
        
        if (nextIndex >= 0 && nextIndex < focusableElements.length) {
          event.preventDefault();
          (focusableElements[nextIndex] as HTMLElement).focus();
        }
      }

      // Escape key to close modals/panels
      if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
        if (openModals.length > 0) {
          const lastModal = openModals[openModals.length - 1] as HTMLElement;
          lastModal.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Announce focus changes for screen readers
      if (enableScreenReader && target) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Focused on ${target.textContent || target.tagName.toLowerCase()}`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [enableKeyboardNavigation, enableScreenReader]);

  // Add notification
  const addNotification = useCallback((message: string) => {
    setAnnouncements(prev => [...prev, message]);
    
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(m => m !== message));
    }, 5000);
  }, []);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      
      // Save to localStorage
      localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
      
      // Show notification
      const action = newSettings[key] ? 'enabled' : 'disabled';
      addNotification(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${action}`);
      
      return newSettings;
    });
  }, [addNotification]);

  // Load saved settings
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [enableKeyboardNavigation]);

  if (!enableKeyboardNavigation) return null;

  // Get setting description
  const getSettingDescription = (key: keyof AccessibilitySettings) => {
    const descriptions = {
      highContrast: 'Increases contrast for better visibility',
      largeText: 'Makes text larger and easier to read',
      reducedMotion: 'Reduces animations and motion',
      screenReader: 'Optimizes for screen readers',
      keyboardNavigation: 'Enhances keyboard navigation',
      focusIndicators: 'Shows clear focus indicators'
    };
    return descriptions[key];
  };

  // Get keyboard shortcut
  const getKeyboardShortcut = (key: keyof AccessibilitySettings) => {
    const shortcuts = {
      highContrast: 'Ctrl/Cmd + Shift + H',
      largeText: 'Ctrl/Cmd + Shift + L',
      reducedMotion: 'None',
      screenReader: 'None',
      keyboardNavigation: 'None',
      focusIndicators: 'None'
    };
    return shortcuts[key];
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        ref={skipLinkRef}
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-cyan focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Accessibility className="w-6 h-6 text-zion-cyan" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">High Contrast</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-200'
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
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Large Text</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-zion-cyan' : 'bg-gray-200'
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
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Reduced Motion</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-200'
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
                  <div className="flex items-center gap-3">
                    <Move className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Focus Indicator</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusIndicators')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicators ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    aria-label={`${settings.focusIndicators ? 'Disable' : 'Enable'} focus indicator`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Keyboard className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Enhanced Keyboard</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} enhanced keyboard navigation`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Screen Reader */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Screen Reader</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('screenReader')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.screenReader ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Help */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => addNotification('Keyboard shortcuts: Tab to navigate, Shift+Tab to go back, Escape to close modals')}
                    className="flex items-center gap-2 text-sm text-zion-cyan hover:text-zion-cyan-dark transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Keyboard Shortcuts
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-colors z-40 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
        aria-label="Open accessibility panel"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {announcements.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="flex items-center gap-3 p-4 rounded-lg shadow-lg max-w-sm"
            >
              <Check className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">{message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Focus indicator styles */}
      <style jsx>{`
        *:focus {
          outline: var(--focus-ring, 2px solid #06b6d4) !important;
          outline-offset: 2px !important;
        }
        
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
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Palette,
  Keyboard,
  MousePointer,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Brain,
  Type
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  highSaturation: boolean;
  dyslexiaFriendly: boolean;
  colorBlindMode: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enabled?: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enabled = true,
  showControls = false,
  autoDetect = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    highSaturation: false,
    dyslexiaFriendly: false,
    colorBlindMode: false
  });

  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Array<{ id: string; type: 'success' | 'warning' | 'info'; message: string }>>([]);

  // Auto-detect user preferences
  useEffect(() => {
    if (!enabled || !autoDetect) return;

    const mediaQueries = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      prefersHighContrast: window.matchMedia('(prefers-contrast: high)'),
      prefersLargeText: window.matchMedia('(prefers-reduced-data: reduce)')
    };

    const handleMediaChange = () => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: mediaQueries.prefersReducedMotion.matches,
        highContrast: mediaQueries.prefersHighContrast.matches,
        largeText: mediaQueries.prefersLargeText.matches
      }));
    };

    handleMediaChange();

    mediaQueries.prefersReducedMotion.addEventListener('change', handleMediaChange);
    mediaQueries.prefersHighContrast.addEventListener('change', handleMediaChange);
    mediaQueries.prefersLargeText.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueries.prefersReducedMotion.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersHighContrast.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersLargeText.removeEventListener('change', handleMediaChange);
    };
  }, [enabled, autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // High saturation
    if (settings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }

    // Dyslexia friendly
    if (settings.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }

    // Color blind mode
    if (settings.colorBlindMode) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

  }, [enabled, settings]);

  // Add notification
  const addNotification = useCallback((type: 'success' | 'warning' | 'info', message: string) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, type, message }]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsedSettings }));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [enabled]);

  // Save settings
  useEffect(() => {
    if (!enabled) return;

    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [enabled, settings]);

  if (!enabled) return null;

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-zion-cyan text-white px-4 py-2 rounded-lg shadow-lg"
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
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-zion-slate-800 border-l border-gray-200 dark:border-zion-slate-700 shadow-xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zion-slate-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-zion-cyan" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-zion-slate-700 rounded-lg transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
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
                  <MousePointer className="w-5 h-5 text-zion-cyan" />
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
                  <MousePointer className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">Focus Indicator</span>
                </div>
                <button
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Help */}
              <div className="pt-4 border-t border-gray-200 dark:border-zion-slate-700">
                <button
                  onClick={() => addNotification('info', 'Keyboard shortcuts: Tab to navigate, Shift+Tab to go back, Escape to close modals')}
                  className="flex items-center gap-2 text-sm text-zion-cyan hover:text-zion-cyan-dark transition-colors"
                >
                  <Info className="w-4 h-4" />
                  Keyboard Shortcuts
                </button>
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
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className={`flex items-center gap-3 p-4 rounded-lg shadow-lg max-w-sm ${
                notification.type === 'success' ? 'bg-green-500 text-white' :
                notification.type === 'warning' ? 'bg-yellow-500 text-white' :
                'bg-blue-500 text-white'
              }`}
            >
              {notification.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {notification.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
              {notification.type === 'info' && <Info className="w-5 h-5" />}
              <span className="text-sm font-medium">{notification.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Render children */}
      {children}

      {/* CSS for accessibility features */}
      <style jsx>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        .high-contrast {
          filter: contrast(1.5);
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .high-saturation {
          filter: saturate(1.5);
        }
        
        .dyslexia-friendly {
          font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;
          line-height: 1.6;
          letter-spacing: 0.1em;
        }
        
        .color-blind-friendly {
          filter: grayscale(0.3) contrast(1.2);
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;

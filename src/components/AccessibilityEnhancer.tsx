import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindSupport: boolean;
}

interface AccessibilityEnhancerProps {
  enableAutoDetection?: boolean;
  showControls?: boolean;
  persistSettings?: boolean;
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableAutoDetection = true,
  showControls = true,
  persistSettings = true,
  className = ''
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlindSupport: false
  });

  const [isActive, setIsActive] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Load saved settings
  useEffect(() => {
    if (!persistSettings) return;

    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [persistSettings]);

  // Save settings
  const saveSettings = useCallback((newSettings: AccessibilitySettings) => {
    if (persistSettings) {
      localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    }
  }, [persistSettings]);

  // Auto-detect accessibility needs
  useEffect(() => {
    if (!enableAutoDetection) return;

    // Detect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }

    // Detect high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    if (highContrastQuery.matches) {
      setSettings(prev => ({ ...prev, highContrast: true }));
    }

    // Detect screen reader usage
    const screenReaderDetected = window.speechSynthesis || 
      (window as any).speechSynthesis || 
      navigator.userAgent.includes('NVDA') ||
      navigator.userAgent.includes('JAWS') ||
      navigator.userAgent.includes('VoiceOver');
    
    if (screenReaderDetected) {
      setSettings(prev => ({ ...prev, screenReader: true }));
    }

    // Listen for preference changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    highContrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, [enableAutoDetection]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blind support
    if (settings.colorBlindSupport) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Save settings
    saveSettings(settings);
  }, [settings, saveSettings]);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
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
    
    setAnnouncements(prev => [...prev.slice(-4), message]);
  }, [settings.screenReader]);

  // Handle setting changes
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };
      announce(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`);
      return newSettings;
    });
  }, [announce]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
          announce('Skipped to main content');
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          (nav as HTMLElement).focus();
          announce('Skipped to navigation');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, announce]);

  // Focus management
  useEffect(() => {
    if (!settings.focusVisible) return;

    const style = document.createElement('style');
    style.textContent = `
      .focus-visible *:focus {
        outline: 3px solid #8B5CF6 !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        --bg-primary: #000000;
        --bg-secondary: #ffffff;
        --text-primary: #ffffff;
        --text-secondary: #000000;
        --accent: #ffff00;
      }
      
      .large-text {
        font-size: 1.2em;
      }
      
      .large-text h1 { font-size: 2.5em; }
      .large-text h2 { font-size: 2em; }
      .large-text h3 { font-size: 1.75em; }
      .large-text p { font-size: 1.2em; }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .color-blind-support {
        filter: contrast(1.2) saturate(1.5);
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
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [settings]);

  return (
    <div className={`accessibility-enhancer ${className}`}>
      {showControls && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 right-4 z-50"
        >
          <button
            onClick={() => setIsActive(!isActive)}
            className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Toggle accessibility controls"
          >
            ♿
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {isActive && showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-20 right-4 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Accessibility Settings
            </h3>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSetting('largeText', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Focus Visible</span>
                <input
                  type="checkbox"
                  checked={settings.focusVisible}
                  onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Color Blind Support</span>
                <input
                  type="checkbox"
                  checked={settings.colorBlindSupport}
                  onChange={(e) => updateSetting('colorBlindSupport', e.target.checked)}
                  className="rounded"
                />
              </label>
            </div>

            {announcements.length > 0 && (
              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Recent Changes:
                </h4>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  {announcements.map((announcement, index) => (
                    <div key={index}>{announcement}</div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessibilityEnhancer;
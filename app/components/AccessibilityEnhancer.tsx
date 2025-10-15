<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
import React, { useEffect, useState } from 'react';
=======
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  enableKeyboard: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableLargeText: boolean;
  enableReducedMotion: boolean;
}

>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
interface AccessibilityEnhancerProps {
  isHighContrast?: boolean;
  isReducedMotion?: boolean;
  fontSize?: number;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
<<<<<<< HEAD
  const [settings, setSettings] = useState<AccessibilitySettings>({
    enableKeyboard: true,
    enableScreenReader: true,
    enableHighContrast: false,
    enableFocusManagement: true,
    enableLargeText: false,
    enableReducedMotion: false
  });
=======
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
<<<<<<< HEAD
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
=======
    // Add ARIA roles to semantic elements
    const addAriaRoles = () => {
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
      }
    }
  }, []);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (newSettings.enableLargeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.enableReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus management
    if (newSettings.enableFocusManagement) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Keyboard navigation
    if (newSettings.enableKeyboard) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings, applyAccessibilitySettings]);

<<<<<<< HEAD
  // Keyboard navigation enhancement
  useEffect(() => {
    if (!settings.enableKeyboard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip link functionality
      if (event.key === 'Tab' && event.shiftKey) {
        const skipLink = document.querySelector('.skip-link');
=======
    // Check for high contrast mode
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsHighContrast(e.matches);
      });
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsReducedMotion(e.matches);
      });
    };

    // Check for font size preference
    const checkFontSize = () => {
      const savedFontSize = localStorage.getItem('accessibility-font-size');
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize, 10));
      }
    };

    // Initialize accessibility enhancements
    addAriaRoles();
    addAltText();
    addFocusManagement();
    addKeyboardNavigation();
    checkHighContrast();
    checkReducedMotion();
    checkFontSize();

    // Apply accessibility settings
    const applyAccessibilitySettings = () => {
      const root = document.documentElement;
      
      // High contrast mode
      if (isHighContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }
      
      // Reduced motion
      if (isReducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }
      
      // Font size
      root.style.fontSize = `${fontSize}px`;
    };

    applyAccessibilitySettings();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addAriaRoles();
      addAltText();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
        if (skipLink) {
          (skipLink as HTMLElement).focus();
        }
      }

      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.enableKeyboard, isVisible]);

<<<<<<< HEAD
  // Focus management
  useEffect(() => {
    if (!settings.enableFocusManagement) return;

    const manageFocus = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      // Add focus indicators
      focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });

        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
=======
    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', handleKeyDown);
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
    };

<<<<<<< HEAD
    manageFocus();
  }, [settings.enableFocusManagement]);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
=======
  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      enableKeyboard: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableLargeText: false,
      enableReducedMotion: false
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Accessibility Settings
          </h3>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.enableKeyboard}
                onChange={(e) => updateSetting('enableKeyboard', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Keyboard Navigation</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.enableScreenReader}
                onChange={(e) => updateSetting('enableScreenReader', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Screen Reader Support</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.enableHighContrast}
                onChange={(e) => updateSetting('enableHighContrast', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">High Contrast</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.enableFocusManagement}
                onChange={(e) => updateSetting('enableFocusManagement', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Focus Management</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.enableLargeText}
                onChange={(e) => updateSetting('enableLargeText', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Large Text</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.enableReducedMotion}
                onChange={(e) => updateSetting('enableReducedMotion', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Reduced Motion</span>
            </label>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={resetSettings}
              className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
<<<<<<< HEAD

          <div className="mt-2 text-xs text-gray-500">
            <p>Press Alt + A to toggle this panel</p>
          </div>
        </div>
      )}

      {/* Accessibility Styles */}
      <style jsx global>{`
        /* High Contrast Mode */
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }

        .high-contrast * {
          border-color: currentColor !important;
        }

        /* Large Text Mode */
        .large-text {
          font-size: 1.2em;
        }

        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text h4 { font-size: 1.5em; }
        .large-text h5 { font-size: 1.25em; }
        .large-text h6 { font-size: 1.1em; }

        /* Reduced Motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }

        /* Focus Visible */
        .focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Keyboard Navigation */
        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation select:focus,
        .keyboard-navigation textarea:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Skip Link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }

        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );};

=======
          
          {/* High Contrast Toggle */}
          <button
            onClick={() => {
              const newState = !isHighContrast;
              setIsHighContrast(newState);
              if (newState) {
                document.documentElement.classList.add('high-contrast');
              } else {
                document.documentElement.classList.remove('high-contrast');
              }
            }}
            className={`px-3 py-1 text-xs rounded ${
              isHighContrast 
                ? 'bg-yellow-600 text-black' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'High Contrast ON' : 'High Contrast'}
          </button>
          
          {/* Reduced Motion Toggle */}
          <button
            onClick={() => {
              const newState = !isReducedMotion;
              setIsReducedMotion(newState);
              if (newState) {
                document.documentElement.classList.add('reduced-motion');
              } else {
                document.documentElement.classList.remove('reduced-motion');
              }
            }}
            className={`px-3 py-1 text-xs rounded ${
              isReducedMotion 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
            aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {isReducedMotion ? 'Motion OFF' : 'Motion ON'}
          </button>
        </div>
      </div>
    </>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
export default AccessibilityEnhancer;

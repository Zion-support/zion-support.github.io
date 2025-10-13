import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableUserPreferences?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableUserPreferences = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    keyboardNavigation: false
  });

  const [isInitialized, setIsInitialized] = useState(false);

  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  }, [settings, applyAccessibilitySettings]);

  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusVisible: true,
      keyboardNavigation: false
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  }, [applyAccessibilitySettings]);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings:', error);
      }
    }

    // Detect system preferences
    const mediaQueries = {
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      highContrast: window.matchMedia('(prefers-contrast: high)'),
      colorScheme: window.matchMedia('(prefers-color-scheme: dark)')
    };

    const handleSystemPreferences = () => {
      const newSettings = { ...settings };
      
      if (mediaQueries.reducedMotion.matches) {
        newSettings.reducedMotion = true;
      }
      
      if (mediaQueries.highContrast.matches) {
        newSettings.highContrast = true;
      }
      
      setSettings(newSettings);
      applyAccessibilitySettings(newSettings);
    };

    // Listen for system preference changes
    Object.values(mediaQueries).forEach(mq => {
      mq.addEventListener('change', handleSystemPreferences);
    });

    // Initial check
    handleSystemPreferences();

    // Add skip to main content link
    const addSkipLink = () => {
      const existingSkipLink = document.querySelector('a[href="#main-content"]');
      if (existingSkipLink) return;

      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300';
      skipLink.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `;
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }

        // Tab navigation improvements
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
          setSettings(prev => ({ ...prev, keyboardNavigation: true }));
        }
      };

      // Remove keyboard navigation class on mouse use
      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
        setSettings(prev => ({ ...prev, keyboardNavigation: false }));
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return () => {};

      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusableElement = focusableElements[0] as HTMLElement;
        const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
        firstFocusableElement?.focus();

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // Screen reader announcements
    const enhanceScreenReader = () => {
      if (!enableScreenReader) return;

      // Add ARIA landmarks
      const addLandmarks = () => {
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        const nav = document.querySelector('nav');
        if (nav && !nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }

        const header = document.querySelector('header');
        if (header && !header.getAttribute('role')) {
          header.setAttribute('role', 'banner');
        }

        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      };

      // Add live regions for dynamic content
      const addLiveRegions = () => {
        let liveRegion = document.getElementById('live-region');
        if (!liveRegion) {
          liveRegion = document.createElement('div');
          liveRegion.id = 'live-region';
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('aria-atomic', 'true');
          liveRegion.className = 'sr-only';
          document.body.appendChild(liveRegion);
        }
      };

      addLandmarks();
      addLiveRegions();

      return () => {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.remove();
        }
      };
    };

    // Initialize all enhancements
    addSkipLink();
    const cleanupKeyboard = enhanceKeyboardNavigation();
    const cleanupFocus = enhanceFocusManagement();
    const cleanupScreenReader = enhanceScreenReader();

    setIsInitialized(true);

    return () => {
      if (cleanupKeyboard) cleanupKeyboard();
      if (cleanupFocus) cleanupFocus();
      if (cleanupScreenReader) cleanupScreenReader();
      
      Object.values(mediaQueries).forEach(mq => {
        mq.removeEventListener('change', handleSystemPreferences);
      });
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableFocusManagement, applyAccessibilitySettings, settings]);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, []);

  // Expose accessibility controls
  React.useImperativeHandle(React.forwardRef(() => null), () => ({
    updateSetting,
    resetSettings,
    announceToScreenReader,
    getSettings: () => settings
  }));

  return (
    <>
      {children}
      <style>{`
        /* Keyboard navigation styles */
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* Screen reader only content */
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

        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }

        .high-contrast * {
          border-color: currentColor !important;
        }

        /* Focus indicators */
        .focus-visible:focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* Reduced motion */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Large text mode */
        .large-text {
          font-size: 1.2em;
          line-height: 1.6;
        }

        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text h4 { font-size: 1.5em; }
        .large-text h5 { font-size: 1.25em; }
        .large-text h6 { font-size: 1.1em; }

        /* Skip link styles */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }

        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return () => {};

      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip links for better keyboard navigation
        if (event.key === 'Tab') {
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }

        // Escape key to close modals
        if (event.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach(modal => {
            const closeButton = modal.querySelector('[aria-label="Close"], [data-close]');
            if (closeButton) {
              (closeButton as HTMLElement).click();
            }
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    };

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return () => {};

      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusableElement = focusableElements[0] as HTMLElement;
        const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement?.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement?.focus();
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

      // Apply focus trapping to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // High contrast mode
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return () => {};

      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-high-contrast';
        style.textContent = `
          .high-contrast {
            filter: contrast(150%) brightness(110%);
          }
          .high-contrast * {
            border-color: currentColor !important;
          }
        `;
        document.head.appendChild(style);
      };

      addHighContrastStyles();

      return () => {
        const existingStyle = document.getElementById('accessibility-high-contrast');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery as any);

      return () => {
        mediaQuery.removeEventListener('change', handleMotionChange);
      };
    };

    // Screen reader optimizations
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

      addLandmarks();
    };

    // Apply all enhancements
    const cleanupKeyboard = enhanceKeyboardNavigation();
    const cleanupFocus = enhanceFocusManagement();
    const cleanupContrast = enhanceHighContrast();
    const cleanupMotion = handleReducedMotion();
    enhanceScreenReader();

    return () => {
      if (cleanupKeyboard) cleanupKeyboard();
      if (cleanupFocus) cleanupFocus();
      if (cleanupContrast) cleanupContrast();
      if (cleanupMotion) cleanupMotion();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

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

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusVisible: true
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  // Apply current settings
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings]);

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;

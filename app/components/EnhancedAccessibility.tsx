'use client';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useAnalytics } from './EnhancedAnalytics';
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
=======
import React, { useEffect } from 'react';
>>>>>>> cursor/analyze-improve-and-deploy-application-6516

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusVisible: false
  });
<<<<<<< HEAD

  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Add ARIA landmarks
    const addLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus-visible polyfill
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);

      // Add focus trap for modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (firstElement && lastElement) {
          const handleTabKey = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
              if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                  lastElement.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === lastElement) {
                  firstElement.focus();
                  e.preventDefault();
                }
              }
            }
          };

          modal.addEventListener('keydown', handleTabKey);
        }
      });
    };

    // Add keyboard navigation
    const addKeyboardNavigation = () => {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.ctrlKey) {
          const main = document.querySelector('main');
          if (main) {
            main.focus();
            main.scrollIntoView();
            e.preventDefault();
          }
        }

        // Escape key handling
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
              if (closeButton) {
                closeButton.click();
              }
            }
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    };

=======

  useEffect(() => {
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
    // Check for user preferences
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<<<<<<< HEAD
    setSettings({
      highContrast: prefersHighContrast,
      reducedMotion: prefersReducedMotion,
      largeText: false,
      focusVisible: true
    });

    // Apply initial settings
    applyAccessibilitySettings({
      highContrast: prefersHighContrast,
      reducedMotion: prefersReducedMotion,
      largeText: false,
      focusVisible: true
    });

    // Set up media query listeners
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      applyAccessibilitySettings({ ...settings, reducedMotion: e.matches });
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
=======
    setSettings(prev => ({
      ...prev,
      highContrast: prefersHighContrast,
      reducedMotion: prefersReducedMotion
    }));

    // Apply accessibility styles
    const applyAccessibilityStyles = () => {
      const root = document.documentElement;
      
      if (settings.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }

      if (settings.reducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }

      root.classList.add(`font-size-${settings.fontSize}`);
    };

    applyAccessibilityStyles();

    // Listen for preference changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

<<<<<<< HEAD
    // Initialize accessibility features
    addLandmarks();
    enhanceFocusManagement();
    const cleanup = addKeyboardNavigation();
=======
const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode support
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    // Set initial state
    if (mediaQuery.matches) {
      document.documentElement.classList.add('high-contrast');
    }

    mediaQuery.addEventListener('change', handleContrastChange);

    // Add reduced motion support
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    // Set initial state
    if (motionQuery.matches) {
      document.documentElement.classList.add('reduce-motion');
    }

    motionQuery.addEventListener('change', handleMotionChange);

    // Add focus visible support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };
>>>>>>> cursor/analyze-improve-and-deploy-application-6516

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      mediaQuery.removeEventListener('change', handleContrastChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

<<<<<<< HEAD
  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings]);
=======
    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, [settings.highContrast, settings.reducedMotion, settings.fontSize]);
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619

=======
>>>>>>> cursor/analyze-improve-and-deploy-application-6516
  return <>{children}</>;
};

export default EnhancedAccessibility;
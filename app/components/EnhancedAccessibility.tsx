'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: string;
  focusVisible: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    focusVisible: false
  });
  const { trackEvent } = useAnalytics();

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    // Apply high contrast
    if (newSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply font size
    document.documentElement.style.fontSize = newSettings.fontSize === 'large' ? '18px' : '16px';
  };

  const setupKeyboardNavigation = () => {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  };

  const setupFocusManagement = () => {
    // Enhance focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  };

  useEffect(() => {
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
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
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
        .sr-only.focus:not-sr-only {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        .high-contrast {
          filter: contrast(150%);
        }
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    });

    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      applyAccessibilitySettings({ ...settings, reducedMotion: e.matches });
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
      applyAccessibilitySettings({ ...settings, highContrast: e.matches });
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Initialize accessibility enhancements
    addLandmarks();
    addSkipLinks();
    enhanceFocusManagement();

    // Setup keyboard navigation
    setupKeyboardNavigation();

    // Setup focus management
    setupFocusManagement();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, [settings]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default EnhancedAccessibility;
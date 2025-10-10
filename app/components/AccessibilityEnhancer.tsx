'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlind: false,
    dyslexia: false
  });

  const [isVisible, setIsVisible] = useState(false);

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

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Color blind support
    if (newSettings.colorBlind) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.classList.add('dyslexia-support');
    } else {
      root.classList.remove('dyslexia-support');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    }, []);

  // Initialize accessibility settings
  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applyAccessibilitySettings(parsedSettings);
      } catch (error) {
        }
    }

    // Apply default settings
    applyAccessibilitySettings(settings);
  }, [applyAccessibilitySettings, settings]);

  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          event.preventDefault();
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Add ARIA labels and roles
  useEffect(() => {
    // Add skip links
    const skipLinks = document.createElement('div');
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;
    skipLinks.className = 'skip-links';
    document.body.insertBefore(skipLinks, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.id = 'navigation';
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Add focus management
  useEffect(() => {
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Add screen reader announcements
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // This component doesn't render anything visible
  return null;
};

export default AccessibilityEnhancer;
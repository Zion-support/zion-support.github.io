import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    keyboardNavigation: false,
    screenReader: false
  });

  useEffect(() => {
    // Detect user preferences
    const detectPreferences = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast
      }));
    };

    // Detect screen reader usage
    const detectScreenReader = () => {
      const hasScreenReader = 
        'speechSynthesis' in window ||
        'speechRecognition' in window ||
        navigator.userAgent.includes('NVDA') ||
        navigator.userAgent.includes('JAWS') ||
        navigator.userAgent.includes('VoiceOver');
      
      setSettings(prev => ({
        ...prev,
        screenReader: hasScreenReader
      }));
    };

    // Detect keyboard navigation
    const detectKeyboardNavigation = () => {
      let keyboardUsed = false;
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ') {
          keyboardUsed = true;
          setSettings(prev => ({
            ...prev,
            keyboardNavigation: true
          }));
        }
      };

      const handleMouseDown = () => {
        if (keyboardUsed) return;
        setSettings(prev => ({
          ...prev,
          keyboardNavigation: false
        }));
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    detectPreferences();
    detectScreenReader();
    const cleanup = detectKeyboardNavigation();

    return cleanup;
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
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

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-user');
    } else {
      root.classList.remove('keyboard-user');
    }

    if (settings.screenReader) {
      root.classList.add('screen-reader');
    } else {
      root.classList.remove('screen-reader');
    }
  }, [settings]);

  // Add focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && typeof target.scrollIntoView === 'function') {
        // Ensure focused elements are visible
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, []);

  // Add skip links
  useEffect(() => {
    const skipLinks = document.querySelectorAll('.skip-link');
    if (skipLinks.length === 0) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, []);

  // Add ARIA landmarks
  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('id', 'main-content');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  return null;
};

export default AccessibilityEnhancer;
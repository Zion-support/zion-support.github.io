import React, { useEffect, useState } from 'react';
import logger from '../../utils/logger';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
  });

  useEffect(() => {
    // Check for system preferences
    const mediaQueries = {
      highContrast: window.matchMedia('(prefers-contrast: high)'),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
    };

    // Detect screen reader
    const screenReaderDetected = 
      'speechSynthesis' in window || 
      'speechRecognition' in window ||
      navigator.userAgent.includes('NVDA') ||
      navigator.userAgent.includes('JAWS') ||
      navigator.userAgent.includes('VoiceOver');

    setSettings({
      highContrast: mediaQueries.highContrast.matches,
      largeText: localStorage.getItem('accessibility-large-text') === 'true',
      reducedMotion: mediaQueries.reducedMotion.matches,
      screenReader: screenReaderDetected,
    });

    // Listen for changes in system preferences
    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    mediaQueries.highContrast.addEventListener('change', handleHighContrastChange);
    mediaQueries.reducedMotion.addEventListener('change', handleReducedMotionChange);

    return () => {
      mediaQueries.highContrast.removeEventListener('change', handleHighContrastChange);
      mediaQueries.reducedMotion.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    const body = document.body;
    
    if (settings.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      body.classList.add('large-text');
    } else {
      body.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      body.classList.add('reduced-motion');
    } else {
      body.classList.remove('reduced-motion');
    }

    if (settings.screenReader) {
      body.classList.add('screen-reader');
    } else {
      body.classList.remove('screen-reader');
    }

    logger.info('Accessibility settings applied:', settings);
  }, [settings]);

  // Add skip links
  useEffect(() => {
    const skipLinks = document.createElement('div');
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    skipLinks.className = 'skip-links';
    document.body.insertBefore(skipLinks, document.body.firstChild);

    // Add skip link styles
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        font-weight: bold;
        z-index: 1001;
        transition: top 0.3s;
      }
      .skip-link:focus {
        top: 0;
      }
    `;
    document.head.appendChild(style);

    return () => {
      skipLinks.remove();
      style.remove();
    };
  }, []);

  // Add ARIA landmarks
  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('id', 'main-content');
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav) {
      nav.setAttribute('id', 'navigation');
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const footer = document.querySelector('footer');
    if (footer) {
      footer.setAttribute('id', 'footer');
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape key to close
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Tab navigation improvements
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
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="accessibility-wrapper">
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
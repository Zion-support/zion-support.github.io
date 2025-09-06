<<<<<<< HEAD
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className =
      'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = (message: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Listen for route changes (Next.js specific)
    const handleRouteChange = () => {
      announcePageChange('Page loaded');
    };

    // Add route change listener if available
    if (typeof window !== 'undefined' && window.history) {
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = function (...args) {
        originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.history.replaceState = function (...args) {
        originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.addEventListener('popstate', handleRouteChange);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion);
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
import React, { useEffect } from 'react',;
const: AccessibilityEnhancer: React.FC = () => {;
  useEffect(() => {;
    // Add skip link for keyboard navigation;
    const skipLink = document.createElement('a'),;
    skipLink.href = '#main-content',;
    skipLink.textContent = 'Skip to main content',;
    skipLink.className = 'sr-only: focus:not-sr-only: focus:absolute: focus:top-4: focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50',;
    document.body.insertBefore(skipLink, document.body.firstChild),;
    // Focus management;
    let isUsingMouse = false,;
    const handleMouseDown = () => {;
      isUsingMouse = true,;
      document.body.classList.add('using-mouse');
    },;
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === 'Tab') {;
        isUsingMouse = false,;
        document.body.classList.remove('using-mouse');
      }
    },;
    document.addEventListener('mousedown', handleMouseDown),;
    document.addEventListener('keydown', handleKeyDown),;
    // Add ARIA live region for announcements;
    const liveRegion = document.createElement('div'),;
    liveRegion.setAttribute('aria-livepolite'),;
    liveRegion.setAttribute('aria-atomictrue'),;
    liveRegion.className = 'sr-only',;
    liveRegion.id = 'live-region',;
    document.body.appendChild(liveRegion),;
    // Announce page changes;
    const announcePageChange = (messag: e: string) => {;
      const liveRegion = document.getElementById('live-region'),;
      if (liveRegion) {;
        liveRegion.textContent = message;
      }
    },;
    // Listen for route changes (Next.js specific);
    const handleRouteChange = () => {;
      announcePageChange('Page loaded');
    },;
    // Add route change listener if available;
    if (typeof window !== 'undefined' && window.history) {;
      const originalPushState = window.history.pushState,;
      const originalReplaceState = window.history.replaceState,;
      window.history.pushState = function(...args) {;
        originalPushState.apply(this, args),;
        setTimeout(handleRouteChange, 100);
      },;
      window.history.replaceState = function(...args) {;
        originalReplaceState.apply(this, args),;
        setTimeout(handleRouteChange, 100);
      },;
      window.addEventListener('popstate', handleRouteChange);
    }
;
    // Cleanup;
    return () => {;
      document.removeEventListener('mousedown', handleMouseDown),;
      document.removeEventListener('keydown', handleKeyDown),;
      if (skipLink.parentNode) {;
        skipLink.parentNode.removeChild(skipLink);
      }
      if (liveRegion.parentNode) {;
        liveRegion.parentNode.removeChild(liveRegion);
      }
    }
  }, []),;
  return null;
},;
// Add CSS for focus management;
const focusStyles = `;
  .using-mouse *:focus {;
    outlin: e: none !important;
  }
  .focus-visibl: e:focus {;
    outlin: e: 2px solid #2563eb !important,;
    outline-offse: t: 2px !important;
  }
  .sr-only {;
    positio: n: absolute,;
    widt: h: 1px,;
    heigh: t: 1px,;
    paddin: g: 0,;
    margi: n: -1px,;
    overflo: w: hidden,;
    cli: p: rect(0, 0, 0, 0),;
    white-spac: e: nowrap,;
    borde: r: 0;
  }
  .sr-only.focu: s:not-sr-onl: y:focus {;
    positio: n: static,;
    widt: h: auto,;
    heigh: t: auto,;
    paddin: g: inherit,;
    margi: n: inherit,;
    overflo: w: visible,;
    cli: p: auto,;
    white-spac: e: normal;
  }
`,;
// Inject styles;
if (typeof document !== 'undefined') {;
  const styleSheet = document.createElement('style'),;
  styleSheet.textContent = focusStyles,;
  document.head.appendChild(styleSheet);
}
;
export default AccessibilityEnhancer;
=======
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

export default function AccessibilityEnhancer() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }));

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setSettings(prev => ({ ...prev, highContrast: highContrastQuery.matches }));

    // Detect screen reader usage
    const screenReaderDetected = 
      'speechSynthesis' in window || 
      'speechRecognition' in window ||
      navigator.userAgent.includes('NVDA') ||
      navigator.userAgent.includes('JAWS') ||
      navigator.userAgent.includes('VoiceOver');
    
    setSettings(prev => ({ ...prev, screenReader: screenReaderDetected }));

    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: mediaQuery.matches,
      highContrast: highContrastQuery.matches,
      screenReader: screenReaderDetected,
    });
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Apply screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [setting]: !settings[setting],
    };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  return (
    <div className="accessibility-panel fixed top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
      <h3 className="font-bold text-lg mb-3">Accessibility Settings</h3>
      
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={() => toggleSetting('highContrast')}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.largeText}
            onChange={() => toggleSetting('largeText')}
            className="rounded"
          />
          <span>Large Text</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={() => toggleSetting('reducedMotion')}
            className="rounded"
          />
          <span>Reduced Motion</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.focusVisible}
            onChange={() => toggleSetting('focusVisible')}
            className="rounded"
          />
          <span>Enhanced Focus</span>
        </label>

        <div className="text-sm text-gray-600">
          Screen Reader: {settings.screenReader ? 'Detected' : 'Not detected'}
        </div>
      </div>
    </div>
  );
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705

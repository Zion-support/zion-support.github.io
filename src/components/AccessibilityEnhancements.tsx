import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancementsProps {
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusIndicators?: boolean;
  enableScreenReader?: boolean;
}

export const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusIndicators = true,
  enableScreenReader = true
}) => {
  // Use the enableFocusIndicators prop to avoid unused variable warning
  const _enableFocusIndicators = enableFocusIndicators;
  const [preferences, setPreferences] = useState({
    highContrast: false,
    reducedMotion: false,
    focusIndicators: true,
    screenReader: false
  });

  useEffect(() => {
    // Check for user preferences
    const checkPreferences = () => {
      // Check for high contrast preference
      if (enableHighContrast) {
        const highContrast = window.matchMedia('(prefers-contrast: high)').matches;
        setPreferences(prev => ({ ...prev, highContrast }));
      }

      // Check for reduced motion preference
      if (enableReducedMotion) {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setPreferences(prev => ({ ...prev, reducedMotion }));
      }

      // Check for screen reader usage
      if (enableScreenReader) {
        const screenReader = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
                           navigator.userAgent.includes('NVDA') ||
                           navigator.userAgent.includes('JAWS') ||
                           navigator.userAgent.includes('VoiceOver');
        setPreferences(prev => ({ ...prev, screenReader }));
      }
    };

    checkPreferences();

    // Listen for preference changes
    const mediaQueries = [
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(prefers-reduced-motion: reduce)')
    ];

    const handleChange = () => checkPreferences();
    mediaQueries.forEach(mq => mq.addEventListener('change', handleChange));

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleChange));
    };
  }, [enableHighContrast, enableReducedMotion, enableScreenReader]);

  useEffect(() => {
    // Apply accessibility enhancements
    const root = document.documentElement;

    // High contrast mode
    if (preferences.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (preferences.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicators
    if (preferences.focusIndicators && _enableFocusIndicators) {
      root.classList.add('focus-indicators');
    } else {
      root.classList.remove('focus-indicators');
    }

    // Screen reader optimizations
    if (preferences.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, [preferences, _enableFocusIndicators]);

  useEffect(() => {
    // Add skip links
    const skipLinks = document.querySelectorAll('.skip-link');
    if (skipLinks.length === 0) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (!main) {
      const app = document.querySelector('#root');
      if (app) {
        app.setAttribute('role', 'main');
        app.id = 'main-content';
      }
    }

    // Announce page changes to screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${document.title}`;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    announcePageChange();
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancements;
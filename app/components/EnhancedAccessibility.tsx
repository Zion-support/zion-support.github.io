'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false,
    keyboardNavigation: false
  });

  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Detect user preferences
    if (typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      setSettings(prev => ({
        ...prev,
        highContrast: prefersHighContrast.matches,
        reducedMotion: prefersReducedMotion.matches
      }));

      // Listen for changes
      const handleContrastChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, highContrast: e.matches }));
      };

      const handleMotionChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      };

      prefersHighContrast.addEventListener('change', handleContrastChange);
      prefersReducedMotion.addEventListener('change', handleMotionChange);

      return () => {
        prefersHighContrast.removeEventListener('change', handleContrastChange);
        prefersReducedMotion.removeEventListener('change', handleMotionChange);
      };
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      
      // High contrast
      if (settings.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }

      // Reduced motion
      if (settings.reducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }

      // Font size
      root.classList.remove('font-small', 'font-medium', 'font-large');
      root.classList.add(`font-${settings.fontSize}`);

      // Track accessibility usage
      trackEvent('accessibility_settings_changed', {
        highContrast: settings.highContrast,
        reducedMotion: settings.reducedMotion,
        fontSize: settings.fontSize
      });
    }
  }, [settings, trackEvent]);

  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content with Alt + M
        if (event.altKey && event.key === 'm') {
          event.preventDefault();
          const main = document.querySelector('main');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Toggle high contrast with Alt + H
        if (event.altKey && event.key === 'h') {
          event.preventDefault();
          setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add ARIA labels to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
      interactiveElements.forEach((element) => {
        if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
          element.setAttribute('aria-label', 'Interactive element');
        }
      });

      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableScreenReaderSupport]);

  return <>{children}</>;
};

export default EnhancedAccessibility;
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
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      setSettings(prev => ({
        ...prev,
        highContrast: highContrastQuery.matches,
        reducedMotion: reducedMotionQuery.matches
      }));

      // Listen for changes
      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, highContrast: e.matches }));
      };

      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      };

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
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

      // Screen reader detection
      const isScreenReader = window.speechSynthesis !== undefined;
      setSettings(prev => ({ ...prev, screenReader: isScreenReader }));
    }
  }, [settings]);

  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
            trackEvent('accessibility', 'skip_link_used');
          }
        }

        // Close dropdowns with Escape
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation, trackEvent]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.style.outline = '2px solid #3b82f6';
          target.style.outlineOffset = '2px';
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.style.outline = '';
          target.style.outlineOffset = '';
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      return () => {
        const existingLiveRegion = document.getElementById('live-region');
        if (existingLiveRegion) {
          existingLiveRegion.remove();
        }
      };
    }
  }, [enableScreenReaderSupport]);

  return <>{children}</>;
};

export default EnhancedAccessibility;
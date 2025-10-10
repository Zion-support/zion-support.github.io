'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false
  });

  // Check for system preferences
  const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Add ARIA landmarks
  const addLandmarks = useCallback(() => {
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
  }, []);

  // Enhance focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }
      .focus-visible {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
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

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      modal.addEventListener('keydown', handleKeyDown);
    });
  }, []);

  // Add keyboard navigation
  const addKeyboardNavigation = useCallback(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.ctrlKey && e.shiftKey) {
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
          e.preventDefault();
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && e.ctrlKey) {
        const nav = document.querySelector('nav');
        if (nav) {
          (nav as HTMLElement).focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Apply accessibility styles
  const applyAccessibilityStyles = useCallback(() => {
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
  }, [settings]);

  // Initialize accessibility features
  useEffect(() => {
    // Set initial settings based on system preferences
    setSettings(prev => ({
      ...prev,
      highContrast: prefersHighContrast,
      reducedMotion: prefersReducedMotion
    }));

    // Apply initial styles
    applyAccessibilityStyles();

    // Listen for preference changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };
    
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Initialize accessibility features
    addLandmarks();
    enhanceFocusManagement();
    const cleanup = addKeyboardNavigation();

    // Track accessibility usage
    trackEvent('accessibility', 'features_initialized', {
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    });

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      cleanup();
    };
  }, [prefersHighContrast, prefersReducedMotion, applyAccessibilityStyles, addLandmarks, enhanceFocusManagement, addKeyboardNavigation, trackEvent]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilityStyles();
  }, [applyAccessibilityStyles]);

  // Update settings function
  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    trackEvent('accessibility', 'settings_updated', newSettings);
  }, [trackEvent]);

  return (
    <div className="accessibility-controls" style={{ display: 'none' }}>
      {/* Accessibility controls would be rendered here */}
      <button
        onClick={() => updateSettings({ highContrast: !settings.highContrast })}
        aria-label="Toggle high contrast mode"
      >
        High Contrast
      </button>
      <button
        onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
        aria-label="Toggle reduced motion"
      >
        Reduced Motion
      </button>
      <select
        value={settings.fontSize}
        onChange={(e) => updateSettings({ fontSize: e.target.value as 'small' | 'medium' | 'large' })}
        aria-label="Font size"
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
};

export default EnhancedAccessibility;
'use client';

import { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
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

  useEffect(() => {
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

    // Setup keyboard navigation
    setupKeyboardNavigation();

    // Setup focus management
    setupFocusManagement();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

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

    // Apply font size
    root.classList.remove('font-normal', 'font-large', 'font-extra-large');
    root.classList.add(`font-${newSettings.fontSize}`);

    // Apply focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const setupKeyboardNavigation = () => {
    // Skip to main content functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView();
        }
      });
    }

    // Trap focus in modals
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
  };

  const setupFocusManagement = () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .high-contrast {
        --tw-bg-opacity: 1;
        --tw-text-opacity: 1;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .font-large {
        font-size: 1.125rem;
      }
      
      .font-extra-large {
        font-size: 1.25rem;
      }
    `;
    document.head.appendChild(style);

    // Track focus events for analytics
    document.addEventListener('focusin', (e) => {
      trackEvent('focus_event', {
        category: 'accessibility',
        label: (e.target as HTMLElement).tagName
      });
    });
  };

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    applyAccessibilitySettings(updatedSettings);
    
    trackEvent('accessibility_setting_changed', {
      category: 'accessibility',
      label: Object.keys(newSettings)[0]
    });
  };

  // Provide accessibility context
  useEffect(() => {
    const context = {
      settings,
      updateSettings
    };
    
    (window as any).accessibilityContext = context;
  }, [settings]);

  return <>{children}</>;
};

export default EnhancedAccessibility;
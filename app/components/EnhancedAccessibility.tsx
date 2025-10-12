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
    keyboardNavigation: true
  });

  const analytics = useAnalytics();

  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings({
      highContrast: prefersHighContrast,
      reducedMotion: prefersReducedMotion,
      fontSize: 'medium',
      screenReader: false,
      keyboardNavigation: true
    });

    // Apply initial accessibility settings
    applyAccessibilitySettings({
      highContrast: prefersHighContrast,
      reducedMotion: prefersReducedMotion,
      fontSize: 'medium',
      screenReader: false,
      keyboardNavigation: true
    });

    // Track accessibility usage
    analytics?.track('accessibility_initialized', {
      prefersReducedMotion,
      prefersHighContrast
    });
  }, [analytics]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${newSettings.fontSize}`);

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  };

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    applyAccessibilitySettings(updatedSettings);
    
    analytics?.track('accessibility_settings_changed', newSettings);
  };

  // Keyboard navigation support
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Ensure focus is visible
      if (target && target.classList) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Remove focus styling
      if (target && target.classList) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    if (!enableScreenReaderSupport) return;
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

  // Expose accessibility functions to window for global access
  useEffect(() => {
    (window as any).accessibility = {
      updateSettings,
      announceToScreenReader,
      settings
    };
  }, [settings]);

  return (
    <div 
      className={`accessibility-wrapper ${settings.highContrast ? 'high-contrast' : ''} ${settings.reducedMotion ? 'reduced-motion' : ''}`}
      data-font-size={settings.fontSize}
      data-screen-reader={settings.screenReader}
    >
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
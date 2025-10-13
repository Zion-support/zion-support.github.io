import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  focusManagement: boolean;
  voiceNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableVoiceNavigation?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableVoiceNavigation = false,
  enableReducedMotion = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    keyboardNavigation: enableKeyboardNavigation,
    screenReader: enableScreenReader,
    focusManagement: enableFocusManagement,
    voiceNavigation: enableVoiceNavigation
  });

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

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  const loadSettings = useCallback(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsedSettings }));
        applyAccessibilitySettings({ ...settings, ...parsedSettings });
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [settings, applyAccessibilitySettings]);

  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links and focusable elements
      if (event.target instanceof HTMLElement) {
        const focusableElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', '[tabindex]'];
        if (focusableElements.some(tag => event.target?.matches(tag))) {
          return;
        }
      }

      // Handle keyboard shortcuts
      switch (event.key) {
        case 'Tab':
          // Ensure proper tab order
          event.preventDefault();
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
          const nextIndex = event.shiftKey 
            ? (currentIndex - 1 + focusableElements.length) % focusableElements.length
            : (currentIndex + 1) % focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
        case 'Escape':
          // Close modals or return focus
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement?.blur) {
            activeElement.blur();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        // Add focus indicator
        target.classList.add('focus-visible');
        
        // Announce focus changes to screen readers
        const announcement = target.getAttribute('aria-label') || 
                           target.textContent?.trim() || 
                           target.getAttribute('title');
        
        if (announcement && enableScreenReader) {
          const announcementElement = document.createElement('div');
          announcementElement.setAttribute('aria-live', 'polite');
          announcementElement.setAttribute('aria-atomic', 'true');
          announcementElement.className = 'sr-only';
          announcementElement.textContent = announcement;
          document.body.appendChild(announcementElement);
          
          setTimeout(() => {
            document.body.removeChild(announcementElement);
          }, 1000);
        }
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
  }, [enableFocusManagement, enableScreenReader]);

  const setupHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleContrastChange);
    if (mediaQuery.matches) {
      document.documentElement.classList.add('high-contrast');
    }

    return () => mediaQuery.removeEventListener('change', handleContrastChange);
  }, [enableHighContrast]);

  const setupReducedMotion = useCallback(() => {
    if (!enableReducedMotion) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    if (mediaQuery.matches) {
      document.documentElement.classList.add('reduced-motion');
    }

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, [enableReducedMotion]);

  const enhanceScreenReader = useCallback(() => {
    if (!enableScreenReader) return;

    // Add screen reader only content
    const srOnlyStyle = document.createElement('style');
    srOnlyStyle.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(srOnlyStyle);

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      document.head.removeChild(srOnlyStyle);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, [enableScreenReader]);

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  useEffect(() => {
    const cleanupKeyboard = setupKeyboardNavigation();
    const cleanupFocus = setupFocusManagement();
    const cleanupContrast = setupHighContrast();
    const cleanupMotion = setupReducedMotion();
    const cleanupScreenReader = enhanceScreenReader();

    return () => {
      cleanupKeyboard?.();
      cleanupFocus?.();
      cleanupContrast?.();
      cleanupMotion?.();
      cleanupScreenReader?.();
    };
  }, [setupKeyboardNavigation, setupFocusManagement, setupHighContrast, setupReducedMotion, enhanceScreenReader]);

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true
  });

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
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

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const trapFocus = (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstFocusableElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  };

  const enableKeyboardNavigation = useCallback(() => {
    // Apply focus trap to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
    const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  const enableScreenReader = useCallback(() => {
    // Add ARIA labels and descriptions
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      skipLink.remove();
    };
  }, []);

  const enableHighContrast = useCallback(() => {
    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      .high-contrast * {
        border-color: currentColor !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  const enableFocusManagement = useCallback(() => {
    // Enhanced focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      .focus-visible:focus:not(:focus-visible) {
        outline: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    const cleanupKeyboard = enableKeyboardNavigation();
    const cleanupScreenReader = enableScreenReader();
    const cleanupContrast = enableHighContrast();
    const cleanupFocus = enableFocusManagement();

    // Apply current settings
    applyAccessibilitySettings(settings);

    return () => {
      if (cleanupKeyboard) cleanupKeyboard();
      if (cleanupScreenReader) cleanupScreenReader();
      if (cleanupContrast) cleanupContrast();
      if (cleanupFocus) cleanupFocus();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement, settings]);

  // Initialize with default settings
  useEffect(() => {
    const defaultSettings = {
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusVisible: true
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  }, []);

  return (
    <>
      {children}
      <style>{`
        /* Keyboard navigation styles */
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

        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        /* Large text mode */
        .large-text {
          font-size: 1.125rem;
        }

        .large-text h1 {
          font-size: 3rem;
        }

        .large-text h2 {
          font-size: 2.5rem;
        }

        .large-text h3 {
          font-size: 2rem;
        }

        /* Reduced motion */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Screen reader optimizations */
        .screen-reader-optimized {
          /* Enhanced contrast and spacing for screen readers */
        }

        /* Focus management */
        .focus-visible:focus:not(:focus-visible) {
          outline: none;
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          * {
            filter: contrast(150%);
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
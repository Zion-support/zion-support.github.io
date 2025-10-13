import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
<<<<<<< HEAD
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

=======
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false
}) => {
>>>>>>> cursor/analyze-improve-and-deploy-application-c573
  useEffect(() => {
    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links for keyboard users
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLinks = document.querySelectorAll('.skip-link');
        skipLinks.forEach(link => {
          (link as HTMLElement).style.display = 'block';
        });
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label="Close"], [data-dismiss="modal"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        });
      }

      // Arrow key navigation for menus
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const activeElement = document.activeElement;
        if (activeElement?.getAttribute('role') === 'menuitem') {
          event.preventDefault();
          const menuItems = Array.from(
            activeElement.closest('[role="menu"]')?.querySelectorAll('[role="menuitem"]') || []
          );
          const currentIndex = menuItems.indexOf(activeElement);
          let nextIndex;

          if (event.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % menuItems.length;
          } else {
            nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
          }

          (menuItems[nextIndex] as HTMLElement)?.focus();
        }
      }
    };

    // Focus management
    const manageFocus = () => {
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (event: KeyboardEvent) => {
          if (event.key === 'Tab') {
            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        };

        document.addEventListener('keydown', handleTabKey);

        return () => {
          document.removeEventListener('keydown', handleTabKey);
        };
      }
    };

    // Focus trap for modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;

      const firstFocusableElement = focusableElements[0] as HTMLElement;
      const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              event.preventDefault();
              lastFocusableElement.focus();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              event.preventDefault();
              firstFocusableElement.focus();
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

    // Apply focus trap to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
    const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        const text = button.textContent?.trim();
        if (text && text.length > 0) {
          button.setAttribute('aria-label', text);
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        const text = link.textContent?.trim();
        if (text && text.length > 0) {
          link.setAttribute('aria-label', text);
        }
      });
    };

    // High contrast mode detection
    const handleHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
<<<<<<< HEAD
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    // Initialize accessibility features
    addAriaLabels();
    handleHighContrast();
    handleReducedMotion();
    manageFocus();

    // Set up event listeners
    document.addEventListener('keydown', handleKeyDown);
    
    const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    highContrastMedia.addEventListener('change', handleHighContrast);
    reducedMotionMedia.addEventListener('change', handleReducedMotion);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      highContrastMedia.removeEventListener('change', handleHighContrast);
      reducedMotionMedia.removeEventListener('change', handleReducedMotion);
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
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

  // Expose announcement function globally for use by other components
  useEffect(() => {
    (window as any).announceToScreenReader = announceToScreenReader;
    
    return () => {
      delete (window as any).announceToScreenReader;
    };
  }, []);

  return (
    <div ref={containerRef} className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
=======
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery as any);

      return () => {
        mediaQuery.removeEventListener('change', handleMotionChange);
      };
    };

    // Screen reader announcements
    const enhanceScreenReader = () => {
      if (!enableScreenReader) return;

      // Add ARIA landmarks
      const addLandmarks = () => {
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
      };

      // Add live regions for dynamic content
      const addLiveRegions = () => {
        let liveRegion = document.getElementById('live-region');
        if (!liveRegion) {
          liveRegion = document.createElement('div');
          liveRegion.id = 'live-region';
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('aria-atomic', 'true');
          liveRegion.className = 'sr-only';
          document.body.appendChild(liveRegion);
        }
      };

      addLandmarks();
      addLiveRegions();

      return () => {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.remove();
        }
      };
    };

    // Initialize all enhancements
    addSkipLink();
    const cleanupKeyboard = enhanceKeyboardNavigation();
    const cleanupFocus = enhanceFocusManagement();
    const cleanupContrast = enhanceHighContrast();
    const cleanupMotion = enhanceScreenReader();

    return () => {
      if (cleanupKeyboard) cleanupKeyboard();
      if (cleanupFocus) cleanupFocus();
      if (cleanupContrast) cleanupContrast();
      if (cleanupMotion) cleanupMotion();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);
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

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusVisible: true
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  // Removed unused functions - functionality is handled by updateSetting directly
  return (
    <>
      {children}
      <style>{`
        /* Keyboard navigation styles */
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* Screen reader only content */
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

        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }

        .high-contrast * {
          border-color: currentColor !important;
        }

        /* Focus indicators */
        .focus-visible:focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* Reduced motion */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Large text mode */
        .large-text {
          font-size: 1.2em;
          line-height: 1.6;
        }

        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text h4 { font-size: 1.5em; }
        .large-text h5 { font-size: 1.25em; }
        .large-text h6 { font-size: 1.1em; }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
>>>>>>> cursor/analyze-improve-and-deploy-application-c573

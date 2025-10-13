<<<<<<< HEAD
import React, { useEffect, ReactNode } from 'react'

interface AccessibilityEnhancerProps {
  children: ReactNode
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return

    // Initialize accessibility features
    const initAccessibility = () => {
      // Add skip navigation link
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg'
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #00ffff;
        color: #000;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px'
      })
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px'
      })
      
      document.body.insertBefore(skipLink, document.body.firstChild)

      // Add ARIA landmarks
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
      }

      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
      }

      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }

      // Enhance focus management
      const enhanceFocusManagement = () => {
        // Add focus indicators to interactive elements
        const interactiveElements = document.querySelectorAll(
          'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )

        interactiveElements.forEach(element => {
          if (!element.classList.contains('focus-enhanced')) {
            element.classList.add('focus-enhanced')
            element.addEventListener('focus', (e) => {
              e.currentTarget.classList.add('focus-visible')
            })
            element.addEventListener('blur', (e) => {
              e.currentTarget.classList.remove('focus-visible')
            })
          }
        })
      }

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]')
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

          const trapFocus = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
              if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                  e.preventDefault()
                  lastElement.focus()
                }
              } else {
                if (document.activeElement === lastElement) {
                  e.preventDefault()
                  firstElement.focus()
                }
              }
            }
          }

          modal.addEventListener('keydown', trapFocus)
        }
      })

      // Enhance keyboard navigation
      const enhanceKeyboardNavigation = () => {
        // Add keyboard support for custom components
        const customButtons = document.querySelectorAll('[data-custom-button]')
        customButtons.forEach(button => {
          button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              button.click()
            }
          })
        })
      }

<<<<<<< HEAD
      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));
=======
      // Initialize all enhancements
      enhanceFocusManagement()
      enhanceKeyboardNavigation()
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18

      // Re-run enhancements when DOM changes
      const observer = new MutationObserver(() => {
        enhanceFocusManagement()
        enhanceKeyboardNavigation()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      // Cleanup function
      return () => {
<<<<<<< HEAD
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // High contrast mode
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return () => {};

      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-high-contrast';
        style.textContent = `
          .high-contrast {
            filter: contrast(150%) brightness(110%);
          }
          .high-contrast * {
            border-color: currentColor !important;
          }
        `;
        document.head.appendChild(style);
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery as any);

      return () => {
        const existingStyle = document.getElementById('accessibility-high-contrast');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
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
=======
        observer.disconnect()
        skipLink.remove()
      }
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
    }

    // Initialize accessibility features
    const cleanup = initAccessibility()

    // Cleanup on unmount
    return cleanup
  }, [])

  return <>{children}</>
}

<<<<<<< HEAD
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
=======
import React from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  return <>{children}</>;
>>>>>>> cursor/analyze-improve-and-deploy-application-da10
};

export default AccessibilityEnhancer;
=======
export default AccessibilityEnhancer
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18

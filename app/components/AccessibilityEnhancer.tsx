<<<<<<< HEAD
import React, { useEffect, ReactNode } from 'react'

<<<<<<< HEAD
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
=======
const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;

    // Enhanced keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
<<<<<<< HEAD
        background: #00ffff;
        color: #000;
=======
        background: #2563eb;
        color: white;
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
<<<<<<< HEAD
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

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"], [role="alertdialog"]');
      const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));
<<<<<<< HEAD
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
=======

      return () => {
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
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

<<<<<<< HEAD
=======
      addHighContrastStyles();
      
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };
      
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
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
=======
      `;
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    // Screen reader announcements
=======
    // Screen reader optimizations
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
    const enhanceScreenReader = () => {
      if (!enableScreenReader) return;

      // Add ARIA landmarks
      const addLandmarks = () => {
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
=======
    // Enhanced focus management
    const enhanceFocusManagement = () => {
      // Add visible focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
        }
        
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
<<<<<<< HEAD

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
<<<<<<< HEAD

  // Removed unused functions - functionality is handled by updateSetting directly
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-8b3d
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
=======
        
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
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
      `;
      document.head.appendChild(style);
    };

    // Enhanced ARIA attributes
    const enhanceARIA = () => {
      // Add ARIA landmarks
      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const id = heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || `heading-${index}`;
          heading.id = id;
        }
      });

      // Add alt text to images without alt
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        img.setAttribute('alt', '');
      });
    };

    // Enhanced color contrast
    const enhanceColorContrast = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Ensure sufficient color contrast */
        .text-gray-300 {
          color: #d1d5db !important;
        }
        
        .text-gray-400 {
          color: #9ca3af !important;
        }
        
        .bg-white\/10 {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .bg-white\/20 {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
      `;
      document.head.appendChild(style);
    };

<<<<<<< HEAD
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
=======
    // Enhanced screen reader support
    const enhanceScreenReaderSupport = () => {
      // Add live regions for dynamic content
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announcePageChange = (message: string) => {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = message;
        }
      };

      // Listen for route changes (if using React Router)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        announcePageChange('Page navigation occurred');
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        announcePageChange('Page content updated');
      };
    };

    // Enhanced form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          const inputElement = input as HTMLInputElement;
          
          // Add required indicator
          if (inputElement.required && !form.querySelector(`[for="${inputElement.id}"] .required`)) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`);
            if (label) {
              const requiredSpan = document.createElement('span');
              requiredSpan.textContent = ' *';
              requiredSpan.className = 'text-red-500';
              requiredSpan.setAttribute('aria-label', 'required');
              label.appendChild(requiredSpan);
            }
          }

          // Add error handling
          inputElement.addEventListener('invalid', () => {
            const errorId = `${inputElement.id}-error`;
            let errorElement = document.getElementById(errorId);
            
            if (!errorElement) {
              errorElement = document.createElement('div');
              errorElement.id = errorId;
              errorElement.className = 'text-red-500 text-sm mt-1';
              errorElement.setAttribute('role', 'alert');
              inputElement.parentNode?.insertBefore(errorElement, inputElement.nextSibling);
            }
            
            errorElement.textContent = inputElement.validationMessage;
            inputElement.setAttribute('aria-describedby', errorId);
          });

          inputElement.addEventListener('input', () => {
            const errorElement = document.getElementById(`${inputElement.id}-error`);
            if (errorElement) {
              errorElement.textContent = '';
            }
          });
        });
      });
    };

    // Initialize all enhancements
    enhanceKeyboardNavigation();
    enhanceFocusManagement();
    enhanceARIA();
    enhanceColorContrast();
    enhanceScreenReaderSupport();
    enhanceFormAccessibility();

    // Cleanup function
    return () => {
      // Remove any added elements or event listeners
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
      
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
};

export default AccessibilityEnhancer;
=======
export default AccessibilityEnhancer
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18

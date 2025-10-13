<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
<<<<<<< HEAD
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
=======
import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
<<<<<<< HEAD
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    // Skip to main content functionality
=======
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true
}) => {
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    // Skip link functionality
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
<<<<<<< HEAD
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50';
      skipLink.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `;
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }

        // Tab navigation improvements
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      // Remove keyboard navigation class on mouse use
      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return () => {};

      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableElement = focusableElements[0] as HTMLElement;
        const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;
=======
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      return () => {
        skipLink.remove();
      };
    };

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return () => {};

      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
>>>>>>> cursor/website-audit-and-update-with-deployment-4146

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
<<<<<<< HEAD
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
=======
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
<<<<<<< HEAD
        firstFocusableElement?.focus();
=======
        firstElement?.focus();
>>>>>>> cursor/website-audit-and-update-with-deployment-4146

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

<<<<<<< HEAD
      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

      // Initialize all enhancements
      enhanceFocusManagement()
      enhanceKeyboardNavigation()
=======
      // Apply focus management to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      modals.forEach(modal => {
        const cleanup = trapFocus(modal as HTMLElement);
        cleanupFunctions.push(cleanup);
      });
>>>>>>> cursor/website-audit-and-update-with-deployment-4146

      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // Keyboard navigation
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return () => {};

      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key handling
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement?.closest('[role="dialog"]')) {
            const closeButton = activeElement.closest('[role="dialog"]')?.querySelector('[aria-label="Close"]') as HTMLElement;
            closeButton?.click();
          }
        }

        // Arrow key navigation for menus
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const menu = (e.target as HTMLElement).closest('[role="menu"]');
          if (menu) {
            e.preventDefault();
            const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
            const currentIndex = items.indexOf(e.target as HTMLElement);
            
            if (e.key === 'ArrowDown') {
              const nextIndex = (currentIndex + 1) % items.length;
              items[nextIndex]?.focus();
            } else {
              const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
              items[prevIndex]?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    };

    // High contrast mode
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return () => {};

      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

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
      addHighContrastStyles();

      return () => {
        const existingStyle = document.getElementById('accessibility-high-contrast');
        existingStyle?.remove();
        mediaQuery.removeEventListener('change', handleContrastChange);
      };
    };

    // Reduced motion
    const enhanceReducedMotion = () => {
      if (!enableReducedMotion) return () => {};

      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
<<<<<<< HEAD
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
=======
          document.body.classList.add('reduce-motion');
        } else {
          document.body.classList.remove('reduce-motion');
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
        }
      };

      const addReducedMotionStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-reduced-motion';
        style.textContent = `
          .reduce-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `;
        document.head.appendChild(style);
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery as any);
      addReducedMotionStyles();

      return () => {
        const existingStyle = document.getElementById('accessibility-reduced-motion');
        existingStyle?.remove();
        mediaQuery.removeEventListener('change', handleMotionChange);
      };
    };

    // Initialize all enhancements
    cleanupFunctions.push(addSkipLink());
    cleanupFunctions.push(enhanceFocusManagement());
    cleanupFunctions.push(enhanceKeyboardNavigation());
    cleanupFunctions.push(enhanceHighContrast());
    cleanupFunctions.push(enhanceReducedMotion());

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceFocusManagement();
      enhanceKeyboardNavigation();
    });

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
export default AccessibilityEnhancer
>>>>>>> cursor/analyze-improve-and-deploy-application-b200
=======
=======
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
>>>>>>> cursor/analyze-improve-and-deploy-application-9867
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Keyboard navigation improvements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.ctrlKey) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Increase font size with Ctrl + Plus
      if (e.ctrlKey && e.key === '=') {
        e.preventDefault();
        setFontSize(prev => {
          const sizes = ['small', 'normal', 'large', 'xlarge'];
          const currentIndex = sizes.indexOf(prev);
          return currentIndex < sizes.length - 1 ? sizes[currentIndex + 1] : prev;
        });
      }
      
      // Decrease font size with Ctrl + Minus
      if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        setFontSize(prev => {
          const sizes = ['small', 'normal', 'large', 'xlarge'];
          const currentIndex = sizes.indexOf(prev);
          return currentIndex > 0 ? sizes[currentIndex - 1] : prev;
        });
      }
      
      // Reset font size with Ctrl + 0
      if (e.ctrlKey && e.key === '0') {
        e.preventDefault();
        setFontSize('normal');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        filter: contrast(1.5) brightness(1.2);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .font-small {
        font-size: 0.875rem;
      }
      
      .font-normal {
        font-size: 1rem;
      }
      
      .font-large {
        font-size: 1.125rem;
      }
      
      .font-xlarge {
        font-size: 1.25rem;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);

    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.head.removeChild(style);
      document.body.removeChild(skipLink);
    };
  }, []);

  // Apply accessibility classes to body
  useEffect(() => {
    const body = document.body;
    body.className = body.className.replace(/high-contrast|reduced-motion|font-\w+/g, '').trim();
    
    if (isHighContrast) body.classList.add('high-contrast');
    if (reducedMotion) body.classList.add('reduced-motion');
    body.classList.add(`font-${fontSize}`);
  }, [isHighContrast, reducedMotion, fontSize]);

  return (
    <div 
      id="main-content"
      className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${reducedMotion ? 'reduced-motion' : ''} font-${fontSize}`}
      role="main"
      tabIndex={-1}
    >
      {children}
      
      {/* Accessibility Controls */}
      <div 
        className="fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
        role="toolbar"
        aria-label="Accessibility controls"
      >
        <h3 className="text-white text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={() => setIsHighContrast(!isHighContrast)}
            className="block w-full text-left text-xs text-gray-300 hover:text-white transition-colors"
            aria-pressed={isHighContrast}
          >
            {isHighContrast ? '✓' : '○'} High Contrast
          </button>
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className="block w-full text-left text-xs text-gray-300 hover:text-white transition-colors"
            aria-pressed={reducedMotion}
          >
            {reducedMotion ? '✓' : '○'} Reduce Motion
          </button>
          <div className="text-xs text-gray-300">
            Font Size: {fontSize}
            <div className="flex gap-1 mt-1">
              <button
                onClick={() => setFontSize('small')}
                className="px-1 py-0.5 text-xs bg-white/20 rounded hover:bg-white/30"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('normal')}
                className="px-1 py-0.5 text-sm bg-white/20 rounded hover:bg-white/30"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className="px-1 py-0.5 text-base bg-white/20 rounded hover:bg-white/30"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className="px-1 py-0.5 text-lg bg-white/20 rounded hover:bg-white/30"
              >
                A
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AccessibilityEnhancer;
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-cec7
=======
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    cleanupFunctions.push(() => observer.disconnect());

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement, enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
>>>>>>> cursor/website-audit-and-update-with-deployment-4146
=======
export default AccessibilityEnhancer;
>>>>>>> cursor/analyze-improve-and-deploy-application-9867

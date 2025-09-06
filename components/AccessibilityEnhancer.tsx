<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus: not-sr-only',
    skipLink.style.cssText = `
      position: absolute, top: -40px,
      left: 6px, background: #000,
      color: #fff, padding: 8px,
      text-decoration: none, z-index: 1000,
    `;
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management
    const handleMouseDown = () => {
      document.body.classList.add('using-mouse');
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.remove('using-mouse');
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    // Add ARIA live region for announcements
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

    // Listen for route changes (Next.js specific)
    const handleRouteChange = () => {
      announcePageChange('Page loaded');
    };

    // Add route change listener if available
    if (typeof window !== 'undefined' && window.history) {
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = function(...args) {
        originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.history.replaceState = function(...args) {
        originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.addEventListener('popstate', handleRouteChange);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion);
      }
    };
  }, []);

  return null;
};

// Add CSS for focus management
const focusStyles = `
  .using-mouse *:focus {
    outline: none !important,
  }
  .focus-visible:focus {
    outline: 2px solid #2563eb !important, outline-offset: 2px !important,
  }
  .sr-only {
    position: absolute, width: 1px,
    height: 1px, padding: 0,
    margin: -1px, overflow: hidden,
    clip: rect(0, 0, 0, 0);
    white-space: nowrap, border: 0,
  }
  .sr-only.focus:not-sr-only:focus {
    position: static, width: auto,
    height: auto, padding: inherit,
    margin: inherit, overflow: visible,
    clip: auto, white-space: normal,
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = focusStyles;
  document.head.appendChild(styleSheet);
}
=======
import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  
  // Keyboard navigation enhancements
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!enableKeyboardNavigation) return;

    // Skip to main content
    if (event.key === 'Tab' && event.shiftKey && event.altKey) {
      event.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.focus();
        main.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Escape key to close modals/dropdowns
    if (event.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }
  }, [enableKeyboardNavigation]);

  // Focus management
  const manageFocus = useCallback(() => {
    if (!enableFocusManagement) return;

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .text-gray-600 {
          color: #000000 !important;
        }
        .text-gray-300 {
          color: #ffffff !important;
        }
        .bg-gray-100 {
          background-color: #ffffff !important;
          border: 1px solid #000000 !important;
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enableFocusManagement]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // High contrast mode detection
  const handleHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
        announceToScreenReader('High contrast mode enabled');
      } else {
        document.documentElement.classList.remove('high-contrast');
        announceToScreenReader('High contrast mode disabled');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [enableHighContrast, announceToScreenReader]);

  // Reduced motion detection
  const handleReducedMotion = useCallback(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
        announceToScreenReader('Reduced motion mode enabled');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [announceToScreenReader]);

  // Add ARIA landmarks
  const addAriaLandmarks = useCallback(() => {
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

  useEffect(() => {
    const cleanupFocus = manageFocus();
    const cleanupHighContrast = handleHighContrast();
    const cleanupReducedMotion = handleReducedMotion();
    
    addAriaLandmarks();

    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    return () => {
      if (cleanupFocus) cleanupFocus();
      if (cleanupHighContrast) cleanupHighContrast();
      if (cleanupReducedMotion) cleanupReducedMotion();
      
      if (enableKeyboardNavigation) {
        document.removeEventListener('keydown', handleKeyboardNavigation);
      }
    };
  }, [
    manageFocus,
    handleHighContrast,
    handleReducedMotion,
    addAriaLandmarks,
    handleKeyboardNavigation,
    enableKeyboardNavigation
  ]);

  return null;
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8

export default AccessibilityEnhancer;
=======
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);

  const applyAccessibilityStyles = (
    highContrast: boolean,
    fontSizeValue: string,
    reducedMotionValue: boolean
  ) => {
    const root = document.documentElement;

    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    root.classList.add(`font-${fontSizeValue}`);

    if (reducedMotionValue) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };

  const changeFontSize = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

  return (
    <>
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Options</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
          <div className="text-xs text-gray-600 dark:text-gray-300">Font Size:</div>
          <div className="flex gap-1">
            {['small', 'normal', 'large', 'extra-large'].map((size) => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Screen reader only content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Technology Solutions Provider</h1>
        <p>
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum
          computing, blockchain infrastructure, and innovative development services.
        </p>
      </div>

      {/* Main content */}
      <div id="main-content">{children}</div>
    </>
  );
};

export default AccessibilityEnhancer;
>>>>>>> origin/automation-fixes

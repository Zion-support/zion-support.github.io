'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
  enableSkipLinks: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
}

interface AccessibilityEnhancerProps {
  config?: Partial<AccessibilityConfig>;
  children: React.ReactNode;
}

interface AccessibilityEnhancerRef {
  announceToScreenReader: (message: string) => void;
  setFontSize: (size: number) => void;
}

const AccessibilityEnhancer = React.forwardRef<AccessibilityEnhancerRef, AccessibilityEnhancerProps>(({
  config = {},
  children
}, ref) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const announcementRef = useRef<HTMLDivElement>(null);

  const defaultConfig: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableHighContrast: true,
    enableReducedMotion: true,
    enableFocusManagement: true,
    enableSkipLinks: true,
    enableARIALabels: true,
    enableColorContrast: true,
    ...config
  };

  const announceToScreenReader = useCallback((message: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
      announcementRef.current.setAttribute('aria-live', 'polite');
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      setIsKeyboardNavigation(true);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsKeyboardNavigation(false);
  }, []);

  useEffect(() => {
    const initializeAccessibility = () => {
      if (defaultConfig.enableSkipLinks) {
        setupSkipLinks();
      }
      if (defaultConfig.enableScreenReaderSupport) {
        setupScreenReaderSupport();
      }
      if (defaultConfig.enableKeyboardNavigation) {
        setupKeyboardNavigation();
      }
      if (defaultConfig.enableFocusManagement) {
        setupFocusManagement();
      }
      if (defaultConfig.enableARIALabels) {
        setupARIALandmarks();
      }
      if (defaultConfig.enableColorContrast) {
        setupMediaQueries();
      }
    };

    const setupSkipLinks = () => {
      const skipLinksContainer = document.createElement('div');
      skipLinksContainer.className = 'skip-links';
      
      const skipToMain = document.createElement('a');
      skipToMain.href = '#main-content';
      skipToMain.textContent = 'Skip to main content';
      skipToMain.className = 'skip-link';
      // skipToMain.ref = skipLinkRef; // Removed incorrect ref assignment
      
      const skipToNav = document.createElement('a');
      skipToNav.href = '#main-navigation';
      skipToNav.textContent = 'Skip to navigation';
      skipToNav.className = 'skip-link';
      
      skipLinksContainer.appendChild(skipToMain);
      skipLinksContainer.appendChild(skipToNav);
      document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    };

    const addScreenReaderOnlyText = () => {
      const style = document.createElement('style');
      style.textContent = `
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
        .sr-only.focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
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
        .focus-visible:focus {
          outline: 2px solid #4f46e5;
          outline-offset: 2px;
        }
        .high-contrast {
          filter: contrast(150%);
        }
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    };

    const setupARIALandmarks = () => {
      // Add main landmark
      const mainElement = document.querySelector('main') || document.querySelector('#main-content');
      if (mainElement) {
        mainElement.setAttribute('role', 'main');
        mainElement.setAttribute('id', 'main-content');
        // mainElement.ref = mainContentRef; // Removed incorrect ref assignment
      }

      // Add navigation landmark
      const navElement = document.querySelector('nav');
      if (navElement) {
        navElement.setAttribute('role', 'navigation');
        navElement.setAttribute('id', 'main-navigation');
        navElement.setAttribute('aria-label', 'Main navigation');
      }

      // Add header landmark
      const headerElement = document.querySelector('header');
      if (headerElement) {
        headerElement.setAttribute('role', 'banner');
      }

      // Add footer landmark
      const footerElement = document.querySelector('footer');
      if (footerElement) {
        footerElement.setAttribute('role', 'contentinfo');
      }
    };

    const setupScreenReaderSupport = () => {
      addScreenReaderOnlyText();
      
      // Add live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    };

    const setupKeyboardNavigation = () => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          setFocusVisible(true);
        }
      };

      const handleMouseDown = () => {
        setFocusVisible(false);
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    const setupFocusManagement = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (focusVisible && target.matches(focusableElements)) {
          target.classList.add('focus-visible');
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        target.classList.remove('focus-visible');
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    };

    const setupMediaQueries = () => {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
      };

      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

      // Set initial values
      setIsHighContrast(highContrastQuery.matches);
      setIsReducedMotion(reducedMotionQuery.matches);

      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      };
    };

    const cleanupEventListeners = () => {
      document.removeEventListener('focusin', setupFocusManagement);
      document.removeEventListener('focusout', setupFocusManagement);
    };

    initializeAccessibility();

    return cleanupEventListeners;
  }, [focusVisible]);

  // Announce changes to screen readers
  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }

    // Check for user preferences
    if (defaultConfig.enableHighContrast) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      setIsHighContrast(prefersHighContrast);
    }

    if (defaultConfig.enableReducedMotion) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsReducedMotion(prefersReducedMotion);
    }

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (isKeyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Set font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, isKeyboardNavigation, fontSize]);

  // Expose methods via ref
  React.useImperativeHandle(ref, () => ({
    announceToScreenReader,
    setFontSize: (size: number) => {
      setFontSize(Math.max(12, Math.min(24, size)));
    }
  }), [announceToScreenReader]);

  return (
    <div className="accessibility-enhancer">
      {defaultConfig.enableSkipLinks && (
        <div className="skip-links">
          <a 
            href="#main-content" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to main content
          </a>
          <a 
            href="#navigation" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to navigation
          </a>
        </div>
      )}
      
      {children}
      
      {/* Screen reader announcements */}
      {defaultConfig.enableScreenReaderSupport && (
        <div
          ref={announcementRef}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        />
      )}
    </div>
  );
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;
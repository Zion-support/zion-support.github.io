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

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  config = {},
  children,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [fontSize, _setFontSize] = useState(16);
  const skipLinkRef = useRef<HTMLAnchorElement | null>(null);

  const defaultConfig: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableHighContrast: true,
    enableReducedMotion: true,
    enableFocusManagement: true,
    enableSkipLinks: true,
    enableARIALabels: true,
    enableColorContrast: true,
    ...config,
  };

  const mergedConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    const initializeAccessibility = () => {
      if (mergedConfig.enableSkipLinks) {
        setupSkipLinks();
      }
      if (mergedConfig.enableScreenReaderSupport) {
        setupScreenReaderSupport();
      }
      if (mergedConfig.enableKeyboardNavigation) {
        setupKeyboardNavigation();
      }
      if (mergedConfig.enableFocusManagement) {
        setupFocusManagement();
      }
      if (mergedConfig.enableARIALabels) {
        setupARIALandmarks();
      }
      if (mergedConfig.enableColorContrast) {
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
        .sr-only.focus\:not-sr-only:focus {
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
  }, []);

  // Announce changes to screen readers
  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  // Font size setter wrapper
  const setFontSize = useCallback((size: number) => {
    _setFontSize(size);
  }, []);
  // Helper functions
  const addSkipLinks = useCallback(() => {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    
    const skipToMain = document.createElement('a');
    skipToMain.href = '#main-content';
    skipToMain.textContent = 'Skip to main content';
    skipToMain.className = 'skip-link';
    skipToMain.setAttribute('data-skip-link', 'main');

    const skipToNav = document.createElement('a');
    skipToNav.href = '#navigation';
    skipToNav.textContent = 'Skip to navigation';
    skipToNav.className = 'skip-link';

    skipLinksContainer.appendChild(skipToMain);
    skipLinksContainer.appendChild(skipToNav);
    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }, []);

  const addScreenReaderOnlyText = useCallback(() => {
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
  }, []);

  const setupARIALandmarks = useCallback(() => {
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

  const setupFormLabels = useCallback(() => {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      if (!inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${inputElement.id}"]`);
        if (!label) {
          inputElement.setAttribute('aria-label', inputElement.placeholder || 'Form input');
        }
      }
    });
  }, []);

  const handleArrowKeyNavigation = useCallback((event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const role = target.getAttribute('role');
    
    if (role === 'menuitem' || role === 'tab' || role === 'option') {
      const container = target.closest('[role="menu"], [role="tablist"], [role="listbox"]');
      if (container) {
        const items = Array.from(container.querySelectorAll(`[role="${role}"]`));
        const currentIndex = items.indexOf(target);
        
        let nextIndex = currentIndex;
        switch (event.key) {
          case 'ArrowDown':
          case 'ArrowRight':
            nextIndex = Math.min(currentIndex + 1, items.length - 1);
            break;
          case 'ArrowUp':
          case 'ArrowLeft':
            nextIndex = Math.max(currentIndex - 1, 0);
            break;
        }
        
        if (nextIndex !== currentIndex) {
          (items[nextIndex] as HTMLElement).focus();
          event.preventDefault();
        }
      }
    }
  }, []);

  const trapFocusInModal = useCallback((event: KeyboardEvent, modal: HTMLElement) => {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }, []);

  const updateHighContrastStyles = useCallback((enabled: boolean) => {
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, []);

  const updateReducedMotionStyles = useCallback((enabled: boolean) => {
    if (enabled) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }, []);

  const detectHighContrast = useCallback(() => {
    if (window.matchMedia) {
      const query = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(query.matches);
      updateHighContrastStyles(query.matches);
    }
  }, [updateHighContrastStyles]);

  const detectReducedMotion = useCallback(() => {
    if (window.matchMedia) {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(query.matches);
      updateReducedMotionStyles(query.matches);
    }
  }, [updateReducedMotionStyles]);

  const initializeAccessibility = useCallback(() => {
    // Add accessibility attributes to body
    document.body.setAttribute('role', 'application');
    document.body.setAttribute('aria-live', 'polite');
    
    // Add skip links
    if (defaultConfig.enableSkipLinks) {
      addSkipLinks();
    }

    // Setup high contrast detection
    if (defaultConfig.enableHighContrast) {
      detectHighContrast();
    }

    // Setup reduced motion detection
    if (defaultConfig.enableReducedMotion) {
      detectReducedMotion();
    }
  }, [defaultConfig.enableSkipLinks, defaultConfig.enableHighContrast, defaultConfig.enableReducedMotion, addSkipLinks, detectHighContrast, detectReducedMotion]);

  const setupKeyboardNavigation = useCallback(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey === false && !event.ctrlKey && !event.altKey) {
        if (document.activeElement === document.body) {
          event.preventDefault();
          skipLinkRef.current?.focus();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('role') === 'dialog') {
          activeElement.blur();
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        handleArrowKeyNavigation(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
  }, [handleArrowKeyNavigation]);

  const setupScreenReaderSupport = useCallback(() => {
    // Add screen reader only text
    addScreenReaderOnlyText();
    
    // Setup ARIA landmarks
    setupARIALandmarks();
    
    // Setup form labels
    setupFormLabels();
  }, [addScreenReaderOnlyText, setupARIALandmarks, setupFormLabels]);

  const setupFocusManagement = useCallback(() => {
    // Track focus visibility
    const handleFocusIn = () => setFocusVisible(true);
    const handleFocusOut = () => setFocusVisible(false);
    
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Trap focus in modals
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]') as HTMLElement;
        if (modal && modal.contains(document.activeElement)) {
          trapFocusInModal(event, modal);
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
  }, [trapFocusInModal]);

  const setupMediaQueries = useCallback(() => {
    // High contrast media query
    if (window.matchMedia) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
        updateHighContrastStyles(e.matches);
      };

      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
        updateReducedMotionStyles(e.matches);
      };

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

      // Initial values
      setIsHighContrast(highContrastQuery.matches);
      setIsReducedMotion(reducedMotionQuery.matches);
    }
  }, [updateHighContrastStyles, updateReducedMotionStyles]);

  const setupARIALiveRegions = useCallback(() => {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }, []);

  const cleanupEventListeners = useCallback(() => {
    // Remove event listeners
    document.removeEventListener('keydown', setupKeyboardNavigation);
    document.removeEventListener('focusin', setupFocusManagement);
    document.removeEventListener('focusout', setupFocusManagement);
  }, [setupKeyboardNavigation, setupFocusManagement]);

  useEffect(() => {
    // Initialize accessibility features
    initializeAccessibility();
    
    // Setup keyboard navigation
    if (defaultConfig.enableKeyboardNavigation) {
      setupKeyboardNavigation();
    }

    // Setup screen reader support
    if (defaultConfig.enableScreenReaderSupport) {
      setupScreenReaderSupport();
    }

    // Setup focus management
    if (defaultConfig.enableFocusManagement) {
      setupFocusManagement();
    }

    // Setup media queries for user preferences
    setupMediaQueries();

    // Setup ARIA live regions
    setupARIALiveRegions();

    // Cleanup
    return () => {
      cleanupEventListeners();
    };
  }, [cleanupEventListeners, defaultConfig.enableFocusManagement, defaultConfig.enableKeyboardNavigation, defaultConfig.enableScreenReaderSupport, initializeAccessibility, setupFocusManagement, setupKeyboardNavigation, setupMediaQueries, setupScreenReaderSupport, setupARIALiveRegions]);

  return (
    <div
      className={`accessibility-enhancer ${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
      style={{
        fontSize: `${fontSize}px`,
        '--focus-visible': focusVisible ? '2px solid #0066cc' : 'none',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
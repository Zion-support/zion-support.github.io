import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

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
  const [fontSize] = useState(16);
  // const [focusVisible] = useState(false);
  const skipLinkRef = useRef<HTMLAnchorElement>(null);
  // const mainContentRef = useRef<HTMLElement>(null);

  const defaultConfig: AccessibilityConfig = useMemo(() => ({
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableHighContrast: true,
    enableReducedMotion: true,
    enableFocusManagement: true,
    enableSkipLinks: true,
    enableARIALabels: true,
    enableColorContrast: true,
    ...config,
  }), [config]);

  // Helper functions
  const detectHighContrast = useCallback(() => {
    if (window.matchMedia) {
      const query = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(query.matches);
      updateHighContrastStyles(query.matches);
    }
  }, [setIsHighContrast]);

  const detectReducedMotion = useCallback(() => {
    if (window.matchMedia) {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(query.matches);
      updateReducedMotionStyles(query.matches);
    }
  }, [setIsReducedMotion]);

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
  }, [defaultConfig, detectHighContrast, detectReducedMotion]);

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
  }, [skipLinkRef]);

  const setupScreenReaderSupport = useCallback(() => {
    // Add screen reader only text
    addScreenReaderOnlyText();
    
    // Setup ARIA landmarks
    setupARIALandmarks();
    
    // Setup form labels
    setupFormLabels();
  }, []);

  const setupFocusManagement = useCallback(() => {
    // Track focus visibility
    // const handleFocusIn = () => setFocusVisible(true);
    // const handleFocusOut = () => setFocusVisible(false);
    
    // document.addEventListener('focusin', handleFocusIn);
    // document.addEventListener('focusout', handleFocusOut);

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
  }, []);

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
  }, [setIsHighContrast, setIsReducedMotion]);

  const setupARIALiveRegions = useCallback(() => {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }, []);

  const addSkipLinks = () => {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    
    const skipToMain = document.createElement('a');
    skipToMain.href = '#main-content';
    skipToMain.textContent = 'Skip to main content';
    skipToMain.className = 'skip-link';
    // skipToMain.ref = skipLinkRef; // ref is not a valid property for HTMLAnchorElement
    
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
      
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      .focus-visible {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
      
      .high-contrast {
        filter: contrast(150%) brightness(120%);
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
      // mainElement.ref = mainContentRef; // ref is not a valid property for HTMLElement
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

  const setupFormLabels = () => {
    // Add labels to form inputs that don't have them
    const inputs = document.querySelectorAll('input:not([type="hidden"]):not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input, index) => {
      const inputElement = input as HTMLInputElement;
      if (!inputElement.labels || inputElement.labels.length === 0) {
        const label = document.createElement('label');
        label.setAttribute('for', inputElement.id || `input-${index}`);
        label.textContent = inputElement.placeholder || `Input ${index + 1}`;
        label.className = 'sr-only';
        
        if (!inputElement.id) {
          inputElement.id = `input-${index}`;
        }
        
        inputElement.parentNode?.insertBefore(label, inputElement);
      }
    });
  };

  const handleArrowKeyNavigation = (event: KeyboardEvent) => {
    const activeElement = document.activeElement as HTMLElement;
    const role = activeElement.getAttribute('role');
    
    if (role === 'menuitem' || role === 'tab' || role === 'option') {
      const container = activeElement.closest('[role="menu"], [role="tablist"], [role="listbox"]');
      if (container) {
        const items = Array.from(container.querySelectorAll(`[role="${role}"]`));
        const currentIndex = items.indexOf(activeElement);
        let nextIndex = currentIndex;

        switch (event.key) {
          case 'ArrowDown':
          case 'ArrowRight':
            nextIndex = (currentIndex + 1) % items.length;
            break;
          case 'ArrowUp':
          case 'ArrowLeft':
            nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            break;
        }

        if (nextIndex !== currentIndex) {
          event.preventDefault();
          (items[nextIndex] as HTMLElement).focus();
        }
      }
    }
  };

  const trapFocusInModal = (event: KeyboardEvent, modal: HTMLElement) => {
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
  };

  const updateHighContrastStyles = (enabled: boolean) => {
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const updateReducedMotionStyles = (enabled: boolean) => {
    if (enabled) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  };

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

  // Announce changes to screen readers
  // const announceToScreenReader = (message: string) => {
  //   const liveRegion = document.getElementById('live-region');
  //   if (liveRegion) {
  //     liveRegion.textContent = message;
  //   }
  // };

  // Utility functions are available through the component's internal state

  return (
    <div
      className={`accessibility-enhancer ${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
<<<<<<< HEAD
<<<<<<< HEAD
'use client';
=======
"use client";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0475
=======
"use client";
>>>>>>> origin/main

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
  const [fontSize, setFontSize] = useState(16);
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

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

  // Helper functions
  const addSkipLinks = useCallback(() => {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    
    const skipToMain = document.createElement('a');
    skipToMain.href = '#main-content';
    skipToMain.textContent = 'Skip to main content';
    skipToMain.className = 'skip-link';
    // Store reference for focus management
    (skipLinkRef as any).current = skipToMain;

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
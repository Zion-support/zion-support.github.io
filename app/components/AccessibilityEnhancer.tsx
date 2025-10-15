import React, { useEffect, useCallback, useState } from 'react';
import { logger } from '../utils/logger';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

interface AccessibilityState {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: false,
    screenReader: false,
  });

  // Detect screen reader usage
  const detectScreenReader = useCallback(() => {
    const isScreenReader = 
      window.navigator.userAgent.includes('NVDA') ||
      window.navigator.userAgent.includes('JAWS') ||
      window.navigator.userAgent.includes('VoiceOver') ||
      window.navigator.userAgent.includes('TalkBack') ||
      // Check for screen reader specific APIs
      (window as any).speechSynthesis ||
      (window as any).speechSynthesis?.speaking;

    setAccessibilityState(prev => ({
      ...prev,
      screenReader: isScreenReader
    }));

    logger.info('Screen reader detected', { isScreenReader });
  }, []);

  // Detect user preferences
  const detectUserPreferences = useCallback(() => {
    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detect high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Detect color scheme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setAccessibilityState(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    }));

    logger.info('User preferences detected', {
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      darkScheme: prefersDarkScheme,
    });
  }, []);

  // Setup keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links for keyboard navigation
      if (event.key === 'Tab' && !event.shiftKey) {
        setAccessibilityState(prev => ({ ...prev, focusVisible: true }));
      }
      
      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
      
      // Enter key for custom interactive elements
      if (event.key === 'Enter' || event.key === ' ') {
        const target = event.target as HTMLElement;
        if (target.getAttribute('role') === 'button' && !target.tagName.toLowerCase().includes('button')) {
          event.preventDefault();
          target.click();
        }
      }
    };

    const handleMouseDown = () => {
      setAccessibilityState(prev => ({ ...prev, focusVisible: false }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Setup focus management
  const setupFocusManagement = useCallback(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (container: HTMLElement) => {
      const focusableContent = container.querySelectorAll(focusableElements);
      const firstFocusableElement = focusableContent[0] as HTMLElement;
      const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      };

      container.addEventListener('keydown', handleTabKey);
      firstFocusableElement?.focus();

      return () => {
        container.removeEventListener('keydown', handleTabKey);
      };
    };

    // Apply focus trap to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));

    return () => {
      // Cleanup handled by individual trap functions
    };
  }, []);

  // Setup ARIA live regions
  const setupAriaLiveRegions = useCallback(() => {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Create assertive live region for urgent announcements
    const assertiveLiveRegion = document.createElement('div');
    assertiveLiveRegion.setAttribute('aria-live', 'assertive');
    assertiveLiveRegion.setAttribute('aria-atomic', 'true');
    assertiveLiveRegion.className = 'sr-only';
    assertiveLiveRegion.id = 'assertive-live-region';
    document.body.appendChild(assertiveLiveRegion);

    return () => {
      document.body.removeChild(liveRegion);
      document.body.removeChild(assertiveLiveRegion);
    };
  }, []);

  // Setup skip links
  const setupSkipLinks = useCallback(() => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);

    return () => {
      if (document.body.contains(skipLinks)) {
        document.body.removeChild(skipLinks);
      }
    };
  }, []);

  // Apply accessibility styles
  const applyAccessibilityStyles = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Skip links */
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        left: -9999px;
        top: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        z-index: 1001;
      }
      
      .skip-link:focus {
        left: 6px;
        top: 6px;
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
      
      /* Focus styles */
      .focus-visible {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
      
      /* High contrast mode */
      @media (prefers-contrast: high) {
        * {
          border-color: currentColor !important;
        }
        
        button, a {
          border: 2px solid currentColor !important;
        }
      }
      
      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
      
      /* Focus management */
      [tabindex="-1"]:focus {
        outline: none;
      }
      
      /* Button focus styles */
      button:focus-visible,
      [role="button"]:focus-visible {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
      
      /* Link focus styles */
      a:focus-visible {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
        text-decoration: underline;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    detectScreenReader();
    detectUserPreferences();
    const keyboardCleanup = setupKeyboardNavigation();
    const focusCleanup = setupFocusManagement();
    const liveRegionCleanup = setupAriaLiveRegions();
    const skipLinksCleanup = setupSkipLinks();
    const styleCleanup = applyAccessibilityStyles();

    return () => {
      keyboardCleanup();
      focusCleanup();
      liveRegionCleanup();
      skipLinksCleanup();
      styleCleanup();
    };
  }, [
    detectScreenReader,
    detectUserPreferences,
    setupKeyboardNavigation,
    setupFocusManagement,
    setupAriaLiveRegions,
    setupSkipLinks,
    applyAccessibilityStyles,
  ]);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const liveRegion = document.getElementById(priority === 'assertive' ? 'assertive-live-region' : 'live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }, []);

  // Expose accessibility utilities
  React.useEffect(() => {
    (window as any).accessibilityUtils = {
      announce: announceToScreenReader,
      state: accessibilityState,
    };
  }, [announceToScreenReader, accessibilityState]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
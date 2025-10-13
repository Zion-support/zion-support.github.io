import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityManagerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
}

const EnhancedAccessibilityManager: React.FC<AccessibilityManagerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Keyboard navigation enhancements
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
            if (closeButton instanceof HTMLElement) {
              closeButton.click();
            }
          }
        });
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const target = event.target as HTMLElement;
        if (target.getAttribute('role') === 'menuitem' || target.classList.contains('focusable')) {
          event.preventDefault();
          navigateWithArrows(target, event.key);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Arrow key navigation helper
  const navigateWithArrows = (currentElement: HTMLElement, direction: string) => {
    const focusableElements = Array.from(
      document.querySelectorAll('[tabindex]:not([tabindex="-1"]), button, [href], input, select, textarea, [role="menuitem"]')
    ) as HTMLElement[];

    const currentIndex = focusableElements.indexOf(currentElement);
    let nextIndex = currentIndex;

    switch (direction) {
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        break;
    }

    if (nextIndex !== currentIndex) {
      focusableElements[nextIndex]?.focus();
    }
  };

  // Screen reader enhancements
  const setupScreenReaderSupport = useCallback(() => {
    if (!enableScreenReader) return;

    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Enhance form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
          input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
          if (!label.id) {
            label.id = `label-${input.id}`;
          }
        }
      }
    });

    // Add role attributes where needed
    const buttons = document.querySelectorAll('button:not([role])');
    buttons.forEach(button => {
      if (!button.getAttribute('role')) {
        button.setAttribute('role', 'button');
      }
    });

    // Enhance navigation landmarks
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) {
      nav.setAttribute('aria-label', 'Main navigation');
    }

    return () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, [enableScreenReader]);

  // High contrast mode
  const setupHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    const handleHighContrastToggle = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.altKey && event.key === 'h') {
        event.preventDefault();
        setIsHighContrast(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleHighContrastToggle);
    return () => document.removeEventListener('keydown', handleHighContrastToggle);
  }, [enableHighContrast]);

  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    // Track focus visibility
    const handleFocusIn = () => setFocusVisible(true);
    const handleFocusOut = () => setFocusVisible(false);
    const handleMouseDown = () => setFocusVisible(false);

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    document.addEventListener('mousedown', handleMouseDown);

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      element.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => element.removeEventListener('keydown', handleTabKey);
    };

    // Apply focus trap to modals
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            const modal = node.querySelector('[role="dialog"]');
            if (modal) {
              trapFocus(modal as HTMLElement);
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      document.removeEventListener('mousedown', handleMouseDown);
      observer.disconnect();
    };
  }, [enableFocusManagement]);

  // Reduced motion support
  const setupReducedMotion = useCallback(() => {
    if (!enableReducedMotion) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableReducedMotion]);

  // Announce page changes to screen readers
  const announcePageChange = useCallback((message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, []);

  // Apply accessibility styles
  useEffect(() => {
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

      .focus-visible:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      ${isHighContrast ? `
        * {
          background-color: ${isHighContrast ? '#000000' : 'inherit'} !important;
          color: ${isHighContrast ? '#ffffff' : 'inherit'} !important;
          border-color: ${isHighContrast ? '#ffffff' : 'inherit'} !important;
        }
        
        a {
          text-decoration: underline !important;
        }
        
        button, input, select, textarea {
          border: 2px solid #ffffff !important;
        }
      ` : ''}

      ${isReducedMotion ? `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      ` : ''}

      ${focusVisible ? `
        .focus-visible:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      ` : ''}
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isHighContrast, isReducedMotion, focusVisible]);

  // Setup all accessibility features
  useEffect(() => {
    const cleanupKeyboard = setupKeyboardNavigation();
    const cleanupScreenReader = setupScreenReaderSupport();
    const cleanupHighContrast = setupHighContrast();
    const cleanupFocus = setupFocusManagement();
    const cleanupMotion = setupReducedMotion();

    return () => {
      cleanupKeyboard?.();
      cleanupScreenReader?.();
      cleanupHighContrast?.();
      cleanupFocus?.();
      cleanupMotion?.();
    };
  }, [setupKeyboardNavigation, setupScreenReaderSupport, setupHighContrast, setupFocusManagement, setupReducedMotion]);

  // Announce page changes
  useEffect(() => {
    const path = window.location.pathname;
    const pageName = path === '/' ? 'Home' : path.split('/').pop()?.replace(/-/g, ' ') || 'Page';
    announcePageChange(`Navigated to ${pageName} page`);
  }, [announcePageChange]);

  return null; // This component doesn't render anything
};

export default EnhancedAccessibilityManager;
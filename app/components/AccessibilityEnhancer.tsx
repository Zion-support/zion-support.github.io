import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true,
  children
}) => {
  const [, setIsHighContrast] = useState(false);
  const [, setIsReducedMotion] = useState(false);

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

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Arrow key navigation for custom components
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusedElement = document.activeElement as HTMLElement;
        if (focusedElement && focusedElement.getAttribute('role') === 'menuitem') {
          event.preventDefault();
          const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
          const currentIndex = menuItems.indexOf(focusedElement);
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, menuItems.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          const nextItem = menuItems[nextIndex] as HTMLElement;
          if (nextItem) {
            nextItem.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader enhancements
  const setupScreenReader = useCallback(() => {
    if (!enableScreenReader) return;

    // Add skip links
    const skipLinks = document.createElement('div');
    skipLinks.className = 'sr-only';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);

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

    // Listen for route changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedNode = mutation.addedNodes[0] as Element;
          if (addedNode && addedNode.nodeType === Node.ELEMENT_NODE) {
            const h1 = addedNode.querySelector('h1');
            if (h1) {
              announcePageChange(`Page loaded: ${h1.textContent}`);
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      document.body.removeChild(skipLinks);
      document.body.removeChild(liveRegion);
    };
  }, [enableScreenReader]);

  // High contrast mode
  const setupHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    const checkHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      setIsHighContrast(prefersHighContrast);
      
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);
    checkHighContrast();

    return () => mediaQuery.removeEventListener('change', checkHighContrast);
  }, [enableHighContrast]);

  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

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
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.getAttribute('role') === 'dialog' || 
                element.classList.contains('modal')) {
              trapFocus(element as HTMLElement);
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [enableFocusManagement]);

  // Reduced motion
  const setupReducedMotion = useCallback(() => {
    if (!enableReducedMotion) return;

    const checkReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsReducedMotion(prefersReducedMotion);
      
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);
    checkReducedMotion();

    return () => mediaQuery.removeEventListener('change', checkReducedMotion);
  }, [enableReducedMotion]);

  // Add accessibility styles
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

      .high-contrast {
        filter: contrast(1.5) brightness(1.2);
      }

      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      .focus-visible:focus {
        outline: 2px solid #06b6d4;
        outline-offset: 2px;
      }

      [role="button"]:focus,
      [role="menuitem"]:focus,
      [role="tab"]:focus {
        outline: 2px solid #06b6d4;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Setup all accessibility features
  useEffect(() => {
    const cleanupFunctions = [
      setupKeyboardNavigation(),
      setupScreenReader(),
      setupHighContrast(),
      setupFocusManagement(),
      setupReducedMotion()
    ].filter(Boolean);

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup?.());
    };
  }, [
    setupKeyboardNavigation,
    setupScreenReader,
    setupHighContrast,
    setupFocusManagement,
    setupReducedMotion
  ]);

  return <>{children}</>; // Render children with accessibility enhancements
};

export default AccessibilityEnhancer;
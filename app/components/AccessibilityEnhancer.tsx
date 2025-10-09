'use client';
import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true
}) => {
  // Keyboard navigation enhancements
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          event.preventDefault();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }

      // Arrow keys for navigation
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.getAttribute('role') === 'menuitem') {
          event.preventDefault();
          // Handle menu navigation
          const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
          const currentIndex = menuItems.indexOf(focusedElement);
          let nextIndex = currentIndex;

          switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
              nextIndex = (currentIndex + 1) % menuItems.length;
              break;
            case 'ArrowUp':
            case 'ArrowLeft':
              nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
              break;
          }

          (menuItems[nextIndex] as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader enhancements
  const enhanceScreenReader = useCallback(() => {
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

    // Add screen reader only text for icons
    const icons = document.querySelectorAll('[data-icon]');
    icons.forEach(icon => {
      const iconElement = icon as HTMLElement;
      if (!iconElement.getAttribute('aria-label') && !iconElement.getAttribute('aria-labelledby')) {
        const iconName = iconElement.getAttribute('data-icon') || 'icon';
        iconElement.setAttribute('aria-label', iconName);
      }
    });

    // Announce page changes
    const announcePageChange = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Listen for route changes (Next.js specific)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedNode = mutation.addedNodes[0] as Element;
          if (addedNode && addedNode.getAttribute('data-testid') === 'page-title') {
            const title = addedNode.textContent || 'Page loaded';
            announcePageChange(title);
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const skipLinksElement = document.querySelector('.sr-only');
      if (skipLinksElement) {
        document.body.removeChild(skipLinksElement);
      }
    };
  }, [enableScreenReader]);

  // High contrast mode
  const enhanceHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    // Add high contrast toggle
    const highContrastToggle = document.createElement('button');
    highContrastToggle.textContent = 'Toggle High Contrast';
    highContrastToggle.className = 'sr-only';
    highContrastToggle.setAttribute('aria-label', 'Toggle high contrast mode');
    
    highContrastToggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isHighContrast = document.body.classList.contains('high-contrast');
      localStorage.setItem('high-contrast', isHighContrast.toString());
    });

    // Check for saved preference
    const savedPreference = localStorage.getItem('high-contrast');
    if (savedPreference === 'true') {
      document.body.classList.add('high-contrast');
    }

    document.body.appendChild(highContrastToggle);
    return () => document.body.removeChild(highContrastToggle);
  }, [enableHighContrast]);

  // Focus management
  const enhanceFocusManagement = useCallback(() => {
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
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    const cleanupFunctions: (() => void)[] = [];

    modals.forEach(modal => {
      const cleanup = trapFocus(modal as HTMLElement);
      cleanupFunctions.push(cleanup);
    });

    return () => cleanupFunctions.forEach(cleanup => cleanup());
  }, [enableFocusManagement]);

  // ARIA labels enhancement
  const enhanceAriaLabels = useCallback(() => {
    if (!enableAriaLabels) return;

    // Add ARIA labels to interactive elements without them
    const interactiveElements = document.querySelectorAll(
      'button:not([aria-label]):not([aria-labelledby]), a:not([aria-label]):not([aria-labelledby])'
    );

    interactiveElements.forEach(element => {
      const elementType = element.tagName.toLowerCase();
      const textContent = element.textContent?.trim();
      
      if (textContent) {
        element.setAttribute('aria-label', textContent);
      } else if (elementType === 'button') {
        element.setAttribute('aria-label', 'Button');
      } else if (elementType === 'a') {
        element.setAttribute('aria-label', 'Link');
      }
    });

    // Add role attributes where needed
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.getAttribute('role')) {
        heading.setAttribute('role', 'heading');
        heading.setAttribute('aria-level', heading.tagName.charAt(1));
      }
    });

    // Add landmark roles
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, [enableAriaLabels]);

  useEffect(() => {
    const cleanupFunctions = [
      enhanceKeyboardNavigation(),
      enhanceScreenReader(),
      enhanceHighContrast(),
      enhanceFocusManagement(),
      enhanceAriaLabels()
    ].filter(Boolean);

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup?.());
    };
  }, [enhanceKeyboardNavigation, enhanceScreenReader, enhanceHighContrast, enhanceFocusManagement, enhanceAriaLabels]);

  return null;
};

export default AccessibilityEnhancer;
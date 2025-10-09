'use client';
import React, { useEffect } from 'react';

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
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            e.preventDefault();
          }
        }

        // Escape key handling
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach(modal => {
            const closeButton = modal.querySelector('[aria-label="Close"], [data-close]') as HTMLElement;
            if (closeButton) {
              closeButton.focus();
            }
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (container: HTMLElement) => {
        const focusableContent = container.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
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
          }
        };

        container.addEventListener('keydown', handleTabKey);
        firstFocusableElement?.focus();
      };

      // Apply focus trapping to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // High contrast mode detection
    if (enableHighContrast) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const updateHighContrast = () => {
        if (prefersHighContrast.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      updateHighContrast();
      prefersHighContrast.addEventListener('change', updateHighContrast);
    }

    // Screen reader announcements
    if (enableScreenReader) {
      const announceToScreenReader = (message: string) => {
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

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`New section: ${heading.textContent}`);
              }
            }
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
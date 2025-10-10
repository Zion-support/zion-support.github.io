'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content with Tab
        if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            e.preventDefault();
          }
        }

        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          if (activeModal) {
            const closeButton = activeModal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }

        // Arrow key navigation for custom components
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const focusedElement = document.activeElement;
          if (focusedElement && focusedElement.getAttribute('role') === 'menuitem') {
            e.preventDefault();
            const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
            const currentIndex = menuItems.indexOf(focusedElement);
            const nextIndex = e.key === 'ArrowDown' 
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
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (typeof window === 'undefined' || !enableScreenReaderSupport) return;

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
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

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          const id = `heading-${index}-${heading.textContent?.toLowerCase().replace(/\s+/g, '-')}`;
          heading.setAttribute('id', id);
        }
      });
    };

    addAriaLandmarks();

    // Monitor for dynamic content changes
    const observer = new MutationObserver(addAriaLandmarks);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (typeof window === 'undefined' || !enableHighContrast) return;

    // High contrast mode detection and enhancement
    const enhanceHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
        
        // Add high contrast styles
        const style = document.createElement('style');
        style.textContent = `
          .high-contrast {
            --text-primary: #ffffff;
            --text-secondary: #e5e5e5;
            --bg-primary: #000000;
            --bg-secondary: #1a1a1a;
            --border-color: #ffffff;
          }
          
          .high-contrast * {
            border-color: var(--border-color) !important;
          }
          
          .high-contrast button,
          .high-contrast a {
            border: 2px solid var(--border-color) !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    enhanceHighContrast();

    // Listen for changes in contrast preference
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handleChange = () => {
      if (mediaQuery.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableHighContrast]);

  useEffect(() => {
    if (typeof window === 'undefined' || !enableFocusManagement) return;

    // Focus management for better accessibility
    const manageFocus = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        *:focus:not(:focus-visible) {
          outline: none !important;
        }
        
        *:focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

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
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const cleanup = trapFocus(modal as HTMLElement);
        // Store cleanup function for later use
        (modal as any).__focusTrapCleanup = cleanup;
      });
    };

    manageFocus();

    // Monitor for new modals
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.matches('[role="dialog"]')) {
              const cleanup = trapFocus(element as HTMLElement);
              (element as any).__focusTrapCleanup = cleanup;
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [enableFocusManagement]);

  // Announce page changes to screen readers
  useEffect(() => {
    if (typeof window === 'undefined' || !enableScreenReaderSupport) return;

    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has loaded';
      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce when the page is ready
    if (document.readyState === 'complete') {
      announcePageChange();
    } else {
      window.addEventListener('load', announcePageChange);
      return () => window.removeEventListener('load', announcePageChange);
    }
  }, [enableScreenReaderSupport]);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
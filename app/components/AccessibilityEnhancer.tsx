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
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key to close modals
        if (event.key === 'Escape') {
          const activeModal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
          if (activeModal) {
            const closeButton = activeModal.querySelector('[aria-label="Close"], [data-dismiss="modal"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }

        // Arrow keys for menu navigation
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          const activeElement = document.activeElement;
          if (activeElement && activeElement.getAttribute('role') === 'menuitem') {
            event.preventDefault();
            const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
            const currentIndex = menuItems.indexOf(activeElement);
            let nextIndex;

            if (event.key === 'ArrowDown') {
              nextIndex = (currentIndex + 1) % menuItems.length;
            } else {
              nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
            }

            (menuItems[nextIndex] as HTMLElement).focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach((link) => {
        if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
          link.setAttribute('aria-label', 'Link');
        }
      });

      return () => {
        const skipLinkElement = document.querySelector('a[href="#main-content"]');
        if (skipLinkElement) {
          skipLinkElement.remove();
        }
      };
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast && typeof window !== 'undefined') {
      const applyHighContrast = () => {
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
        if (prefersHighContrast) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      applyHighContrast();
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      mediaQuery.addEventListener('change', applyHighContrast);

      return () => {
        mediaQuery.removeEventListener('change', applyHighContrast);
        document.documentElement.classList.remove('high-contrast');
      };
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
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

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      // Apply focus trap to modals
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (element.getAttribute('role') === 'dialog') {
                trapFocus(element);
              }
            }
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
      };
    }
  }, [enableFocusManagement]);

  // Add CSS for high contrast mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        .high-contrast button,
        .high-contrast [role="button"] {
          background-color: black !important;
          color: white !important;
          border: 2px solid black !important;
        }
        .high-contrast a {
          color: blue !important;
          text-decoration: underline !important;
        }
        .high-contrast input,
        .high-contrast textarea,
        .high-contrast select {
          border: 2px solid black !important;
          background-color: white !important;
          color: black !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
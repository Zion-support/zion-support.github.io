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
          const modal = document.querySelector('[role="dialog"]') as HTMLElement;
          if (modal) {
            const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLButtonElement;
            if (closeButton) {
              closeButton.click();
            }
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
      const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
      if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('tabindex', '-1');
      }

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add ARIA labels to links
      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach((link) => {
        if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast && typeof window !== 'undefined') {
      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
          @media (prefers-contrast: high) {
            * {
              border-color: currentColor !important;
            }
            button, input, select, textarea {
              border: 2px solid currentColor !important;
            }
            a {
              text-decoration: underline !important;
            }
          }
        `;
        document.head.appendChild(style);
      };

      addHighContrastStyles();
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
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

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach((modal) => {
        const cleanup = trapFocus(modal as HTMLElement);
        return cleanup;
      });
    }
  }, [enableFocusManagement]);

  return null; // This component doesn't render anything visible
};

export default AccessibilityEnhancer;
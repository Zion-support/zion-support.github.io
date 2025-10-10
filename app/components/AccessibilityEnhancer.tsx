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
            const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.focus();
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
    // Screen reader support enhancements
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add skip links
      const skipLinks = document.querySelectorAll('a[href^="#"]');
      skipLinks.forEach(link => {
        link.setAttribute('tabindex', '0');
        link.setAttribute('aria-label', `Skip to ${link.getAttribute('href')?.substring(1)}`);
      });

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add role attributes
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          const id = `heading-${index}`;
          heading.setAttribute('id', id);
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
            a:focus, button:focus, input:focus, select:focus, textarea:focus {
              outline: 3px solid currentColor !important;
              outline-offset: 2px !important;
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
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (event: KeyboardEvent) => {
          if (event.key === 'Tab') {
            if (event.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                event.preventDefault();
              }
            }
          }
        };

        modal.addEventListener('keydown', handleTabKey);
      });

      // Announce page changes to screen readers
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

      // Listen for route changes (if using React Router)
      const observer = new MutationObserver(() => {
        const newHeading = document.querySelector('h1');
        if (newHeading) {
          announcePageChange(`Page changed to: ${newHeading.textContent}`);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
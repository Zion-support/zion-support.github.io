<<<<<<< HEAD
'use client'
import Navigation from './Navigation'
import React, { useEffect } from 'react'
interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
}
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true
  enableScreenReaderSupport = true
  enableHighContrast = true
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return
    // Add keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const mainContent = document.querySelector('main, [role=&quot;main&quot;]')
          if (mainContent) {
            (mainContent as HTMLElement).focus()
            event.preventDefault()
          }
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return (
    <>
      ) => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [enableKeyboardNavigation])
  useEffect(() => {
    // Add screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild)
      // Add ARIA landmarks
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
      }
      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
      }
      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }
  }, [enableScreenReaderSupport])
  useEffect(() => {
  // Add high contrast support
    if (enableHighContrast) {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important
  }
          button, a {
  border: 2px solid currentColor !important
  }
        }
      `
      document.head.appendChild(style)
    }
  }, [enableHighContrast])
  useEffect(() => {
    // Add focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])'
      const trapFocus = (element: HTMLElement) => {
        const focusableContent = element.querySelectorAll(focusableElements)
        const firstFocusableElement = focusableContent[0] as HTMLElement
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement
        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus()
                e.preventDefault()
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus()
                e.preventDefault()
              }
            }
          }
        })
      }
      // Apply focus trapping to modals
      const modals = document.querySelectorAll('[role=&quot;dialog&quot;]')
      modals.forEach(trapFocus)
    }
  }, [enableFocusManagement]
    </>
  )
  return null
}
export default AccessibilityEnhancer
=======
import React, { useState, useEffect } from 'react';

<<<<<<< HEAD

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
=======
interface AccessibilityEnhancerProps {}
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

<<<<<<< HEAD
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation: _enableKeyboardNavigation = true,
  enableScreenReaderSupport: _enableScreenReaderSupport = true,
  enableHighContrast: _enableHighContrast = false,
  enableFocusManagement: _enableFocusManagement = true
}) => {
=======
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({}
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Enable keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip links for better keyboard navigation
        if (event.key === 'Tab') {
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement?.focus();
            }
          }
        }

        // Close dropdowns with Escape key
        if (event.key === 'Escape') {}
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {}
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

        const handleTabKey = (e: KeyboardEvent) => {}
          if (e.key !== 'Tab') return;

          if (e.shiftKey) {}
            if (document.activeElement === firstFocusableElement) {}
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {}
            if (document.activeElement === lastFocusableElement) {}
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        };

        container.addEventListener('keydown', handleTabKey);
        firstFocusableElement?.focus();

        return () => container.removeEventListener('keydown', handleTabKey);
      };

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {}
      // Add live region for dynamic content updates
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announcePageChange = (message: string) => {}
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {}
          liveRegion.textContent = message;
        }
      });
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancerPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main

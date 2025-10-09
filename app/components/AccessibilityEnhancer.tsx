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
    // Keyboard navigation
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && document.activeElement === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach((dropdown) => {
            (dropdown as HTMLElement).click();
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader enhancements
    if (enableScreenReader && typeof window !== 'undefined') {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add role attributes
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    }
  }, [enableScreenReader]);

  useEffect(() => {
    // High contrast mode support
    if (enableHighContrast && typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .cyber-card,
          .hologram-card,
          .quantum-card {
            border: 2px solid currentColor;
          }
          
          .neon-text {
            text-shadow: 2px 2px 0 currentColor;
          }
          
          .cyber-button {
            border: 2px solid currentColor;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      // Focus visible styles
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }
        
        *:focus:not(:focus-visible) {
          outline: none;
        }
        
        *:focus-visible {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);

      // Focus trap for modals
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
        trapFocus(modal as HTMLElement);
      });
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
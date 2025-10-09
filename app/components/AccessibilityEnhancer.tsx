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
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content with Tab
        if (event.key === 'Tab' && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
          }
        }

        // Close dropdowns with Escape
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach((dropdown) => {
            (dropdown as HTMLElement).click();
          });
        }

        // Navigate dropdowns with arrow keys
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          const activeElement = document.activeElement;
          if (activeElement && activeElement.getAttribute('aria-haspopup') === 'true') {
            event.preventDefault();
            const dropdown = activeElement.nextElementSibling as HTMLElement;
            if (dropdown) {
              const firstItem = dropdown.querySelector('a, button') as HTMLElement;
              if (firstItem) {
                firstItem.focus();
              }
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA labels to interactive elements
      const addAriaLabels = () => {
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach((button) => {
          const text = button.textContent?.trim();
          if (text && text.length > 0) {
            button.setAttribute('aria-label', text);
          }
        });

        const links = document.querySelectorAll('a:not([aria-label])');
        links.forEach((link) => {
          const text = link.textContent?.trim();
          if (text && text.length > 0) {
            link.setAttribute('aria-label', text);
          }
        });

        // Add role attributes
        const cards = document.querySelectorAll('.cyber-card, .hologram-card, .quantum-card');
        cards.forEach((card) => {
          if (!card.getAttribute('role')) {
            card.setAttribute('role', 'article');
          }
        });

        // Add heading hierarchy
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
          if (!section.querySelector('h1, h2, h3, h4, h5, h6')) {
            const heading = document.createElement('h2');
            heading.textContent = `Section ${index + 1}`;
            heading.className = 'sr-only';
            section.insertBefore(heading, section.firstChild);
          }
        });
      };

      // Run after DOM is loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addAriaLabels);
      } else {
        addAriaLabels();
      }
    }

    // High contrast mode support
    if (enableHighContrast) {
      const addHighContrastSupport = () => {
        // Add high contrast styles
        const style = document.createElement('style');
        style.textContent = `
          @media (prefers-contrast: high) {
            .cyber-card, .hologram-card, .quantum-card {
              border: 2px solid #00ffff !important;
              background: rgba(0, 0, 0, 0.9) !important;
            }
            .neon-text, .cyber-text {
              text-shadow: none !important;
              color: #00ffff !important;
            }
            .cyber-button {
              border: 2px solid #00ffff !important;
              background: #000000 !important;
              color: #00ffff !important;
            }
          }
        `;
        document.head.appendChild(style);
      };

      addHighContrastSupport();
    }

    // Focus management
    if (enableFocusManagement) {
      const manageFocus = () => {
        // Add focus indicators
        const style = document.createElement('style');
        style.textContent = `
          *:focus {
            outline: 2px solid #00ffff !important;
            outline-offset: 2px !important;
          }
          .focus-visible:focus {
            outline: 2px solid #00ffff !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(style);

        // Trap focus in modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          const focusableElements = modal.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
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

          modal.addEventListener('keydown', handleTabKey);
        });
      };

      manageFocus();
    }

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        <a href="#navigation" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to navigation
        </a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();

  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;

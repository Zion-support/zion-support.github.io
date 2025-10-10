'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
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

        // Close dropdowns with Escape key
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          });
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
      const addSkipLinks = () => {
        if (document.querySelector('.skip-links')) return;
        
        const skipLinks = document.createElement('div');
        skipLinks.className = 'skip-links';
        skipLinks.innerHTML = `
          <a href="#main-content" class="skip-link">Skip to main content</a>
          <a href="#navigation" class="skip-link">Skip to navigation</a>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
          .skip-links {
            position: absolute;
            top: -100px;
            left: 0;
            z-index: 1000;
          }
          .skip-link {
            position: absolute;
            top: 0;
            left: 0;
            background: #000;
            color: #fff;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 0 0 4px 0;
            transform: translateY(-100%);
            transition: transform 0.3s;
          }
          .skip-link:focus {
            transform: translateY(0);
          }
        `;
        
        document.head.appendChild(style);
        document.body.insertBefore(skipLinks, document.body.firstChild);
      };

      addSkipLinks();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast && typeof window !== 'undefined') {
      const addHighContrastStyles = () => {
        if (document.querySelector('#high-contrast-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'high-contrast-styles';
        style.textContent = `
          @media (prefers-contrast: high) {
            * {
              border-color: currentColor !important;
            }
            button, a, input, select, textarea {
              border: 2px solid currentColor !important;
            }
            button:focus, a:focus, input:focus, select:focus, textarea:focus {
              outline: 3px solid #00ffff !important;
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
      const manageFocus = () => {
        // Trap focus in modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (firstElement && lastElement) {
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
          }
        });
      };

      manageFocus();
    }
  }, [enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
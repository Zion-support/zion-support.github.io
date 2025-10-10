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
    // Add keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.altKey) {
          event.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
            activeElement.setAttribute('aria-expanded', 'false');
            activeElement.blur();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Add screen reader announcements
    if (enableScreenReaderSupport) {
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
          if (mutation.type === 'childList') {
            const addedNodes = Array.from(mutation.addedNodes);
            addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                if (element.getAttribute('role') === 'main') {
                  announceToScreenReader('Page content loaded');
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Add high contrast support
    if (enableHighContrast) {
      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.id = 'high-contrast-styles';
        style.textContent = `
          @media (prefers-contrast: high) {
            .cyber-card, .quantum-card, .hologram-card {
              border: 2px solid currentColor !important;
              background: var(--bg-color, #000) !important;
              color: var(--text-color, #fff) !important;
            }
            
            .cyber-button, .quantum-button {
              border: 2px solid currentColor !important;
              background: var(--button-bg, #000) !important;
              color: var(--button-text, #fff) !important;
            }
            
            a:focus, button:focus, input:focus, textarea:focus, select:focus {
              outline: 3px solid #00ffff !important;
              outline-offset: 2px !important;
            }
          }
        `;
        document.head.appendChild(style);
      };

      addHighContrastStyles();

      // Listen for contrast preference changes
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          addHighContrastStyles();
        } else {
          const existingStyle = document.getElementById('high-contrast-styles');
          if (existingStyle) {
            existingStyle.remove();
          }
        }
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Add focus management
    if (enableFocusManagement) {
      const manageFocus = () => {
        // Trap focus in modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          const handleTabKey = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
              if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                  e.preventDefault();
                  lastElement.focus();
                }
              } else {
                if (document.activeElement === lastElement) {
                  e.preventDefault();
                  firstElement.focus();
                }
              }
            }
          };

          modal.addEventListener('keydown', handleTabKey);
        });

        // Announce focus changes
        const handleFocusChange = (e: FocusEvent) => {
          const target = e.target as HTMLElement;
          if (target) {
            const label = target.getAttribute('aria-label') || 
                         target.getAttribute('title') || 
                         target.textContent?.trim();
            
            if (label && target.getAttribute('role')) {
              const announcement = document.createElement('div');
              announcement.setAttribute('aria-live', 'polite');
              announcement.className = 'sr-only';
              announcement.textContent = `${target.getAttribute('role')}: ${label}`;
              
              document.body.appendChild(announcement);
              setTimeout(() => document.body.removeChild(announcement), 1000);
            }
          }
        };

        document.addEventListener('focusin', handleFocusChange);
        return () => document.removeEventListener('focusin', handleFocusChange);
      };

      manageFocus();
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
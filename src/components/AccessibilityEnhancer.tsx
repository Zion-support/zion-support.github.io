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
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey === false) {
          const skipLink = document.querySelector('a[href="#main-content"]');
          if (skipLink && document.activeElement === document.body) {
            skipLink.focus();
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
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
            const addedNode = mutation.addedNodes[0] as HTMLElement;
            if (addedNode && addedNode.getAttribute && addedNode.getAttribute('aria-label')) {
              announceToScreenReader(addedNode.getAttribute('aria-label')!);
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableScreenReader]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast) {
      const checkHighContrast = () => {
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
        if (prefersHighContrast) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      checkHighContrast();
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      mediaQuery.addEventListener('change', checkHighContrast);
      
      return () => mediaQuery.removeEventListener('change', checkHighContrast);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      const manageFocus = () => {
        // Ensure focus is visible
        const focusedElement = document.activeElement as HTMLElement;
        if (focusedElement && focusedElement.style) {
          focusedElement.style.outline = '2px solid #3b82f6';
          focusedElement.style.outlineOffset = '2px';
        }
      };

      document.addEventListener('focusin', manageFocus);
      document.addEventListener('focusout', () => {
        const focusedElement = document.activeElement as HTMLElement;
        if (focusedElement && focusedElement.style) {
          focusedElement.style.outline = '';
          focusedElement.style.outlineOffset = '';
        }
      });

      return () => {
        document.removeEventListener('focusin', manageFocus);
        document.removeEventListener('focusout', manageFocus);
      };
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
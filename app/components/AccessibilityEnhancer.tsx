'use client';

import React, { useEffect } from 'react';

interfaceAccessibility Enhancer Props {
  enableKeyboard Navigation?: boolean;
  enableScreen Reader Support?: boolean;
  enableHigh Contrast?: boolean;
  enableFocus Management?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboard Navigation = true,
  enableScreen Reader Support = true,
  enableHigh Contrast = true,
  enableFocus Management = true
}) => {
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion mode
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.altKey) {
          event.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }
      };

      document.addEvent Listener('keydown', handleKey Down);
      return () => document.removeEvent Listener('keydown', handleKey Down);
    }
  }, [enableKeyboardNavigation, enableHighContrast]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader announcements
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
            const addedNode = mutation.addedNodes[0] asElement;
            if (addedNode && addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`Page updated: ${heading.textContent}`);
              }
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
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Focus management for modals and dropdowns
      const manageFocus = (event: FocusEvent) => {
        const target = event.target asElement;
        if (target && target.closest('[role="dialog"], [role="menu"], [role="listbox"]')) {
          const focusableElements = target.closest('[role="dialog"], [role="menu"], [role="listbox"]')?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (event.key === 'Tab') {
              if (event.shiftKey && target === firstElement) {
                event.preventDefault();
                lastElement.focus();
              } else if (!event.shiftKey && target === lastElement) {
                event.preventDefault();
                firstElement.focus();
              }
            }
          }
        }
      };

      document.addEventListener('keydown', manageFocus);
      return () => document.removeEventListener('keydown', manageFocus);
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
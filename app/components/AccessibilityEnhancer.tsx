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
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]');
          if (skipLink) {
            (skipLink as HTMLElement).focus();
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
    // Focus management
    if (enableFocusManagement) {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
        
        .sr-only:focus {
          position: static !important;
          width: auto !important;
          height: auto !important;
          padding: inherit !important;
          margin: inherit !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    // High contrast mode detection
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      // Check initial state
      if (mediaQuery.matches) {
        document.body.classList.add('high-contrast');
      }

      mediaQuery.addEventListener('change', handleContrastChange);
      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);

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
            // Check if a new main content area was added
            const addedNodes = Array.from(mutation.addedNodes);
            const hasMainContent = addedNodes.some(node => 
              node.nodeType === Node.ELEMENT_NODE && 
              (node as Element).querySelector('main, [role="main"]')
            );
            
            if (hasMainContent) {
              announceToScreenReader('Page content updated');
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

  return null;
};

export default AccessibilityEnhancer;
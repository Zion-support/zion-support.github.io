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
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // High contrast mode
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Focus management
    if (enableFocusManagement) {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target && target.closest('[role="dialog"]')) {
          // Trap focus in modal dialogs
          const dialog = target.closest('[role="dialog"]') as HTMLElement;
          const focusableElements = dialog.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.target === lastElement && event.shiftKey) {
            event.preventDefault();
            firstElement?.focus();
          } else if (event.target === firstElement && !event.shiftKey) {
            event.preventDefault();
            lastElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleFocusIn);
      return () => document.removeEventListener('keydown', handleFocusIn);
    }

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key handling
        if (event.key === 'Escape') {
          const modal = document.querySelector('[role="dialog"][aria-hidden="false"]') as HTMLElement;
          if (modal) {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            closeButton?.click();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Screen reader support
    if (enableScreenReaderSupport) {
      // Announce page changes
      const announcePageChange = () => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = 'Page content has loaded';
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce when content changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            announcePageChange();
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

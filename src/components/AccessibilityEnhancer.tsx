import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderOptimization?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderOptimization = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key handling
        if (event.key === 'Escape') {
          const activeModal = document.querySelector('[role="dialog"][aria-hidden="false"]') as HTMLElement;
          if (activeModal) {
            const closeButton = activeModal.querySelector('[data-close-modal]') as HTMLElement;
            if (closeButton) {
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
    if (typeof window === 'undefined') return;

    // Screen reader optimizations
    if (enableScreenReaderOptimization) {
      // Add skip link if it doesn't exist
      if (!document.querySelector('[data-skip-to-main]')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        skipLink.setAttribute('data-skip-to-main', 'true');
        document.body.insertBefore(skipLink, document.body.firstChild);
      }

      // Add main content landmark if it doesn't exist
      const mainContent = document.querySelector('#main-content');
      if (!mainContent) {
        const main = document.createElement('main');
        main.id = 'main-content';
        main.setAttribute('role', 'main');
        main.className = 'min-h-screen';
        document.body.appendChild(main);
      }

      // Enhance form labels
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach((input) => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', input.getAttribute('placeholder') || 'Input field');
        }
      });

      // Enhance buttons
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
          const icon = button.querySelector('svg, img');
          if (icon) {
            button.setAttribute('aria-label', 'Button');
          }
        }
      });
    }
  }, [enableScreenReaderOptimization]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Focus management
    if (enableFocusManagement) {
      // Trap focus in modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach((modal) => {
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

      // Manage focus on route changes
      const handleRouteChange = () => {
        const mainHeading = document.querySelector('h1, [role="main"] h1');
        if (mainHeading) {
          (mainHeading as HTMLElement).focus();
        }
      };

      // Listen for navigation events
      window.addEventListener('popstate', handleRouteChange);
      return () => window.removeEventListener('popstate', handleRouteChange);
    }
  }, [enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
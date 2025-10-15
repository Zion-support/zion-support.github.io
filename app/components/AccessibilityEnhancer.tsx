import React, { useEffect, memo } from 'react';

const AccessibilityEnhancer: React.FC = memo(() => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }
      
      // Close dropdowns on Escape
      if (event.key === 'Escape') {
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
        openDropdowns.forEach(dropdown => {
          (dropdown as HTMLElement).click();
        });
      }
      
      // Navigate dropdowns with arrow keys
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.getAttribute('aria-haspopup') === 'true') {
          event.preventDefault();
          const menu = activeElement.nextElementSibling;
          if (menu && menu.getAttribute('role') === 'menu') {
            const firstItem = menu.querySelector('[role="menuitem"]') as HTMLElement;
            if (firstItem) {
              firstItem.focus();
            }
          }
        }
      }
    };

    // Add focus management for modals and dropdowns
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus ring for keyboard users
      if (target.matches('button, a, input, textarea, select, [tabindex]')) {
        target.classList.add('keyboard-focus');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('keyboard-focus');
    };

    // Add ARIA live region for announcements
    const addLiveRegion = () => {
      const existingLiveRegion = document.getElementById('aria-live-region');
      if (!existingLiveRegion) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    // Add skip link
    const addSkipLink = () => {
      const existingSkipLink = document.getElementById('skip-link');
      if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.id = 'skip-link';
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    // Add main content ID
    const addMainContentId = () => {
      const mainContent = document.querySelector('main');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }
    };

    // Initialize accessibility features
    addLiveRegion();
    addSkipLink();
    addMainContentId();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Add CSS for keyboard focus
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-focus {
        outline: 2px solid #3b82f6 !important;
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
      
      .focus\\:not-sr-only:focus {
        position: static !important;
        width: auto !important;
        height: auto !important;
        padding: 0.5rem 1rem !important;
        margin: 0 !important;
        overflow: visible !important;
        clip: auto !important;
        white-space: normal !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return null;
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;
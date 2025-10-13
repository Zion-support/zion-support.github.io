import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation improvements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink && document.activeElement === document.body) {
          (skipLink as HTMLElement).focus();
        }
      }

      // Close modals with Escape
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        });
      }
    };

    // Add focus management for dropdowns
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Ensure dropdowns are properly managed
      if (target.hasAttribute('aria-expanded')) {
        const isExpanded = target.getAttribute('aria-expanded') === 'true';
        const menu = target.nextElementSibling as HTMLElement;
        
        if (menu && menu.hasAttribute('role')) {
          menu.setAttribute('aria-hidden', (!isExpanded).toString());
        }
      }
    };

    // Add ARIA live region for dynamic content
    const addLiveRegion = () => {
      if (!document.getElementById('aria-live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    // Announce page changes
    const announcePageChange = () => {
      const liveRegion = document.getElementById('aria-live-region');
      if (liveRegion) {
        const pageTitle = document.title;
        liveRegion.textContent = `Page loaded: ${pageTitle}`;
      }
    };

    // Add high contrast mode detection
    const handleHighContrastChange = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    // Add reduced motion detection
    const handleReducedMotionChange = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    // Initialize accessibility features
    addLiveRegion();
    handleHighContrastChange();
    handleReducedMotionChange();
    announcePageChange();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    
    const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    highContrastMedia.addEventListener('change', handleHighContrastChange);
    reducedMotionMedia.addEventListener('change', handleReducedMotionChange);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      highContrastMedia.removeEventListener('change', handleHighContrastChange);
      reducedMotionMedia.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const focusTrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[data-skip-link]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]') as HTMLElement;
        if (modal) {
          const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
          if (closeButton) {
            closeButton.focus();
          }
        }
      }
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Ensure focus is visible
      if (target && target.style) {
        target.style.outline = '2px solid #06b6d4';
        target.style.outlineOffset = '2px';
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Remove focus outline
      if (target && target.style) {
        target.style.outline = '';
        target.style.outlineOffset = '';
      }
    };

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      
      const existingLiveRegion = document.getElementById('live-region');
      if (existingLiveRegion) {
        existingLiveRegion.remove();
      }
    };
  }, []);

  return (
    <div ref={focusTrapRef} className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;

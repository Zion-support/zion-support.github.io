import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key to close modals/overlays
      if (event.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
      }

      // Arrow key navigation for custom components
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusedElement = document.activeElement as HTMLElement;
        if (focusedElement && focusedElement.getAttribute('role') === 'option') {
          event.preventDefault();
          const options = Array.from(document.querySelectorAll('[role="option"]'));
          const currentIndex = options.indexOf(focusedElement);
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, options.length - 1)
            : Math.max(currentIndex - 1, 0);
          (options[nextIndex] as HTMLElement).focus();
        }
      }
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Add focus indicators
      target.classList.add('focus-visible');
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    // Add ARIA live region for announcements
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

    addLiveRegion();
    announcePageChange();

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to main content
      </a>
      
      {/* High contrast mode toggle */}
      <button
        onClick={() => {
          document.documentElement.classList.toggle('high-contrast');
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 bg-purple-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-purple-300"
        aria-label="Toggle high contrast mode"
      >
        High Contrast
      </button>

      {children}
    </>
  );
};

export default EnhancedAccessibility;
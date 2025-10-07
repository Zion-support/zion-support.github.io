import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation improvements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.closest('[data-focus-trap]')) {
        // Ensure focus stays within focus trap
        const focusableElements = target.closest('[data-focus-trap]')?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (event.target === lastElement && (event as any).shiftKey) {
            firstElement.focus();
            event.preventDefault();
          } else if (event.target === firstElement && !(event as any).shiftKey) {
            lastElement.focus();
            event.preventDefault();
          }
        }
      }
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
    const announcePageChange = (message: string) => {
      const liveRegion = document.getElementById('aria-live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Add high contrast mode detection
    const checkHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
      }
    };

    // Add reduced motion detection
    const checkReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
      }
    };

    // Initialize accessibility features
    addLiveRegion();
    checkHighContrast();
    checkReducedMotion();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    // Monitor for dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Announce new content
          announcePageChange('New content has been loaded');
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        data-skip-to-main
      >
        Skip to main content
      </a>
      
      {children}
    </>
  );
};

export default AccessibilityEnhancer;
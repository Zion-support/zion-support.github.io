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

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Arrow key navigation for custom components
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, focusableElements.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          event.preventDefault();
        }
      }
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    // Add ARIA live region for screen readers
    const addLiveRegion = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    // Announce page changes to screen readers
    const announcePageChange = () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `Page loaded: ${document.title}`;
      }
    };

    addLiveRegion();
    announcePageChange();

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
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
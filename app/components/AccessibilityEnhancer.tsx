import React, { useEffect, useRef, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return;

    // Focus management
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || 
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement) {
        return;
      }

      // Handle keyboard navigation
      if (event.key === 'Tab') {
        // Ensure focus is visible
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      // Remove keyboard navigation class when using mouse
      document.body.classList.remove('keyboard-navigation');
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Set up focus trap for modals
    const setupFocusTrap = () => {
      const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          const handleTabKey = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
              if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                  lastElement.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === lastElement) {
                  firstElement.focus();
                  e.preventDefault();
                }
              }
            }
          };

          modal.addEventListener('keydown', handleTabKey);
        }
      });
    };

    // Run focus trap setup
    setupFocusTrap();

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = () => {
      const pageTitle = document.title;
      const liveRegionElement = document.getElementById('live-region');
      if (liveRegionElement) {
        liveRegionElement.textContent = `Navigated to ${pageTitle}`;
      }
    };

    // Listen for route changes (if using React Router)
    const observer = new MutationObserver(() => {
      announcePageChange();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      observer.disconnect();
      
      const liveRegionElement = document.getElementById('live-region');
      if (liveRegionElement) {
        liveRegionElement.remove();
      }
    };
  }, []);

  // Add accessibility attributes to the container
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('role', 'main');
      containerRef.current.setAttribute('aria-label', 'Main content');
    }
  }, []);

  return (
    <div ref={containerRef} className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
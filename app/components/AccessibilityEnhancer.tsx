import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links for keyboard users
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLinks = document.querySelectorAll('.skip-link');
        skipLinks.forEach(link => {
          (link as HTMLElement).style.display = 'block';
        });
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label="Close"], [data-dismiss="modal"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        });
      }

      // Arrow key navigation for menus
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const activeElement = document.activeElement;
        if (activeElement?.getAttribute('role') === 'menuitem') {
          event.preventDefault();
          const menuItems = Array.from(
            activeElement.closest('[role="menu"]')?.querySelectorAll('[role="menuitem"]') || []
          );
          const currentIndex = menuItems.indexOf(activeElement);
          let nextIndex;

          if (event.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % menuItems.length;
          } else {
            nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
          }

          (menuItems[nextIndex] as HTMLElement)?.focus();
        }
      }
    };

    // Focus management
    const manageFocus = () => {
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (event: KeyboardEvent) => {
          if (event.key === 'Tab') {
            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        };

        document.addEventListener('keydown', handleTabKey);

        return () => {
          document.removeEventListener('keydown', handleTabKey);
        };
      }
    };

    // Focus trap for modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;

      const firstFocusableElement = focusableElements[0] as HTMLElement;
      const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              event.preventDefault();
              lastFocusableElement.focus();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              event.preventDefault();
              firstFocusableElement.focus();
            }
          }
        }
      };

      element.addEventListener('keydown', handleTabKey);
      firstFocusableElement?.focus();

      return () => {
        element.removeEventListener('keydown', handleTabKey);
      };
    };

    // Apply focus trap to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
    const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        const text = button.textContent?.trim();
        if (text && text.length > 0) {
          button.setAttribute('aria-label', text);
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        const text = link.textContent?.trim();
        if (text && text.length > 0) {
          link.setAttribute('aria-label', text);
        }
      });
    };

    // High contrast mode detection
    const handleHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    // Initialize accessibility features
    addAriaLabels();
    handleHighContrast();
    handleReducedMotion();
    manageFocus();

    // Set up event listeners
    document.addEventListener('keydown', handleKeyDown);
    
    const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    highContrastMedia.addEventListener('change', handleHighContrast);
    reducedMotionMedia.addEventListener('change', handleReducedMotion);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      highContrastMedia.removeEventListener('change', handleHighContrast);
      reducedMotionMedia.removeEventListener('change', handleReducedMotion);
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  // Screen reader announcements
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

  // Expose announcement function globally for use by other components
  useEffect(() => {
    (window as any).announceToScreenReader = announceToScreenReader;
    
    return () => {
      delete (window as any).announceToScreenReader;
    };
  }, []);

  return (
    <div ref={containerRef} className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;

import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Enable keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip if user is typing in an input
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
          return;
        }

        switch (event.key) {
          case 'Tab':
            // Ensure proper tab order
            const focusableElements = container.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement?.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement?.focus();
            }
            break;
          case 'Enter':
          case ' ':
            // Handle Enter and Space for buttons and links
            if (event.target instanceof HTMLElement) {
              if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
                event.preventDefault();
                event.target.click();
              }
            }
            break;
          case 'Escape':
            // Close any open modals or dropdowns
            const modals = container.querySelectorAll('[role="dialog"], [role="menu"]');
            modals.forEach(modal => {
              if (modal instanceof HTMLElement && modal.style.display !== 'none') {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
              }
            });
            break;
        }
      };

      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (!enableScreenReader) return;

    // Add screen reader announcements
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

    // Announce page changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes);
          addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const heading = node.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`New section: ${heading.textContent}`);
              }
            }
          });
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true
      });
    }

    return () => observer.disconnect();
  }, [enableScreenReader]);

  useEffect(() => {
    if (!enableHighContrast) return;

    // Apply high contrast mode
    const applyHighContrast = () => {
      if (containerRef.current) {
        containerRef.current.classList.add('high-contrast');
      }
    };

    applyHighContrast();
  }, [enableHighContrast]);

  return (
    <div 
      ref={containerRef}
      className={`accessibility-enhanced ${enableHighContrast ? 'high-contrast' : ''}`}
      role="main"
      aria-label="Main content"
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
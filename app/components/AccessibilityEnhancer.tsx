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
    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!enableKeyboardNavigation) return;

      // Skip links for keyboard users
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLinks = document.querySelectorAll('.skip-link');
        skipLinks.forEach(link => {
          (link as HTMLElement).style.display = 'block';
        });
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          let nextIndex = currentIndex;
          switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
              nextIndex = (currentIndex + 1) % focusableElements.length;
              break;
            case 'ArrowUp':
            case 'ArrowLeft':
              nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
              break;
          }
          (focusableElements[nextIndex] as HTMLElement).focus();
          event.preventDefault();
        }
      }
    };

    // Screen reader announcements
    const announceToScreenReader = (message: string) => {
      if (!enableScreenReader) return;
      
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

    // High contrast mode
    const applyHighContrast = () => {
      if (!enableHighContrast) return;
      
      document.documentElement.classList.add('high-contrast');
      
      // Add high contrast styles
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        .high-contrast * {
          border-color: currentColor !important;
        }
        .high-contrast button,
        .high-contrast [role="button"] {
          border: 2px solid currentColor !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Focus management
    const manageFocus = () => {
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements && focusableElements.length > 0) {
        // Ensure first element is focusable
        const firstElement = focusableElements[0] as HTMLElement;
        if (firstElement.tabIndex === -1) {
          firstElement.tabIndex = 0;
        }
      }
    };

    // Initialize accessibility features
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown);
    }

    if (enableHighContrast) {
      applyHighContrast();
    }

    if (enableScreenReader) {
      // Announce page load
      announceToScreenReader('Page loaded successfully');
    }

    // Manage focus on mount
    manageFocus();

    // Cleanup
    return () => {
      if (enableKeyboardNavigation) {
        document.removeEventListener('keydown', handleKeyDown);
      }
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast]);

  // Add ARIA attributes to container
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('role', 'main');
      containerRef.current.setAttribute('aria-label', 'Main content');
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="accessibility-enhanced"
      style={{
        // Ensure proper focus indicators
        '--focus-ring': '2px solid #3b82f6',
        '--focus-ring-offset': '2px'
      } as React.CSSProperties}
    >
      {children}
      
      {/* Skip links for keyboard navigation */}
      {enableKeyboardNavigation && (
        <div className="skip-links">
          <a 
            href="#main-content" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to main content
          </a>
          <a 
            href="#navigation" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to navigation
          </a>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;
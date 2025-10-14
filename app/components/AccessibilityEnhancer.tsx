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
    // Skip if not in browser
    if (typeof window === 'undefined') return;

    // Add high contrast mode if enabled
    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Add screen reader optimizations
    if (enableScreenReader) {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      // Add navigation landmarks
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      // Add footer landmarks
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content with Enter key
        if (event.key === 'Enter' && event.target === document.querySelector('.sr-only')) {
          const main = document.querySelector('#main-content');
          if (main) {
            (main as HTMLElement).focus();
            (main as HTMLElement).scrollIntoView();
          }
        }

        // Focus management for modals and dropdowns
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
            activeElement.click();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast]);

  // Add focus management for the container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && container.contains(target)) {
        // Add focus indicator
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && container.contains(target)) {
        // Remove focus indicator
        target.classList.remove('focus-visible');
      }
    };

    container.addEventListener('focusin', handleFocusIn);
    container.addEventListener('focusout', handleFocusOut);

    return () => {
      container.removeEventListener('focusin', handleFocusIn);
      container.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="accessibility-enhanced"
      role="application"
      aria-label="Enhanced accessibility features enabled"
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
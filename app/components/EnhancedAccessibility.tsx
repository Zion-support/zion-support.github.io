import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const liveRegionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }

      // Arrow keys for menu navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const menu = document.querySelector('[role="menu"]');
        if (menu && document.activeElement?.closest('[role="menu"]')) {
          event.preventDefault();
          const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
          const currentIndex = menuItems.indexOf(document.activeElement as Element);
          let nextIndex;
          
          if (event.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % menuItems.length;
          } else {
            nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
          }
          
          (menuItems[nextIndex] as HTMLElement).focus();
        }
      }
    };

    // Add focus management with better accessibility
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.scrollIntoView) {
        // Only scroll if the element is not fully visible
        const rect = target.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        
        if (!isVisible) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    // Add focus trap for modals
    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal && modal.contains(document.activeElement)) {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('keydown', handleFocusTrap);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('keydown', handleFocusTrap);
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
          const isHighContrast = document.documentElement.classList.contains('high-contrast');
          if (liveRegionRef.current) {
            liveRegionRef.current.textContent = isHighContrast 
              ? 'High contrast mode enabled' 
              : 'High contrast mode disabled';
          }
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 bg-purple-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-purple-300"
        aria-label="Toggle high contrast mode"
      >
        High Contrast
      </button>

      {/* Font size controls */}
      <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-4 focus-within:right-20 bg-gray-800 text-white px-4 py-2 rounded-lg z-50">
        <label htmlFor="font-size-control" className="block text-sm mb-2">
          Font Size:
        </label>
        <input
          id="font-size-control"
          type="range"
          min="0.8"
          max="1.5"
          step="0.1"
          defaultValue="1"
          onChange={(e) => {
            const scale = parseFloat(e.target.value);
            document.documentElement.style.fontSize = `${scale}rem`;
            if (liveRegionRef.current) {
              liveRegionRef.current.textContent = `Font size set to ${Math.round(scale * 100)}%`;
            }
          }}
          className="w-20"
          aria-label="Adjust font size"
        />
      </div>

      {/* Live region for announcements */}
      <div
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {children}
    </>
  );
};

export default EnhancedAccessibility;
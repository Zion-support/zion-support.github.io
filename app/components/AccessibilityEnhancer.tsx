import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableScreenReaderSupport = true,
  enableKeyboardNavigation = true,
  enableHighContrast = false,
  enableReducedMotion = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Add keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        const { key, target } = event;
        const focusableElements = containerRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;

        if (!focusableElements) return;

        const focusableArray = Array.from(focusableElements);
        const currentIndex = focusableArray.indexOf(target as HTMLElement);

        switch (key) {
          case 'Tab':
            // Let browser handle default tab behavior
            break;
          case 'ArrowDown':
          case 'ArrowUp':
            event.preventDefault();
            const nextIndex = key === 'ArrowDown' 
              ? (currentIndex + 1) % focusableArray.length
              : (currentIndex - 1 + focusableArray.length) % focusableArray.length;
            focusableArray[nextIndex]?.focus();
            break;
          case 'Home':
            event.preventDefault();
            focusableArray[0]?.focus();
            break;
          case 'End':
            event.preventDefault();
            focusableArray[focusableArray.length - 1]?.focus();
            break;
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
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
    const handleRouteChange = () => {
      const pageTitle = document.title;
      announceToScreenReader(`Page loaded: ${pageTitle}`);
    };

    // Listen for route changes (this would need to be integrated with your router)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [enableScreenReader]);

  useEffect(() => {
    if (!enableHighContrast) return;

    // Apply high contrast mode
    const applyHighContrast = () => {
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#e5e7eb');
      document.documentElement.style.setProperty('--bg-primary', '#000000');
      document.documentElement.style.setProperty('--bg-secondary', '#1f2937');
      document.documentElement.style.setProperty('--border-color', '#ffffff');
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

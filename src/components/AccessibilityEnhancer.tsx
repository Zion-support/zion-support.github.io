import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  // Focus management
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[data-skip-link]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Announce page changes to screen readers
  useEffect(() => {
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has loaded';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    announcePageChange();
  }, []);

  // High contrast mode detection
  useEffect(() => {
    const checkHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      }
    };

    checkHighContrast();
    
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);
    
    return () => mediaQuery.removeEventListener('change', checkHighContrast);
  }, []);

  // Reduced motion detection
  useEffect(() => {
    const checkReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion');
      }
    };

    checkReducedMotion();
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);
    
    return () => mediaQuery.removeEventListener('change', checkReducedMotion);
  }, []);

  // Focus visible enhancement
  useEffect(() => {
    const enhanceFocusVisible = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible-enhanced:focus-visible {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
          box-shadow: 0 0 0 4px rgba(0, 255, 255, 0.2);
        }
        
        .high-contrast .focus-visible-enhanced:focus-visible {
          outline: 3px solid #ffffff;
          outline-offset: 3px;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    };

    enhanceFocusVisible();
  }, []);

  // ARIA live region for dynamic content
  useEffect(() => {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'aria-live-region';
    document.body.appendChild(liveRegion);

    return () => {
      if (document.getElementById('aria-live-region')) {
        document.body.removeChild(liveRegion);
      }
    };
  }, []);

  // Announce function for dynamic content
  const announce = useCallback((message: string) => {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, []);

  // Expose announce function globally for use in other components
  useEffect(() => {
    (window as any).announceToScreenReader = announce;
    return () => {
      delete (window as any).announceToScreenReader;
    };
  }, [announce]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
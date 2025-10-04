import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableFocusManagement = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableReducedMotion = true
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [prefersHighContrast, setPrefersHighContrast] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (enableReducedMotion && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableReducedMotion]);

  useEffect(() => {
    // Check for high contrast preference
    if (enableHighContrast && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setPrefersHighContrast(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersHighContrast(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      // Add keyboard navigation enhancements
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.ctrlKey && event.shiftKey) {
          event.preventDefault();
          const mainContent = document.getElementById('main-content');
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
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Add visible focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        .focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* High contrast mode */
        ${prefersHighContrast ? `
          *:focus-visible {
            outline: 3px solid #ffffff;
            outline-offset: 2px;
            background-color: #000000;
            color: #ffffff;
          }
        ` : ''}
        
        /* Reduced motion */
        ${prefersReducedMotion ? `
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        ` : ''}
      `;
      
      document.head.appendChild(style);
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, [enableFocusManagement, prefersHighContrast, prefersReducedMotion]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader announcements
      const createLiveRegion = () => {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
        return liveRegion;
      };

      if (!document.getElementById('live-region')) {
        createLiveRegion();
      }

      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableScreenReaderSupport]);

  return null;
};

export default AccessibilityEnhancer;
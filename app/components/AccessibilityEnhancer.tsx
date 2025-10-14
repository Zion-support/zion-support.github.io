'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
<<<<<<< HEAD
    const root = document.documentElement;
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1'
    );
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Add ARIA landmarks
  useEffect(() => {
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };
    addAriaLandmarks();
  }, []);

  // Add alt text to images without alt attributes
  useEffect(() => {
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`);
        }
      });
    };
    addAltText();
  }, []);

  return (
    <>
      <div className="accessibility-controls fixedbottom-4left-4z-50bg-slate-800p-4rounded-lgshadow-lg"></div>
      <h3 className="text-white font-semiboldmb-3">Accessibility</h3>
      <div className="space-y-3"></div>
        <label className="flex items-centerspace-x-2text-whitetext-sm">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={(e) => setIsHighContrast(e.target.checked)}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        <label className="flex items-centerspace-x-2text-whitetext-sm">
          <input
            type="checkbox"
            checked={isReducedMotion}
            onChange={(e) => setIsReducedMotion(e.target.checked)}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>
        <div className="space-y-1"></div>
          <label className="text-white text-sm">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as 'small' | 'normal' | 'large' | 'extra-large')}
            className="w-full bg-slate-700text-whiteroundedpx-2py-1text-sm">
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
      </div>
    </div>
  );
=======
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Close dropdowns with Escape key
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (container: HTMLElement) => {
        const focusableContent = container.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key !== 'Tab') return;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        };

        container.addEventListener('keydown', handleTabKey);
        firstFocusableElement?.focus();

        return () => container.removeEventListener('keydown', handleTabKey);
      };

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add live region for dynamic content updates
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announcePageChange = (message: string) => {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = message;
        }
      };

      // Listen for route changes (if using React Router)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        announcePageChange('Page changed');
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        announcePageChange('Page updated');
      };

      return () => {
        document.body.removeChild(liveRegion);
        history.pushState = originalPushState;
        history.replaceState = originalReplaceState;
      };
    }

    // High contrast mode support
    if (enableHighContrast && typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const updateHighContrast = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      prefersHighContrast.addEventListener('change', updateHighContrast);
      updateHighContrast(prefersHighContrast);

      return () => prefersHighContrast.removeEventListener('change', updateHighContrast);
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  return null;
>>>>>>> 7c403644bad909cfd6e23ad3-7c-5-2c-4b-8-18-93-39-5b
};

export default AccessibilityEnhancer;
'use client';
import React, { useEffect, useCallback } from 'react';

interface EnhancedAccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableReducedMotion?: boolean;
  enableSkipLinks?: boolean;
  enableColorContrast?: boolean;
  enableFontScaling?: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true,
  enableReducedMotion = true,
  enableSkipLinks = true,
  enableColorContrast = true,
  enableFontScaling = true,
}) => {
  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    if (typeof window === 'undefined' || !enableKeyboardNavigation) return;

    // Add keyboard event listeners
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Close modals with Escape
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        });
      }

      // Navigate dropdowns with arrow keys
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const dropdown = event.target as HTMLElement;
        if (dropdown.getAttribute('aria-expanded') === 'true') {
          event.preventDefault();
          const items = dropdown.querySelectorAll('[role="menuitem"]');
          const currentIndex = Array.from(items).indexOf(document.activeElement as Element);
          
          if (event.key === 'ArrowDown') {
            const nextIndex = (currentIndex + 1) % items.length;
            (items[nextIndex] as HTMLElement).focus();
          } else {
            const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            (items[prevIndex] as HTMLElement).focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader enhancements
  const enhanceScreenReader = useCallback(() => {
    if (typeof window === 'undefined' || !enableScreenReader) return;

    // Add live region for dynamic content
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

    // Add to window for global access
    (window as unknown).announcePageChange = announcePageChange;

    // Add ARIA landmarks
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

    // Add heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
    });

  }, [enableScreenReader]);

  // High contrast mode
  const enhanceHighContrast = useCallback(() => {
    if (typeof window === 'undefined' || !enableHighContrast) return;

    // Detect system high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', handleContrastChange);
    
    // Initial check
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
    }

    return () => prefersHighContrast.removeEventListener('change', handleContrastChange);
  }, [enableHighContrast]);

  // Focus management
  const enhanceFocusManagement = useCallback(() => {
    if (typeof window === 'undefined' || !enableFocusManagement) return;

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible:focus:not(:focus-visible) {
        outline: none !important;
      }
    `;
    document.head.appendChild(style);

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
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

      element.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => element.removeEventListener('keydown', handleTabKey);
    };

    // Add to window for global access
    (window as unknown).trapFocus = trapFocus;
  }, [enableFocusManagement]);

  // ARIA labels enhancement
  const enhanceAriaLabels = useCallback(() => {
    if (typeof window === 'undefined' || !enableAriaLabels) return;

    // Add missing ARIA labels
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      }
    });

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      img.setAttribute('alt', '');
      img.setAttribute('aria-hidden', 'true');
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
        if (!label.id) {
          label.id = `label-${input.id}`;
        }
      }
    });

    // Add ARIA expanded to dropdowns
    const dropdowns = document.querySelectorAll('[data-dropdown]');
    dropdowns.forEach((dropdown) => {
      dropdown.setAttribute('aria-expanded', 'false');
      dropdown.setAttribute('aria-haspopup', 'true');
    });
  }, [enableAriaLabels]);

  // Reduced motion support
  const enhanceReducedMotion = useCallback(() => {
    if (typeof window === 'undefined' || !enableReducedMotion) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduce-motion');
      } else {
        document.body.classList.remove('reduce-motion');
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    
    // Initial check
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduce-motion');
    }

    return () => prefersReducedMotion.removeEventListener('change', handleMotionChange);
  }, [enableReducedMotion]);

  // Skip links
  const addSkipLinks = useCallback(() => {
    if (typeof window === 'undefined' || !enableSkipLinks) return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
    `;

    skipLinks.forEach(({ href, text }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.className = 'skip-link';
      link.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      link.addEventListener('focus', () => {
        link.style.top = '6px';
      });
      
      link.addEventListener('blur', () => {
        link.style.top = '-40px';
      });
      
      skipLinksContainer.appendChild(link);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }, [enableSkipLinks]);

  // Color contrast enhancement
  const enhanceColorContrast = useCallback(() => {
    if (typeof window === 'undefined' || !enableColorContrast) return;

    // Add CSS for better contrast
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --text-primary: #ffffff;
        --text-secondary: #e5e7eb;
        --bg-primary: #000000;
        --bg-secondary: #1f2937;
        --accent: #60a5fa;
      }
      
      .high-contrast * {
        color: var(--text-primary) !important;
        background-color: var(--bg-primary) !important;
      }
      
      .high-contrast a {
        color: var(--accent) !important;
        text-decoration: underline !important;
      }
      
      .high-contrast button {
        border: 2px solid var(--accent) !important;
        background-color: var(--bg-secondary) !important;
      }
    `;
    document.head.appendChild(style);
  }, [enableColorContrast]);

  // Font scaling support
  const enhanceFontScaling = useCallback(() => {
    if (typeof window === 'undefined' || !enableFontScaling) return;

    // Add CSS for font scaling
    const style = document.createElement('style');
    style.textContent = `
      html {
        font-size: 16px;
      }
      
      @media (prefers-font-size: large) {
        html {
          font-size: 18px;
        }
      }
      
      @media (prefers-font-size: x-large) {
        html {
          font-size: 20px;
        }
      }
      
      .font-scale-large {
        font-size: 1.125rem;
      }
      
      .font-scale-x-large {
        font-size: 1.25rem;
      }
    `;
    document.head.appendChild(style);
  }, [enableFontScaling]);

  useEffect(() => {
    const cleanupFunctions = [
      enhanceKeyboardNavigation(),
      enhanceScreenReader(),
      enhanceHighContrast(),
      enhanceFocusManagement(),
      enhanceAriaLabels(),
      enhanceReducedMotion(),
      addSkipLinks(),
      enhanceColorContrast(),
      enhanceFontScaling(),
    ].filter(Boolean);

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
    };
  }, [
    enhanceKeyboardNavigation,
    enhanceScreenReader,
    enhanceHighContrast,
    enhanceFocusManagement,
    enhanceAriaLabels,
    enhanceReducedMotion,
    addSkipLinks,
    enhanceColorContrast,
    enhanceFontScaling,
  ]);

  return null;
};

export default EnhancedAccessibilityEnhancer;
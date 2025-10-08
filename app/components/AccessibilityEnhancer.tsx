import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };
    
    setIsHighContrast(highContrastQuery.matches);
    highContrastQuery.addEventListener('change', handleContrastChange);

// Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);
      // Add ARIA labels to links
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link, index) => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });

      // Add role attributes to sections
      const sections = document.querySelectorAll('section:not([role])');
      sections.forEach(section => {
        section.setAttribute('role', 'region');
      });

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
      });

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);

    };
    
    setIsHighContrast(highContrastQuery.matches);
    highContrastQuery.addEventListener('change', handleContrastChange);

    // Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);

      highContrastQuery.removeEventListener('change', handleContrastChange);    };

    // Enhance screen reader support
    const enhanceScreenReaderSupport = () => {
      // Add live regions for dynamic content
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

    // Enhanced keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
          (main as HTMLElement).scrollIntoView({ behavior: 'smooth' });        }
      };

      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          (nav as HTMLElement).focus();
          (nav as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        }

      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Enhanced keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    // Skip to main content with Alt + M
    if (e.altKey && e.key === 'm') {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        (main as HTMLElement).focus();
        (main as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }

// Close modals/dropdowns with Escape
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
        modals.forEach((modal) => {
          const closeButton = modal.querySelector('[aria-label*="close" i], [aria-label*="dismiss" i]');
          if (closeButton) {
            (closeButton as HTMLElement).click();          }
        });
      };

    // Close modals/dropdowns with Escape
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
      modals.forEach((modal) => {
        const closeButton = modal.querySelector('[aria-label*="close" i], [aria-label*="dismiss" i]');
        if (closeButton) {
          (closeButton as HTMLElement).click();
        }
      });
    }
  };

// Remove keyboard navigation class on mouse use
  const handleMouseDown = () => {
    document.body.classList.remove('keyboard-navigation');
  };

  useEffect(() => {
    if (!enableKeyboardNav) return;

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNav]);

// High contrast mode detection
    const handleHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      }
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion');
      }
    };

    // Keyboard navigation enhancement
    const enhanceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          if (openModal) {
            const closeButton = openModal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }

        // Arrow keys for menu navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const menu = document.querySelector('[role="menu"]');
          if (menu && menu.contains(document.activeElement)) {
            e.preventDefault();
            const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
            const currentIndex = items.indexOf(document.activeElement as Element);
            let nextIndex;

            if (e.key === 'ArrowDown') {
              nextIndex = (currentIndex + 1) % items.length;
            } else {
              nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            }

            (items[nextIndex] as HTMLElement).focus();
          }
        }
      });
    };

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

    // Initialize accessibility features
    addSkipLinks();
    manageFocus();
    handleHighContrast();
    handleReducedMotion();
    enhanceKeyboardNavigation();

    // Listen for preference changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    highContrastQuery.addEventListener('change', handleHighContrast);
    reducedMotionQuery.addEventListener('change', handleReducedMotion);

    // Cleanup
    return () => {
document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [handleFocusIn, handleFocusOut, enableFocusIndicators]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
}, 1000);  }, []);

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

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          const id = `heading-${index}`;
          heading.setAttribute('id', id);
        }
      });
    };

    addAriaLandmarks();
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

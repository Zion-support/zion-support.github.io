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

  useEffect(() => {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
<<<<<<< HEAD
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    setIsReducedMotion(mediaQuery.matches);
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
=======
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    setIsReducedMotion(mediaQuery.matches);
>>>>>>> cursor/fix-errors-and-merge-to-main-1f43
    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
<<<<<<< HEAD
<<<<<<< HEAD
    setIsHighContrast(highContrastQuery.matches);
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
=======
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
    };
    
    setIsHighContrast(highContrastQuery.matches);
    highContrastQuery.addEventListener('change', handleContrastChange);

<<<<<<< HEAD
    // Enhance color contrast
    const enhanceColorContrast = () => {
      // Add high contrast mode support
      const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
      
      const applyHighContrast = () => {
        if (highContrastMedia.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
=======
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    setIsHighContrast(highContrastQuery.matches);
    highContrastQuery.addEventListener('change', handleContrastChange);

>>>>>>> cursor/fix-errors-and-merge-to-main-1f43
    // Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
      }
    }

<<<<<<< HEAD
      // Close modals/dropdowns with Escape
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
        modals.forEach((modal) => {
          const closeButton = modal.querySelector('[aria-label*="close" i], [aria-label*="dismiss" i]');
          if (closeButton) {
            (closeButton as HTMLElement).click();          }
        });
      };
=======
=======
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

>>>>>>> cursor/fix-errors-and-merge-to-main-1f43
    // Skip to navigation with Alt + N
    if (e.altKey && e.key === 'n') {
      e.preventDefault();
      const nav = document.querySelector('nav');
      if (nav) {
        (nav as HTMLElement).focus();
        (nav as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1f43

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
  useEffect(() => {
    if (!enableKeyboardNav) return;

>>>>>>> cursor/fix-errors-and-merge-to-main-1f43
    // Remove keyboard navigation class on mouse use
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };
=======
  // Remove keyboard navigation class on mouse use
  const handleMouseDown = () => {
    document.body.classList.remove('keyboard-navigation');
  };

  useEffect(() => {
    if (!enableKeyboardNav) return;
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNav]);

  // Focus management
  const handleFocusIn = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    
    // Add focus ring for keyboard navigation
    if (target.matches('button, a, input, textarea, select, [tabindex]')) {
      target.classList.add('keyboard-focus');
    }
  }, []);

  const handleFocusOut = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    target.classList.remove('keyboard-focus');
  }, []);

  useEffect(() => {
    if (!enableFocusIndicators) return;

    // Add custom focus styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 3px solid #3B82F6 !important;
        outline-offset: 2px !important;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      .sr-only-focusable:focus,
      .sr-only-focusable:active {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }

      /* Skip link styles */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #3B82F6;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 100;
        font-weight: 600;
        border-radius: 0 0 4px 0;
      }

      .skip-link:focus {
        top: 0;
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        * {
          border-width: 2px !important;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* Focus visible polyfill */
      *:focus:not(:focus-visible) {
        outline: none;
      }

      *:focus-visible {
        outline: 3px solid #3B82F6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

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
<<<<<<< HEAD
    }, 1000);  }, []);
=======
    }, 1000);
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0

  return <>{children}</>;
};

export default AccessibilityEnhancer;

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
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    highContrastQuery.addEventListener('change', handleContrastChange);

    // Add skip links
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

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

      applyHighContrast();
      highContrastMedia.addEventListener('change', applyHighContrast);
    };

    // Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);

    // Enhance screen reader support
    const enhanceScreenReaderSupport = () => {
      // Add live regions for dynamic content
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    // Focus trap utility
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
    };

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

      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          (nav as HTMLElement).focus();
          (nav as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        }
      }

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

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    };

    // Remove keyboard navigation class on mouse use
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    if (enableKeyboardNav) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    }

    enhanceColorContrast();
    enhanceScreenReaderSupport();
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
      if (enableKeyboardNav) {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [enableSkipLinks, enableKeyboardNav]);

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
        border: 0;
      }

      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }

      .skip-link:focus {
        top: 6px;
      }

      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }

      .keyboard-focus {
        outline: 3px solid #3B82F6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);

    // Add focus event listeners
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.head.removeChild(style);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusIndicators, handleFocusIn, handleFocusOut]);

  return (
    <div 
      className={`accessibility-enhancer ${isReducedMotion ? 'reduced-motion' : ''} ${isHighContrast ? 'high-contrast' : ''}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
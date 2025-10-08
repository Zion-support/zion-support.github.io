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
  const [, setIsReducedMotion] = useState(false);
  const [, setIsHighContrast] = useState(false);
  const [, setFontSize] = useState(16);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
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
  };

  // Add skip links
  const addSkipLinks = useCallback(() => {
    if (!enableSkipLinks) return;

    // Remove existing skip links
    const existingSkipLinks = document.querySelectorAll('.skip-link');
    existingSkipLinks.forEach(link => link.remove());

    // Add skip to main content
    const skipToMain = document.createElement('a');
    skipToMain.href = '#main-content';
    skipToMain.textContent = 'Skip to main content';
    skipToMain.className = 'skip-link';
    skipToMain.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 4px;
    `;
    skipToMain.addEventListener('focus', () => {
      skipToMain.style.top = '6px';
    });
    skipToMain.addEventListener('blur', () => {
      skipToMain.style.top = '-40px';
    });
    document.body.insertBefore(skipToMain, document.body.firstChild);

    // Add skip to navigation
    const skipToNav = document.createElement('a');
    skipToNav.href = '#navigation';
    skipToNav.textContent = 'Skip to navigation';
    skipToNav.className = 'skip-link';
    skipToNav.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 4px;
    `;
    skipToNav.addEventListener('focus', () => {
      skipToNav.style.top = '50px';
    });
    skipToNav.addEventListener('blur', () => {
      skipToNav.style.top = '-40px';
    });
    document.body.insertBefore(skipToNav, document.body.firstChild);
  }, [enableSkipLinks]);

  // Enhance focus indicators
  const enhanceFocusIndicators = useCallback(() => {
    if (!enableFocusIndicators) return;

    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #4F46E5 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible:focus {
        outline: 2px solid #4F46E5 !important;
        outline-offset: 2px !important;
      }
      
      button:focus,
      a:focus,
      input:focus,
      textarea:focus,
      select:focus {
        outline: 2px solid #4F46E5 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }, [enableFocusIndicators]);

  // Add ARIA enhancements
  const addARIAEnhancements = useCallback(() => {
    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link, index) => {
      if (!link.textContent?.trim()) {
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
  }, []);

  // Initialize accessibility enhancements
  useEffect(() => {
    addSkipLinks();
    enhanceFocusIndicators();
    addARIAEnhancements();

    if (enableKeyboardNav) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (enableKeyboardNav) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [addSkipLinks, enhanceFocusIndicators, addARIAEnhancements, enableKeyboardNav]);

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
import React, { useEffect, useCallback } from 'react';

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

  const addSkipLinks = useCallback(() => {
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
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    setIsReducedMotion(mediaQuery.matches);
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

  useEffect(() => {
    // Apply accessibility enhancements
    if (enableSkipLinks) {
      addSkipLinks();
    }

    if (enableKeyboardNav) {
      enhanceKeyboardNavigation();
    }

    if (enableFocusIndicators) {
      enhanceFocusIndicators();
    }

    // Apply motion preferences
    if (isReducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }

    // Apply contrast preferences
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Apply font size preferences
    document.documentElement.style.fontSize = `${fontSize}px`;

    // Add ARIA labels to interactive elements
    enhanceAriaLabels();

    // Add role attributes to semantic elements
    enhanceSemanticRoles();

    // Add heading hierarchy
    enhanceHeadingHierarchy();

    // Add alt text to images
    enhanceImageAccessibility();

    // Add form labels
    enhanceFormAccessibility();

    // Add table accessibility
    enhanceTableAccessibility();

    // Add live regions for dynamic content
    addLiveRegions();

    // Add keyboard shortcuts
    if (enableKeyboardNav) {
      addKeyboardShortcuts();
    }

    // Add screen reader announcements
    addScreenReaderSupport();

  }, [enableSkipLinks, enableKeyboardNav, enableFocusIndicators, isReducedMotion, isHighContrast, fontSize]);

  const addSkipLinks = useCallback(() => {
    // Remove existing skip links
    const existingSkipLinks = document.querySelectorAll('.skip-link');
    existingSkipLinks.forEach(link => link.remove());

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
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
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, []);

  const enhanceKeyboardNavigation = useCallback(() => {
    // Add keyboard navigation to custom elements
    const interactiveElements = document.querySelectorAll('[data-interactive]');
    interactiveElements.forEach(element => {
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
    });

    // Add keyboard event listeners
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }, []);

  const enhanceFocusIndicators = useCallback(() => {
    // Add focus indicators to all focusable elements
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  }, []);

  const enhanceAriaLabels = useCallback(() => {
    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link, index) => {
      if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
        link.setAttribute('aria-label', `Link ${index + 1}`);
      }
    });

    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });
  }, []);

  const enhanceSemanticRoles = useCallback(() => {
    // Add role attributes to sections
    const sections = document.querySelectorAll('section:not([role])');
    sections.forEach(section => {
      section.setAttribute('role', 'region');
    });

    // Add role attributes to navigation
    const navs = document.querySelectorAll('nav:not([role])');
    navs.forEach(nav => {
      nav.setAttribute('role', 'navigation');
    });

    // Add role attributes to main content
    const main = document.querySelector('main');
    if (main && !main.hasAttribute('role')) {
      main.setAttribute('role', 'main');
    }
  }, []);

  const enhanceHeadingHierarchy = useCallback(() => {
    // Add heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
    });
  }, []);

  const enhanceImageAccessibility = useCallback(() => {
    // Add alt text to images without alt attributes
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      img.setAttribute('alt', `Image ${index + 1}`);
    });

    // Add role to decorative images
    const decorativeImages = document.querySelectorAll('img[alt=""]');
    decorativeImages.forEach(img => {
      img.setAttribute('role', 'presentation');
    });
  }, []);

  const enhanceFormAccessibility = useCallback(() => {
    // Add labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input, index) => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.createElement('label');
        label.setAttribute('for', input.id || `input-${index}`);
        label.textContent = `Input ${index + 1}`;
        input.setAttribute('id', input.id || `input-${index}`);
        input.parentNode?.insertBefore(label, input);
      }
    });
  }, []);

  const enhanceTableAccessibility = useCallback(() => {
    // Add table accessibility
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      if (!table.getAttribute('role')) {
        table.setAttribute('role', 'table');
      }

      // Add caption if missing
      if (!table.querySelector('caption')) {
        const caption = document.createElement('caption');
        caption.textContent = 'Data table';
        table.insertBefore(caption, table.firstChild);
      }

      // Add headers
      const headers = table.querySelectorAll('th');
      headers.forEach(header => {
        if (!header.getAttribute('scope')) {
          header.setAttribute('scope', 'col');
        }
      });
    });
  }, []);

  const addLiveRegions = useCallback(() => {
    // Add live regions for dynamic content
    if (!document.getElementById('live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      document.body.appendChild(liveRegion);
    }
  }, []);

  const addKeyboardShortcuts = useCallback(() => {
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Alt + M: Skip to main content
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const main = document.querySelector('main, #main-content');
        if (main) {
          main.focus();
          main.scrollIntoView();
        }
      }

      // Alt + N: Skip to navigation
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
          nav.scrollIntoView();
        }
      }

      // Alt + F: Skip to footer
      if (e.altKey && e.key === 'f') {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          footer.focus();
          footer.scrollIntoView();
        }
      }
    });
  }, []);

  const addScreenReaderSupport = useCallback(() => {
    // Add screen reader announcements
    const announce = (message: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enableKeyboardNav) return;

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
  }, [enableKeyboardNav]);

  // Remove keyboard navigation class on mouse use
  const handleMouseDown = useCallback(() => {
    document.body.classList.remove('keyboard-navigation');
  }, []);

  useEffect(() => {
    if (!enableKeyboardNav) return;

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown, enableKeyboardNav]);

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
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
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

    if (enableKeyboardNav) {
      // Add keyboard navigation enhancements
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableSkipLinks, enableKeyboardNav]);

  useEffect(() => {
    // Apply accessibility styles based on preferences
    const root = document.documentElement;
    
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--animation-iteration-count', '1');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--animation-iteration-count');
    }

    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size scaling
    root.style.setProperty('--base-font-size', `${fontSize}px`);
  }, [isReducedMotion, isHighContrast, fontSize]);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [handleFocusIn, handleFocusOut, enableFocusIndicators]);

  // Screen reader announcements
  // const announceToScreenReader = useCallback((message: string) => {
  //   const announcement = document.createElement('div');
  //   announcement.setAttribute('aria-live', 'polite');
  //   announcement.setAttribute('aria-atomic', 'true');
  //   announcement.className = 'sr-only';
  //   announcement.textContent = message;
  //   
  //   document.body.appendChild(announcement);
  //   
  //   setTimeout(() => {
  //     if (announcement.parentNode) {
  //       announcement.parentNode.removeChild(announcement);
  //     }
  //   }, 1000);
  // }, []);

  // Add skip links
  useEffect(() => {
    if (!enableSkipLinks) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only-focusable';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    }, 1000);
  }, [enableSkipLinks]);

  // Expose utility functions to children via context if needed
  const accessibilityUtils = {
    announceToScreenReader,
    isReducedMotion,
    isHighContrast,
    fontSize,
  };

  return (
    <div 
      className="accessibility-enhanced"
      style={{
        '--reduced-motion': isReducedMotion ? 'reduce' : 'auto',
        '--high-contrast': isHighContrast ? 'high' : 'normal',
      } as React.CSSProperties}
    >
      {children}
      <style>{`
        .accessibility-enhanced {
          --animation-duration: var(--reduced-motion) === 'reduce' ? '0.01ms' : 'normal';
          --animation-iteration-count: var(--reduced-motion) === 'reduce' ? '1' : 'infinite';
        }
        
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .skip-link:focus {
          top: 6px !important;
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
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        @media (prefers-contrast: high) {
          .high-contrast {
            filter: contrast(200%) brightness(150%);
          }
        }
      `}</style>
=======
    // Announce page changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          announce('Page content updated');
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="accessibility-enhanced">
      {children}
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
    </div>
  );
};

export default AccessibilityEnhancer;
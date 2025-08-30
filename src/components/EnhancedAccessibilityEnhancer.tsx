import React, { useEffect, useCallback, useRef, useState } from 'react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  enableARIALabels?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
  enableSkipLinks?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  enableARIALabels = true,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusIndicators = true,
  enableSkipLinks = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const skipLinksRef = useRef<HTMLDivElement>(null);

  // Enhanced ARIA labels and roles
  const enhanceARIALabels = useCallback(() => {
    if (!enableARIALabels) return;

    // Add missing ARIA labels to common elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt]):not([aria-label])');
    images.forEach((img, index) => {
      img.setAttribute('aria-label', `Image ${index + 1}`);
      img.setAttribute('role', 'img');
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input, index) => {
      const placeholder = input.getAttribute('placeholder');
      const type = input.getAttribute('type');
      if (placeholder) {
        input.setAttribute('aria-label', placeholder);
      } else if (type) {
        input.setAttribute('aria-label', `${type.charAt(0).toUpperCase() + type.slice(1)} input ${index + 1}`);
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link, index) => {
      if (!link.textContent?.trim()) {
        link.setAttribute('aria-label', `Link ${index + 1}`);
      }
    });

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, [enableARIALabels]);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    // Get all focusable elements
    const getFocusableElements = () => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
        '[contenteditable="true"]',
      ];
      
      return Array.from(document.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
    };

    focusableElementsRef.current = getFocusableElements();

    // Enhanced tab navigation
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusableElements = getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Arrow key navigation for custom components
    const handleArrowKeys = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isCustomComponent = target.hasAttribute('data-arrow-nav');
      
      if (isCustomComponent) {
        const direction = e.key;
        const currentIndex = focusableElementsRef.current.indexOf(target);
        
        if (direction === 'ArrowDown' || direction === 'ArrowRight') {
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % focusableElementsRef.current.length;
          focusableElementsRef.current[nextIndex].focus();
        } else if (direction === 'ArrowUp' || direction === 'ArrowLeft') {
          e.preventDefault();
          const prevIndex = currentIndex === 0 ? focusableElementsRef.current.length - 1 : currentIndex - 1;
          focusableElementsRef.current[prevIndex].focus();
        }
      }
    };

    // Enter key activation for custom elements
    const handleEnterKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.key === 'Enter' && target.hasAttribute('data-activate-on-enter')) {
        e.preventDefault();
        target.click();
      }
    };

    // Space key activation for custom elements
    const handleSpaceKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.key === ' ' && target.hasAttribute('data-activate-on-space')) {
        e.preventDefault();
        target.click();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleArrowKeys);
    document.addEventListener('keydown', handleEnterKey);
    document.addEventListener('keydown', handleSpaceKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleArrowKeys);
      document.removeEventListener('keydown', handleEnterKey);
      document.removeEventListener('keydown', handleSpaceKey);
    };
  }, [enableKeyboardNavigation]);

  // Screen reader enhancements
  const enhanceScreenReader = useCallback(() => {
    if (!enableScreenReader) return;

    // Add live regions for dynamic content
    const addLiveRegions = () => {
      const liveRegions = [
        { id: 'status-messages', 'aria-live': 'polite' },
        { id: 'error-messages', 'aria-live': 'assertive' },
        { id: 'loading-status', 'aria-live': 'polite' },
      ];

      liveRegions.forEach(region => {
        if (!document.getElementById(region.id)) {
          const div = document.createElement('div');
          div.id = region.id;
          div.setAttribute('aria-live', region['aria-live']);
          div.setAttribute('aria-atomic', 'true');
          div.className = 'sr-only';
          document.body.appendChild(div);
        }
      });
    };

    // Add skip links
    if (enableSkipLinks) {
      const skipLinks = [
        { href: '#main-content', text: 'Skip to main content' },
        { href: '#navigation', text: 'Skip to navigation' },
        { href: '#footer', text: 'Skip to footer' },
      ];

      skipLinks.forEach(link => {
        const skipLink = document.createElement('a');
        skipLink.href = link.href;
        skipLink.textContent = link.text;
        skipLink.className = 'skip-link sr-only focus:not-sr-only';
        skipLink.setAttribute('tabindex', '0');
        
        if (skipLinksRef.current) {
          skipLinksRef.current.appendChild(skipLink);
        }
      });
    }

    addLiveRegions();

    // Announce page changes
    const announcePageChange = (title: string) => {
      const statusRegion = document.getElementById('status-messages');
      if (statusRegion) {
        statusRegion.textContent = `Page loaded: ${title}`;
      }
    };

    // Announce loading states
    const announceLoading = (isLoading: boolean) => {
      const loadingRegion = document.getElementById('loading-status');
      if (loadingRegion) {
        loadingRegion.textContent = isLoading ? 'Loading...' : 'Loading complete';
      }
    };

    // Expose functions globally for use by other components
    (window as any).announcePageChange = announcePageChange;
    (window as any).announceLoading = announceLoading;
  }, [enableScreenReader, enableSkipLinks]);

  // High contrast mode
  const setupHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    // Check for user preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(prefersHighContrast.matches);

    // Listen for changes
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
      document.body.classList.toggle('high-contrast', e.matches);
    };

    prefersHighContrast.addEventListener('change', handleContrastChange);
    document.body.classList.toggle('high-contrast', prefersHighContrast.matches);

    return () => {
      prefersHighContrast.removeEventListener('change', handleContrastChange);
    };
  }, [enableHighContrast]);

  // Focus indicators
  const setupFocusIndicators = useCallback(() => {
    if (!enableFocusIndicators) return;

    // Enhanced focus styles
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 3px solid #007acc !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
      }
      
      .focus-visible:focus {
        outline: 3px solid #007acc !important;
        outline-offset: 2px !important;
      }
      
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);

    // Add focus-visible class to elements
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.add('focus-visible');
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusIndicators]);

  // Font size controls
  const setupFontSizeControls = useCallback(() => {
    // Add font size controls to the page
    const createFontSizeControls = () => {
      const controls = document.createElement('div');
      controls.className = 'font-size-controls';
      controls.setAttribute('role', 'toolbar');
      controls.setAttribute('aria-label', 'Font size controls');
      
      controls.innerHTML = `
        <button type="button" aria-label="Decrease font size" onclick="window.decreaseFontSize()">A-</button>
        <button type="button" aria-label="Reset font size" onclick="window.resetFontSize()">A</button>
        <button type="button" aria-label="Increase font size" onclick="window.increaseFontSize()">A+</button>
      `;
      
      return controls;
    };

    // Add controls to the page if they don't exist
    if (!document.querySelector('.font-size-controls')) {
      const controls = createFontSizeControls();
      document.body.appendChild(controls);
    }

    // Expose font size functions globally
    (window as any).decreaseFontSize = () => {
      setFontSize(prev => Math.max(12, prev - 2));
    };

    (window as any).resetFontSize = () => {
      setFontSize(16);
    };

    (window as any).increaseFontSize = () => {
      setFontSize(prev => Math.min(24, prev + 2));
    };
  }, []);

  // Reduced motion support
  const setupReducedMotion = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(prefersReducedMotion.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      document.body.classList.toggle('reduced-motion', e.matches);
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    document.body.classList.toggle('reduced-motion', prefersReducedMotion.matches);

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Initialize accessibility enhancements
  useEffect(() => {
    if (!enabled) return;

    enhanceARIALabels();
    enhanceKeyboardNavigation();
    enhanceScreenReader();
    setupHighContrast();
    setupFocusIndicators();
    setupFontSizeControls();
    setupReducedMotion();

    // Update font size when it changes
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [
    enabled,
    enhanceARIALabels,
    enhanceKeyboardNavigation,
    enhanceScreenReader,
    setupHighContrast,
    setupFocusIndicators,
    setupFontSizeControls,
    setupReducedMotion,
    fontSize,
  ]);

  // Add skip links container
  if (enableSkipLinks) {
    return (
      <div ref={skipLinksRef} className="skip-links-container" />
    );
  }

  return null;
};
/**
 * Accessibility Enhancement Utilities
 * Tools to improve accessibility and user experience
 */

import { useEffect, useRef } from 'react';

// Check if element is visible to screen readers
export const isVisibleToScreenReader = (element: HTMLElement): boolean => {
  const style = window.getComputedStyle(element);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    element.getAttribute('aria-hidden') !== 'true' &&
    element.offsetWidth > 0 &&
    element.offsetHeight > 0
  );
};

// Add skip navigation link
export const addSkipNavigationLink = () => {
  if (typeof document === 'undefined') return;

  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
  skipLink.setAttribute('tabindex', '1');
  
  document.body.insertBefore(skipLink, document.body.firstChild);
};

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement) => {
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

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

  // Restore focus to previously focused element
  restoreFocus: (element: HTMLElement) => {
    element.focus();
  },
};

// Announce to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  if (typeof document === 'undefined') return;

  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Color contrast checker
export const getColorContrast = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length !== 3) return 0;

    const [r, g, b] = rgb.map((c) => {
      const val = parseInt(c, 10) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};

// Accessibility validation
export const validateAccessibility = () => {
  if (typeof document === 'undefined') return [];

  const issues: string[] = [];

  // Check for missing alt text
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  imagesWithoutAlt.forEach((img) => {
    issues.push(`Image missing alt text: ${img.getAttribute('src')}`);
  });

  // Check for missing labels
  const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  inputsWithoutLabels.forEach((input) => {
    const id = input.getAttribute('id');
    const hasLabel = id && document.querySelector(`label[for="${id}"]`);
    if (!hasLabel) {
      issues.push(`Input missing label: ${input.getAttribute('name') || input.getAttribute('type')}`);
    }
  });

  // Check heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.charAt(1), 10);
    if (level > previousLevel + 1) {
      issues.push(`Heading hierarchy skipped: ${heading.tagName} after h${previousLevel}`);
    }
    previousLevel = level;
  });

  return issues;
};

// Keyboard navigation enhancement
export const addKeyboardNavigation = () => {
  if (typeof document === 'undefined') return;

  // Add keyboard navigation for custom elements
  const customElements = document.querySelectorAll('[data-keyboard-navigation]');
  customElements.forEach((element) => {
    element.setAttribute('tabindex', '0');
    element.addEventListener('keydown', (e: Event) => {
      const keyEvent = e as KeyboardEvent;
      if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
        keyEvent.preventDefault();
        (element as HTMLElement).click();
      }
    });
  });
};

// Accessibility configuration
export interface AccessibilityConfig {
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
  enableSkipLinks: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
  enableFontSizeAdjustment: boolean;
  enableFocusTrapping: boolean;
}

const defaultAccessibilityConfig: AccessibilityConfig = {
  enableScreenReaderSupport: true,
  enableHighContrast: true,
  enableReducedMotion: true,
  enableFocusManagement: true,
  enableSkipLinks: true,
  enableARIALabels: true,
  enableColorContrast: true,
  enableFontSizeAdjustment: true,
  enableFocusTrapping: true,
};

// Accessibility Enhancer class
export class AccessibilityEnhancer {
  private static instance: AccessibilityEnhancer;
  private config: AccessibilityConfig;
  private skipLinks: HTMLElement[] = [];
  private focusableElements: HTMLElement[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = { ...defaultAccessibilityConfig, ...config };
  }

  static getInstance(config?: Partial<AccessibilityConfig>): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer(config);
    }
    return AccessibilityEnhancer.instance;
  }

  // Initialize all accessibility features
  initialize() {
    if (typeof document === 'undefined') return;

    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupReducedMotion();
    this.setupFocusManagement();
    this.setupSkipLinks();
    this.setupARIALabels();
    this.setupColorContrast();
    this.setupFontSizeAdjustment();
    this.setupFocusTrapping();
  }

  // Screen reader support
  private setupScreenReaderSupport() {
    if (!this.config.enableScreenReaderSupport) return;

    // Add screen reader only text
    this.addScreenReaderOnlyText();
    
    // Setup live regions for dynamic content
    this.setupLiveRegions();
  }

  private addScreenReaderOnlyText() {
    const style = document.createElement('style');
    style.textContent = `
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
    `;
    document.head.appendChild(style);
  }

  private setupLiveRegions() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  // High contrast mode
  private setupHighContrast() {
    if (!this.config.enableHighContrast) return;

    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const handleHighContrast = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', handleHighContrast);
    handleHighContrast(prefersHighContrast);
  }

  // Reduced motion
  private setupReducedMotion() {
    if (!this.config.enableReducedMotion) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotion = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    prefersReducedMotion.addEventListener('change', handleReducedMotion);
    handleReducedMotion(prefersReducedMotion);
  }

  // Focus management
  private setupFocusManagement() {
    if (!this.config.enableFocusManagement) return;

    // Update focusable elements
    this.updateFocusableElements();

    // Handle focus changes
    document.addEventListener('focusin', this.handleFocusIn.bind(this));
    document.addEventListener('focusout', this.handleFocusOut.bind(this));
  }

  private updateFocusableElements() {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    this.focusableElements = Array.from(document.querySelectorAll(focusableSelectors)) as HTMLElement[];
  }

  private handleFocusIn(event: FocusEvent) {
    const target = event.target as HTMLElement;
    if (target) {
      target.classList.add('focus-visible');
    }
  }

  private handleFocusOut(event: FocusEvent) {
    const target = event.target as HTMLElement;
    if (target) {
      target.classList.remove('focus-visible');
    }
  }

  // Skip links
  private setupSkipLinks() {
    if (!this.config.enableSkipLinks) return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(({ href, text }) => {
      const skipLink = document.createElement('a');
      skipLink.href = href;
      skipLink.textContent = text;
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
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);
      this.skipLinks.push(skipLink);
    });
  }

  // ARIA labels
  private setupARIALabels() {
    if (!this.config.enableARIALabels) return;

    // Add ARIA labels to interactive elements without labels
    const interactiveElements = document.querySelectorAll('button, input, select, textarea');
    
    interactiveElements.forEach((element) => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent?.trim() || element.getAttribute('placeholder') || 'Interactive element';
        element.setAttribute('aria-label', text);
      }
    });
  }

  // Color contrast
  private setupColorContrast() {
    if (!this.config.enableColorContrast) return;

    // Add CSS for better color contrast
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --text-color: #000000;
        --bg-color: #ffffff;
        --border-color: #000000;
        --focus-color: #0066cc;
      }
      
      .high-contrast * {
        color: var(--text-color) !important;
        background-color: var(--bg-color) !important;
        border-color: var(--border-color) !important;
      }
      
      .high-contrast a:focus,
      .high-contrast button:focus,
      .high-contrast input:focus {
        outline: 2px solid var(--focus-color) !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Font size adjustment
  private setupFontSizeAdjustment() {
    if (!this.config.enableFontSizeAdjustment) return;

    // Add font size controls
    const fontSizeControls = document.createElement('div');
    fontSizeControls.className = 'font-size-controls';
    fontSizeControls.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 1000;
      background: #fff;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 4px;
    `;

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = 'A-';
    decreaseButton.setAttribute('aria-label', 'Decrease font size');
    decreaseButton.addEventListener('click', () => this.adjustFontSize(-2));

    const increaseButton = document.createElement('button');
    increaseButton.textContent = 'A+';
    increaseButton.setAttribute('aria-label', 'Increase font size');
    increaseButton.addEventListener('click', () => this.adjustFontSize(2));

    const resetButton = document.createElement('button');
    resetButton.textContent = 'A';
    resetButton.setAttribute('aria-label', 'Reset font size');
    resetButton.addEventListener('click', () => this.resetFontSize());

    fontSizeControls.appendChild(decreaseButton);
    fontSizeControls.appendChild(increaseButton);
    fontSizeControls.appendChild(resetButton);
    document.body.appendChild(fontSizeControls);
  }

  private adjustFontSize(delta: number) {
    const currentSize = parseInt(getComputedStyle(document.documentElement).fontSize) || 16;
    const newSize = Math.max(12, Math.min(24, currentSize + delta));
    document.documentElement.style.fontSize = `${newSize}px`;
  }

  private resetFontSize() {
    document.documentElement.style.fontSize = '';
  }

  // Focus trapping
  private setupFocusTrapping() {
    if (!this.config.enableFocusTrapping) return;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])') as HTMLElement;
        if (modal) {
          this.trapFocus(event, modal);
        }
      }
    });
  }

  private trapFocus(event: KeyboardEvent, container: HTMLElement) {
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }

  // Announce to screen readers
  announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = message;
    }
  }

  // Cleanup
  cleanup() {
    this.skipLinks.forEach(link => link.remove());
    this.skipLinks = [];
  }
}

// React hook for accessibility
export const useAccessibility = (config?: Partial<AccessibilityConfig>) => {
  const enhancer = useRef<AccessibilityEnhancer | null>(null);

  useEffect(() => {
    enhancer.current = AccessibilityEnhancer.getInstance(config);
    enhancer.current.initialize();

    return () => {
      enhancer.current?.cleanup();
    };
  }, [config]);

  return enhancer.current;
};

// Initialize accessibility enhancements
export const initializeAccessibilityEnhancements = () => {
  if (typeof document === 'undefined') return;

  // Add skip navigation
  addSkipNavigationLink();

  // Add keyboard navigation
  addKeyboardNavigation();

  // Validate accessibility
  const issues = validateAccessibility();
  if (issues.length > 0 && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn('Accessibility issues found:', issues);
  }
};

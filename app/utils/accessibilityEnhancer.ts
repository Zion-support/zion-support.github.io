/**
 * Advanced Accessibility Enhancer
 * Comprehensive accessibility utilities for React applications
 */

import { useEffect, useCallback, useRef, useState } from 'react';

// Accessibility configuration interface
export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
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

// Default accessibility configuration
export const defaultAccessibilityConfig: AccessibilityConfig = {
  enableKeyboardNavigation: true,
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

// Accessibility utilities class
export class AccessibilityEnhancer {
  private static instance: AccessibilityEnhancer;
  private config: AccessibilityConfig;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;
  private skipLinks: HTMLElement[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = { ...defaultAccessibilityConfig, ...config };
  }

  static getInstance(config?: Partial<AccessibilityConfig>): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer(config);
    }
    return AccessibilityEnhancer.instance;
  }

  // Initialize accessibility features
  initialize() {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
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

  // Keyboard navigation setup
  private setupKeyboardNavigation() {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
  }

  private handleKeyboardNavigation(event: KeyboardEvent) {
    const { key, ctrlKey, altKey, metaKey } = event;

    // Skip to main content
    if (key === 'Tab' && !ctrlKey && !altKey && !metaKey) {
      const skipLink = document.querySelector('.skip-link') as HTMLElement;
      if (skipLink && document.activeElement === skipLink) {
        skipLink.style.display = 'none';
      }
    }

    // Escape key handling
    if (key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])') as HTMLElement;
      if (modal) {
        const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
        if (closeButton) {
          closeButton.focus();
          closeButton.click();
        }
      }
    }
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
    
    const handleHighContrast = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', handleHighContrast);
    handleHighContrast({ matches: prefersHighContrast.matches } as MediaQueryListEvent);
  }

  // Reduced motion
  private setupReducedMotion() {
    if (!this.config.enableReducedMotion) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    prefersReducedMotion.addEventListener('change', handleReducedMotion);
    handleReducedMotion({ matches: prefersReducedMotion.matches } as MediaQueryListEvent);
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
      if (enhancer.current) {
        enhancer.current.cleanup();
      }
    };
  }, [config]);

  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (enhancer.current) {
      enhancer.current.announce(message, priority);
    }
  }, []);

  return { announce };
};

// Focus management hook
export const useFocusManagement = () => {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleFocusIn = (event: FocusEvent) => {
      setFocusedElement(event.target as HTMLElement);
    };

    const handleFocusOut = (event: FocusEvent) => {
      if (!event.relatedTarget) {
        setFocusedElement(null);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  const focusElement = useCallback((element: HTMLElement | null) => {
    if (element) {
      element.focus();
      setFocusedElement(element);
    }
  }, []);

  return { focusedElement, focusElement };
};

// Keyboard navigation hook
export const useKeyboardNavigation = (onKeyDown?: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onKeyDown]);
};

export default AccessibilityEnhancer;
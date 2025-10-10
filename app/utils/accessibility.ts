<<<<<<< HEAD
/**
 * Accessibility utilities and helpers
 */
<<<<<<< HEAD

export interface AccessibilityConfig {
  enableAnnouncements?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  announceDelay?: number;
}

export class AccessibilityManager {
  private config: AccessibilityConfig;
  private liveRegion: HTMLElement | null = null;
  private focusHistory: HTMLElement[] = [];

  constructor(config: AccessibilityConfig = {}) {
    this.config = {
      enableAnnouncements: true,
      enableFocusManagement: true,
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      announceDelay: 100,
      ...config
    };
    
    this.initialize();
  }

  private initialize(): void {
    if (this.config.enableAnnouncements && typeof document !== 'undefined') {
      this.createLiveRegion();
    }
  }

  private createLiveRegion(): void {
    this.liveRegion = document.createElement('div');
    this.liveRegion.setAttribute('aria-live', 'polite');
    this.liveRegion.setAttribute('aria-atomic', 'true');
    this.liveRegion.className = 'sr-only';
    this.liveRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(this.liveRegion);
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.liveRegion || !this.config.enableAnnouncements) return;

    this.liveRegion.setAttribute('aria-live', priority);
    this.liveRegion.textContent = message;
    
=======
export interface A11yReport {
  errors: A11yError[]
<<<<<<< HEAD
  warnings: A11yWarning[];
  score: number;
=======
  warnings: A11yWarning[]
  score: number
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
}

export interface A11yError {
  type: string
  element: string
  message: string
<<<<<<< HEAD
  wcag: string;
=======
  wcag: string
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
}

export interface A11yWarning {
  type: string
  element: string
  message: string
<<<<<<< HEAD
  suggestion: string;
=======
  suggestion: string
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
}
class AccessibilityService {
  // Check color contrast ratio
  public checkColorContrast(
    foreground: string,
    background: string
  ): {
    ratio: number
    passes: { normal: boolean; large: boolean }
  } {
    const rgb1 = this.hexToRgb(foreground)
    const rgb2 = this.hexToRgb(background)
    const l1 = this.getLuminance(rgb1)
    const l2 = this.getLuminance(rgb2)
    const ratio = l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05)
    return {
      ratio: Math.round(ratio * 100) / 100,
      passes: {
        normal: ratio >= 4.5, // WCAG AA for normal text
        large: ratio >= 3, // WCAG AA for large text (18pt+ or 14pt+ bold)
      }
    }
  }
<<<<<<< HEAD
  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
=======

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
<<<<<<< HEAD
          b: parseInt(result[3], 16),
=======
          b: parseInt(result[3], 16)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
        }
      : { r: 0, g: 0, b: 0 };
  }

  private getLuminance(rgb: { r: number; g: number; b: number }): number {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
<<<<<<< HEAD
      const v = val / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
=======
      const v = val / 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }
  // Audit page for accessibility issues
  public auditPage(): A11yReport {
    const errors: A11yError[] = [];
    const warnings: A11yWarning[] = [];
    // Check for missing alt text on images
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('alt')) {
        errors.push({
          type: 'missing-alt',
          element: img['src'] || 'unknown',
          message: 'Image missing alt attribute',
          wcag: '1.1.1 (Level A)'
<<<<<<< HEAD
        });
=======
        })
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
      } else if (img.alt === '') {
        warnings.push({
          type: 'empty-alt',
          element: img['src'] || 'unknown',
          message: 'Image has empty alt text',
          suggestion: 'Provide descriptive alt text or use alt="" for decorative images'
<<<<<<< HEAD
        });
=======
        })
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
      }
    });
    // Check for missing form labels
    document.querySelectorAll('input, select, textarea').forEach(input => {
      const hasLabel =
        input.hasAttribute('aria-label') ||
        input.hasAttribute('aria-labelledby') ||
<<<<<<< HEAD
        document.querySelector(`label[for="${input.id}"]`);
=======
        document.querySelector(`label[for="${input.id}"]`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
      if (!hasLabel) {
        errors.push({
          type: 'missing-label',
          element: input.tagName.toLowerCase(),
          message: 'Form element missing label',
          wcag: '1.3.1 (Level A), 3.3.2 (Level A)'
<<<<<<< HEAD
        });
=======
        })
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
      }
    });
    // Check for proper heading hierarchy
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let prevLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName[1]);
      if (level > prevLevel + 1) {
        warnings.push({
          type: 'heading-hierarchy',
          element: heading.tagName.toLowerCase(),
          message: `Heading level skipped from h${prevLevel} to h${level}`,
          suggestion: 'Maintain proper heading hierarchy'
        });
      }
      prevLevel = level;
    });
    // Check for skip navigation link
    const hasSkipLink = document.querySelector('a[to="#main"], a[to="#content"]')
    if (!hasSkipLink) {
      warnings.push({
        type: 'missing-skip-link',
        element: 'body',
        message: 'No skip navigation link found',
        suggestion: 'Add a skip link to main content for keyboard users'
      })
    }
    // Check for language attribute
    const html = document.documentElement
    if (!html.hasAttribute('lang')) {
      errors.push({
        type: 'missing-lang',
        element: 'html',
        message: 'Missing lang attribute on html element',
        wcag: '3.1.1 (Level A)'
      })
    }
    // Check for sufficient link text
    document.querySelectorAll('a').forEach(link => {
      const text = link.textContent?.trim() || ''
      const ariaLabel = link.getAttribute('aria-label')
      if (!text && !ariaLabel) {
        errors.push({
          type: 'empty-link',
          element: link.href || 'unknown',
          message: 'Link has no accessible text',
          wcag: '2.4.4 (Level A)'
        })
      } else if (['click here', 'read more', 'more'].includes(text.toLowerCase())) {
        warnings.push({
          type: 'generic-link-text',
          element: text,
          message: 'Link text is not descriptive',
          suggestion: 'Use more descriptive link text that makes sense out of context'
        })
      }
    })
    // Check for touch target size
    document.querySelectorAll('button, a, input, select').forEach(element => {
      const rect = element.getBoundingClientRect()
      if (rect.width < 44 || rect.height < 44) {
        warnings.push({
          type: 'small-touch-target',
          element: element.tagName.toLowerCase(),`}
          message: `Touch target too small: ${Math.round(rect.width)}x${Math.round(rect.height)}px`,
          suggestion: 'Increase touch target size to at least 44x44px'
        })
      }
    })
    // Calculate score (100 - errors * 10 - warnings * 2)
    const score = Math.max(0, 100 - errors.length * 10 - warnings.length * 2)
    return {
      errors,
      warnings,
      score}
    }
  }
  // Add keyboard navigation helpers
  public enhanceKeyboardNavigation(): void {
    // Add focus visible class for keyboard navigation
    document.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');}
      }
    })
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');}
    })
    // Add keyboard shortcuts
    document.addEventListener('keydown', e => {
      // Alt + H: Go to main heading
      if (e.altKey && e.key === 'h') {
        const mainHeading = document.querySelector('h1')
        if (mainHeading) {
          (mainHeading as HTMLElement).focus();}
        }
      }
      // Alt + M: Go to main content
      if (e.altKey && e.key === 'm') {
        const mainContent = document.querySelector('main')
        if (mainContent) {
          (mainContent as HTMLElement).focus()
        }
      }
      // Alt + N: Go to navigation
      if (e.altKey && e.key === 'n') {
        const nav = document.querySelector('nav')
        if (nav) {
          (nav as HTMLElement).focus()
        }
      }
    })
  }
  // Announce screen reader messages
  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const announcer = document.getElementById('a11y-announcer') || this.createAnnouncer()
    announcer.setAttribute('aria-live', priority)
    announcer.textContent = message
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ea76
    // Clear after announcement
    setTimeout(() => {
<<<<<<< HEAD
      if (this.liveRegion) {
        this.liveRegion.textContent = '';
      }
    }, this.config.announceDelay);
=======
      announcer.textContent = ''
    }, 1000)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }

  /**
   * Set focus to element with announcement
   */
  focus(element: HTMLElement, announceMessage?: string): void {
    if (!this.config.enableFocusManagement) return;

    this.focusHistory.push(document.activeElement as HTMLElement);
    element.focus();
    
    if (announceMessage) {
      this.announce(announceMessage);
    }
  }

  /**
   * Return focus to previous element
   */
  returnFocus(): void {
    if (!this.config.enableFocusManagement) return;

    const previousElement = this.focusHistory.pop();
    if (previousElement) {
      previousElement.focus();
    }
  }

  /**
   * Trap focus within container
   */
  trapFocus(container: HTMLElement): void {
    if (!this.config.enableFocusManagement) return;

    const focusableElements = this.getFocusableElements(container);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
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
<<<<<<< HEAD
    };

    container.addEventListener('keydown', handleKeyDown);
    firstElement.focus();
  }

  /**
   * Get all focusable elements within container
   */
  private getFocusableElements(container: HTMLElement): HTMLElement[] {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];

    return Array.from(container.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  /**
   * Add keyboard navigation to element
   */
  addKeyboardNavigation(element: HTMLElement): void {
    if (!this.config.enableKeyboardNavigation) return;

    element.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          element.click();
          break;
        case 'Escape':
          element.blur();
          break;
=======
      if (e.key === 'Escape') {
        element.dispatchEvent(new CustomEvent('close'))
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
      }
    });
  }

  /**
   * Enhance button accessibility
   */
  enhanceButton(button: HTMLButtonElement): void {
    if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
      button.setAttribute('aria-label', 'Button');
    }
<<<<<<< HEAD
    
    this.addKeyboardNavigation(button);
  }

  /**
   * Enhance form field accessibility
   */
  enhanceFormField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void {
    const label = document.querySelector(`label[for="${field.id}"]`);
    
    if (!label && !field.getAttribute('aria-label')) {
      field.setAttribute('aria-label', field.placeholder || 'Form field');
    }
    
    if (field.required) {
      field.setAttribute('aria-required', 'true');
    }
  }

  /**
   * Create accessible modal
   */
  createAccessibleModal(modal: HTMLElement): void {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    
    const title = modal.querySelector('[data-modal-title]');
    if (title) {
      modal.setAttribute('aria-labelledby', title.id || 'modal-title');
    }
    
    this.trapFocus(modal);
  }

  /**
   * Check if element is visible to screen readers
   */
  isVisibleToScreenReader(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           element.getAttribute('aria-hidden') !== 'true';
  }

  /**
   * Get accessible name for element
   */
  getAccessibleName(element: HTMLElement): string {
    return element.getAttribute('aria-label') ||
           element.getAttribute('aria-labelledby') ||
           element.textContent?.trim() ||
           element.getAttribute('title') ||
           '';
  }

  /**
   * Check if element is focusable
   */
  isFocusable(element: HTMLElement): boolean {
    const tabIndex = element.getAttribute('tabindex');
    if (tabIndex === '-1') return false;
    
    if (element instanceof HTMLButtonElement ||
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement ||
        element instanceof HTMLAnchorElement) {
      return !element.disabled;
    }
    
    return tabIndex !== null;
  }

  /**
   * Clean up resources
   */
  destroy(): void {
    if (this.liveRegion) {
      this.liveRegion.remove();
      this.liveRegion = null;
    }
    this.focusHistory = [];
=======
    element.addEventListener('keydown', handleTabKey)
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey)
    }
  }

  // Check if element is visible to screen readers
  public isAccessible(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element)
    return !(
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.opacity === '0' ||
      element.hasAttribute('hidden') ||
      element.getAttribute('aria-hidden') === 'true'
    )
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }
}

// Utility functions
export const accessibilityUtils = {
  /**
   * Create skip link
   */
  createSkipLink(text: string = 'Skip to main content', target: string = 'main'): HTMLElement {
    const skipLink = document.createElement('a');
    skipLink.href = `#${target}`;
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
    
    return skipLink;
  },

  /**
   * Add ARIA attributes to element
   */
  addAriaAttributes(element: HTMLElement, attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  /**
   * Remove ARIA attributes from element
   */
  removeAriaAttributes(element: HTMLElement, attributes: string[]): void {
    attributes.forEach(attr => {
      element.removeAttribute(attr);
    });
  }
};

export default AccessibilityManager;
=======
'use client';

/**
 * Accessibility utilities for enhanced user experience
 */

export interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

/**
 * Default accessibility settings
 */
export const defaultAccessibilitySettings: AccessibilitySettings = {
  highContrast: false,
  reducedMotion: false,
  fontSize: 'medium',
  screenReader: false,
};

/**
 * Apply accessibility settings to the document
 */
export function applyAccessibilitySettings(settings: AccessibilitySettings): void {
  const root = document.documentElement;
  
  // High contrast mode
  if (settings.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }
  
  // Reduced motion
  if (settings.reducedMotion) {
    root.classList.add('reduced-motion');
  } else {
    root.classList.remove('reduced-motion');
  }
  
  // Font size
  root.classList.remove('font-small', 'font-medium', 'font-large');
  root.classList.add(`font-${settings.fontSize}`);
  
  // Screen reader optimizations
  if (settings.screenReader) {
    root.classList.add('screen-reader-optimized');
  } else {
    root.classList.remove('screen-reader-optimized');
  }
}

/**
 * Detect user's accessibility preferences
 */
export function detectAccessibilityPreferences(): Partial<AccessibilitySettings> {
  const preferences: Partial<AccessibilitySettings> = {};
  
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    preferences.reducedMotion = true;
  }
  
  // Check for high contrast preference
  if (window.matchMedia('(prefers-contrast: high)').matches) {
    preferences.highContrast = true;
  }
  
  return preferences;
}

/**
 * Save accessibility settings to localStorage
 */
export function saveAccessibilitySettings(settings: AccessibilitySettings): void {
  try {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  } catch (error) {
    console.warn('Failed to save accessibility settings:', error);
  }
}

/**
 * Load accessibility settings from localStorage
 */
export function loadAccessibilitySettings(): AccessibilitySettings {
  try {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      return { ...defaultAccessibilitySettings, ...JSON.parse(saved) };
    }
  } catch (error) {
    console.warn('Failed to load accessibility settings:', error);
  }
  
  return defaultAccessibilitySettings;
}

/**
 * Initialize accessibility features
 */
export function initializeAccessibility(): void {
  const savedSettings = loadAccessibilitySettings();
  const detectedPreferences = detectAccessibilityPreferences();
  const finalSettings = { ...savedSettings, ...detectedPreferences };
  
  applyAccessibilitySettings(finalSettings);
}

/**
 * Announce page changes to screen readers
 */
export function announcePageChange(pageTitle: string): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.overflow = 'hidden';
  
  document.body.appendChild(announcement);
  announcement.textContent = `Navigated to ${pageTitle}`;
  
  setTimeout(() => {
    if (document.body.contains(announcement)) {
      document.body.removeChild(announcement);
    }
  }, 1000);
}

/**
 * Skip to main content functionality
 */
export function setupSkipToMainContent(): void {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-to-main';
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
}

/**
 * Focus management for modals and overlays
 */
export function manageFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleKeyDown);
  firstElement?.focus();
  
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0013

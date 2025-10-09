'use client';
/**
 * Accessibility Utilities
 * WCAG 2.1 Level AA compliance helpers
 */

export interface A11yReport {
  score: number;
  errors: A11yError[];
  warnings: A11yWarning[];
}

export interface A11yError {
  type: string;
  message: string;
  element: HTMLElement;
  suggestion: string;
}

export interface A11yWarning {
  type: string;
  message: string;
  element: HTMLElement;
  suggestion: string;
}

class AccessibilityService {
  private isEnabled: boolean = true;
  
  constructor() {
    this.isEnabled = typeof window !== 'undefined';
  }
  
  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : { r: 0, g: 0, b: 0 };
  }
  
  private getLuminance(rgb: { r: number; g: number; b: number }): number {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  
  // Audit page for accessibility issues
  public auditPage(): A11yReport {
    if (!this.isEnabled) {
      return { score: 0, errors: [], warnings: [] };
    }
    
    const errors: A11yError[] = [];
    const warnings: A11yWarning[] = [];
    
    // Check for missing alt text on images
    document.querySelectorAll('img').forEach(img => {
      if (!img.alt) {
        errors.push({
          type: 'missing-alt',
          message: 'Image missing alt text',
          element: img,
          suggestion: 'Add descriptive alt text to all images'
        });
      } else if (img.alt === '') {
        warnings.push({
          type: 'empty-alt',
          message: 'Image has empty alt text',
          element: img,
          suggestion: 'Consider adding descriptive alt text or using alt="" for decorative images'
        });
      }
    });
    
    // Check for missing form labels
    document.querySelectorAll('input, select, textarea').forEach(input => {
      const hasLabel = input.getAttribute('aria-label') ||
        input.getAttribute('aria-labelledby') ||
        document.querySelector(`label[for="${input.id}"]`);
      
      if (!hasLabel) {
        errors.push({
          type: 'missing-label',
          message: 'Form control missing label',
          element: input as HTMLElement,
          suggestion: 'Add a label or aria-label attribute'
        });
      }
    });
    
    // Check for proper heading hierarchy
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let prevLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > prevLevel + 1) {
        warnings.push({
          type: 'heading-hierarchy',
          message: `Heading level skipped from h${prevLevel} to h${level}`,
          element: heading as HTMLElement,
          suggestion: 'Maintain proper heading hierarchy'
        });
      }
      prevLevel = level;
    });
    
    // Check for skip navigation link
    const hasSkipLink = document.querySelector('a[href="#main"], a[href="#content"]');
    if (!hasSkipLink) {
      warnings.push({
        type: 'missing-skip-link',
        message: 'No skip navigation link found',
        element: document.body,
        suggestion: 'Add a skip to main content link'
      });
    }
    
    // Check for language attribute
    const html = document.documentElement;
    if (!html.hasAttribute('lang')) {
      errors.push({
        type: 'missing-lang',
        message: 'HTML element missing lang attribute',
        element: html,
        suggestion: 'Add lang attribute to html element'
      });
    }
    
    // Check for sufficient link text
    document.querySelectorAll('a').forEach(link => {
      const text = link.textContent?.trim() || '';
      if (text.length < 3) {
        errors.push({
          type: 'insufficient-link-text',
          message: 'Link text too short',
          element: link as HTMLElement,
          suggestion: 'Use more descriptive link text'
        });
      } else if (['click here', 'read more', 'more'].includes(text.toLowerCase())) {
        warnings.push({
          type: 'generic-link-text',
          message: 'Generic link text detected',
          element: link as HTMLElement,
          suggestion: 'Use more descriptive link text'
        });
      }
    });
    
    // Check for touch target size
    document.querySelectorAll('button, a, input, select').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        warnings.push({
          type: 'small-touch-target',
          message: `Touch target too small: ${Math.round(rect.width)}x${Math.round(rect.height)}px`,
          element: element as HTMLElement,
          suggestion: 'Increase touch target size to at least 44x44px'
        });
      }
    });
    
    // Calculate score (100 - errors * 10 - warnings * 2)
    const score = Math.max(0, 100 - errors.length * 10 - warnings.length * 2);
    
    return {
      score,
      errors,
      warnings
    };
  }
  
  // Add keyboard navigation helpers
  public enhanceKeyboardNavigation(): void {
    if (!this.isEnabled) return;
    
    // Add focus indicators
    document.addEventListener('keydown', () => {
      document.body.classList.add('keyboard-navigation');
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', e => {
      // Alt + S: Skip to main content
      if (e.altKey && e.key === 's') {
        const main = document.querySelector('main, #main, #content');
        if (main) {
          (main as HTMLElement).focus();
        }
      }
      
      // Alt + M: Go to main content
      if (e.altKey && e.key === 'm') {
        const main = document.querySelector('main, #main, #content');
        if (main) {
          (main as HTMLElement).scrollIntoView();
        }
      }
      
      // Alt + N: Go to navigation
      if (e.altKey && e.key === 'n') {
        const nav = document.querySelector('nav, #navigation');
        if (nav) {
          (nav as HTMLElement).focus();
        }
      }
    });
  }
  
  // Announce screen reader messages
  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.isEnabled) return;
    
    const announcer = this.createAnnouncer();
    announcer.setAttribute('aria-live', priority);
    announcer.textContent = message;
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      announcer.remove();
    }, 1000);
  }
  
  private createAnnouncer(): HTMLElement {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.position = 'absolute';
    announcer.style.left = '-10000px';
    announcer.style.width = '1px';
    announcer.style.height = '1px';
    announcer.style.overflow = 'hidden';
    return announcer;
  }
  
  // Trap focus within a modal
  public trapFocus(element: HTMLElement): () => void {
    if (!this.isEnabled) return () => {};
    
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
      if (e.key === 'Escape') {
        // Close modal or return focus
      }
    };
    
    element.addEventListener('keydown', handleTabKey);
    
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  }
  
  // Check if element is visible to screen readers
  public isAccessible(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      element.getAttribute('aria-hidden') !== 'true' &&
      element.offsetWidth > 0 &&
      element.offsetHeight > 0
    );
  }
}

// Singleton instance
const a11y = new AccessibilityService();
export default a11y;
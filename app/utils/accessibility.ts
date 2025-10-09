'use client';
/**
 * Accessibility Utilities
 * WCAG 2.1 Level AA compliance helpers
 */

export interface A11yReport {
  errors: A11yError[];
  warnings: A11yWarning[];
  score: number;
  level: 'A' | 'AA' | 'AAA';
}

export interface A11yError {
  id: string;
  message: string;
  element: string;
  severity: 'error' | 'warning' | 'info';
  wcagLevel: string;
  suggestion: string;
}

export interface A11yWarning {
  id: string;
  message: string;
  element: string;
  severity: 'warning' | 'info';
  wcagLevel: string;
  suggestion: string;
}

class AccessibilityService {
  private isEnabled: boolean = true;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (typeof window !== 'undefined') {
      this.setupKeyboardNavigation();
      this.setupScreenReaderSupport();
    }
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.handleTabNavigation(e);
      }
    });
  }

  private setupScreenReaderSupport(): void {
    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'a11y-live-region';
    document.body.appendChild(liveRegion);
  }

  private handleTabNavigation(e: KeyboardEvent): void {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
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

  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById('a11y-live-region');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = message;
    }
  }

  public checkColorContrast(foreground: string, background: string): boolean {
    // Simple contrast ratio calculation
    const fgLuminance = this.getLuminance(foreground);
    const bgLuminance = this.getLuminance(background);
    const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
    return contrast >= 4.5; // WCAG AA standard
  }

  private getLuminance(color: string): number {
    // Simplified luminance calculation
    const rgb = this.hexToRgb(color);
    if (!rgb) return 0;
    
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  public generateReport(): A11yReport {
    const errors: A11yError[] = [];
    const warnings: A11yWarning[] = [];
    
    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt) {
        errors.push({
          id: `missing-alt-${index}`,
          message: 'Image missing alt text',
          element: img.tagName,
          severity: 'error',
          wcagLevel: '1.1.1',
          suggestion: 'Add descriptive alt text to image'
        });
      }
    });
    
    // Check for missing form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      if (!label) {
        warnings.push({
          id: `missing-label-${index}`,
          message: 'Form control missing label',
          element: input.tagName,
          severity: 'warning',
          wcagLevel: '1.3.1',
          suggestion: 'Add a label element for this form control'
        });
      }
    });
    
    const score = Math.max(0, 100 - (errors.length * 10) - (warnings.length * 5));
    
    return {
      errors,
      warnings,
      score,
      level: score >= 90 ? 'AAA' : score >= 80 ? 'AA' : 'A'
    };
  }
}

export const accessibilityService = new AccessibilityService();
export default accessibilityService;
'use client';
/**
 * Accessibility Utilities
 * WCAG 2.1 Level AA compliance helpers
 */
export interface A11yReport {
  errors: A11yError[];
  warnings: A11yWarning[];
  score: number;
}

export interface A11yError {
  type: string;
  message: string;
  element?: HTMLElement;
}

export interface A11yWarning {
  type: string;
  message: string;
  element?: HTMLElement;
}

class AccessibilityService {
  private isEnabled: boolean = true;
  
  constructor() {
    this.isEnabled = true;
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
    const { r, g, b } = rgb;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  // Audit page for accessibility issues
  public auditPage(): A11yReport {
    const errors: A11yError[] = [];
    const warnings: A11yWarning[] = [];

    // Check for missing alt text on images
    document.querySelectorAll('img').forEach(img => {
      if (!img.alt) {
        errors.push({
          type: 'missing-alt',
          message: 'Image missing alt text',
          element: img
        });
      } else if (img.alt === '') {
        warnings.push({
          type: 'empty-alt',
          message: 'Image has empty alt text',
          element: img
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
          element: input as HTMLElement
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
          element: heading as HTMLElement
        });
      }
      prevLevel = level;
    });

    // Check for color contrast
    document.querySelectorAll('*').forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        const fgRgb = this.hexToRgb(color);
        const bgRgb = this.hexToRgb(backgroundColor);
        const fgLuminance = this.getLuminance(fgRgb);
        const bgLuminance = this.getLuminance(bgRgb);
        const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
        
        if (contrast < 4.5) {
          warnings.push({
            type: 'color-contrast',
            message: `Low color contrast ratio: ${contrast.toFixed(2)}`,
            element: element as HTMLElement
          });
        }
      }
    });

    const score = Math.max(0, 100 - (errors.length * 10) - (warnings.length * 2));
    
    return {
      errors,
      warnings,
      score
    };
  }

  // Enable/disable accessibility monitoring
  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  // Get accessibility score
  public getScore(): number {
    const report = this.auditPage();
    return report.score;
  }
}

export const accessibilityService = new AccessibilityService();
export default accessibilityService;
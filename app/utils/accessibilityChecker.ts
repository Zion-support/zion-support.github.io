/**
 * Accessibility Checker Utility
 *
 * Provides tools for checking and improving accessibility (a11y) in React applications.
 * Helps ensure WCAG 2.1 AA compliance.
 *
 * @module accessibilityChecker
 * @author Zion Tech Group
 * @version 1.0.0
 */

/**
 * Accessibility issue severity levels
 */
export enum A11ySeverity {
  /** Minor issue that may affect some users */
  MINOR = 'MINOR',
  /** Moderate issue that affects usability */
  MODERATE = 'MODERATE',
  /** Serious issue that significantly impacts accessibility */
  SERIOUS = 'SERIOUS',
  /** Critical issue that makes content inaccessible */
  CRITICAL = 'CRITICAL'
}

/**
 * Accessibility issue interface
 */
export interface A11yIssue {
  id: string;
  type: string;
  severity: A11ySeverity;
  message: string;
  element?: HTMLElement;
  selector?: string;
  fix?: string;
  wcagLevel?: 'A' | 'AA' | 'AAA';
  wcagGuideline?: string;
}

/**
 * Accessibility checker configuration
 */
export interface A11yCheckerConfig {
  /** Enable color contrast checking */
  checkColorContrast: boolean;
  /** Enable keyboard navigation checking */
  checkKeyboardNavigation: boolean;
  /** Enable screen reader compatibility checking */
  checkScreenReader: boolean;
  /** Enable focus management checking */
  checkFocusManagement: boolean;
  /** Minimum color contrast ratio (default: 4.5 for AA) */
  minContrastRatio: number;
  /** Enable ARIA attributes checking */
  checkAria: boolean;
  /** Enable heading structure checking */
  checkHeadings: boolean;
  /** Enable image alt text checking */
  checkImages: boolean;
  /** Enable link text checking */
  checkLinks: boolean;
}

/**
 * Default configuration for accessibility checker
 */
export const DEFAULT_A11Y_CONFIG: A11yCheckerConfig = {
  checkColorContrast: true,
  checkKeyboardNavigation: true,
  checkScreenReader: true,
  checkFocusManagement: true,
  minContrastRatio: 4.5,
  checkAria: true,
  checkHeadings: true,
  checkImages: true,
  checkLinks: true
};

/**
 * Accessibility checker class
 */
export class AccessibilityChecker {
  private config: A11yCheckerConfig;
  private issues: A11yIssue[] = [];

  constructor(config: Partial<A11yCheckerConfig> = {}) {
    this.config = { ...DEFAULT_A11Y_CONFIG, ...config };
  }

  /**
   * Run comprehensive accessibility check
   */
  public async checkAccessibility(): Promise<A11yIssue[]> {
    this.issues = [];
    
    if (this.config.checkColorContrast) {
      this.checkColorContrast();
    }
    
    if (this.config.checkKeyboardNavigation) {
      this.checkKeyboardNavigation();
    }
    
    if (this.config.checkScreenReader) {
      this.checkScreenReaderCompatibility();
    }
    
    if (this.config.checkFocusManagement) {
      this.checkFocusManagement();
    }
    
    if (this.config.checkAria) {
      this.checkAriaAttributes();
    }
    
    if (this.config.checkHeadings) {
      this.checkHeadingStructure();
    }
    
    if (this.config.checkImages) {
      this.checkImageAltText();
    }
    
    if (this.config.checkLinks) {
      this.checkLinkText();
    }

    return this.issues;
  }

  /**
   * Check color contrast ratios
   */
  private checkColorContrast(): void {
    const elements = document.querySelectorAll('*');
    
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        const contrast = this.calculateContrastRatio(color, backgroundColor);
        
        if (contrast < this.config.minContrastRatio) {
          this.addIssue({
            id: `contrast-${Date.now()}`,
            type: 'color-contrast',
            severity: contrast < 3 ? A11ySeverity.CRITICAL : A11ySeverity.SERIOUS,
            message: `Color contrast ratio ${contrast.toFixed(2)} is below minimum ${this.config.minContrastRatio}`,
            element: element as HTMLElement,
            fix: 'Increase color contrast by using darker/lighter colors',
            wcagLevel: 'AA',
            wcagGuideline: '1.4.3'
          });
        }
      }
    });
  }

  /**
   * Check keyboard navigation
   */
  private checkKeyboardNavigation(): void {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach((element) => {
      const tabIndex = element.getAttribute('tabindex');
      
      if (tabIndex && parseInt(tabIndex) > 0) {
        this.addIssue({
          id: `keyboard-${Date.now()}`,
          type: 'keyboard-navigation',
          severity: A11ySeverity.MODERATE,
          message: 'Positive tabindex can disrupt natural tab order',
          element: element as HTMLElement,
          fix: 'Use tabindex="0" or remove tabindex to maintain natural order',
          wcagLevel: 'A',
          wcagGuideline: '2.4.3'
        });
      }
    });
  }

  /**
   * Check screen reader compatibility
   */
  private checkScreenReaderCompatibility(): void {
    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.addIssue({
          id: `screen-reader-${Date.now()}`,
          type: 'screen-reader',
          severity: A11ySeverity.CRITICAL,
          message: 'Image missing alt text or aria-label',
          element: img,
          fix: 'Add alt text or aria-label to describe the image',
          wcagLevel: 'A',
          wcagGuideline: '1.1.1'
        });
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          id: `screen-reader-${Date.now()}`,
          type: 'screen-reader',
          severity: A11ySeverity.CRITICAL,
          message: 'Form control missing label or aria-label',
          element: input as HTMLElement,
          fix: 'Add a label element or aria-label attribute',
          wcagLevel: 'A',
          wcagGuideline: '1.3.1'
        });
      }
    });
  }

  /**
   * Check focus management
   */
  private checkFocusManagement(): void {
    // Check for focus traps
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) {
      this.addIssue({
        id: `focus-${Date.now()}`,
        type: 'focus-management',
        severity: A11ySeverity.SERIOUS,
        message: 'No focusable elements found on page',
        fix: 'Ensure page has at least one focusable element',
        wcagLevel: 'A',
        wcagGuideline: '2.1.1'
      });
    }
  }

  /**
   * Check ARIA attributes
   */
  private checkAriaAttributes(): void {
    const elementsWithAria = document.querySelectorAll('[aria-*]');
    
    elementsWithAria.forEach((element) => {
      const ariaExpanded = element.getAttribute('aria-expanded');
      const ariaControls = element.getAttribute('aria-controls');
      
      if (ariaExpanded && !ariaControls) {
        this.addIssue({
          id: `aria-${Date.now()}`,
          type: 'aria-attributes',
          severity: A11ySeverity.MODERATE,
          message: 'aria-expanded without aria-controls',
          element: element as HTMLElement,
          fix: 'Add aria-controls to identify the controlled element',
          wcagLevel: 'AA',
          wcagGuideline: '4.1.2'
        });
      }
    });
  }

  /**
   * Check heading structure
   */
  private checkHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > previousLevel + 1) {
        this.addIssue({
          id: `heading-${Date.now()}`,
          type: 'heading-structure',
          severity: A11ySeverity.MODERATE,
          message: `Heading level ${level} skips level ${previousLevel + 1}`,
          element: heading as HTMLElement,
          fix: 'Use heading levels in sequential order',
          wcagLevel: 'AA',
          wcagGuideline: '1.3.1'
        });
      }
      
      previousLevel = level;
    });
  }

  /**
   * Check image alt text
   */
  private checkImageAltText(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      const alt = img.getAttribute('alt');
      
      if (alt === '') {
        this.addIssue({
          id: `image-${Date.now()}`,
          type: 'image-alt',
          severity: A11ySeverity.MINOR,
          message: 'Image has empty alt text - should be decorative or have descriptive text',
          element: img,
          fix: 'Add descriptive alt text or mark as decorative',
          wcagLevel: 'A',
          wcagGuideline: '1.1.1'
        });
      }
    });
  }

  /**
   * Check link text
   */
  private checkLinkText(): void {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach((link) => {
      const text = link.textContent?.trim();
      const ariaLabel = link.getAttribute('aria-label');
      
      if (!text && !ariaLabel) {
        this.addIssue({
          id: `link-${Date.now()}`,
          type: 'link-text',
          severity: A11ySeverity.CRITICAL,
          message: 'Link has no accessible text',
          element: link as HTMLElement,
          fix: 'Add text content or aria-label to the link',
          wcagLevel: 'A',
          wcagGuideline: '2.4.4'
        });
      } else if (text && text.length < 3) {
        this.addIssue({
          id: `link-${Date.now()}`,
          type: 'link-text',
          severity: A11ySeverity.MODERATE,
          message: 'Link text is too short to be descriptive',
          element: link as HTMLElement,
          fix: 'Use more descriptive link text',
          wcagLevel: 'AA',
          wcagGuideline: '2.4.4'
        });
      }
    });
  }

  /**
   * Calculate color contrast ratio
   */
  private calculateContrastRatio(color1: string, color2: string): number {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;
    
    const lum1 = this.getLuminance(rgb1);
    const lum2 = this.getLuminance(rgb2);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  }

  /**
   * Convert hex color to RGB
   */
  private hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  /**
   * Get relative luminance
   */
  private getLuminance(rgb: { r: number; g: number; b: number }): number {
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  /**
   * Add issue to the list
   */
  private addIssue(issue: Omit<A11yIssue, 'id'>): void {
    this.issues.push({
      ...issue,
      id: issue.id || `issue-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    });
  }

  /**
   * Get all issues
   */
  public getIssues(): A11yIssue[] {
    return this.issues;
  }

  /**
   * Get issues by severity
   */
  public getIssuesBySeverity(severity: A11ySeverity): A11yIssue[] {
    return this.issues.filter(issue => issue.severity === severity);
  }

  /**
   * Clear all issues
   */
  public clearIssues(): void {
    this.issues = [];
  }
}

/**
 * Create a new accessibility checker instance
 */
export function createAccessibilityChecker(config?: Partial<A11yCheckerConfig>): AccessibilityChecker {
  return new AccessibilityChecker(config);
}

/**
 * Quick accessibility check function
 */
export async function quickA11yCheck(): Promise<A11yIssue[]> {
  const checker = createAccessibilityChecker();
  return await checker.checkAccessibility();
}
// Accessibility Checker Utility

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  fix: string;
  severity: 'high' | 'medium' | 'low';
  wcagLevel: 'A' | 'AA' | 'AAA';
  rule: string;
}

export interface AccessibilityAuditResult {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
  summary: {
    errors: number;
    warnings: number;
    info: number;
    total: number;
  };
}

export interface AccessibilityConfig {
  includeWarnings: boolean;
  includeInfo: boolean;
  wcagLevel: 'A' | 'AA' | 'AAA';
  checkColorContrast: boolean;
  checkKeyboardNavigation: boolean;
  checkScreenReader: boolean;
  checkFocusManagement: boolean;
  checkARIALabels: boolean;
  checkHeadings: boolean;
  checkImages: boolean;
  checkForms: boolean;
  checkLinks: boolean;
  checkTables: boolean;
}

class AccessibilityChecker {
  private config: AccessibilityConfig;
  private issues: AccessibilityIssue[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      includeWarnings: true,
      includeInfo: true,
      wcagLevel: 'AA',
      checkColorContrast: true,
      checkKeyboardNavigation: true,
      checkScreenReader: true,
      checkFocusManagement: true,
      checkARIALabels: true,
      checkHeadings: true,
      checkImages: true,
      checkForms: true,
      checkLinks: true,
      checkTables: true,
      ...config
    };
  }

  public audit(): AccessibilityAuditResult {
    this.issues = [];
    
    if (this.config.checkImages) {
      this.checkImages();
    }
    
    if (this.config.checkForms) {
      this.checkForms();
    }
    
    if (this.config.checkLinks) {
      this.checkLinks();
    }
    
    if (this.config.checkHeadings) {
      this.checkHeadings();
    }
    
    if (this.config.checkTables) {
      this.checkTables();
    }
    
    if (this.config.checkARIALabels) {
      this.checkARIALabels();
    }
    
    if (this.config.checkKeyboardNavigation) {
      this.checkKeyboardNavigation();
    }
    
    if (this.config.checkFocusManagement) {
      this.checkFocusManagement();
    }
    
    if (this.config.checkColorContrast) {
      this.checkColorContrast();
    }
    
    if (this.config.checkScreenReader) {
      this.checkScreenReader();
    }

    return this.generateReport();
  }

  private checkImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach((img, index) => {
      // Check for missing alt text
      if (!img.hasAttribute('alt')) {
        this.addIssue({
          type: 'error',
          element: `img[${index}]`,
          message: 'Image missing alt text',
          fix: 'Add alt attribute to image',
          severity: 'high',
          wcagLevel: 'A',
          rule: '1.1.1'
        });
      }
      
      // Check for empty alt text
      if (img.getAttribute('alt') === '') {
        this.addIssue({
          type: 'warning',
          element: `img[${index}]`,
          message: 'Image has empty alt text',
          fix: 'Provide meaningful alt text or mark as decorative with alt=""',
          severity: 'medium',
          wcagLevel: 'A',
          rule: '1.1.1'
        });
      }
      
      // Check for alt text that contains "image" or "picture"
      const altText = img.getAttribute('alt');
      if (altText && (altText.toLowerCase().includes('image') || altText.toLowerCase().includes('picture'))) {
        this.addIssue({
          type: 'info',
          element: `img[${index}]`,
          message: 'Alt text contains redundant words like "image" or "picture"',
          fix: 'Remove redundant words from alt text',
          severity: 'low',
          wcagLevel: 'A',
          rule: '1.1.1'
        });
      }
    });
  }

  private checkForms(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input, index) => {
      const inputElement = input as HTMLInputElement;
      
      // Check for missing labels
      if (!inputElement.labels || inputElement.labels.length === 0) {
        if (!inputElement.hasAttribute('aria-label') && !inputElement.hasAttribute('aria-labelledby')) {
          this.addIssue({
            type: 'error',
            element: `${inputElement.tagName.toLowerCase()}[${index}]`,
            message: 'Form control missing label',
            fix: 'Add label element or aria-label attribute',
            severity: 'high',
            wcagLevel: 'A',
            rule: '1.3.1'
          });
        }
      }
      
      // Check for required fields without aria-required
      if (inputElement.hasAttribute('required') && !inputElement.hasAttribute('aria-required')) {
        this.addIssue({
          type: 'warning',
          element: `${inputElement.tagName.toLowerCase()}[${index}]`,
          message: 'Required field missing aria-required attribute',
          fix: 'Add aria-required="true" to required fields',
          severity: 'medium',
          wcagLevel: 'A',
          rule: '1.3.1'
        });
      }
      
      // Check for error messages
      if (inputElement.hasAttribute('aria-invalid') && inputElement.getAttribute('aria-invalid') === 'true') {
        const errorId = inputElement.getAttribute('aria-describedby');
        if (!errorId || !document.getElementById(errorId)) {
          this.addIssue({
            type: 'error',
            element: `${inputElement.tagName.toLowerCase()}[${index}]`,
            message: 'Invalid field missing error message',
            fix: 'Add error message and reference it with aria-describedby',
            severity: 'high',
            wcagLevel: 'A',
            rule: '3.3.1'
          });
        }
      }
    });
  }

  private checkLinks(): void {
    const links = document.querySelectorAll('a');
    
    links.forEach((link, index) => {
      const linkElement = link as HTMLAnchorElement;
      
      // Check for empty links
      if (!linkElement.textContent?.trim() && !linkElement.hasAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          element: `a[${index}]`,
          message: 'Link has no accessible name',
          fix: 'Add text content or aria-label attribute',
          severity: 'high',
          wcagLevel: 'A',
          rule: '2.4.4'
        });
      }
      
      // Check for links that open in new window
      if (linkElement.target === '_blank' && !linkElement.hasAttribute('aria-label')) {
        this.addIssue({
          type: 'warning',
          element: `a[${index}]`,
          message: 'Link opens in new window without warning',
          fix: 'Add aria-label or text indicating the link opens in new window',
          severity: 'medium',
          wcagLevel: 'A',
          rule: '3.2.5'
        });
      }
      
      // Check for links with same text but different destinations
      const linkText = linkElement.textContent?.trim();
      if (linkText) {
        const sameTextLinks = Array.from(links).filter(l => l.textContent?.trim() === linkText);
        if (sameTextLinks.length > 1) {
          this.addIssue({
            type: 'warning',
            element: `a[${index}]`,
            message: 'Multiple links with same text but different destinations',
            fix: 'Make link text unique or add context',
            severity: 'medium',
            wcagLevel: 'A',
            rule: '2.4.4'
          });
        }
      }
    });
  }

  private checkHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (headings.length === 0) {
      this.addIssue({
        type: 'error',
        element: 'document',
        message: 'No headings found',
        fix: 'Add heading elements to structure content',
        severity: 'high',
        wcagLevel: 'A',
        rule: '1.3.1'
      });
      return;
    }
    
    // Check for missing h1
    const h1Elements = document.querySelectorAll('h1');
    if (h1Elements.length === 0) {
      this.addIssue({
        type: 'error',
        element: 'document',
        message: 'No h1 heading found',
        fix: 'Add h1 heading to provide page title',
        severity: 'high',
        wcagLevel: 'A',
        rule: '1.3.1'
      });
    }
    
    // Check for multiple h1 elements
    if (h1Elements.length > 1) {
      this.addIssue({
        type: 'warning',
        element: 'document',
        message: 'Multiple h1 headings found',
        fix: 'Use only one h1 per page',
        severity: 'medium',
        wcagLevel: 'A',
        rule: '1.3.1'
      });
    }
    
    // Check heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        this.addIssue({
          type: 'warning',
          element: `${heading.tagName.toLowerCase()}[${index}]`,
          message: `Heading level ${level} follows heading level ${previousLevel}`,
          fix: 'Use proper heading hierarchy',
          severity: 'medium',
          wcagLevel: 'A',
          rule: '1.3.1'
        });
      }
      previousLevel = level;
    });
  }

  private checkTables(): void {
    const tables = document.querySelectorAll('table');
    
    tables.forEach((table, index) => {
      // Check for missing caption
      if (!table.querySelector('caption')) {
        this.addIssue({
          type: 'warning',
          element: `table[${index}]`,
          message: 'Table missing caption',
          fix: 'Add caption element to describe table',
          severity: 'medium',
          wcagLevel: 'A',
          rule: '1.3.1'
        });
      }
      
      // Check for missing headers
      const headers = table.querySelectorAll('th');
      if (headers.length === 0) {
        this.addIssue({
          type: 'error',
          element: `table[${index}]`,
          message: 'Table missing headers',
          fix: 'Add th elements for table headers',
          severity: 'high',
          wcagLevel: 'A',
          rule: '1.3.1'
        });
      }
      
      // Check for proper table structure
      const rows = table.querySelectorAll('tr');
      rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('td, th');
        if (cells.length === 0) {
          this.addIssue({
            type: 'error',
            element: `table[${index}] tr[${rowIndex}]`,
            message: 'Table row has no cells',
            fix: 'Add td or th elements to table row',
            severity: 'high',
            wcagLevel: 'A',
            rule: '1.3.1'
          });
        }
      });
    });
  }

  private checkARIALabels(): void {
    // Check for elements with ARIA roles but missing accessible names
    const elementsWithRoles = document.querySelectorAll('[role]');
    
    elementsWithRoles.forEach((element, index) => {
      const role = element.getAttribute('role');
      const hasLabel = element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby');
      const hasText = element.textContent?.trim();
      
      if (!hasLabel && !hasText) {
        this.addIssue({
          type: 'error',
          element: `${element.tagName.toLowerCase()}[${index}]`,
          message: `Element with role="${role}" missing accessible name`,
          fix: 'Add aria-label or aria-labelledby attribute',
          severity: 'high',
          wcagLevel: 'A',
          rule: '4.1.2'
        });
      }
    });
  }

  private checkKeyboardNavigation(): void {
    // Check for elements that should be keyboard accessible
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    
    interactiveElements.forEach((element, index) => {
      const tabIndex = element.getAttribute('tabindex');
      
      // Check for positive tabindex
      if (tabIndex && parseInt(tabIndex) > 0) {
        this.addIssue({
          type: 'warning',
          element: `${element.tagName.toLowerCase()}[${index}]`,
          message: 'Element has positive tabindex',
          fix: 'Avoid positive tabindex values',
          severity: 'medium',
          wcagLevel: 'A',
          rule: '2.4.3'
        });
      }
      
      // Check for elements that should be focusable but aren't
      if (element.tagName === 'BUTTON' && tabIndex === '-1') {
        this.addIssue({
          type: 'warning',
          element: `button[${index}]`,
          message: 'Button is not keyboard accessible',
          fix: 'Remove tabindex="-1" or make button focusable',
          severity: 'medium',
          wcagLevel: 'A',
          rule: '2.1.1'
        });
      }
    });
  }

  private checkFocusManagement(): void {
    // Check for focus traps
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    
    modals.forEach((modal, index) => {
      const focusableElements = modal.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      
      if (focusableElements.length === 0) {
        this.addIssue({
          type: 'error',
          element: `${modal.tagName.toLowerCase()}[${index}]`,
          message: 'Modal has no focusable elements',
          fix: 'Add focusable elements to modal',
          severity: 'high',
          wcagLevel: 'A',
          rule: '2.1.1'
        });
      }
    });
  }

  private checkColorContrast(): void {
    // This would need a more sophisticated implementation
    // For now, we'll check for common contrast issues
    const elements = document.querySelectorAll('*');
    
    elements.forEach((element, index) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // Check for low contrast colors
      if (color === 'rgb(128, 128, 128)' && backgroundColor === 'rgb(255, 255, 255)') {
        this.addIssue({
          type: 'warning',
          element: `${element.tagName.toLowerCase()}[${index}]`,
          message: 'Element may have low color contrast',
          fix: 'Ensure sufficient color contrast ratio',
          severity: 'medium',
          wcagLevel: 'AA',
          rule: '1.4.3'
        });
      }
    });
  }

  private checkScreenReader(): void {
    // Check for elements that should be announced to screen readers
    const liveRegions = document.querySelectorAll('[aria-live]');
    
    liveRegions.forEach((region, index) => {
      const liveValue = region.getAttribute('aria-live');
      if (liveValue && !['polite', 'assertive', 'off'].includes(liveValue)) {
        this.addIssue({
          type: 'error',
          element: `${region.tagName.toLowerCase()}[${index}]`,
          message: 'Invalid aria-live value',
          fix: 'Use "polite", "assertive", or "off" for aria-live',
          severity: 'high',
          wcagLevel: 'A',
          rule: '4.1.2'
        });
      }
    });
  }

  private addIssue(issue: AccessibilityIssue): void {
    if (issue.type === 'warning' && !this.config.includeWarnings) return;
    if (issue.type === 'info' && !this.config.includeInfo) return;
    
    this.issues.push(issue);
  }

  private generateReport(): AccessibilityAuditResult {
    const errors = this.issues.filter(issue => issue.type === 'error').length;
    const warnings = this.issues.filter(issue => issue.type === 'warning').length;
    const info = this.issues.filter(issue => issue.type === 'info').length;
    const total = errors + warnings + info;
    
    const score = total === 0 ? 100 : Math.max(0, 100 - (errors * 10) - (warnings * 5) - (info * 2));
    
    const recommendations = [
      'Fix all errors to improve accessibility',
      'Address warnings for better user experience',
      'Consider implementing info suggestions',
      'Test with screen readers and keyboard navigation',
      'Use automated accessibility testing tools regularly'
    ];
    
    return {
      score,
      issues: this.issues,
      recommendations,
      summary: {
        errors,
        warnings,
        info,
        total
      }
    };
  }
}

// Singleton instance
export const accessibilityChecker = new AccessibilityChecker();

// Utility functions
export const runAccessibilityAudit = (config?: Partial<AccessibilityConfig>): AccessibilityAuditResult => {
  if (config) {
    Object.assign(accessibilityChecker, config);
  }
  return accessibilityChecker.audit();
};

export const checkElementAccessibility = (element: HTMLElement): AccessibilityIssue[] => {
  const checker = new AccessibilityChecker();
  // This would need to be implemented to check a specific element
  return [];
};
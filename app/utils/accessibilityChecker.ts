// Accessibility Checker Utility for comprehensive accessibility auditing

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  severity: 'high' | 'medium' | 'low';
  rule: string;
  message: string;
  element: HTMLElement | null;
  selector: string;
  line?: number;
  column?: number;
  fix?: string;
  wcagLevel?: 'A' | 'AA' | 'AAA';
  wcagGuideline?: string;
}

interface AccessibilityReport {
  issues: AccessibilityIssue[];
  score: number;
  totalIssues: number;
  errors: number;
  warnings: number;
  info: number;
  timestamp: string;
  url: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
}

interface CheckerConfig {
  enabled: boolean;
  autoCheck: boolean;
  checkInterval: number;
  wcagLevel: 'A' | 'AA' | 'AAA';
  includeWarnings: boolean;
  includeInfo: boolean;
  customRules: AccessibilityRule[];
}

interface AccessibilityRule {
  id: string;
  name: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
  wcagLevel: 'A' | 'AA' | 'AAA';
  check: (element: HTMLElement) => AccessibilityIssue | null;
}

class AccessibilityChecker {
  private config: CheckerConfig;
  private issues: AccessibilityIssue[] = [];
  private checkTimer: NodeJS.Timeout | null = null;
  private rules: AccessibilityRule[] = [];
  private observers: MutationObserver[] = [];

  constructor(config: Partial<CheckerConfig> = {}) {
    this.config = {
      enabled: config.enabled !== false,
      autoCheck: config.autoCheck !== false,
      checkInterval: config.checkInterval || 5000,
      wcagLevel: config.wcagLevel || 'AA',
      includeWarnings: config.includeWarnings !== false,
      includeInfo: config.includeInfo !== false,
      customRules: config.customRules || []
    };

    this.initializeRules();
    this.initialize();
  }

  private initializeRules(): void {
    this.rules = [
      // Images must have alt text
      {
        id: 'img-alt',
        name: 'Images must have alt text',
        description: 'All images must have appropriate alt text',
        severity: 'high',
        wcagLevel: 'A',
        check: (element) => {
          if (element.tagName === 'IMG') {
            const alt = element.getAttribute('alt');
            if (!alt || alt.trim() === '') {
              return {
                id: 'img-alt',
                type: 'error',
                severity: 'high',
                rule: 'img-alt',
                message: 'Image missing alt text',
                element,
                selector: this.getElementSelector(element),
                wcagLevel: 'A',
                wcagGuideline: '1.1.1',
                fix: 'Add alt text to the image element'
              };
            }
          }
          return null;
        }
      },

      // Headings must be in logical order
      {
        id: 'heading-order',
        name: 'Headings must be in logical order',
        description: 'Heading levels must not skip levels',
        severity: 'high',
        wcagLevel: 'A',
        check: (element) => {
          if (element.tagName.match(/^H[1-6]$/)) {
            const level = parseInt(element.tagName[1]);
            const previousHeading = this.getPreviousHeading(element);
            if (previousHeading) {
              const prevLevel = parseInt(previousHeading.tagName[1]);
              if (level > prevLevel + 1) {
                return {
                  id: 'heading-order',
                  type: 'error',
                  severity: 'high',
                  rule: 'heading-order',
                  message: `Heading level ${level} follows level ${prevLevel}, skipping levels`,
                  element,
                  selector: this.getElementSelector(element),
                  wcagLevel: 'A',
                  wcagGuideline: '1.3.1',
                  fix: 'Use heading levels in logical order'
                };
              }
            }
          }
          return null;
        }
      },

      // Form inputs must have labels
      {
        id: 'form-labels',
        name: 'Form inputs must have labels',
        description: 'All form inputs must have associated labels',
        severity: 'high',
        wcagLevel: 'A',
        check: (element) => {
          if (['INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName)) {
            const id = element.getAttribute('id');
            const ariaLabel = element.getAttribute('aria-label');
            const ariaLabelledby = element.getAttribute('aria-labelledby');
            
            if (!id && !ariaLabel && !ariaLabelledby) {
              const label = element.closest('label');
              if (!label) {
                return {
                  id: 'form-labels',
                  type: 'error',
                  severity: 'high',
                  rule: 'form-labels',
                  message: 'Form input missing label',
                  element,
                  selector: this.getElementSelector(element),
                  wcagLevel: 'A',
                  wcagGuideline: '1.3.1',
                  fix: 'Add a label element or aria-label attribute'
                };
              }
            }
          }
          return null;
        }
      },

      // Links must have descriptive text
      {
        id: 'link-text',
        name: 'Links must have descriptive text',
        description: 'Link text must be descriptive and meaningful',
        severity: 'medium',
        wcagLevel: 'A',
        check: (element) => {
          if (element.tagName === 'A') {
            const text = element.textContent?.trim();
            const ariaLabel = element.getAttribute('aria-label');
            const title = element.getAttribute('title');
            
            if (!text || text.length < 3) {
              if (!ariaLabel && !title) {
                return {
                  id: 'link-text',
                  type: 'warning',
                  severity: 'medium',
                  rule: 'link-text',
                  message: 'Link text is too short or missing',
                  element,
                  selector: this.getElementSelector(element),
                  wcagLevel: 'A',
                  wcagGuideline: '2.4.4',
                  fix: 'Provide descriptive link text or aria-label'
                };
              }
            }
          }
          return null;
        }
      },

      // Color contrast
      {
        id: 'color-contrast',
        name: 'Color contrast must meet WCAG standards',
        description: 'Text must have sufficient color contrast',
        severity: 'high',
        wcagLevel: 'AA',
        check: (element) => {
          const textColor = this.getComputedColor(element, 'color');
          const backgroundColor = this.getComputedColor(element, 'background-color');
          
          if (textColor && backgroundColor) {
            const contrast = this.calculateContrast(textColor, backgroundColor);
            const requiredContrast = this.config.wcagLevel === 'AAA' ? 7 : 4.5;
            
            if (contrast < requiredContrast) {
              return {
                id: 'color-contrast',
                type: 'error',
                severity: 'high',
                rule: 'color-contrast',
                message: `Color contrast ratio ${contrast.toFixed(2)} is below required ${requiredContrast}`,
                element,
                selector: this.getElementSelector(element),
                wcagLevel: this.config.wcagLevel,
                wcagGuideline: '1.4.3',
                fix: 'Increase color contrast between text and background'
              };
            }
          }
          return null;
        }
      },

      // Focus management
      {
        id: 'focus-management',
        name: 'Focus must be visible and manageable',
        description: 'Interactive elements must be focusable and have visible focus indicators',
        severity: 'high',
        wcagLevel: 'A',
        check: (element) => {
          if (this.isInteractiveElement(element)) {
            const tabIndex = element.getAttribute('tabindex');
            if (tabIndex === '-1' && !element.hasAttribute('aria-hidden')) {
              return {
                id: 'focus-management',
                type: 'warning',
                severity: 'medium',
                rule: 'focus-management',
                message: 'Interactive element is not focusable',
                element,
                selector: this.getElementSelector(element),
                wcagLevel: 'A',
                wcagGuideline: '2.1.1',
                fix: 'Make element focusable or hide from screen readers'
              };
            }
          }
          return null;
        }
      },

      // ARIA attributes
      {
        id: 'aria-attributes',
        name: 'ARIA attributes must be valid',
        description: 'ARIA attributes must be properly used and valid',
        severity: 'high',
        wcagLevel: 'A',
        check: (element) => {
          const ariaAttributes = Array.from(element.attributes)
            .filter(attr => attr.name.startsWith('aria-'));
          
          for (const attr of ariaAttributes) {
            if (!this.isValidAriaAttribute(attr.name, attr.value)) {
              return {
                id: 'aria-attributes',
                type: 'error',
                severity: 'high',
                rule: 'aria-attributes',
                message: `Invalid ARIA attribute: ${attr.name}="${attr.value}"`,
                element,
                selector: this.getElementSelector(element),
                wcagLevel: 'A',
                wcagGuideline: '4.1.2',
                fix: 'Use valid ARIA attribute values'
              };
            }
          }
          return null;
        }
      }
    ];

    // Add custom rules
    this.rules.push(...this.config.customRules);
  }

  private initialize(): void {
    if (typeof window === 'undefined' || !this.config.enabled) return;

    this.setupAutoCheck();
    this.setupMutationObserver();
  }

  private setupAutoCheck(): void {
    if (!this.config.autoCheck) return;

    // Initial check
    this.checkAll();

    // Periodic checks
    this.checkTimer = setInterval(() => {
      this.checkAll();
    }, this.config.checkInterval);
  }

  private setupMutationObserver(): void {
    const observer = new MutationObserver((mutations) => {
      let shouldCheck = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldCheck = true;
        }
      });

      if (shouldCheck) {
        this.checkAll();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    this.observers.push(observer);
  }

  private checkAll(): void {
    this.issues = [];
    const elements = document.querySelectorAll('*');
    
    elements.forEach((element) => {
      this.checkElement(element as HTMLElement);
    });

    this.filterIssues();
  }

  private checkElement(element: HTMLElement): void {
    this.rules.forEach((rule) => {
      try {
        const issue = rule.check(element);
        if (issue) {
          this.issues.push(issue);
        }
      } catch (error) {
        console.warn(`Error checking rule ${rule.id}:`, error);
      }
    });
  }

  private filterIssues(): void {
    this.issues = this.issues.filter(issue => {
      if (issue.type === 'warning' && !this.config.includeWarnings) return false;
      if (issue.type === 'info' && !this.config.includeInfo) return false;
      if (issue.wcagLevel && this.getWcagLevelPriority(issue.wcagLevel) > this.getWcagLevelPriority(this.config.wcagLevel)) return false;
      return true;
    });
  }

  private getWcagLevelPriority(level: string): number {
    switch (level) {
      case 'A': return 1;
      case 'AA': return 2;
      case 'AAA': return 3;
      default: return 0;
    }
  }

  private getPreviousHeading(element: HTMLElement): HTMLElement | null {
    let current = element.previousElementSibling;
    while (current) {
      if (current.tagName.match(/^H[1-6]$/)) {
        return current as HTMLElement;
      }
      current = current.previousElementSibling;
    }
    return null;
  }

  private isInteractiveElement(element: HTMLElement): boolean {
    const interactiveTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
    const interactiveRoles = ['button', 'link', 'menuitem', 'tab', 'option'];
    
    return interactiveTags.includes(element.tagName) ||
           interactiveRoles.includes(element.getAttribute('role') || '');
  }

  private isValidAriaAttribute(name: string, value: string): boolean {
    // Basic validation for common ARIA attributes
    const validValues: Record<string, string[]> = {
      'aria-expanded': ['true', 'false'],
      'aria-selected': ['true', 'false'],
      'aria-checked': ['true', 'false', 'mixed'],
      'aria-disabled': ['true', 'false'],
      'aria-hidden': ['true', 'false'],
      'aria-invalid': ['true', 'false', 'grammar', 'spelling'],
      'aria-level': ['1', '2', '3', '4', '5', '6'],
      'aria-orientation': ['horizontal', 'vertical'],
      'aria-sort': ['ascending', 'descending', 'none', 'other']
    };

    if (validValues[name]) {
      return validValues[name].includes(value);
    }

    return true; // Assume valid for other attributes
  }

  private getComputedColor(element: HTMLElement, property: string): string | null {
    const computed = window.getComputedStyle(element);
    return computed.getPropertyValue(property) || null;
  }

  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd parse the colors and calculate luminance
    return 4.5; // Placeholder
  }

  private getElementSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`;
    }
    
    let selector = element.tagName.toLowerCase();
    if (element.className) {
      selector += '.' + element.className.split(' ').join('.');
    }
    
    return selector;
  }

  // Public methods
  public check(): AccessibilityReport {
    this.checkAll();
    
    const errors = this.issues.filter(i => i.type === 'error').length;
    const warnings = this.issues.filter(i => i.type === 'warning').length;
    const info = this.issues.filter(i => i.type === 'info').length;
    
    const score = Math.max(0, 100 - (errors * 10) - (warnings * 5) - (info * 2));
    
    return {
      issues: [...this.issues],
      score,
      totalIssues: this.issues.length,
      errors,
      warnings,
      info,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      wcagLevel: this.config.wcagLevel
    };
  }

  public getIssues(): AccessibilityIssue[] {
    return [...this.issues];
  }

  public getIssuesByType(type: 'error' | 'warning' | 'info'): AccessibilityIssue[] {
    return this.issues.filter(issue => issue.type === type);
  }

  public getIssuesBySeverity(severity: 'high' | 'medium' | 'low'): AccessibilityIssue[] {
    return this.issues.filter(issue => issue.severity === severity);
  }

  public addCustomRule(rule: AccessibilityRule): void {
    this.rules.push(rule);
  }

  public removeCustomRule(ruleId: string): void {
    this.rules = this.rules.filter(rule => rule.id !== ruleId);
  }

  public updateConfig(newConfig: Partial<CheckerConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.initializeRules();
  }

  public destroy(): void {
    if (this.checkTimer) {
      clearInterval(this.checkTimer);
      this.checkTimer = null;
    }
    
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Create default instance
export const accessibilityChecker = new AccessibilityChecker();

// Export the class and types
export { AccessibilityChecker, type AccessibilityIssue, type AccessibilityReport, type CheckerConfig, type AccessibilityRule };

// Utility functions
export const checkAccessibility = () => {
  return accessibilityChecker.check();
};

export const getAccessibilityIssues = () => {
  return accessibilityChecker.getIssues();
};

export const addCustomAccessibilityRule = (rule: AccessibilityRule) => {
  accessibilityChecker.addCustomRule(rule);
};
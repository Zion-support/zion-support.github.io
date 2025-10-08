/**
 * Accessibility Enhancement Utilities
 * Provides comprehensive accessibility features and monitoring
 */

export interface AccessibilityMetrics {
  totalIssues: number;
  issuesByType: Record<string, number>;
  issuesBySeverity: Record<string, number>;
  lastCheckTime: number;
  score: number;
}

export interface AccessibilityIssue {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  element: HTMLElement;
  message: string;
  suggestion: string;
}

export class AccessibilityEnhancer {
  private static instance: AccessibilityEnhancer;
  private issues: AccessibilityIssue[] = [];
  private observers: MutationObserver[] = [];
  private isMonitoring = false;

  private constructor() {}

  public static getInstance(): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer();
    }
    return AccessibilityEnhancer.instance;
  }

  public initialize(): void {
    if (this.isMonitoring) return;

    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderSupport();
    this.setupColorContrastMonitoring();
    this.setupARIAValidation();
    this.setupImageAltTextValidation();
    this.setupFormAccessibility();

    this.isMonitoring = true;
  }

  private setupKeyboardNavigation(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('keydown', event => {
      //Skip to main content
      if (event.key === 'Tab' && event.ctrlKey) {
//         const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          event.preventDefault();
        }
      }

      //Escape key handling
      if (event.key === 'Escape') {
        const modal = document.querySelector(
          '[role="dialog"]:not([aria-hidden="true"])'
        );
        if (modal) {
          const closeButton = modal.querySelector(
            '[aria-label*="close"], [aria-label*="Close"]'
          );
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
      }
    });
  }

  private setupFocusManagement(): void {
    if (typeof document === 'undefined') return;

    //Track focus changes
    document.addEventListener('focusin', event => {
      const element = event.target as HTMLElement;
      this.ensureFocusVisible(element);
    });

    //Trap focus in modals
    document.addEventListener('keydown', event => {
      if (event.key === 'Tab') {
        const modal = document.querySelector(
          '[role="dialog"]:not([aria-hidden="true"])'
        );
        if (modal) {
          this.trapFocusInModal(modal as HTMLElement, event);
        }
      }
    });
  }

  private ensureFocusVisible(element: HTMLElement): void {
    //Add focus-visible class for better focus indication
    element.classList.add('focus-visible');

    //Remove focus-visible class when focus is lost
    element.addEventListener(
      'focusout',
      () => {
        element.classList.remove('focus-visible');
      },
      { once: true }
    );
  }

  private trapFocusInModal(modal: HTMLElement, event: KeyboardEvent): void {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

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

  private setupScreenReaderSupport(): void {
    if (typeof document === 'undefined') return;

    //Create live region for announcements
    let liveRegion = document.getElementById('a11y-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'a11y-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
    }

    //Announce page changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedNode = mutation.addedNodes[0] as HTMLElement;
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
            if (heading) {
              this.announceToScreenReader(heading.textContent || '');
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    this.observers.push(observer);
  }

  private announceToScreenReader(message: string): void {
    const liveRegion = document.getElementById('a11y-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  private setupColorContrastMonitoring(): void {
    if (typeof document === 'undefined') return;

    const checkContrast = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(element => {
        const htmlElement = element as HTMLElement;
        const styles = window.getComputedStyle(htmlElement);
//         const color = styles.color;
//         const backgroundColor = styles.backgroundColor;

        if (
          color &&
          backgroundColor &&
          color !== 'rgba(0, 0, 0, 0)' &&
          backgroundColor !== 'rgba(0, 0, 0, 0)'
        ) {
          const contrast = this.calculateContrast(color, backgroundColor);
          if (contrast < 4.5) {
            this.addIssue({
              type: 'color-contrast',
              severity: contrast < 3 ? 'high' : 'medium',
              element: htmlElement,
              message: `Low color contrast: ${contrast.toFixed(2)}:1`,
              suggestion:
                'Increase color contrast to at least 4.5:1 for normal text',
            });
          }
        }
      });
    };

    //Check contrast on page load and when styles change
    checkContrast();
    const observer = new MutationObserver(checkContrast);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      subtree: true,
    });

    this.observers.push(observer);
  }

  private calculateContrast(_color1: string, _color2: string): number {
    //Simplified contrast calculation
    //In a real implementation, you'd use a proper color contrast library
    return 4.5; //Placeholder
  }

  private setupARIAValidation(): void {
    if (typeof document === 'undefined') return;

    const validateARIA = () => {
      //Check for missing aria-labels on interactive elements
      const interactiveElements = document.querySelectorAll(
        'button, input, select, textarea, a[href]'
      );
      interactiveElements.forEach(element => {
        const htmlElement = element as HTMLElement;
        const hasLabel =
          htmlElement.getAttribute('aria-label') ||
          htmlElement.getAttribute('aria-labelledby') ||
          htmlElement.textContent?.trim();

        if (!hasLabel) {
          this.addIssue({
            type: 'missing-aria-label',
            severity: 'medium',
            element: htmlElement,
            message: 'Interactive element missing accessible name',
            suggestion:
              'Add aria-label, aria-labelledby, or visible text content',
          });
        }
      });

      //Check for invalid ARIA attributes
      const elementsWithARIA = document.querySelectorAll('[aria-*]');
      elementsWithARIA.forEach(element => {
        const htmlElement = element as HTMLElement;
        const attributes = Array.from(htmlElement.attributes);

        attributes.forEach(attr => {
          if (attr.name.startsWith('aria-')) {
            if (!this.isValidARIAAttribute(attr.name, attr.value)) {
              this.addIssue({
                type: 'invalid-aria',
                severity: 'low',
                element: htmlElement,
                message: `Invalid ARIA attribute: ${attr.name}="${attr.value}"`,
                suggestion: 'Use valid ARIA attribute values',
              });
            }
          }
        });
      });
    };

    validateARIA();
    const observer = new MutationObserver(validateARIA);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    this.observers.push(observer);
  }

  private isValidARIAAttribute(_name: string, _value: string): boolean {
    //Simplified ARIA validation
    //In a real implementation, you'd use a proper ARIA validation library
    return true; //Placeholder
  }

  private setupImageAltTextValidation(): void {
    if (typeof document === 'undefined') return;

    const validateImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
//         const alt = img.getAttribute('alt');
        if (!alt) {
          this.addIssue({
            type: 'missing-alt-text',
            severity: 'high',
            element: img,
            message: 'Image missing alt text',
            suggestion: 'Add descriptive alt text for screen readers',
          });
        } else if (alt === 'image' || alt === 'picture') {
          this.addIssue({
            type: 'generic-alt-text',
            severity: 'medium',
            element: img,
            message: 'Image has generic alt text',
            suggestion: 'Use descriptive alt text instead of generic terms',
          });
        }
      });
    };

    validateImages();
    const observer = new MutationObserver(validateImages);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    this.observers.push(observer);
  }

  private setupFormAccessibility(): void {
    if (typeof document === 'undefined') return;

    const validateForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
          const htmlInput = input as HTMLInputElement;
//           const id = htmlInput.id;
          const label = form.querySelector(`label[for="${id}"]`);

          if (
            !label &&
            !htmlInput.getAttribute('aria-label') &&
            !htmlInput.getAttribute('aria-labelledby')
          ) {
            this.addIssue({
              type: 'missing-form-label',
              severity: 'high',
              element: htmlInput,
              message: 'Form input missing label',
              suggestion: 'Add a label element or aria-label attribute',
            });
          }
        });
      });
    };

    validateForms();
    const observer = new MutationObserver(validateForms);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    this.observers.push(observer);
  }

  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);

    //Limit issues to prevent memory leaks
    if (this.issues.length > 1000) {
      this.issues = this.issues.slice(-500);
    }
  }

  public getAccessibilityMetrics(): AccessibilityMetrics {
    const issuesByType: Record<string, number> = {};
    const issuesBySeverity: Record<string, number> = {};

    this.issues.forEach(issue => {
      issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
      issuesBySeverity[issue.severity] =
        (issuesBySeverity[issue.severity] || 0) + 1;
    });

//     const score = this.calculateAccessibilityScore();

    return {
      totalIssues: this.issues.length,
      issuesByType,
      issuesBySeverity,
      lastCheckTime: Date.now(),
      score,
    };
  }

  private calculateAccessibilityScore(): number {
    if (this.issues.length === 0) return 100;

    const criticalIssues = this.issues.filter(
      issue => issue.severity === 'critical'
    ).length;
    const highIssues = this.issues.filter(
      issue => issue.severity === 'high'
    ).length;
    const mediumIssues = this.issues.filter(
      issue => issue.severity === 'medium'
    ).length;
    const lowIssues = this.issues.filter(
      issue => issue.severity === 'low'
    ).length;

    let score = 100;
    score -= criticalIssues * 20;
    score -= highIssues * 10;
    score -= mediumIssues * 5;
    score -= lowIssues * 1;

    return Math.max(0, score);
  }

  public getIssues(): AccessibilityIssue[] {
    return [...this.issues];
  }

  public clearIssues(): void {
    this.issues = [];
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }
}

// Export singleton instance
export const accessibilityEnhancer = AccessibilityEnhancer.getInstance();

export default accessibilityEnhancer;

<<<<<<< HEAD
/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility improvements for web applications
 */

export interface AccessibilityConfig {
=======
// Accessibility Enhancement Utilities
export interface AccessibilityOptions {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusIndicators: boolean;
  enableAriaLabels: boolean;
}

export const defaultAccessibilityOptions: AccessibilityOptions = {
  enableKeyboardNavigation: true,
  enableScreenReader: true,
  enableHighContrast: false,
  enableFocusIndicators: true,
  enableAriaLabels: true,
};

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;

  constructor(options: Partial<AccessibilityOptions> = {}) {
    this.options = { ...defaultAccessibilityOptions, ...options };
  }

  public enhanceElement(element: HTMLElement): void {
    if (this.options.enableKeyboardNavigation) {
      this.addKeyboardNavigation(element);
    }
    
    if (this.options.enableScreenReader) {
      this.addScreenReaderSupport(element);
    }
    
    if (this.options.enableFocusIndicators) {
      this.addFocusIndicators(element);
    }
    
    if (this.options.enableAriaLabels) {
      this.addAriaLabels(element);
    }
  }

=======
  private addKeyboardNavigation(element: HTMLElement): void {
    element.setAttribute('tabindex', '0');
  }

  private addScreenReaderSupport(element: HTMLElement): void {
    if (!element.getAttribute('aria-label')) {
      const text = element.textContent || element.getAttribute('alt') || 'Interactive element';
      element.setAttribute('aria-label', text);
    }
  }

  private addFocusIndicators(element: HTMLElement): void {
    element.style.outline = '2px solid #0066cc';
    element.style.outlineOffset = '2px';
  }

  private addAriaLabels(element: HTMLElement): void {
    if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label')) {
      element.setAttribute('aria-label', element.textContent || 'Button');
    }
  }
}

export function enhanceAccessibility(
  selector: string, 
  options: Partial<AccessibilityOptions> = {}
): void {
  const enhancer = new AccessibilityEnhancer(options);
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    if (element instanceof HTMLElement) {
      enhancer.enhanceElement(element);
    }
  });
}

export default AccessibilityEnhancer;
=======
interface AccessibilityMetrics {
  colorContrastIssues: number;
  keyboardNavigationScore: number;
  screenReaderScore: number;
  ariaImplementationScore: number;
  overallScore: number;
  imagesWithoutAlt: number;
  linksWithoutText: number;
  headingsWithoutContent: number;
}

class AccessibilityEnhancer {
  private metrics: AccessibilityMetrics = {
    colorContrastIssues: 0,
    keyboardNavigationScore: 0,
    screenReaderScore: 0,
    ariaImplementationScore: 0,
    overallScore: 0,
    imagesWithoutAlt: 0,
    linksWithoutText: 0,
    headingsWithoutContent: 0
  };

  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex: number = 0;
  private observers: MutationObserver[] = [];

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupMetricsCollection();
    this.scanAccessibility();
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        this.navigateFocus(e.shiftKey ? -1 : 1);
      }
    });
  }

  private setupScreenReaderSupport(): void {
    // Create live regions for screen reader announcements
    this.createLiveRegions();
    
    // Enhance buttons with aria-labels
    this.enhanceButtons();
  }

  private createLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.id = 'live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);

    const assertiveRegion = document.createElement('div');
    assertiveRegion.id = 'assertive-live-region';
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.style.position = 'absolute';
    assertiveRegion.style.left = '-10000px';
    assertiveRegion.style.width = '1px';
    assertiveRegion.style.height = '1px';
    assertiveRegion.style.overflow = 'hidden';
    document.body.appendChild(assertiveRegion);
  }

  private enhanceButtons(): void {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', button.textContent || 'Button');
      }
    });
  }

  private setupMetricsCollection(): void {
    setInterval(() => {
      this.scanAccessibility();
    }, 5000);
  }

  public announce(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  private calculateScores(): void {
    this.metrics.keyboardNavigationScore = this.calculateKeyboardScore();
    this.metrics.screenReaderScore = this.calculateScreenReaderScore();
    this.metrics.overallScore = Math.round(
      (this.metrics.keyboardNavigationScore + this.metrics.screenReaderScore) / 2
    );
  }

  public focusElement(element: HTMLElement): void {
    element.focus();
    this.currentFocusIndex = this.focusableElements.indexOf(element);
  }

  private calculateKeyboardScore(): number {
    const focusableElements = this.getFocusableElements();
    const totalElements = document.querySelectorAll('*').length;
    if (totalElements === 0) return 0;
    const focusableRatio = focusableElements.length / totalElements;
    return Math.min(100, Math.round(focusableRatio * 100));
  }

  private calculateScreenReaderScore(): number {
    let score = 100;
    score -= this.metrics.imagesWithoutAlt * 5;
    score -= this.metrics.linksWithoutText * 3;
    score -= this.metrics.headingsWithoutContent * 2;
    return Math.max(0, score);
  }

  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];
    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  private navigateFocus(direction: number): void {
    this.updateFocusableElements();
    if (this.focusableElements.length === 0) return;

    this.currentFocusIndex += direction;
    if (this.currentFocusIndex < 0) {
      this.currentFocusIndex = this.focusableElements.length - 1;
    } else if (this.currentFocusIndex >= this.focusableElements.length) {
      this.currentFocusIndex = 0;
    }

    this.focusElement(this.focusableElements[this.currentFocusIndex]);
  }

  private updateFocusableElements(): void {
    this.focusableElements = this.getFocusableElements();
  }

  private scanAccessibility(): void {
    this.scanImages();
    this.scanLinks();
    this.scanHeadings();
    this.calculateScores();
  }

  private scanImages(): void {
    const images = document.querySelectorAll('img');
    this.metrics.imagesWithoutAlt = Array.from(images).filter(img => !img.alt).length;
  }

  private scanLinks(): void {
    const links = document.querySelectorAll('a');
    this.metrics.linksWithoutText = Array.from(links).filter(link => !link.textContent?.trim()).length;
  }

  private scanHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.metrics.headingsWithoutContent = Array.from(headings).filter(heading => !heading.textContent?.trim()).length;
  }

  private announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById(
      priority === 'assertive' ? 'assertive-live-region' : 'live-region'
    );
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  getReport(): string {
    const metrics = this.getMetrics();
    return `
Accessibility Report:
- Color Contrast Score: ${metrics.colorContrastIssues}/100
- Keyboard Navigation Score: ${metrics.keyboardNavigationScore}/100
- Screen Reader Score: ${metrics.screenReaderScore}/100
- ARIA Implementation Score: ${metrics.ariaImplementationScore}/100
- Overall Score: ${metrics.overallScore}/100

Recommendations:
- Focus on improving color contrast for better accessibility
- Ensure all interactive elements are keyboard accessible
- Implement proper ARIA labels and roles
- Test with screen readers regularly
`;
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export utility functions
export const announceToScreenReader = (message: string) => {
  accessibilityEnhancer.announce(message);
};

export const focusElement = (element: HTMLElement) => {
  accessibilityEnhancer.focusElement(element);
};

export const updateFocusableElements = () => {
  // This method is now handled internally by the class
  accessibilityEnhancer.getMetrics();
};
>>>>>>> cursor/fix-errors-and-merge-to-main-529a

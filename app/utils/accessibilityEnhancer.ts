/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility improvements for web applications
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableFocusManagement: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  announceChanges: boolean;
  enableColorContrast: boolean;
  enableAriaLabels: boolean;
}

export interface AccessibilityMetrics {
  focusableElements: number;
  imagesWithoutAlt: number;
  linksWithoutText: number;
  headingsWithoutContent: number;
  colorContrastIssues: number;
  keyboardNavigationScore: number;
  screenReaderScore: number;
  ariaImplementationScore: number;
  overallScore: number;
}

export class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private observers: MutationObserver[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableFocusManagement: true,
      enableHighContrast: true,
      enableReducedMotion: true,
      announceChanges: true,
      enableColorContrast: true,
      enableAriaLabels: true,
      ...config
    };

    this.metrics = {
      focusableElements: 0,
      imagesWithoutAlt: 0,
      linksWithoutText: 0,
      headingsWithoutContent: 0,
      colorContrastIssues: 0,
      keyboardNavigationScore: 0,
      screenReaderScore: 0,
      ariaImplementationScore: 0,
      overallScore: 0
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupFocusManagement();
    this.setupHighContrast();
    this.setupReducedMotion();
    this.setupColorContrast();
    this.setupAriaLabels();
    this.setupObservers();
    this.analyzeAccessibility();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add skip links
    this.addSkipLinks();
    
    // Enhance form labels
    this.enhanceFormLabels();
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    document.addEventListener('focusin', (event) => {
      this.announceFocusChange(event.target as HTMLElement);
    });
  }

  private setupHighContrast(): void {
    if (!this.config.enableHighContrast) return;

    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
  }

  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }
  }

  private setupColorContrast(): void {
    if (!this.config.enableColorContrast) return;

    // Analyze color contrast
    this.analyzeColorContrast();
  }

  private setupAriaLabels(): void {
    if (!this.config.enableAriaLabels) return;

    // Add ARIA labels to interactive elements
    this.addAriaLabels();
  }

  private setupObservers(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          this.analyzeAccessibility();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (event.shiftKey) {
      // Shift + Tab - move backwards
      if (currentIndex > 0) {
        focusableElements[currentIndex - 1].focus();
      } else {
        focusableElements[focusableElements.length - 1].focus();
      }
    } else {
      // Tab - move forwards
      if (currentIndex < focusableElements.length - 1) {
        focusableElements[currentIndex + 1].focus();
      } else {
        focusableElements[0].focus();
      }
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];

    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
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
    `;

    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      const element = input as HTMLElement;
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${element.id}"]`);
        if (label) {
          element.setAttribute('aria-labelledby', label.id || `label-${element.id}`);
        }
      }
    });
  }

  private announceFocusChange(element: HTMLElement): void {
    if (!this.config.announceChanges) return;

    const announcement = this.getFocusAnnouncement(element);
    if (announcement) {
      this.announceToScreenReader(announcement);
    }
  }

  private getFocusAnnouncement(element: HTMLElement): string | null {
    const role = element.getAttribute('role');
    const ariaLabel = element.getAttribute('aria-label');
    const textContent = element.textContent?.trim();

    if (ariaLabel) return ariaLabel;
    if (textContent) return textContent;
    if (role) return `${role} element`;

    return null;
  }

  private announceToScreenReader(message: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }

  private addAriaLabels(): void {
    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      const element = button as HTMLElement;
      if (!element.textContent?.trim()) {
        const icon = element.querySelector('svg, img');
        if (icon) {
          element.setAttribute('aria-label', 'Button');
        }
      }
    });

    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach((link) => {
      const element = link as HTMLElement;
      if (!element.textContent?.trim()) {
        const icon = element.querySelector('svg, img');
        if (icon) {
          element.setAttribute('aria-label', 'Link');
        }
      }
    });
  }

  private analyzeColorContrast(): void {
    const elements = document.querySelectorAll('*');
    let issues = 0;

    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element as HTMLElement);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;

      if (color && backgroundColor && color !== backgroundColor) {
        const contrast = this.calculateContrast(color, backgroundColor);
        if (contrast < 4.5) {
          issues++;
        }
      }
    });

    this.metrics.colorContrastIssues = issues;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private calculateContrast(_color1: string, _color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd parse the colors and calculate luminance
    return 4.5; // Placeholder
  }

  private analyzeAccessibility(): void {
    this.metrics.focusableElements = this.getFocusableElements().length;
    this.metrics.imagesWithoutAlt = this.countImagesWithoutAlt();
    this.metrics.linksWithoutText = this.countLinksWithoutText();
    this.metrics.headingsWithoutContent = this.countHeadingsWithoutContent();
    
    this.calculateScores();
  }

  private countImagesWithoutAlt(): number {
    const images = document.querySelectorAll('img');
    let count = 0;
    images.forEach((img) => {
      if (!img.alt) count++;
    });
    return count;
  }

  private countLinksWithoutText(): number {
    const links = document.querySelectorAll('a');
    let count = 0;
    links.forEach((link) => {
      if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
        count++;
      }
    });
    return count;
  }

  private countHeadingsWithoutContent(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let count = 0;
    headings.forEach((heading) => {
      if (!heading.textContent?.trim()) {
        count++;
      }
    });
    return count;
  }

  private calculateScores(): void {
    const totalElements = document.querySelectorAll('*').length;
    const focusableScore = Math.min(100, (this.metrics.focusableElements / totalElements) * 100);
    const screenReaderScore = Math.max(0, 100 - (this.metrics.imagesWithoutAlt + this.metrics.linksWithoutText) * 10);
    const ariaScore = Math.max(0, 100 - this.metrics.headingsWithoutContent * 5);

    this.metrics.keyboardNavigationScore = focusableScore;
    this.metrics.screenReaderScore = screenReaderScore;
    this.metrics.ariaImplementationScore = ariaScore;
    this.metrics.overallScore = (focusableScore + screenReaderScore + ariaScore) / 3;
  }

  public getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  public updateConfig(newConfig: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.initialize();
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export a default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();
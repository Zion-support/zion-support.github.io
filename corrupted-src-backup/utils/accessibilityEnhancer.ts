/**
 * Accessibility enhancer for comprehensive accessibility improvements
 */

interface AccessibilityConfig {
  enableFocusManagement: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
}

interface AccessibilityMetric {
  name: string;
  value: number;
  threshold: number;
  status: 'pass' | 'fail' | 'warning';
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetric[] = [];
  private isInitialized = false;
  private focusTrapElements: HTMLElement[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableFocusManagement: true,
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      ...config,
    };
  }

  public initialize(): void {
    if (this.isInitialized) return;

    this.setupFocusManagement();
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupReducedMotion();
    this.measureAccessibilityMetrics();

    this.isInitialized = true;
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .focus-trap {
        position: relative;
      }
    `;
    document.head.appendChild(style);
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', event => {
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add skip links
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

  private setupHighContrast(): void {
    if (!this.config.enableHighContrast) return;

    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        * {
          background-color: #000 !important;
          color: #fff !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;

    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(
      document.activeElement as HTMLElement
    );

    if (event.shiftKey) {
      // Shift + Tab: move backwards
      if (currentIndex === 0) {
        event.preventDefault();
        focusableElements[focusableElements.length - 1]?.focus();
      }
    } else {
      // Tab: move forwards
      if (currentIndex === focusableElements.length - 1) {
        event.preventDefault();
        focusableElements[0]?.focus();
      }
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const selectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return Array.from(document.querySelectorAll(selectors)) as HTMLElement[];
  }

  private measureAccessibilityMetrics(): void {
    this.metrics = [
      {
        name: 'Focusable Elements',
        value: this.getFocusableElements().length,
        threshold: 10,
        status: 'pass',
      },
      {
        name: 'Images with Alt Text',
        value: this.getImagesWithAltText().length,
        threshold: 0,
        status: 'pass',
      },
      {
        name: 'Headings Structure',
        value: this.getHeadingStructureScore(),
        threshold: 80,
        status: 'pass',
      },
    ];
  }

  private getImagesWithAltText(): HTMLImageElement[] {
//     const images = document.querySelectorAll('img');
    return Array.from(images).filter(img => img.alt && img.alt.trim() !== '');
  }

  private getHeadingStructureScore(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 100;
    let previousLevel = 0;

    headings.forEach(heading => {
//       const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        score -= 20; // Penalty for skipped heading levels
      }
      previousLevel = level;
    });

    return Math.max(0, score);
  }

  public getMetrics(): AccessibilityMetric[] {
    return this.metrics;
  }

  public getOverallScore(): number {
    const totalScore = this.metrics.reduce(
      (sum, metric) => sum + metric.value,
      0
    );
    const maxScore = this.metrics.reduce(
      (sum, metric) => sum + metric.threshold,
      0
    );
    return Math.round((totalScore / maxScore) * 100);
  }

  public destroy(): void {
    this.isInitialized = false;
    this.metrics = [];
    this.focusTrapElements = [];
  }
}

export default AccessibilityEnhancer;

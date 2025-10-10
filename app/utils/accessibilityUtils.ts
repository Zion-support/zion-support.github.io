/**
 * Accessibility Utilities
 * Provides accessibility enhancements and monitoring
 */

export interface AccessibilityMetrics {
  overallScore: number;
  colorContrast: number;
  keyboardNavigation: number;
  screenReaderCompatibility: number;
  focusManagement: number;
  ariaLabels: number;
  headingStructure: number;
  altText: number;
}

export interface AccessibilityConfig {
  enableHighContrast: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableFocusManagement: boolean;
  enableAriaLabels: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics | null = null;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableHighContrast: true,
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableFocusManagement: true,
      enableAriaLabels: true,
      ...config
    };
  }

  /**
   * Initialize accessibility enhancements
   */
  public initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupAriaLabels();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      // Skip link navigation
      if (event.key === 'Tab') {
        const focusableElements = this.getFocusableElements();
        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
        
        if (event.shiftKey) {
          // Shift + Tab - move backwards
          if (currentIndex <= 0) {
            event.preventDefault();
            focusableElements[focusableElements.length - 1]?.focus();
          }
        } else {
          // Tab - move forwards
          if (currentIndex >= focusableElements.length - 1) {
            event.preventDefault();
            focusableElements[0]?.focus();
          }
        }
      }
    });
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
      
      *:focus {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add screen reader only text
    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;

    // Add high contrast mode toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'High Contrast';
    toggle.className = 'accessibility-toggle';
    toggle.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 9999;
      padding: 8px 16px;
      background: #000;
      color: #fff;
      border: 2px solid #fff;
      cursor: pointer;
    `;
    
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });
    
    document.body.appendChild(toggle);
  }

  /**
   * Setup ARIA labels
   */
  private setupAriaLabels(): void {
    if (!this.config.enableAriaLabels) return;

    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element) => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent?.trim();
        if (text) {
          element.setAttribute('aria-label', text);
        }
      }
    });
  }

  /**
   * Get focusable elements
   */
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

  /**
   * Analyze accessibility metrics
   */
  public analyzeAccessibility(): AccessibilityMetrics {
    const metrics: AccessibilityMetrics = {
      overallScore: 0,
      colorContrast: this.checkColorContrast(),
      keyboardNavigation: this.checkKeyboardNavigation(),
      screenReaderCompatibility: this.checkScreenReaderCompatibility(),
      focusManagement: this.checkFocusManagement(),
      ariaLabels: this.checkAriaLabels(),
      headingStructure: this.checkHeadingStructure(),
      altText: this.checkAltText()
    };

    // Calculate overall score
    const scores = Object.values(metrics).filter(score => typeof score === 'number' && score !== metrics.overallScore);
    metrics.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    this.metrics = metrics;
    return metrics;
  }

  private checkColorContrast(): number {
    // Simplified color contrast check
    const elements = document.querySelectorAll('*');
    let score = 100;
    
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic contrast check (simplified)
      if (color === backgroundColor) {
        score -= 10;
      }
    });
    
    return Math.max(0, score);
  }

  private checkKeyboardNavigation(): number {
    const focusableElements = this.getFocusableElements();
    const totalElements = document.querySelectorAll('button, a, input, select, textarea').length;
    
    return focusableElements.length > 0 ? (focusableElements.length / totalElements) * 100 : 0;
  }

  private checkScreenReaderCompatibility(): number {
    const elements = document.querySelectorAll('*');
    let score = 100;
    
    elements.forEach((element) => {
      if (element.getAttribute('role') || element.getAttribute('aria-label') || element.getAttribute('aria-labelledby')) {
        // Good - has ARIA attributes
      } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
        // Check if has accessible text
        const text = element.textContent?.trim();
        if (!text) {
          score -= 5;
        }
      }
    });
    
    return Math.max(0, score);
  }

  private checkFocusManagement(): number {
    const focusableElements = this.getFocusableElements();
    let score = 100;
    
    focusableElements.forEach((element) => {
      if (!element.getAttribute('tabindex') && element.tagName !== 'A' && element.tagName !== 'BUTTON') {
        score -= 2;
      }
    });
    
    return Math.max(0, score);
  }

  private checkAriaLabels(): number {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    let labeledCount = 0;
    
    interactiveElements.forEach((element) => {
      if (element.getAttribute('aria-label') || element.getAttribute('aria-labelledby') || element.textContent?.trim()) {
        labeledCount++;
      }
    });
    
    return interactiveElements.length > 0 ? (labeledCount / interactiveElements.length) * 100 : 100;
  }

  private checkHeadingStructure(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 100;
    let previousLevel = 0;
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        score -= 10; // Skip heading levels
      }
      previousLevel = level;
    });
    
    return Math.max(0, score);
  }

  private checkAltText(): number {
    const images = document.querySelectorAll('img');
    let altTextCount = 0;
    
    images.forEach((img) => {
      if (img.getAttribute('alt') !== null) {
        altTextCount++;
      }
    });
    
    return images.length > 0 ? (altTextCount / images.length) * 100 : 100;
  }

  /**
   * Get current metrics
   */
  public getMetrics(): AccessibilityMetrics | null {
    return this.metrics;
  }

  /**
   * Generate accessibility report
   */
  public generateReport(): string {
    const metrics = this.metrics || this.analyzeAccessibility();
    
    return `
Accessibility Report
==================
Overall Score: ${metrics.overallScore.toFixed(1)}/100

Detailed Scores:
- Color Contrast: ${metrics.colorContrast.toFixed(1)}/100
- Keyboard Navigation: ${metrics.keyboardNavigation.toFixed(1)}/100
- Screen Reader Compatibility: ${metrics.screenReaderCompatibility.toFixed(1)}/100
- Focus Management: ${metrics.focusManagement.toFixed(1)}/100
- ARIA Labels: ${metrics.ariaLabels.toFixed(1)}/100
- Heading Structure: ${metrics.headingStructure.toFixed(1)}/100
- Alt Text: ${metrics.altText.toFixed(1)}/100
    `;
  }
}

// Export singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      accessibilityEnhancer.initialize();
    });
  } else {
    accessibilityEnhancer.initialize();
  }
}
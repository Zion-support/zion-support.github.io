/**
 * Advanced Accessibility Enhancement Utility
 * Provides comprehensive accessibility improvements and monitoring
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
  announceChanges: boolean;
}

interface AccessibilityMetrics {
  focusableElements: number;
  imagesWithoutAlt: number;
  linksWithoutText: number;
  headingsWithoutContent: number;
  colorContrastIssues: number;
  keyboardNavigationScore: number;
  screenReaderScore: number;
  overallScore: number;
}

interface EnhancementOptions {
  addSkipLinks: boolean;
  improveFocusIndicators: boolean;
  enhanceColorContrast: boolean;
  addAriaLabels: boolean;
  improveHeadingStructure: boolean;
  addLiveRegions: boolean;
}

export class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private options: EnhancementOptions;

  constructor(
    config: Partial<AccessibilityConfig> = {},
    options: Partial<EnhancementOptions> = {}
  ) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      enableFocusManagement: true,
      announceChanges: true,
      ...config
    };

    this.options = {
      addSkipLinks: true,
      improveFocusIndicators: true,
      enhanceColorContrast: true,
      addAriaLabels: true,
      improveHeadingStructure: true,
      addLiveRegions: true,
      ...options
    };

    this.metrics = {
      focusableElements: 0,
      imagesWithoutAlt: 0,
      linksWithoutText: 0,
      headingsWithoutContent: 0,
      colorContrastIssues: 0,
      keyboardNavigationScore: 0,
      screenReaderScore: 0,
      overallScore: 0
    };
  }

  /**
   * Initialize accessibility enhancements
   */
  public async initialize(): Promise<void> {
    if (this.options.addSkipLinks) {
      this.addSkipLinks();
    }

    if (this.options.improveFocusIndicators) {
      this.improveFocusIndicators();
    }

    if (this.options.enhanceColorContrast) {
      this.enhanceColorContrast();
    }

    if (this.options.addAriaLabels) {
      this.addAriaLabels();
    }

    if (this.options.improveHeadingStructure) {
      this.improveHeadingStructure();
    }

    if (this.options.addLiveRegions) {
      this.addLiveRegions();
    }

    if (this.config.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    if (this.config.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    if (this.config.enableFocusManagement) {
      this.setupFocusManagement();
    }

    await this.calculateMetrics();
  }

  /**
   * Add skip links for keyboard navigation
   */
  private addSkipLinks(): void {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 0 0 4px 0;
        transform: translateY(-100%);
        transition: transform 0.3s;
      }
      .skip-link:focus {
        transform: translateY(0);
      }
    `;

    document.head.appendChild(style);
    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }

  /**
   * Improve focus indicators
   */
  private improveFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      *:focus:not(:focus-visible) {
        outline: none;
      }
      *:focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      button:focus,
      input:focus,
      select:focus,
      textarea:focus,
      a:focus {
        box-shadow: 0 0 0 2px #0066cc;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Enhance color contrast
   */
  private enhanceColorContrast(): void {
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(1.2) brightness(1.1);
      }
      .high-contrast * {
        color: #000 !important;
        background-color: #fff !important;
      }
      .high-contrast a {
        color: #0000ff !important;
        text-decoration: underline !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Add ARIA labels to elements that need them
   */
  private addAriaLabels(): void {
    // Add aria-labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add aria-labels to images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      img.setAttribute('alt', `Image ${index + 1}`);
    });

    // Add role attributes where needed
    const clickableDivs = document.querySelectorAll('div[onclick], div[role="button"]');
    clickableDivs.forEach(div => {
      if (!div.getAttribute('role')) {
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
      }
    });
  }

  /**
   * Improve heading structure
   */
  private improveHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > previousLevel + 1) {
        // Add missing heading levels
        for (let i = previousLevel + 1; i < level; i++) {
          const missingHeading = document.createElement(`h${i}`);
          missingHeading.textContent = `Section ${i}`;
          missingHeading.style.display = 'none';
          heading.parentNode?.insertBefore(missingHeading, heading);
        }
      }
      
      previousLevel = level;
    });
  }

  /**
   * Add live regions for screen readers
   */
  private addLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';

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
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Add keyboard navigation styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #0066cc !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Add screen reader only text
    const srOnlyElements = document.querySelectorAll('.sr-only');
    srOnlyElements.forEach(element => {
      element.classList.add('sr-only');
    });

    // Announce page changes
    if (this.config.announceChanges) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            this.announceToScreenReader('Content updated');
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Trap focus in modals
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        modal.addEventListener('keydown', (event) => {
          if (event.key === 'Tab') {
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
        });
      }
    });
  }

  /**
   * Calculate accessibility metrics
   */
  private async calculateMetrics(): Promise<void> {
    this.metrics.focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ).length;

    this.metrics.imagesWithoutAlt = document.querySelectorAll('img:not([alt])').length;

    this.metrics.linksWithoutText = Array.from(document.querySelectorAll('a[href]'))
      .filter(link => !link.textContent?.trim()).length;

    this.metrics.headingsWithoutContent = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .filter(heading => !heading.textContent?.trim()).length;

    // Calculate scores
    this.metrics.keyboardNavigationScore = this.calculateKeyboardScore();
    this.metrics.screenReaderScore = this.calculateScreenReaderScore();
    this.metrics.overallScore = this.calculateOverallScore();
  }

  /**
   * Calculate keyboard navigation score
   */
  private calculateKeyboardScore(): number {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return 0;
    
    let score = 100;
    
    // Deduct points for issues
    const positiveTabIndex = document.querySelectorAll('[tabindex]:not([tabindex="0"]):not([tabindex="-1"])');
    score -= positiveTabIndex.length * 10;
    
    return Math.max(0, score);
  }

  /**
   * Calculate screen reader score
   */
  private calculateScreenReaderScore(): number {
    let score = 100;
    
    // Deduct points for missing alt text
    score -= this.metrics.imagesWithoutAlt * 15;
    
    // Deduct points for links without text
    score -= this.metrics.linksWithoutText * 20;
    
    // Deduct points for headings without content
    score -= this.metrics.headingsWithoutContent * 10;
    
    return Math.max(0, score);
  }

  /**
   * Calculate overall accessibility score
   */
  private calculateOverallScore(): number {
    return Math.round(
      (this.metrics.keyboardNavigationScore + this.metrics.screenReaderScore) / 2
    );
  }

  /**
   * Announce message to screen readers
   */
  public announceToScreenReader(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Get current metrics
   */
  public getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  /**
   * Update configuration
   */
  public updateConfig(newConfig: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Update options
   */
  public updateOptions(newOptions: Partial<EnhancementOptions>): void {
    this.options = { ...this.options, ...newOptions };
  }

  /**
   * Enable high contrast mode
   */
  public enableHighContrast(): void {
    document.body.classList.add('high-contrast');
    this.config.enableHighContrast = true;
  }

  /**
   * Disable high contrast mode
   */
  public disableHighContrast(): void {
    document.body.classList.remove('high-contrast');
    this.config.enableHighContrast = false;
  }

  /**
   * Enable reduced motion
   */
  public enableReducedMotion(): void {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    style.id = 'reduced-motion';
    document.head.appendChild(style);
    this.config.enableReducedMotion = true;
  }

  /**
   * Disable reduced motion
   */
  public disableReducedMotion(): void {
    const style = document.getElementById('reduced-motion');
    if (style) {
      style.remove();
    }
    this.config.enableReducedMotion = false;
  }
}

/**
 * Create accessibility enhancer instance
 */
export function createAccessibilityEnhancer(
  config?: Partial<AccessibilityConfig>,
  options?: Partial<EnhancementOptions>
): AccessibilityEnhancer {
  return new AccessibilityEnhancer(config, options);
}

/**
 * Quick accessibility enhancement
 */
export async function quickAccessibilityEnhancement(): Promise<AccessibilityEnhancer> {
  const enhancer = createAccessibilityEnhancer();
  await enhancer.initialize();
  return enhancer;
}
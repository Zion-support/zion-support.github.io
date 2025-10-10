// Advanced Accessibility Enhancement Utility

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
  enableTextScaling: boolean;
  enableMotionReduction: boolean;
}

export interface AccessibilityAuditResult {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
}

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  fix: string;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private observers: MutationObserver[] = [];
  private focusTrap: HTMLElement | null = null;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableColorContrast: true,
      enableTextScaling: true,
      enableMotionReduction: true,
      ...config
    };
  }

  init(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupColorContrast();
    this.setupTextScaling();
    this.setupMotionReduction();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (e) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        this.focusMainContent();
      }

      // Escape key handling
      if (e.key === 'Escape') {
        this.handleEscapeKey();
      }

      // Arrow key navigation for custom components
      if (e.key.startsWith('Arrow')) {
        this.handleArrowKeyNavigation(e);
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-live-region';
    document.body.appendChild(liveRegion);

    // Add skip links
    this.addSkipLinks();
  }

  private setupHighContrast(): void {
    if (!this.config.enableHighContrast) return;

    // Check for high contrast mode
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    });
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', (e) => {
      this.updateFocusIndicator(e.target as HTMLElement);
    });

    // Focus trap for modals
    this.setupFocusTrap();
  }

  private setupARIALabels(): void {
    if (!this.config.enableARIALabels) return;

    // Add missing ARIA labels
    this.addMissingARIALabels();
  }

  private setupColorContrast(): void {
    if (!this.config.enableColorContrast) return;

    // Check color contrast ratios
    this.checkColorContrast();
  }

  private setupTextScaling(): void {
    if (!this.config.enableTextScaling) return;

    // Support for text scaling
    const style = document.createElement('style');
    style.textContent = `
      .text-scaling {
        font-size: clamp(1rem, 1.2vw, 1.5rem);
      }
    `;
    document.head.appendChild(style);
  }

  private setupMotionReduction(): void {
    if (!this.config.enableMotionReduction) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Listen for changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    });
  }

  private focusMainContent(): void {
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main) {
      (main as HTMLElement).focus();
    }
  }

  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      if (modal.getAttribute('aria-hidden') === 'false') {
        (modal as HTMLElement).click();
      }
    });
  }

  private handleArrowKeyNavigation(e: KeyboardEvent): void {
    const target = e.target as HTMLElement;
    const container = target.closest('[role="menu"], [role="listbox"], [role="grid"]');
    
    if (container) {
      const items = Array.from(container.querySelectorAll('[role="menuitem"], [role="option"], [role="gridcell"]'));
      const currentIndex = items.indexOf(target);
      
      if (currentIndex !== -1) {
        let nextIndex = currentIndex;
        
        switch (e.key) {
          case 'ArrowDown':
            nextIndex = (currentIndex + 1) % items.length;
            break;
          case 'ArrowUp':
            nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            break;
          case 'ArrowRight':
            nextIndex = (currentIndex + 1) % items.length;
            break;
          case 'ArrowLeft':
            nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            break;
        }
        
        if (nextIndex !== currentIndex) {
          e.preventDefault();
          (items[nextIndex] as HTMLElement).focus();
        }
      }
    }
  }

  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  private updateFocusIndicator(element: HTMLElement): void {
    // Remove focus from all elements
    document.querySelectorAll('.focus-visible').forEach(el => {
      el.classList.remove('focus-visible');
    });

    // Add focus to current element
    element.classList.add('focus-visible');
  }

  private setupFocusTrap(): void {
    // Focus trap implementation for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && this.focusTrap) {
        this.trapFocus(e);
      }
    });
  }

  private trapFocus(e: KeyboardEvent): void {
    if (!this.focusTrap) return;

    const focusableElements = this.focusTrap.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  private addMissingARIALabels(): void {
    // Add missing ARIA labels to form elements
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
      }
    });

    // Add missing ARIA labels to buttons
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  }

  private checkColorContrast(): void {
    // This would need a more sophisticated implementation
    // For now, we'll add CSS custom properties for contrast
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --color-contrast-high: #000000;
        --color-contrast-low: #666666;
        --background-contrast-high: #ffffff;
        --background-contrast-low: #f0f0f0;
      }
      
      .high-contrast {
        color: var(--color-contrast-high) !important;
        background-color: var(--background-contrast-high) !important;
      }
    `;
    document.head.appendChild(style);
  }

  public announce(message: string): void {
    const liveRegion = document.getElementById('accessibility-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  public audit(): AccessibilityAuditResult {
    const issues: AccessibilityIssue[] = [];
    let score = 100;

    // Check for missing alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      issues.push({
        type: 'error',
        element: img.tagName,
        message: 'Image missing alt text',
        fix: 'Add alt attribute to image'
      });
      score -= 5;
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label) {
        issues.push({
          type: 'error',
          element: input.tagName,
          message: 'Input missing label',
          fix: 'Add label element or aria-label attribute'
        });
        score -= 5;
      }
    });

    // Check for missing headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      issues.push({
        type: 'warning',
        element: 'document',
        message: 'No headings found',
        fix: 'Add heading elements to structure content'
      });
      score -= 10;
    }

    const recommendations = [
      'Ensure all interactive elements are keyboard accessible',
      'Provide alternative text for all images',
      'Use proper heading hierarchy',
      'Ensure sufficient color contrast',
      'Test with screen readers'
    ];

    return {
      score: Math.max(0, score),
      issues,
      recommendations
    };
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Utility functions
export const announceToScreenReader = (message: string): void => {
  accessibilityEnhancer.announce(message);
};

export const runAccessibilityAudit = (): AccessibilityAuditResult => {
  return accessibilityEnhancer.audit();
};

export const setupAccessibilityEnhancements = (config?: Partial<AccessibilityConfig>): void => {
  if (config) {
    Object.assign(accessibilityEnhancer, config);
  }
  accessibilityEnhancer.init();
};

// Auto-initialize
if (typeof window !== 'undefined') {
  setupAccessibilityEnhancements();
}
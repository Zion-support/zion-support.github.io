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
      ...config,
    };
  }

  init(): void {
    if (typeof window === 'undefined') return;

    // Initialize accessibility enhancements
    if (this.config.enableHighContrast) {
      this.setupHighContrast();
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

    if (this.config.enableAriaLabels) {
      this.setupAriaLabels();
    }

    // Collect initial metrics
    this.collectMetrics();
  }

  private setupHighContrast(): void {
    // Add high contrast mode support
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        .cyber-card, .quantum-card {
          border: 2px solid #ffffff !important;
          background: #000000 !important;
          color: #ffffff !important;
        }
        
        .neon-text, .cyber-text {
          text-shadow: 0 0 5px #00ffff !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupKeyboardNavigation(): void {
    // Add keyboard navigation support
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Add focus styles
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(focusStyle);
  }

  private setupScreenReaderSupport(): void {
    // Add screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'screen-reader-announcements';
    document.body.appendChild(announcement);
  }

  private setupFocusManagement(): void {
    // Manage focus for modals and dynamic content
    let focusHistory: HTMLElement[] = [];

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        // Return focus to previous element
        const previousElement = focusHistory.pop();
        if (previousElement) {
          previousElement.focus();
        }
      }
    });

    // Track focus changes
    document.addEventListener('focusin', (event) => {
      if (event.target instanceof HTMLElement) {
        focusHistory.push(event.target);
        if (focusHistory.length > 10) {
          focusHistory.shift();
        }
      }
    });
  }

  private setupAriaLabels(): void {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach((link) => {
      if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }

  collectMetrics(): AccessibilityMetrics {
    const metrics: AccessibilityMetrics = {
      overallScore: 0,
      colorContrast: this.checkColorContrast(),
      keyboardNavigation: this.checkKeyboardNavigation(),
      screenReaderCompatibility: this.checkScreenReaderCompatibility(),
      focusManagement: this.checkFocusManagement(),
      ariaLabels: this.checkAriaLabels(),
      headingStructure: this.checkHeadingStructure(),
      altText: this.checkAltText(),
    };

    // Calculate overall score
    const scores = Object.values(metrics).filter(score => typeof score === 'number' && score > 0);
    metrics.overallScore = scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;

    this.metrics = metrics;
    return metrics;
  }

  private checkColorContrast(): number {
    // Simple color contrast check
    const elements = document.querySelectorAll('*');
    let goodContrast = 0;
    let totalElements = 0;

    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        totalElements++;
        // This is a simplified check - in reality, you'd calculate actual contrast ratio
        if (color.includes('white') || color.includes('black')) {
          goodContrast++;
        }
      }
    });

    return totalElements > 0 ? (goodContrast / totalElements) * 100 : 0;
  }

  private checkKeyboardNavigation(): number {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    let accessibleElements = 0;

    focusableElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex !== '-1') {
          accessibleElements++;
        }
      }
    });

    return focusableElements.length > 0 ? (accessibleElements / focusableElements.length) * 100 : 0;
  }

  private checkScreenReaderCompatibility(): number {
    const elements = document.querySelectorAll('*');
    let compatibleElements = 0;

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const hasAriaLabel = element.hasAttribute('aria-label');
        const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
        const hasRole = element.hasAttribute('role');
        const hasTextContent = element.textContent?.trim().length > 0;
        
        if (hasAriaLabel || hasAriaLabelledBy || hasRole || hasTextContent) {
          compatibleElements++;
        }
      }
    });

    return elements.length > 0 ? (compatibleElements / elements.length) * 100 : 0;
  }

  private checkFocusManagement(): number {
    // Check if focus is properly managed
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    let properlyManaged = 0;
    focusableElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const hasFocusStyles = window.getComputedStyle(element).outline !== 'none';
        if (hasFocusStyles) {
          properlyManaged++;
        }
      }
    });

    return focusableElements.length > 0 ? (properlyManaged / focusableElements.length) * 100 : 0;
  }

  private checkAriaLabels(): number {
    const interactiveElements = document.querySelectorAll(
      'button, input, textarea, select, [role="button"], [role="link"]'
    );
    
    let labeledElements = 0;
    interactiveElements.forEach((element) => {
      const hasAriaLabel = element.hasAttribute('aria-label');
      const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
      const hasTextContent = element.textContent?.trim().length > 0;
      
      if (hasAriaLabel || hasAriaLabelledBy || hasTextContent) {
        labeledElements++;
      }
    });

    return interactiveElements.length > 0 ? (labeledElements / interactiveElements.length) * 100 : 0;
  }

  private checkHeadingStructure(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let properStructure = 0;
    let previousLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level <= previousLevel + 1) {
        properStructure++;
        previousLevel = level;
      }
    });

    return headings.length > 0 ? (properStructure / headings.length) * 100 : 0;
  }

  private checkAltText(): number {
    const images = document.querySelectorAll('img');
    let imagesWithAlt = 0;

    images.forEach((img) => {
      if (img.hasAttribute('alt')) {
        imagesWithAlt++;
      }
    });

    return images.length > 0 ? (imagesWithAlt / images.length) * 100 : 0;
  }

  announce(message: string): void {
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  }

  getMetrics(): AccessibilityMetrics | null {
    return this.metrics;
  }

  cleanup(): void {
    // Cleanup accessibility enhancements
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.remove();
    }
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();
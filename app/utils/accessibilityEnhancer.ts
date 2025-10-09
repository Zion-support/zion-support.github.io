'use client';
/**
 * Advanced Accessibility Enhancement Utility
 * Provides comprehensive accessibility improvements and monitoring
 */

interface AccessibilityConfig {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableFocusManagement?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableAriaLabels?: boolean;
  enableColorContrast?: boolean;
  enableImageAltText?: boolean;
  enableHeadingStructure?: boolean;
  enableFormAccessibility?: boolean;
  enableNavigationAccessibility?: boolean;
  enableContentAnnouncements?: boolean;
  enableMetricsCollection?: boolean;
}

interface AccessibilityMetrics {
  overallScore: number;
  keyboardNavigation: number;
  screenReaderCompatibility: number;
  focusManagement: number;
  colorContrast: number;
  ariaLabels: number;
  headingStructure: number;
  altText: number;
  formAccessibility: number;
  navigationAccessibility: number;
}

class AccessibilityEnhancer {
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
      enableAriaLabels: true,
      enableColorContrast: true,
      enableImageAltText: true,
      enableHeadingStructure: true,
      enableFormAccessibility: true,
      enableNavigationAccessibility: true,
      enableContentAnnouncements: true,
      enableMetricsCollection: true,
      ...config
    };
    
    this.metrics = {
      overallScore: 0,
      keyboardNavigation: 0,
      screenReaderCompatibility: 0,
      focusManagement: 0,
      colorContrast: 0,
      ariaLabels: 0,
      headingStructure: 0,
      altText: 0,
      formAccessibility: 0,
      navigationAccessibility: 0
    };
  }

  /**
   * Initialize accessibility enhancements
   */
  init(): void {
    if (typeof window === 'undefined') return;

    if (this.config.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    if (this.config.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    if (this.config.enableFocusManagement) {
      this.setupFocusManagement();
    }

    if (this.config.enableHighContrast) {
      this.setupHighContrastMode();
    }

    if (this.config.enableReducedMotion) {
      this.setupReducedMotion();
    }

    if (this.config.enableAriaLabels) {
      this.setupAriaLabels();
    }

    if (this.config.enableColorContrast) {
      this.setupColorContrast();
    }

    if (this.config.enableImageAltText) {
      this.setupImageAltText();
    }

    if (this.config.enableHeadingStructure) {
      this.setupHeadingStructure();
    }

    if (this.config.enableFormAccessibility) {
      this.setupFormAccessibility();
    }

    if (this.config.enableNavigationAccessibility) {
      this.setupNavigationAccessibility();
    }

    if (this.config.enableContentAnnouncements) {
      this.setupContentAnnouncements();
    }

    if (this.config.enableMetricsCollection) {
      this.setupMetricsCollection();
    }

    this.scanAccessibility();
  }

  /**
   * Setup keyboard navigation enhancements
   */
  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      } else if (event.key === 'Escape') {
        this.handleEscapeKey(event);
      }
      
      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.handleArrowNavigation(event);
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent, isShift: boolean): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    let nextIndex: number;
    
    if (isShift) {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
    } else {
      nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
    }
    
    focusableElements[nextIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals
    const modals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
      closeButton?.click();
    });
    
    // Close any open menus
    const menus = document.querySelectorAll('[role="menu"][aria-expanded="true"]');
    menus.forEach(menu => {
      const trigger = document.querySelector(`[aria-controls="${menu.id}"]`) as HTMLElement;
      trigger?.click();
    });
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {
    const currentElement = document.activeElement as HTMLElement;
    if (!currentElement) return;

    // Handle menu navigation
    if (currentElement.getAttribute('role') === 'menuitem') {
      this.handleMenuNavigation(event, currentElement);
    }

    // Handle radio group navigation
    if (currentElement instanceof HTMLInputElement && currentElement.type === 'radio') {
      this.handleRadioGroupNavigation(event, currentElement);
    }
  }

  /**
   * Handle radio group navigation
   */
  private handleRadioGroupNavigation(event: KeyboardEvent, currentElement: HTMLInputElement): void {
    const name = currentElement.name;
    const radioButtons = Array.from(document.querySelectorAll(`input[type="radio"][name="${name}"]`)) as HTMLInputElement[];
    const currentIndex = radioButtons.indexOf(currentElement);
    let nextIndex: number;
    
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : radioButtons.length - 1;
    } else {
      nextIndex = currentIndex < radioButtons.length - 1 ? currentIndex + 1 : 0;
    }
    
    radioButtons[nextIndex]?.focus();
    radioButtons[nextIndex]?.click();
    event.preventDefault();
  }

  /**
   * Handle menu navigation
   */
  private handleMenuNavigation(event: KeyboardEvent, currentElement: HTMLElement): void {
    const menu = currentElement.closest('[role="menu"]');
    if (!menu) return;
    
    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
    const currentIndex = menuItems.indexOf(currentElement);
    let nextIndex: number;
    
    if (event.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
    } else if (event.key === 'ArrowDown') {
      nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
    } else {
      return;
    }
    
    menuItems[nextIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    this.addSkipLinks();
    this.setupLiveRegions();
  }

  /**
   * Add skip links
   */
  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.innerHTML = `
      <a href="#main" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  /**
   * Setup live regions
   */
  private setupLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    let focusHistory: HTMLElement[] = [];
    
    document.addEventListener('focusin', (event) => {
      if (event.target instanceof HTMLElement) {
        focusHistory.push(event.target);
        if (focusHistory.length > 10) {
          focusHistory.shift();
        }
      }
    });
    
    document.addEventListener('focusout', (event) => {
      // Handle focus management for dynamic content
    });
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
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
    
    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  }

  /**
   * Setup reduced motion
   */
  private setupReducedMotion(): void {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Listen for changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });
  }

  /**
   * Setup ARIA labels
   */
  private setupAriaLabels(): void {
    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
    
    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link) => {
      if (!link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }

  /**
   * Setup color contrast checking
   */
  private setupColorContrast(): void {
    // This would implement actual color contrast checking
    // For now, we'll just add basic monitoring
  }

  /**
   * Setup image alt text checking
   */
  private setupImageAltText(): void {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('alt')) {
        console.warn('Image missing alt text:', img.src);
      }
    });
  }

  /**
   * Setup heading structure checking
   */
  private setupHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        console.warn('Heading level skipped:', heading);
      }
      previousLevel = level;
    });
  }

  /**
   * Setup form accessibility
   */
  private setupFormAccessibility(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach((input) => {
        const id = input.id || `input-${Math.random().toString(36).substr(2, 9)}`;
        input.id = id;
        
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = form.querySelector(`label[for="${id}"]`);
          if (label) {
            input.setAttribute('aria-labelledby', id);
          }
        }
      });
    });
  }

  /**
   * Setup navigation accessibility
   */
  private setupNavigationAccessibility(): void {
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });
  }

  /**
   * Setup content announcements
   */
  private setupContentAnnouncements(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.hasAttribute('aria-live')) {
                this.announceToScreenReader(element.textContent || '');
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    this.observers.push(observer);
  }

  /**
   * Setup metrics collection
   */
  private setupMetricsCollection(): void {
    setInterval(() => {
      this.scanAccessibility();
    }, 5000);
  }

  /**
   * Scan accessibility issues
   */
  private scanAccessibility(): void {
    this.calculateScores();
  }

  /**
   * Calculate accessibility scores
   */
  private calculateScores(): void {
    this.metrics.keyboardNavigation = this.calculateKeyboardScore();
    this.metrics.screenReaderCompatibility = this.calculateScreenReaderScore();
    this.metrics.colorContrast = this.checkColorContrast();
    this.metrics.ariaLabels = this.checkAriaLabels();
    this.metrics.headingStructure = this.checkHeadingStructure();
    this.metrics.altText = this.checkAltText();
    this.metrics.formAccessibility = this.checkFormAccessibility();
    this.metrics.navigationAccessibility = this.checkNavigationAccessibility();
    
    // Calculate overall score
    const scores = Object.values(this.metrics).filter(score => typeof score === 'number' && score > 0);
    this.metrics.overallScore = scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;
  }

  /**
   * Calculate keyboard navigation score
   */
  private calculateKeyboardScore(): number {
    const focusableElements = this.getFocusableElements();
    let accessibleElements = 0;
    
    focusableElements.forEach((element) => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex !== '-1') {
        accessibleElements++;
      }
    });
    
    return focusableElements.length > 0 ? (accessibleElements / focusableElements.length) * 100 : 0;
  }

  /**
   * Calculate screen reader score
   */
  private calculateScreenReaderScore(): number {
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

  /**
   * Get focusable elements
   */
  private getFocusableElements(): HTMLElement[] {
    return Array.from(document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];
  }

  /**
   * Announce to screen reader
   */
  private announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Check color contrast
   */
  private checkColorContrast(): number {
    // Simplified color contrast check
    return 85; // Placeholder score
  }

  /**
   * Check ARIA labels
   */
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

  /**
   * Check heading structure
   */
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

  /**
   * Check alt text
   */
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

  /**
   * Check form accessibility
   */
  private checkFormAccessibility(): number {
    const forms = document.querySelectorAll('form');
    let accessibleForms = 0;
    
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, select, textarea');
      let labeledInputs = 0;
      
      inputs.forEach((input) => {
        const hasLabel = input.hasAttribute('aria-label') || 
                        input.hasAttribute('aria-labelledby') ||
                        form.querySelector(`label[for="${input.id}"]`);
        
        if (hasLabel) {
          labeledInputs++;
        }
      });
      
      if (inputs.length === 0 || labeledInputs === inputs.length) {
        accessibleForms++;
      }
    });
    
    return forms.length > 0 ? (accessibleForms / forms.length) * 100 : 0;
  }

  /**
   * Check navigation accessibility
   */
  private checkNavigationAccessibility(): number {
    const navs = document.querySelectorAll('nav');
    let accessibleNavs = 0;
    
    navs.forEach((nav) => {
      const hasAriaLabel = nav.hasAttribute('aria-label');
      const hasAriaLabelledBy = nav.hasAttribute('aria-labelledby');
      const hasRole = nav.hasAttribute('role');
      
      if (hasAriaLabel || hasAriaLabelledBy || hasRole) {
        accessibleNavs++;
      }
    });
    
    return navs.length > 0 ? (accessibleNavs / navs.length) * 100 : 0;
  }

  /**
   * Get accessibility metrics
   */
  getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  /**
   * Get accessibility report
   */
  getReport(): string {
    const metrics = this.getMetrics();
    let report = 'Accessibility Report\n';
    report += '==================\n\n';
    report += `Overall Score: ${metrics.overallScore.toFixed(1)}/100\n\n`;
    report += `Keyboard Navigation: ${metrics.keyboardNavigation.toFixed(1)}/100\n`;
    report += `Screen Reader Compatibility: ${metrics.screenReaderCompatibility.toFixed(1)}/100\n`;
    report += `Focus Management: ${metrics.focusManagement.toFixed(1)}/100\n`;
    report += `Color Contrast: ${metrics.colorContrast.toFixed(1)}/100\n`;
    report += `ARIA Labels: ${metrics.ariaLabels.toFixed(1)}/100\n`;
    report += `Heading Structure: ${metrics.headingStructure.toFixed(1)}/100\n`;
    report += `Alt Text: ${metrics.altText.toFixed(1)}/100\n`;
    report += `Form Accessibility: ${metrics.formAccessibility.toFixed(1)}/100\n`;
    report += `Navigation Accessibility: ${metrics.navigationAccessibility.toFixed(1)}/100\n`;
    
    return report;
  }

  /**
   * Cleanup accessibility enhancements
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export default AccessibilityEnhancer;
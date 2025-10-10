// Accessibility checker utility
export interface AccessibilityMetrics {
  colorContrastScore: number;
  keyboardNavigationScore: number;
  screenReaderScore: number;
  ariaImplementationScore: number;
  overallScore: number;
  focusableElements: number;
  imagesWithoutAlt: number;
  linksWithoutText: number;
  headingsWithoutContent: number;
  colorContrastIssues: number;
}

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableFocusManagement: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  announceChanges: boolean;
}

export class AccessibilityChecker {
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
      ...config
    };

    this.metrics = {
      colorContrastScore: 0,
      keyboardNavigationScore: 0,
      screenReaderScore: 0,
      ariaImplementationScore: 0,
      overallScore: 0,
      focusableElements: 0,
      imagesWithoutAlt: 0,
      linksWithoutText: 0,
      headingsWithoutContent: 0,
      colorContrastIssues: 0
    };

    this.init();
  }

  private init(): void {
    if (typeof window === 'undefined') return;
    
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupFocusManagement();
    this.setupHighContrastMode();
    this.setupReducedMotion();
    this.setupAriaLabels();
    this.setupColorContrast();
    this.setupImageAltText();
    this.setupHeadingStructure();
    this.setupFormAccessibility();
    this.setupNavigationAccessibility();
    this.setupContentAnnouncements();
    this.setupMetricsCollection();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;
    
    document.addEventListener('keydown', (event) => {
      this.handleKeyDown(event);
    });
  }

  private handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Tab':
        this.handleTabNavigation(event);
        break;
      case 'Escape':
        this.handleEscapeKey(event);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        this.handleArrowNavigation(event);
        break;
    }
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (currentIndex === -1) return;
    
    const nextIndex = event.shiftKey 
      ? (currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1)
      : (currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0);
    
    focusableElements[nextIndex]?.focus();
    event.preventDefault();
  }

  private handleEscapeKey(event: KeyboardEvent): void {
    const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      closeButton?.click();
    });
    
    const menus = document.querySelectorAll('[role="menu"][aria-expanded="true"]');
    menus.forEach(menu => {
      const trigger = document.querySelector(`[aria-controls="${menu.id}"]`) as HTMLElement;
      trigger?.click();
    });
  }

  private handleArrowNavigation(event: KeyboardEvent): void {
    const currentElement = document.activeElement as HTMLElement;
    if (!currentElement) return;
    
    if (currentElement instanceof HTMLInputElement && currentElement.type === 'radio') {
      this.handleRadioGroupNavigation(event, currentElement);
    }
    
    if (currentElement.getAttribute('role') === 'menuitem') {
      this.handleMenuNavigation(event, currentElement);
    }
  }

  private handleRadioGroupNavigation(event: KeyboardEvent, currentElement: HTMLInputElement): void {
    const name = currentElement.name;
    if (!name) return;
    
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

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;
    
    this.addSkipLinks();
    this.enhanceFormLabels();
    this.addAriaLandmarks();
    this.setupLiveRegions();
  }

  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const element = input as HTMLElement;
      
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const placeholder = element.getAttribute('placeholder');
        if (placeholder) {
          element.setAttribute('aria-label', placeholder);
        }
      }
      
      if (element.hasAttribute('required')) {
        element.setAttribute('aria-required', 'true');
      }
      
      if (element.classList.contains('error') || element.getAttribute('aria-invalid') === 'true') {
        element.setAttribute('aria-invalid', 'true');
        this.announceToScreenReader('Error in form field');
      }
    });
  }

  private addAriaLandmarks(): void {
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main) {
      main.setAttribute('id', 'main-content');
    }
    
    const nav = document.querySelector('nav') || document.querySelector('[role="navigation"]');
    if (nav) {
      nav.setAttribute('id', 'navigation');
    }
    
    const footer = document.querySelector('footer') || document.querySelector('[role="contentinfo"]');
    if (footer) {
      footer.setAttribute('id', 'footer');
    }
  }

  private setupLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    
    const assertiveRegion = document.createElement('div');
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.className = 'sr-only';
    assertiveRegion.id = 'assertive-live-region';
    document.body.appendChild(assertiveRegion);
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;
    
    document.addEventListener('focusin', (event) => {
      this.handleFocusIn(event);
    });
    
    document.addEventListener('focusout', (event) => {
      this.handleFocusOut(event);
    });
  }

  private handleFocusIn(event: FocusEvent): void {
    const element = event.target as HTMLElement;
    element.classList.add('focus-visible');
    
    if (element.getAttribute('role') === 'button' || element.tagName === 'BUTTON') {
      this.announceToScreenReader(`Focused on button: ${element.textContent?.trim() || element.getAttribute('aria-label') || 'button'}`);
    }
  }

  private handleFocusOut(event: FocusEvent): void {
    const element = event.target as HTMLElement;
    element.classList.remove('focus-visible');
  }

  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;
    
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
    
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  }

  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }
    
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });
  }

  private setupAriaLabels(): void {
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      const element = button as HTMLElement;
      if (!element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Button');
      }
    });
    
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link) => {
      const element = link as HTMLElement;
      if (!element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Link');
      }
    });
  }

  private setupColorContrast(): void {
    this.metrics.colorContrastIssues = 0;
  }

  private setupImageAltText(): void {
    const images = document.querySelectorAll('img');
    this.metrics.imagesWithoutAlt = 0;
    images.forEach((img) => {
      if (!img.alt) {
        this.metrics.imagesWithoutAlt++;
      }
    });
  }

  private setupHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.metrics.headingsWithoutContent = 0;
    headings.forEach((heading) => {
      if (!heading.textContent?.trim()) {
        this.metrics.headingsWithoutContent++;
      }
    });
  }

  private setupFormAccessibility(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        const element = input as HTMLElement;
        const id = element.id || `input-${Math.random().toString(36).substr(2, 9)}`;
        element.id = id;
        
        if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
          const label = form.querySelector(`label[for="${id}"]`);
          if (label) {
            element.setAttribute('aria-labelledby', id);
          }
        }
      });
    });
  }

  private setupNavigationAccessibility(): void {
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav) => {
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
      
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', 'Main navigation');
      }
    });
  }

  private setupContentAnnouncements(): void {
    if (!this.config.announceChanges) return;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (element.getAttribute('aria-live') === 'polite') {
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

  private setupMetricsCollection(): void {
    setInterval(() => {
      this.scanAccessibility();
    }, 5000);
  }

  private scanAccessibility(): void {
    this.metrics.focusableElements = this.getFocusableElements().length;
    this.metrics.imagesWithoutAlt = document.querySelectorAll('img:not([alt])').length;
    this.metrics.linksWithoutText = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby]):empty').length;
    this.metrics.headingsWithoutContent = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length - 
      Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter(h => h.textContent?.trim()).length;
    this.calculateScores();
  }

  private calculateScores(): void {
    this.metrics.keyboardNavigationScore = this.calculateKeyboardScore();
    this.metrics.screenReaderScore = this.calculateScreenReaderScore();
    this.metrics.overallScore = Math.round(
      (this.metrics.keyboardNavigationScore + this.metrics.screenReaderScore) / 2
    );
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
- Color Contrast Score: ${metrics.colorContrastScore}/100
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
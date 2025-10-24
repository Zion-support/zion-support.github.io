/**
 * Accessibility Enhancement Utilities
 * Provides tools to improve web accessibility
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableAriaLabels: true,
      ...options
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    if (this.options.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    if (this.options.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    if (this.options.enableHighContrast) {
      this.setupHighContrast();
    }

    if (this.options.enableFocusManagement) {
      this.setupFocusManagement();
    }

    if (this.options.enableAriaLabels) {
      this.setupAriaLabels();
    }
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  private setupScreenReaderSupport(): void {
    // Add screen reader announcements
    this.announceToScreenReader('Page loaded successfully');
  }

  private setupHighContrast(): void {
    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
    `;
    document.head.appendChild(style);
  }

  private setupFocusManagement(): void {
    this.updateFocusableElements();
    
    // Update focusable elements when DOM changes
    const observer = new MutationObserver(() => {
      this.updateFocusableElements();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private setupAriaLabels(): void {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, input, select, textarea, a');
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Interactive element');
      }
    });
  }

  private updateFocusableElements(): void {
    this.focusableElements = Array.from(
      document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(element => {
      const style = window.getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden';
    }) as HTMLElement[];
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (!this.options.enableKeyboardNavigation) return;

    switch (event.key) {
      case 'Tab':
        this.handleTabNavigation(event);
        break;
      case 'Escape':
        this.handleEscapeKey(event);
        break;
      case 'Enter':
      case ' ':
        this.handleActivation(event);
        break;
    }
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    if (event.shiftKey) {
      this.focusPreviousElement();
    } else {
      this.focusNextElement();
    }
  }

  private focusNextElement(): void {
    this.currentFocusIndex = (this.currentFocusIndex + 1) % this.focusableElements.length;
    this.focusableElements[this.currentFocusIndex]?.focus();
  }

  private focusPreviousElement(): void {
    this.currentFocusIndex = this.currentFocusIndex === 0 
      ? this.focusableElements.length - 1 
      : this.currentFocusIndex - 1;
    this.focusableElements[this.currentFocusIndex]?.focus();
  }

  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals or dropdowns
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
      activeElement.click();
    }
  }

  private handleActivation(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement.tagName === 'BUTTON') {
      activeElement.click();
    }
  }

  private announceToScreenReader(message: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  public enhanceElement(element: HTMLElement): void {
    if (!element) return;

    // Add ARIA attributes
    if (this.options.enableAriaLabels) {
      this.addAriaAttributes(element);
    }

    // Add keyboard support
    if (this.options.enableKeyboardNavigation) {
      this.addKeyboardSupport(element);
    }
  }

  private addAriaAttributes(element: HTMLElement): void {
    if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label')) {
      element.setAttribute('aria-label', element.textContent || 'Button');
    }

    if (element.tagName === 'INPUT' && !element.getAttribute('aria-label')) {
      const placeholder = element.getAttribute('placeholder');
      if (placeholder) {
        element.setAttribute('aria-label', placeholder);
      }
    }
  }

  private addKeyboardSupport(element: HTMLElement): void {
    element.setAttribute('tabindex', '0');
  }

  public destroy(): void {
    // Cleanup event listeners and observers
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }
}

// Utility functions
export const accessibilityUtils = {
  /**
   * Check if element is visible to screen readers
   */
  isVisibleToScreenReader: (element: HTMLElement): boolean => {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           element.getAttribute('aria-hidden') !== 'true';
  },

  /**
   * Get accessible name for element
   */
  getAccessibleName: (element: HTMLElement): string => {
    return element.getAttribute('aria-label') || 
           element.getAttribute('aria-labelledby') ||
           element.textContent?.trim() ||
           element.getAttribute('alt') ||
           element.getAttribute('title') ||
           'Unlabeled element';
  },

  /**
   * Check if element is focusable
   */
  isFocusable: (element: HTMLElement): boolean => {
    const tabIndex = element.getAttribute('tabindex');
    if (tabIndex === '-1') return false;
    
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && 
           style.visibility !== 'hidden' &&
           (element.tagName === 'BUTTON' ||
            element.tagName === 'A' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'SELECT' ||
            element.tagName === 'TEXTAREA' ||
            tabIndex !== null);
  }
};

export default AccessibilityEnhancer;
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
    // Handle radio button groups
    if (currentElement instanceof HTMLInputElement && currentElement.type === 'radio') {
      this.handleRadioGroupNavigation(event, currentElement);
    }
    // Handle menu navigation
    if (currentElement.getAttribute('role') === 'menuitem') {
      this.handleMenuNavigation(event, currentElement);
    }
  }
  /**
   * Handle radio group navigation
   */
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
    if (!this.config.enableScreenReaderSupport) return;
    // Add skip links
    this.addSkipLinks();
    // Enhance form labels
    this.enhanceFormLabels();
    // Add ARIA landmarks
    this.addAriaLandmarks();
    // Setup live regions for dynamic content
    this.setupLiveRegions();
  }
  /**
   * Add skip links
   */
  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    // Add styles
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
  /**
   * Enhance form labels
   */
  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const element = input as HTMLElement;
      // Add aria-label if no label exists
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const placeholder = element.getAttribute('placeholder');
        if (placeholder) {
          element.setAttribute('aria-label', placeholder);
        }
      }
      // Add required attribute announcement
      if (element.hasAttribute('required')) {
        element.setAttribute('aria-required', 'true');
      }
      // Add error states
      if (element.classList.contains('error') || element.getAttribute('aria-invalid') === 'true') {
        element.setAttribute('aria-invalid', 'true');
        this.announceToScreenReader('Error in form field');
      }
    });
  }
  /**
   * Add ARIA landmarks
   */
  private addAriaLandmarks(): void {
    // Main content
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main) {
      main.setAttribute('id', 'main-content');
    }
    // Navigation
    const nav = document.querySelector('nav') || document.querySelector('[role="navigation"]');
    if (nav) {
      nav.setAttribute('id', 'navigation');
    }
    // Footer
    const footer = document.querySelector('footer') || document.querySelector('[role="contentinfo"]');
    if (footer) {
      footer.setAttribute('id', 'footer');
    }
  }
  /**
   * Setup live regions
   */
  private setupLiveRegions(): void {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    // Create assertive live region for urgent announcements
    const assertiveRegion = document.createElement('div');
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.className = 'sr-only';
    assertiveRegion.id = 'assertive-live-region';
    document.body.appendChild(assertiveRegion);
  }
  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;
    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.handleFocusIn(event);
    });
    document.addEventListener('focusout', (event) => {
      this.handleFocusOut(event);
    });
  }
  /**
   * Handle focus in
   */
  private handleFocusIn(event: FocusEvent): void {
    const element = event.target as HTMLElement;
    // Add focus indicator
    element.classList.add('focus-visible');
    // Announce focus changes for important elements
    if (element.getAttribute('role') === 'button' || element.tagName === 'BUTTON') {
      this.announceToScreenReader(`Focused on button: ${element.textContent?.trim() || element.getAttribute('aria-label') || 'button'}`);
    }
  }
  /**
   * Handle focus out
   */
  private handleFocusOut(event: FocusEvent): void {
    const element = event.target as HTMLElement;
    element.classList.remove('focus-visible');
  }
  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;
    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
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
    if (!this.config.enableReducedMotion) return;
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }
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
    // Add ARIA labels to interactive elements without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      const element = button as HTMLElement;
      if (!element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Button');
      }
    });
    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link) => {
      const element = link as HTMLElement;
      if (!element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Link');
      }
    });
  }
  /**
   * Setup color contrast checking
   */
  private setupColorContrast(): void {
    // This would typically use a color contrast library
    // For now, we'll just count potential issues
    this.metrics.colorContrastIssues = 0;
  }
  /**
   * Setup image alt text checking
   */
  private setupImageAltText(): void {
    const images = document.querySelectorAll('img');
    this.metrics.imagesWithoutAlt = 0;
    images.forEach((img) => {
      if (!img.alt) {
        this.metrics.imagesWithoutAlt++;
      }
    });
  }
  /**
   * Setup heading structure checking
   */
  private setupHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.metrics.headingsWithoutContent = 0;
    headings.forEach((heading) => {
      if (!heading.textContent?.trim()) {
        this.metrics.headingsWithoutContent++;
      }
    });
  }
  /**
   * Setup form accessibility
   */
  private setupFormAccessibility(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      // Add form labels
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
  /**
   * Setup navigation accessibility
   */
  private setupNavigationAccessibility(): void {
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav) => {
      // Add navigation role if not present
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
      // Add aria-label if not present
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', 'Main navigation');
      }
    });
  }
  /**
   * Setup content announcements
   */
  private setupContentAnnouncements(): void {
    if (!this.config.announceChanges) return;
    // Observe DOM changes for dynamic content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              // Announce new content
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
  /**
   * Setup metrics collection
   */
  private setupMetricsCollection(): void {
    // Collect metrics periodically
    setInterval(() => {
      this.scanAccessibility();
    }, 5000);
  }
  /**
   * Scan accessibility issues
   */
  private scanAccessibility(): void {
    this.metrics.focusableElements = this.getFocusableElements().length;
    this.metrics.imagesWithoutAlt = document.querySelectorAll('img:not([alt])').length;
    this.metrics.linksWithoutText = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby]):empty').length;
    this.metrics.headingsWithoutContent = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length - 
      Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter(h => h.textContent?.trim()).length;
    this.calculateScores();
  }
  /**
   * Calculate accessibility scores
   */
  private calculateScores(): void {
    // Keyboard navigation score
    this.metrics.keyboardNavigationScore = this.calculateKeyboardScore();
    // Screen reader score
    this.metrics.screenReaderScore = this.calculateScreenReaderScore();
    // Overall score
    this.metrics.overallScore = Math.round(
      (this.metrics.keyboardNavigationScore + this.metrics.screenReaderScore) / 2
    );
  }
  /**
   * Calculate keyboard navigation score
   */
  private calculateKeyboardScore(): number {
    const focusableElements = this.getFocusableElements();
    const totalElements = document.querySelectorAll('*').length;
    if (totalElements === 0) return 0;
    const focusableRatio = focusableElements.length / totalElements;
    return Math.min(100, Math.round(focusableRatio * 100));
  }
  /**
   * Calculate screen reader score
   */
  private calculateScreenReaderScore(): number {
    let score = 100;
    // Deduct for missing alt text
    score -= this.metrics.imagesWithoutAlt * 5;
    // Deduct for missing ARIA labels
    score -= this.metrics.linksWithoutText * 3;
    // Deduct for empty headings
    score -= this.metrics.headingsWithoutContent * 2;
    return Math.max(0, score);
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
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];
    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }
  /**
   * Announce to screen reader
   */
  private announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById(
      priority === 'assertive' ? 'assertive-live-region' : 'live-region'
    );
    if (liveRegion) {
      liveRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
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
}
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AccessibilityEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional AccessibilityEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="accessibilityEnhancer, AI solutions, IT services, Zion Tech Group, accessibilityenhancer" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AccessibilityEnhancer
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced accessibilityenhancer solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AccessibilityEnhancer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our accessibilityenhancer solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our accessibilityenhancer solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your accessibilityenhancer needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityEnhancerPage;

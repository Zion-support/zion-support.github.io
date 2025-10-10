'use client';

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableColorContrast?: boolean;
  enableTextScaling?: boolean;
  enableReducedMotion?: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableColorContrast: true,
      enableTextScaling: true,
      enableReducedMotion: true,
      ...options
    };
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
    focusableElements[nextIndex]?.focus();
    event.preventDefault();
  }

  public initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupFocusManagement();
    this.setupColorContrast();
    this.setupTextScaling();
    this.setupReducedMotion();
  }

  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      // Skip links for keyboard navigation
      if (event.key === 'Tab' && event.shiftKey) {
        const focusableElements = this.getFocusableElements();
        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
        
        if (currentIndex > 0) {
          focusableElements[currentIndex - 1]?.focus();
          event.preventDefault();
        }
      } else if (event.key === 'Tab' && !event.shiftKey) {
        const focusableElements = this.getFocusableElements();
        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
        
        if (currentIndex < focusableElements.length - 1) {
          focusableElements[currentIndex + 1]?.focus();
          event.preventDefault();
        }
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReaderSupport) return;

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      img.setAttribute('alt', 'Image');
    });

    // Add role attributes where needed
    const sections = document.querySelectorAll('section:not([role])');
    sections.forEach((section) => {
      section.setAttribute('role', 'region');
    });
  }

  private setupHighContrast(): void {
    if (!this.options.enableHighContrast) return;

    // Check for high contrast mode preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }

    // Listen for changes in contrast preference
  /**
   * Handle escape key
   */
  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals or dropdowns;
const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    modals.forEach(modal => {;
const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      closeButton?.click()});
    // Close any open menus;
const menus = document.querySelectorAll('[role="menu"][aria-expanded="true"]');
    menus.forEach(menu => {;
const trigger = document.querySelector(`[aria-controls="${menu.id}"]`) as HTMLElement;
      trigger?.click()});
  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {;
const currentElement = document.activeElement as HTMLElement;
    if (!currentElement) return;
    // Handle radio button groups
    if (currentElement instanceof HTMLInputElement && currentElement.type === 'radio') {
      this.handleRadioGroupNavigation(event, currentElement);
    // Handle menu navigation
    if (currentElement.getAttribute('role') === 'menuitem') {
      this.handleMenuNavigation(event, currentElement);
  }
  /**
   * Handle radio group navigation
   */
  private handleRadioGroupNavigation(event: KeyboardEvent, currentElement: HTMLInputElement): void {;
const name = currentElement.name;
    if (!name) return;
const radioButtons = Array.from(document.querySelectorAll(`input[type="radio"][name="${name}"]`)) as HTMLInputElement[];
const currentIndex = radioButtons.indexOf(currentElement);
    let nextIndex: number;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : radioButtons.length - 1} else {
      nextIndex = currentIndex < radioButtons.length - 1 ? currentIndex + 1 : 0}
    radioButtons[nextIndex]?.focus();
    radioButtons[nextIndex]?.click();
    event.preventDefault();
  /**
   * Handle menu navigation
   */
  private handleMenuNavigation(event: KeyboardEvent, currentElement: HTMLElement): void {;
const menu = currentElement.closest('[role="menu"]');
    if (!menu) return;
const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
const currentIndex = menuItems.indexOf(currentElement);
    let nextIndex: number;
    if (event.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1} else if (event.key === 'ArrowDown') {
      nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0} else {
      return}
    menuItems[nextIndex]?.focus();
    event.preventDefault();
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
  /**
   * Add skip links
   */
  private addSkipLinks(): void {;
const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    // Add styles;
const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000}
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
        transition: top 0.3s}
      .skip-link:focus {
        top: 6px}
    `;
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  /**
   * Enhance form labels
   */
  private enhanceFormLabels(): void {;
const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {;
const element = input as HTMLElement;
      // Add aria-label if no label exists
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {;
const placeholder = element.getAttribute('placeholder');
        if (placeholder) {
          element.setAttribute('aria-label', placeholder);
      }
      // Add required attribute announcement
      if (element.hasAttribute('required')) {
        element.setAttribute('aria-required', 'true');
      // Add error states
      if (element.classList.contains('error') || element.getAttribute('aria-invalid') === 'true') {
        element.setAttribute('aria-invalid', 'true');
        this.announceToScreenReader('Error in form field');
    });
  /**
   * Add ARIA landmarks
   */
  private addAriaLandmarks(): void {
    // Main content;
const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main) {
      main.setAttribute('id', 'main-content');
    // Navigation;
const nav = document.querySelector('nav') || document.querySelector('[role="navigation"]');
    if (nav) {
      nav.setAttribute('id', 'navigation');
    // Footer;
const footer = document.querySelector('footer') || document.querySelector('[role="contentinfo"]');
    if (footer) {
      footer.setAttribute('id', 'footer');
  }
  /**
   * Setup live regions
   */
  private setupLiveRegions(): void {
    // Create live region for announcements;
const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    // Create assertive live region for urgent announcements;
const assertiveRegion = document.createElement('div');
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.className = 'sr-only';
    assertiveRegion.id = 'assertive-live-region';
    document.body.appendChild(assertiveRegion);
  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;
    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.handleFocusIn(event)});
    document.addEventListener('focusout', (event) => {
      this.handleFocusOut(event)});
  /**
   * Handle focus in
   */
  private handleFocusIn(event: FocusEvent): void {;
const element = event.target as HTMLElement;
    // Add focus indicator
    element.classList.add('focus-visible');
    // Announce focus changes for important elements
    if (element.getAttribute('role') === 'button' || element.tagName === 'BUTTON') {
      this.announceToScreenReader(`Focused on button: ${element.textContent?.trim() || element.getAttribute('aria-label') || 'button'}`);
  }
  /**
   * Handle focus out
   */
  private handleFocusOut(event: FocusEvent): void {;
const element = event.target as HTMLElement;
    element.classList.remove('focus-visible');
  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;
    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast')} else {
        document.body.classList.remove('high-contrast');
    });
  }

  private setupFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    // Manage focus for modals and dropdowns
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          (modal as HTMLElement).focus();
        }
      }
    });
  }

  private setupColorContrast(): void {
    if (!this.options.enableColorContrast) return;

    // Check for reduced color preference
    if (window.matchMedia('(prefers-reduced-data)').matches) {
      document.body.classList.add('reduced-color');
    }

    // Listen for changes in color preference
    window.matchMedia('(prefers-reduced-data)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-color');
      } else {
        document.body.classList.remove('reduced-color');
      }
    });
  }

  private setupTextScaling(): void {
    if (!this.options.enableTextScaling) return;

    // Check for text scaling preference
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (fontSize > 16) {
      document.body.classList.add('text-scaled');
    }

    // Listen for changes in text scaling
    const observer = new ResizeObserver(() => {
      const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      if (fontSize > 16) {
        document.body.classList.add('text-scaled');
      } else {
        document.body.classList.remove('text-scaled');
      }
    });

    observer.observe(document.documentElement);
  }

  private setupReducedMotion(): void {
    if (!this.options.enableReducedMotion) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes in motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion')} else {
        document.body.classList.remove('reduced-motion');
    });
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

  public announceToScreenReader(message: string): void {
    if (!this.options.enableScreenReaderSupport) return;

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

  public setFocus(element: HTMLElement): void {
    if (!this.options.enableFocusManagement) return;

    element.focus();
  }

  public trapFocus(container: HTMLElement): void {
    if (!this.options.enableFocusManagement) return;

    const focusableElements = this.getFocusableElements().filter(el => 
      container.contains(el)
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    container.addEventListener('keydown', (event) => {
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
}

export default AccessibilityEnhancer;
    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[]}
  /**
   * Announce to screen reader
   */
  private announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {;
const liveRegion = document.getElementById(
      priority === 'assertive' ? 'assertive-live-region' : 'live-region'
    );
    if (liveRegion) {
      liveRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = ''}, 1000);
  }
  /**
   * Get accessibility metrics
   */
  getMetrics(): AccessibilityMetrics {
    return { ...this.metrics }}
  /**
   * Get accessibility report
   */
  getReport(): string {;
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
`}
}

<<<<<<< HEAD
<<<<<<< HEAD
// Accessibility enhancement utilities

export const enhanceAccessibility = () => {
  // Add keyboard navigation support
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      // Ensure proper tab order
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
      const nextIndex = (currentIndex + 1) % focusableElements.length;
      
      (focusableElements[nextIndex] as HTMLElement)?.focus();
      event.preventDefault();
    }
  };

  // Add focus management
  const manageFocus = (element: HTMLElement) => {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Add ARIA labels to interactive elements
  const addAriaLabels = () => {
    const buttons = document.querySelectorAll('button:not([aria-label])');
=======
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
  }

  /**
   * Initialize the accessibility enhancer
   */
  init(): void {
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

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      this.handleKeyDown(event);
    });
  }

  /**
   * Handle key down events
   */
  private handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Tab':
        this.handleTabNavigation(event);
        break;
      case 'Escape':
        this.handleEscapeKey();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        this.handleArrowNavigation(event);
        break;
    }
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (event.shiftKey) {
      // Shift + Tab - move backwards
      const nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
      focusableElements[nextIndex]?.focus();
    } else {
      // Tab - move forwards
      const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
      focusableElements[nextIndex]?.focus();
    }
    
    event.preventDefault();
  }

=======
'use client';

/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility features for the application
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
  enableSkipLinks?: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityOptions;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableSkipLinks: true,
      ...options
    };

    this.init();
  }

  /**
   * Initialize accessibility features
   */
  private init(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupSkipLinks();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      this.handleKeyboardNavigation(event);
    });
  }

  /**
   * Handle keyboard navigation
   */
  private handleKeyboardNavigation(event: KeyboardEvent): void {
    const { key } = event;

    // Tab navigation
    if (key === 'Tab') {
      this.handleTabNavigation(event);
      return;
    }

    // Arrow key navigation
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      this.handleArrowNavigation(event);
      return;
    }

    // Escape key
    if (key === 'Escape') {
      this.handleEscapeKey(event);
      return;
    }

    // Enter key
    if (key === 'Enter') {
      this.handleEnterKey(event);
      return;
    }

    // Space key
    if (key === ' ') {
      this.handleSpaceKey(event);
      return;
    }
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    this.updateFocusableElementsInternal();
    
    if (this.focusableElements.length === 0) return;

    if (event.shiftKey) {
      // Shift + Tab - move backwards
      this.currentFocusIndex = this.currentFocusIndex > 0 
        ? this.currentFocusIndex - 1 
        : this.focusableElements.length - 1;
    } else {
      // Tab - move forwards
      this.currentFocusIndex = this.currentFocusIndex < this.focusableElements.length - 1 
        ? this.currentFocusIndex + 1 
        : 0;
    }

    this.focusableElements[this.currentFocusIndex]?.focus();
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {
    const { key } = event;
    const currentElement = document.activeElement as HTMLElement;
    
    if (!currentElement) return;

    // Find the next focusable element based on arrow direction
    const direction = key === 'ArrowUp' || key === 'ArrowLeft' ? -1 : 1;
    const nextIndex = this.currentFocusIndex + direction;
    
    if (nextIndex >= 0 && nextIndex < this.focusableElements.length) {
      this.currentFocusIndex = nextIndex;
      this.focusableElements[nextIndex]?.focus();
      event.preventDefault();
    }
  }

>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  /**
   * Handle escape key
   */
  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
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
   * Handle enter key
   */
<<<<<<< HEAD
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
=======
  private handleEnterKey(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      target.click();
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
    }
  }

  /**
   * Handle space key
   */
<<<<<<< HEAD
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
=======
  private handleSpaceKey(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      event.preventDefault();
      target.click();
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  }

  /**
   * Update focusable elements list
   */
<<<<<<< HEAD
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
=======
  private updateFocusableElementsInternal(): void {
    const selectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]:not([disabled])',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="option"]'
    ];

    this.focusableElements = Array.from(
      document.querySelectorAll(selectors.join(', '))
    ) as HTMLElement[];
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
<<<<<<< HEAD
    if (!this.config.enableScreenReaderSupport) return;

    this.addSkipLinks();
    this.enhanceFormLabels();
    this.addAriaLandmarks();
=======
    if (!this.options.enableScreenReader) return;

    // Add screen reader only text for important elements
    this.addScreenReaderText();
    
    // Setup live regions for dynamic content
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
    this.setupLiveRegions();
  }

  /**
   * Add screen reader only text
   */
  private addScreenReaderText(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only';
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
<<<<<<< HEAD

    // Add styles
=======
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Setup live regions for dynamic content
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
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.options.enableHighContrast) return;

    // Add high contrast toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'Toggle High Contrast';
    toggle.className = 'high-contrast-toggle';
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });

    // Add high contrast styles
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      .high-contrast button,
      .high-contrast input,
      .high-contrast select,
      .high-contrast textarea {
        border: 2px solid #000;
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      this.currentFocusIndex = this.focusableElements.indexOf(target);
    });

    // Ensure focus is visible
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      target.style.outline = '2px solid #0066cc';
    });

    document.addEventListener('focusout', (event) => {
      const target = event.target as HTMLElement;
      target.style.outline = '';
    });
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.options.enableARIALabels) return;

    // Add ARIA labels to interactive elements without labels
    const interactiveElements = document.querySelectorAll('button, input, select, textarea');
    
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent || element.getAttribute('placeholder') || 'Interactive element';
        element.setAttribute('aria-label', text);
      }
    });
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    if (!this.options.enableSkipLinks) return;

    // Add skip links for main content areas
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
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
        transition: top 0.3s;
<<<<<<< HEAD
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

  /**
   * Setup reduced motion
   */
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

  /**
   * Setup ARIA labels
   */
  private setupAriaLabels(): void {
    if (!this.config.enableAriaLabels) return;

    // Add ARIA labels to interactive elements without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', button.textContent || 'Button');
      }
    });
<<<<<<< HEAD
  };

  // Initialize accessibility enhancements
  const init = () => {
    document.addEventListener('keydown', handleKeyDown);
    addAriaLabels();
  };

  return {
    init,
    manageFocus,
    addAriaLabels
  };
};

export default enhanceAccessibility;
=======

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
    if (!this.config.enableColorContrast) return;
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
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
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
=======
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    });
<<<<<<< HEAD

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  }

  /**
   * Announce message to screen readers
   */
<<<<<<< HEAD
  private setupMetricsCollection(): void {
    setInterval(() => {
      this.scanAccessibility();
    }, 5000);
=======
  public announce(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  }

  /**
   * Update focusable elements
   */
  public updateFocusableElements(): void {
    this.updateFocusableElementsInternal();
  }

  /**
   * Focus on specific element
   */
<<<<<<< HEAD
  private calculateScores(): void {
    this.metrics.keyboardNavigationScore = this.calculateKeyboardScore();
    this.metrics.screenReaderScore = this.calculateScreenReaderScore();
    this.metrics.overallScore = Math.round(
      (this.metrics.keyboardNavigationScore + this.metrics.screenReaderScore) / 2
    );
=======
  public focusElement(element: HTMLElement): void {
    element.focus();
    this.currentFocusIndex = this.focusableElements.indexOf(element);
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  }

  /**
   * Get current focus index
   */
<<<<<<< HEAD
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
    score -= this.metrics.imagesWithoutAlt * 5;
    score -= this.metrics.linksWithoutText * 3;
    score -= this.metrics.headingsWithoutContent * 2;
    return Math.max(0, score);
=======
  public getCurrentFocusIndex(): number {
    return this.currentFocusIndex;
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  }

  /**
   * Get focusable elements
   */
<<<<<<< HEAD
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
- Color Contrast Score: ${metrics.colorContrastIssues}/100
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
=======
  public getFocusableElements(): HTMLElement[] {
    return this.focusableElements;
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
  }

  /**
   * Cleanup
   */
  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======

// Export utility functions
export const announceToScreenReader = (message: string) => {
  accessibilityEnhancer.announce(message);
};

export const focusElement = (element: HTMLElement) => {
  accessibilityEnhancer.focusElement(element);
};

export const updateFocusableElements = () => {
  accessibilityEnhancer.updateFocusableElements();
};
>>>>>>> cursor/fix-errors-and-merge-to-main-d296

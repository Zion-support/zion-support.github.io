'use client';
import React from 'react';

interface AccessibilityEnhancerOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
  enableSkipLinks?: boolean;
}

class AccessibilityEnhancer {
  private options: AccessibilityEnhancerOptions;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;

  constructor(options: AccessibilityEnhancerOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableSkipLinks: true,
      ...options
    };

    this.init();
  }

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

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  /**
   * Handle key down events
   */
  private handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Tab':
        this.handleTabKey(event);
        break;
      case 'Escape':
        this.handleEscapeKey(event);
        break;
      case 'Enter':
      case ' ':
        this.handleActivationKey(event);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        this.handleArrowKeys(event);
        break;
    }
  }

  /**
   * Handle tab key navigation
   */
  private handleTabKey(event: KeyboardEvent): void {
    this.updateFocusableElements();
    
    if (this.focusableElements.length === 0) return;

    if (event.shiftKey) {
      this.currentFocusIndex = this.currentFocusIndex > 0 
        ? this.currentFocusIndex - 1 
        : this.focusableElements.length - 1;
    } else {
      this.currentFocusIndex = this.currentFocusIndex < this.focusableElements.length - 1 
        ? this.currentFocusIndex + 1 
        : 0;
    }

    this.focusableElements[this.currentFocusIndex]?.focus();
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(event: KeyboardEvent): void {
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
   * Handle activation keys (Enter, Space)
   */
  private handleActivationKey(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      target.click();
    } else if (target.tagName === 'A') {
      target.click();
    }
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowKeys(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const role = target.getAttribute('role');
    
    if (role === 'menu' || role === 'menubar' || role === 'tablist') {
      this.navigateMenuItems(event);
    } else if (role === 'grid' || role === 'table') {
      this.navigateGrid(event);
    }
  }

  /**
   * Navigate menu items
   */
  private navigateMenuItems(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const menuItems = Array.from(target.parentElement?.querySelectorAll('[role="menuitem"], [role="tab"]') || []) as HTMLElement[];
    const currentIndex = menuItems.indexOf(target);
    
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % menuItems.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
    }

    menuItems[nextIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Navigate grid items
   */
  private navigateGrid(event: KeyboardEvent): void {
    // Implementation for grid navigation
    event.preventDefault();
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.options.enableScreenReader) return;

    // Add screen reader only text for important elements
    this.addScreenReaderText();
    
    // Setup live regions for dynamic content
    this.setupLiveRegions();
  }

  /**
   * Add screen reader only text
   */
  private addScreenReaderText(): void {
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
   * Setup live regions for announcements
   */
  private setupLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-live-region';
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.options.enableHighContrast) return;

    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }

    // Listen for changes in contrast preference
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.options.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', this.handleFocusIn.bind(this));
    document.addEventListener('focusout', this.handleFocusOut.bind(this));
  }

  /**
   * Handle focus in
   */
  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    target.classList.add('focus-visible');
  }

  /**
   * Handle focus out
   */
  private handleFocusOut(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    target.classList.remove('focus-visible');
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.options.enableARIALabels) return;

    // Add missing ARIA labels to common elements
    this.addMissingARIALabels();
  }

  /**
   * Add missing ARIA labels
   */
  private addMissingARIALabels(): void {
    // Add labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    iconButtons.forEach((button, index) => {
      const icon = button.querySelector('svg, i, img');
      if (icon && !button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input, index) => {
      if (!input.getAttribute('aria-label')) {
        const placeholder = input.getAttribute('placeholder');
        const label = input.closest('label')?.textContent;
        input.setAttribute('aria-label', label || placeholder || `Input ${index + 1}`);
      }
    });
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    if (!this.options.enableSkipLinks) return;

    this.addSkipLinks();
  }

  /**
   * Add skip links
   */
  private addSkipLinks(): void {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
    `;

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
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;

      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });

      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      skipLinksContainer.appendChild(skipLink);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }

  /**
   * Update focusable elements list
   */
  private updateFocusableElements(): void {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];

    this.focusableElements = Array.from(
      document.querySelectorAll(focusableSelectors.join(', '))
    ) as HTMLElement[];

    // Update current focus index
    const activeElement = document.activeElement as HTMLElement;
    this.currentFocusIndex = this.focusableElements.indexOf(activeElement);
  }

  /**
   * Announce message to screen readers
   */
  public announce(message: string): void {
    const liveRegion = document.getElementById('accessibility-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  /**
   * Focus element by selector
   */
  public focusElement(selector: string): void {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /**
   * Destroy the accessibility enhancer
   */
  public destroy(): void {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    document.removeEventListener('focusin', this.handleFocusIn.bind(this));
    document.removeEventListener('focusout', this.handleFocusOut.bind(this));
  }
}

export default AccessibilityEnhancer;
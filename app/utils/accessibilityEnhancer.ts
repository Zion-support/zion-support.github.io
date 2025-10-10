/**
 * Accessibility Enhancer
 * Provides advanced accessibility features and enhancements
 */

import { generateId, announceToScreenReader, trapFocus, FocusManager } from './a11y';

export interface AccessibilityEnhancementOptions {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableColorBlindSupport?: boolean;
}

export class AccessibilityEnhancer {
  private options: AccessibilityEnhancementOptions;
  private focusManager: FocusManager;
  private skipLinks: HTMLElement[] = [];
  private cleanupFunctions: (() => void)[] = [];

  constructor(options: AccessibilityEnhancementOptions = {}) {
    this.options = {
      enableSkipLinks: true,
      enableFocusManagement: true,
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      enableColorBlindSupport: false,
      ...options,
    };

    this.focusManager = new FocusManager();
    this.initialize();
  }

  /**
   * Initialize accessibility enhancements
   */
  private initialize(): void {
    if (typeof window === 'undefined') return;

    if (this.options.enableSkipLinks) {
      this.setupSkipLinks();
    }

    if (this.options.enableFocusManagement) {
      this.setupFocusManagement();
    }

    if (this.options.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    if (this.options.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    if (this.options.enableHighContrast) {
      this.setupHighContrastMode();
    }

    if (this.options.enableReducedMotion) {
      this.setupReducedMotion();
    }

    if (this.options.enableColorBlindSupport) {
      this.setupColorBlindSupport();
    }
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    const mainContent = document.querySelector('main') || document.querySelector('#main');
    if (mainContent) {
      const skipLink = this.createSkipLink('main-content', 'Skip to main content');
      document.body.insertBefore(skipLink, document.body.firstChild);
      this.skipLinks.push(skipLink);
    }
  }

  /**
   * Create skip link
   */
  private createSkipLink(targetId: string, text: string): HTMLElement {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 0;
      background: #000;
      color: #fff;
      padding: 8px 16px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 0 0 4px 0;
      transition: top 0.3s ease;
    `;

    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    return skipLink;
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Save focus when opening modals
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.hasAttribute('data-modal-trigger')) {
        this.focusManager.saveFocus();
      }
    });

    // Restore focus when closing modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.focusManager.restoreFocus();
      }
    });
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    // Add keyboard navigation to custom interactive elements
    const customButtons = document.querySelectorAll('[data-custom-button]');
    customButtons.forEach((button) => {
      const cleanup = this.makeKeyboardAccessible(button as HTMLElement);
      this.cleanupFunctions.push(cleanup);
    });

    // Setup arrow key navigation for lists
    const lists = document.querySelectorAll('[role="listbox"], [role="menu"]');
    lists.forEach((list) => {
      const cleanup = this.setupArrowKeyNavigation(list as HTMLElement);
      this.cleanupFunctions.push(cleanup);
    });
  }

  /**
   * Make element keyboard accessible
   */
  private makeKeyboardAccessible(element: HTMLElement): () => void {
    const role = element.getAttribute('data-role') || 'button';
    const tabindex = element.getAttribute('data-tabindex') || '0';

    element.setAttribute('role', role);
    element.setAttribute('tabindex', tabindex);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    };

    element.addEventListener('keydown', handleKeyDown);

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }

  /**
   * Setup arrow key navigation
   */
  private setupArrowKeyNavigation(container: HTMLElement): () => void {
    const items = container.querySelectorAll('[role="option"], [role="menuitem"]');
    let currentIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          currentIndex = Math.min(currentIndex + 1, items.length - 1);
          (items[currentIndex] as HTMLElement).focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          currentIndex = Math.max(currentIndex - 1, 0);
          (items[currentIndex] as HTMLElement).focus();
          break;
        case 'Home':
          e.preventDefault();
          currentIndex = 0;
          (items[currentIndex] as HTMLElement).focus();
          break;
        case 'End':
          e.preventDefault();
          currentIndex = items.length - 1;
          (items[currentIndex] as HTMLElement).focus();
          break;
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', button.textContent || 'Button');
      }
    });

    // Add ARIA descriptions to form fields
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      if (!input.getAttribute('aria-describedby')) {
        const description = input.getAttribute('data-description');
        if (description) {
          const id = generateId('description');
          input.setAttribute('aria-describedby', id);
          
          const descriptionElement = document.createElement('div');
          descriptionElement.id = id;
          descriptionElement.textContent = description;
          descriptionElement.className = 'sr-only';
          input.parentNode?.insertBefore(descriptionElement, input.nextSibling);
        }
      }
    });
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    if (prefersHighContrast) {
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
   * Setup reduced motion
   */
  private setupReducedMotion(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes in motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });
  }

  /**
   * Setup color blind support
   */
  private setupColorBlindSupport(): void {
    // Add color blind friendly indicators
    const colorElements = document.querySelectorAll('[data-color-indicator]');
    colorElements.forEach((element) => {
      const color = element.getAttribute('data-color-indicator');
      if (color) {
        element.setAttribute('aria-label', `Color: ${color}`);
      }
    });
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    announceToScreenReader(message, priority);
  }

  /**
   * Trap focus in container
   */
  trapFocus(container: HTMLElement): () => void {
    return trapFocus(container);
  }

  /**
   * Get focus manager
   */
  getFocusManager(): FocusManager {
    return this.focusManager;
  }

  /**
   * Cleanup all enhancements
   */
  cleanup(): void {
    this.cleanupFunctions.forEach(cleanup => cleanup());
    this.skipLinks.forEach(skipLink => skipLink.remove());
    this.cleanupFunctions = [];
    this.skipLinks = [];
  }
}

// Export default instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export utility functions
export const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  accessibilityEnhancer.announce(message, priority);
};

export const trapFocusInContainer = (container: HTMLElement) => {
  return accessibilityEnhancer.trapFocus(container);
};
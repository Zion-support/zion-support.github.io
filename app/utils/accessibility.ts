/**
 * Accessibility utilities for improving web accessibility
 */

export interface AccessibilityOptions {
  announceChanges?: boolean;
  highContrast?: boolean;
  reducedMotion?: boolean;
  focusVisible?: boolean;
}

export class AccessibilityManager {
  private options: AccessibilityOptions;
  private observer: MutationObserver | null = null;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      announceChanges: true,
      highContrast: false,
      reducedMotion: false,
      focusVisible: true,
      ...options,
    };
  }

  /**
   * Initialize accessibility features
   */
  init(): void {
    this.setupFocusManagement();
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupColorContrast();
    this.setupMotionPreferences();
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.options.focusVisible) return;

    // Add focus-visible class to focused elements
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (e) => {
      // Skip to main content
      if (e.key === 'Tab' && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        this.focusMainContent();
      }

      // Escape key handling
      if (e.key === 'Escape') {
        this.handleEscapeKey();
      }
    });
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.options.announceChanges) return;

    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-announcer';
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup color contrast
   */
  private setupColorContrast(): void {
    if (!this.options.highContrast) return;

    document.body.classList.add('high-contrast');
  }

  /**
   * Setup motion preferences
   */
  private setupMotionPreferences(): void {
    if (!this.options.reducedMotion) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
    }
  }

  /**
   * Focus main content area
   */
  private focusMainContent(): void {
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main) {
      (main as HTMLElement).focus();
    }
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach((modal) => {
      const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
      if (closeButton) {
        closeButton.click();
      }
    });
  }

  /**
   * Announce changes to screen readers
   */
  announce(message: string): void {
    if (!this.options.announceChanges) return;

    const announcer = document.getElementById('accessibility-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  }

  /**
   * Check if element is visible to screen readers
   */
  isVisibleToScreenReader(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      element.getAttribute('aria-hidden') !== 'true'
    );
  }

  /**
   * Get accessible name for element
   */
  getAccessibleName(element: HTMLElement): string {
    // Check for aria-label
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    // Check for aria-labelledby
    const labelledBy = element.getAttribute('aria-labelledby');
    if (labelledBy) {
      const labelElement = document.getElementById(labelledBy);
      if (labelElement) return labelElement.textContent || '';
    }

    // Check for associated label
    const id = element.getAttribute('id');
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`);
      if (label) return label.textContent || '';
    }

    // Fallback to text content
    return element.textContent || element.getAttribute('title') || '';
  }

  /**
   * Validate accessibility of element
   */
  validateElement(element: HTMLElement): string[] {
    const issues: string[] = [];

    // Check for missing alt text on images
    if (element.tagName === 'IMG') {
      const img = element as HTMLImageElement;
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push('Image missing alt text or aria-label');
      }
    }

    // Check for missing labels on form controls
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName)) {
      const accessibleName = this.getAccessibleName(element);
      if (!accessibleName) {
        issues.push('Form control missing accessible name');
      }
    }

    // Check for proper heading hierarchy
    if (element.tagName.match(/^H[1-6]$/)) {
      const level = parseInt(element.tagName.charAt(1));
      const previousHeading = element.previousElementSibling;
      if (previousHeading && previousHeading.tagName.match(/^H[1-6]$/)) {
        const prevLevel = parseInt(previousHeading.tagName.charAt(1));
        if (level > prevLevel + 1) {
          issues.push('Heading level skipped');
        }
      }
    }

    return issues;
  }

  /**
   * Cleanup
   */
  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Create default instance
export const accessibilityManager = new AccessibilityManager();
export default accessibilityManager;
/**;
 * Accessibility Enhancer Utility;
 * Provides comprehensive accessibility improvements for web applications;
 */;
export class AccessibilityEnhancer {;
  private focusableElements: HTMLElement[] = []
  private skipLinks: HTMLElement[] = []
  private landmarks: HTMLElement[] = []
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2;
  private isInitialized = false;

  constructor() {
    this.init()}/**;
   * Initialize accessibility enhancements;
   */;
  private init(): void {if (this.isInitialized) return;}
    this.setupFocusManagement();
    this.setupKeyboardNavigation();
    this.setupSkipLinks();
    this.setupLandmarks();
    this.setupAriaLabels();
    this.setupColorContrast();
    this.setupScreenReaderSupport();
;
    this.isInitialized = true;}/**;
   * Setup focus management;
   */;
  private setupFocusManagement(): void {// Update focusable elements;}
    this.updateFocusableElements();
;
    // Add focus indicators;
    this.addFocusIndicators();
;
    // Handle focus trapping;
    this.setupFocusTrapping();}/**;
   * Update list of focusable elements;
   */;
  private updateFocusableElements(): void {const selectors = [}
      'a[href]',
      'button: not([disabled])',
      'input: not([disabled])',
      'select: not([disabled])',
      'textarea: not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ]
    this.focusableElements = Array.from();
      document.querySelectorAll(selectors.join(', '));
    ) as HTMLElement[]}/**;
   * Add focus indicators;
   */;
  private addFocusIndicators(): void {const style = document.createElement('style');}
    style.textContent = `
      *:focus {outline: 2px solid #3b82f6 !important,}
        outline-offset: 2px !important,}*:focus: not(:focus-visible) {,
        outline: none !important,}*:focus-visible {outline: 2px solid #3b82f6 !important,}
        outline-offset: 2px !important,}`
    document.head.appendChild(style);
  }
;
  /**;
   * Setup focus trapping for modals;
   */;
  private setupFocusTrapping(): void {document.addEventListener('keydown', (event) => {}
      if (event.key === 'Tab') {;
        this.handleTabKey(event);}else if (event.key === 'Escape') {this.handleEscapeKey(event);}else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {this.handleArrowKeys(event);}});
  }
;
  /**;
   * Handle tab key navigation;
   */;
  private handleTabKey(event: KeyboardEvent): void {,}
    const activeElement = document.activeElement as HTMLElement;
    const currentIndex = this.focusableElements.indexOf(activeElement);
;
    if (currentIndex === -1) return;
;
    if (event.shiftKey) {;
      // Shift + Tab (backward);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : this.focusableElements.length - 1;
      this.focusableElements[prevIndex]?.focus();}else {// Tab (forward)}
      const nextIndex = currentIndex < this.focusableElements.length - 1 ? currentIndex + 1 : 0;
      this.focusableElements[nextIndex]?.focus();}}
;
  /**;
   * Handle escape key;
   */;
    const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    modals.forEach(modal => {);
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      closeButton?.click();});
    // Close any open menus;
;
      trigger?.click();
    });
  }
;
  /**;
   * Handle arrow key navigation;
   */;
  private handleArrowKeys(event: KeyboardEvent): void {,}
    const activeElement = document.activeElement as HTMLElement;
;
    // Handle arrow keys for radio groups, menus, etc.;
    if (activeElement.getAttribute('role') === 'menuitem' ||;
        activeElement.getAttribute('type') === 'radio') {;
      this.handleMenuNavigation(event);}}
;
  /**;
   * Handle menu navigation with arrow keys;
   */;
  private handleMenuNavigation(event: KeyboardEvent): void {,}
    const activeElement = document.activeElement as HTMLElement;
    const menuItems = Array.from();
      activeElement.closest('[role="menu"]')?.querySelectorAll('[role="menuitem"]') || []
    ) as HTMLElement[]
    const currentIndex = menuItems.indexOf(activeElement);
;
    if (currentIndex === -1) return;
;
    let nextIndex = currentIndex;
;
    switch (event.key) {;
      case 'ArrowDown':;
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':;
        nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
        break;
      case 'ArrowRight':;
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowLeft':;
        nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
        break;}menuItems[nextIndex]?.focus();
    event.preventDefault();
  }
;
  /**;
   * Setup skip links;
   */;
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50',
    document.body.insertBefore(skipLink, document.body.firstChild);
;
    this.skipLinks.push(skipLink);}/**;
   * Setup landmarks;
   */;
      }
    });
    // Setup banner landmark;
;
  /**;
   * Setup ARIA labels;
   */;
      const icon = button.querySelector('svg');
      if (icon) {;
        const iconName = icon.getAttribute('data-icon') || 'button'
        button.setAttribute('aria-label', iconName);}});
    // Add ARIA labels to form inputs;
;
        }
      }
    });
  }
;
  /**;
   * Setup color contrast improvements;
   */;
    const handleContrastChange = (e: MediaQueryListEvent) => {,
      if (e.matches) {;
        document.body.classList.add('high-contrast');}else {document.body.classList.remove('high-contrast');}}}
;
    mediaQuery.addEventListener('change', handleContrastChange);
    handleContrastChange(mediaQuery);
  }
;
  /**;
   * Setup screen reader support;
   */;
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only'
    liveRegion.id = 'live-region'
    document.body.appendChild(liveRegion);
;
    // Announce page changes;
    this.announcePageChange();}/**;
   * Announce page changes to screen readers;
   */;
  private announcePageChange(): void {const title = document.title;}
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {;
      liveRegion.textContent = `Page loaded: ${title,}`
    }
  }
;
  /**;
   * Announce messages to screen readers;
   */;
  public announce(message: string): void {,}
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {;
      liveRegion.textContent = message;}}
;
  /**;
   * Update focusable elements (call when DOM changes);
   */;
  public updateFocusableElements(): void {this.updateFocusableElements();}}/**;
   * Get current focusable elements;
   */;
  public getFocusableElements(): HTMLElement[] {return [...this.focusableElements]}/**;
   * Focus first focusable element;
   */;
  public focusFirst(): void {this.focusableElements[0]?.focus();}}/**;
   * Focus last focusable element;
   */;
  public focusLast(): void {this.focusableElements[this.focusableElements.length - 1]?.focus();}}/**;
   * Cleanup and destroy;
   */;
  public destroy(): void {this.isInitialized = false;}
    this.focusableElements = []
    this.skipLinks = []
// Create global instance;
export const accessibilityEnhancer = new AccessibilityEnhancer();
;
// Export utility functions;
export const announceToScreenReader = (message: string) => {
  accessibilityEnhancer.announce(message)
}
;
export const updateFocusableElements = () => {
  accessibilityEnhancer.updateFocusableElements();
}
;
export const focusFirstElement = () => {
  accessibilityEnhancer.focusFirst();
}
;
export const focusLastElement = () => {
  accessibilityEnhancer.focusLast();
}
;
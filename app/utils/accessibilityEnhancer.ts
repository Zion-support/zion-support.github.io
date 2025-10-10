
export class AccessibilityEnhancer {
  private focusableElements: HTMLElement[] = []
  private skipLinks: HTMLElement[] = []
  private landmarks: HTMLElement[] = []
  private isInitialized = false;

  constructor() {
    this.init();
  }

  /**
   * Initialize accessibility enhancements
   */
  private init(): void {
    if (this.isInitialized) return;
    
    this.setupFocusManagement();
    this.setupKeyboardNavigation();
    this.setupSkipLinks();
    this.setupLandmarks();
    this.setupAriaLabels();
    this.setupColorContrast();
    this.setupScreenReaderSupport();
    
    this.isInitialized = true;
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Update focusable elements
    this.updateFocusableElements();
    
    // Add focus indicators
    this.addFocusIndicators();
    
    // Handle focus trapping
    this.setupFocusTrapping();
  }

  /**
   * Update list of focusable elements
   */
  private updateFocusableElements(): void {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ]
    
    this.focusableElements = Array.from(
      document.querySelectorAll(selectors.join(', '))
    ) as HTMLElement[]
  }

  /**
   * Add focus indicators
   */
  private addFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      *:focus:not(:focus-visible) {
        outline: none !important;
      }
      
      *:focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup focus trapping for modals
   */
  private setupFocusTrapping(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleTabKey(event);
      } else if (event.key === 'Escape') {
        this.handleEscapeKey(event);
      } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.handleArrowKeys(event);
      }
    })
  }

  /**
   * Handle tab key navigation
   */
  private handleTabKey(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    const currentIndex = this.focusableElements.indexOf(activeElement);
    
    if (currentIndex === -1) return;
    
    if (event.shiftKey) {
      // Shift + Tab (backward)
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : this.focusableElements.length - 1;
      this.focusableElements[prevIndex]?.focus();
    } else {
      // Tab (forward)
      const nextIndex = currentIndex < this.focusableElements.length - 1 ? currentIndex + 1 : 0;
      this.focusableElements[nextIndex]?.focus();
    }
  }

  /**
   * Handle escape key
   */

// Keyboard Navigation Utility
export class KeyboardNavigationManager {
  private static instance: KeyboardNavigationManager;
  private focusableElements: string[] = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ];
  private currentFocusIndex: number = 0;
  private focusableList: Element[] = [];
  
  static getInstance(): KeyboardNavigationManager {
    if (!KeyboardNavigationManager.instance) {
      KeyboardNavigationManager.instance = new KeyboardNavigationManager();
    }
    return KeyboardNavigationManager.instance;
  }
  
  updateFocusableElements(): void {
    this.focusableList = Array.from(
      document.querySelectorAll(this.focusableElements.join(','))
    );
    this.currentFocusIndex = 0;
  }
  
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      event.preventDefault();
      
      if (event.shiftKey) {
        this.focusPrevious();
      } else {
        this.focusNext();
      }
    }
    
    if (event.key === 'Escape') {
      this.closeModals();
    }
    
    if (event.key === 'Enter' || event.key === ' ') {
      this.handleActivation(event);
    }
  }
  
  focusNext(): void {
    this.currentFocusIndex = (this.currentFocusIndex + 1) % this.focusableList.length;
    this.focusableList[this.currentFocusIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    (this.focusableList[this.currentFocusIndex] as HTMLElement)?.focus();
  }
  
  focusPrevious(): void {
    this.currentFocusIndex = this.currentFocusIndex === 0 
      ? this.focusableList.length - 1 
      : this.currentFocusIndex - 1;
    this.focusableList[this.currentFocusIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    (this.focusableList[this.currentFocusIndex] as HTMLElement)?.focus();
  }
  
  closeModals(): void {
    const modals = document.querySelectorAll('[role="dialog"], .modal, [aria-modal="true"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], .close, [data-dismiss="modal"]');
      (closeButton as HTMLElement)?.click();
    });
  }
  
  handleActivation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target.getAttribute('role') === 'button' || target.tagName === 'BUTTON') {
      target.click();
    }
  }
  
  initialize(): void {
    this.updateFocusableElements();
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    
    // Update focusable elements when DOM changes
    const observer = new MutationObserver(() => {
      this.updateFocusableElements();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['disabled', 'tabindex']
    });
  }
}

export const keyboardNavigationManager = KeyboardNavigationManager.getInstance();


export interface A11yReport {
  errors: A11yError[]

    // Clear after announcement
    setTimeout(() => {

      announcer.textContent = ''
    }, 1000)

  }

  /**
   * Set focus to element with announcement
   */
  focus(element: HTMLElement, announceMessage?: string): void {
    if (!this.config.enableFocusManagement) return;

    this.focusHistory.push(document.activeElement as HTMLElement);
    element.focus();
    
    if (announceMessage) {
      this.announce(announceMessage);
    }
  }

  /**
   * Return focus to previous element
   */
  returnFocus(): void {
    if (!this.config.enableFocusManagement) return;

    const previousElement = this.focusHistory.pop();
    if (previousElement) {
      previousElement.focus();
    }
  }

  /**
   * Trap focus within container
   */
  trapFocus(container: HTMLElement): void {
    if (!this.config.enableFocusManagement) return;

    const focusableElements = this.getFocusableElements(container);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }

      if (e.key === 'Escape') {
        element.dispatchEvent(new CustomEvent('close'))

      }
    });
  }

  /**
   * Enhance button accessibility
   */
  enhanceButton(button: HTMLButtonElement): void {
    if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
      button.setAttribute('aria-label', 'Button');
    }

    element.addEventListener('keydown', handleTabKey)
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey)
    }
  }

  // Check if element is visible to screen readers
  public isAccessible(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element)
    return !(
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.opacity === '0' ||
      element.hasAttribute('hidden') ||
      element.getAttribute('aria-hidden') === 'true'
    )

  }
}

// Utility functions
export const accessibilityUtils = {
  /**
   * Create skip link
   */
  createSkipLink(text: string = 'Skip to main content', target: string = 'main'): HTMLElement {
    const skipLink = document.createElement('a');
    skipLink.href = `#${target}`;
    skipLink.textContent = text;
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
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    return skipLink;
  },

  /**
   * Add ARIA attributes to element
   */
  addAriaAttributes(element: HTMLElement, attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  /**
   * Remove ARIA attributes from element
   */
  removeAriaAttributes(element: HTMLElement, attributes: string[]): void {
    attributes.forEach(attr => {
      element.removeAttribute(attr);
    });
  }
};

export default AccessibilityManager;


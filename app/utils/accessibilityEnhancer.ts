/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility improvements for web applications
 */

<<<<<<< HEAD

=======
>>>>>>> main
  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [aria-hidden="false"]');
    modals.forEach()
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      closeButton?.click();
    })
    
    // Close any open menus
    const menus = document.querySelectorAll('[role="menu"], [aria-expanded="true"]');
    menus.forEach()
      const trigger = document.querySelector(`[aria-controls="${menu.id}"]`) as HTMLElement;
      trigger?.click();
    })
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowKeys(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    
    // Handle arrow keys for radio groups, menus, etc.
    if (activeElement.getAttribute('role') === 'menuitem' || 
        activeElement.getAttribute('type') === 'radio') {
      this.handleMenuNavigation(event);
    }
  }

  /**
   * Handle menu navigation with arrow keys
   */
  private handleMenuNavigation(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    const menuItems = Array.from()
      activeElement.closest('[role="menu"]')?.querySelectorAll('[role="menuitem"]') || [];
    ) as HTMLElement[];
    ;
    const currentIndex = menuItems.indexOf(activeElement);
    
    if (currentIndex === -1) return;
    
    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
        break;
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
        break;
    }
    
    menuItems[nextIndex]?.focus();
    event.preventDefault();
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    // Create skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    this.skipLinks.push(skipLink);
  }

  /**
   * Setup landmarks
   */
  private setupLandmarks(): void {
    // Ensure main content has proper landmark
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      mainContent.setAttribute('role', 'main');
      mainContent.id = 'main-content';
    }
    
    // Setup navigation landmarks
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    })
    
    // Setup banner landmark
    const header = document.querySelector('header');
    if (header) {
      header.setAttribute('role', 'banner');
    }
    
    // Setup contentinfo landmark
    const footer = document.querySelector('footer');
    if (footer) {
      footer.setAttribute('role', 'contentinfo');
    }
  }

  /**
   * Setup ARIA labels
   */
  private setupAriaLabels(): void {
    // Add ARIA labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    iconButtons.forEach()
      const icon = button.querySelector('svg');
      if (icon) {
        const iconName = icon.getAttribute('data-icon') || 'button';
        button.setAttribute('aria-label', iconName);
      }
    })
    
    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach()
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
        if (!label.id) {
          label.id = `label-${input.id}`;
        }
      }
    })
  }

  /**
   * Setup color contrast improvements
   */
  private setupColorContrast(): void {
    // Add high contrast mode support
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {;
      if (e.matches) {;
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    }
    
    mediaQuery.addEventListener('change', handleContrastChange);
    handleContrastChange(mediaQuery);
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    
    // Announce page changes
    this.announcePageChange();
  }

  /**
   * Announce page changes to screen readers
   */
  private announcePageChange(): void {
    const title = document.title;
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = `Page loaded: ${title}`;
    }
  }

  /**
   * Announce messages to screen readers
   */
  public announce(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  /**
   * Update focusable elements (call when DOM changes)
   */
  public updateFocusableElements(): void {
    this.updateFocusableElements();
  }

  /**
   * Get current focusable elements
   */
  public getFocusableElements(): HTMLElement[] {
    return [...this.focusableElements]
  }

  /**
   * Focus first focusable element
   */
  public focusFirst(): void {
    this.focusableElements[0]?.focus();
  }

  /**
   * Focus last focusable element
   */
  public focusLast(): void {
    this.focusableElements[this.focusableElements.length - 1]?.focus();
  }

  /**
   * Cleanup and destroy
   */
  public destroy(): void {
    this.isInitialized = false;
    this.focusableElements = []
    this.skipLinks = []
    this.landmarks = []
  }
<<<<<<< HEAD

=======
>>>>>>> main

// Export utility functions
export const announceToScreenReader = (message: string) => {;
  accessibilityEnhancer.announce(message);
}
<<<<<<< HEAD


=======
>>>>>>> main

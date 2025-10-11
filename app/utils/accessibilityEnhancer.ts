/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility features for web applications
 */

export class AccessibilityEnhancer {
  private focusableElements: HTMLElement[] = []
  private landmarks: HTMLElement[] = []
  private isInitialized = false

  constructor() {
    this.init()
  }

  /**
   * Initialize the accessibility enhancer
   */
  init(): void {
    if (this.isInitialized) return

    this.updateFocusableElements()
    this.setupKeyboardNavigation()
    this.setupScreenReaderSupport()
    this.setupHighContrastMode()
    this.setupFocusManagement()
    this.setupLandmarks()

    this.isInitialized = true
  }

  /**
   * Update list of focusable elements
   */
  updateFocusableElements(): void {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ]

    this.focusableElements = Array.from(
      document.querySelectorAll(focusableSelectors.join(', '))
    ) as HTMLElement[]
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'Tab':
          this.handleTabNavigation(event)
          break
        case 'Escape':
          this.handleEscapeKey(event)
          break
        case 'Enter':
        case ' ':
          this.handleActivation(event)
          break
      }
    })
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    if (event.shiftKey) {
      this.focusPrevious()
    } else {
      this.focusNext()
    }
  }

  /**
   * Focus next element
   */
  focusNext(): void {
    const currentIndex = this.focusableElements.indexOf(document.activeElement as HTMLElement)
    const nextIndex = (currentIndex + 1) % this.focusableElements.length
    this.focusableElements[nextIndex]?.focus()
  }

  /**
   * Focus previous element
   */
  focusPrevious(): void {
    const currentIndex = this.focusableElements.indexOf(document.activeElement as HTMLElement)
    const prevIndex = currentIndex <= 0 ? this.focusableElements.length - 1 : currentIndex - 1
    this.focusableElements[prevIndex]?.focus()
  }

  /**
   * Focus first element
   */
  focusFirst(): void {
    this.focusableElements[0]?.focus()
  }

  /**
   * Focus last element
   */
  focusLast(): void {
    this.focusableElements[this.focusableElements.length - 1]?.focus()
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]')
    modals.forEach(modal => {
      if (modal.getAttribute('aria-hidden') !== 'true') {
        modal.setAttribute('aria-hidden', 'true')
        modal.style.display = 'none'
      }
    })
  }

  /**
   * Handle activation (Enter or Space)
   */
  private handleActivation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement
    if (target && (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button')) {
      event.preventDefault()
      target.click()
    }
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', 'polite')
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.id = 'accessibility-announcements'
    document.body.appendChild(liveRegion)
  }

  /**
   * Announce to screen readers
   */
  announce(message: string): void {
    const liveRegion = document.getElementById('accessibility-announcements')
    if (liveRegion) {
      liveRegion.textContent = message
    }
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    // Check for system preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast')
    }

    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast')
      } else {
        document.body.classList.remove('high-contrast')
      }
    })
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Trap focus in modals
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])')
        if (modal) {
          this.trapFocusInModal(event, modal as HTMLElement)
        }
      }
    })
  }

  /**
   * Trap focus within a modal
   */
  private trapFocusInModal(event: KeyboardEvent, modal: HTMLElement): void {
    const focusableElements = modal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }
  }

  /**
   * Setup landmarks
   */
  private setupLandmarks(): void {
    const landmarkSelectors = [
      '[role="banner"]',
      '[role="navigation"]',
      '[role="main"]',
      '[role="complementary"]',
      '[role="contentinfo"]',
      'header',
      'nav',
      'main',
      'aside',
      'footer'
    ]

    this.landmarks = Array.from(
      document.querySelectorAll(landmarkSelectors.join(', '))
    ) as HTMLElement[]
  }

  /**
   * Skip to main content
   */
  skipToMain(): void {
    const main = document.querySelector('main, [role="main"]') as HTMLElement
    if (main) {
      main.focus()
      main.scrollIntoView()
      this.announce('Skipped to main content')
    }
  }

  /**
   * Skip to navigation
   */
  skipToNavigation(): void {
    const nav = document.querySelector('nav, [role="navigation"]') as HTMLElement
    if (nav) {
      nav.focus()
      nav.scrollIntoView()
      this.announce('Skipped to navigation')
    }
  }

  /**
   * Get accessibility report
   */
  getAccessibilityReport(): {
    focusableElements: number
    landmarks: number
    imagesWithoutAlt: number
    buttonsWithoutLabels: number
  } {
    const images = document.querySelectorAll('img')
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt).length

    const buttons = document.querySelectorAll('button')
    const buttonsWithoutLabels = Array.from(buttons).filter(button => {
      const text = button.textContent?.trim()
      const ariaLabel = button.getAttribute('aria-label')
      const ariaLabelledBy = button.getAttribute('aria-labelledby')
      return !text && !ariaLabel && !ariaLabelledBy
    }).length

    return {
      focusableElements: this.focusableElements.length,
      landmarks: this.landmarks.length,
      imagesWithoutAlt,
      buttonsWithoutLabels
    }
  }

  /**
   * Cleanup
   */
  destroy(): void {
    this.focusableElements = []
    this.landmarks = []
  }
}

// Create global instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export utility functions
export const announceToScreenReader = (message: string) => {
  accessibilityEnhancer.announce(message);
}

export const updateFocusableElements = () => {
  accessibilityEnhancer.updateFocusableElements();
}

export const skipToMain = () => {
  accessibilityEnhancer.skipToMain();
}

export const skipToNavigation = () => {
  accessibilityEnhancer.skipToNavigation();
}

export const focusFirst = () => {
  accessibilityEnhancer.focusFirst();
}

export const focusLast = () => {
  accessibilityEnhancer.focusLast();
}
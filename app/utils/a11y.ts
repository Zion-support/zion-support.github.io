/**
 * Accessibility (A11Y) Utilities
 * Provides helpers for improving web accessibility
 */
/**
 * Generate unique ID for aria-describedby and aria-labelledby
 */export function generateId(prefix;

export class FocusManager {
  private previousActiveElement: HTMLElement | null = null
  saveFocus(): void {
    this.previousActiveElement = document.activeElement as HTMLElement}
  }
  restoreFocus(): void {
    if (this.previousActiveElement) {
      this.previousActiveElement.focus()}
    }
  }
  moveFocusInside(container: HTMLElement): void {
    ;

const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ;

const firstFocusable = focusableElements[0] as HTMLElement
    firstFocusable?.focus()}
  }
}

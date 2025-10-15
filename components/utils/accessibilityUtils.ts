<<<<<<< HEAD
/// Comment

export function accessibilityUtils() {
  /// Comment
  return null;
}
=======
export const accessibilityUtils = {
  // Check if element is focusable
  isFocusable: (element: HTMLElement): boolean => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    return element.matches(focusableSelectors);
  },

  // Get all focusable elements
  getFocusableElements: (container: HTMLElement = document.body): HTMLElement[] => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
  },

  // Set focus to element
  setFocus: (element: HTMLElement): void => {
    element.focus();
  },

  // Check if element is visible
  isVisible: (element: HTMLElement): boolean => {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
  }
};
>>>>>>> 82730201b6fc9753a1b36a2b09669d51935f2624

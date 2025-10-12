// Utility file: accessibilityUtils
export const accessibilityUtils = {
  /**
   * Check if element is visible to screen readers
   */
  isVisibleToScreenReader(element: HTMLElement): boolean {
    const styles = window.getComputedStyle(element);
    return styles.display !== 'none' && 
           styles.visibility !== 'hidden' && 
           element.getAttribute('aria-hidden') !== 'true';
  },

  /**
   * Get accessible name for element
   */
  getAccessibleName(element: HTMLElement): string {
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
      const labelElement = document.getElementById(ariaLabelledBy);
      if (labelElement) return labelElement.textContent || '';
    }

    const title = element.getAttribute('title');
    if (title) return title;

    return element.textContent || '';
  },

  /**
   * Check if element has proper focus management
   */
  hasProperFocus(element: HTMLElement): boolean {
    return element.tabIndex >= 0 || 
           element.tagName === 'A' || 
           element.tagName === 'BUTTON' || 
           element.tagName === 'INPUT' || 
           element.tagName === 'TEXTAREA' || 
           element.tagName === 'SELECT';
  }
};
export const accessibilityUtils = {
  focusElement: (element: HTMLElement) => {
    element.focus()
  },
  
  announceToScreenReader: (message: string) => {
    const announcement = document.createElement('div'
    announcement.setAttribute('aria-live', 'polite'
    announcement.setAttribute('aria-atomic', 'true'
    announcement.className = 'sr-only'
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"
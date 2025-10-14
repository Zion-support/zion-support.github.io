export const accessibilityUtils = {
  focusElement: (element: HTMLElement) => {
    element.focus()
  },
  
  announceToScreenReader: (message: string) => {
    const announcement = document.createElement(&apos;div&apos;)
    announcement.setAttribute(&apos;aria-live&apos;, &apos;polite&apos;)
    announcement.setAttribute(&apos;aria-atomic&apos;, &apos;true&apos;)
    announcement.className = &apos;sr-only&apos;
    announcement.textContent = message
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  },
  
    setTimeout(() => document.body.removeChild(announcement), 1000)
  },

  getFocusableElements: (container: HTMLElement) => {
    return container.querySelectorAll(
      &apos;button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])&apos;
    )
  }
}
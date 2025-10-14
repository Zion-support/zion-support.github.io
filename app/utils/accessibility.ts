export const accessibilityUtils = {
  addSkipLink: () => {
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus:not-sr-only'
    document.body.insertBefore(skipLink, document.body.firstChild)
  },

  addAriaLabels: (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label)
  },

  addRole: (element: HTMLElement, role: string) => {
    element.setAttribute('role', role)
  }
}
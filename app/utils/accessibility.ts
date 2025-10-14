export const accessibilityUtils = {
  addSkipLink: () => {
    const skipLink = document.createElement(&apos;a&apos;)
    skipLink.href = &apos;#main-content&apos;
    skipLink.textContent = &apos;Skip to main content&apos;;
    skipLink.className = &apos;sr-only focus: not-sr-only&apos;;
    document.body.insertBefore(skipLink, document.body.firstChild)
  },
  
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      &apos;button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])&apos;
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === &apos;Tab&apos;) {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }
    
    element.addEventListener(&apos;keydown&apos;, handleTabKey)
    
    return () => {
      element.removeEventListener(&apos;keydown&apos;, handleTabKey)
    }

  addAriaLabels: (element: HTMLElement, label: string) => {
    element.setAttribute(&apos;aria-label&apos;, label)
  },

  addRole: (element: HTMLElement, role: string) => {
    element.setAttribute(&apos;role&apos;, role)
  }
}
}
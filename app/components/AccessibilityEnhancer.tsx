import { useEffect } from 'react'

const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Skip to main content functionality
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault()
        const navigation = document.querySelector('nav')
        if (navigation) {
          navigation.focus()
          navigation.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {
        e.preventDefault()
        const mainContent = document.querySelector('main')
        if (mainContent) {
          mainContent.focus()
          mainContent.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Skip to footer with Alt + F
      if (e.altKey && e.key === 'f') {
        e.preventDefault()
        const footer = document.querySelector('footer')
        if (footer) {
          footer.focus()
          footer.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyDown)

    // Add focus indicators
    const style = document.createElement('style')
    style.textContent = `
      *:focus {
        outline: 2px solid #8b5cf6 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #8b5cf6;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
      }
    `
    document.head.appendChild(style)

    // Add skip links
    const skipLinks = document.createElement('div')
    skipLinks.innerHTML = `
      <a href="#main" class="skip-link">Skip to main content</a>
      <a href="#nav" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `
    document.body.insertBefore(skipLinks, document.body.firstChild)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.head.removeChild(style)
      document.body.removeChild(skipLinks)
    }
  }, [])

  return null
}

export default AccessibilityEnhancer
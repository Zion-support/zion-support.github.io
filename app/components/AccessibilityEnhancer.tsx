import React, { useEffect, ReactNode } from 'react'

interface AccessibilityEnhancerProps {
  children: ReactNode
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip if not in browser environment
    if (typeof window === 'undefined') return

    // Initialize accessibility features
    const initAccessibility = () => {
      // Add skip navigation link
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg'
      skipLink.setAttribute('tabindex', '1')
      document.body.insertBefore(skipLink, document.body.firstChild)

      // Add focus indicators
      const style = document.createElement('style')
      style.textContent = `
        .focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-slate-900 {
            background-color: #000000;
          }
          .text-white {
            color: #ffffff;
          }
          .text-gray-300 {
            color: #cccccc;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `
      document.head.appendChild(style)

      // Add ARIA landmarks
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
        main.setAttribute('id', 'main-content')
      }

      // Add navigation landmarks
      const navs = document.querySelectorAll('nav')
      navs.forEach((nav, index) => {
        if (!nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation')
          nav.setAttribute('aria-label', `Navigation ${index + 1}`)
        }
      })

      // Add header landmarks
      const headers = document.querySelectorAll('header')
      headers.forEach(header => {
        if (!header.getAttribute('role')) {
          header.setAttribute('role', 'banner')
        }
      })

      // Add footer landmarks
      const footers = document.querySelectorAll('footer')
      footers.forEach(footer => {
        if (!footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo')
        }
      })

      // Enhance form accessibility
      const forms = document.querySelectorAll('form')
      forms.forEach(form => {
        if (!form.getAttribute('role')) {
          form.setAttribute('role', 'form')
        }
      })

      // Add button roles where needed
      const buttons = document.querySelectorAll('button, [role="button"]')
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')
        }
      })

      // Add link accessibility
      const links = document.querySelectorAll('a')
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link')
        }
        if (link.getAttribute('target') === '_blank') {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('aria-label', `${link.textContent} (opens in new tab)`)
        }
      })

      // Add image alt text where missing
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', 'Image')
        }
      })

      // Add table accessibility
      const tables = document.querySelectorAll('table')
      tables.forEach(table => {
        if (!table.getAttribute('role')) {
          table.setAttribute('role', 'table')
        }
        const caption = table.querySelector('caption')
        if (!caption) {
          const newCaption = document.createElement('caption')
          newCaption.textContent = 'Data table'
          table.insertBefore(newCaption, table.firstChild)
        }
      })

      // Add list accessibility
      const lists = document.querySelectorAll('ul, ol')
      lists.forEach(list => {
        if (!list.getAttribute('role')) {
          list.setAttribute('role', list.tagName === 'UL' ? 'list' : 'list')
        }
      })

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      headings.forEach(heading => {
        if (!heading.getAttribute('id')) {
          const id = heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
          if (id) {
            heading.setAttribute('id', id)
          }
        }
      })

      // Add focus management
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      )

      // Handle keyboard navigation
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation')
        }
      }

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation')
      }

      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleMouseDown)

      // Add live region for announcements
      const liveRegion = document.createElement('div')
      liveRegion.setAttribute('aria-live', 'polite')
      liveRegion.setAttribute('aria-atomic', 'true')
      liveRegion.className = 'sr-only'
      liveRegion.id = 'live-region'
      document.body.appendChild(liveRegion)

      // Add color scheme support
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      const updateColorScheme = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
      prefersDark.addEventListener('change', updateColorScheme)
      updateColorScheme(prefersDark)

      // Add reduced motion support
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
      const updateMotionPreference = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion')
        } else {
          document.documentElement.classList.remove('reduce-motion')
        }
      }
      prefersReducedMotion.addEventListener('change', updateMotionPreference)
      updateMotionPreference(prefersReducedMotion)

      // Add high contrast support
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)')
      const updateContrastPreference = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast')
        } else {
          document.documentElement.classList.remove('high-contrast')
        }
      }
      prefersHighContrast.addEventListener('change', updateContrastPreference)
      updateContrastPreference(prefersHighContrast)
    }

    // Initialize accessibility features
    initAccessibility()

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]')
      if (skipLink) {
        skipLink.remove()
      }
      
      const liveRegion = document.getElementById('live-region')
      if (liveRegion) {
        liveRegion.remove()
      }
    }
  }, [])

  return <>{children}</>
}

export default AccessibilityEnhancer
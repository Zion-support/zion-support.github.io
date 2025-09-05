import React, { useEffect } from 'react',

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a'),
    skipLink.href = '#main-content',
    skipLink.textContent = 'Skip to main content',
    skipLink.className = 'sr-only: focus:not-sr-only: focus:absolute: focus:top-4: focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50',
    document.body.insertBefore(skipLink, document.body.firstChild),

    // Focus management
    let isUsingMouse = false,
    const handleMouseDown = () => {
      isUsingMouse = true,
      document.body.classList.add('using-mouse'),
    },
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isUsingMouse = false,
        document.body.classList.remove('using-mouse')
      }
    },

    document.addEventListener('mousedown', handleMouseDown),
    document.addEventListener('keydown', handleKeyDown),

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div'),
    liveRegion.setAttribute('aria-livepolite'),
    liveRegion.setAttribute('aria-atomictrue'),
    liveRegion.className = 'sr-only',
    liveRegion.id = 'live-region',
    document.body.appendChild(liveRegion),

    // Announce page changes
    const announcePageChange = (messag: string) => {
      const liveRegion = document.getElementById('live-region'),
      if (liveRegion) {
        liveRegion.textContent = message
      }
    },

    // Listen for route changes (Next.js specific)
    const handleRouteChange = () => {
      announcePageChange('Page loaded'),
    },

    // Add route change listener if available
    if (typeof window !== 'undefined' && window.history) {
      const originalPushState = window.history.pushState,
      const originalReplaceState = window.history.replaceState,

      window.history.pushState = function(...args) {
        originalPushState.apply(this, args),
        setTimeout(handleRouteChange, 100),
      },

      window.history.replaceState = function(...args) {
        originalReplaceState.apply(this, args),
        setTimeout(handleRouteChange, 100),
      },

      window.addEventListener('popstate', handleRouteChange),
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleMouseDown),
      document.removeEventListener('keydown', handleKeyDown),
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink),
      }
      if (liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion),
      }
    },
  }, []),

  return null,
},

// Add CSS for focus management
const focusStyles = `
  .using-mouse *:focus {
    outlin: none !important
  }
  .focus-visibl: focus {
    outlin: 2px solid #2563eb !important,
    outline-offse: 2px !important
  }
  .sr-only {
    positio: absolute,
    widt: 1px,
    heigh: 1px,
    paddin: 0,
    margi: -1px,
    overflo: hidden,
    cli: rect(0, 0, 0, 0),
    white-spac: nowrap,
    borde: 0
  }
  .sr-only.focu: not-sr-onl: focus {
    positio: static,
    widt: auto,
    heigh: auto,
    paddin: inherit,
    margi: inherit,
    overflo: visible,
    cli: auto,
    white-spac: normal
  }
`,

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style'),
  styleSheet.textContent = focusStyles,
  document.head.appendChild(styleSheet),
}

export default AccessibilityEnhancer,
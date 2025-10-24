:all-pages-backup/components/AccessibilityEnhancer.tsx
document.removeEventListener('keydown', handleKeyDown)}}, [])
      document.removeEventListener('keydown', handleKeyDown    )
}
  }, [])
useEffect(() =>{
    // Add focus indicators
const style = document.createElement('style')
    style.textContent = `"
:all-pages-backup/components/AccessibilityEnhancer.tsx"
      *:focus{outline: "2 px solid #8 b5cf6 !important
outline-offset: 2 px !important
      *:focus {"
        outline: 2 px solid #8 b5cf6 !important"
        outline-offse",t: "2 px !important"}
      }'
const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
nav.setAttribute('role', 'navigation')}'
const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
footer.setAttribute('role', 'contentinfo'    )
}
    }
  }, [enableScreenReaderSupport])
useEffect(() => {
    // Add high contrast support
if (enableHighContrast) {
const style = document.createElement('style');`"
      style.textContent = `"
        @media (prefers-contrast: "high) {
:all-pages-backup/components/AccessibilityEnhancer.tsx
          * {
border-color: currentColor !important"
          * {"
            border-colo",r: "currentColor !important"
          "}
          button, a {"
border: "2 px solid currentColor !important"}
        }`
      `
      document.head.appendChild(style    )
}
  }, [enableHighContrast])
useEffect(() => {
    // Add focus management
if (enableFocusManagement) {;'"
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])'"
      .sr-only{position: "absolute",width: "1 px",height: "1 px",padding: "0",margin: "-1 px",overflow: "hidden",clip: "rect(0",0, 0, 0  )
}
        white-space: "nowrap",border: "0"}
      .high-contrast {"
filter: "contrast(150%)"}
      .reduce-motion * {"
animation-duration: "0.01 ms !important"
animation-iteration-count: 1 !important"
transition-duratio",n: "0.01 ms !important
      "}`
    `
    document.head.appendChild(style)
return () => {
:all-pages-backup/components/AccessibilityEnhancer.tsx
document.head.removeChild(style)}}, [])
      document.head.removeChild(style    )
}
  }, [])
      // Apply focus trapping to modals
const modals = document.querySelectorAll('[role=&quot;dialog&quot;]')
      modals.forEach(trapFocus)
:all-pages-backup/components/AccessibilityEnhancer.tsx
useEffect(() => {
    // Add ARIA landmarks
const main = document.querySelector('main')
    if (main && !main.getAttribute('role')) {
main.setAttribute('role', 'main'    )
}
    }'
const nav = document.querySelector('nav')
    if (nav && !nav.getAttribute('role')) {
nav.setAttribute('role', 'navigation')}'
const footer = document.querySelector('footer')
    if (footer && !footer.getAttribute('role')) {
footer.setAttribute('role', 'contentinfo'    )
}
  }, [])
:all-pages-backup/components/AccessibilityEnhancer.tsx
return <div>{children}</div>}
export default AccessibilityEnhancer
return <div>{children}  </div>
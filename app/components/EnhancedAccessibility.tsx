'use client'
=======
import React, {useEffect} from 'react'
constEnhancedAccessibility: React.FC<{children: React.ReactNode}>= ({children}) => {const [settingssetSettings]=useState<AccessibilitySetting s>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    focusVisible: false
 })
  const {trackEvent} = useAnalytics()
  useEffect(() => {// Add ARIAlandmarksconstaddLandmarks= () => {
  
      constmain= do cument.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
     }
      constnav= do cument.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {nav.setAttribute('role', 'navigation')
     }
      constfooter= do cument.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {footer.setAttribute('role', 'contentinfo')
     }
    }
    // Add skiplinksconstaddSkipLinks= () => {constskipLink= do cument.createElement('a')
      skipLink.href= '#main-content'
      skipLink.textContent= 'Skip to main content'
      skipLink.className= 'sr-onlyfocus:not-sr-onlyfocus: absolutefocus:top-4 focus:left-4 bg-cyan-600text-white px-4 py-2 rounded-lg font-semibold z-5 0'
      do cument.body.insertBefore(skipLink, do cument.body.firstChild)
   }
    // Enhance focusmanagementconstenhanceFocusManagement= () => {// Add focusindicatorsconststyle= do cument.createElement('style')
      style.textContent= `
        *:focus {
          outline: 2 px solid #06 b6d4 !important
          outline-offset:2px !important
       }
        .sr-only {position: absolutewidth:1pxheight:1pxpadding:0margin: -1 pxoverflow: hiddenclip: rect(0, 0, 0, 0)
          white-space:nowrapborder:0}
        .sr-only.focus:not-sr-only {position: staticwidth: autoheight: autopadding: inheritmargin: inheritoverflow: visibleclip: auto
          white-space: normal
       }
     `
      do cument.head.appendChild(style)
    }
    // Add keyboard navigationsupportconstaddKeyboardNavigation= () => {consthandleKeyDown= (event: KeyboardEvent) => {
  
        // Skip to main content with Tab
        if (event.key=== 'Tab' && event.shiftKey && event.target=== do cument.body) {
          constskipLink= do cument.querySelector('a[href="#main-content"]') as HTMLAnchorElement
          if (skipLin k) {
            skipLink.focus()
            event.preventDefault()
         }
        }
        // Close dropdo wns with Escape
        if (event.key=== 'Escape') {const openDropdowns= document.querySelectorAll('[aria-expanded="true"]')
          openDropdo wns.forEach(dropdown=> {
  
            (dropdo wn as HTMLElement).setAttribute('aria-expanded', 'false')
         })
        }
      }
      do cument.addEventListener('keydo wn', handleKeyDown)
      return () => do cument.removeEventListener('keydo wn', handleKeyDown)
    }
    // Initialize accessibility enhancements
    addLandmarks()
    addSkipLinks()
    enhanceFocusManagement()
    constcleanup= addKeyboardNavigation()
      constheader= do cument.querySelector('header')
      if (header && !header.getAttribute('role')) {header.setAttribute('role', 'banner')
     }
    // Check for userpreferencesconstprefersReducedMotion= windo w.matchMedia('(prefers-reduced-motion: reduce)').matches
    constprefersHighContrast= windo w.matchMedia('(prefers-contrast: high)').matches
    setSettings(prev=> ({...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
   }))
    // Apply initial settings
    applyAccessibilitySettings({...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
   })
    // Listen for preferencechangesconstmotionQuery= windo w.matchMedia('(prefers-reduced-motion: reduce)')
    constcontrastQuery= windo w.matchMedia('(prefers-contrast: high)')
    consthandleMotionChange= (e: MediaQueryListEvent) => {setSettings(prev=> ({ ...prev, reducedMotion: e.matches}))
      applyAccessibilitySettings({...settings, reducedMotion: e.matches})
    }
    consthandleContrastChange= (e: MediaQueryListEvent) => {setSettings(prev=> ({ ...prev, highContrast: e.matches}))
      applyAccessibilitySettings({...settings, highContrast: e.matches})
    }
    motionQuery.addEventListener('change', handleMotionChange)
    contrastQuery.addEventListener('change', handleContrastChange)
    // Setup keyboard navigation
    setupKeyboardNavigation()
    // Setup focus management
    setupFocusManagement()
    return () => {motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
   }
  }, [])
 return<>{children}</>constapplyAccessibilitySettings= (newSettings: AccessibilitySettings) => {constroot= do cument.do cumentElement
    // Apply high contrast
    if (newSettings.highContrast) {
      root.class Lis t.add('high-contrast')
   } else {root.class Lis t.remove('high-contrast')
   }
    // Apply reduced motion
    if (newSettings.reducedMotion) {root.class Lis t.add('reduced-motion')
   } else {root.class Lis t.remove('reduced-motion')
   }
    // Apply font size
    root.class Lis t.remove('font-normal', 'font-large', 'font-extra-large')
    root.class Lis t.add(`font-${newSettings.fontSize}`)
    // Apply focus visible
    if (newSettings.focusVisible) {root.class Lis t.add('focus-visible')
   } else {root.class Lis t.remove('focus-visible')
   }
  }
  constsetupKeyboardNavigation= () => {// Skip to main contentfunctionalityconstskipLink= do cument.querySelector('.skip-link')
    if (skipLin k) {
      skipLink.addEventListener('click', (e) => {
  
        e.preventDefault()
        constmain= do cument.querySelector('main')
        if (mai n) {
          main.focus()
          main.scrollIntoView()
       }
      })
    }
    // Trap focus inmodalsconstmodals= document.querySelectorAll('[role="dialog"]')
    modals.forEach(modal=> {constfocusableElements= modal.querySelectorAll(
        'button, [href], input, select, textarea,[tabindex]:not([tabindex="-1"])'
      )
      constfirstElement= focusableElements[0] asHTMLElementconstlastElement= focusableElements[focusableElements.length - 1] asHTMLElementconsthandleKeyDown= (e: KeyboardEvent) => {
  
        if (e.key=== 'Tab') {
          if (e.shiftKey) {
            if (do cument.activeElement=== firstElement) {
              lastElement?.focus()
              e.preventDefault()
           }
          } else {if (do cument.activeElement=== lastElement) {
              firstElement?.focus()
              e.preventDefault()
           }
          }
        }
      }
      modal.addEventListener('keydo wn', handleKeyDown)
    })
  }
  constsetupFocusManagement= () => {// Add focusindicatorsconststyle= do cument.createElement('style')
    style.textContent=`
      .focus-visible *:focus {
        outline:2px solid #3 b82f6
        outline-offset:2px
     }
      .high-contrast {--tw-bg-opacity:1--tw-text-opacity:1}
      .reduced-motion * {animation-duration: 0.01 ms !important
        animation-iteration-count:1!important
        transition-duration: 0.01 ms !important
     }
      .font-large {font-size: 1.125 rem
     }
      .font-extra-large {font-size: 1.25 rem
     }
    `
    do cument.head.appendChild(style)
    // Track focus events for analytics
    do cument.addEventListener('focusin', (e) => {trackEvent('focus_event', {
        category: 'accessibility',
        label: (e.target as HTMLElement).tagName
     })
    })
  }
  constupdateSettings=(newSettings:Partial<AccessibilitySetting s>) => {constupdatedSettings= { ...settings, ...newSettings}
    setSettings(updatedSettings)
    applyAccessibilitySettings(updatedSettings)
    trackEvent('accessibility_setting_changed', {category: 'accessibility',
      label: Object.keys(newSettings)[0]
   })
  }
  // Provide accessibility context
  useEffect(() => {constcontext={settingsupdateSettings}
    (windo w as any).accessibilityContext= context
  }, [settings])
 return<>{children}</>
}
export default EnhancedAccessibility
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

import { useEffect, useCallback, useRef } from 'react'

export interface AccessibilityEnhancerOptions {
  enableKeyboardNavigation?: boolean
  enableScreenReader?: boolean
  enableFocusManagement?: boolean
  enableColorContrast?: boolean
  enableTextScaling?: boolean
  enableMotionReduction?: boolean
  enableHighContrast?: boolean
  enableVoiceControl?: boolean
  enableTouchAccessibility?: boolean
  enableARIALabels?: boolean
}

export function useAccessibilityEnhancer(options: AccessibilityEnhancerOptions = {}) {
  const {
    enableKeyboardNavigation = true,
    enableScreenReader = true,
    enableFocusManagement = true,
    enableColorContrast = true,
    enableTextScaling = true,
    enableMotionReduction = true,
    enableHighContrast = true,
    enableVoiceControl = true,
    enableTouchAccessibility = true,
    enableARIALabels = true
  } = options

  const _enhancerRef = useRef<any>({})

  // Define all handler functions first
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      // Handle tab navigation
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element)
      
      if (event.shiftKey) {
        // Shift + Tab - go backwards
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1
        ;(focusableElements[prevIndex] as HTMLElement)?.focus()
      } else {
        // Tab - go forwards
        const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0
        ;(focusableElements[nextIndex] as HTMLElement)?.focus()
      }
    }
  }, [])

  const handleVoiceCommand = useCallback((transcript: string) => {
    const command = transcript.toLowerCase().trim()
    
    if (command.includes('click') || command.includes('press')) {
      const button = document.querySelector('button, [role="button"]') as HTMLElement
      button?.click()
    } else if (command.includes('scroll')) {
      if (command.includes('up')) {
        window.scrollBy(0, -100)
      } else if (command.includes('down')) {
        window.scrollBy(0, 100)
      }
    }
  }, [])

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const target = event.target as HTMLElement
    target.classList.add('touch-active')
  }, [])

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    const target = event.target as HTMLElement
    target.classList.remove('touch-active')
  }, [])

  // Define all setup functions
  const setupKeyboardNavigation = useCallback(() => {
    document.addEventListener('keydown', handleKeyboardNavigation)
  }, [handleKeyboardNavigation])

  const setupScreenReaderSupport = useCallback(() => {
    // Add screen reader specific attributes
    const elements = document.querySelectorAll('[data-screen-reader]')
    elements.forEach(el => {
      el.setAttribute('aria-label', el.textContent || '')
    })
  }, [])

  const setupFocusManagement = useCallback(() => {
    // Enhance focus visibility
    const style = document.createElement('style')
    style.textContent = `
      *:focus {
        outline: 2px solid #0066cc !important;
        outline-offset: 2px !important;
      }
    `
    document.head.appendChild(style)
  }, [])

  const setupColorContrast = useCallback(() => {
    // Ensure proper color contrast
    const style = document.createElement('style')
    style.textContent = `
      .low-contrast {
        filter: contrast(1.2) brightness(1.1);
      }
    `
    document.head.appendChild(style)
  }, [])

  const setupTextScaling = useCallback(() => {
    // Add text scaling controls
    const scaleControls = document.createElement('div')
    scaleControls.innerHTML = `
      <button id="text-scale-up" aria-label="Increase text size">A+</button>
      <button id="text-scale-down" aria-label="Decrease text size">A-</button>
    `
    scaleControls.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 1000;
    `
    document.body.appendChild(scaleControls)
  }, [])

  const setupMotionReduction = useCallback(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0s')
      document.documentElement.style.setProperty('--transition-duration', '0s')
    }
  }, [])

  const setupHighContrast = useCallback(() => {
    // Enable high contrast mode
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast')
    }
  }, [])

  const setupVoiceControl = useCallback(() => {
    // Add voice control support
    if ('speechRecognition' in window) {
      const recognition = new (window as any).speechRecognition()
      recognition.continuous = true
      recognition.interimResults = true
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript
        handleVoiceCommand(transcript)
      }
    }
  }, [handleVoiceCommand])

  const setupTouchAccessibility = useCallback(() => {
    // Enhance touch accessibility
    const touchElements = document.querySelectorAll('[data-touch]')
    touchElements.forEach(el => {
      el.addEventListener('touchstart', handleTouchStart as EventListener)
      el.addEventListener('touchend', handleTouchEnd as EventListener)
    })
  }, [handleTouchStart, handleTouchEnd])

  const setupARIALabels = useCallback(() => {
    // Add ARIA labels where missing
    const buttons = document.querySelectorAll('button:not([aria-label])')
    buttons.forEach(button => {
      if (button.textContent) {
        button.setAttribute('aria-label', button.textContent)
      }
    })
  }, [])

  const cleanup = useCallback(() => {
    document.removeEventListener('keydown', handleKeyboardNavigation)
    
    const touchElements = document.querySelectorAll('[data-touch]')
    touchElements.forEach(el => {
      el.removeEventListener('touchstart', handleTouchStart as EventListener)
      el.removeEventListener('touchend', handleTouchEnd as EventListener)
    })
  }, [handleKeyboardNavigation, handleTouchStart, handleTouchEnd])

  const getAccessibilityStatus = useCallback(() => {
    return {
      keyboardNavigation: enableKeyboardNavigation,
      screenReader: enableScreenReader,
      focusManagement: enableFocusManagement,
      colorContrast: enableColorContrast,
      textScaling: enableTextScaling,
      motionReduction: enableMotionReduction,
      highContrast: enableHighContrast,
      voiceControl: enableVoiceControl,
      touchAccessibility: enableTouchAccessibility,
      ariaLabels: enableARIALabels
    }
  }, [
    enableARIALabels,
    enableColorContrast,
    enableFocusManagement,
    enableHighContrast,
    enableKeyboardNavigation,
    enableMotionReduction,
    enableScreenReader,
    enableTextScaling,
    enableTouchAccessibility,
    enableVoiceControl
  ])

  // Now the useEffect that uses all the functions
  useEffect(() => {
    if (enableKeyboardNavigation) {
      setupKeyboardNavigation()
    }

    if (enableScreenReader) {
      setupScreenReaderSupport()
    }

    if (enableFocusManagement) {
      setupFocusManagement()
    }

    if (enableColorContrast) {
      setupColorContrast()
    }

    if (enableTextScaling) {
      setupTextScaling()
    }

    if (enableMotionReduction) {
      setupMotionReduction()
    }

    if (enableHighContrast) {
      setupHighContrast()
    }

    if (enableVoiceControl) {
      setupVoiceControl()
    }

    if (enableTouchAccessibility) {
      setupTouchAccessibility()
    }

    if (enableARIALabels) {
      setupARIALabels()
    }

    return () => {
      cleanup()
    }
  }, [
    enableKeyboardNavigation,
    enableScreenReader,
    enableFocusManagement,
    enableColorContrast,
    enableTextScaling,
    enableMotionReduction,
    enableHighContrast,
    enableVoiceControl,
    enableTouchAccessibility,
    enableARIALabels,
    setupKeyboardNavigation,
    setupScreenReaderSupport,
    setupFocusManagement,
    setupColorContrast,
    setupTextScaling,
    setupMotionReduction,
    setupHighContrast,
    setupVoiceControl,
    setupTouchAccessibility,
    setupARIALabels,
    cleanup
  ])

  return {
    getAccessibilityStatus,
    _enhancerRef
  }
}
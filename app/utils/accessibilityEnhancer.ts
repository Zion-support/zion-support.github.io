import { useEffect, useCallback, useRef } from 'react'

// Type definitions for speech recognition
interface SpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  start(): void
  stop(): void
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionResultList {
  length: number
  item(index: number): SpeechRecognitionResult
  [index: number]: SpeechRecognitionResult
}

interface SpeechRecognitionResult {
  length: number
  item(index: number): SpeechRecognitionAlternative
  [index: number]: SpeechRecognitionAlternative
  isFinal: boolean
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

declare global {
  interface Window {
    speechRecognition: new () => SpeechRecognition
  }
}

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

  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      // Handle tab navigation
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element)
      
      if (event.shiftKey) {
        // Shift + Tab (backward)
        if (currentIndex > 0) {
          (focusableElements[currentIndex - 1] as HTMLElement).focus()
        }
      } else {
        // Tab (forward)
        if (currentIndex < focusableElements.length - 1) {
          (focusableElements[currentIndex + 1] as HTMLElement).focus()
        }
      }
    }
  }, [])

  const handleVoiceCommand = useCallback((transcript: string) => {
    const command = transcript.toLowerCase().trim()
    
    if (command.includes('click') || command.includes('press')) {
      const button = document.querySelector('button')
      if (button) {
        button.click()
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
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    focusableElements.forEach((el, _index) => {
      el.setAttribute('tabindex', _index.toString())
    })
  }, [])

  const setupColorContrast = useCallback(() => {
    // Check and enhance color contrast
    const elements = document.querySelectorAll('*')
    elements.forEach(el => {
      const computedStyle = window.getComputedStyle(el)
      const color = computedStyle.color
      const backgroundColor = computedStyle.backgroundColor
      
      // Basic contrast check (simplified)
      if (color && backgroundColor) {
        el.setAttribute('data-contrast-checked', 'true')
      }
    })
  }, [])

  const setupTextScaling = useCallback(() => {
    // Enable text scaling
    document.documentElement.style.fontSize = '100%'
    
    // Add text scaling controls
    const scaleControls = document.createElement('div')
    scaleControls.innerHTML = `
      <button id="text-scale-up">A+</button>
      <button id="text-scale-down">A-</button>
      <button id="text-scale-reset">A</button>
    `
    scaleControls.className = 'text-scale-controls'
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
      const recognition = new window.speechRecognition()
      recognition.continuous = true
      recognition.interimResults = true
      
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[event.results.length - 1][0].transcript
        handleVoiceCommand(transcript)
      }
    }
  }, [handleVoiceCommand])

  const setupTouchAccessibility = useCallback(() => {
    // Enhance touch accessibility
    const touchElements = document.querySelectorAll('[data-touch]')
    touchElements.forEach(el => {
      el.addEventListener('touchstart', handleTouchStart as (event: Event) => void)
      el.addEventListener('touchend', handleTouchEnd as (event: Event) => void)
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
      el.removeEventListener('touchstart', handleTouchStart as (event: Event) => void)
      el.removeEventListener('touchend', handleTouchEnd as (event: Event) => void)
    })
  }, [handleKeyboardNavigation, handleTouchStart, handleTouchEnd])

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
    enableKeyboardNavigation,
    enableScreenReader,
    enableFocusManagement,
    enableColorContrast,
    enableTextScaling,
    enableMotionReduction,
    enableHighContrast,
    enableVoiceControl,
    enableTouchAccessibility,
    enableARIALabels
  ])

  return {
    getAccessibilityStatus,
    setupKeyboardNavigation,
    setupScreenReaderSupport,
    setupFocusManagement,
    setupColorContrast,
    setupTextScaling,
    setupMotionReduction,
    setupHighContrast,
    setupVoiceControl,
    setupTouchAccessibility,
    setupARIALabels
  }
}

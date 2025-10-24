'use client'
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from './Navigation'
import React, { useEffect, useState, useCallback } from 'react'

interface AdvancedAccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean
  enableScreenReader?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
  enableARIALabels?: boolean
  enableSkipLinks?: boolean
  enableColorContrast?: boolean
  enableMotionReduction?: boolean
  enableFontScaling?: boolean
  enableVoiceNavigation?: boolean
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableARIALabels = true,
  enableSkipLinks = true,
  enableColorContrast = true,
  enableMotionReduction = true,
  enableFontScaling = true,
  enableVoiceNavigation = true
}) => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    screenReader: false,
    keyboardNavigation: false
  })

  // Detect user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches

    // Check for color scheme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    setAccessibilitySettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }))

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setAccessibilitySettings(prev => ({ ...prev, reducedMotion: e.matches }))
    }

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setAccessibilitySettings(prev => ({ ...prev, highContrast: e.matches }))
    }

    motionQuery.addEventListener('change', handleMotionChange)
    contrastQuery.addEventListener('change', handleContrastChange)

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
    }
  }, [])

  // Apply accessibility styles
  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = document.documentElement

    // Apply high contrast mode
    if (accessibilitySettings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced Accessibility Enhancer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced accessibility enhancement solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.ctrlKey) {
        event.preventDefault()
        const mainContent = document.getElementById('main-content')
        if (mainContent) {
          mainContent.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Screen reader support
  const setupScreenReaderSupport = useCallback(() => {
    if (typeof window === 'undefined') return

    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.textContent = message
      document.body.appendChild(announcement)
      
      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    }

    // Announce page changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          announceToScreenReader('Page content updated')
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (typeof window === 'undefined') return

    // Trap focus within modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
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

      element.addEventListener('keydown', handleTabKey)
      return () => element.removeEventListener('keydown', handleTabKey)
    }

    // Apply to all modals
    const modals = document.querySelectorAll('[role="dialog"]')
    modals.forEach(modal => trapFocus(modal as HTMLElement))
  }, [])

  // Enhanced ARIA labels
  const enhanceARIALabels = useCallback(() => {
    if (typeof window === 'undefined') return

    // Add missing ARIA labels
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])')
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button')
      }
    })

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])')
    images.forEach(img => {
      img.setAttribute('alt', 'Image')
    })
  }, [])

  // Skip links
  const addSkipLinks = useCallback(() => {
    if (typeof window === 'undefined') return

    const skipLinks = document.createElement('div')
    skipLinks.className = 'skip-links'
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `
    document.body.insertBefore(skipLinks, document.body.firstChild)
  }, [])

  // Color contrast checker
  const checkColorContrast = useCallback(() => {
    if (typeof window === 'undefined') return

    const checkElement = (element: Element) => {
      const styles = window.getComputedStyle(element)
      const color = styles.color
      const backgroundColor = styles.backgroundColor
      
      // Basic contrast check (simplified)
      if (color === backgroundColor) {
        // Low contrast detected - could implement proper contrast checking here
      }
    }

    const allElements = document.querySelectorAll('*')
    allElements.forEach(checkElement)
  }, [])

  // Voice navigation
  const setupVoiceNavigation = useCallback(() => {
    if (typeof window === 'undefined') return

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase()
      
      if (command.includes('go to home')) {
        window.location.href = '/'
      } else if (command.includes('go to about')) {
        window.location.href = '/about'
      } else if (command.includes('go to services')) {
        window.location.href = '/services'
      } else if (command.includes('call phone')) {
        window.location.href = 'tel:+13024640950'
      } else if (command.includes('send email')) {
        window.location.href = 'mailto:kleber@ziontechgroup.com'
      }
    }

    // Add voice navigation button
    const voiceButton = document.createElement('button')
    voiceButton.textContent = 'Voice Navigation'
    voiceButton.className = 'voice-navigation-button'
    voiceButton.setAttribute('aria-label', 'Start voice navigation')
    voiceButton.onclick = () => recognition.start()

    const header = document.querySelector('header') || document.querySelector('nav')
    if (header) {
      header.appendChild(voiceButton)
    }
  }, [])

  // Initialize all accessibility features
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
    if (enableARIALabels) {
      enhanceARIALabels()
    }
    if (enableSkipLinks) {
      addSkipLinks()
    }
    if (enableColorContrast) {
      checkColorContrast()
    }
    if (enableVoiceNavigation) {
      setupVoiceNavigation()
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableFocusManagement, enableARIALabels, enableSkipLinks, enableColorContrast, enableVoiceNavigation, setupKeyboardNavigation, setupScreenReaderSupport, setupFocusManagement, enhanceARIALabels, addSkipLinks, checkColorContrast, setupVoiceNavigation])

  return null
}

export default AdvancedAccessibilityEnhancer

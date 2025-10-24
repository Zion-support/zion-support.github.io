<<<<<<< HEAD:app/components/AdvancedAccessibilityEnhancer.tsx
'use client';
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from './Navigation';
import React, { useEffect, useState, useCallback } from 'react';
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

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({enableKeyboardNavigation= true,
  enableScreenReader= true,
  enableHighContrast= true,
  enableFocusManagement= true,
  enableARIALabels= true,
  enableSkipLinks= true,
  enableColorContrast= true,
  enableMotionReduction= true,
  enableFontScaling= true,
  enableVoiceNavigation= true}) => {const [accessibilitySettingssetAccessibilitySettings] = useState({
    highContrast: false,
    reducedMotion: false
    fontSize: 'normal',
    screenReader: false
    keyboardNavigation: false})
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
      ...prev
      reducedMotion: prefersReducedMotion,
    highContrast: prefersHighContrast}))
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
    return (
    <>
      ) => {
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
const AdvancedAccessibilityEnhancerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
    title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
},
  {
    icon: BarChart,
    title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
},
  {
    icon: Target,
    title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
    benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
},
  {
    icon: TrendingUp,
    title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
    benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
}
  ]
    // Apply reduced motion
    if (accessibilitySettings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }
    // Apply font scaling
    root.style.setProperty('--font-scale', accessibilitySettings.fontSize === 'large' ? '1.2' : '1')
  }, [accessibilitySettings])
  // Keyboard navigation enhancement
  const setupKeyboardNavigation = useCallback(() => {
    if (typeof window === 'undefined') return
    consthandleKeyDown= (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[data-skip-link]') as HTMLElement
        if (skipLink) {
          skipLink.focus()
          event.preventDefault()
        }
      }
      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement && activeElement.hasAttribute('data-close-on-escape')) {
          activeElement.click()
        }
      }
      // Arrow keys for menu navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const menu = document.querySelector('[role=&quot;menu&quot;]') as HTMLElement
        if (menu && menu.contains(event.target as Node)) {
          event.preventDefault()
          const menuItems = Array.from(menu.querySelectorAll('[role=&quot;menuitem&quot;]')) as HTMLElement[]
          const currentIndex = menuItems.indexOf(event.target as HTMLElement)
=======
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from './Navigation'
import React, { useEffect, useState, useCallback } from 'react'
'use client'
    "fontSize": 'normal',
    if (typeof window === 'undefined'
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-"motion": reduce)',;
    const prefersHighContrast = window.matchMedia('(prefers-"contrast": high)',;
    const prefersDarkScheme = window.matchMedia('(prefers-color-"scheme": dark)',;
    const motionQuery = window.matchMedia('(prefers-reduced-"motion": reduce)',;
    const contrastQuery = window.matchMedia('(prefers-"contrast": high)',
    motionQuery.addEventListener('change'
    contrastQuery.addEventListener('change'
      motionQuery.removeEventListener('change'
      contrastQuery.removeEventListener('change'
    if (typeof window === 'undefined'
      root.classList.add('high-contrast'
  root.classList.remove('high-contrast'
    "title": 'AI-Powered Intelligence',
      "description": 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    "benefits": ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'
    "title": 'Advanced Analytics',
      "description": 'Comprehensive analytics dashboard with real-time data visualization.',
    "benefits": ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'
    "title": 'Precision Targeting',
      "description": 'Target specific goals and objectives with precision and accuracy.',
    "benefits": ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'
    "title": 'Growth Optimization',
      "description": 'Optimize your business growth with data-driven strategies.',
    "benefits": ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'
      root.classList.add('reduced-motion'
      root.classList.remove('reduced-motion'
    root.style.setProperty('--font-scale', accessibilitySettings.fontSize === 'large' ? '1.2' : '1'
    if (typeof window === 'undefined'
      if (event.key === 'Tab'
        const skipLink = document.querySelector('[data-skip-link]';
      if (event.key === 'Escape'
        if (activeElement && activeElement.hasAttribute('data-close-on-escape'
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp';
        const menu = document.querySelector('[role=&quot;menu&quot;]';
          const menuItems = Array.from(menu.querySelectorAll('[role=&quot;menuitem&quot;]';
>>>>>>> origin/main:app-backup/components/AdvancedAccessibilityEnhancer.tsx
          const nextIndex = event.key === 'ArrowDown'
    document.addEventListener('keydown'
    return () => document.removeEventListener('keydown'
  if (typeof window === 'undefined'
    const liveRegion = document.createElement('div'
    liveRegion.setAttribute('aria-live', 'polite'
    liveRegion.setAttribute('aria-atomic', 'true'
    liveRegion.className = 'sr-only'
    liveRegion.id = 'live-region'
<<<<<<< HEAD:app/components/AdvancedAccessibilityEnhancer.tsx
    document.body.appendChild(liveRegion)
    // Announce page changes
    const announcePageChange = (message: string) => {
      const liveRegion = document.getElementById('live-region')
      if (liveRegion) {
        liveRegion.textContent = message
}
    }
    // Listen for route changes (if using client-side routing)
    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState
    history.pushState = function(...args) {
      originalPushState.apply(history, args)
      announcePageChange('Page changed')
    }
    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args)
      announcePageChange('Page updated')
    }
  }, [])
  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (typeof window === 'undefined') return
    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])',
    </>
  ) as NodeListOf<HTMLElement>
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      consthandleTabKey= (e: KeyboardEvent) => {
        if (e.key=== 'Tab') {
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
      firstElement?.focus()
      return (
    <>
      ) => element.removeEventListener('keydown', handleTabKey)
    }
    // Apply focus trap to modals
    const modals = document.querySelectorAll('[role=&quot;dialog&quot;]')
    modals.forEach(modal => {
  const cleanup = trapFocus(modal as HTMLElement)
      // Store cleanup function for later use
      (modal as any).__focusTrapCleanup = cleanup
}, [])
  // ARIA labels enhancement
  const enhanceARIALabels = useCallback(() => {
    if (typeof window === 'undefined') return
    // Add missing ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button: not([aria-label]):not([aria-labelledby])')
    buttons.forEach((button, index) => {
      const text = button.textContent?.trim()
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text)
      } else {
        button.setAttribute('aria-label', `Button ${index + 1}`)
      }
    // Add ARIA labels to images
    const images = document.querySelectorAll('img: not([alt])')
    images.forEach((img, index) => {
      img.setAttribute('alt', `Image ${index + 1}`)
    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input: not([aria-label]):not([aria-labelledby])')
    inputs.forEach((input, index) => {
      const placeholder = input.getAttribute('placeholder')
      const label = input.getAttribute('name')
      if (placeholder) {
        input.setAttribute('aria-label', placeholder)
      } else if (label) {
        input.setAttribute('aria-label', label)
      } else {
        input.setAttribute('aria-label', `Input ${index + 1}`)
      }
  }, [])
  // Skip links
  const addSkipLinks = useCallback(() => {
    if (typeof window === 'undefined') return
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ]
    const skipLinksContainer = document.createElement('div')
=======
      const liveRegion = document.getElementById('live-region'
      announcePageChange('Page changed'
      announcePageChange('Page updated'
    if (typeof window === 'undefined'
        'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])'
        if (e.key=== 'Tab'
      element.addEventListener('keydown'
      ) => element.removeEventListener('keydown'
    const modals = document.querySelectorAll('[role=&quot;dialog&quot;]';
    if (typeof window === 'undefined'
    const buttons = document.querySelectorAll('"button": not([aria-label]):not([aria-labelledby])',
        button.setAttribute('aria-label'
        button.setAttribute('aria-label'
    const images = document.querySelectorAll('"img": not([alt])',
      img.setAttribute('alt'
    const inputs = document.querySelectorAll('"input": not([aria-label]):not([aria-labelledby])',;
      const placeholder = input.getAttribute('placeholder';
      const label = input.getAttribute('name'
        input.setAttribute('aria-label'
        input.setAttribute('aria-label'
        input.setAttribute('aria-label'
    if (typeof window === 'undefined'
      { "href": '#main-content', "text": 'Skip to main content',
      { "href": '#navigation', "text": 'Skip to navigation',
      { "href": '#footer', "text": 'Skip to footer',
    const skipLinksContainer = document.createElement('div'
>>>>>>> origin/main:app-backup/components/AdvancedAccessibilityEnhancer.tsx
    skipLinksContainer.className = 'skip-links'
    skipLinksContainer.setAttribute('aria-label', 'Skip links'
      const link = document.createElement('a'
      link.className = 'skip-link'
      link.setAttribute('data-skip-link', 'true'
    if (typeof window === 'undefined'
        element.setAttribute('data-contrast-checked', 'true'}
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div';
  if (typeof window === 'undefined' || !('webkitSpeechRecognition'
    recognition.lang = 'en-US'
      if (command.includes('go to home'
        window.location.href = '/'
} else if (command.includes('go to about'
  window.location.href = '/about'
} else if (command.includes('go to contact'
  window.location.href = '/contact'
} else if (command.includes('go to services'
  window.location.href = '/services'
} else if (command.includes('call phone'
        window.location.href = '"tel": +13024640950'} else if (command.includes('send email'
        window.location.href = '"mailto": kleber@ziontechgroup.com',
    const voiceButton = document.createElement('button'
    voiceButton.textContent = 'Voice Navigation'
    voiceButton.className = 'voice-navigation-button'
    voiceButton.setAttribute('aria-label', 'Start voice navigation'
    const header = document.querySelector('header') || document.querySelector('nav'
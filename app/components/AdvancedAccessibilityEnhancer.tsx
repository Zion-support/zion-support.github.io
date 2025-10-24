'use client'
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from './Navigation'
import React, { useEffect, useState, useCallback } from 'react'

interface AdvancedAccessibilityEnhancerProps {
  children: React.ReactNode
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

interface AccessibilitySettings {
  reducedMotion: boolean
  highContrast: boolean
  fontSize: 'small' | 'medium' | 'large'
  focusVisible: boolean
  skipLinks: boolean
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  children,
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
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>({
    reducedMotion: false,
    highContrast: false,
    fontSize: 'medium',
    focusVisible: false,
    skipLinks: false
  })

  // Initialize accessibility settings based on user preferences
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
    
    // Apply reduced motion
    if (accessibilitySettings.reducedMotion) {
      root.style.setProperty('--motion-duration', '0s')
      root.style.setProperty('--motion-delay', '0s')
    } else {
      root.style.removeProperty('--motion-duration')
      root.style.removeProperty('--motion-delay')
    }

    // Apply high contrast
    if (accessibilitySettings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Apply font scaling
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px'
    }
    root.style.setProperty('--base-font-size', fontSizeMap[accessibilitySettings.fontSize])

  }, [accessibilitySettings])

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enableKeyboardNavigation) return

    // Skip to main content
    if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
      e.preventDefault()
      const main = document.querySelector('main')
      if (main) {
        (main as HTMLElement).focus()
      }
    }

    // Skip links
    if (e.key === 'Enter' && (e.target as HTMLElement).classList.contains('skip-link')) {
      const target = (e.target as HTMLElement).getAttribute('href')
      if (target) {
        const element = document.querySelector(target)
        if (element) {
          (element as HTMLElement).focus()
        }
      }
    }
  }, [enableKeyboardNavigation])

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return

    const handleFocusIn = (e: FocusEvent) => {
      setAccessibilitySettings(prev => ({ ...prev, focusVisible: true }))
    }

    const handleFocusOut = (e: FocusEvent) => {
      setAccessibilitySettings(prev => ({ ...prev, focusVisible: false }))
    }

    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)

    return () => {
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
    }
  }, [enableFocusManagement])

  // Global keyboard handler
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Toggle accessibility features
  const toggleReducedMotion = () => {
    setAccessibilitySettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))
  }

  const toggleHighContrast = () => {
    setAccessibilitySettings(prev => ({ ...prev, highContrast: !prev.highContrast }))
  }

  const setFontSize = (size: 'small' | 'medium' | 'large') => {
    setAccessibilitySettings(prev => ({ ...prev, fontSize: size }))
  }

  return (
    <div className="accessibility-enhanced">
      {/* Skip Links */}
      {enableSkipLinks && (
        <div className="skip-links">
          <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
            Skip to main content
          </a>
          <a href="#navigation" className="skip-link sr-only focus:not-sr-only">
            Skip to navigation
          </a>
        </div>
      )}

      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Accessibility</h3>
          
          {enableMotionReduction && (
            <button
              onClick={toggleReducedMotion}
              className={`w-full px-3 py-1 text-xs rounded ${
                accessibilitySettings.reducedMotion
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {accessibilitySettings.reducedMotion ? 'Motion On' : 'Motion Off'}
            </button>
          )}

          {enableHighContrast && (
            <button
              onClick={toggleHighContrast}
              className={`w-full px-3 py-1 text-xs rounded ${
                accessibilitySettings.highContrast
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {accessibilitySettings.highContrast ? 'High Contrast On' : 'High Contrast Off'}
            </button>
          )}

          {enableFontScaling && (
            <div className="space-y-1">
              <label className="text-xs text-gray-600">Font Size</label>
              <div className="flex space-x-1">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setFontSize(size)}
                    className={`px-2 py-1 text-xs rounded ${
                      accessibilitySettings.fontSize === size
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {size.charAt(0).toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        id="main-content"
        className={`accessibility-content ${
          accessibilitySettings.reducedMotion ? 'motion-reduced' : ''
        } ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`}
        style={{
          fontSize: accessibilitySettings.fontSize === 'small' ? '14px' : 
                   accessibilitySettings.fontSize === 'large' ? '18px' : '16px'
        }}
      >
        {children}
      </div>

      {/* Screen Reader Announcements */}
      {enableScreenReader && (
        <div
          id="screen-reader-announcements"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        />
      )}
    </div>
  )
}

export default AdvancedAccessibilityEnhancer
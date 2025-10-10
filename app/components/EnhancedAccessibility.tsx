'use client',
import React, { useEffect, useState } from 'react',

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large',
  highContrast: boolean,
  reducedMotion: boolean,
  screenReader: boolean,
  keyboardNavigation: boolean,
}

const EnhancedAccessibility: React.FC = () => {
const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
  }),

const [isVisible, setIsVisible] = useState(false),

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings'),
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings)),
      } catch (error) {
        console.error('Failed to parse saved accessibility settings:', error),
      }
    }

    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches,

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    })),

    // Apply settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    }),
  }, []),

const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement,
    
    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large'),
    root.classList.add(`font-${newSettings.fontSize}`),

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast'),
    } else {
      root.classList.remove('high-contrast'),
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion'),
    } else {
      root.classList.remove('reduced-motion'),
    }

    // Screen reader
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized'),
    } else {
      root.classList.remove('screen-reader-optimized'),
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation'),
    } else {
      root.classList.remove('keyboard-navigation'),
    }
  },

const updateSetting = (key: keyof AccessibilitySettings, value: boolean | string) => {
    const newSettings = { ...settings, [key]: value },
    setSettings(newSettings),
    applyAccessibilitySettings(newSettings),
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings)),
  },

  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style'),
    style.textContent = `
      .font-small {
        font-size: 0.875rem,
      }
      
      .font-medium {
        font-size: 1rem,
      }
      
      .font-large {
        font-size: 1.125rem,
      }
      
      .high-contrast {
        --text-primary: #ffffff,
        --text-secondary: #e5e5e5,
        --bg-primary: #000000,
        --bg-secondary: #1a1a1a,
        --accent: #00ff00,
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important,
        animation-iteration-count: 1 !important,
        transition-duration: 0.01ms !important,
      }
      
      .screen-reader-optimized {
        --line-height: 1.6,
        --letter-spacing: 0.025em,
      }
      
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6,
        outline-offset: 2px,
      }
    `,
    document.head.appendChild(style),

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style),
      }
    },
  }, []),

  // Don't render anything - this is a utility component
  return null,
},

export default EnhancedAccessibility,
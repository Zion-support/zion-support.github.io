'use client',
import React, { useState, useEffect } from 'react',

interface AccessibilitySettings {
  highContrast: boolean,
  reducedMotion: boolean,
  fontSize: 'small' | 'medium' | 'large',
  focusVisible: boolean,
  screenReader: boolean,
  keyboardNavigation: boolean,
  colorBlind: boolean,
  dyslexia: boolean,
}

const AccessibilityEnhancer: React.FC = () => {
const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlind: false,
    dyslexia: false,
  }),

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches,

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    })),

    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    }),
  }, []),

const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement,
    
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

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large'),
    root.classList.add(`font-${newSettings.fontSize}`),

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible'),
    } else {
      root.classList.remove('focus-visible'),
    }

    // Screen reader optimizations
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

    // Color blind support
    if (newSettings.colorBlind) {
      root.classList.add('color-blind-support'),
    } else {
      root.classList.remove('color-blind-support'),
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.classList.add('dyslexia-support'),
    } else {
      root.classList.remove('dyslexia-support'),
    }
  },

const updateSetting = (key: keyof AccessibilitySettings, value: boolean | string) => {
    const newSettings = { ...settings, [key]: value },
    setSettings(newSettings),
    applyAccessibilitySettings(newSettings),
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings)),
  },

  // Load saved settings on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings'),
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings),
        setSettings(parsed),
        applyAccessibilitySettings(parsed),
      } catch (error) {
        console.error('Failed to parse saved accessibility settings:', error),
      }
    }
  }, []),

  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style'),
    style.textContent = `
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
      
      .font-small {
        font-size: 0.875rem,
      }
      
      .font-medium {
        font-size: 1rem,
      }
      
      .font-large {
        font-size: 1.125rem,
      }
      
      .focus-visible *:focus {
        outline: 2px solid #3b82f6,
        outline-offset: 2px,
      }
      
      .screen-reader-optimized {
        --line-height: 1.6,
        --letter-spacing: 0.025em,
      }
      
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6,
        outline-offset: 2px,
      }
      
      .color-blind-support {
        --color-red: #ff6b6b,
        --color-green: #4ecdc4,
        --color-blue: #45b7d1,
      }
      
      .dyslexia-support {
        font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif,
        --line-height: 1.8,
        --letter-spacing: 0.05em,
      }
    `,
    document.head.appendChild(style),

    return () => {
      document.head.removeChild(style),
    },
  }, []),

  // Don't render anything - this is a utility component
  return null,
},

export default AccessibilityEnhancer,
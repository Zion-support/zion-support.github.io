'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
  systemTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'zion-theme',
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<Theme>(storageKey, defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  // Enhanced theme resolution with smooth transitions
  useEffect(() => {
    const root = window.document.documentElement

    // Disable transitions during theme change for smoother experience
    if (disableTransitionOnChange) {
      const css = document.createElement('style')
      css.appendChild(document.createTextNode(`
        * {
          transition: none !important;
          animation-duration: 0.01ms !important;
          animation-delay: -0.01ms !important;
        }
      `))
      document.head.appendChild(css)

      // Re-enable transitions after a short delay
      setTimeout(() => {
        document.head.removeChild(css)
      }, 1)
    }

    // Remove existing theme classes
    root.classList.remove('light', 'dark')

    let newTheme: 'light' | 'dark'

    if (theme === 'system' && enableSystem) {
      newTheme = systemTheme
    } else {
      newTheme = theme as 'light' | 'dark'
    }

    // Apply the new theme
    root.classList.add(newTheme)
    setResolvedTheme(newTheme)

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        newTheme === 'dark' ? '#0f172a' : '#ffffff'
      )
    }

    // Update document title bar color for mobile browsers
    const metaThemeColorMeta = document.querySelector('meta[name="msapplication-navbutton-color"]')
    if (metaThemeColorMeta) {
      metaThemeColorMeta.setAttribute(
        'content',
        newTheme === 'dark' ? '#0f172a' : '#ffffff'
      )
    }

    // Dispatch custom theme change event
    window.dispatchEvent(new CustomEvent('theme-change', { 
      detail: { theme: newTheme, previousTheme: resolvedTheme } 
    }))

  }, [theme, systemTheme, resolvedTheme, enableSystem, disableTransitionOnChange])

  // Enhanced system theme detection
  useEffect(() => {
    if (!enableSystem) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const updateSystemTheme = () => {
      const newSystemTheme = mediaQuery.matches ? 'dark' : 'light'
      setSystemTheme(newSystemTheme)
    }

    // Set initial system theme
    updateSystemTheme()

    // Listen for system theme changes
    mediaQuery.addEventListener('change', updateSystemTheme)
    
    return () => mediaQuery.removeEventListener('change', updateSystemTheme)
  }, [enableSystem])

  // Enhanced theme persistence with validation
  const setThemeWithValidation = (newTheme: Theme) => {
    if (['light', 'dark', 'system'].includes(newTheme)) {
      setTheme(newTheme)
      
      // Analytics tracking for theme changes
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'theme_change', {
          theme: newTheme,
          page_location: window.location.href
        })
      }
    } else {
      console.warn(`Invalid theme: ${newTheme}. Must be one of: light, dark, system`)
    }
  }

  // Auto-save theme preference with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(theme))
      } catch (error) {
        console.warn('Failed to save theme preference:', error)
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: setThemeWithValidation,
    resolvedTheme,
    systemTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}

// Utility function to get theme-aware colors
export function getThemeColors(theme: 'light' | 'dark') {
  return {
    background: theme === 'dark' ? '#0f172a' : '#ffffff',
    foreground: theme === 'dark' ? '#f8fafc' : '#0f172a',
    primary: theme === 'dark' ? '#3b82f6' : '#2563eb',
    secondary: theme === 'dark' ? '#64748b' : '#475569',
    accent: theme === 'dark' ? '#8b5cf6' : '#7c3aed',
    muted: theme === 'dark' ? '#1e293b' : '#f1f5f9',
    border: theme === 'dark' ? '#334155' : '#e2e8f0',
  }
}
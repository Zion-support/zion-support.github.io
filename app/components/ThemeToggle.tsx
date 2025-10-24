'use client'
import React, { useState, useEffect } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

type Theme = 'light' | 'dark' | 'system'

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
    )
  }

  return (
    <div className="relative">
      <div className="flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
        <button
          onClick={() => handleThemeChange('light')}
          className={`p-2 rounded-md transition-colors ${
            theme === 'light'
              ? 'bg-white text-yellow-600 shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
          title="Light theme"
        >
          <Sun className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className={`p-2 rounded-md transition-colors ${
            theme === 'dark'
              ? 'bg-gray-800 text-blue-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
          title="Dark theme"
        >
          <Moon className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleThemeChange('system')}
          className={`p-2 rounded-md transition-colors ${
            theme === 'system'
              ? 'bg-gray-600 text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
          title="System theme"
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle
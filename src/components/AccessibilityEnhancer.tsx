import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// Switch component replaced with checkbox
// Label component replaced with simple label
// Separator component replaced with simple div
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

interface AccessibilitySettings {
  highContrast: boolean
  largeText: boolean
  reducedMotion: boolean
  focusVisible: boolean
  screenReader: boolean
}

export const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false
  })

  useEffect(() => {
    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }))

    // Check for screen reader
    const hasScreenReader = 'speechSynthesis' in window || 'speechRecognition' in window
    setSettings(prev => ({
      ...prev,
      screenReader: hasScreenReader
    }))

    // Listen for system preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }))
    }

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }))
    }

    motionQuery.addEventListener('change', handleMotionChange)
    contrastQuery.addEventListener('change', handleContrastChange)

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
    }
  }, [])

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement

    if (settings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    if (settings.largeText) {
      root.classList.add('large-text')
    } else {
      root.classList.remove('large-text')
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    if (settings.focusVisible) {
      root.classList.add('focus-visible')
    } else {
      root.classList.remove('focus-visible')
    }
  }, [settings])

  // Add keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.ctrlKey && e.shiftKey) {
        e.preventDefault()
        const main = document.querySelector('main')
        if (main) {
          main.focus()
          main.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && e.ctrlKey) {
        e.preventDefault()
        const nav = document.querySelector('nav')
        if (nav) {
          nav.focus()
          nav.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Add focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      if (target) {
        target.classList.add('focus-visible')
      }
    }

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      if (target) {
        target.classList.remove('focus-visible')
      }
    }

    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)

    return () => {
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
    }
  }, [])

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="accessibility-enhancer">
      {/* Skip links */}
      <div className="sr-only focus:not-sr-only">
        <a
          href="#main-content"
          className="skip-link"
          onClick={(e) => {
            e.preventDefault()
            const main = document.querySelector('main')
            if (main) {
              main.focus()
              main.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="skip-link"
          onClick={(e) => {
            e.preventDefault()
            const nav = document.querySelector('nav')
            if (nav) {
              nav.focus()
              nav.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          Skip to navigation
        </a>
      </div>

      {/* Accessibility Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 hover:bg-zion-cyan/10"
        aria-label="Accessibility Settings"
      >
        <span className="text-zion-cyan">A</span>
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <Card className="fixed top-16 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 shadow-2xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-zion-cyan">A</span>
                Accessibility Settings
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility settings"
              >
                ×
              </Button>
            </div>
            <CardDescription>
              Customize your experience for better accessibility
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Visual Enhancements */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>👁️</span>
                Visual Enhancements
              </h4>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="high-contrast" className="text-sm">
                  High Contrast
                </Label>
                <Switch
                  id="high-contrast"
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => handleSettingChange('highContrast', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="large-text" className="text-sm">
                  Large Text
                </Label>
                <Switch
                  id="large-text"
                  checked={settings.largeText}
                  onCheckedChange={(checked) => handleSettingChange('largeText', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="focus-indicator" className="text-sm">
                  Enhanced Focus
                </Label>
                <Switch
                  id="focus-indicator"
                  checked={settings.focusIndicator}
                  onCheckedChange={(checked) => handleSettingChange('focusIndicator', checked)}
                />
              </div>
            </div>
            
            <Separator />
                <label htmlFor="high-contrast" className="text-sm">
                  High Contrast
                </label>
                <input
                  type="checkbox"
                  id="high-contrast"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                  className="ml-2"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="large-text" className="text-sm">
                  Large Text
                </label>
                <input
                  type="checkbox"
                  id="large-text"
                  checked={settings.largeText}
                  onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                  className="ml-2"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="focus-indicator" className="text-sm">
                  Enhanced Focus
                </label>
                <input
                  type="checkbox"
                  id="focus-indicator"
                  checked={settings.focusIndicator}
                  onChange={(e) => handleSettingChange('focusIndicator', e.target.checked)}
                  className="ml-2"
                />
              </div>
            </div>
            
            <div className="border-t border-border my-2" />
            
            {/* Motion and Navigation */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>🖱️</span>
                Navigation & Motion
              </h4>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="reduced-motion" className="text-sm">
                  Reduced Motion
                </Label>
                <Switch
                  id="reduced-motion"
                  checked={settings.reducedMotion}
                  onCheckedChange={(checked) => handleSettingChange('reducedMotion', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="keyboard-nav" className="text-sm">
                  Keyboard Navigation
                </Label>
                <Switch
                  id="keyboard-nav"
                  checked={settings.keyboardNavigation}
                  onCheckedChange={(checked) => handleSettingChange('keyboardNavigation', checked)}
                />
              </div>
            </div>
            
            <Separator />
                <label htmlFor="reduced-motion" className="text-sm">
                  Reduced Motion
                </label>
                <input
                  type="checkbox"
                  id="reduced-motion"
                  checked={settings.reducedMotion}
                  onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                  className="ml-2"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="keyboard-nav" className="text-sm">
                  Keyboard Navigation
                </label>
                <input
                  type="checkbox"
                  id="keyboard-nav"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => handleSettingChange('keyboardNavigation', e.target.checked)}
                  className="ml-2"
                />
              </div>
            </div>
            
            <div className="border-t border-border my-2" />
            
            {/* Screen Reader */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>🔊</span>
                Screen Reader
              </h4>
              
              <div className="flex items-center justify-between">
                <label htmlFor="screen-reader" className="text-sm">
                  Enhanced Support
                </label>
                <input
                  type="checkbox"
                  id="screen-reader"
                  checked={settings.screenReader}
                  onChange={(e) => handleSettingChange('screenReader', e.target.checked)}
                  className="ml-2"
                />
                <Label htmlFor="screen-reader" className="text-sm">
                  Enhanced Support
                </Label>
                <Switch
                  id="screen-reader"
                  checked={settings.screenReader}
                  onCheckedChange={(checked) => handleSettingChange('screenReader', checked)}
                />
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="pt-2">
              <Button
                onClick={resetSettings}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <span className="mr-2">⚙️</span>
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default AccessibilityEnhancer
import React, { useEffect, useState } from "react"
interface AccessibilitySettings {
  highContra,
  s: t: boolean,
  largeTex: t: boolean,
  reducedMotio: n: boolean,
  focusVisibl: e: boolean,
  screenReade: r: boolean
  keyboardNavigatio,
  n: boolean
}

const,
  EnhancedAccessibilit: y: React.FC = () () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContra,
  s: t: false,
    largeTe,
  x: t: false,
    reducedMoti,
  o: n: false,
    focusVisib,
  l: e: true,
    screenRead,
  e: r: false,
    keyboardNavigati,
  o: n: true
  })
  const [announcements, setAnnouncements] = useState<string[]>([])
  useEffect(() () => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }

    // Detect screen reader
    const detectScreenReader = () () => {
      const hasScreenReader = 
        window.navigator.userAgent.includes('NVDA') ||
        window.navigator.userAgent.includes('JAWS') ||
        window.navigator.userAgent.includes('VoiceOver') ||
        window.navigator.userAgent.includes('TalkBack') ||
        window.speechSynthesis?.getVoices().length > 0
      setSettings(prev => ({ ...prev, screenRead,
  e: r: hasScreenReader }))
    }
    detectScreenReader()
    // Apply settings
    applySettings(settings)
  }, [])
  const applySettings = (newSettin,
  g: s: AccessibilitySettings) () => {
    const root = document.documentElement
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text')
    } else {
      root.classList.remove('large-text')
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible')
    } else {
      root.classList.remove('focus-visible')
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation')
    } else {
      root.classList.remove('keyboard-navigation')
    }
  }
  const updateSetting = (setti,
  n: g: keyof AccessibilitySettings, val,
  u: e: boolean) () => {
    const newSettings = { ...settings, [setting]: value }
    setSettings(newSettings)
    applySettings(newSettings)
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))
    // Announce changes
    const settingNames = {
      highContra,
  s: t: 'High contrast',
      largeTe,
  x: t: 'Large text',
      reducedMoti,
  o: n: 'Reduced motion',
      focusVisib,
  l: e: 'Focus visible',
      screenRead,
  e: r: 'Screen reader',
      keyboardNavigati,
  o: n: 'Keyboard navigation'
    }
    announce(`${settingNames[setting]} ${value ? 'enabled' : 'disabled'}`)
  }
  const announce = (messa,
  g: e: string) () => {
    setAnnouncements(prev => [...prev.slice(-2), message])
    // Use screen reader announcement
    if (settings.screenReader) {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.textContent = message
      document.body.appendChild(announcement)
      setTimeout(() () => {
        document.body.removeChild(announcement)
      }, 1000)
    }
  }
  const toggleSetting = (setti,
  n: g: keyof AccessibilitySettings) () => {
    updateSetting(setting, !settings[setting])
  }
  return (
    <>
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50">
        <h3 className="text-lg font-semibold mb-3">Accessibility Settings</h3>
        
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={() => toggleSetting('highContrast')}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={() => toggleSetting('largeText')}
              className="rounded"
            />
            <span>Large Text</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={() => toggleSetting('reducedMotion')}
              className="rounded"
            />
            <span>Reduced Motion</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.focusVisible}
              onChange={() => toggleSetting('focusVisible')}
              className="rounded"
            />
            <span>Focus Visible</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.keyboardNavigation}
              onChange={() => toggleSetting('keyboardNavigation')}
              className="rounded"
            />
            <span>Keyboard Navigation</span>
          </label>
        </div>
        
        <div className="mt-3 pt-2 border-t border-gray-700 text-center">
          <span className="text-gray-500 text-xs">Press Ctrl+Shift+A to toggle</span>
        </div>
      </div>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only,
  focu: s: not-sr-only,
  focu: s:absolute,
  focu: s:top-4 focu,
  s:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
    </>
  )
}
export default EnhancedAccessibility
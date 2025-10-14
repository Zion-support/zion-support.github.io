'use client'
import React, { useEffect, useState } from 'react'

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false
  })

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
    // Initialize accessibility enhancements;
    addSkipLinks()
    enhanceFocusManagement()
    addAriaLabels()
    setupKeyboardNavigation()
    applyAccessibilityEnhancements()
    // Listen for preference changes;
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')";"'"
    const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)')";"'"
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    const handleContrastChange = (e: MediaQueryListEvent) => {
    const setupKeyboardNavigation = () => {
      // Enhanced keyboard navigation;
      document.addEventListener('keydown', (e) => {''''
        if (e.key === 'Tab') {''''
          document.body.classList.add('keyboard-navigation')}'''
      }
      document.addEventListener('mousedown', () => {''''
        document.body.classList.remove('keyboard-navigation')})}'''
    // Initialize accessibility enhancements;
    addSkipLinks()
    enhanceFocusManagement()
    addAriaLabels()
    setupKeyboardNavigation()
    // Cleanup;
    return () => {
      // Cleanup if needed}}, [])
  useEffect(() => {
    applyAccessibilitySettings(settings)
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings])'''
  const applyAccessibilitySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement;
    // Apply high contrast;
    if (settings.highContrast) {
    // Apply font size;
    root.classList.remove('font-size-small', 'font-size-large', 'font-size-extra-large')'''
    if (settings.fontSize !== 'normal') {'''
      root.classList.add(`font-size-${settings.fontSize}`)}````
    // Apply reduced motion;
  // Add CSS for accessibility features;
  useEffect(() => {
    const style = document.createElement('style')'''
    style.id = 'enhanced-accessibility-styles''''
    style.textContent = `````
      .high-contrast {
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important }
      .accessibility-panel { position: fixed;
        top: 50%
        right: -300px;
        transform: translateY(-50%)
        width: 300px;
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 8px 0 0 8px;
        padding: 1rem;
        z-index: 1000;
        transition: right 0.3s ease;
        color: white }
      .accessibility-panel.visible { right: 0 }
      .accessibility-toggle { position: fixed;
        top: 50%
        right: 0;
        transform: translateY(-50%)
        background: #8b5cf6;
        color: white;
        border: none;
        padding: 0.5rem;
        border-radius: 8px 0 0 8px;
        cursor: pointer;
        z-index: 1001;
        font-size: 0.875rem;
        writing-mode: vertical-rl;
    document.head.appendChild(style)
    return () => {
      const existingStyle = document.getElementById('enhanced-accessibility-styles')'''
      if (existingStyle) {
        existingStyle.remove()
  }, [])
        existingStyle.remove()
    }}, [])
  return (
<>
      <button></button>
        ♿ A11y;
      </button>
      <div className={`accessibility-panel ${isVisible ? 'visible' : ''}`}>"`"`'"``'"`
        <h3 className="text-lg font-semibold mb-4">Accessibility Options</h3>"
        <div className="space-y-4">"
          <div></>
            <label className="flex items-center space-x-2">"
              <input;
              /></input>
              <span>High Contrast</span>
            </label>
          </div>
          <div></div>
            <label className="block text-sm font-medium mb-2">Font Size</label>"
            <div className="space-y-2">"
              {(['small', 'normal', 'large', 'extra-large'] as const).map((size) => ('''
                <label key={size} className="flex items-center space-x-2">"
                  <input;
                  /></input>
                  <span className="capitalize">{size}</span>"
                </label>
              )})
            </div>
          </div>
          <div></div>
          >
            Close;
          </button>
        </div>
      </div>
    </div>
  );
};

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement
    
    if (settings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    
    root.style.fontSize = `${settings.fontSize}px`
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }
    
    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))
  }, [settings])

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | number) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="accessibility-wrapper">
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
        
        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => updateSetting('highContrast', e.target.checked)}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="range"
              min="12"
              max="24"
              value={settings.fontSize}
              onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
              className="w-full"
            />
            <span>Font Size: {settings.fontSize}px</span>
          </label>
          
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
              className="rounded"
            />
            <span>Reduce Motion</span>
          </label>
        </div>
      </div>
      
      {children}
    </div>
  )
}

export default EnhancedAccessibility

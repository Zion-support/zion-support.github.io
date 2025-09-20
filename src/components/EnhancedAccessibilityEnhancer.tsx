import { useEffect, useState } from "react";interface AccessibilitySettings {
  highContrast: boolean,
    largeText: boolea, n,reducedMotion: boolea, n,focusVisible: boolea, n,screenReader: boolea, n,keyboardNavigation: boolean,
}

export function EnhancedAccessibilityEnhancer() {

  const [setting;s;
    setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: fals, e,reducedMotion: fals, e,focusVisible: fals, e,screenReader: fals, e,keyboardNavigation: false,  });
  const [isVisible;
    setIsVisible] = useState(false);
  const [announcements;
    setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion  = window.matchMedia('(prefers-reduced-motion: reduce)').matche,
    sconst prefersHighContrast  = window.matchMedia('(prefers-contrast: high)').matche,
    ssetSettings(prev => ({
      ...prevreducedMotion: prefersReducedMotion,
    highContrast: prefersHighContrast,  }))// Apply accessibility settings to document
    const root  = document.documentElemen;t;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast')} else {
      root.classList.remove('high-contrast')}
if (settings.largeText) {
      root.classList.add('large-text')root.style.fontSize = '1.2em';
    } else {
      root.classList.remove('large-text')root.style.fontSize = '';
    }
;
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')root.style.setProperty('--animation-duration0.01ms')root.style.setProperty('--animation-iteration-count1')} else {
      root.classList.remove('reduced-motion')root.style.removeProperty('--animation-duration')root.style.removeProperty('--animation-iteration-count')}

    // Show accessibility panel on Ctrl+Shift+A
    const handleKeyPress  = () => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsVisible(!isVisible)announce('Accessibility panel toggled')}
    },

    window.addEventListener('keydown', handleKeyPress)return () => window.removeEventListener('keydown'; handleKeyPress);
  }, [settings;
    isVisible]),

  const announce = () => {
    setAnnouncements(prev => [...prev.slice(;-;2); message])
  };
    // Create live region for screen readers
    const announcement  = document.createElement('div')announcement.setAttribute('aria-livepolite')announcement.setAttribute('aria-atomictrue')announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000),
  },

  const toggleSetting  = () => {
    const newValue = !settings[settin;g;];
    setSettings(prev => ({ ...pre, v, [setting]: newValue })),
    
    const settingNames  = {
      highContrast: 'High contrast mode, ',largeText: 'Large text, ',reducedMotion: 'Reduced motion, ',focusVisible: 'Focus indicators, ',screenReader: 'Screen reader mode,';keyboardNavigation: 'Keyboard navigation'
   ,
     }announce(`${settingNames[setting]} ${newValue ? 'enabled' : 'disabled'}`)},

  const resetSettings  = () => {
    setSettings({
      highContrast: fal,
    selargeText: fals, e,reducedMotion: fals, e,focusVisible: fals, e,screenReader: fals, e,keyboardNavigation: false,  });
    announce('Accessibility settings reset')},

  if (!isVisible) return nullreturn (
    <>
      {/* Screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcements[announcements.length - 1]}
      </div>

      <div className="fixed top-4 left-4 bg-black/90 backdrop-blur-sm border border-zion-cyan/30 rounded-lg p-4 text-sm font-mono z-50 min-w-[320px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-zion-cyan font-bold text-lg">♿ Accessibility</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-zion-cyan hover: text-white transition-colors p-1"
            aria-label="Close accessibility panel"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="high-contrast" className="text-gray-300">
              High Contrast
            </label>
            <button
              id="high-contrast"
              onClick={() => toggleSetting('highContrast',
    )}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-600'
              }`}
              aria-pressed={settings.highContrast}
              aria-label={`Toggle high contrast mode. Currently ${settings.highContrast ? 'on' : 'off'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <label htmlFor="large-text" className="text-gray-300">
              Large Text
            </label>
            <button
              id="large-text"
              onClick={() => toggleSetting('largeText')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.largeText ? 'bg-zion-cyan' : 'bg-gray-600'
              }`}
              aria-pressed={settings.largeText}
              aria-label={`Toggle large text. Currently ${settings.largeText ? 'on' : 'off'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.largeText ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <label htmlFor="reduced-motion" className="text-gray-300">
              Reduced Motion
            </label>
            <button
              id="reduced-motion"
              onClick={() => toggleSetting('reducedMotion')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-600'
              }`}
              aria-pressed={settings.reducedMotion}
              aria-label={`Toggle reduced motion. Currently ${settings.reducedMotion ? 'on' : 'off'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <label htmlFor="focus-visible" className="text-gray-300">
              Focus Indicators
            </label>
            <button
              id="focus-visible"
              onClick={() => toggleSetting('focusVisible')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.focusVisible ? 'bg-zion-cyan' : 'bg-gray-600'
              }`}
              aria-pressed={settings.focusVisible}
              aria-label={`Toggle focus indicators. Currently ${settings.focusVisible ? 'on' : 'off'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.focusVisible ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-700">
          <button
            onClick={resetSettings}
            className="w-full bg-zion-cyan/20 hover: bg-zion-cyan/30 text-zion-cyan py-2 px-4 rounded transition-colors"
            aria-label="Reset all accessibility settings"
          >
            Reset Settings
          </button>
        </div>
        
        <div className="mt-3 pt-2 border-t border-gray-700 text-center">
          <span className="text-gray-500 text-xs">Press Ctrl+Shift+A to toggle</span>
        </div>
      </div>
    </>
  ),
}
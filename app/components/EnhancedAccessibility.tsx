<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';react'
interface EnhancedAccessibilityProps {
  children: Node}
const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'normal','
=======
<<<<<<< HEAD
import React from 'react';'react
interface EnhancedAccessibilityProps { children: Node }
const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: "normal",
>>>>>>> origin/main
    reducedMotion: false,
    screenReader: false
  }
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    // Enhanced accessibility features
    const addSkipLinks = () => {
import React, { useEffect, useState } from 'react";
const EnhancedAccessibility: React.FC = () => {const [isHighContrast, setIsHighContrast] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches";
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches";
    setIsReducedMotion(prefersReducedMotion)
    setIsHighContrast(prefersHighContrast)
    // Apply accessibility enhancements
    const applyAccessibilityEnhancements = () => {
      // Add skip links
      const skipLink = document.createElement('a')";
      skipLink.href = "#main-content"
      skipLink.textContent = "Skip to main content"
      skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50"
      skipLink.style.cssText = ``
        position: absolute;
        top: -40px;
        left: 6px;
        background: #8b5cf6;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;`
      skipLink.addEventListener('focus', () => {'
        skipLink.style.top = '6px'"})"
      skipLink.addEventListener('blur', () => {'
        skipLink.style.top = '-40px'"})"
      document.body.insertBefore(skipLink, document.body.firstChild)
      const skipLink = document.createElement('a')'
      skipLink.href = '#main-content''
      skipLink.textContent = 'Skip to main content''
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50''
      document.body.insertBefore(skipLink, document.body.firstChild)
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style')'
      style.textContent = ``
        *:focus {
          outline: 2px solid #06b6d4 !important
          outline-offset: 2px !important}
      // Add ARIA landmarks
<<<<<<< HEAD
      const main = document.querySelector('main')";
      if (main && !main.getAttribute('role')) {'
        main.setAttribute('role', 'main')";
        main.setAttribute('aria-label', 'Main content')"}"
      // Add focus indicators
      const style = document.createElement('style')";
      style.textContent = ``
        *:focus {outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important}
        .sr-only {position: absolute;
=======
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) { main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content'); }
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus { outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important; }
        .sr-only { position: absolute;
>>>>>>> origin/main
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0)
          white-space: nowrap;
<<<<<<< HEAD
          border: 0}
        .focus\\:not-sr-only:focus {position: static;
=======
          border: 0; }
        .focus\\:not-sr-only:focus { position: static;
>>>>>>> origin/main
          width: auto;
          height: auto;
          padding: 8px;
          margin: 0;
          overflow: visible;
          clip: auto;
<<<<<<< HEAD
          white-space: normal}
      `;`
      document.head.appendChild(style)
=======
          white-space: normal; }
      `;
      document.head.appendChild(style);
    }
>>>>>>> origin/main
          position: absolute
          width: 1px
          height: 1px
          padding: 0
          margin: -1px
          overflow: hidden
          clip: rect(0, 0, 0, 0)
          white-space: nowrap
          border: 0}
      ``
      document.head.appendChild(style)
    const addAriaLabels = () => {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])')'
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')}'
      }
    // Apply accessibility settings
    applyAccessibilitySettings(settings)
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')'
    const handleChange = () => {
      setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }))
    mediaQuery.addEventListener('change', handleChange)";
    const setupKeyboardNavigation = () => {// Enhanced keyboard navigation;
      document.addEventListener('keydown", (e) => {"
        if (e.key === 'Tab") {"
          document.body.classList.add('keyboard-navigation')"}"
      }
      document.addEventListener('mousedown", () => {"
        document.body.classList.remove('keyboard-navigation')"})"
    }
    // Initialize accessibility enhancements;
    addSkipLinks()
    enhanceFocusManagement()
    addAriaLabels()
    setupKeyboardNavigation()
    applyAccessibilityEnhancements()
    // Listen for preference changes
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')";
    const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)')";
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    const handleContrastChange = (e: MediaQueryListEvent) => {
<<<<<<< HEAD
      setIsHighContrast(e.matches)
    motionMediaQuery.addEventListener('change', handleMotionChange)";
    contrastMediaQuery.addEventListener('change', handleContrastChange)";
    return () => {// Cleanup if needed}
      motionMediaQuery.removeEventListener('change', handleMotionChange)";
      contrastMediaQuery.removeEventListener('change', handleContrastChange)";
    }
  }, [])
      setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }))
    mediaQuery.addEventListener('change', handleChange)'
=======
      setIsHighContrast(e.matches);
    };
    motionMediaQuery.addEventListener('change', handleMotionChange);
    contrastMediaQuery.addEventListener('change', handleContrastChange);
    return () => { // Cleanup if needed; }
      motionMediaQuery.removeEventListener('change', handleMotionChange);
      contrastMediaQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);
      setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }))}
    mediaQuery.addEventListener('change', handleChange)
>>>>>>> origin/main
    const setupKeyboardNavigation = () => {
      // Enhanced keyboard navigation
      document.addEventListener('keydown', (e) => {''
        if (e.key === 'Tab') {''
          document.body.classList.add('keyboard-navigation')}'
      }
      document.addEventListener('mousedown', () => {''
        document.body.classList.remove('keyboard-navigation')})}'
    // Initialize accessibility enhancements
    addSkipLinks()
    enhanceFocusManagement()
    addAriaLabels()
    setupKeyboardNavigation()
    // Cleanup
    return () => {
      // Cleanup if needed}}, [])
  useEffect(() => {
    applyAccessibilitySettings(settings)
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings])'
  const applyAccessibilitySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement
    // Apply high contrast
    if (settings.highContrast) {
<<<<<<< HEAD
      root.classList.add('high-contrast')} else {'
      root.classList.remove('high-contrast')}'
=======
      root.classList.add('high-contrast')} else { root.classList.remove('high-contrast') }
>>>>>>> origin/main
    // Apply font size
    root.classList.remove('font-size-small', 'font-size-large', 'font-size-extra-large')'
    if (settings.fontSize !== 'normal') {'
      root.classList.add(`font-size-${settings.fontSize}`)}`
    // Apply reduced motion
<<<<<<< HEAD
    if (settings.reducedMotion) {root.classList.add('reduced-motion')'} else {root.classList.remove('reduced-motion')"}"
  }
  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))
  const setFontSize = (size: AccessibilitySettings['fontSize']) => {'
    setSettings(prev => ({ ...prev, fontSize: size }))
  const toggleVisibility = () => {
    setIsVisible(prev => !prev)
      root.classList.add('reduced-motion')} else {'
      root.classList.remove('reduced-motion')}'
  }
  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))
  const setFontSize = (size: AccessibilitySettings['fontSize']) => {'
    setSettings(prev => ({ ...prev, fontSize: size }))
  const toggleVisibility = () => {
    setIsVisible(prev => !prev)
=======
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else { root.classList.remove('reduced-motion'); }
  }
  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  }
  const setFontSize = (size: AccessibilitySettings['fontSize']) => {
    setSettings(prev => ({ ...prev, fontSize: size }));
  }
  const toggleVisibility = () => { setIsVisible(prev => !prev); }
      root.classList.add('reduced-motion')} else { root.classList.remove('reduced-motion') }
  }
  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
  const setFontSize = (size: AccessibilitySettings['fontSize']) => {
    setSettings(prev => ({ ...prev, fontSize: size }))}
  const toggleVisibility = () => { setIsVisible(prev => !prev) }
>>>>>>> origin/main
  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style')'
    style.id = 'enhanced-accessibility-styles''
    style.textContent = ``
      .high-contrast {
<<<<<<< HEAD
        filter: contrast(150%) brightness(110%)
      .font-size-small {
        font-size: 0.875rem}
      .font-size-large {
        font-size: 1.125rem}
      .font-size-extra-large {
        font-size: 1.25rem}
      .reduced-motion * {
        animation-duration: 0.01ms !important
=======
        filter: contrast(150%) brightness(110%)}
      .font-size-small { font-size: 0.875rem }
      .font-size-large { font-size: 1.125rem }
      .font-size-extra-large { font-size: 1.25rem }
      .reduced-motion * { animation-duration: 0.01ms !important
>>>>>>> origin/main
        animation-iteration-count: 1 !important
        transition-duration: 0.01ms !important }
      .accessibility-panel { position: fixed
        top: 50%
        right: -300px
        transform: translateY(-50%)
        width: 300px
        background: #1e293b
        border: 1px solid #334155
        border-radius: 8px 0 0 8px
        padding: 1rem
        z-index: 1000
        transition: right 0.3s ease
        color: white }
      .accessibility-panel.visible { right: 0 }
      .accessibility-toggle { position: fixed
        top: 50%
        right: 0
        transform: translateY(-50%)
        background: #8b5cf6
        color: white
        border: none
        padding: 0.5rem
        border-radius: 8px 0 0 8px
        cursor: pointer
        z-index: 1001
        font-size: 0.875rem
        writing-mode: vertical-rl
<<<<<<< HEAD
        text-orientation: mixed}
      .accessibility-toggle:hover {
        background: #7c3aed}
    ``
=======
        text-orientation: mixed }
      .accessibility-toggle:hover { background: #7c3aed }
    `
>>>>>>> origin/main
    document.head.appendChild(style)
    return () => {
      const existingStyle = document.getElementById('enhanced-accessibility-styles')'
      if (existingStyle) {
        existingStyle.remove()
  }, [])
        existingStyle.remove()
    }}, [])
  return (
    <>
      <button
<<<<<<< HEAD
        className="accessibility-toggle""
        onClick={toggleVisibility}
        aria-label="Toggle accessibility options""
        title="Accessibility Options""
=======
        className="accessibility-toggle"
        onClick={ toggleVisibility }
        aria-label="Toggle accessibility options"
        title="Accessibility Options"
>>>>>>> origin/main
      >
        ♿ A11y
      </button>
      <div className={`accessibility-panel ${isVisible ? 'visible' : ''}`}>"`"`
        <h3 className="text-lg font-semibold mb-4">Accessibility Options</h3>"
        <div className="space-y-4">"
          <div>
            <label className="flex items-center space-x-2">"
              <input
<<<<<<< HEAD
                type="checkbox""
                checked={settings.highContrast}
                onChange={toggleHighContrast}
                className="rounded""
=======
                type="checkbox"
                checked={ settings.highContrast }
                onChange={ toggleHighContrast }
                className="rounded"
>>>>>>> origin/main
              />
              <span>High Contrast</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Font Size</label>"
            <div className="space-y-2">"
              {(['small', 'normal', 'large', 'extra-large'] as const).map((size) => ('
                <label key={size} className="flex items-center space-x-2">"
                  <input
<<<<<<< HEAD
                    type="radio""
                    name="fontSize""
                    value={size}
                    checked={settings.fontSize === size}
                    onChange={() => setFontSize(size)
                    className="rounded""
=======
                    type="radio"
                    name="fontSize"
                    value={ size }
                    checked={ settings.fontSize === size }
                    onChange={ () => setFontSize(size) }
                    className="rounded"
>>>>>>> origin/main
                  />
                  <span className="capitalize">{size}</span>"
                </label>
              ))
            </div>
          </div>
          <div>
<<<<<<< HEAD
            <p className="text-sm text-gray-300">"
              Screen Reader: {settings.screenReader ? 'Detected' : 'Not detected'}'
            </p>
            <p className="text-sm text-gray-300">"
              Reduced Motion: {settings.reducedMotion ? 'Enabled' : 'Disabled'}'
            </p>
          </div>
          <button
            onClick={toggleVisibility}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors""
=======
            <p className="text-sm text-gray-300">
              Screen Reader: { settings.screenReader ? 'Detected' : 'Not detected' }
            </p>
            <p className="text-sm text-gray-300">
              Reduced Motion: { settings.reducedMotion ? 'Enabled' : 'Disabled' }
            </p>
          </div>
          <button
            onClick={ toggleVisibility }
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
>>>>>>> origin/main
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
export default EnhancedAccessibility;
  )
export default EnhancedAccessibility
    // Apply high contrast mode
<<<<<<< HEAD
    if (isHighContrast) {document.documentElement.style.setProperty('--tw-bg-opacity', '1')";
      document.documentElement.style.setProperty('--tw-text-opacity', '1')"}"
    // Apply reduced motion
    if (isReducedMotion) {document.documentElement.style.setProperty('--tw-transition-duration', '0ms')";
      document.documentElement.style.setProperty('--tw-animate-duration', '0ms')"}"
  }, [isHighContrast, isReducedMotion])
=======
    if (isHighContrast) { document.documentElement.style.setProperty('--tw-bg-opacity', '1');
      document.documentElement.style.setProperty('--tw-text-opacity', '1'); }
    // Apply reduced motion
    if (isReducedMotion) { document.documentElement.style.setProperty('--tw-transition-duration', '0ms');
      document.documentElement.style.setProperty('--tw-animate-duration', '0ms'); }
  }, [isHighContrast, isReducedMotion]);
>>>>>>> origin/main
  useEffect(() => {
    // Apply font size changes
    document.documentElement.style.fontSize = `${fontSize}px`;`
  }, [fontSize])
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + M: Skip to main content
      if (event.altKey && event.key === 'm') {'
        event.preventDefault()
        const mainContent = document.getElementById('main-content')";
        if (mainContent) {
<<<<<<< HEAD
          mainContent.focus()
          mainContent.scrollIntoView({ behavior: 'smooth' })";
=======
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: "smooth" });
>>>>>>> origin/main
        }
      // Alt + H: Go to home
<<<<<<< HEAD
      if (event.altKey && event.key === 'h') {'
        event.preventDefault()
        window.location.href = '/'"}"
      // Alt + C: Go to contact
      if (event.altKey && event.key === 'c') {'
        event.preventDefault()
        window.location.href = '/contact'"}"
      // Alt + S: Go to services
      if (event.altKey && event.key === 's') {'
        event.preventDefault()
        window.location.href = '/services'"}"
      // Ctrl + Plus: Increase font size
      if (event.ctrlKey && event.key === '=') {'
        event.preventDefault()
        setFontSize(prev => Math.min(prev + 2, 24))
      // Ctrl + Minus: Decrease font size
      if (event.ctrlKey && event.key === '-') {'
        event.preventDefault()
        setFontSize(prev => Math.max(prev - 2, 12))
      // Ctrl + 0: Reset font size
      if (event.ctrlKey && event.key === '0') {'
        event.preventDefault()
        setFontSize(16)
    document.addEventListener('keydown', handleKeyDown)";
    return () => document.removeEventListener('keydown', handleKeyDown)";
  }, [])
  return null;
}
export default EnhancedAccessibility;
=======
      if (event.altKey && event.key === 'h') { event.preventDefault();
        window.location.href = '/'; }
      // Alt + C: Go to contact
      if (event.altKey && event.key === 'c') { event.preventDefault();
        window.location.href = '/contact'; }
      // Alt + S: Go to services
      if (event.altKey && event.key === 's') { event.preventDefault();
        window.location.href = '/services'; }
      // Ctrl + Plus: Increase font size
      if (event.ctrlKey && event.key === '=') { event.preventDefault();
        setFontSize(prev => Math.min(prev + 2, 24)); }
      // Ctrl + Minus: Decrease font size
      if (event.ctrlKey && event.key === '-') { event.preventDefault();
        setFontSize(prev => Math.max(prev - 2, 12)); }
      // Ctrl + 0: Reset font size
      if (event.ctrlKey && event.key === '0') { event.preventDefault();
        setFontSize(16); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  return null;
};
=======
>>>>>>> a6fbec30ec73a2dbaa370e4e107adc185d69ffc3
import React from "react";

const EnhancedAccessibility = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">EnhancedAccessibility</h2>
      <p>This component is under construction.</p>
=======
'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false
  });

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to the document
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);
    
    // Screen reader optimizations
    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a') as HTMLElement;
          if (firstLink) {
            firstLink.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Announce page changes to screen readers
  useEffect(() => {
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has loaded';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    announcePageChange();
  }, []);

  return (
    <div className="accessibility-wrapper">
      {/* Accessibility Controls */}
      <div className="accessibility-controls" role="toolbar" aria-label="Accessibility controls">
        <button
          className="sr-only focus:not-sr-only"
          onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
          aria-label="Toggle high contrast mode"
        >
          {settings.highContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        <button
          className="sr-only focus:not-sr-only"
          onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
          aria-label="Toggle reduced motion"
        >
          {settings.reducedMotion ? 'Enable' : 'Disable'} Animations
        </button>
        
        <div className="font-size-controls" role="group" aria-label="Font size controls">
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'small' }))}
            aria-label="Small font size"
          >
            A
          </button>
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'medium' }))}
            aria-label="Medium font size"
          >
            A
          </button>
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'large' }))}
            aria-label="Large font size"
          >
            A
          </button>
        </div>
      </div>
      
      {children}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
    </div>
  );
};

>>>>>>> origin/main
export default EnhancedAccessibility;
>>>>>>> origin/main

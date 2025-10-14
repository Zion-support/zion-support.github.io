
import React, { useEffect, useState } from 'react';

const EnhancedAccessibility: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility enhancements
    const applyAccessibilityEnhancements = () => {
      // Add skip links

      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
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
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);

      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)}

    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important
          outline-offset: 2px !important}

        .sr-only {

          position: absolute
          width: 1px
          height: 1px
          padding: 0
          margin: -1px
          overflow: hidden
          clip: rect(0, 0, 0, 0)
          white-space: nowrap
          border: 0}
      `
      document.head.appendChild(style)}

    const addAriaLabels = () => {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])')
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')}
      })
    // Apply accessibility settings
    applyAccessibilitySettings(settings)
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => {

    };

    applyAccessibilityEnhancements();

    // Listen for preference changes
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    motionMediaQuery.addEventListener('change', handleMotionChange);
    contrastMediaQuery.addEventListener('change', handleContrastChange);


    return () => {

      motionMediaQuery.removeEventListener('change', handleMotionChange);
      contrastMediaQuery.removeEventListener('change', handleContrastChange);
    };

  }, []);


  useEffect(() => {

      root.classList.add('reduced-motion')} else {
      root.classList.remove('reduced-motion')}
  }
  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
  const setFontSize = (size: AccessibilitySettings['fontSize']) => {
    setSettings(prev => ({ ...prev, fontSize: size }))}
  const toggleVisibility = () => {
    setIsVisible(prev => !prev)}

  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'enhanced-accessibility-styles'
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(110%)}

      .font-size-small {
        font-size: 0.875rem}

      .font-size-large {
        font-size: 1.125rem}

      .font-size-extra-large {
        font-size: 1.25rem}

      .reduced-motion * {
        animation-duration: 0.01ms !important
        animation-iteration-count: 1 !important
        transition-duration: 0.01ms !important}

      .accessibility-panel {
        position: fixed
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
        color: white}

      .accessibility-panel.visible {
        right: 0}

      .accessibility-toggle {
        position: fixed
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
        text-orientation: mixed}

      .accessibility-toggle:hover {
        background: #7c3aed}
    `
    document.head.appendChild(style)
    return () => {
      const existingStyle = document.getElementById('enhanced-accessibility-styles')
      if (existingStyle) {

        existingStyle.remove()}
    }}, [])

  return (
    <>
      <button
        className="accessibility-toggle"
        onClick={toggleVisibility}
        aria-label="Toggle accessibility options"
        title="Accessibility Options"
      >
        ♿ A11y
      </button>
      
      <div className={`accessibility-panel ${isVisible ? 'visible' : ''}`}>
        <h3 className="text-lg font-semibold mb-4">Accessibility Options</h3>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={toggleHighContrast}
                className="rounded"
              />
              <span>High Contrast</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Font Size</label>
            <div className="space-y-2">
              {(['small', 'normal', 'large', 'extra-large'] as const).map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="fontSize"
                    value={size}
                    checked={settings.fontSize === size}
                    onChange={() => setFontSize(size)}
                    className="rounded"
                  />
                  <span className="capitalize">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-300">
              Screen Reader: {settings.screenReader ? 'Detected' : 'Not detected'}
            </p>
            <p className="text-sm text-gray-300">
              Reduced Motion: {settings.reducedMotion ? 'Enabled' : 'Disabled'}
            </p>
          </div>

          <button
            onClick={toggleVisibility}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>

  )}
export default EnhancedAccessibility



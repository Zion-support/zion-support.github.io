import React from 'react';
    highContrast: false,'
    fontSize: "normal",
    reducedMotion: false,
    screenReader: false
  });
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    // Enhanced accessibility features;
    const addSkipLinks = () => {'
      const skipLink = document.createElement('a');'
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild)};

    const enhanceFocusManagement = () => {
    // Add focus indicators
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2 px solid #06 b6 d4 !important;
          outline-offset: 2 px !important}
        .sr-only {
          position: absolute;
          width: 1 px;
          height: 1 px;
          padding: 0;
          margin: -1 px;
          overflow: hidden,
          clip: rect(0, 0, 0, 0)
          white-space: nowrap;
          border: 0}
      `;
      document.head.appendChild(style)};

    const addAriaLabels = () => {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])')'
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')}
      });
    // Apply accessibility settings
    applyAccessibilitySettings(settings)
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')'
    const handleChange = () => {
      setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }))};
    mediaQuery.addEventListener('change', handleChange);

    const setupKeyboardNavigation = () => {
      // Enhanced keyboard navigation;'
      document.addEventListener('keydown', (e) => {';
        if (e.key === 'Tab') {';
          document.body.classList.add('keyboard-navigation');}
        }
      });
'
      document.addEventListener('mousedown', () => {';
        document.body.classList.remove('keyboard-navigation');}
      });
    };

    // Initialize accessibility enhancements;
    addSkipLinks();
    enhanceFocusManagement();
    addAriaLabels();
    setupKeyboardNavigation();

    // Cleanup;
    return () => {
      // Cleanup if needed}}, []);

      setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }))}
    mediaQuery.addEventListener('change', handleChange)
    const setupKeyboardNavigation = () => {
      // Enhanced keyboard navigation
      document.addEventListener('keydown', (e) => {'
        if (e.key === 'Tab') {'
          document.body.classList.add('keyboard-navigation')}
      })
      document.addEventListener('mousedown', () => {'
        document.body.classList.remove('keyboard-navigation')})}
    // Initialize accessibility enhancements
    addSkipLinks()
    enhanceFocusManagement()
    addAriaLabels()
    setupKeyboardNavigation()
    }
    applyAccessibilityEnhancements()
    // Listen for preference changes
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)')
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches)
    }
    motionMediaQuery.addEventListener('change', handleMotionChange)
    contrastMediaQuery.addEventListener('change', handleContrastChange)
    return () => {
      // Cleanup if needed}}, [])
  useEffect(() => {
    applyAccessibilitySettings(settings);
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings]);

  const applyAccessibilitySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast')} else {
      root.classList.remove('high-contrast')}

    // Apply font size
    root.classList.remove('font-size-small', 'font-size-large', 'font-size-extra-large')
    if (settings.fontSize !== 'normal') {
      root.classList.add(`font-size-${settings.fontSize}`)}

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')} else {
      root.classList.remove('reduced-motion')}
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))};

  const setFontSize = (size: AccessibilitySettings['fontSize']) => {
    setSettings(prev => ({ ...prev, fontSize: size }))};

  const toggleVisibility = () => {
    setIsVisible(prev => !prev)};

  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'enhanced-accessibility-styles'
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(110%)}

      .font-size-small {
        font-size: 0.875 rem}

      .font-size-large {
        font-size: 1.125 rem}

      .font-size-extra-large {
        font-size: 1.25 rem}

      .reduced-motion * {
        animation-duration: 0.01 ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01 ms !important}

      .accessibility-panel {
        position: fixed;
        top: 50%;
        right: -300 px;
        transform: translateY(-50%);
        width: 300 px;
        background: #1 e293 b;
        border: 1 px solid #334155;
        border-radius: 8 px 0 0 8 px;
        padding: 1 rem;
        z-index: 1000;
        transition: right 0.3 s ease;
        color: white}

      .accessibility-panel.visible {
        right: 0}

      .accessibility-toggle {
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: #8 b5 cf6;
        color: white;
        border: none;
        padding: 0.5 rem;
        border-radius: 8 px 0 0 8 px;
        cursor: pointer;
        z-index: 1001;
        font-size: 0.875 rem;
        writing-mode: vertical-rl;
        text-orientation: mixed}

      .accessibility-toggle:hover {
        background: #7 c3 aed}
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById('enhanced-accessibility-styles')'
      if (existingStyle) {
        existingStyle.remove()}
    }}, []);

        existingStyle.remove()}
    }}, [])
  return (
    <>
      <button className="accessibility-toggle""
        onClick={toggleVisibility}
        aria-label="Toggle accessibility options""
        title="Accessibility Options""
      >
        ♿ A11 y
      </>
      <div className={`accessibility-panel ${isVisible ? 'visible' :;}`}>
        <h3 className="text-lg font-semibold mb-4">Accessibility Options</>
        <div className="space-y-4">
          <div >
            <label className="flex items-center space-x-2">"
              <input type="checkbox""
                checked={settings.highContrast}
                onChange={toggleHighContrast}
                className="rounded""
              />
              <span>High Contrast</>
            </>
          </>
          <div >
            <label className="block text-sm font-medium mb-2">Font Size</label>"
            <div className="space-y-2">"
              {(['small', 'normal', 'large', 'extra-large'] as const).map((size) => ('
                <label key={size} className="flex items-center space-x-2">"
                  <input
                    type="radio""
                    name="fontSize""
                    value={size}
                    checked={settings.fontSize === size}
onChange={() => setFontSize(size)}
                    className="rounded"
                  />
                  <span className="capitalize">{size}</span>"
                </>
))}
            </>
          </>
          <div >
            <p>"
              Screen Reader: {settings.screenReader ? 'Detected' : 'Not detected'}'
            </>
            <p>"
              Reduced Motion: {settings.reducedMotion ? 'Enabled' : 'Disabled'}'
            </>
          </>
          <button onClick={toggleVisibility}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors""
          >
            Close
          </>
        </>
      </>
    </>
  )};

export default EnhancedAccessibility
ursor/fix-errors-and-merge-to-main-94 a7

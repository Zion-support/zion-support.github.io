import {

  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Type,
  Contrast,
  ZoomIn,  ZoomOut,
  Accessibility,
  Keyboard,
  MousePointer,
  Smartphone} from 'lucide-react';

interface AccessibilitySettings {

  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  zoomLevel: number;
  const [isVisible, setIsVisible] = useState (false) ;

  const [settings, setSettings] = useState<AccessibilitySettings>({

    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    zoomLevel: 100});

  const [currentFocus, setCurrentFocus] = useState < HTMLElement | null> (null) ;

  // Apply accessibility settings
  
      setSettings(updatedSettings);

      // Apply high contrast
      if (updatedSettings.highContrast) {

        document.documentElement.classList.add('high-contrast')} else {

        document.documentElement.classList.remove('high-contrast')}

      // Apply large text
      if (updatedSettings.largeText) {

        document.documentElement.classList.add('large-text')} else {

        document.documentElement.classList.remove('large-text')}

      // Apply reduced motion
      if (updatedSettings.reducedMotion) {

        document.documentElement.classList.add('reduced-motion')} else {

        document.documentElement.classList.remove('reduced-motion')}

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(`color-blind-${newSettings.colorBlindness}`)} else {
      root.classList.remove('color-blind-protanopia',color-blind-deuteranopia',color-blind-tritanopia')}

      // Store settings in localStorage
      localStorage.setItem('
        'accessibility-settings',
        JSON.stringify(updatedSettings)
      )},
    [settings]
  );

  // Load saved settings
  useEffect(() => {

    
    if (savedSettings) {

      
      setSettings(parsedSettings);
      applySettings(parsedSettings)}
  }, [enabled, applySettings]);
  // Screen reader announcements
  
    
    announcement.setAttribute('aria-live',polite');
    announcement.setAttribute('aria-atomic',true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement)}, 1000)}, [settings.screenReader]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    
      
      switch (event.key) {

        case 'ArrowDown':'
        case 'ArrowRight':
          event.preventDefault();
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
        case 'ArrowUp':'
        case 'ArrowLeft':
          event.preventDefault();
          
          (focusableElements[prevIndex] as HTMLElement)?.focus();
          break;
=======
            currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;          (focusableElements[prevIndex] as HTMLElement)?.focus();
          break;'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
        case 'Home':
          event.preventDefault();
          (focusableElements[0] as HTMLElement)?.focus();
          break;
        case 'End':
          event.preventDefault();
          (
            focusableElements[focusableElements.length - 1] as HTMLElement
          )?.focus();
          break}
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, [settings.keyboardNavigation]);

  // Enhanced focus management
  useEffect ( () => {
    
      setCurrentFocus (target) ;

      if (settings.focusIndicator) {

        target.style.outline = '3px solid #3b82f6';
        target.style.outlineOffset = '2px'}
    };

    
      if (settings.focusIndicator) {

        target.style.outline = '';
        target.style.outlineOffset = '';
<<<<<<< HEAD
      }
    };

    document.addEventListener('focusin', handleFocusChange);
=======
      }    };
'
    document.addEventListener('focusin', handleFocusChange);'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    document.addEventListener('focusout', handleFocusOut);

    return () => {

      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusOut)}}, [settings.focusIndicator]) ;

  // Screen reader announcements
  
        announcement.setAttribute('aria-live',polite');
        announcement.setAttribute('aria-atomic',true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);

        setTimeout(() => {
          document.body.removeChild(announcement)}, 1000)}
    },
    [settings.screenReader]
  );

  // Toggle settings
  
      applySettings({ [key]: newValue });

      if (key === 'highContrast') {

        announceToScreenReader()
          newValue'
            ? 'High contrast mode enabled''
            : 'High contrast mode disabled'
        )} else if (key === 'largeText') {

        announceToScreenReader('
          newValue ? 'Large text mode enabled' : 'Large text mode disabled'
        )}
    },
    [settings, applySettings, announceToScreenReader]
  );

  // Zoom controls
  
      applySettings({ zoomLevel: newZoom });`
      announceToScreenReader(`Zoom level ${newZoom}%`)},
    [settings.zoomLevel, applySettings, announceToScreenReader]
  );

  return()
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}"
        className="fixed top-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Toggle accessibility options"
        title="Accessibility Options"
      >"
        <Accessibility className="w-5 h-5"  />      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (<motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}"
            className="fixed top-4 right-20 z-50 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Header */}"
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
              <div className="flex items-center space-x-2">"
                <Accessibility className="w-5 h-5"  />"                <h3 className="font-semibold">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}"
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close accessibility panel"
              >"
                <EyeOff className="w-4 h-4"  />              </button>
            </div>

            {/* Content */}"
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Visual Enhancements */}"
              <div className="space-y-3">"
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Visual Enhancements
                </h4>
"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center space-x-2">"
                    <Contrast className="w-4 h-4 text-slate-600 dark:text-slate-400"  />"
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      High Contrast
                    </span>                  </div>
                  <button'
                    onClick={() => toggleSetting('highContrast')}`
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.highContrast ? 'bg-blue-600' : 'bg-slate-300'`
                    }`}'`
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                  >
                    <span`
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.highContrast'
                          ? 'translate-x-6''
                          : 'translate-x-1'`
                      }`}
                    />
                  </button>
                </div>
"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center space-x-2">"
                    <Type className="w-4 h-4 text-slate-600 dark:text-slate-400"  />"
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Large Text
                    </span>                  </div>
                  <button'
                    onClick={() => toggleSetting('largeText')}`
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.largeText ? 'bg-blue-600' : 'bg-slate-300'`
                    }`}'`
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text mode`}
                  >
                    <span`
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.largeText ? 'translate-x-6' : 'translate-x-1'`
                      }`}
                    />
                  </button>
                </div>
"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center space-x-2">"
                    <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400"  />"
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Focus Indicator
                    </span>                  </div>
                  <button'
                    onClick={() => toggleSetting('focusIndicator')}`
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.focusIndicator ? 'bg-blue-600' : 'bg-slate-300'`
                    }`}'`
                    aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                  >
                    <span`
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.focusIndicator'
                          ? 'translate-x-6''
                          : 'translate-x-1'`
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Navigation Options */}"
              <div className="space-y-3">"
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Navigation
                </h4>
"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center space-x-2">"
                    <Keyboard className="w-4 h-4 text-slate-600 dark:text-slate-400"  />"
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Keyboard Navigation
                    </span>                  </div>
                  <button'
                    onClick={() => toggleSetting('keyboardNavigation')}`
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.keyboardNavigation'
                        ? 'bg-blue-600''
                        : 'bg-slate-300'`
                    }`}'`
                    aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} keyboard navigation`}
                  >
                    <span`
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.keyboardNavigation'
                          ? 'translate-x-6''
                          : 'translate-x-1'`
                      }`}
                    />
                  </button>
                </div>
"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center space-x-2">"
                    <MousePointer className="w-4 h-4 text-slate-600 dark:text-slate-400"  />"
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Reduced Motion
                    </span>                  </div>
                  <button'
                    onClick={() => toggleSetting('reducedMotion')}`
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.reducedMotion ? 'bg-blue-600' : 'bg-slate-300'`
                    }`}'`
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <span`
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.reducedMotion'
                          ? 'translate-x-6''
                          : 'translate-x-1'`
                      }`}
                    />
                  </button>
                </div>
                <button
                  onClick={() => applySettings({ ...settings, zoomLevel: 100 })}
                  className="flex items-center space-x-2 text-zion-purple/60 hover:text-zion-purple text-xs transition-colors"
                >
                  <RotateCcw className="w-3 h-3"  />
                  <span>Reset to 100%</span>
                </button>
              </div>

              {/* Zoom Controls */}"
              <div className="space-y-3">"
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Zoom Controls
                </h4>
"
                <div className="flex items-center justify-between">"
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {settings.zoomLevel}%
                  </span>"
                  <div className="flex items-center space-x-2">
                    <button'
                      onClick={() => adjustZoom('out')}"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      aria-label="Zoom out"
                    >"
                      <ZoomOut className="w-4 h-4"  />                    </button>
                    <button'
                      onClick={() => adjustZoom('in')}"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      aria-label="Zoom in"
                    >"
                      <ZoomIn className="w-4 h-4"  />                    </button>
                  </div>
                </div>
                
                {accessibilityIssues.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-zion-purple/80 text-xs font-medium">Issues Found:</h5>
                    <div className="space-y-1">
                      {accessibilityIssues.slice(0, 3).map((issue, index) => (
                        <div key={index} className="text-white/80 text-xs bg-zion-slate/30 p-2 rounded-lg flex items-start space-x-2">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0"  />
                          <span>{issue}</span>
                        </div>
                      ))}
                      {accessibilityIssues.length > 3 && (
                        <div className="text-white/60 text-xs text-center">
                          +{accessibilityIssues.length - 3} more issues
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={runAccessibilityAudit}
                  className="w-full bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple text-sm py-2 rounded-lg transition-colors"
                >
                  Run Accessibility Audit
                </button>
              </div>

              {/* Screen Reader Support */}"
              <div className="space-y-3">"
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Screen Reader
                </h4>
"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center space-x-2">"
                    <Volume2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />"
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Enhanced Support
                    </span>
                  </div>
                  <button'
                    onClick={() => toggleSetting('screenReader')}`
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.screenReader ? 'bg-blue-600' : 'bg-slate-300'`
                    }`}'`
                    aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} enhanced screen reader support`}
                  >
                    <span`
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.screenReader'
                          ? 'translate-x-6''
                          : 'translate-x-1'`
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

              {/* Current Focus Indicator */}
              {currentFocus && settings.focusIndicator && ("
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">"
                  <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
                    Current Focus
                  </h4>"
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    {currentFocus.tagName.toLowerCase()}:{' '}
                    {currentFocus.textContent?.substring(0, 50) ||'
                      'No text content'}
                  </p>
                </div>) }
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Styles */}`
      <style jsx>{`
        .sr-only {

          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0}

        .high-contrast {

          filter: contrast(1.5) brightness(1.2)}

        .large-text {

          font-size: 1.2em}
        .reduced-motion * {

          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important}`      `}</style>
    </>
  )};

export default EnhancedAccessibilityEnhancer;
'"`
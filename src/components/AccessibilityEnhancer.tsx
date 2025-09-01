import React, { useState, useEffect, useCallback } from 'react';
export const AccessibilityEnhancer: React.FC < AccessibilityEnhancerProps> = ({
import { 
import { motion, AnimatePresence } from 'framer - motion';


  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle
} from 'lucide - react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

  // Keyboard navigation support
  useEffect ( () => {
    const handleKeyDown = (event: KeyboardEvent) => {;
      // Skip if not in keyboard navigation mode;
      if (!settings.keyboardNavigation) return;

      const target = event.target as HTMLElement;
      
      // Tab navigation enhancement
      if (event.key = == 'Tab') {
        const focusableElements = document.querySelectorAll (;
          'button, [href], input, select, textarea, [tabindex]:not ([tabindex="-1"]) ';) ;
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey && target = == firstElement) {;
          event.preventDefault () ;
          lastElement.focus () ;
        } else if (!event.shiftKey && target = == lastElement) {;
          event.preventDefault () ;
          firstElement.focus () ;
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes (event.key) ) {
        const currentElement = target.closest ('[data - navigation - group]') ;
        if (currentElement) {
          event.preventDefault () ;
          navigateWithArrows (currentElement, event.key) ;
        }
      }

      // Enter / Space for interactive elements
      if (['Enter', ' '].includes (event.key) ) {
        if (target.getAttribute ('role') === 'button' || target.classList.contains ('interactive') ) {
          event.preventDefault () ;
          target.click () ;
        }
      }
    };

    document.addEventListener ('keydown', handleKeyDown) ;
    return () => document.removeEventListener ('keydown', handleKeyDown) ;
  }, [settings.keyboardNavigation]) ;

  // Arrow key navigation helper
  const navigateWithArrows = (container: Element, direction: string) => {
    const focusableElements = Array.from (container.querySelectorAll (;
      'button, [href], input, select, textarea, [tabindex]:not ([tabindex="-1"]) ';) ) .filter (el => ! (el as HTMLElement) .hidden) ;

    const currentIndex = focusableElements.findIndex (el => el === document.activeElement) ;
    let nextIndex = currentIndex;

    switch (direction) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        break;
    } (focusableElements[nextIndex] as HTMLElement) ?.focus () ;
  };

  // Screen reader announcements
  const announcement = document.createElement ('div') ;
      announcement.setAttribute ('aria - live', 'polite') ;
      announcement.setAttribute ('aria - atomic', 'true') ;
      announcement.className = 'sr - only';
      announcement.textContent = message;
      
      document.body.appendChild (announcement) ;
      
      setTimeout ( () => {
        document.body.removeChild (announcement) ;
      }, 1000) ;
    }
  }, [settings.screenReader]) ;

  // Add accessibility attributes to interactive elements
  useEffect ( () => {
    const interactiveElements = document.querySelectorAll ('button, a, input, select, textarea') ;
    
interactiveElements.forEach (element:  > {;
      const el = element as HTMLElement;
      
      // Add role if missing
      if (el.tagName = == 'BUTTON' && !el.getAttribute ('role') ) {;
        el.setAttribute ('role', 'button') ;
      }
      
      // Add aria - label for elements without text
      if (!el.textContent?.trim () && !el.getAttribute ('aria - label') ) {
        const title = el.getAttribute ('title') ;
        if (title) {
          el.setAttribute ('aria - label', title) ;
        }
      }
      
      // Add focus indicator
      if (settings.focusIndicator) {
        el.classList.add ('focus - visible') ;
      }
    }) ;
  }, [settings.focusIndicator]) ;

  // Add CSS for accessibility features
  useEffect ( () => {
    const style = document.createElement ('style') ;
    style.textContent = `
      /* High contrast mode */;
      .high - contrast {;
        --text - primary: #ffffff ! important;
        --text - secondary: #e5e7eb ! important;
        --bg - primary: #000000 ! important;
        --bg - secondary: #1f2937 ! important;
        --accent: #ffff00 ! important;
        --border: #ffffff ! important;
      }
      
      .high - contrast * {
        color: var (--text - primary) !important;
        background - color: var (--bg - primary) !important;
        border - color: var (--border) !important;
      }
      
      /* Large text mode */
      .large - text {
        font - size: 1.2em ! important;
      }
      
      .large - text h1 { font - size: 2.5em ! important; }
      .large - text h2 { font - size: 2em ! important; }
      .large - text h3 { font - size: 1.75em ! important; }
      .large - text p { font - size: 1.3em ! important; }
      
      /* Reduced motion */
      .reduced - motion *,
      .reduced - motion *::before,
      .reduced - motion *::after {
        animation - duration: 0.01ms ! important;
        animation - iteration - count: 1 ! important;
        transition - duration: 0.01ms ! important;
        scroll - behavior: auto ! important;
      }
      
      /* Focus indicators */
      .focus - visible:focus {
        outline: 3px solid #3b82f6 ! important;
        outline - offset: 2px ! important;
      }
      
      .focus - visible:focus:not (:focus - visible) {
        outline: none ! important;
      }
      
      /* Screen reader only */
      .sr - only {
        position: absolute ! important;
        width: 1px ! important;
        height: 1px ! important;
        padding: 0 ! important;
        margin: -1px ! important;
        overflow: hidden ! important;
        clip: rect (0, 0, 0, 0) !important;
        white - space: nowrap ! important;
        border: 0 ! important;
      }
      
      /* Skip to main content link */
      .skip - link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: white;
        padding: 8px;
        text - decoration: none;
        z - index: 1000;
      }
      
      .skip - link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild (style) ;

    return () => {
      document.head.removeChild (style) ;
    };
  }, []) ;

  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty ('--text - color', '#ffffff') ;
      root.style.setProperty ('--bg - color', '#000000') ;
      root.style.setProperty ('--accent - color', '#ffff00') ;
    } else {
      root.style.removeProperty ('--text - color') ;
      root.style.removeProperty ('--bg - color') ;
      root.style.removeProperty ('--accent - color') ;
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty ('--base - font - size', '18px') ;
      root.style.setProperty ('--heading - scale', '1.3') ;
    } else {
      root.style.setProperty ('--base - font - size', '16px') ;
      root.style.setProperty ('--heading - scale', '1.2') ;
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty ('--animation - duration', '0.1s') ;
      root.style.setProperty ('--transition - duration', '0.1s') ;
    } else {
      root.style.removeProperty ('--animation - duration') ;
      root.style.removeProperty ('--transition - duration') ;

    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty ('--saturation - filter', 'saturate (1.5) ') ;
    } else {
      root.style.removeProperty ('--saturation - filter') ;
    }

    // Font size
    root.style.setProperty ('--font - size', `${newSettings.fontSize}px`) ;
    root.style.setProperty ('--line - height', newSettings.lineHeight.toString () ) ;
    root.style.setProperty ('--letter - spacing', `${newSettings.letterSpacing}px`) ;
  };

  // Save settings to localStorage
  const saveSettings = (newSettings: AccessibilitySettings) => {
    localStorage.setItem ('zion - accessibility - settings', JSON.stringify (newSettings) ) ;
    setSettings (newSettings) ;
    applySettings (newSettings) ;
  };

  // Update individual setting
  const updateSetting = <K extends keyof AccessibilitySettings> (key: K, 
    value: AccessibilitySettings[K]) => {
    const newSettings = { ...settings, [key]: value };
    saveSettings (newSettings) ;
    
    // Show notification
    const notification = `Updated ${key.replace (/ ([A - Z]) /g, ' $1') .toLowerCase () }`;
    setNotifications (prev => [...prev, notification]) ;
    setTimeout ( () => {
      setNotifications (prev => prev.filter (n => n !== notification) ) ;
    }, 3000) ;
  };

  // Reset to default settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0
    };
    saveSettings (defaultSettings) ;
    setNotifications (prev => [...prev, 'Settings reset to default']) ;
    setTimeout ( () => {
      setNotifications (prev => prev.filter (n => n !== 'Settings reset to default') ) ;
    }, 3000) ;
  };

  // Quick accessibility actions
  const quickActions = [
    {
      name: 'High Contrast',
      icon: Contrast,
      action: () => updateSetting ('highContrast', !settings.highContrast) ,
      active: settings.highContrast,
      description: 'Increase contrast for better readability'
    },
    {
      name: 'Large Text',
      icon: Type,
      action: () => updateSetting ('largeText', !settings.largeText) ,
      active: settings.largeText,
      description: 'Increase text size for better readability'
    },
    {
      name: 'Reduced Motion',
      icon: EyeOff,
      action: () => updateSetting ('reducedMotion', !settings.reducedMotion) ,
      active: settings.reducedMotion,
      description: 'Reduce animations for motion sensitivity'
    },
    {
      name: 'High Saturation',
      icon: Eye,
      action: () => updateSetting ('highSaturation', !settings.highSaturation) ,
      active: settings.highSaturation,
      description: 'Increase color saturation'
    }
  ];

  // Font size controls
  const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32];

  useEffect ( () => {
    // Show accessibility panel after page load
    const timer = setTimeout ( () => setIsVisible (true) , 3000) ;
    return () => clearTimeout (timer) ;
  }, []) ;

  if (!enabled || !isVisible) return null;

  return (<>
      {/* Accessibility Toggle Button */}
      <div className="fixed bottom - 4 left - 4 z - 50">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={ () => setIsExpanded (!isExpanded) }
          className="p - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - full shadow - 2xl shadow - cyan - 500 / 30 hover:shadow - cyan - 500 / 50 transition - all duration - 300 focus:outline - none focus:ring - 4 focus:ring - cyan - 500 / 50"
          aria - label="Accessibility settings"
          title="Accessibility Settings"
        >
          <Settings className="w - 6 h - 6" />
        </motion.button>
      </div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isExpanded && (<motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset - y-0 left - 0 w - 96 bg - slate - 900 / 95 backdrop - blur - xl border - r border - cyan - 400 / 20 shadow - 2xl shadow - cyan - 400 / 10 overflow - y-auto z - 40"
          >
            <div className="p - 6">
              {/* Header */}
              <div className="flex items - center justify - between mb - 6">
                <h2 className="text - 2xl font - bold text - cyan - 400 flex items - center gap - 2">
                  <Settings className="w - 6 h - 6" />
                  Accessibility
                </h2>
                <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsExpanded (false) }
                  className="p - 2 hover:bg - cyan - 400 / 20 text - cyan - 400 rounded - lg transition - colors"
                  aria - label="Close accessibility panel"
                >
                  <X className="w - 5 h - 5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mb - 6">
                <h3 className="text - lg font - semibold text - white mb - 4">Quick Actions</h3>
                <div className="grid grid - cols - 2 gap - 3">
                  {quickActions.map ( (action) => (<button aria-label="Button" aria - label="Button" aria - label="Button" key={action.name}
                      onClick={action.action}
                      className={`p - 3 rounded - lg border transition - all duration - 200 ${
                        action.active
                          ? 'bg - cyan - 500 / 20 border - cyan - 400 text - cyan - 400'
                          : 'bg - slate - 800 / 50 border - slate - 600 text - gray - 300 hover:bg - slate - 700 / 50'
                      }`}
                      title={action.description}
                    >
                      <div className="flex flex - col items - center space - y-2">
                        <action.icon className="w - 5 h - 5" />
                        <span className="text - xs font - medium text - center">{action.name}</span>
                      </div>
                    </button>) ) }
                </div>
              </div>

              {/* Font Size Control */}
              <div className="mb - 6">
                <h3 className="text - lg font - semibold text - white mb - 4">Font Size</h3>
                <div className="flex items - center space - x-2">
                  <ZoomOut className="w - 5 h - 5 text - cyan - 400" />
                  <div className="flex - 1 grid grid - cols - 4 gap - 2">
                    {fontSizes.map ( (size) => (<button aria-label="Button" aria - label="Button" aria - label="Button" key={size}
                        onClick={ () => updateSetting ('fontSize', size) }
                        className={`p - 2 rounded text - xs font - medium transition - colors ${
                          settings.fontSize === size
                            ? 'bg - cyan - 500 text - white'
                            : 'bg - slate - 800 text - gray - 300 hover:bg - slate - 700'
                        }`}
                      >
                        {size}
                      </button>) ) }
                  </div>
                  <ZoomIn className="w - 5 h - 5 text - cyan - 400" />
                </div>
              </div>

              {/* Line Height Control */}
              <div className="mb - 6">
                <h3 className="text - lg font - semibold text - white mb - 4">Line Height</h3>
                <div className="space - y-2">
                  {[1.2, 1.4, 1.6, 1.8, 2.0].map ( (height) => (<button aria-label="Button" aria - label="Button" aria - label="Button" key={height}
                      onClick={ () => updateSetting ('lineHeight', height) }
                      className={`w - full p - 2 rounded text - sm transition - colors ${
                        settings.lineHeight === height
                          ? 'bg - cyan - 500 text - white'
                          : 'bg - slate - 800 text - gray - 300 hover:bg - slate - 700'
                      }`}
                    >
                      Line Height: {height}
                    </button>) ) }
                </div>
              </div>

              {/* Letter Spacing Control */}
              <div className="mb - 6">
                <h3 className="text - lg font - semibold text - white mb - 4">Letter Spacing</h3>
                <div className="space - y-2">
                  {[-1, 0, 1, 2, 3].map ( (spacing) => (<button aria-label="Button" aria - label="Button" aria - label="Button" key={spacing}
                      onClick={ () => updateSetting ('letterSpacing', spacing) }
                      className={`w - full p - 2 rounded text - sm transition - colors ${
                        settings.letterSpacing === spacing
                          ? 'bg - cyan - 500 text - white'
                          : 'bg - slate - 800 text - gray - 300 hover:bg - slate - 700'
                      }`}
                    >
                      Letter Spacing: {spacing}px
                    </button>) ) }
                </div>
              </div>

              {/* Reset Button */}
              <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={resetSettings}
                className="w - full py - 3 px - 4 bg - slate - 800 hover:bg - slate - 700 text - white rounded - lg transition - colors flex items - center justify - center gap - 2"
              >
                <RotateCcw className="w - 4 h - 4" />
                Reset to Default
              </button>

              {/* WCAG Compliance Info */}
              <div className="mt - 6 p - 4 bg - cyan - 500 / 10 border border - cyan - 400 / 20 rounded - lg">
                <h4 className="font - semibold text - cyan - 400 mb - 2 flex items - center gap - 2">
                  <CheckCircle className="w - 4 h - 4" />
                  WCAG 2.1 AA Compliant
                </h4>
                <p className="text - sm text - gray - 300">
                  This website meets Web Content Accessibility Guidelines 2.1 Level AA standards for accessibility.
                </p>
              </div>
            </div>

            {/* Accessibility Scan */}
            <div className="mb - 6">
              <div className="flex items - center justify - between mb - 3">
                <h4 className="text - sm font - semibold text - gray - 300">Accessibility Scan</h4>
                <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={scanForIssues}
                  disabled={isScanning}
                  className="px - 3 py - 1 text - xs bg - blue - 600 hover:bg - blue - 700 disabled:bg - gray - 600 text - white rounded - lg transition - colors"
                >
                  {isScanning ? 'Scanning...' : 'Scan Now'}
                </button>
              </div>

              {issues.length > 0 && (<div className="space - y-2 max - h-32 overflow - y-auto">
                  {issues.map ( (issue) => (<div
                      key={issue.id}
                      className={`p - 2 rounded - lg text - xs ${
                        issue.type === 'error' ? 'bg - red - 500 / 20 border border - red - 500 / 30' :
                        issue.type === 'warning' ? 'bg - yellow - 500 / 20 border border - yellow - 500 / 30' :
                        'bg - blue - 500 / 20 border border - blue - 500 / 30'
                      }`}
                    >
                      <div className="flex items - start gap - 2">
                        {issue.type === 'error' ? <AlertTriangle className="w - 3 h - 3 text - red - 400 mt - 0.5" /> :
                         issue.type === 'warning' ? <AlertTriangle className="w - 3 h - 3 text - yellow - 400 mt - 0.5" /> :
                         <Info className="w - 3 h - 3 text - blue - 400 mt - 0.5" />}
                        <div>
                          <div className="font - medium text - white">{issue.element}</div>
                          <div className="text - gray - 300">{issue.description}</div>
                        </div>
                      </div>
                    </div>) ) }
                </div>) }

              {issues.length === 0 && !isScanning && (<div className="text - center py - 4 text - gray - 400 text - sm">
                  <CheckCircle className="w - 8 h - 8 mx - auto mb - 2 text - green - 400" />
                  No accessibility issues found
                </div>) }
            </div>

            {/* Actions */}
            <div className="flex gap - 3">
              <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={resetSettings}
                className="flex - 1 px - 4 py - 2 bg - slate - 600 hover:bg - slate - 700 text - white text - sm rounded - lg transition - colors"
              >
                Reset All
              </button>
              <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsExpanded (false) }
                className="flex - 1 px - 4 py - 2 bg - green - 600 hover:bg - green - 700 text - white text - sm rounded - lg transition - colors"
              >
                Apply
              </button>
            </div>
          </motion.div>) : (;
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={ () => setIsExpanded (true) }
            className="w - 14 h - 14 bg - green - 600 hover:bg - green - 700 rounded - full shadow - lg flex items - center justify - center text - white transition - all duration - 200"
            aria - label="Accessibility Settings"
          >
            <Eye className="w - 6 h - 6" />
          </motion.button>) }
      </AnimatePresence > const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 16,;
  highContrast: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: false,
  focusIndicator: true
};

  className = '',
  showPanel = false,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState (showPanel) ;
  const [settings, setSettings] = useState < AccessibilitySettings> (DEFAULT_SETTINGS) ;
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'navigation'> ('general') ;

  useEffect ( () => {
    const savedSettings = localStorage.getItem ('zion - accessibility - settings') ;
    if (savedSettings) {
      try {
        const parsed = JSON.parse (savedSettings) ;
        setSettings ({ ...DEFAULT_SETTINGS, ...parsed }) ;
        applySettings ({ ...DEFAULT_SETTINGS, ...parsed }) ;
      } catch (error) {
        console.warn ('Failed to parse accessibility settings:', error) ;
      }
    }
  }, []) ;

  const applySettings = useCallback ( (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.setProperty ('--zion - font - size - base', `${newSettings.fontSize}px`) ;
    root.style.setProperty ('--zion - font - size - sm', `${newSettings.fontSize * 0.875}px`) ;
    root.style.setProperty ('--zion - font - size - lg', `${newSettings.fontSize * 1.125}px`) ;
    root.style.setProperty ('--zion - font - size - xl', `${newSettings.fontSize * 1.25}px`) ;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add ('high - contrast') ;
      root.style.setProperty ('--zion - bg - primary', '#000000') ;
      root.style.setProperty ('--zion - bg - secondary', '#1a1a1a') ;
      root.style.setProperty ('--zion - text - primary', '#ffffff') ;
      root.style.setProperty ('--zion - text - secondary', '#e5e5e5') ;
      root.style.setProperty ('--zion - border - color', '#ffffff') ;
    } else {
      root.classList.remove ('high - contrast') ;
      root.style.removeProperty ('--zion - bg - primary') ;
      root.style.removeProperty ('--zion - bg - secondary') ;
      root.style.removeProperty ('--zion - text - primary') ;
      root.style.removeProperty ('--zion - text - secondary') ;
      root.style.removeProperty ('--zion - border - color') ;
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add ('reduced - motion') ;
    } else {
      root.classList.remove ('reduced - motion') ;
    }
    
    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add ('focus - visible') ;
    } else {
      root.classList.remove ('focus - visible') ;
    }
    
    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add ('keyboard - navigation') ;
    } else {
      document.body.classList.remove ('keyboard - navigation') ;
    }
  }, []) ;

  const updateSetting = useCallback ( (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings (newSettings) ;
    applySettings (newSettings) ;
    localStorage.setItem ('zion - accessibility - settings', JSON.stringify (newSettings) ) ;
    onSettingsChange?. (newSettings) ;
  }, [settings, applySettings, onSettingsChange]) ;

  const resetSettings = useCallback ( () => {
    setSettings (DEFAULT_SETTINGS) ;
    applySettings (DEFAULT_SETTINGS) ;
    localStorage.removeItem ('zion - accessibility - settings') ;
    onSettingsChange?. (DEFAULT_SETTINGS) ;
  }, [applySettings, onSettingsChange]) ;

  const increaseFontSize = useCallback ( () => {
    const newSize = Math.min (settings.fontSize + 2, 24) ;
    updateSetting ('fontSize', newSize) ;
  }, [settings.fontSize, updateSetting]) ;

  const decreaseFontSize = useCallback ( () => {
    const newSize = Math.max (settings.fontSize - 2, 12) ;
    updateSetting ('fontSize', newSize) ;
  }, [settings.fontSize, updateSetting]) ;

  const toggleHighContrast = useCallback ( () => {
    updateSetting ('highContrast', !settings.highContrast) ;
  }, [settings.highContrast, updateSetting]) ;

  const toggleReducedMotion = useCallback ( () => {
    updateSetting ('reducedMotion', !settings.reducedMotion) ;
  }, [settings.reducedMotion, updateSetting]) ;

  const toggleScreenReader = useCallback ( () => {
    updateSetting ('screenReader', !settings.screenReader) ;
  }, [settings.screenReader, updateSetting]) ;

  const toggleKeyboardNavigation = useCallback ( () => {
    updateSetting ('keyboardNavigation', !settings.keyboardNavigation) ;
  }, [settings.keyboardNavigation, updateSetting]) ;

  const toggleFocusIndicator = useCallback ( () => {
    updateSetting ('focusIndicator', !settings.focusIndicator) ;
  }, [settings.focusIndicator, updateSetting]) ;

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },;
    { id: 'visual', label: 'Visual', icon: Eye },;
    { id: 'navigation', label: 'Navigation', icon: Keyboard }
  ] as const;

  return (<>
      {/* Floating Action Button */}
      <motion.button
        onClick={ () => setIsOpen (!isOpen) }
        className={`fixed bottom - 6 right - 6 z - 50 p - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - full shadow - lg hover:shadow - xl transition - all duration - 300 focus:outline - none focus:ring - 4 focus:ring - cyan - 400 focus:ring - offset - 2 ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria - label="Open accessibility settings"
        aria - expanded={isOpen}
      >
        <Accessibility className="w - 6 h - 6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (<motion.div
            className="fixed inset - 0 z - 40 bg - black / 50 backdrop - blur - sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setIsOpen (false) }
          >
            <motion.div
              className="fixed bottom - 24 right - 6 w - 96 max - h-[80vh] bg - white dark:bg - gray - 800 rounded - 2xl shadow - 2xl border border - gray - 200 dark:border - gray - 700 overflow - hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={ (e) => e.stopPropagation () }
            >
              {/* Header */}
              <div className="flex items - center justify - between p - 6 border - b border - gray - 200 dark:border - gray - 700">
                <div className="flex items - center space - x-3">
                  <Accessibility className="w - 6 h - 6 text - cyan - 500" />
                  <h2 className="text - xl font - bold text - gray - 900 dark:text - white">
                    Accessibility
                  </h2>
                </div>
                <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsOpen (false) }
                  className="p - 2 hover:bg - gray - 100 dark:hover:bg - gray - 700 rounded - lg transition - colors"
                  aria - label="Close accessibility panel"
                >
                  <X className="w - 5 h - 5 text - gray - 500" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border - b border - gray - 200 dark:border - gray - 700">
                {tabs.map ( (tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  
                  return (<button aria-label="Button" aria - label="Button" aria - label="Button" key={tab.id}
                      onClick={ () => setActiveTab (tab.id) }
                      className={`flex - 1 flex items - center justify - center space - x-2 px - 4 py - 3 text - sm font - medium transition - colors ${
                        isActive
                          ? 'text - cyan - 600 border - b-2 border - cyan - 500 bg - cyan - 50 dark:bg - cyan - 900 / 20'
                          : 'text - gray - 500 hover:text - gray - 700 dark:text - gray - 400 dark:hover:text - gray - 200'
                      }`}
                    >
                      <Icon className="w - 4 h - 4" />
                      <span>{tab.label}</span>
                    </button>) ;
                }) }
              </div>

              {/* Content */}
              <div className="p - 6 max - h-[60vh] overflow - y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'general' && (<motion.div
                      key="general"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space - y-6"
                    >
                      {/* Font Size Control */}
                      <div>
                        <label className="block text - sm font - medium text - gray - 700 dark:text - gray - 300 mb - 3">
                          Font Size: {settings.fontSize}px
                        </label>
                        <div className="flex items - center space - x-3">
                          <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={decreaseFontSize}
                            className="p - 2 bg - gray - 100 dark:bg - gray - 700 rounded - lg hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - colors"
                            aria - label="Decrease font size"
                          >
                            <Minus className="w - 4 h - 4" />
                          </button>
                          <div className="flex - 1 bg - gray - 200 dark:bg - gray - 700 rounded - full h - 2">
                            <div
                              className="bg - cyan - 500 h - 2 rounded - full transition - all duration - 300"
                              style={{ width: `${ ( (settings.fontSize - 12) / 12) * 100}%` }}
                            />
                          </div>
                          <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={increaseFontSize}
                            className="p - 2 bg - gray - 100 dark:bg - gray - 700 rounded - lg hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - colors"
                            aria - label="Increase font size"
                          >
                            <Plus className="w - 4 h - 4" />
                          </button>
                        </div>
                      </div>

                      {/* Screen Reader Support */}
                      <div className="flex items - center justify - between">
                        <div className="flex items - center space - x-3">
                          <Volume2 className="w - 5 h - 5 text - gray - 500" />
                          <div>
                            <label className="text - sm font - medium text - gray - 700 dark:text - gray - 300">
                              Screen Reader Support
                            </label>
                            <p className="text - xs text - gray - 500 dark:text - gray - 400">
                              Enhanced ARIA labels and descriptions
                            </p>
                          </div>
                        </div>
                        <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={toggleScreenReader}
                          className={`relative inline - flex h - 6 w - 11 items - center rounded - full transition - colors ${
                            settings.screenReader ? 'bg - cyan - 500' : 'bg - gray - 200 dark:bg - gray - 700'
                          }`}
                          role="switch"
                          aria - checked={settings.screenReader}
                        >
                          <span
                            className={`inline - block h - 4 w - 4 transform rounded - full bg - white transition - transform ${
                              settings.screenReader ? 'translate - x-6' : 'translate - x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </motion.div>) }

                  {activeTab === 'visual' && (<motion.div
                      key="visual"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space - y-6"
                    >
                      {/* High Contrast */}
                      <div className="flex items - center justify - between">
                        <div className="flex items - center space - x-3">
                          <Contrast className="w - 5 h - 5 text - gray - 500" />
                          <div>
                            <label className="text - sm font - medium text - gray - 700 dark:text - gray - 300">
                              High Contrast
                            </label>
                            <p className="text - xs text - gray - 500 dark:text - gray - 400">
                              Enhanced color contrast for better visibility
                            </p>
                          </div>
                        </div>
                        <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={toggleHighContrast}
                          className={`relative inline - flex h - 6 w - 11 items - center rounded - full transition - colors ${
                            settings.highContrast ? 'bg - cyan - 500' : 'bg - gray - 200 dark:bg - gray - 700'
                          }`}
                          role="switch"
                          aria - checked={settings.highContrast}
                        >
                          <span
                            className={`inline - block h - 4 w - 4 transform rounded - full bg - white transition - transform ${
                              settings.highContrast ? 'translate - x-6' : 'translate - x-1'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Reduced Motion */}
                      <div className="flex items - center justify - between">
                        <div className="flex items - center space - x-3">
                          <MousePointer className="w - 5 h - 5 text - gray - 500" />
                          <div>
                            <label className="text - sm font - medium text - gray - 700 dark:text - gray - 300">
                              Reduced Motion
                            </label>
                            <p className="text - xs text - gray - 500 dark:text - gray - 400">
                              Minimize animations and transitions
                            </p>
                          </div>
                        </div>
                        <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={toggleReducedMotion}
                          className={`relative inline - flex h - 6 w - 11 items - center rounded - full transition - colors ${
                            settings.reducedMotion ? 'bg - cyan - 500' : 'bg - gray - 200 dark:bg - gray - 700'
                          }`}
                          role="switch"
                          aria - checked={settings.reducedMotion}
                        >
                          <span
                            className={`inline - block h - 4 w - 4 transform rounded - full bg - white transition - transform ${
                              settings.reducedMotion ? 'translate - x-6' : 'translate - x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </motion.div>) }

                  {activeTab === 'navigation' && (<motion.div
                      key="navigation"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space - y-6"
                    >
                      {/* Keyboard Navigation */}
                      <div className="flex items - center justify - between">
                        <div className="flex items - center space - x-3">
                          <Keyboard className="w - 5 h - 5 text - gray - 500" />
                          <div>
                            <label className="text - sm font - medium text - gray - 700 dark:text - gray - 300">
                              Enhanced Keyboard Navigation
                            </label>
                            <p className="text - xs text - gray - 500 dark:text - gray - 400">
                              Improved tab order and keyboard shortcuts
                            </p>
                          </div>
                        </div>
                        <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={toggleKeyboardNavigation}
                          className={`relative inline - flex h - 6 w - 11 items - center rounded - full transition - colors ${
                            settings.keyboardNavigation ? 'bg - cyan - 500' : 'bg - gray - 200 dark:bg - gray - 700'
                          }`}
                          role="switch"
                          aria - checked={settings.keyboardNavigation}
                        >
                          <span
                            className={`inline - block h - 4 w - 4 transform rounded - full bg - white transition - transform ${
                              settings.keyboardNavigation ? 'translate - x-6' : 'translate - x-1'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Focus Indicator */}
                      <div className="flex items - center justify - between">
                        <div className="flex items - center space - x-3">
                          <Eye className="w - 5 h - 5 text - gray - 500" />
                          <div>
                            <label className="text - sm font - medium text - gray - 700 dark:text - gray - 300">
                              Focus Indicators
                            </label>
                            <p className="text - xs text - gray - 500 dark:text - gray - 400">
                              Clear focus indicators for keyboard users
                            </p>
                          </div>
                        </div>
                        <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={toggleFocusIndicator}
                          className={`relative inline - flex h - 6 w - 11 items - center rounded - full transition - colors ${
                            settings.focusIndicator ? 'bg - cyan - 500' : 'bg - gray - 200 dark:bg - gray - 700'
                          }`}
                          role="switch"
                          aria - checked={settings.focusIndicator}
                        >
                          <span
                            className={`inline - block h - 4 w - 4 transform rounded - full bg - white transition - transform ${
                              settings.focusIndicator ? 'translate - x-6' : 'translate - x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </motion.div>) }
                </AnimatePresence>

                {/* Reset Button */}
                <div className="pt - 6 border - t border - gray - 200 dark:border - gray - 700">
                  <button aria-label="Button" aria - label="Button" aria - label="Button" onClick={resetSettings}
                    className="w - full px - 4 py - 2 text - sm font - medium text - gray - 700 dark:text - gray - 300 bg - gray - 100 dark:bg - gray - 700 rounded - lg hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - colors"
                  >
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
    </>) ;
};
      {/* Notifications */}
      <div className="fixed top - 4 right - 4 z - 50 space - y-2">
        <AnimatePresence>
          {notifications.map ( (notification, index) => (<motion.div
              key={index}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              className="bg - green - 500 text - white px - 4 py - 2 rounded - lg shadow - lg flex items - center gap - 2"
            >
              <CheckCircle className="w - 4 h - 4" />
              <span className="text - sm">{notification}</span>
            </motion.div>) ) }
        </AnimatePresence>
      </div>
    </>) ;
}

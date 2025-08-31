<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
=======
import React, { useState, useEffect, useCallback } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Eye, 
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
<<<<<<< HEAD
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
=======
  MousePointer,
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Tablet,
  Settings,
  X,
<<<<<<< HEAD
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume1
} from 'lucide-react';

=======
  Check,
  AlertTriangle
 } from 'lucide-react';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
<<<<<<< HEAD
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  recommendation: string;
  severity: 'low' | 'medium' | 'high';
}

export function EnhancedAccessibilityPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: boolean,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<string>('');
  const [keyboardMode, setKeyboardMode] = useState(false);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.style.fontSize = '18px';
    } else {
      document.documentElement.style.fontSize = '16px';
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.style.setProperty('--reduced-motion', 'reduce');
    } else {
      document.documentElement.style.removeProperty('--reduced-motion');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Apply color blindness simulation
    document.documentElement.style.setProperty('--color-blindness', updatedSettings.colorBlindness);

    // Apply typography settings
    document.documentElement.style.setProperty('--font-size', `${updatedSettings.fontSize}px`);
    document.documentElement.style.setProperty('--line-height', updatedSettings.lineHeight.toString());
    document.documentElement.style.setProperty('--letter-spacing', `${updatedSettings.letterSpacing}px`);
    document.documentElement.style.setProperty('--word-spacing', `${updatedSettings.wordSpacing}px`);

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const savedSettings = JSON.parse(saved);
        setSettings(savedSettings);
        applySettings(savedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Tab key navigation
      if (event.key === 'Tab') {
        setKeyboardMode(true);
        document.body.classList.add('keyboard-navigation');
      }

      // Escape key to close panel
      if (event.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }

      // Arrow keys for navigation
      if (keyboardMode) {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);

        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault();
            const nextIndex = (currentIndex + 1) % focusableElements.length;
            (focusableElements[nextIndex] as HTMLElement)?.focus();
            break;
          case 'ArrowUp':
            event.preventDefault();
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            (focusableElements[prevIndex] as HTMLElement)?.focus();
            break;
        }
      }
    };

    const handleMouseDown = () => {
      setKeyboardMode(false);
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isVisible, keyboardMode]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(async () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          newIssues.push({
            id: `alt-${index}`,
            type: 'error',
            message: 'Image missing alt text',
            element: img.tagName.toLowerCase(),
            recommendation: 'Add descriptive alt text or aria-label for screen readers',
            severity: 'high'
          });
        }
      });

      // Check for proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          newIssues.push({
            id: `heading-${index}`,
            type: 'warning',
            message: 'Heading level skipped',
            element: heading.tagName.toLowerCase(),
            recommendation: 'Maintain proper heading hierarchy (h1 → h2 → h3)',
            severity: 'medium'
          });
        }
        previousLevel = level;
      });

      // Check for proper form labels
      const formInputs = document.querySelectorAll('input, select, textarea');
      formInputs.forEach((input, index) => {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        
        if (!label && !ariaLabel && !input.getAttribute('aria-labelledby')) {
          newIssues.push({
            id: `label-${index}`,
            type: 'error',
            message: 'Form input missing label',
            element: input.tagName.toLowerCase(),
            recommendation: 'Add label element or aria-label attribute',
            severity: 'high'
          });
        }
      });

      // Check for proper ARIA attributes
      const ariaElements = document.querySelectorAll('[aria-*]');
      ariaElements.forEach((element, index) => {
        const ariaExpanded = element.getAttribute('aria-expanded');
        const ariaControls = element.getAttribute('aria-controls');
        const ariaOwns = element.getAttribute('aria-owns');
        
        if (ariaExpanded && !ariaControls && !ariaOwns) {
          newIssues.push({
            id: `aria-${index}`,
            type: 'warning',
            message: 'aria-expanded without corresponding aria-controls or aria-owns',
            element: element.tagName.toLowerCase(),
            recommendation: 'Add aria-controls or aria-owns to indicate controlled content',
            severity: 'medium'
          });
        }
      });

      // Check for sufficient color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // This is a simplified check - in production you'd want a proper contrast ratio calculation
        if (color === backgroundColor) {
          newIssues.push({
            id: `contrast-${index}`,
            type: 'warning',
            message: 'Potential contrast issue',
            element: element.tagName.toLowerCase(),
            recommendation: 'Ensure sufficient contrast between text and background colors',
            severity: 'medium'
          });
        }
      });

      // Check for keyboard navigation
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
      interactiveElements.forEach((element, index) => {
        if (element.tagName === 'BUTTON' && !element.getAttribute('type')) {
          newIssues.push({
            id: `button-${index}`,
            type: 'warning',
            message: 'Button missing type attribute',
            element: element.tagName.toLowerCase(),
            recommendation: 'Add type="button" to prevent form submission',
            severity: 'medium'
          });
        }
      });

    } catch (error) {
      console.error('Accessibility audit failed:', error);
    }

    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Get issue icon
  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'info': return <Info className="w-4 h-4 text-blue-500" />;
      default: return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'border-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default: return 'border-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

=======
  fontSize: 'small' | 'medium' | 'large' | 'extra-large'}
        // // // // // // // console.error('Failed to parse accessibility settings:', error);
      }
=======
        applySettings({ ...prev, ...parsed })} catch (error) {
        console.error('Failed to parse accessibility settings:', error)}
    }
  }, []);
  // Apply accessibility settings to the document
      root.style.removeProperty('--accent-color')}
    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '120%'} else {
      root.style.fontSize = '100%'}
    // Reduced motion;
    if (newSettings.reducedMotion) {;
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms')} else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration')}
    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      const filters = {
  protanopia: 'brightness(0.8) saturate(0.5) hue-rotate(180deg)',;
        deuteranopia: 'brightness(0.8) saturate(0.5) hue-rotate(90deg)',;
  ;
  ;
  tritanopia: 'brightness(0.8) saturate(0.5) hue-rotate(270deg)';
      ;
};
      root.style.filter = filters[newSettings.colorBlindness];
    } else {
      root.style.filter = 'none';
    }
    // Font size
    const fontSizes = {
  small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',;
  ;
  ;
  ;
  ;
  'extra-large': '1.25rem';
    ;
};
    root.style.setProperty('--base-font-size', fontSizes[newSettings.fontSize]);
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-outline', '2px solid #06b6d4')} else {
      root.style.setProperty('--focus-outline', 'none')}
    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.addEventListener('keydown', handleKeyboardNavigation)} else {
      document.removeEventListener('keydown', handleKeyboardNavigation)}
    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))}, []);
  // Handle keyboard navigation
          document.activeElement.click()}
        break}
  }, []);
  // Screen reader announcements
        announcement.parentNode.removeChild(announcement)}
    }, 1000);
    setAnnouncements(prev => [...prev, message]);
    setIsAnnouncing(true);
    setTimeout(() => setIsAnnouncing(false), 1000)}, [settings.screenReader]);
  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = {
  ...settings,;
  ;
  ;
  ;
  ;
  ;
  [key]: value ;
};
    setSettings(newSettings);
    applySettings(newSettings);
    // Announce changes to screen reader
    const settingNames = {
  highContrast: 'high contrast mode',
      largeText: 'large text',
      reducedMotion: 'reduced motion',
      screenReader: 'screen reader support',
      keyboardNavigation: 'keyboard navigation',
      focusIndicator: 'focus indicator',
      colorBlindness: 'color blindness simulation',;
  ;
  ;
  ;
  ;
  fontSize: 'font size';
    ;
};
    announceToScreenReader(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`)}, [settings, applySettings, announceToScreenReader]);
  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
  highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none',;
  ;
  ;
  ;
  ;
  fontSize: 'medium';
    ;
};
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to defaults')}, [applySettings, announceToScreenReader]);
  // Toggle panel
  const togglePanel = useCallback(() => {;
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened')}, [isOpen, announceToScreenReader]);
  // Handle escape key
  useEffect(() => {
        announceToScreenReader('Accessibility panel closed')}
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape)}, [isOpen, announceToScreenReader]);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <>
      {/* Floating Action Button */}
      <motion.button
<<<<<<< HEAD
        className="fixed bottom-6 left-6 z-50 bg-zion-blue hover:bg-zion-blue-dark text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Panel"
        aria-label="Open accessibility panel"
      >
        <Accessibility className="w-6 h-6" />
=======
        initial = {{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={togglePanel}
        className="fixed top-4 right-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-40 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        title="Accessibility Settings"
        aria-label="Open accessibility settings panel"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        <Settings className="w-5 h-5" />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      </motion.button>
      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-0 left-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
            role="dialog"
            aria-label="Accessibility settings and tools"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Accessibility className="w-6 h-6 text-zion-blue" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Accessibility
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => applySettings({ highContrast: !settings.highContrast })}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-colors ${
                      settings.highContrast 
                        ? 'border-zion-blue bg-zion-blue text-white' 
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                    aria-pressed={settings.highContrast}
                  >
                    <Contrast className="w-4 h-4" />
                    <span className="text-sm">High Contrast</span>
                  </button>
                  
                  <button
                    onClick={() => applySettings({ largeText: !settings.largeText })}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-colors ${
                      settings.largeText 
                        ? 'border-zion-blue bg-zion-blue text-white' 
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                    aria-pressed={settings.largeText}
                  >
                    <Type className="w-4 h-4" />
                    <span className="text-sm">Large Text</span>
                  </button>
                  
                  <button
                    onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-colors ${
                      settings.reducedMotion 
                        ? 'border-zion-blue bg-zion-blue text-white' 
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                    aria-pressed={settings.reducedMotion}
                  >
                    <Pause className="w-4 h-4" />
                    <span className="text-sm">Reduced Motion</span>
                  </button>
                  
                  <button
                    onClick={() => applySettings({ focusIndicator: !settings.focusIndicator })}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-colors ${
                      settings.focusIndicator 
                        ? 'border-zion-blue bg-zion-blue text-white' 
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                    aria-pressed={settings.focusIndicator}
                  >
                    <Keyboard className="w-4 h-4" />
                    <span className="text-sm">Focus Indicator</span>
                  </button>
                </div>
              </div>

              {/* Typography Controls */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Typography
                </h3>
                <div className="space-y-3">
=======
            initial = {
  { opacity: 0,
  x: 300 
}}
            animate = {
  { opacity: 1,
  x: 0 
}}
            exit = {
  { opacity: 0,
  x: 300 
}}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-700 shadow-2xl z-50 overflow-y-auto"
            id="accessibility-panel"
            role="dialog"
            aria-label="Accessibility Settings"
            aria-modal="true"
            {/* Header */}
            <div className="sticky top-0 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={togglePanel}
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                  aria-label="Close accessibility panel"
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Visual Settings */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Visual Settings
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-700 dark:text-slate-300">High Contrast</span>
                    <button
                      onClick = {
  () => updateSetting('highContrast',
  !settings.highContrast)
}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.highContrast ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                      role="switch"
                      aria-checked={settings.highContrast}
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-700 dark:text-slate-300">Large Text</span>
                    <button
                      onClick = {
  () => updateSetting('largeText',
  !settings.largeText)
}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.largeText ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                      role="switch"
                      aria-checked={settings.largeText}
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.largeText ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-700 dark:text-slate-300">Reduced Motion</span>
                    <button
                      onClick = {
  () => updateSetting('reducedMotion',
  !settings.reducedMotion)
}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                      role="switch"
                      aria-checked={settings.reducedMotion}
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Font Size: {settings.fontSize}px
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="24"
                      value={settings.fontSize}
<<<<<<< HEAD
                      onChange={(e) => applySettings({ fontSize: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
=======
                      onChange = {
  (e) => updateSetting('fontSize',
  e.target.value)
}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="extra-large">Extra Large</option>
                    </select>
                  </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Line Height: {settings.lineHeight}
                    </label>
<<<<<<< HEAD
                    <input
                      type="range"
                      min="1.2"
                      max="2.0"
                      step="0.1"
                      value={settings.lineHeight}
                      onChange={(e) => applySettings({ lineHeight: parseFloat(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Color Blindness Simulation */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Color Vision
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'none', label: 'Normal Vision' },
                    { value: 'protanopia', label: 'Protanopia (Red-Blind)' },
                    { value: 'deuteranopia', label: 'Deuteranopia (Green-Blind)' },
                    { value: 'tritanopia', label: 'Tritanopia (Blue-Blind)' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="colorBlindness"
                        value={option.value}
                        checked={settings.colorBlindness === option.value}
                        onChange={(e) => applySettings({ colorBlindness: e.target.value as any })}
                        className="text-zion-blue focus:ring-zion-blue"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Accessibility Audit */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Accessibility Audit
                  </h3>
                  <button
                    onClick={runAccessibilityAudit}
                    disabled={isScanning}
                    className="flex items-center space-x-2 px-3 py-1 bg-zion-blue hover:bg-zion-blue-dark text-white text-sm rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isScanning ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Scanning...</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        <span>Run Audit</span>
                      </>
                    )}
                  </button>
                </div>

                {issues.length > 0 && (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {issues.map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-3 rounded-lg border-l-4 ${getSeverityColor(issue.severity)}`}
                      >
                        <div className="flex items-start space-x-2">
                          {getIssueIcon(issue.type)}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {issue.message}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {issue.recommendation}
                            </p>
                            {issue.element && (
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                Element: {issue.element}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Keyboard Navigation Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Keyboard Navigation
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>• Use Tab to navigate between interactive elements</p>
                  <p>• Use Arrow keys to navigate within components</p>
                  <p>• Press Enter or Space to activate buttons</p>
                  <p>• Press Escape to close dialogs</p>
=======
                    <select
                      value={settings.colorBlindness}
                      onChange = {
  (e) => updateSetting('colorBlindness',
  e.target.value)
}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      <option value="none">None</option>
                      <option value="protanopia">Protanopia (Red-Blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Navigation Settings */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  Navigation Settings
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-700 dark:text-slate-300">Keyboard Navigation</span>
                    <button
                      onClick = {
  () => updateSetting('keyboardNavigation',
  !settings.keyboardNavigation)
}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.keyboardNavigation ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                      role="switch"
                      aria-checked={settings.keyboardNavigation}
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-700 dark:text-slate-300">Focus Indicator</span>
                    <button
                      onClick = {
  () => updateSetting('focusIndicator',
  !settings.focusIndicator)
}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                      role="switch"
                      aria-checked={settings.focusIndicator}
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                </div>
              </div>
              {/* Screen Reader Settings */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  Screen Reader Support
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-700 dark:text-slate-300">Screen Reader Mode</span>
                    <button
                      onClick = {
  () => updateSetting('screenReader',
  !settings.screenReader)
}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.screenReader ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                      role="switch"
                      aria-checked={settings.screenReader}
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </div>
              </div>
              {/* Reset Button */}
<<<<<<< HEAD
              <button
                onClick={() => {
                  const defaultSettings: AccessibilitySettings = {
                    highContrast: false,
                    largeText: false,
                    reducedMotion: false,
                    screenReader: false,
                    focusIndicator: true,
                    colorBlindness: 'none',
                    fontSize: 16,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    wordSpacing: 0
                  };
                  setSettings(defaultSettings);
                  applySettings(defaultSettings);
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Defaults</span>
              </button>
=======
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={resetToDefaults}
                  className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  Reset to Defaults
                </button>
              </div>
              {/* Keyboard Shortcuts Help */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Keyboard Shortcuts</h4>
                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <div>• <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">Tab</kbd> Navigate between elements</div>
                  <div>• <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">Arrow Keys</kbd> Navigate when enabled</div>
                  <div>• <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">Enter</kbd> or <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">Space</kbd> Activate elements</div>
                  <div>• <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">Escape</kbd> Close panels</div>
                </div>
              </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
    </>
  );
}
=======
      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        {announcements[announcements.length - 1]}
      </div>
      {/* Visual Announcement Indicator */}
      <AnimatePresence>
        {isAnnouncing && (
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            exit = {
  { opacity: 0,
  y: 20 
}}
            className="fixed bottom-20 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2"
            <Check className="w-4 h-4" />
            <span className="text-sm">Setting updated</span>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40";
          onClick={togglePanel};
        />;
      )};
    </>;
  );
};
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7

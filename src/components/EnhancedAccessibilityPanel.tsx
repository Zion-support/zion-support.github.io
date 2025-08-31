<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
=======
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
import { Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Type,
  Contrast,
=======
import React, { useState, useEffect, useCallback               } from 'react.ts';
import { motion, AnimatePresence                } from 'framer-motion.ts';
import { Eye, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
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
<<<<<<< HEAD
=======
               } from 'lucide-react.ts';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

interface AccessibilitySettings {
<<<<<<< HEAD
=======















>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
=======
<<<<<<< HEAD
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
=======
fontSize: 'small' | 'medium' | 'large' | 'extra-large';













}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
export const EnhancedAccessibilityPanel: React.FC = (): JSX.Element => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<any>({
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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

<<<<<<< HEAD
  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Tab key navigation
      if (event.key === 'Tab') {
        setKeyboardMode(true);
        document.body.classList.add('keyboard-navigation');
      }
=======
  // Apply accessibility settings to the document
<<<<<<< HEAD
  const applySettings = useCallback((newSettings: anyanyanyanyanyanyanyanyanyanyanyanyanyanyAccessibilitySettings)               => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    const root = document.documentElement;

    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00')} else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
<<<<<<< HEAD
      root.style.removeProperty('--accent-color');

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '120%';
    } else {
      root.style.fontSize = '100%';
=======
      root.style.removeProperty('--accent-color')}

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '120%'} else {
      root.style.fontSize = '100%'}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    // Reduced motion;
    if (newSettings.reducedMotion) {;
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms')} else {
      root.style.removeProperty('--animation-duration');
<<<<<<< HEAD
      root.style.removeProperty('--transition-duration');
=======
      root.style.removeProperty('--transition-duration')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      const filters = {
  <<<<<<< HEAD
        protanopia: 'brightness(0.8) saturate(0.5) hue-rotate(180deg)',
        deuteranopia: 'brightness(0.8) saturate(0.5) hue-rotate(90deg)',
  tritanopia: 'brightness(0.8) saturate(0.5) hue-rotate(270deg)';
      ;

};
      root.style.filter = filters[newSettings.colorBlindness]} else {
      root.style.filter = 'none'}
=======;
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
<<<<<<< HEAD
=======
    }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

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
<<<<<<< HEAD
      root.style.setProperty('--focus-outline', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--focus-outline', 'none');

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.addEventListener('keydown', handleKeyboardNavigation);
    } else {
      document.removeEventListener('keydown', handleKeyboardNavigation);
=======
      root.style.setProperty('--focus-outline', '2px solid #06b6d4')} else {
      root.style.setProperty('--focus-outline', 'none')}

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.addEventListener('keydown', handleKeyboardNavigation)} else {
      document.removeEventListener('keydown', handleKeyboardNavigation)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))}, []);

  // Handle keyboard navigation
<<<<<<< HEAD
  const handleKeyboardNavigation = useCallback((event: anyanyanyanyanyanyanyanyanyanyanyanyanyanyKeyboardEvent)               => {;
    const focusableElements = document.querySelectorAll(;
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    );

    const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);

    switch (event.key) {
      case 'Tab':
        // Let default tab behavior work
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        (focusableElements[nextIndex] as HTMLElement).focus();
        announceToScreenReader(`Focused on ${(focusableElements[nextIndex] as HTMLElement).textContent || 'element'}`);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
        (focusableElements[prevIndex] as HTMLElement).focus();
        announceToScreenReader(`Focused on ${(focusableElements[prevIndex] as HTMLElement).textContent || 'element'}`);
        break;
      case 'Enter':
      case ' ':
        if (document.activeElement instanceof HTMLElement) {
<<<<<<< HEAD
          document.activeElement.click();

        break;

=======
          document.activeElement.click()}
        break}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, []);

  // Screen reader announcements
<<<<<<< HEAD
  const announceToScreenReader = useCallback((message: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      if (announcement.parentNode) {
<<<<<<< HEAD
        announcement.parentNode.removeChild(announcement);

=======
        announcement.parentNode.removeChild(announcement)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }, 1000);

    setAnnouncements(prev => [...prev, message]);
    setIsAnnouncing(true);
    setTimeout(() => setIsAnnouncing(false), 1000)}, [settings.screenReader]);

  // Update settings
<<<<<<< HEAD
  const updateSetting = useCallback((key: anyanyanyanyanyanyanyanyanyanyanyanyanyanykeyof AccessibilitySettings, value)                => {
    const newSettings = {
  ...settings,;
  [key]: value ;

};
=======
  const updateSetting = useCallback((key: anyanyanyanyanyanyanyanyanyanyanyanyanyanykeyof AccessibilitySettings, value: )               => {
    const newSettings = {
  ...settings,;
  ;
  ;
  ;
  ;
  ;
  [key]: value ;






};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
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
<<<<<<< HEAD
      colorBlindness: 'color blindness simulation',
      fontSize: 'font size'
    };

    announceToScreenReader(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`);
  }, [settings, applySettings, announceToScreenReader]);
=======
      colorBlindness: 'color blindness simulation',;
  ;
  ;
  ;
  ;
  fontSize: 'font size';
    ;






};
    
    announceToScreenReader(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`)}, [settings, applySettings, announceToScreenReader]);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
  highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
<<<<<<< HEAD
      colorBlindness: 'none',
      fontSize: 'medium'
    };

=======
      colorBlindness: 'none',;
  ;
  ;
  ;
  ;
  fontSize: 'medium';
    ;






};
    
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to defaults')}, [applySettings, announceToScreenReader]);

  // Toggle panel
  const togglePanel = useCallback(() => {;
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened')}, [isOpen, announceToScreenReader]);

  // Handle escape key
  useEffect(() => {
<<<<<<< HEAD
    const handleEscape = (event: anyanyanyanyanyanyanyanyanyanyanyanyanyanyKeyboardEvent)               => {;
      if (event.key === 'Escape' && isOpen) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        setIsOpen(false);
<<<<<<< HEAD
        announceToScreenReader('Accessibility panel closed');
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

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

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 bg-zion-blue hover:bg-zion-blue-dark text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Panel"
        aria-label="Open accessibility panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Font Size: {settings.fontSize}px
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="24"
                      value={settings.fontSize}
                      onChange={(e) => applySettings({ fontSize: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Line Height: {settings.lineHeight}
                    </label>
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
                </div>
              </div>

              {/* Reset Button */}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

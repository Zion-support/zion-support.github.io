import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Sun,
  Moon,
  Monitor,
  Accessibility,
  Braille,
  Headphones
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindMode: boolean;
  dyslexiaFriendly: boolean;
  zoomLevel: number;
  theme: 'light' | 'dark' | 'auto';
}

interface AccessibilityFeatures {
  skipLinks: boolean;
  landmarks: boolean;
  altText: boolean;
  ariaLabels: boolean;
  semanticHTML: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: false,
  focusIndicator: true,
  colorBlindMode: false,
  dyslexiaFriendly: false,
  zoomLevel: 100,
  theme: 'auto'
};

const DEFAULT_FEATURES: AccessibilityFeatures = {
  skipLinks: true,
  landmarks: true,
  altText: true,
  ariaLabels: true,
  semanticHTML: true
};

export const AccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [features, setFeatures] = useState<AccessibilityFeatures>(DEFAULT_FEATURES);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [issues, setIssues] = useState<string[]>([]);
  
  const settingsRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--contrast-ratio', '1.5');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
    } else {
      root.style.removeProperty('--contrast-ratio');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--line-height', '1.6');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--line-height', '1.5');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #0066cc');
      root.style.setProperty('--focus-outline-offset', '2px');
    } else {
      root.style.removeProperty('--focus-outline');
      root.style.removeProperty('--focus-outline-offset');
    }

    // Color blind mode
    if (settings.colorBlindMode) {
      root.style.setProperty('--color-blind-filter', 'grayscale(100%)');
    } else {
      root.style.removeProperty('--color-blind-filter');
    }

    // Dyslexia friendly
    if (settings.dyslexiaFriendly) {
      root.style.setProperty('--font-family', 'OpenDyslexic, Arial, sans-serif');
      root.style.setProperty('--letter-spacing', '0.1em');
      root.style.setProperty('--word-spacing', '0.2em');
    } else {
      root.style.removeProperty('--font-family');
      root.style.removeProperty('--letter-spacing');
      root.style.removeProperty('--word-spacing');
    }

    // Zoom level
    root.style.setProperty('--zoom-level', `${settings.zoomLevel}%`);
    root.style.transform = `scale(${settings.zoomLevel / 100})`;
    root.style.transformOrigin = 'top left';

    // Theme
    if (settings.theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (settings.theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      // Auto theme based on system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
  }, [settings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = Array.from(
        document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ) as HTMLElement[];

      focusableElementsRef.current = focusableElements;
      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (event.shiftKey) {
            if (currentIndex <= 0) {
              event.preventDefault();
              focusableElements[focusableElements.length - 1]?.focus();
            }
          } else {
            if (currentIndex >= focusableElements.length - 1) {
              event.preventDefault();
              focusableElements[0]?.focus();
            }
          }
          break;
        
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault();
          const direction = event.key === 'ArrowUp' ? -1 : 1;
          const nextIndex = (currentIndex + direction + focusableElements.length) % focusableElements.length;
          focusableElements[nextIndex]?.focus();
          break;
        
        case 'Escape':
          // Close modals, dropdowns, etc.
          const activeModals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
          if (activeModals.length > 0) {
            (activeModals[activeModals.length - 1] as HTMLElement).focus();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus tracking
  useEffect(() => {
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Enhanced focus indicator
      if (settings.focusIndicator) {
        target.style.outline = '3px solid #0066cc';
        target.style.outlineOffset = '2px';
        
        // Remove outline after focus
        setTimeout(() => {
          if (target !== document.activeElement) {
            target.style.outline = '';
            target.style.outlineOffset = '';
          }
        }, 2000);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [settings.focusIndicator]);

  // Screen reader announcements
  useEffect(() => {
    if (!settings.screenReader) return;

    const announce = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce page changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const newContent = Array.from(mutation.addedNodes)
            .filter(node => node.nodeType === Node.ELEMENT_NODE)
            .map(node => (node as Element).textContent)
            .join(' ');
          
          if (newContent.trim()) {
            announce(`New content loaded: ${newContent.substring(0, 100)}`);
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [settings.screenReader]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const newIssues: string[] = [];
    let score = 100;

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      newIssues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= 10;
    }

    // Check for form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    const inputsWithoutLabels = Array.from(formInputs).filter(input => {
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      return !label && !input.getAttribute('aria-label');
    });
    if (inputsWithoutLabels.length > 0) {
      newIssues.push(`${inputsWithoutLabels.length} form inputs missing labels`);
      score -= 10;
    }

    // Check for heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    let hasH1 = false;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level === 1) hasH1 = true;
      if (level > previousLevel + 1) {
        newIssues.push('Heading structure is not hierarchical');
        score -= 5;
      }
      previousLevel = level;
    });

    if (!hasH1) {
      newIssues.push('Page missing main heading (h1)');
      score -= 5;
    }

    // Check for ARIA landmarks
    const landmarks = document.querySelectorAll('[role="banner"], [role="main"], [role="navigation"], [role="contentinfo"]');
    if (landmarks.length < 2) {
      newIssues.push('Page missing essential ARIA landmarks');
      score -= 5;
    }

    // Check for skip links
    const skipLinks = document.querySelectorAll('a[href^="#"], a[href^="/#"]');
    if (skipLinks.length === 0) {
      newIssues.push('No skip navigation links found');
      score -= 5;
    }

    setIssues(newIssues);
    setAccessibilityScore(Math.max(0, score));
  }, []);

  // Run audit on mount and when features change
  useEffect(() => {
    runAccessibilityAudit();
  }, [runAccessibilityAudit]);

  // Toggle functions
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const zoomIn = () => {
    setSettings(prev => ({ ...prev, zoomLevel: Math.min(prev.zoomLevel + 10, 200) }));
  };

  const zoomOut = () => {
    setSettings(prev => ({ ...prev, zoomLevel: Math.max(prev.zoomLevel - 10, 50) }));
  };

  const resetZoom = () => {
    setSettings(prev => ({ ...prev, zoomLevel: 100 }));
  };

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 left-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-5 h-5" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="fixed bottom-4 left-4 z-50 w-80 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl"
        ref={settingsRef}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-2">
            <Accessibility className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-slate-900 dark:text-white font-semibold">Accessibility</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleExpanded}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={toggleVisibility}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 space-y-3">
          {/* Zoom Controls */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600 dark:text-slate-300">Zoom: {settings.zoomLevel}%</span>
            <div className="flex items-center space-x-1">
              <button
                onClick={zoomOut}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                title="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={resetZoom}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                title="Reset zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={zoomIn}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                title="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600 dark:text-slate-300">Theme</span>
            <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
              {(['light', 'auto', 'dark'] as const).map((theme) => (
                <button
                  key={theme}
                  onClick={() => updateSetting('theme', theme)}
                  className={`p-2 rounded-md text-xs transition-colors ${
                    settings.theme === theme
                      ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                  title={`${theme.charAt(0).toUpperCase() + theme.slice(1)} theme`}
                >
                  {theme === 'light' && <Sun className="w-3 h-3" />}
                  {theme === 'auto' && <Monitor className="w-3 h-3" />}
                  {theme === 'dark' && <Moon className="w-3 h-3" />}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Toggles */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => toggleSetting('highContrast')}
              className={`flex items-center justify-center space-x-2 p-2 rounded-lg text-xs transition-colors ${
                settings.highContrast
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <Contrast className="w-3 h-3" />
              <span>High Contrast</span>
            </button>
            
            <button
              onClick={() => toggleSetting('largeText')}
              className={`flex items-center justify-center space-x-2 p-2 rounded-lg text-xs transition-colors ${
                settings.largeText
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <Type className="w-3 h-3" />
              <span>Large Text</span>
            </button>
            
            <button
              onClick={() => toggleSetting('reducedMotion')}
              className={`flex items-center justify-center space-x-2 p-2 rounded-lg text-xs transition-colors ${
                settings.reducedMotion
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Reduced Motion</span>
            </button>
            
            <button
              onClick={() => toggleSetting('focusIndicator')}
              className={`flex items-center justify-center space-x-2 p-2 rounded-lg text-xs transition-colors ${
                settings.focusIndicator
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <MousePointer className="w-3 h-3" />
              <span>Focus Indicator</span>
            </button>
          </div>
        </div>

        {/* Expanded Settings */}
        {isExpanded && (
          <>
            {/* Advanced Settings */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
              <h4 className="text-slate-900 dark:text-white font-medium">Advanced Settings</h4>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={() => toggleSetting('screenReader')}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300">Screen Reader Support</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={() => toggleSetting('keyboardNavigation')}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300">Enhanced Keyboard Navigation</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.colorBlindMode}
                    onChange={() => toggleSetting('colorBlindMode')}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300">Color Blind Mode</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={settings.dyslexiaFriendly}
                    onChange={() => toggleSetting('dyslexiaFriendly')}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300">Dyslexia Friendly Font</span>
                </label>
              </div>
            </div>

            {/* Accessibility Score */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-slate-900 dark:text-white font-medium">Accessibility Score</h4>
                <span className={`text-sm font-medium ${
                  accessibilityScore >= 90 ? 'text-green-600' :
                  accessibilityScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {accessibilityScore}/100
                </span>
              </div>
              
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    accessibilityScore >= 90 ? 'bg-green-500' :
                    accessibilityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${accessibilityScore}%` }}
                />
              </div>

              {/* Issues */}
              {issues.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300">Issues Found:</h5>
                  <ul className="space-y-1">
                    {issues.map((issue, index) => (
                      <li key={index} className="text-xs text-red-600 dark:text-red-400 flex items-start space-x-2">
                        <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Reset Button */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-colors text-sm"
              >
                Reset to Defaults
              </button>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

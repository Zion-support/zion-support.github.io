import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  MousePointer, 
  Keyboard, 
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  showAccessibilityPanel?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusHighlight: boolean;
  screenReader: boolean;
  keyboardOnly: boolean;
}

export function AccessibilityEnhancer({
  showAccessibilityPanel = false,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableReducedMotion = true
}: AccessibilityEnhancerProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusHighlight: false,
    screenReader: false,
    keyboardOnly: false
  });
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const focusHistoryRef = useRef<HTMLElement[]>([]);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Load saved settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...prev, ...parsed });
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Focus highlight
    if (newSettings.focusHighlight) {
      root.classList.add('focus-highlight');
    } else {
      root.classList.remove('focus-highlight');
    }
    
    // Screen reader mode
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
    
    // Keyboard only mode
    if (newSettings.keyboardOnly) {
      root.classList.add('keyboard-only');
    } else {
      root.classList.remove('keyboard-only');
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: AccessibilitySettings) => {
    try {
      localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
      applySettings(newSettings);
      announceToScreenReader('Accessibility settings updated');
    } catch (error) {
      console.warn('Failed to save accessibility settings:', error);
    }
  }, [applySettings]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...prev, message]);
      
      // Remove announcement after 5 seconds
      setTimeout(() => {
        setAnnouncements(prev => prev.filter(announcement => announcement !== message));
      }, 5000);
    }
  }, [settings.screenReader]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Track focus history
      if (event.key === 'Tab') {
        if (target !== currentFocus) {
          focusHistoryRef.current.push(target);
          setCurrentFocus(target);
          
          // Announce focus changes to screen reader
          if (settings.screenReader && target.getAttribute('aria-label')) {
            announceToScreenReader(target.getAttribute('aria-label') || 'Element focused');
          }
        }
      }
      
      // Enhanced keyboard shortcuts
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case '1':
            event.preventDefault();
            window.location.href = '/';
            break;
          case '2':
            event.preventDefault();
            window.location.href = '/services';
            break;
          case '3':
            event.preventDefault();
            window.location.href = '/about';
            break;
          case '4':
            event.preventDefault();
            window.location.href = '/contact';
            break;
          case 'h':
            event.preventDefault();
            setIsPanelOpen(prev => !prev);
            break;
        }
      }
      
      // Skip to main content
      if (event.key === 's' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          announceToScreenReader('Skipped to main content');
        }
      }
      
      // Skip to navigation
      if (event.key === 'n' && event.altKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav') || document.querySelector('[role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
          announceToScreenReader('Skipped to navigation');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, currentFocus, settings.screenReader, announceToScreenReader]);

  // Focus management
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focused');
      
      // Announce focus changes
      if (settings.screenReader) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent?.trim();
        if (label) {
          announceToScreenReader(label);
        }
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focused');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableKeyboardNavigation, settings.screenReader, announceToScreenReader]);

  // Screen reader mode enhancements
  useEffect(() => {
    if (!enableScreenReader || !settings.screenReader) return;

    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
    
    interactiveElements.forEach(element => {
      const el = element as HTMLElement;
      if (!el.getAttribute('aria-label') && !el.getAttribute('title')) {
        const text = el.textContent?.trim();
        if (text) {
          el.setAttribute('aria-label', text);
        }
      }
    });

    // Add skip links
    const skipLinks = document.createElement('div');
    skipLinks.className = 'sr-only sr-only-focusable';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    if (!document.querySelector('.sr-only')) {
      document.body.insertBefore(skipLinks, document.body.firstChild);
    }
  }, [enableScreenReader, settings.screenReader]);

  // High contrast mode
  useEffect(() => {
    if (!enableHighContrast) return;

    if (settings.highContrast) {
      // Add high contrast styles
      const style = document.createElement('style');
      style.id = 'high-contrast-styles';
      style.textContent = `
        .high-contrast {
          --bg-primary: #000000 !important;
          --bg-secondary: #ffffff !important;
          --text-primary: #ffffff !important;
          --text-secondary: #000000 !important;
          --accent: #ffff00 !important;
          --border: #ffff00 !important;
        }
        
        .high-contrast * {
          background-color: var(--bg-primary) !important;
          color: var(--text-primary) !important;
          border-color: var(--border) !important;
        }
        
        .high-contrast button,
        .high-contrast a {
          background-color: var(--bg-secondary) !important;
          color: var(--text-secondary) !important;
          border: 2px solid var(--border) !important;
        }
        
        .high-contrast button:hover,
        .high-contrast a:hover {
          background-color: var(--accent) !important;
          color: var(--bg-primary) !important;
        }
      `;
      
      if (!document.getElementById('high-contrast-styles')) {
        document.head.appendChild(style);
      }
    } else {
      const style = document.getElementById('high-contrast-styles');
      if (style) {
        style.remove();
      }
    }
  }, [enableHighContrast, settings.highContrast]);

  // Reduced motion mode
  useEffect(() => {
    if (!enableReducedMotion) return;

    if (settings.reducedMotion) {
      const style = document.createElement('style');
      style.id = 'reduced-motion-styles';
      style.textContent = `
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      
      if (!document.getElementById('reduced-motion-styles')) {
        document.head.appendChild(style);
      }
    } else {
      const style = document.getElementById('reduced-motion-styles');
      if (style) {
        style.remove();
      }
    }
  }, [enableReducedMotion, settings.reducedMotion]);

  // Quick accessibility toggle
  const toggleQuickAccess = useCallback(() => {
    setIsPanelOpen(prev => !prev);
  }, []);

  // Reset all settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      reducedMotion: false,
      largeText: false,
      focusHighlight: false,
      screenReader: false,
      keyboardOnly: false
    };
    
    setSettings(defaultSettings);
    saveSettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  }, [saveSettings, announceToScreenReader]);

  return (
    <>
      {/* Quick Access Button */}
      <button
        onClick={toggleQuickAccess}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        aria-label="Open accessibility panel"
        title="Accessibility Settings (Ctrl+H)"
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* Accessibility Panel */}
      {isPanelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Eye className="w-6 h-6 text-cyan-400" />
                Accessibility
              </h2>
              <button
                onClick={toggleQuickAccess}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Settings */}
            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <div>
                    <label className="text-white font-medium">High Contrast</label>
                    <p className="text-sm text-gray-400">Enhanced color contrast</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-blue-400" />
                  <div>
                    <label className="text-white font-medium">Reduced Motion</label>
                    <p className="text-sm text-gray-400">Minimize animations</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-green-400" />
                  <div>
                    <label className="text-white font-medium">Large Text</label>
                    <p className="text-sm text-gray-400">Increase font size</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('largeText', !settings.largeText)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.largeText ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Focus Highlight */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Keyboard className="w-5 h-5 text-purple-400" />
                  <div>
                    <label className="text-white font-medium">Focus Highlight</label>
                    <p className="text-sm text-gray-400">Enhanced focus indicators</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('focusHighlight', !settings.focusHighlight)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.focusHighlight ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.focusHighlight ? 'Disable' : 'Enable'} focus highlight`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.focusHighlight ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Screen Reader */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-yellow-400" />
                  <div>
                    <label className="text-white font-medium">Screen Reader</label>
                    <p className="text-sm text-gray-400">Enhanced screen reader support</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('screenReader', !settings.screenReader)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.screenReader ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader mode`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Keyboard Only */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Keyboard className="w-5 h-5 text-red-400" />
                  <div>
                    <label className="text-white font-medium">Keyboard Only</label>
                    <p className="text-sm text-gray-400">Hide mouse cursor</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('keyboardOnly', !settings.keyboardOnly)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.keyboardOnly ? 'bg-red-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.keyboardOnly ? 'Disable' : 'Enable'} keyboard only mode`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.keyboardOnly ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6 pt-6 border-t border-slate-600">
              <button
                onClick={resetSettings}
                className="flex-1 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                onClick={toggleQuickAccess}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-colors"
              >
                Done
              </button>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
              <h3 className="text-sm font-medium text-white mb-2">Keyboard Shortcuts</h3>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Ctrl+1: Home</div>
                <div>Ctrl+2: Services</div>
                <div>Ctrl+3: About</div>
                <div>Ctrl+4: Contact</div>
                <div>Alt+S: Skip to content</div>
                <div>Alt+N: Skip to navigation</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Focus Indicator */}
      {settings.focusHighlight && (
        <style>
          {`
            .focused {
              outline: 3px solid #22ddd2 !important;
              outline-offset: 2px !important;
              box-shadow: 0 0 0 3px rgba(34, 221, 210, 0.3) !important;
            }
            
            .skip-link {
              position: absolute;
              top: -40px;
              left: 6px;
              background: #22ddd2;
              color: #000;
              padding: 8px;
              text-decoration: none;
              border-radius: 4px;
              z-index: 1000;
            }
            
            .skip-link:focus {
              top: 6px;
            }
            
            .sr-only {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border: 0;
            }
            
            .sr-only-focusable:focus {
              position: static;
              width: auto;
              height: auto;
              padding: 0;
              margin: 0;
              overflow: visible;
              clip: auto;
              white-space: normal;
            }
          `}
        </style>
      )}
    </>
  );
}

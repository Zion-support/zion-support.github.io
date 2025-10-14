<<<<<<< HEAD
import React, { useEffect } from 'react";
=======
<<<<<<< HEAD
import React, { useEffect } from 'react';
>>>>>>> origin/main
const AccessibilityEnhancer: React.FC = () => {
=======
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { Eye, Volume2, VolumeX, Type, MousePointer, Keyboard } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
}

interface ImprovedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

const ImprovedAccessibility: React.FC<ImprovedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false,
  enableLargeText = false,
  enableReducedMotion = false
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: enableHighContrast,
    largeText: enableLargeText,
    reducedMotion: enableReducedMotion,
    screenReader: enableScreenReader,
    keyboardNavigation: enableKeyboardNavigation,
    focusVisible: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Apply accessibility settings
>>>>>>> origin/main
  useEffect(() => {
<<<<<<< HEAD
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a')";
      skipLink.href = "#main-content"
      skipLink.textContent = "Skip to main content"
      skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      document.body.insertBefore(skipLink, document.body.firstChild)
// Focus management for keyboard navigation
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {'
        event.preventDefault()
        const mainContent = document.getElementById('main-content')";
        if (mainContent) {
          mainContent.focus()
          mainContent.scrollIntoView({ behavior: 'smooth' })";
        }
    }
    const handleMouseDown = () => {document.body.classList.remove('keyboard-navigation')"}"
=======
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader
    if (settings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: "smooth" });
        }
      }
<<<<<<< HEAD
    }
    const handleMouseDown = () => { document.body.classList.remove('keyboard-navigation'); }
>>>>>>> origin/main
    // Add focus indicators for keyboard navigation
    }
    // Add focus styles
    const addFocusStyles = () => {const style = document.createElement('style')";
      style.textContent = ``
        *:focus {
          outline: 2px solid #3b82f6}
    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {const style = document.createElement('style')";
      style.textContent = ``
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px}
      `;`
      document.head.appendChild(style)
    // Add ARIA landmarks
    const addAriaLandmarks = () => {const main = document.querySelector('main')";
      if (main && !main.getAttribute('role')) {'
        main.setAttribute('role', 'main')"}"
    // Reduced motion mode
<<<<<<< HEAD
    if (isReducedMotion) {root.classList.add('reduced-motion')'} else {root.classList.remove('reduced-motion')"}"
=======
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else { root.classList.remove('reduced-motion'); }
>>>>>>> origin/main
    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', '
      fontSize === 'large' ? '1.2' : '
      fontSize === 'extra-large' ? '1.4' : '
      fontSize === 'small' ? '0.9' : '1''
    )
  }, [isHighContrast, isReducedMotion, fontSize])
  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {'
        e.preventDefault()
        const mainContent = document.getElementById('main-content')";
        if (mainContent) {
          mainContent.focus()
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {'
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur()
    }
    document.addEventListener('keydown', handleKeyDown)";
    return () => document.removeEventListener('keydown', handleKeyDown)";
  }, [])
  // Focus management
  useEffect(() => {const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add('focus-visible')"}"
    }
    const handleFocusOut = (e: FocusEvent) => {const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible')"}"
    }
<<<<<<< HEAD
    document.addEventListener('focusin', handleFocusIn)";
    document.addEventListener('focusout', handleFocusOut)";
    return () => {focusableElements.forEach(element => {
        element.removeEventListener('focus', handleFocus)";
        element.removeEventListener('blur', handleBlur)";
      const nav = document.querySelector('nav');      if (nav && !nav.getAttribute('role')) {'
      const nav = document.querySelector('nav')";
      if (nav && !nav.getAttribute('role')) {'
        nav.setAttribute('role', 'navigation')"}"
      const footer = document.querySelector('footer')";
      if (footer && !footer.getAttribute('role')) {'
        footer.setAttribute('role', 'contentinfo')"}"
=======
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    return () => {
      focusableElements.forEach(element => {
        element.removeEventListener('focus', handleFocus);
        element.removeEventListener('blur', handleBlur);
      const nav = document.querySelector('nav');      if (nav && !nav.getAttribute('role')) {
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) { footer.setAttribute('role', 'contentinfo'); }
>>>>>>> origin/main
    }
    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])')";
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {'
          img.setAttribute('alt', `Image ${index + 1}`)";`"`
        }
      }
    // Initialize accessibility enhancements
<<<<<<< HEAD
    addSkipLink()
    addFocusStyles()
    addAriaLandmarks()
    addAltText()
    document.addEventListener('keydown', handleKeyDown)";
    addFocusStyles()
    return () => {document.removeEventListener('keydown', handleKeyDown)";
      document.removeEventListener('mousedown', handleMouseDown)"}"
  }, [])
return null;
import React from 'react";
const AccessibilityEnhancer: React.FC = () => {return null}
export default AccessibilityEnhancer;
  }, [])
  return null;
    }
  }, [])
  return null;
}
export default AccessibilityEnhancer;
=======
    addSkipLink();
    addFocusStyles();
    addAriaLandmarks();
    addAltText();
    };
    document.addEventListener('keydown', handleKeyDown);
    addFocusStyles();
    return () => { document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown); }
  }, []);
return null;
import React from 'react';
const AccessibilityEnhancer: React.FC = () => { return null; }
export default AccessibilityEnhancer;
  }, []);
  return null;
=======

      // Toggle accessibility panel
      if (event.key === 'Tab' && event.altKey && event.ctrlKey) {
        event.preventDefault();
        setIsVisible(!isVisible);
      }

      // Focus visible
      if (event.key === 'Tab') {
        setSettings(prev => ({ ...prev, focusVisible: true }));
      }
    };

    const handleMouseDown = () => {
      setSettings(prev => ({ ...prev, focusVisible: false }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
>>>>>>> origin/main
    };
  }, [settings.keyboardNavigation, isVisible]);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      announceToScreenReader(`${key} ${newSettings[key] ? 'enabled' : 'disabled'}`);
      return newSettings;
    });
  };

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-white hover:bg-slate-700/90 transition-colors"
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-16 right-4 z-50 w-80 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Accessibility Settings</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close accessibility settings"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">High Contrast</span>
              </div>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4" />
                <span className="text-sm">Large Text</span>
              </div>
              <button
                onClick={() => toggleSetting('largeText')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4" />
                <span className="text-sm">Reduced Motion</span>
              </div>
              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {settings.screenReader ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="text-sm">Screen Reader</span>
              </div>
              <button
                onClick={() => toggleSetting('screenReader')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.screenReader ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4" />
                <span className="text-sm">Keyboard Navigation</span>
              </div>
              <button
                onClick={() => toggleSetting('keyboardNavigation')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} keyboard navigation`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <h4 className="text-sm font-semibold mb-2">Keyboard Shortcuts</h4>
            <div className="text-xs text-gray-400 space-y-1">
              <p>Alt + Shift + Tab: Skip to main content</p>
              <p>Alt + Ctrl + Tab: Toggle this panel</p>
              <p>Tab: Navigate elements</p>
              <p>Enter/Space: Activate elements</p>
            </div>
          </div>
        </div>
      )}

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Skip to main content
      </a>

      {/* Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: var(--tw-bg-opacity) !important;
          color: var(--tw-text-opacity) !important;
          border-color: currentColor !important;
        }
        
        .large-text {
          font-size: 1.125rem;
        }
        
        .large-text h1 { font-size: 3.5rem; }
        .large-text h2 { font-size: 2.5rem; }
        .large-text h3 { font-size: 2rem; }
        .large-text h4 { font-size: 1.5rem; }
        .large-text h5 { font-size: 1.25rem; }
        .large-text h6 { font-size: 1.125rem; }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
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
        
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
    </>
  );
};
<<<<<<< HEAD
export default AccessibilityEnhancer;
=======

export default ImprovedAccessibility;
=======
import React, { ReactNode } from "react";

interface AccessibilityEnhancerProps {
  children?: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  return <>{children}</>;
};

export default AccessibilityEnhancer;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main

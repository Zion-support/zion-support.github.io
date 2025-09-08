import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react;

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia((prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)).matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply initial styles
    document.documentElement.style.setProperty(--font-size', `${fontSize}px`);
    
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion);
    }
    
    if (prefersHighContrast) {
      document.documentElement.classList.add(high-contrast');
    }

    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab) {
        document.body.classList.add(keyboard-navigation');
import React, { useEffect, useState, useCallback } from 'react;
import { motion, AnimatePresence } from framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Type, 
  MousePointer, 
  Keyboard,
  Accessibility,
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react;

interface AccessibilitySettings {
  highContrast: boolean;


  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'normal' | 'large' | 'xlarge';
}

export function AccessibilityEnhancer({ 
  enabled = true, 
  showControls = true 
}: { 
  enabled?: boolean; 
  showControls?: boolean; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: normal',
    fontSize: 'normal
  });

  // Apply accessibility settings to document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add(high-contrast');
      root.style.setProperty('--zion-cyan, #00ffff');
      root.style.setProperty('--zion-slate-900, #000000');
      root.style.setProperty('--zion-slate-100, #ffffff');
    } else {
      root.classList.remove('high-contrast);
      root.style.removeProperty(--zion-cyan');
      root.style.removeProperty('--zion-slate-900);
      root.style.removeProperty(--zion-slate-100');
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text);
      root.style.fontSize = 120%';
    } else {
      root.classList.remove('large-text);
      root.style.fontSize = ';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion);
      root.style.setProperty(--reduced-motion', 'true);
    } else {
      root.classList.remove(reduced-motion');
      root.style.removeProperty('--reduced-motion);
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add(focus-visible');
    } else {
      root.classList.remove('focus-visible);
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== normal') {
      root.classList.add(`color-blind-${newSettings.colorBlindness}`);
    } else {
      root.classList.remove('color-blind-protanopia, color-blind-deuteranopia', 'color-blind-tritanopia);
    }

    // Font size
    root.classList.remove(font-size-normal', 'font-size-large, font-size-xlarge');
    root.classList.add(`font-size-${newSettings.fontSize}`);
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

      // Skip to main content
      if (e.key === 'Tab && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector(main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4210
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation)
}

    document.addEventListener(keydown', handleKeyDown);
    document.addEventListener('mousedown, handleMouseDown);

    return () => {
      document.removeEventListener(keydown', handleKeyDown);
      document.removeEventListener('mousedown, handleMouseDown)
}
  }, [fontSize]);
      // Skip to navigation
      if (e.key === Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const navigation = document.querySelector('nav);
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }

      // Skip to footer
      if (e.key === Tab' && e.ctrlKey) {
        e.preventDefault();
        const footer = document.querySelector('footer);
        if (footer) {
          (footer as HTMLElement).focus();
        }
      }
    }

    document.addEventListener(keydown', handleKeyDown);
    return () => document.removeEventListener('keydown, handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement(div');
    announcement.setAttribute('aria-live, polite');
    announcement.setAttribute('aria-atomic, true');
    announcement.className = 'sr-only;
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  // Enhanced focus management
  const setupFocusManagement = useCallback(() => {
    if (!settings.focusIndicator) return;

    const focusableElements = document.querySelectorAll(
      a, button, input, textarea, select, [tabindex]:not([tabindex="-1])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('focus, () => {
        element.classList.add(focus-ring');
        announceToScreenReader(`${element.textContent || element.getAttribute('aria-label) || Element'} focused`);
      });

      element.addEventListener('blur, () => {
        element.classList.remove(focus-ring');
      });
    });
  }, [settings.focusIndicator, announceToScreenReader]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings, applyAccessibilitySettings]);

  // Setup keyboard navigation and focus management
  useEffect(() => {
    const cleanupKeyboard = setupKeyboardNavigation();
    const cleanupFocus = setupFocusManagement();

    return () => {
      cleanupKeyboard?.();
      cleanupFocus?.();
    }
  }, [setupKeyboardNavigation, setupFocusManagement]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('zion-accessibility-settings, JSON.stringify(settings));
  }, [settings]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem(zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      } catch (error) {



  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast)
}

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle(reduce-motion')
}

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.setProperty('--font-size, `${newSize}px`)
}

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.setProperty(--font-size', `${newSize}px`)
}

  return (
    <>
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border>
        <h3 className=text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2>
          <button
            onClick={toggleHighContrast}
            className=block w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded"
            aria-label="Toggle high contrast mode
          >
            {isHighContrast ? '✓ : ○'} High Contrast
          </button>
          <button
            onClick={toggleReducedMotion}
            className=block w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded"
            aria-label="Toggle reduced motion
          >
            {isReducedMotion ? '✓ : ○'} Reduce Motion
          </button>
          <div className=flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="text-sm px-2 py-1 hover:bg-gray-100 rounded
              aria-label=Decrease font size"
            >
              A-
            </button>
            <span className="text-sm>{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className=text-sm px-2 py-1 hover:bg-gray-100 rounded"
              aria-label="Increase font size
            >
              A+
            </button>
          </div>
        </div>
      </div>
      
      {/* Skip to main content link */}
      <a
        href=#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50
      >
        Skip to main content
      </a>
      
      {children}
    </>
  )
}

export default AccessibilityEnhancer;
      {/* Accessibility Controls Button */}
      {showControls && (
        <motion.button


            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}


              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}


                    ))}
                  </div>
                </div>

                {/* Color Blindness Support */}


        )}
      </AnimatePresence>
    </>
  );
}
origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4210
import React, { useState, useEffect } from react' interface AccessibilityEnhancerProps {"
  children: React.ReactNode} const AccessibilityEnhancer: React.FC < AccessibilityEnhancerProps> = ({ children }) => { const [accessibilitySettings, setAccessibilitySettings] = useState ({ highContrast: false, largeText: false, reducedMotion: false, focusVisible: true })  useEffect ( () => {';"
}}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0



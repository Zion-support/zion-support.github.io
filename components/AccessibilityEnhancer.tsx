import React, { useEffect, useState, useRef } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  showControls?: boolean;
  autoDetect?: boolean;
}

export default function AccessibilityEnhancer({ 
  showControls = true, 
  autoDetect = true 
}: AccessibilityEnhancerProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    keyboardNavigation: true
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const announcementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-detect accessibility preferences
    if (autoDetect) {
      detectAccessibilityPreferences();
    }
    
    // Apply settings to document
    applySettings();
    
    // Set up keyboard navigation
    setupKeyboardNavigation();
    
    // Set up focus management
    setupFocusManagement();
    
    // Set up screen reader announcements
    setupScreenReaderAnnouncements();
    
  }, [settings, autoDetect]);

  const detectAccessibilityPreferences = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersLargeText = window.matchMedia('(prefers-reduced-motion: reduce)').matches; // Fallback detection
      
      setSettings(prev => ({
        ...prev,
        highContrast: prefersHighContrast,
        reducedMotion: prefersReducedMotion,
        largeText: prefersLargeText
      }));
    }
  };

  const applySettings = () => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--border-color', '#000000');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--border-color');
    }
    
    // Large text mode
    if (settings.largeText) {
      root.classList.add('large-text');
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '22px');
      root.style.setProperty('--font-size-xl', '26px');
    } else {
      root.classList.remove('large-text');
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--transition-duration', '0s');
      root.style.setProperty('--animation-duration', '0s');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }
    
    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible-enabled');
    } else {
      root.classList.remove('focus-visible-enabled');
    }
  };

  const setupKeyboardNavigation = () => {
    if (!settings.keyboardNavigation) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          e.preventDefault();
          announce('Skipped to main content');
        }
      }
      
      // Escape key to close modals/overlays
      if (e.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
        if (modal) {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
          if (closeButton) {
            closeButton.click();
            announce('Modal closed');
          }
        }
      }
      
      // Arrow keys for menu navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const menu = document.querySelector('[role="menu"]');
        if (menu && menu.contains(e.target as Node)) {
          const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
          const currentIndex = items.indexOf(e.target as Element);
          let nextIndex;
          
          if (e.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % items.length;
          } else {
            nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
          }
          
          (items[nextIndex] as HTMLElement).focus();
          e.preventDefault();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  };

  const setupFocusManagement = () => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focus-visible');
      
      // Announce focused element
      const label = target.getAttribute('aria-label') || 
                   target.getAttribute('title') || 
                   target.textContent?.trim() || 
                   target.tagName.toLowerCase();
      announce(`Focused on ${label}`);
    };
    
    const handleBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focus-visible');
    };
    
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);
    
    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  };

  const setupScreenReaderAnnouncements = () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              const ariaLive = element.getAttribute('aria-live');
              
              if (ariaLive === 'polite' || ariaLive === 'assertive') {
                const text = element.textContent?.trim();
                if (text) {
                  announce(text);
                }
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => observer.disconnect();
  };

  const announce = (message: string) => {
    setAnnouncements(prev => [...prev, message]);
    
    // Remove announcement after 5 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1));
    }, 5000);
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    
    const settingName = key.replace(/([A-Z])/g, ' $1').toLowerCase();
    announce(`${settingName} ${settings[key] ? 'disabled' : 'enabled'}`);
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusVisible: true,
      keyboardNavigation: true
    });
    announce('Accessibility settings reset to default');
  };

  if (!showControls) {
    return null;
  }

  return (
    <>
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Toggle accessibility controls"
        >
          ♿
        </button>
        
        {isVisible && (
          <div className="absolute top-16 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Accessibility Settings</h2>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">High Contrast</span>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  role="switch"
                  aria-checked={settings.highContrast}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Large Text</span>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  role="switch"
                  aria-checked={settings.largeText}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Reduced Motion</span>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  role="switch"
                  aria-checked={settings.reducedMotion}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Focus Indicators</span>
                <button
                  onClick={() => toggleSetting('focusVisible')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  role="switch"
                  aria-checked={settings.focusVisible}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </label>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={resetSettings}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Reset to Default
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </>
  );
}

// Hook for using accessibility settings
export function useAccessibilitySettings() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    keyboardNavigation: true
  });
  
  return { settings, setSettings };
}
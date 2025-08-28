import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  HelpCircle,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

export function AccessibilityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false
  });

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);

    // Enable keyboard navigation by default
    enableKeyboardNavigation();
    
    // Add focus indicators
    addFocusIndicators();
    
    // Enable screen reader announcements
    enableScreenReaderSupport();
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const enableKeyboardNavigation = () => {
    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Add skip links
    addSkipLinks();
    
    // Enhance form navigation
    enhanceFormNavigation();
  };

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    // Skip to main content
    if (event.key === 'Tab' && event.shiftKey && event.altKey) {
      event.preventDefault();
      const mainContent = document.querySelector('main');
      if (mainContent) {
        (mainContent as HTMLElement).focus();
      }
    }
    
    // Toggle accessibility panel
    if (event.key === 'Tab' && event.altKey && event.keyCode === 65) { // Alt + A
      event.preventDefault();
      setIsVisible(!isVisible);
    }
  };

  const addSkipLinks = () => {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.setAttribute('aria-label', 'Skip links');

    skipLinks.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      a.className = 'skip-link';
      skipLinksContainer.appendChild(a);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  };

  const enhanceFormNavigation = () => {
    // Add proper labels and descriptions to form elements
    const formElements = document.querySelectorAll('input, select, textarea');
    
    formElements.forEach(element => {
      const input = element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      
      // Add aria-describedby if there's a description
      const description = input.parentElement?.querySelector('.description');
      if (description) {
        const id = `desc-${input.id || Math.random().toString(36).substr(2, 9)}`;
        description.id = id;
        input.setAttribute('aria-describedby', id);
      }
      
      // Add proper ARIA labels
      if (!input.hasAttribute('aria-label') && !input.labels?.length) {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
          input.setAttribute('aria-label', placeholder);
        }
      }
    });
  };

  const addFocusIndicators = () => {
    // Add focus-visible class to all focusable elements
    const focusableElements = document.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
      element.classList.add('focus-visible');
    });
  };

  const enableScreenReaderSupport = () => {
    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    
    // Announce page changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          announceToScreenReader('Page content updated');
        }
      });
    });
    
    observer.observe(document.body, { childList: true });
  };

  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [setting]: !settings[setting] };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: false
    };
    
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings (Alt + A)"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-20 z-40 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-purple-600" />
                <h3 id="accessibility-title" className="text-gray-900 dark:text-white font-semibold">
                  Accessibility
                </h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Close accessibility settings"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <p id="accessibility-description" className="text-sm text-gray-600 dark:text-gray-400">
                Customize your experience for better accessibility
              </p>

              {/* Settings */}
              <div className="space-y-3">
                <AccessibilityToggle
                  label="High Contrast"
                  description="Increase color contrast for better visibility"
                  icon={Contrast}
                  checked={settings.highContrast}
                  onChange={() => toggleSetting('highContrast')}
                />

                <AccessibilityToggle
                  label="Large Text"
                  description="Increase text size for better readability"
                  icon={Type}
                  checked={settings.largeText}
                  onChange={() => toggleSetting('largeText')}
                />

                <AccessibilityToggle
                  label="Reduced Motion"
                  description="Reduce animations for motion sensitivity"
                  icon={Eye}
                  checked={settings.reducedMotion}
                  onChange={() => toggleSetting('reducedMotion')}
                />

                <AccessibilityToggle
                  label="Enhanced Focus"
                  description="Show clear focus indicators"
                  icon={MousePointer}
                  checked={settings.focusIndicator}
                  onChange={() => toggleSetting('focusIndicator')}
                />

                <AccessibilityToggle
                  label="Keyboard Navigation"
                  description="Enhanced keyboard navigation support"
                  icon={Keyboard}
                  checked={settings.keyboardNavigation}
                  onChange={() => toggleSetting('keyboardNavigation')}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={resetSettings}
                  className="flex-1 px-3 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-1 px-3 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  Close
                </button>
              </div>

              {/* Help */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <HelpCircle className="w-4 h-4" />
                  <span>Press Alt + A to toggle this panel</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --accent-color: #0000ff;
          filter: contrast(150%);
        }

        .large-text {
          font-size: 1.2em;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          transition: top 0.3s;
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

        .focus-visible:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }

        .high-contrast .focus-visible:focus {
          outline: 3px solid #0000ff;
        }
      `}</style>
    </>
  );
}

interface AccessibilityToggleProps {
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  checked: boolean;
  onChange: () => void;
}

function AccessibilityToggle({ label, description, icon: Icon, checked, onChange }: AccessibilityToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5 text-purple-600" />
        <div>
          <label className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
            {label}
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${
          checked ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
        }`}
        role="switch"
        aria-checked={checked}
        aria-label={label}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

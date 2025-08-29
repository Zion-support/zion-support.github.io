import React, { useEffect, useCallback, useState } from 'react';
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
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityEnhancerProps {
  enableFeatures?: boolean;
  showControls?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableFeatures = true,
  showControls = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });

  const [showPanel, setShowPanel] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--bg-color', '#000000');
      document.documentElement.style.setProperty('--accent-color', '#ffff00');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--text-color');
      document.documentElement.style.removeProperty('--bg-color');
      document.documentElement.style.removeProperty('--accent-color');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.style.setProperty('--font-size-base', '18px');
      document.documentElement.style.setProperty('--font-size-lg', '22px');
      document.documentElement.style.setProperty('--font-size-xl', '26px');
    } else {
      document.documentElement.style.removeProperty('--font-size-base');
      document.documentElement.style.removeProperty('--font-size-lg');
      document.documentElement.style.removeProperty('--font-size-xl');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--animation-delay', '0s');
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--animation-delay');
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.style.setProperty('--focus-ring', '2px solid #22ddd2');
      document.documentElement.style.setProperty('--focus-ring-offset', '2px');
    } else {
      document.documentElement.style.removeProperty('--focus-ring');
      document.documentElement.style.removeProperty('--focus-ring-offset');
    }

    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);

    // Add to announcements list
    setAnnouncements(prev => [...prev, message]);
  }, [settings.screenReader]);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (element instanceof HTMLElement) {
            element.click();
          }
        }
      });

      // Enhanced focus styles
      element.addEventListener('focus', () => {
        element.classList.add('enhanced-focus');
        announceToScreenReader(`${element.textContent || element.getAttribute('aria-label') || 'Element'} focused`);
      });

      element.addEventListener('blur', () => {
        element.classList.remove('enhanced-focus');
      });
    });
  }, [settings.keyboardNavigation, announceToScreenReader]);

  // Add skip links
  const addSkipLinks = useCallback(() => {
    if (!enableFeatures) return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.setAttribute('role', 'navigation');
    skipLinksContainer.setAttribute('aria-label', 'Skip links');

    skipLinks.forEach(({ href, text }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.className = 'skip-link';
      link.setAttribute('tabindex', '0');
      skipLinksContainer.appendChild(link);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }, [enableFeatures]);

  // Add ARIA landmarks
  const addARIALandmarks = useCallback(() => {
    if (!enableFeatures) return;

    // Main content
    const main = document.querySelector('main');
    if (main && !main.getAttribute('id')) {
      main.setAttribute('id', 'main-content');
      main.setAttribute('role', 'main');
    }

    // Navigation
    const nav = document.querySelector('nav, header');
    if (nav && !nav.getAttribute('id')) {
      nav.setAttribute('id', 'navigation');
      nav.setAttribute('role', 'navigation');
    }

    // Footer
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('id')) {
      footer.setAttribute('id', 'footer');
      footer.setAttribute('role', 'contentinfo');
    }

    // Search
    const search = document.querySelector('input[type="search"], .search-container');
    if (search && !search.getAttribute('role')) {
      search.setAttribute('role', 'search');
    }
  }, [enableFeatures]);

  // Initialize accessibility features
  useEffect(() => {
    if (!enableFeatures) return;

    // Load saved settings
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }

    // Add skip links and ARIA landmarks
    addSkipLinks();
    addARIALandmarks();

    // Apply initial settings
    applySettings(settings);
  }, [enableFeatures, applySettings, addSkipLinks, addARIALandmarks, settings]);

  // Apply settings when they change
  useEffect(() => {
    enhanceKeyboardNavigation();
  }, [enhanceKeyboardNavigation]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + U: Toggle accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        setShowPanel(prev => !prev);
      }

      // Ctrl/Cmd + Shift + A: Toggle high contrast
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        applySettings({ highContrast: !settings.highContrast });
      }

      // Ctrl/Cmd + Shift + T: Toggle large text
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        applySettings({ largeText: !settings.largeText });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [applySettings, settings]);

  if (!showControls) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPanel(prev => !prev)}
        className="fixed top-4 right-4 z-50 p-3 bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full text-zion-cyan hover:bg-zion-cyan/30 transition-all duration-300"
        aria-label="Accessibility settings"
        aria-expanded={showPanel}
        aria-controls="accessibility-panel"
      >
        <Accessibility size={24} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-zion-cyan/30 z-40 overflow-y-auto"
            id="accessibility-panel"
            role="dialog"
            aria-label="Accessibility settings"
            aria-modal="true"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-zion-cyan">Accessibility</h2>
                <button
                  onClick={() => setShowPanel(false)}
                  className="p-2 text-zion-cyan hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast size={20} className="text-zion-cyan" />
                    <span className="text-white">High Contrast</span>
                  </div>
                  <button
                    onClick={() => applySettings({ highContrast: !settings.highContrast })}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Type size={20} className="text-zion-cyan" />
                    <span className="text-white">Large Text</span>
                  </div>
                  <button
                    onClick={() => applySettings({ largeText: !settings.largeText })}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.largeText ? 'bg-zion-cyan' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MousePointer size={20} className="text-zion-cyan" />
                    <span className="text-white">Reduced Motion</span>
                  </div>
                  <button
                    onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Keyboard size={20} className="text-zion-cyan" />
                    <span className="text-white">Focus Indicator</span>
                  </div>
                  <button
                    onClick={() => applySettings({ focusIndicator: !settings.focusIndicator })}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-zion-cyan' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="mt-8 p-4 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl/Cmd + U</kbd> Toggle panel</div>
                  <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl/Cmd + Shift + A</kbd> High contrast</div>
                  <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl/Cmd + Shift + T</kbd> Large text</div>
                </div>
              </div>

              {/* Recent Announcements */}
              {announcements.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zion-cyan mb-3">Recent Announcements</h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {announcements.slice(-5).map((announcement, index) => (
                      <div key={index} className="text-sm text-gray-300 bg-zion-cyan/10 p-2 rounded">
                        {announcement}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip Links Styles */}
      <style jsx>{`
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 100;
        }

        .skip-link {
          position: absolute;
          top: 6px;
          left: 6px;
          background: #22ddd2;
          color: #000;
          padding: 8px 16px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
          transform: translateY(-100%);
          transition: transform 0.3s;
        }

        .skip-link:focus {
          transform: translateY(0);
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

        .enhanced-focus {
          outline: 2px solid #22ddd2 !important;
          outline-offset: 2px !important;
        }

        .high-contrast {
          --text-color: #ffffff;
          --bg-color: #000000;
          --accent-color: #ffff00;
        }

        .reduced-motion * {
          animation-duration: 0.1s !important;
          animation-delay: 0s !important;
          transition-duration: 0.1s !important;
        }
      `}</style>
    </>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Type,
  Contrast,
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Tablet,
  Settings,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindFriendly: boolean;
  dyslexiaFriendly: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindFriendly: false,
    dyslexiaFriendly: false
  });

  const [isOpen, setIsOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility styles
  useEffect(() => {
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

    // Color blind friendly
    if (settings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

    // Dyslexia friendly
    if (settings.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('focus-indicators');
    } else {
      root.classList.remove('focus-indicators');
    }

  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links functionality
      if (event.key === 'Tab' && !event.shiftKey) {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }

      // Escape key to close modals
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            (modal as HTMLElement).click();
          }
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Announce changes to screen readers
    if (settings.screenReader) {
      const announcement = `${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`;
      setAnnouncements(prev => [...prev, announcement]);
    }
  }, [settings.screenReader]);

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true,
      colorBlindFriendly: false,
      dyslexiaFriendly: false
    });
    setAnnouncements(prev => [...prev, 'Accessibility settings reset to default']);
  };

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...prev, message]);
    }
  };

  return (
    <>
      {/* Accessibility Panel */}
      <div className="accessibility-panel">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accessibility-toggle"
          aria-label="Open accessibility settings"
          aria-expanded={isOpen}
        >
          <Settings className="w-5 h-5" />
        </button>

        {isOpen && (
          <div className="accessibility-menu" role="dialog" aria-labelledby="accessibility-title">
            <div className="accessibility-header">
              <h3 id="accessibility-title">Accessibility Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="close-button"
                aria-label="Close accessibility settings"
              >
                ×
              </button>
            </div>

            <div className="accessibility-content">
              <div className="setting-group">
                <h4>Visual</h4>
                <div className="setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => updateSetting('highContrast', e.target.checked)}
                    />
                    <Contrast className="w-4 h-4" />
                    High Contrast
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={(e) => updateSetting('largeText', e.target.checked)}
                    />
                    <Type className="w-4 h-4" />
                    Large Text
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.colorBlindFriendly}
                      onChange={(e) => updateSetting('colorBlindFriendly', e.target.checked)}
                    />
                    <Eye className="w-4 h-4" />
                    Color Blind Friendly
                  </label>
                </div>
              </div>

              <div className="setting-group">
                <h4>Motion & Animation</h4>
                <div className="setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                    />
                    <Monitor className="w-4 h-4" />
                    Reduce Motion
                  </label>
                </div>
              </div>

              <div className="setting-group">
                <h4>Navigation</h4>
                <div className="setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                    />
                    <Keyboard className="w-4 h-4" />
                    Enhanced Keyboard Navigation
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.focusIndicators}
                      onChange={(e) => updateSetting('focusIndicators', e.target.checked)}
                    />
                    <MousePointer className="w-4 h-4" />
                    Focus Indicators
                  </label>
                </div>
              </div>

              <div className="setting-group">
                <h4>Reading</h4>
                <div className="setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.dyslexiaFriendly}
                      onChange={(e) => updateSetting('dyslexiaFriendly', e.target.checked)}
                    />
                    <Type className="w-4 h-4" />
                    Dyslexia Friendly Font
                  </label>
                </div>
                <div className="setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => updateSetting('screenReader', e.target.checked)}
                    />
                    <Volume2 className="w-4 h-4" />
                    Screen Reader Support
                  </label>
                </div>
              </div>

              <div className="accessibility-actions">
                <button onClick={resetSettings} className="reset-button">
                  Reset to Default
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Screen Reader Announcements */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Skip Links */}
      {settings.keyboardNavigation && (
        <div className="skip-links">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <a href="#navigation" className="skip-link">
            Skip to navigation
          </a>
          <a href="#footer" className="skip-link">
            Skip to footer
          </a>
        </div>
      )}

      {/* Enhanced Focus Management */}
      {settings.focusIndicators && (
        <style jsx global>{`
          *:focus {
            outline: 3px solid #0ea5e9 !important;
            outline-offset: 2px !important;
          }
          
          .focus-indicators button:focus,
          .focus-indicators a:focus,
          .focus-indicators input:focus,
          .focus-indicators textarea:focus,
          .focus-indicators select:focus {
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.3) !important;
          }
        `}</style>
      )}

      {/* Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          --bg-primary: #000000;
          --bg-secondary: #ffffff;
          --text-primary: #ffffff;
          --text-secondary: #000000;
          --border-color: #ffffff;
        }

        .large-text {
          font-size: 1.2em;
        }

        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text p { font-size: 1.2em; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .color-blind-friendly {
          --color-primary: #0066cc;
          --color-secondary: #ff6600;
          --color-success: #00aa00;
          --color-warning: #ffaa00;
          --color-error: #cc0000;
        }

        .dyslexia-friendly {
          font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;
          line-height: 1.6;
          letter-spacing: 0.05em;
        }

        .accessibility-panel {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
        }

        .accessibility-toggle {
          background: #0ea5e9;
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .accessibility-toggle:hover {
          background: #0284c7;
          transform: scale(1.05);
        }

        .accessibility-menu {
          position: absolute;
          top: 60px;
          right: 0;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          width: 320px;
          max-height: 80vh;
          overflow-y: auto;
        }

        .accessibility-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .accessibility-header h3 {
          margin: 0;
          font-size: 1.1em;
          font-weight: 600;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 1.5em;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .accessibility-content {
          padding: 16px;
        }

        .setting-group {
          margin-bottom: 20px;
        }

        .setting-group h4 {
          margin: 0 0 12px 0;
          font-size: 0.9em;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .setting-item {
          margin-bottom: 8px;
        }

        .setting-item label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 0.9em;
        }

        .setting-item input[type="checkbox"] {
          margin: 0;
        }

        .accessibility-actions {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
        }

        .reset-button {
          background: #ef4444;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9em;
        }

        .reset-button:hover {
          background: #dc2626;
        }

        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1001;
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #0ea5e9;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1001;
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

        @media (prefers-reduced-motion: reduce) {
          .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 768px) {
          .accessibility-panel {
            top: 10px;
            right: 10px;
          }

          .accessibility-menu {
            width: 280px;
            right: -10px;
          }
        }
      `}</style>

      {children}
    </>
  );
};

export default AccessibilityEnhancer;
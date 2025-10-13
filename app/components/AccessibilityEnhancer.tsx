import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Type, Volume2, VolumeX, MousePointer, Move } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
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

    // Screen reader optimizations
    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    // Inject accessibility styles
    const style = document.createElement('style');
    style.id = 'accessibility-styles';
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(110%);
      }
      
      .large-text {
        font-size: 1.2em;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .screen-reader-optimized {
        /* Enhanced focus indicators */
      }
      
      .keyboard-navigation *:focus {
        outline: 3px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .accessibility-panel {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 20px;
        color: white;
        min-width: 280px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
      
      .accessibility-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1001;
        background: rgba(0, 0, 0, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .accessibility-toggle:hover {
        background: rgba(0, 0, 0, 0.9);
        transform: scale(1.1);
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.getElementById('accessibility-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accessibility-toggle"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Eye className="w-6 h-6 text-cyan-400" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="accessibility-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-cyan-400">Accessibility Settings</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility settings"
            >
              <EyeOff className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-cyan-400" />
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Type className="w-4 h-4 text-cyan-400" />
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Move className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Reduce Motion</span>
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Screen Reader</span>
              </div>
              <button
                onClick={() => toggleSetting('screenReader')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.screenReader ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader optimizations`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MousePointer className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Keyboard Nav</span>
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

          <div className="mt-6 pt-4 border-t border-gray-600">
            <p className="text-xs text-gray-400 text-center">
              Settings are saved automatically and will persist across sessions.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;

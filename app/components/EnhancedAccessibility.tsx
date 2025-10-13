<<<<<<< HEAD
import React from 'react';
import { useEffect, Node } from 'react;
interface EnhancedAccessibilityProps {
  children: Node;
=======
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'normal' | 'large' | 'extra-large';
  reducedMotion: boolean;
  screenReader: boolean;
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
}

const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'normal',
    reducedMotion: false,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    // Enhanced accessibility features;
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const enhanceFocusManagement = () => {
      // Add focus indicators;
      const style = document.createElement('style');
      style.textContent = `;
        *:focus {
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
      `;
      document.head.appendChild(style);
    };

    const addAriaLabels = () => {
      // Add ARIA labels to interactive elements;
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });
=======
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Detect screen reader usage
    const detectScreenReader = () => {
      const isScreenReader = window.speechSynthesis || 
        (window as any).speechSynthesis ||
        navigator.userAgent.includes('NVDA') ||
        navigator.userAgent.includes('JAWS') ||
        navigator.userAgent.includes('VoiceOver');
      
      setSettings(prev => ({ ...prev, screenReader: !!isScreenReader }));
    };

    // Detect reduced motion preference
    const detectReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setSettings(prev => ({ ...prev, reducedMotion: prefersReducedMotion }));
    };

    detectScreenReader();
    detectReducedMotion();
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b

    // Apply accessibility settings
    applyAccessibilitySettings(settings);

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }));
    };
    mediaQuery.addEventListener('change', handleChange);

<<<<<<< HEAD
    const setupKeyboardNavigation = () => {
      // Enhanced keyboard navigation;
      document.addEventListener('keydown', (e) => {';
        if (e.key === 'Tab') {';
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {';
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Initialize accessibility enhancements;
    addSkipLinks();
    enhanceFocusManagement();
    addAriaLabels();
    setupKeyboardNavigation();

    // Cleanup;
    return () => {
      // Cleanup if needed;
=======
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
    };
  }, []);

  useEffect(() => {
    applyAccessibilitySettings(settings);
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applyAccessibilitySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('font-size-small', 'font-size-large', 'font-size-extra-large');
    if (settings.fontSize !== 'normal') {
      root.classList.add(`font-size-${settings.fontSize}`);
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const setFontSize = (size: AccessibilitySettings['fontSize']) => {
    setSettings(prev => ({ ...prev, fontSize: size }));
  };

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'enhanced-accessibility-styles';
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(110%);
      }

      .font-size-small {
        font-size: 0.875rem;
      }

      .font-size-large {
        font-size: 1.125rem;
      }

      .font-size-extra-large {
        font-size: 1.25rem;
      }

      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      .accessibility-panel {
        position: fixed;
        top: 50%;
        right: -300px;
        transform: translateY(-50%);
        width: 300px;
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 8px 0 0 8px;
        padding: 1rem;
        z-index: 1000;
        transition: right 0.3s ease;
        color: white;
      }

      .accessibility-panel.visible {
        right: 0;
      }

      .accessibility-toggle {
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: #8b5cf6;
        color: white;
        border: none;
        padding: 0.5rem;
        border-radius: 8px 0 0 8px;
        cursor: pointer;
        z-index: 1001;
        font-size: 0.875rem;
        writing-mode: vertical-rl;
        text-orientation: mixed;
      }

      .accessibility-toggle:hover {
        background: #7c3aed;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById('enhanced-accessibility-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <>
      <button
        className="accessibility-toggle"
        onClick={toggleVisibility}
        aria-label="Toggle accessibility options"
        title="Accessibility Options"
      >
        ♿ A11y
      </button>
      
      <div className={`accessibility-panel ${isVisible ? 'visible' : ''}`}>
        <h3 className="text-lg font-semibold mb-4">Accessibility Options</h3>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={toggleHighContrast}
                className="rounded"
              />
              <span>High Contrast</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Font Size</label>
            <div className="space-y-2">
              {(['small', 'normal', 'large', 'extra-large'] as const).map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="fontSize"
                    value={size}
                    checked={settings.fontSize === size}
                    onChange={() => setFontSize(size)}
                    className="rounded"
                  />
                  <span className="capitalize">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-300">
              Screen Reader: {settings.screenReader ? 'Detected' : 'Not detected'}
            </p>
            <p className="text-sm text-gray-300">
              Reduced Motion: {settings.reducedMotion ? 'Enabled' : 'Disabled'}
            </p>
          </div>

          <button
            onClick={toggleVisibility}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Component;
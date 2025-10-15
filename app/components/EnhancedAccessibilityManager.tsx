import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityOptions {
  enableHighContrast: boolean;,
  enableLargeText: boolean;
  enableReducedMotion: boolean;,
  enableFocusIndicators: boolean;
  enableScreenReader: boolean;,
  enableKeyboardNavigation: boolean;
  enableVoiceControl: boolean;
}

interface AccessibilityManagerProps {
  options?: Partial<AccessibilityOptions>;
  enableAutoDetection?: boolean;
  enableUserPreferences?: boolean;
  onAccessibilityChange?: (options: AccessibilityOptions) => void;
}

const EnhancedAccessibilityManager: React.FC<AccessibilityManagerProps> = ({
  options = {
  // TODO: Implement
},
  enableAutoDetection = true,
  enableUserPreferences = true,
  onAccessibilityChange
}) => {
  const [accessibilityOptions, setAccessibilityOptions] = useState<AccessibilityOptions>({
    enableHighContrast: false,
    enableLargeText: false,
    enableReducedMotion: false,
    enableFocusIndicators: true,
    enableScreenReader: false,
    enableKeyboardNavigation: true,
    enableVoiceControl: false,
    ...options
  });

  const [isInitialized, setIsInitialized] = useState(false);

  // Detect system preferences
  const detectSystemPreferences = useCallback(() => {
    if (!enableAutoDetection) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detect high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Detect color scheme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setAccessibilityOptions(prev => ({
      ...prev,
      enableReducedMotion: prefersReducedMotion,
      enableHighContrast: prefersHighContrast || prefersDarkScheme
    }));
  }, [enableAutoDetection]);

  // Load user preferences from localStorage
  const loadUserPreferences = useCallback(() => {
    if (!enableUserPreferences) return;

    try {
      const saved = localStorage.getItem('accessibility-preferences');
      if (saved) {
        const preferences = JSON.parse(saved);
        setAccessibilityOptions(prev => ({ ...prev, ...preferences }));
      }
    } catch (error) {
      console.warn('Failed to load accessibility preferences:', error);
    }
  }, [enableUserPreferences]);

  // Save user preferences to localStorage
  const saveUserPreferences = useCallback((options: AccessibilityOptions) => {
    if (!enableUserPreferences) return;

    try {
      localStorage.setItem('accessibility-preferences', JSON.stringify(options));
    } catch (error) {
      console.warn('Failed to save accessibility preferences:', error);
    }
  }, [enableUserPreferences]);

  // Apply accessibility options
  const applyAccessibilityOptions = useCallback((options: AccessibilityOptions) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (options.enableHighContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (options.enableLargeText) {
      root.classList.add('large-text');
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
    } else {
      root.classList.remove('large-text');
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
    }

    // Reduced motion
    if (options.enableReducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Focus indicators
    if (options.enableFocusIndicators) {
      root.classList.add('focus-indicators');
    } else {
      root.classList.remove('focus-indicators');
    }

    // Screen reader optimizations
    if (options.enableScreenReader) {
      root.classList.add('screen-reader-optimized');
      // Add screen reader only content
      const srOnly = document.querySelector('.sr-only');
      if (!srOnly) {
        const srOnlyDiv = document.createElement('div');
        srOnlyDiv.className = 'sr-only';
        srOnlyDiv.setAttribute('aria-live', 'polite');
        srOnlyDiv.setAttribute('aria-atomic', 'true');
        body.appendChild(srOnlyDiv);
      }
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation
    if (options.enableKeyboardNavigation) {
      root.classList.add('keyboard-navigation');
      // Add keyboard navigation styles
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .keyboard-navigation button:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation select:focus,
        .keyboard-navigation textarea:focus,
        .keyboard-navigation a:focus {
          box-shadow: 0 0 0 2px #3b82f6 !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Voice control
    if (options.enableVoiceControl) {
      root.classList.add('voice-control');
      // Add voice control attributes
      const interactiveElements = document.querySelectorAll('button, input, select, textarea, a[href]');
      interactiveElements.forEach(element => {
        element.setAttribute('data-voice-command', 'true');
      });
    } else {
      root.classList.remove('voice-control');
    }
  }, []);

  // Update accessibility options
  const updateAccessibilityOptions = useCallback((newOptions: Partial<AccessibilityOptions>) => {
    setAccessibilityOptions(prev => {
      const updated = { ...prev, ...newOptions };
      applyAccessibilityOptions(updated);
      saveUserPreferences(updated);
      
      if (onAccessibilityChange) {
        onAccessibilityChange(updated);
      }
      
      return updated;
    });
  }, [applyAccessibilityOptions, saveUserPreferences, onAccessibilityChange]);

  // Initialize accessibility manager
  useEffect(() => {
    if (isInitialized) return;

    loadUserPreferences();
    detectSystemPreferences();
    applyAccessibilityOptions(accessibilityOptions);
    setIsInitialized(true);
  }, [isInitialized, loadUserPreferences, detectSystemPreferences, applyAccessibilityOptions, accessibilityOptions]);

  // Listen for system preference changes
  useEffect(() => {
    if (!enableAutoDetection) return;

    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(prefers-color-scheme: dark)')
    ];

    const handleMediaChange = () => {
      detectSystemPreferences();
    };

    mediaQueries.forEach(mq => {
      mq.addEventListener('change', handleMediaChange);
    });

    return () => {
      mediaQueries.forEach(mq => {
        mq.removeEventListener('change', handleMediaChange);
      });
    };
  }, [enableAutoDetection, detectSystemPreferences]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A: Toggle accessibility menu
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        const menu = document.querySelector('.accessibility-menu');
        if (menu) {
          (menu as HTMLElement).classList.toggle('hidden');
        }
      }

      // Alt + H: Toggle high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        updateAccessibilityOptions({
          enableHighContrast: !accessibilityOptions.enableHighContrast
        });
      }

      // Alt + L: Toggle large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        updateAccessibilityOptions({
          enableLargeText: !accessibilityOptions.enableLargeText
        });
      }

      // Alt + R: Toggle reduced motion
      if (event.altKey && event.key === 'r') {
        event.preventDefault();
        updateAccessibilityOptions({
          enableReducedMotion: !accessibilityOptions.enableReducedMotion
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [accessibilityOptions, updateAccessibilityOptions]);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const srOnly = document.querySelector('.sr-only');
    if (srOnly) {
      srOnly.textContent = message;
    }
  }, []);

  // Skip to main content functionality
  const addSkipLinks = useCallback(() => {
    const skipLinks = document.querySelector('.skip-links');
    if (skipLinks) return;

    const skipLinksDiv = document.createElement('div');
    skipLinksDiv.className = 'skip-links';
    skipLinksDiv.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;,
  top: -40px;
        left: 6px;
        z-index: 10000;
      }
      .skip-link {
        position: absolute;,
  top: -40px;
        left: 6px;,
  background: #000;
        color: #fff;,
  padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
      }
      .skip-link: focus {,
  top: 6px;
      }
    `;
    
    document.head.appendChild(style);
    document.body.insertBefore(skipLinksDiv, document.body.firstChild);
  }, []);

  // Add skip links on mount
  useEffect(() => {
    addSkipLinks();
  }, [addSkipLinks]);

  return (
    <>
      <div className="accessibility-manager"></></div>
      {/* Accessibility Menu */}
      <div className="accessibility-menu hidden"></div>
        <h3>Accessibility Options</h3>
        <div className="accessibility-controls"></div>
          <label></label>
            <input
              type="checkbox"
              checked={accessibilityOptions.enableHighContrast}
              onChange={(e
    </></input>
  ) => updateAccessibilityOptions({ enableHighContrast: e.target.checked })}
            />
            High Contrast Mode
          </label>
          <label></label>
            <input
              type="checkbox"
              checked={accessibilityOptions.enableLargeText}
              onChange={(e) => updateAccessibilityOptions({ enableLargeText: e.target.checked })}
            />
            Large Text
          </label>
          <label></label>
            <input
              type="checkbox"
              checked={accessibilityOptions.enableReducedMotion}
              onChange={(e) => updateAccessibilityOptions({ enableReducedMotion: e.target.checked })}
            />
            Reduced Motion
          </label>
          <label></label>
            <input
              type="checkbox"
              checked={accessibilityOptions.enableFocusIndicators}
              onChange={(e) => updateAccessibilityOptions({ enableFocusIndicators: e.target.checked })}
            />
            Focus Indicators
          </label>
          <label></label>
            <input
              type="checkbox"
              checked={accessibilityOptions.enableScreenReader}
              onChange={(e) => updateAccessibilityOptions({ enableScreenReader: e.target.checked })}
            />
            Screen Reader Optimized
          </label>
          <label></label>
            <input
              type="checkbox"
              checked={accessibilityOptions.enableKeyboardNavigation}
              onChange={(e) => updateAccessibilityOptions({ enableKeyboardNavigation: e.target.checked })}
            />
            Keyboard Navigation
          </label>
          <label></label>
            <input
              type="checkbox"
              checked={accessibilityOptions.enableVoiceControl}
              onChange={(e) => updateAccessibilityOptions({ enableVoiceControl: e.target.checked })}
            />
            Voice Control
          </label>
        </div>
        <div className="keyboard-shortcuts"></div>
          <h4>Keyboard Shortcuts</h4>
          <p>Alt + A: Toggle this menu</p>
          <p>Alt + H: Toggle high contrast</p>
          <p>Alt + L: Toggle large text</p>
          <p>Alt + R: Toggle reduced motion</p>
        </div>
      </div>

      {/* Accessibility Toggle Button */}
      <button
        className="accessibility-toggle"
        onClick={() => {
          const menu = document.querySelector('.accessibility-menu');
          if (menu) {
            menu.classList.toggle('hidden');
          }
        }}
        aria-label="Open accessibility options"
        title="Accessibility Options (Alt + A)"
      >
        ♿
      </button>

      <style jsx>{`
        .accessibility-manager {
          position: fixed;,
  top: 20px;
          left: 20px;
          z-index: 9999;
        }

        .accessibility-menu {
          position: absolute;,
  top: 50px;
          left: 0;,
  background: white;
          border: 1px solid #ccc;
          border-radius: 8px;,
  padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-width: 300px;
        }

        .accessibility-menu.hidden {
          display: none;
        }

        .accessibility-menu h3 {
          margin: 0 0 15px 0;,
  color: #333;
        }

        .accessibility-controls {
          display: flex;
          flex-direction: column;,
  gap: 10px;
          margin-bottom: 20px;
        }

        .accessibility-controls label {
          display: flex;
          align-items: center;,
  gap: 8px;
          cursor: pointer;
        }

        .accessibility-controls input[type="checkbox"] {
          margin: 0;
        }

        .keyboard-shortcuts {
          border-top: 1px solid #eee;
          padding-top: 15px;
        }

        .keyboard-shortcuts h4 {
          margin: 0 0 10px 0;,
  color: #333;
        }

        .keyboard-shortcuts p {
          margin: 5px 0;
          font-size: 14px;,
  color: #666;
        }

        .accessibility-toggle {
          background: #3b82f6;,
  color: white;
          border: none;
          border-radius: 50%;,
  width: 50px;
          height: 50px;
          font-size: 20px;,
  cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        .accessibility-toggle: hover {,
  background: #2563eb;
          transform: scale(1.05);
        }

        .accessibility-toggle: focus {,
  outline: 2px solid #60a5fa;
          outline-offset: 2px;
        }

        /* High contrast styles */
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }

        .high-contrast * {
          border-color: currentColor !important;
        }

        /* Large text styles */
        .large-text {
          font-size: 1.2em;
        }

        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text h4 { font-size: 1.5em; }
        .large-text h5 { font-size: 1.25em; }
        .large-text h6 { font-size: 1.1em; }

        /* Reduced motion styles */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Screen reader only content */
        .sr-only {
          position: absolute;,
  width: 1px;
          height: 1px;,
  padding: 0;
          margin: -1px;,
  overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;,
  border: 0;
        }

        /* Focus indicators */
        .focus-indicators *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* Keyboard navigation */
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* Voice control */
        .voice-control [data-voice-command="true"] {
          position: relative;
        }

        .voice-control [data-voice-command="true"]:hover: :after {,
  content: "🎤 Voice command available";
          position: absolute;,
  top: -30px;
          left: 0;,
  background: #000;
          color: #fff;,
  padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default EnhancedAccessibilityManager;
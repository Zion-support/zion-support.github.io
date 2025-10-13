
interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const AccessibilityManager: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Detect screen reader usage
    const detectScreenReader = () => {
      const isScreenReader = 
        window.speechSynthesis ||
        window.navigator.userAgent.includes('NVDA') ||
        window.navigator.userAgent.includes('JAWS') ||
        window.navigator.userAgent.includes('VoiceOver');
      
      setSettings(prev => ({ ...prev, screenReader: !!isScreenReader }));
    };

    detectScreenReader();

    // Listen for system preferences
    if (window.matchMedia) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, highContrast: e.matches }));
      };
      
      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      };

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      };
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

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Screen reader
    if (settings.screenReader) {
      root.classList.add('screen-reader');
    } else {
      root.classList.remove('screen-reader');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="accessibility-manager">
      <style jsx>{`
        .accessibility-manager {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 1rem;
          border-radius: 8px;
          font-size: 14px;
          max-width: 300px;
        }

        .accessibility-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .accessibility-toggle button {
          background: #00ffff;
          color: black;
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }

        .accessibility-toggle button:hover {
          background: #00cccc;
        }

        .accessibility-toggle button.active {
          background: #00ff00;
        }

        /* High contrast styles */
        :global(.high-contrast) {
          --text-color: #ffffff;
          --bg-color: #000000;
          --accent-color: #ffff00;
        }

        :global(.high-contrast) * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
        }

        /* Large text styles */
        :global(.large-text) {
          font-size: 1.2em;
        }

        :global(.large-text) h1 {
          font-size: 2.5em;
        }

        :global(.large-text) h2 {
          font-size: 2em;
        }

        :global(.large-text) h3 {
          font-size: 1.75em;
        }

        /* Reduced motion styles */
        :global(.reduced-motion) * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Focus visible styles */
        :global(.focus-visible) *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }

        /* Screen reader styles */
        :global(.screen-reader) .sr-only {
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
      `}</style>
      
      <h3>Accessibility Options</h3>
      
      <div className="accessibility-toggle">
        <span>High Contrast</span>
        <button 
          className={settings.highContrast ? 'active' : ''}
          onClick={() => toggleSetting('highContrast')}
          aria-pressed={settings.highContrast}
        >
          {settings.highContrast ? 'ON' : 'OFF'}
        </button>
      </div>
      
      <div className="accessibility-toggle">
        <span>Large Text</span>
        <button 
          className={settings.largeText ? 'active' : ''}
          onClick={() => toggleSetting('largeText')}
          aria-pressed={settings.largeText}
        >
          {settings.largeText ? 'ON' : 'OFF'}
        </button>
      </div>
      
      <div className="accessibility-toggle">
        <span>Reduced Motion</span>
        <button 
          className={settings.reducedMotion ? 'active' : ''}
          onClick={() => toggleSetting('reducedMotion')}
          aria-pressed={settings.reducedMotion}
        >
          {settings.reducedMotion ? 'ON' : 'OFF'}
        </button>
      </div>
      
      <div className="accessibility-toggle">
        <span>Focus Indicators</span>
        <button 
          className={settings.focusVisible ? 'active' : ''}
          onClick={() => toggleSetting('focusVisible')}
          aria-pressed={settings.focusVisible}
        >
          {settings.focusVisible ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityManager;

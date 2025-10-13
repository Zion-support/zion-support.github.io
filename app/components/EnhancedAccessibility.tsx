import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
    keyboardNavigation: false
  });

  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Detect screen reader usage
  const detectScreenReader = useCallback(() => {
    if (typeof window === 'undefined') return false;

    // Check for screen reader indicators
    const hasScreenReader = 
      window.navigator.userAgent.includes('NVDA') ||
      window.navigator.userAgent.includes('JAWS') ||
      window.navigator.userAgent.includes('VoiceOver') ||
      window.navigator.userAgent.includes('TalkBack') ||
      window.speechSynthesis ||
      (window as any).speechSynthesis;

    setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));
    return hasScreenReader;
  }, []);

  // Detect reduced motion preference
  const detectReducedMotion = useCallback(() => {
    if (typeof window === 'undefined') return false;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSettings(prev => ({ ...prev, reducedMotion: prefersReducedMotion }));
    return prefersReducedMotion;
  }, []);

  // Detect high contrast preference
  const detectHighContrast = useCallback(() => {
    if (typeof window === 'undefined') return false;

    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setSettings(prev => ({ ...prev, highContrast: prefersHighContrast }));
    return prefersHighContrast;
  }, []);

  // Apply accessibility settings to document
  const applyAccessibilitySettings = useCallback(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    if (!settings.screenReader) return;

    setAnnouncements(prev => [...prev, message]);
    
    // Clear announcement after 5 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1));
    }, 5000);
  }, [settings.screenReader]);

  // Handle keyboard navigation
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      setSettings(prev => ({ ...prev, keyboardNavigation: true }));
    }
  }, []);

  // Handle mouse usage
  const handleMouseUsage = useCallback(() => {
    setSettings(prev => ({ ...prev, keyboardNavigation: false }));
  }, []);

  // Skip to main content functionality
  const skipToMainContent = useCallback(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      announce('Skipped to main content');
    }
  }, [announce]);

  // Toggle accessibility settings
  const toggleSetting = useCallback((setting: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [setting]: !prev[setting] };
      
      // Announce changes
      const settingNames = {
        highContrast: 'high contrast',
        largeText: 'large text',
        reducedMotion: 'reduced motion',
        focusVisible: 'focus visible',
        screenReader: 'screen reader',
        keyboardNavigation: 'keyboard navigation'
      };
      
      announce(`${settingNames[setting]} ${newSettings[setting] ? 'enabled' : 'disabled'}`);
      
      return newSettings;
    });
  }, [announce]);

  // Initialize accessibility features
  useEffect(() => {
    detectScreenReader();
    detectReducedMotion();
    detectHighContrast();

    // Listen for media query changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)')
    ];

    const handleMediaChange = () => {
      detectReducedMotion();
      detectHighContrast();
    };

    mediaQueries.forEach(mq => {
      mq.addEventListener('change', handleMediaChange);
    });

    // Add keyboard and mouse event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);
    document.addEventListener('mousedown', handleMouseUsage);

    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.onclick = (e) => {
      e.preventDefault();
      skipToMainContent();
    };
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      mediaQueries.forEach(mq => {
        mq.removeEventListener('change', handleMediaChange);
      });
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.removeEventListener('mousedown', handleMouseUsage);
      
      const existingSkipLink = document.querySelector('.skip-link');
      if (existingSkipLink) {
        existingSkipLink.remove();
      }
    };
  }, [detectScreenReader, detectReducedMotion, detectHighContrast, handleKeyboardNavigation, handleMouseUsage, skipToMainContent]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings();
  }, [applyAccessibilitySettings]);

  // Add ARIA landmarks
  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50">
        <button
          onClick={() => toggleSetting('highContrast')}
          className="accessibility-toggle"
          aria-label="Toggle high contrast mode"
          title="Toggle high contrast mode"
        >
          {settings.highContrast ? '🔆' : '🌙'}
        </button>
        
        <button
          onClick={() => toggleSetting('largeText')}
          className="accessibility-toggle"
          aria-label="Toggle large text mode"
          title="Toggle large text mode"
        >
          {settings.largeText ? '🔍' : '🔍'}
        </button>
        
        <button
          onClick={() => toggleSetting('reducedMotion')}
          className="accessibility-toggle"
          aria-label="Toggle reduced motion mode"
          title="Toggle reduced motion mode"
        >
          {settings.reducedMotion ? '⏸️' : '▶️'}
        </button>
      </div>

      {/* Screen Reader Announcements */}
      <div 
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
        role="status"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Accessibility Styles */}
      <style jsx>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        .accessibility-controls {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .accessibility-toggle {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        
        .accessibility-toggle:hover,
        .accessibility-toggle:focus {
          background: rgba(0, 0, 0, 1);
          transform: scale(1.1);
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
        
        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .high-contrast * {
          border-color: currentColor !important;
        }
        
        /* Large text mode */
        .large-text {
          font-size: 1.2em;
        }
        
        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text p, .large-text span { font-size: 1.2em; }
        
        /* Reduced motion mode */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Focus visible mode */
        .focus-visible *:focus {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px !important;
        }
        
        /* Keyboard navigation mode */
        .keyboard-navigation *:focus {
          outline: 2px solid #0066cc !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibility;
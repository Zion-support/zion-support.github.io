import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: false
  });

  const [isLoaded, setIsLoaded] = useState(false);

  // Detect screen reader usage
  const detectScreenReader = useCallback(() => {
    const hasScreenReader = 
      window.navigator.userAgent.includes('NVDA') ||
      window.navigator.userAgent.includes('JAWS') ||
      window.navigator.userAgent.includes('VoiceOver') ||
      window.navigator.userAgent.includes('TalkBack') ||
      window.speechSynthesis?.getVoices?.()?.length > 0;
    
    return hasScreenReader;
  }, []);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#ffffff');
      root.style.setProperty('--neon-cyan', '#00ffff');
      root.style.setProperty('--dark-bg', '#000000');
      root.style.setProperty('--dark-surface', '#000000');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--neon-cyan');
      root.style.removeProperty('--dark-bg');
      root.style.removeProperty('--dark-surface');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size scaling
    const fontSizeMap = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'extra-large': '20px'
    };
    root.style.setProperty('--base-font-size', fontSizeMap[newSettings.fontSize]);

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
      // Add ARIA live regions for dynamic content
      if (!document.getElementById('aria-live-polite')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-polite';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
  }, []);

  // Initialize accessibility settings
  useEffect(() => {
    const initializeAccessibility = () => {
      // Check for system preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Detect screen reader
      const screenReader = detectScreenReader();
      
      // Load saved settings from localStorage
      const savedSettings = localStorage.getItem('accessibility-settings');
      let initialSettings: AccessibilitySettings = {
        highContrast: prefersHighContrast,
        reducedMotion: prefersReducedMotion,
        fontSize: 'medium',
        focusVisible: true,
        screenReader,
        keyboardNavigation: false
      };

      if (savedSettings) {
        try {
          const parsed = JSON.parse(savedSettings);
          initialSettings = { ...initialSettings, ...parsed };
        } catch (error) {
          console.warn('Failed to parse saved accessibility settings:', error);
        }
      }

      setSettings(initialSettings);
      applyAccessibilitySettings(initialSettings);
      setIsLoaded(true);
    };

    initializeAccessibility();

    // Listen for system preference changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)')
    ];

    const handleMediaChange = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setSettings(prev => {
        const newSettings = {
          ...prev,
          reducedMotion: prefersReducedMotion,
          highContrast: prefersHighContrast
        };
        applyAccessibilitySettings(newSettings);
        return newSettings;
      });
    };

    mediaQueries.forEach(mq => mq.addEventListener('change', handleMediaChange));

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleMediaChange));
    };
  }, [applyAccessibilitySettings, detectScreenReader]);

  // Save settings to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    }
  }, [settings, isLoaded]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A: Toggle accessibility menu
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        const menu = document.getElementById('accessibility-menu');
        if (menu) {
          menu.classList.toggle('hidden');
        }
      }
      
      // Alt + H: Toggle high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        setSettings(prev => {
          const newSettings = { ...prev, highContrast: !prev.highContrast };
          applyAccessibilitySettings(newSettings);
          return newSettings;
        });
      }
      
      // Alt + M: Toggle reduced motion
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        setSettings(prev => {
          const newSettings = { ...prev, reducedMotion: !prev.reducedMotion };
          applyAccessibilitySettings(newSettings);
          return newSettings;
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [applyAccessibilitySettings]);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const liveRegion = document.getElementById('aria-live-polite');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, []);

  // Update settings and announce changes
  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      applyAccessibilitySettings(updated);
      
      // Announce changes
      if (newSettings.highContrast !== undefined) {
        announceToScreenReader(`High contrast ${newSettings.highContrast ? 'enabled' : 'disabled'}`);
      }
      if (newSettings.reducedMotion !== undefined) {
        announceToScreenReader(`Reduced motion ${newSettings.reducedMotion ? 'enabled' : 'disabled'}`);
      }
      if (newSettings.fontSize) {
        announceToScreenReader(`Font size changed to ${newSettings.fontSize}`);
      }
      
      return updated;
    });
  }, [applyAccessibilitySettings, announceToScreenReader]);

  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Accessibility Menu */}
      <div 
        id="accessibility-menu" 
        className="fixed top-4 right-4 z-50 bg-slate-800 text-white p-4 rounded-lg shadow-lg hidden"
        role="dialog"
        aria-labelledby="accessibility-menu-title"
        aria-describedby="accessibility-menu-description"
      >
        <h3 id="accessibility-menu-title" className="text-lg font-semibold mb-4">
          Accessibility Settings
        </h3>
        <p id="accessibility-menu-description" className="text-sm text-gray-300 mb-4">
          Customize your browsing experience for better accessibility.
        </p>
        
        <div className="space-y-4">
          {/* High Contrast Toggle */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => updateSettings({ highContrast: e.target.checked })}
              className="w-4 h-4 text-cyan-400 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
              aria-describedby="high-contrast-description"
            />
            <div>
              <span className="text-sm font-medium">High Contrast</span>
              <p id="high-contrast-description" className="text-xs text-gray-400">
                Increase contrast for better visibility
              </p>
            </div>
          </label>

          {/* Reduced Motion Toggle */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
              className="w-4 h-4 text-cyan-400 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
              aria-describedby="reduced-motion-description"
            />
            <div>
              <span className="text-sm font-medium">Reduced Motion</span>
              <p id="reduced-motion-description" className="text-xs text-gray-400">
                Minimize animations and transitions
              </p>
            </div>
          </label>

          {/* Font Size Selector */}
          <div>
            <label htmlFor="font-size-select" className="block text-sm font-medium mb-2">
              Font Size
            </label>
            <select
              id="font-size-select"
              value={settings.fontSize}
              onChange={(e) => updateSettings({ fontSize: e.target.value as AccessibilitySettings['fontSize'] })}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-sm focus:ring-cyan-400 focus:ring-2 focus:border-cyan-400"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>

          {/* Screen Reader Optimizations */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.screenReader}
              onChange={(e) => updateSettings({ screenReader: e.target.checked })}
              className="w-4 h-4 text-cyan-400 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
              aria-describedby="screen-reader-description"
            />
            <div>
              <span className="text-sm font-medium">Screen Reader Optimized</span>
              <p id="screen-reader-description" className="text-xs text-gray-400">
                Optimize for screen reader users
              </p>
            </div>
          </label>

          {/* Keyboard Navigation */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={settings.keyboardNavigation}
              onChange={(e) => updateSettings({ keyboardNavigation: e.target.checked })}
              className="w-4 h-4 text-cyan-400 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
              aria-describedby="keyboard-nav-description"
            />
            <div>
              <span className="text-sm font-medium">Enhanced Keyboard Navigation</span>
              <p id="keyboard-nav-description" className="text-xs text-gray-400">
                Improve keyboard navigation experience
              </p>
            </div>
          </label>
        </div>

        {/* Keyboard Shortcuts Help */}
        <div className="mt-6 pt-4 border-t border-gray-600">
          <h4 className="text-sm font-medium mb-2">Keyboard Shortcuts</h4>
          <div className="text-xs text-gray-400 space-y-1">
            <p>Alt + A: Toggle this menu</p>
            <p>Alt + H: Toggle high contrast</p>
            <p>Alt + M: Toggle reduced motion</p>
          </div>
        </div>
      </div>

      {/* Skip Links */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
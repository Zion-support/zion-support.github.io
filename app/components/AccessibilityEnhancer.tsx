import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onSettingsChange
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Detect screen reader usage
  const detectScreenReader = useCallback(() => {
    if (typeof window === 'undefined') return false;

    // Check for common screen reader indicators
    const screenReaderIndicators = [
      'speechSynthesis' in window,
      'speechSynthesis' in window && window.speechSynthesis.speaking,
      navigator.userAgent.includes('NVDA'),
      navigator.userAgent.includes('JAWS'),
      navigator.userAgent.includes('VoiceOver'),
      navigator.userAgent.includes('TalkBack'),
      window.speechSynthesis && window.speechSynthesis.getVoices().length > 0
    ];

    return screenReaderIndicators.some(indicator => indicator);
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e0e0e0');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--transition', 'none');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--transition');
    }

    // Font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px'
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
      // Add skip links
      const skipLinks = document.querySelectorAll('.skip-link');
      skipLinks.forEach(link => {
        (link as HTMLElement).style.display = 'block';
      });
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    setSettings(newSettings);
    onSettingsChange?.(newSettings);
  }, [onSettingsChange]);

  // Initialize accessibility settings
  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const screenReader = detectScreenReader();

    const initialSettings: AccessibilitySettings = {
      highContrast: prefersHighContrast,
      reducedMotion: prefersReducedMotion,
      fontSize: 'medium',
      focusVisible: true,
      screenReader
    };

    applySettings(initialSettings);

    // Listen for system preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      applySettings({ ...settings, reducedMotion: e.matches });
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
      applySettings({ ...settings, highContrast: e.matches });
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, [applySettings, detectScreenReader]);

  // Keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
        }
      }

      // Toggle accessibility panel
      if (e.key === 'F1' || (e.altKey && e.key === 'a')) {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }

      // High contrast toggle
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        const newSettings = { ...settings, highContrast: !settings.highContrast };
        setSettings(newSettings);
        applySettings(newSettings);
      }

      // Font size controls
      if (e.altKey && e.key === '+') {
        e.preventDefault();
        const sizes = ['small', 'medium', 'large'] as const;
        const currentIndex = sizes.indexOf(settings.fontSize);
        const nextIndex = Math.min(currentIndex + 1, sizes.length - 1);
        const newSettings = { ...settings, fontSize: sizes[nextIndex] };
        setSettings(newSettings);
        applySettings(newSettings);
      }

      if (e.altKey && e.key === '-') {
        e.preventDefault();
        const sizes = ['small', 'medium', 'large'] as const;
        const currentIndex = sizes.indexOf(settings.fontSize);
        const prevIndex = Math.max(currentIndex - 1, 0);
        const newSettings = { ...settings, fontSize: sizes[prevIndex] };
        setSettings(newSettings);
        applySettings(newSettings);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [applySettings]);

  // Add skip links
  useEffect(() => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);

    return () => {
      const existingSkipLinks = document.querySelector('.skip-links');
      if (existingSkipLinks) {
        existingSkipLinks.remove();
      }
    };
  }, []);

  return (
    <>
      {/* Accessibility Panel */}
      {isVisible && (
        <div 
          className="fixed top-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"
          role="dialog"
          aria-labelledby="accessibility-panel-title"
        >
          <h3 id="accessibility-panel-title" className="text-lg font-semibold mb-4">
            Accessibility Settings
          </h3>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => {
                  const newSettings = { ...settings, highContrast: e.target.checked };
                  setSettings(newSettings);
                  applySettings(newSettings);
                }}
                className="rounded"
              />
              <span>High Contrast Mode</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => {
                  const newSettings = { ...settings, reducedMotion: e.target.checked };
                  setSettings(newSettings);
                  applySettings(newSettings);
                }}
                className="rounded"
              />
              <span>Reduce Motion</span>
            </label>

            <div>
              <label className="block text-sm font-medium mb-2">Font Size</label>
              <select
                value={settings.fontSize}
                onChange={(e) => {
                  const newSettings = { ...settings, fontSize: e.target.value as 'small' | 'medium' | 'large' };
                  setSettings(newSettings);
                  applySettings(newSettings);
                }}
                className="w-full p-2 rounded bg-slate-700 text-white"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div className="text-xs text-gray-400">
              <p>Keyboard shortcuts:</p>
              <p>F1 or Alt+A: Toggle this panel</p>
              <p>Alt+H: Toggle high contrast</p>
              <p>Alt+Plus/Minus: Adjust font size</p>
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Close accessibility panel"
          >
            ×
          </button>
        </div>
      )}

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-40"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (F1 or Alt+A)"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>
    </>
  );
};

export default AccessibilityEnhancer;
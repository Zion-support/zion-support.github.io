import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  keyboardNavigation: boolean;
  screenReaderOptimized: boolean;
}

interface AccessibilityProps {
  children: React.ReactNode;
  settings?: Partial<AccessibilitySettings>;
}

const EnhancedAccessibility: React.FC<AccessibilityProps> = ({ 
  children, 
  settings = {} 
}) => {
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    keyboardNavigation: false,
    screenReaderOptimized: false,
    ...settings
  });

  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    if (accessibilitySettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (accessibilitySettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (accessibilitySettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (accessibilitySettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    if (accessibilitySettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    if (accessibilitySettings.screenReaderOptimized) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, [accessibilitySettings]);

  // Detect keyboard usage
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true);
        setFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
      setFocusVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Skip to content functionality
  const handleSkipToContent = useCallback(() => {
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Update accessibility settings
  const updateAccessibilitySetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      [key]: value
    }));
    
    // Announce change to screen readers
    announceToScreenReader(`${key} ${value ? 'enabled' : 'disabled'}`);
  }, [announceToScreenReader]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Alt + 1: Skip to content
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        handleSkipToContent();
      }
      
      // Alt + 2: Toggle high contrast
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        updateAccessibilitySetting('highContrast', !accessibilitySettings.highContrast);
      }
      
      // Alt + 3: Toggle large text
      if (e.altKey && e.key === '3') {
        e.preventDefault();
        updateAccessibilitySetting('largeText', !accessibilitySettings.largeText);
      }
      
      // Alt + 4: Toggle reduced motion
      if (e.altKey && e.key === '4') {
        e.preventDefault();
        updateAccessibilitySetting('reducedMotion', !accessibilitySettings.reducedMotion);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [accessibilitySettings, updateAccessibilitySetting, handleSkipToContent]);

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility toolbar */}
      <div className="accessibility-toolbar">
        <button
          onClick={() => updateAccessibilitySetting('highContrast', !accessibilitySettings.highContrast)}
          className={`accessibility-btn ${accessibilitySettings.highContrast ? 'active' : ''}`}
          aria-label="Toggle high contrast mode"
          title="Toggle high contrast mode (Alt + 2)"
        >
          🔍
        </button>
        
        <button
          onClick={() => updateAccessibilitySetting('largeText', !accessibilitySettings.largeText)}
          className={`accessibility-btn ${accessibilitySettings.largeText ? 'active' : ''}`}
          aria-label="Toggle large text mode"
          title="Toggle large text mode (Alt + 3)"
        >
          🔍
        </button>
        
        <button
          onClick={() => updateAccessibilitySetting('reducedMotion', !accessibilitySettings.reducedMotion)}
          className={`accessibility-btn ${accessibilitySettings.reducedMotion ? 'active' : ''}`}
          aria-label="Toggle reduced motion mode"
          title="Toggle reduced motion mode (Alt + 4)"
        >
          ⏸️
        </button>
      </div>

      {/* Screen reader announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        id="screen-reader-announcements"
      />

      {/* Main content with accessibility enhancements */}
      <div
        id="main-content"
        tabIndex={-1}
        className={`accessibility-enhanced ${isKeyboardUser ? 'keyboard-user' : ''} ${focusVisible ? 'focus-visible' : ''}`}
        style={{
          '--high-contrast': accessibilitySettings.highContrast ? '1' : '0',
          '--large-text': accessibilitySettings.largeText ? '1.25' : '1',
          '--reduced-motion': accessibilitySettings.reducedMotion ? '1' : '0'
        } as React.CSSProperties}
      >
        {children}
      </div>

      {/* Accessibility styles */}
      <style jsx>{`
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

        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        .accessibility-toolbar {
          position: fixed;
          top: 20px;
          right: 20px;
          display: flex;
          gap: 8px;
          z-index: 1000;
        }

        .accessibility-btn {
          width: 40px;
          height: 40px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.2s ease;
        }

        .accessibility-btn:hover,
        .accessibility-btn:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          outline: none;
        }

        .accessibility-btn.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .accessibility-enhanced {
          transition: all 0.3s ease;
        }

        .accessibility-enhanced.keyboard-user *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }

        .high-contrast * {
          border-color: currentColor !important;
        }

        /* Large text mode */
        .large-text {
          font-size: calc(1rem * var(--large-text));
        }

        .large-text h1 {
          font-size: calc(2.5rem * var(--large-text));
        }

        .large-text h2 {
          font-size: calc(2rem * var(--large-text));
        }

        .large-text h3 {
          font-size: calc(1.75rem * var(--large-text));
        }

        /* Reduced motion mode */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }

        /* Screen reader optimizations */
        .screen-reader-optimized .sr-only {
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
    </>
  );
};

export default EnhancedAccessibility;
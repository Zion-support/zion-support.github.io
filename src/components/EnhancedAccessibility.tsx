import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindFriendly: boolean;
  dyslexiaFriendly: boolean;
};

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

export const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindFriendly: false,
    dyslexiaFriendly: false
  });

  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [skipLinks, setSkipLinks] = useState<HTMLElement[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Detect screen reader
    const isScreenReader = window.speechSynthesis !== undefined;
    setSettings(prev => ({ ...prev, screenReader: isScreenReader }));

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSettings(prev => ({ ...prev, reducedMotion: prefersReducedMotion }));
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
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
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          event.preventDefault();
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && !event.shiftKey && event.target === document.body) {
        const navigation = document.querySelector('nav, [role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
          event.preventDefault();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }

      // Arrow keys for navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, focusableElements.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          (focusableElements[nextIndex] as HTMLElement).focus();
          event.preventDefault();
        }
      }
    };

    if (settings.keyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announce = useCallback((message: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...prev, message]);
      
      // Clear announcement after 5 seconds
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 5000);
    }
  }, [settings.screenReader]);

  // Focus management
  const trackFocus = useCallback((element: HTMLElement) => {
    setFocusHistory(prev => [...prev.slice(-9), element]);
  }, []);

  useEffect(() => {
    const handleFocusIn = (event: FocusEvent) => {
      trackFocus(event.target as HTMLElement);
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, [trackFocus]);

  // Generate skip links
  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const links = Array.from(headings).map(heading => {
      const link = document.createElement('a');
      link.href = `#${heading.id || `heading-${Math.random().toString(36).substr(2, 9)}`}`;
      link.textContent = `Skip to ${heading.textContent}`;
      link.className = 'skip-link';
      link.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      link.addEventListener('focus', () => {
        link.style.top = '6px';
      });
      
      link.addEventListener('blur', () => {
        link.style.top = '-40px';
      });
      
      return link;
    });
    
    setSkipLinks(links);
    
    // Add skip links to document
    const skipContainer = document.createElement('div');
    skipContainer.className = 'skip-links';
    skipContainer.style.cssText = `
      position: relative;
      z-index: 1000;
    `;
    
    links.forEach(link => skipContainer.appendChild(link));
    document.body.insertBefore(skipContainer, document.body.firstChild);
    
    return () => {
      if (skipContainer.parentNode) {
        skipContainer.parentNode.removeChild(skipContainer);
      }
    };
  }, []);

  // Accessibility toolbar
  const AccessibilityToolbar = () => (
    <div className="accessibility-toolbar" style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 9999,
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Accessibility</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
          />
          High Contrast
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={settings.largeText}
            onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
          />
          Large Text
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
          />
          Reduced Motion
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={settings.focusVisible}
            onChange={(e) => setSettings(prev => ({ ...prev, focusVisible: e.target.checked }))}
          />
          Focus Visible
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={settings.keyboardNavigation}
            onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
          />
          Keyboard Nav
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={settings.colorBlindFriendly}
            onChange={(e) => setSettings(prev => ({ ...prev, colorBlindFriendly: e.target.checked }))}
          />
          Color Blind
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
          <input
            type="checkbox"
            checked={settings.dyslexiaFriendly}
            onChange={(e) => setSettings(prev => ({ ...prev, dyslexiaFriendly: e.target.checked }))}
          />
          Dyslexia
        </label>
      </div>
    </div>
  );

  return (
    <>
      {children}
      <AccessibilityToolbar />
      
      {/* Screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Focus indicator */}
      {settings.focusVisible && (
        <div
          className="focus-indicator"
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9998,
            border: '2px solid #0066cc',
            borderRadius: '4px',
            transition: 'all 0.2s ease'
          }}
        />
      )}
    </>
  );
};

// CSS styles for accessibility features
const accessibilityStyles = `
  .high-contrast {
    filter: contrast(150%) brightness(1.2);
  };

  .large-text {
    font-size: 1.2em !important;
  };

  .large-text h1 { font-size: 2.5em !important; }
  .large-text h2 { font-size: 2em !important; }
  .large-text h3 { font-size: 1.75em !important; }
  .large-text h4 { font-size: 1.5em !important; }
  .large-text h5 { font-size: 1.25em !important; }
  .large-text h6 { font-size: 1.1em !important; }

  .reduced-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  };

  .focus-visible *:focus {
    outline: 3px solid #0066cc !important;
    outline-offset: 2px !important;
  };

  .color-blind-friendly {
    filter: hue-rotate(180deg) saturate(1.5);
  };

  .dyslexia-friendly {
    font-family: 'OpenDyslexic', 'Comic Sans MS', cursive !important;
    line-height: 1.6 !important;
    letter-spacing: 0.1em !important;
  };

  .skip-link:focus {
    top: 6px !important;
  };

  @media (prefers-reduced-motion: reduce) {
    .reduced-motion * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  };

  @media (prefers-contrast: high) {
    .high-contrast {
      filter: contrast(200%) brightness(1.3);
    }
  };
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = accessibilityStyles;
  document.head.appendChild(styleSheet);
}

export default EnhancedAccessibility;

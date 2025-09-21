import React, { createContext, useContext, useEffect, useState } from 'react';
import { AccessibilityManager, AccessibilityOptions } from '../utils/accessibility';

interface AccessibilityContextType {
  options: AccessibilityOptions;
  setHighContrast: (enabled: boolean) => void;
  setLargeText: (enabled: boolean) => void;
  setReducedMotion: (enabled: boolean) => void;
  setScreenReaderMode: (enabled: boolean) => void;
  announce: (message: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [options, setOptions] = useState<AccessibilityOptions>({});
  const [manager, setManager] = useState<AccessibilityManager | null>(null);

  useEffect(() => {
    const accessibilityManager = AccessibilityManager.getInstance();
    setManager(accessibilityManager);
    setOptions(accessibilityManager.getOptions());
  }, []);

  const announce = (message: string) => {
    if (typeof document === 'undefined') return;
    
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  };

  const setHighContrast = (enabled: boolean) => {
    if (manager) {
      manager.setHighContrast(enabled);
      setOptions(manager.getOptions());
    }
  };

  const setLargeText = (enabled: boolean) => {
    if (manager) {
      manager.setLargeText(enabled);
      setOptions(manager.getOptions());
    }
  };

  const setReducedMotion = (enabled: boolean) => {
    if (manager) {
      manager.setReducedMotion(enabled);
      setOptions(manager.getOptions());
    }
  };

  const setScreenReaderMode = (enabled: boolean) => {
    if (manager) {
      manager.setScreenReaderMode(enabled);
      setOptions(manager.getOptions());
    }
  };

  return (
    <AccessibilityContext.Provider
      value={{
        options,
        setHighContrast,
        setLargeText,
        setReducedMotion,
        setScreenReaderMode,
        announce,
      }}
    >
      {children}
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link"
        style={{
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        onFocus={(e) => {
          e.target.style.position = 'absolute';
          e.target.style.left = '6px';
          e.target.style.top = '7px';
          e.target.style.width = 'auto';
          e.target.style.height = 'auto';
          e.target.style.overflow = 'visible';
          e.target.style.zIndex = '999999';
          e.target.style.padding = '8px 16px';
          e.target.style.background = '#000';
          e.target.style.color = '#fff';
          e.target.style.textDecoration = 'none';
          e.target.style.borderRadius = '4px';
        }}
        onBlur={(e) => {
          e.target.style.position = 'absolute';
          e.target.style.left = '-10000px';
          e.target.style.top = 'auto';
          e.target.style.width = '1px';
          e.target.style.height = '1px';
          e.target.style.overflow = 'hidden';
        }}
      >
        Skip to main content
      </a>
      
      {/* Live region for announcements */}
      <div
        id="aria-live-region"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      
      {/* Screen reader only styles */}
      <style jsx global>{`
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
        
        /* High contrast mode styles */
        .high-contrast {
          --text-color: #000000;
          --background-color: #ffffff;
          --border-color: #000000;
          --link-color: #0000ff;
          --visited-link-color: #800080;
        }
        
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--background-color) !important;
          border-color: var(--border-color) !important;
        }
        
        .high-contrast a {
          color: var(--link-color) !important;
        }
        
        .high-contrast a:visited {
          color: var(--visited-link-color) !important;
        }
        
        /* Large text mode styles */
        .large-text {
          font-size: 120% !important;
          line-height: 1.6 !important;
        }
        
        .large-text * {
          font-size: inherit !important;
          line-height: inherit !important;
        }
        
        /* Reduced motion styles */
        .reduced-motion,
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Screen reader mode styles */
        .screen-reader-mode {
          --focus-outline: 3px solid #005fcc;
        }
        
        .screen-reader-mode *:focus {
          outline: var(--focus-outline) !important;
          outline-offset: 2px !important;
        }
        
        /* Focus indicators */
        *:focus {
          outline: 2px solid #005fcc;
          outline-offset: 2px;
        }
        
        /* Button focus styles */
        button:focus,
        [role="button"]:focus {
          outline: 2px solid #005fcc;
          outline-offset: 2px;
        }
        
        /* Link focus styles */
        a:focus {
          outline: 2px solid #005fcc;
          outline-offset: 2px;
          text-decoration: underline;
        }
        
        /* Form element focus styles */
        input:focus,
        textarea:focus,
        select:focus {
          outline: 2px solid #005fcc;
          outline-offset: 2px;
          border-color: #005fcc;
        }
        
        /* High contrast focus indicators */
        .high-contrast *:focus {
          outline: 3px solid #000000 !important;
          outline-offset: 2px !important;
        }
        
        /* Ensure interactive elements are large enough */
        button,
        [role="button"],
        a,
        input,
        textarea,
        select {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Improve readability */
        p, li, td, th {
          line-height: 1.5;
        }
        
        /* Ensure sufficient color contrast */
        @media (prefers-contrast: high) {
          :root {
            --text-color: #000000;
            --background-color: #ffffff;
            --border-color: #000000;
            --link-color: #0000ff;
          }
        }
        
        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </AccessibilityContext.Provider>
  );
};
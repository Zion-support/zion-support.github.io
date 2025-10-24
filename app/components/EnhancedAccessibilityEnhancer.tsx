'use client';

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, EyeOff, Volume2, VolumeX, Type, MousePointer, Keyboard, Headphones } from 'lucide-react';

interface EnhancedAccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableVoiceNavigation?: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableVoiceNavigation = true
}) => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    highContrast: false,
    reducedMotion: false,
    fontSize: 16,
    screenReaderMode: false,
    voiceNavigation: false,
    keyboardNavigation: true
  });

  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    // Initialize accessibility features
    const initializeAccessibility = () => {
      // Check for system preferences
      if (typeof window !== 'undefined') {
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        setAccessibilitySettings(prev => ({
          ...prev,
          highContrast: prefersHighContrast,
          reducedMotion: prefersReducedMotion
        }));

        // Apply initial settings
        if (prefersHighContrast) {
          document.documentElement.classList.add('high-contrast');
        }
        if (prefersReducedMotion) {
          document.documentElement.classList.add('reduced-motion');
        }
      }
    };

    initializeAccessibility();

    // Set up keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && e.altKey) {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            announce('Skipped to main content');
          }
        }
        
        // Toggle high contrast
        if (e.key === 'c' && e.ctrlKey && e.altKey) {
          e.preventDefault();
          toggleHighContrast();
        }
        
        // Toggle reduced motion
        if (e.key === 'm' && e.ctrlKey && e.altKey) {
          e.preventDefault();
          toggleReducedMotion();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  const announce = (message: string) => {
    setAnnouncements(prev => [...prev, message]);
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1));
    }, 3000);
  };

  const toggleHighContrast = () => {
    const newValue = !accessibilitySettings.highContrast;
    setAccessibilitySettings(prev => ({ ...prev, highContrast: newValue }));
    document.documentElement.classList.toggle('high-contrast');
    announce(newValue ? 'High contrast enabled' : 'High contrast disabled');
  };

  const toggleReducedMotion = () => {
    const newValue = !accessibilitySettings.reducedMotion;
    setAccessibilitySettings(prev => ({ ...prev, reducedMotion: newValue }));
    document.documentElement.classList.toggle('reduced-motion');
    announce(newValue ? 'Reduced motion enabled' : 'Reduced motion disabled');
  };

  const adjustFontSize = (size: number) => {
    setAccessibilitySettings(prev => ({ ...prev, fontSize: size }));
    document.documentElement.style.fontSize = `${size}px`;
    announce(`Font size set to ${size} pixels`);
  };

  const toggleScreenReaderMode = () => {
    const newValue = !accessibilitySettings.screenReaderMode;
    setAccessibilitySettings(prev => ({ ...prev, screenReaderMode: newValue }));
    announce(newValue ? 'Screen reader mode enabled' : 'Screen reader mode disabled');
  };

  const toggleVoiceNavigation = () => {
    const newValue = !accessibilitySettings.voiceNavigation;
    setAccessibilitySettings(prev => ({ ...prev, voiceNavigation: newValue }));
    announce(newValue ? 'Voice navigation enabled' : 'Voice navigation disabled');
  };

  return (
    <>
      <Helmet>
        <title>Enhanced Accessibility | Zion Tech Group</title>
        <meta name="description" content="Advanced accessibility features for inclusive web experiences." />
      </Helmet>

      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Accessibility</h3>
        
        <div className="flex flex-col gap-2">
          <button
            onClick={toggleHighContrast}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              accessibilitySettings.highContrast 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle high contrast mode"
          >
            {accessibilitySettings.highContrast ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            High Contrast
          </button>
          
          <button
            onClick={toggleReducedMotion}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              accessibilitySettings.reducedMotion 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle reduced motion"
          >
            {accessibilitySettings.reducedMotion ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            Reduced Motion
          </button>
          
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4 text-gray-600" />
            <button
              onClick={() => adjustFontSize(Math.max(12, accessibilitySettings.fontSize - 2))}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs font-medium min-w-[2rem] text-center">
              {accessibilitySettings.fontSize}px
            </span>
            <button
              onClick={() => adjustFontSize(Math.min(24, accessibilitySettings.fontSize + 2))}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
          
          {enableScreenReaderSupport && (
            <button
              onClick={toggleScreenReaderMode}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                accessibilitySettings.screenReaderMode 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle screen reader mode"
            >
              <MousePointer className="w-4 h-4" />
              Screen Reader
            </button>
          )}
          
          {enableVoiceNavigation && (
            <button
              onClick={toggleVoiceNavigation}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                accessibilitySettings.voiceNavigation 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle voice navigation"
            >
              <Headphones className="w-4 h-4" />
              Voice Nav
            </button>
          )}
        </div>
      </div>

      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Screen reader announcements */}
      <div
        id="screen-reader-announcements"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Main content */}
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>

      {/* Accessibility styles */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Enhanced focus styles */
        *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;
        }
        
        /* Skip link styles */
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
        
        /* Screen reader only content */
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
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
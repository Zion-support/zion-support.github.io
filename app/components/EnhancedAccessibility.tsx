'use client';

import React, { useEffect, useState } from 'react';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw, Eye, EyeOff, Volume2, VolumeX } from 'lucide-react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isScreenReaderMode, setIsScreenReaderMode] = useState(false);

  useEffect(() => {
    // Add high contrast mode support
    const addHighContrastSupport = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        const handleContrastChange = (e: MediaQueryListEvent) => {
          if (e.matches) {
            document.documentElement.classList.add('high-contrast');
            setIsHighContrast(true);
          } else {
            document.documentElement.classList.remove('high-contrast');
            setIsHighContrast(false);
          }
        };
        mediaQuery.addEventListener('change', handleContrastChange);
        handleContrastChange(mediaQuery as any);

        return () => mediaQuery.removeEventListener('change', handleContrastChange);
      }
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleMotionChange = (e: MediaQueryListEvent) => {
          if (e.matches) {
            document.documentElement.classList.add('reduced-motion');
            setIsReducedMotion(true);
          } else {
            document.documentElement.classList.remove('reduced-motion');
            setIsReducedMotion(false);
          }
        };
        mediaQuery.addEventListener('change', handleMotionChange);
        handleMotionChange(mediaQuery as any);

        return () => mediaQuery.removeEventListener('change', handleMotionChange);
      }
    };

    const cleanupContrast = addHighContrastSupport();
    const cleanupMotion = addReducedMotionSupport();

    return () => {
      cleanupContrast?.();
      cleanupMotion?.();
    };
  }, []);

  const toggleHighContrast = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('high-contrast');
      setIsHighContrast(!isHighContrast);
    }
  };

  const toggleReducedMotion = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('reduced-motion');
      setIsReducedMotion(!isReducedMotion);
    }
  };

  const adjustFontSize = (size: number) => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.fontSize = `${size}px`;
      setFontSize(size);
    }
  };

  const toggleScreenReaderMode = () => {
    setIsScreenReaderMode(!isScreenReaderMode);
  };

  return (
    <>
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={toggleHighContrast}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors"
          title="Toggle High Contrast"
          aria-label="Toggle High Contrast Mode"
        >
          {isHighContrast ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
        
        <button
          onClick={toggleReducedMotion}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors"
          title="Toggle Reduced Motion"
          aria-label="Toggle Reduced Motion Mode"
        >
          {isReducedMotion ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2">
          <button
            onClick={() => adjustFontSize(Math.max(12, fontSize - 2))}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <span className="text-sm font-medium min-w-[2rem] text-center">{fontSize}px</span>
          <button
            onClick={() => adjustFontSize(Math.min(24, fontSize + 2))}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            aria-label="Increase font size"
          >
            A+
          </button>
        </div>
        
        <button
          onClick={toggleScreenReaderMode}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors"
          title="Toggle Screen Reader Mode"
          aria-label="Toggle Screen Reader Mode"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Screen reader announcements */}
      {isScreenReaderMode && (
        <div
          id="screen-reader-announcements"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        />
      )}

      {/* Main content */}
      <div id="main-content">
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
        
        /* Focus styles */
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
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
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibility;
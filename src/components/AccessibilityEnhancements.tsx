import React, { memo, useEffect, useState } from 'react';

interface AccessibilityEnhancementsProps {
  children: React.ReactNode;
}

const AccessibilityEnhancements = memo<AccessibilityEnhancementsProps>(({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Load saved font size
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    // Font size
    root.style.setProperty('--accessibility-font-size', `${fontSize}px`);
    
    // High contrast
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content (Alt + M)
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Skip to navigation (Alt + N)
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          const firstLink = nav.querySelector('a') as HTMLElement;
          if (firstLink) {
            firstLink.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {children}
      
      {/* Skip links */}
      <div className="sr-only focus-within:not-sr-only">
        <a 
          href="#main-content" 
          className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <a 
          href="#navigation" 
          className="absolute top-4 left-32 bg-blue-600 text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to navigation
        </a>
      </div>
      
      {/* Accessibility controls */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
          <button
            onClick={() => {
              const newSize = Math.min(24, Math.max(12, fontSize + 2));
              setFontSize(newSize);
              localStorage.setItem('accessibility-font-size', newSize.toString());
            }}
            className="block w-full px-3 py-2 text-sm text-white hover:bg-white/20 rounded mb-1"
            title="Increase font size"
          >
            A+
          </button>
          <button
            onClick={() => {
              const newSize = Math.min(24, Math.max(12, fontSize - 2));
              setFontSize(newSize);
              localStorage.setItem('accessibility-font-size', newSize.toString());
            }}
            className="block w-full px-3 py-2 text-sm text-white hover:bg-white/20 rounded mb-1"
            title="Decrease font size"
          >
            A-
          </button>
          <button
            onClick={() => setIsHighContrast(!isHighContrast)}
            className={`block w-full px-3 py-2 text-sm rounded ${
              isHighContrast 
                ? 'bg-blue-600 text-white' 
                : 'text-white hover:bg-white/20'
            }`}
            title="Toggle high contrast"
          >
            C
          </button>
        </div>
      </div>
      
      <style jsx>{`
        :root {
          --accessibility-font-size: ${fontSize}px;
        }
        
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: var(--tw-bg-opacity) !important;
          color: var(--tw-text-opacity) !important;
          border-color: currentColor !important;
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
      `}</style>
    </>
  );
});

AccessibilityEnhancements.displayName = 'AccessibilityEnhancements';

export default AccessibilityEnhancements;
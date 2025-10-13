import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const checkPreferences = () => {
      // High contrast preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true);
      }

      // Reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIsReducedMotion(true);
      }

      // Font size preference
      const savedFontSize = localStorage.getItem('fontSize');
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize));
      }
    };

    checkPreferences();

    // Listen for changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size adjustment
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          e.preventDefault();
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && !e.shiftKey && e.target === document.body) {
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstFocusable = navigation.querySelector('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (firstFocusable) {
            (firstFocusable as HTMLElement).focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focus-visible');
      
      // Announce page changes for screen readers
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
        const pageTitle = target.textContent || target.getAttribute('aria-label') || 'Link';
        announceToScreenReader(`Navigating to ${pageTitle}`);
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return (
    <>
      {children}
      
      {/* Skip links */}
      <div className="sr-only focus-within:not-sr-only">
        <a
          href="#main-content"
          className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="absolute top-4 left-32 bg-purple-500 text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Skip to navigation
        </a>
      </div>

      {/* Accessibility controls */}
      <div className="fixed top-4 right-4 z-40">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-2 text-white text-xs">
          <button
            onClick={() => {
              const newSize = fontSize === 16 ? 18 : fontSize === 18 ? 20 : 16;
              setFontSize(newSize);
              localStorage.setItem('fontSize', newSize.toString());
            }}
            className="block w-full text-left px-2 py-1 hover:bg-cyan-500/20 rounded"
            aria-label={`Current font size: ${fontSize}px. Click to change.`}
          >
            Font: {fontSize}px
          </button>
          <button
            onClick={() => setIsHighContrast(!isHighContrast)}
            className="block w-full text-left px-2 py-1 hover:bg-cyan-500/20 rounded"
            aria-label={`High contrast mode: ${isHighContrast ? 'on' : 'off'}. Click to toggle.`}
          >
            High Contrast: {isHighContrast ? 'On' : 'Off'}
          </button>
        </div>
      </div>

      {/* Screen reader only content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Advanced AI and IT Solutions</h1>
        <p>Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.</p>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
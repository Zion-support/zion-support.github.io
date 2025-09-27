import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancementsProps {
  children: React.ReactNode;
}

const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({ children }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);
    
    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    
    mediaQuery.addEventListener('change', handleMotionChange);
    highContrastQuery.addEventListener('change', handleContrastChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility preferences
    const root = document.documentElement;
    
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--animation-iteration-count', '1');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--animation-iteration-count');
    }
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    root.style.fontSize = `${fontSize}px`;
  }, [isReducedMotion, isHighContrast, fontSize]);

  // Keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusable = Array.from(document.querySelectorAll(focusableElements)) as HTMLElement[];
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];
        
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, []);

  return (
    <div 
      className={`accessibility-enhanced ${isReducedMotion ? 'reduced-motion' : ''} ${isHighContrast ? 'high-contrast' : ''}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {children}
      
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="skip-link focus:not-sr-only"
        onFocus={(e) => e.target.classList.add('focus:not-sr-only')}
        onBlur={(e) => e.target.classList.remove('focus:not-sr-only')}
      >
        Skip to main content
      </a>
      
      {/* Accessibility controls */}
      <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        <button
          onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
          className="accessibility-btn"
          aria-label="Increase font size"
        >
          A+
        </button>
        <button
          onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
          className="accessibility-btn"
          aria-label="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="accessibility-btn"
          aria-label="Toggle high contrast"
        >
          {isHighContrast ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityEnhancements;
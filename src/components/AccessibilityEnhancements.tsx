import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancementsProps {
  children: React.ReactNode;
}

const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  useEffect(() => {
    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);
    
    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(reducedMotionQuery.matches);
    
    // Listen for preference changes
    const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    
    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    
    // Keyboard navigation detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardNavigation(true);
      }
    };
    
    const handleMouseDown = () => {
      setIsKeyboardNavigation(false);
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    // Load saved preferences
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }
    
    // Apply initial styles
    applyAccessibilityStyles();
    
    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  useEffect(() => {
    applyAccessibilityStyles();
  }, [isHighContrast, isReducedMotion, fontSize, isKeyboardNavigation]);

  const applyAccessibilityStyles = () => {
    const root = document.documentElement;
    
    // Apply high contrast styles
    if (isHighContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--background-color', '#000000');
      root.style.setProperty('--border-color', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--background-color');
      root.style.removeProperty('--border-color');
      root.style.removeProperty('--accent-color');
    }
    
    // Apply reduced motion styles
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }
    
    // Apply font size
    root.style.setProperty('--base-font-size', `${fontSize}px`);
    
    // Apply keyboard navigation styles
    if (isKeyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  const resetFontSize = () => {
    setFontSize(16);
    localStorage.removeItem('accessibility-font-size');
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

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

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyboardShortcuts = (e: KeyboardEvent) => {
      // Alt + 1: Increase font size
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        increaseFontSize();
        announceToScreenReader(`Font size increased to ${fontSize + 2} pixels`);
      }
      
      // Alt + 2: Decrease font size
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        decreaseFontSize();
        announceToScreenReader(`Font size decreased to ${fontSize - 2} pixels`);
      }
      
      // Alt + 3: Reset font size
      if (e.altKey && e.key === '3') {
        e.preventDefault();
        resetFontSize();
        announceToScreenReader('Font size reset to default');
      }
      
      // Alt + 4: Toggle high contrast
      if (e.altKey && e.key === '4') {
        e.preventDefault();
        toggleHighContrast();
        announceToScreenReader(`High contrast ${isHighContrast ? 'disabled' : 'enabled'}`);
      }
    };
    
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    };
  }, [fontSize, isHighContrast]);

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls">
        <button
          onClick={increaseFontSize}
          className="accessibility-btn"
          title="Increase font size (Alt + 1)"
          aria-label="Increase font size"
        >
          A+
        </button>
        <button
          onClick={decreaseFontSize}
          className="accessibility-btn"
          title="Decrease font size (Alt + 2)"
          aria-label="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={resetFontSize}
          className="accessibility-btn"
          title="Reset font size (Alt + 3)"
          aria-label="Reset font size"
        >
          A
        </button>
        <button
          onClick={toggleHighContrast}
          className="accessibility-btn"
          title="Toggle high contrast (Alt + 4)"
          aria-label="Toggle high contrast"
        >
          {isHighContrast ? '🌙' : '☀️'}
        </button>
      </div>
      
      {/* Screen reader only content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility enhancements loaded. Use Alt + 1 to 4 for quick controls.
      </div>
    </>
  );
};

export default AccessibilityEnhancements;
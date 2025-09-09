import React, { createContext, useContext, useEffect, useRef } from 'react';

const AccessibilityContext = createContext();

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

export function AccessibilityProvider({ children }) {
  const focusableElementsRef = useRef([]);
  const lastFocusedElementRef = useRef(null);

  // Focus management
  const trapFocus = (containerRef) => {
    const focusableElements = containerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements?.length) {
      focusableElements[0]?.focus();
    }
  };

  const restoreFocus = () => {
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (event) => {
    // Skip to main content
    if (event.key === 'Tab' && event.altKey) {
      event.preventDefault();
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Escape key handling
    if (event.key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
        if (closeButton) {
          closeButton.click();
        }
      }
    }
  };

  // Announce changes to screen readers
  const announceToScreenReader = (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // High contrast mode
  const [isHighContrast, setIsHighContrast] = React.useState(false);
  
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
    announceToScreenReader(`High contrast mode ${!isHighContrast ? 'enabled' : 'disabled'}`);
  };

  // Font size adjustment
  const [fontSize, setFontSize] = React.useState(100);
  
  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
      document.documentElement.style.fontSize = `${fontSize + 10}%`;
      announceToScreenReader(`Font size increased to ${fontSize + 10}%`);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
      document.documentElement.style.fontSize = `${fontSize - 10}%`;
      announceToScreenReader(`Font size decreased to ${fontSize - 10}%`);
    }
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
    announceToScreenReader('Font size reset to default');
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    // Initialize focus management
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusableElementsRef.current = Array.from(focusableElements);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const value = {
    trapFocus,
    restoreFocus,
    announceToScreenReader,
    toggleHighContrast,
    isHighContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    fontSize
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

// Accessibility toolbar component
export function AccessibilityToolbar() {
  const {
    toggleHighContrast,
    isHighContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    fontSize
  } = useAccessibility();

  return (
    <div 
      className="fixed top-20 right-4 z-40 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg p-3 shadow-xl"
      role="toolbar"
      aria-label="Accessibility options"
    >
      <div className="flex flex-col gap-2">
        <button
          onClick={toggleHighContrast}
          className="p-2 text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors"
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          title={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        </button>
        
        <div className="flex flex-col gap-1">
          <button
            onClick={increaseFontSize}
            className="p-1 text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors"
            aria-label="Increase font size"
            title="Increase font size"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
          </button>
          
          <button
            onClick={decreaseFontSize}
            className="p-1 text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors"
            aria-label="Decrease font size"
            title="Decrease font size"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <button
            onClick={resetFontSize}
            className="p-1 text-zion-cyan hover:bg-zion-cyan/10 rounded transition-colors"
            aria-label="Reset font size"
            title="Reset font size"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
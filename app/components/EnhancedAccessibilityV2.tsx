import React, { useEffect, useState, useCallback } from 'react';

interface EnhancedAccessibilityV2Props {
  children: React.ReactNode;
}

const EnhancedAccessibilityV2: React.FC<EnhancedAccessibilityV2Props> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [focusVisible, setFocusVisible] = useState(false);

  // Check for user preferences
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply accessibility preferences
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    root.style.setProperty('--font-size', `${fontSize}px`);
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const { key, ctrlKey, altKey, shiftKey, target } = event;
    const element = target as HTMLElement;

    // Skip to main content (Alt + M)
    if (altKey && key === 'm') {
      event.preventDefault();
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Skip to navigation (Alt + N)
    if (altKey && key === 'n') {
      event.preventDefault();
      const navigation = document.querySelector('nav');
      if (navigation) {
        const firstLink = navigation.querySelector('a') as HTMLElement;
        if (firstLink) {
          firstLink.focus();
        }
      }
    }

    // Skip to footer (Alt + F)
    if (altKey && key === 'f') {
      event.preventDefault();
      const footer = document.querySelector('footer');
      if (footer) {
        footer.focus();
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Toggle high contrast (Alt + H)
    if (altKey && key === 'h') {
      event.preventDefault();
      setIsHighContrast(prev => !prev);
    }

    // Increase font size (Alt + Plus)
    if (altKey && key === '+') {
      event.preventDefault();
      setFontSize(prev => Math.min(prev + 2, 24));
    }

    // Decrease font size (Alt + Minus)
    if (altKey && key === '-') {
      event.preventDefault();
      setFontSize(prev => Math.max(prev - 2, 12));
    }

    // Reset font size (Alt + 0)
    if (altKey && key === '0') {
      event.preventDefault();
      setFontSize(16);
    }

    // Focus management for modals and dropdowns
    if (key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
        if (closeButton) {
          closeButton.focus();
        }
      }
    }

    // Arrow key navigation for custom components
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const currentIndex = Array.from(focusableElements).indexOf(element);
      
      if (currentIndex !== -1) {
        let nextIndex = currentIndex;
        
        if (key === 'ArrowDown' || key === 'ArrowRight') {
          nextIndex = (currentIndex + 1) % focusableElements.length;
        } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
          nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
        }
        
        const nextElement = focusableElements[nextIndex] as HTMLElement;
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  }, []);

  // Focus management
  const handleFocusIn = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    
    if (target && target.scrollIntoView) {
      // Smooth scroll to focused element
      target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
    }

    // Add focus indicator
    setFocusVisible(true);
    target.classList.add('focus-visible');
  }, []);

  const handleFocusOut = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    target.classList.remove('focus-visible');
    setFocusVisible(false);
  }, []);

  // Set up event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [handleKeyDown, handleFocusIn, handleFocusOut]);

  // Announce page changes to screen readers
  useEffect(() => {
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${document.title}`;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    announcePageChange();
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
        aria-label="Skip to main content (Alt + M)"
      >
        Skip to main content
      </a>
      
      {/* Accessibility controls */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 z-50 space-x-2">
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="bg-purple-500 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
          aria-label={`Toggle high contrast mode (Alt + H). Currently ${isHighContrast ? 'on' : 'off'}`}
        >
          High Contrast
        </button>
        
        <button
          onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
          className="bg-green-500 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
          aria-label="Increase font size (Alt + Plus)"
        >
          A+
        </button>
        
        <button
          onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
          className="bg-green-500 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
          aria-label="Decrease font size (Alt + Minus)"
        >
          A-
        </button>
        
        <button
          onClick={() => setFontSize(16)}
          className="bg-green-500 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
          aria-label="Reset font size (Alt + 0)"
        >
          A
        </button>
      </div>

      {/* Screen reader announcements */}
      <div
        id="announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Focus indicator styles */}
      <style jsx>{`
        .focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        
        .high-contrast {
          --bg-primary: #000000;
          --bg-secondary: #ffffff;
          --text-primary: #ffffff;
          --text-secondary: #000000;
          --accent: #ffff00;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
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
        
        .sr-only:focus {
          position: fixed;
          top: 0;
          left: 0;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
          background: var(--accent, #06b6d4);
          color: var(--text-primary, #000000);
          z-index: 9999;
        }
      `}</style>

      {children}
    </>
  );
};

export default EnhancedAccessibilityV2;
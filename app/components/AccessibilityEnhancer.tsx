<<<<<<< HEAD
'use client'
import React, { useEffect, useState } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    
    if (prefersHighContrast) {
      setIsHighContrast(true)
      document.documentElement.classList.add('high-contrast')
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion')
    }

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLink = document.querySelector('.skip-to-main')
        if (skipLink && document.activeElement === document.body) {
          (skipLink as HTMLElement).focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast)
    if (isHighContrast) {
      document.documentElement.classList.remove('high-contrast')
    } else {
      document.documentElement.classList.add('high-contrast')
    }
  }

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
  }

  const resetFontSize = () => {
    setFontSize(16)
    document.documentElement.style.fontSize = '16px'
  }

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
      <h3 className="text-sm font-semibold mb-2 text-gray-700">Accessibility</h3>
      
      <div className="space-y-2">
        <button
          onClick={toggleHighContrast}
          className="block w-full text-left px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
          aria-label="Toggle high contrast mode"
        >
          {isHighContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseFontSize}
            className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <span className="text-xs text-gray-500">{fontSize}px</span>
          <button
            onClick={increaseFontSize}
            className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            aria-label="Increase font size"
          >
            A+
          </button>
          <button
            onClick={resetFontSize}
            className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded"
            aria-label="Reset font size"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityEnhancer
=======
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.top = '0';
    skipLink.style.zIndex = '9999';
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.left = '16px';
      skipLink.style.top = '16px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.left = '-9999px';
      skipLink.style.top = '0';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }

    // Add focus management for modals and dropdowns
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open modals or dropdowns
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add high contrast mode detection
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const updateHighContrast = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', updateHighContrast);
    updateHighContrast({ matches: prefersHighContrast.matches } as MediaQueryListEvent);

    // Add reduced motion detection
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    prefersReducedMotion.addEventListener('change', updateReducedMotion);
    updateReducedMotion({ matches: prefersReducedMotion.matches } as MediaQueryListEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      prefersHighContrast.removeEventListener('change', updateHighContrast);
      prefersReducedMotion.removeEventListener('change', updateReducedMotion);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
>>>>>>> cursor/analyze-improve-and-deploy-application-c354

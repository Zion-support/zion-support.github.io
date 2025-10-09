import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(100);

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

    // Keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const skipLink = document.querySelector('.skip-link') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Increase font size with Ctrl/Cmd + Plus
      if ((e.ctrlKey || e.metaKey) && e.key === '=') {
        e.preventDefault();
        setFontSize(prev => Math.min(prev + 10, 200));
      }

      // Decrease font size with Ctrl/Cmd + Minus
      if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        setFontSize(prev => Math.max(prev - 10, 50));
      }

      // Reset font size with Ctrl/Cmd + 0
      if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        setFontSize(100);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableContent = document.querySelectorAll(focusableElements);
    
    // Add focus indicators
    focusableContent.forEach(element => {
      element.classList.add('keyboard-focus');
    });

    // Announce page changes for screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has loaded';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    announcePageChange();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    root.style.fontSize = `${fontSize}%`;
  }, [isReducedMotion, isHighContrast, fontSize]);

  return (
    <div 
      className={`accessibility-enhanced ${isReducedMotion ? 'reduced-motion' : ''} ${isHighContrast ? 'high-contrast' : ''}`}
      style={{ fontSize: `${fontSize}%` }}
    >
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-white text-sm font-bold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={() => setFontSize(prev => Math.min(prev + 10, 200))}
            className="text-xs bg-blue-600 text-white px-2 py-1 rounded mr-1"
            aria-label="Increase font size"
          >
            A+
          </button>
          <button
            onClick={() => setFontSize(prev => Math.max(prev - 10, 50))}
            className="text-xs bg-blue-600 text-white px-2 py-1 rounded mr-1"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <button
            onClick={() => setFontSize(100)}
            className="text-xs bg-gray-600 text-white px-2 py-1 rounded"
            aria-label="Reset font size"
          >
            Reset
          </button>
        </div>
        <div className="mt-2">
          <label className="flex items-center text-white text-xs">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={(e) => setIsHighContrast(e.target.checked)}
              className="mr-2"
            />
            High Contrast
          </label>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
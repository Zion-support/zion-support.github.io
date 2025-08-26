import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');

    setIsReducedMotion(prefersReducedMotion.matches);
    setIsHighContrast(prefersHighContrast.matches);

    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    prefersHighContrast.addEventListener('change', handleContrastChange);

    // Apply accessibility features
    applyAccessibilityFeatures();

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
      prefersHighContrast.removeEventListener('change', handleContrastChange);
    };
  }, []);

  const applyAccessibilityFeatures = () => {
    // Add skip links
    addSkipLinks();
    
    // Enhance focus management
    enhanceFocusManagement();
    
    // Add ARIA landmarks
    addARIALandmarks();
    
    // Enhance form accessibility
    enhanceFormAccessibility();
  };

  const addSkipLinks = () => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50';
    skipLinks.innerHTML = `
      <a href="#main-content" class="block px-4 py-2 bg-zion-cyan text-black font-bold rounded hover:bg-zion-cyan-light">
        Skip to main content
      </a>
      <a href="#navigation" class="block px-4 py-2 bg-zion-cyan text-black font-bold rounded hover:bg-zion-cyan-light mt-2">
        Skip to navigation
      </a>
    `;
    
    if (!document.querySelector('.skip-links')) {
      skipLinks.classList.add('skip-links');
      document.body.insertBefore(skipLinks, document.body.firstChild);
    }
  };

  const enhanceFocusManagement = () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 3px solid #22ddd2 !important;
        outline-offset: 2px !important;
      }
      
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
      
      .sr-only:focus {
        position: static !important;
        width: auto !important;
        height: auto !important;
        padding: 0.5rem !important;
        margin: 0 !important;
        overflow: visible !important;
        clip: auto !important;
        white-space: normal !important;
      }
    `;
    
    if (!document.querySelector('#accessibility-styles')) {
      style.id = 'accessibility-styles';
      document.head.appendChild(style);
    }
  };

  const addARIALandmarks = () => {
    // Add main landmark
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.getAttribute('id')) {
      mainContent.setAttribute('id', 'main-content');
      mainContent.setAttribute('role', 'main');
      mainContent.setAttribute('aria-label', 'Main content');
    }

    // Add navigation landmark
    const navigation = document.querySelector('nav');
    if (navigation && !navigation.getAttribute('id')) {
      navigation.setAttribute('id', 'navigation');
      navigation.setAttribute('role', 'navigation');
      navigation.setAttribute('aria-label', 'Main navigation');
    }

    // Add banner landmark
    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    // Add contentinfo landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  };

  const enhanceFormAccessibility = () => {
    // Add labels to form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const label = input.getAttribute('aria-label');
      
      if (!id && !label) {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
          input.setAttribute('aria-label', placeholder);
        }
      }
    });

    // Add error handling
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      if (!form.getAttribute('aria-live')) {
        form.setAttribute('aria-live', 'polite');
      }
    });
  };

  // Keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('role') === 'dialog') {
          activeElement.blur();
        }
      }

      // Tab key enhancements
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        if (e.shiftKey && document.activeElement === focusableElements[0]) {
          e.preventDefault();
          (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === focusableElements[focusableElements.length - 1]) {
          e.preventDefault();
          (focusableElements[0] as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Apply CSS custom properties for accessibility
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.style.setProperty('--zion-cyan', '#00ffff');
      root.style.setProperty('--zion-purple', '#ff00ff');
      root.style.setProperty('--zion-slate', '#000000');
    } else {
      root.style.setProperty('--zion-cyan', '#22ddd2');
      root.style.setProperty('--zion-purple', '#8c15e9');
      root.style.setProperty('--zion-slate', '#17072b');
    }

    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
      root.style.setProperty('--transition-duration', '0.2s');
    }

    root.style.setProperty('--font-size-base', `${fontSize}px`);
  }, [isHighContrast, isReducedMotion, fontSize]);

  return (
    <>
      {children}
      
      {/* Accessibility Controls - Only visible when focused */}
      <div className="fixed top-4 right-4 z-50 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity">
        <div className="bg-black/90 text-white p-4 rounded-lg shadow-lg">
          <h3 className="font-bold mb-3">Accessibility</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Font Size</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="px-2 py-1 bg-zion-cyan text-black rounded text-xs"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <span className="text-sm">{fontSize}px</span>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="px-2 py-1 bg-zion-cyan text-black rounded text-xs"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>
            
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isHighContrast}
                  onChange={(e) => setIsHighContrast(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">High Contrast</span>
              </label>
            </div>
            
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isReducedMotion}
                  onChange={(e) => setIsReducedMotion(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Reduced Motion</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
import React, { useEffect, useCallback, useState } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
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

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    highContrastQuery.addEventListener('change', handleContrastChange);

    // Check for font size preference
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.setProperty('--accessibility-font-size', `${fontSize}px`);
    
    // Apply high contrast styles
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply reduced motion styles
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply focus visible styles
    if (focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [isHighContrast, isReducedMotion, fontSize, focusVisible]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip to main content
    if (event.key === 'Tab' && event.shiftKey && event.altKey) {
      event.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Toggle focus visible mode
    if (event.key === 'Tab') {
      setFocusVisible(true);
    }
  }, []);

  // Handle mouse interactions
  const handleMouseDown = useCallback(() => {
    setFocusVisible(false);
  }, []);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  }, [fontSize]);

  const decreaseFontSize = useCallback(() => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  }, [fontSize]);

  const resetFontSize = useCallback(() => {
    setFontSize(16);
    localStorage.removeItem('accessibility-font-size');
  }, []);

  // Add event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);

  // Add skip links
  useEffect(() => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);

    return () => {
      if (document.querySelector('.skip-links')) {
        document.querySelector('.skip-links')?.remove();
      }
    };
  }, []);

  // Add accessibility controls
  useEffect(() => {
    const controls = document.createElement('div');
    controls.className = 'accessibility-controls';
    controls.innerHTML = `
      <div class="accessibility-panel">
        <h3>Accessibility Options</h3>
        <div class="control-group">
          <label for="font-size">Font Size:</label>
          <button id="decrease-font" aria-label="Decrease font size">A-</button>
          <span id="font-size-display">${fontSize}px</span>
          <button id="increase-font" aria-label="Increase font size">A+</button>
          <button id="reset-font" aria-label="Reset font size">Reset</button>
        </div>
        <div class="control-group">
          <label>
            <input type="checkbox" id="high-contrast" ${isHighContrast ? 'checked' : ''}>
            High Contrast
          </label>
        </div>
        <div class="control-group">
          <label>
            <input type="checkbox" id="reduced-motion" ${isReducedMotion ? 'checked' : ''}>
            Reduced Motion
          </label>
        </div>
      </div>
    `;
    
    document.body.appendChild(controls);

    // Add event listeners for controls
    const decreaseFontBtn = document.getElementById('decrease-font');
    const increaseFontBtn = document.getElementById('increase-font');
    const resetFontBtn = document.getElementById('reset-font');
    const highContrastCheckbox = document.getElementById('high-contrast') as HTMLInputElement;
    const reducedMotionCheckbox = document.getElementById('reduced-motion') as HTMLInputElement;

    decreaseFontBtn?.addEventListener('click', decreaseFontSize);
    increaseFontBtn?.addEventListener('click', increaseFontSize);
    resetFontBtn?.addEventListener('click', resetFontSize);
    
    highContrastCheckbox?.addEventListener('change', (e) => {
      setIsHighContrast((e.target as HTMLInputElement).checked);
    });
    
    reducedMotionCheckbox?.addEventListener('change', (e) => {
      setIsReducedMotion((e.target as HTMLInputElement).checked);
    });

    return () => {
      if (document.querySelector('.accessibility-controls')) {
        document.querySelector('.accessibility-controls')?.remove();
      }
    };
  }, [fontSize, isHighContrast, isReducedMotion, decreaseFontSize, increaseFontSize, resetFontSize]);

  // Add ARIA landmarks
  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Add focus management
  useEffect(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          const focusableContent = modal.querySelectorAll(focusableElements);
          const firstFocusableElement = focusableContent[0] as HTMLElement;
          const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, []);

  return (
    <>
      <style jsx>{`
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }

        .skip-link:focus {
          top: 6px;
        }

        .accessibility-controls {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
        }

        .accessibility-panel {
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 20px;
          border-radius: 8px;
          min-width: 250px;
          font-size: 14px;
        }

        .accessibility-panel h3 {
          margin: 0 0 15px 0;
          font-size: 16px;
        }

        .control-group {
          margin-bottom: 15px;
        }

        .control-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .control-group button {
          background: #007bff;
          color: white;
          border: none;
          padding: 5px 10px;
          margin: 0 5px;
          border-radius: 4px;
          cursor: pointer;
        }

        .control-group button:hover {
          background: #0056b3;
        }

        .control-group input[type="checkbox"] {
          margin-right: 8px;
        }

        /* High contrast styles */
        :global(.high-contrast) {
          filter: contrast(150%) brightness(120%);
        }

        :global(.high-contrast) * {
          border-color: currentColor !important;
        }

        /* Reduced motion styles */
        :global(.reduced-motion) * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Focus visible styles */
        :global(.focus-visible) *:focus {
          outline: 2px solid #007bff !important;
          outline-offset: 2px !important;
        }

        /* Font size adjustment */
        :global(html) {
          font-size: var(--accessibility-font-size, 16px);
        }
      `}</style>
      {children}
    </>
  );
};

export default EnhancedAccessibility;
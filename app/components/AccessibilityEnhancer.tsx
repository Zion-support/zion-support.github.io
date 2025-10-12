'use client';
import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }

    if (prefersHighContrast) {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('#skip-to-main') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Escape key to close modals
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            (modal as HTMLElement).click();
          }
        });
      }
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }
        .skip-link:focus {
          top: 6px;
        }
        .high-contrast {
          filter: contrast(150%) brightness(120%);
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
      `;
      document.head.appendChild(style);
    };

    // Add skip link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.id = 'skip-to-main';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Initialize accessibility features
    addFocusIndicators();
    addSkipLink();
    addAriaLandmarks();
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg">
      <div className="flex flex-col space-y-2">
        <button
          onClick={increaseFontSize}
          className="px-3 py-1 bg-cyan-500 text-white rounded text-sm hover:bg-cyan-600"
          aria-label="Increase font size"
        >
          A+
        </button>
        <button
          onClick={decreaseFontSize}
          className="px-3 py-1 bg-cyan-500 text-white rounded text-sm hover:bg-cyan-600"
          aria-label="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={toggleHighContrast}
          className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
          aria-label="Toggle high contrast"
        >
          {isHighContrast ? 'Normal' : 'High Contrast'}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
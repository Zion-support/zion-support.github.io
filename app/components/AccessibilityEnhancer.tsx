import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const existingSkipLink = document.getElementById('skip-link');
      if (existingSkipLink) return;

      const skipLink = document.createElement('a');
      skipLink.id = 'skip-link';
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.zIndex = '9999';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
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
        
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const enhanceAccessibility = () => {
      // Add aria-labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add role to navigation elements
      const navElements = document.querySelectorAll('nav:not([role])');
      navElements.forEach(nav => {
        nav.setAttribute('role', 'navigation');
      });

      // Add role to main content
      const mainElement = document.querySelector('main:not([role])');
      if (mainElement) {
        mainElement.setAttribute('role', 'main');
      }
    };

    // Initialize accessibility enhancements
    addSkipLink();
    addFocusStyles();
    enhanceAccessibility();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
        
        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation textarea:focus,
        .keyboard-navigation select:focus {
          box-shadow: 0 0 0 2px #8b5cf6 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
=======
  useEffect(() => {
    // Apply accessibility preferences
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
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1'
    );
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
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
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d

<<<<<<< HEAD
<<<<<<< HEAD
    return () => {
<<<<<<< HEAD
      focusableElements.forEach(element => {
        element.removeEventListener('focus', handleFocus);
        element.removeEventListener('blur', handleBlur);
=======
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`);
        }

      });
=======
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
    };

    // Initialize accessibility enhancements
    addSkipLink();
    addFocusStyles();
    addAriaLandmarks();
    addAltText();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

<<<<<<< HEAD
  return null;
=======
  return (
    <>
      <style jsx global>{`
        :root {
          --font-size-multiplier: 1;
        }

        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }

        .high-contrast .bg-slate-900 {
          background-color: #000000 !important;
        }

        .high-contrast .text-white {
          color: #ffffff !important;
        }

        .high-contrast .text-gray-300 {
          color: #ffffff !important;
        }

        .high-contrast .border-slate-600 {
          border-color: #ffffff !important;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* Skip to content link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #3b82f6;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }

        .skip-link:focus {
          top: 6px;
        }

        /* Font size adjustments */
        .font-size-small {
          font-size: calc(0.9rem * var(--font-size-multiplier));
        }

        .font-size-normal {
          font-size: calc(1rem * var(--font-size-multiplier));
        }

        .font-size-large {
          font-size: calc(1.2rem * var(--font-size-multiplier));
        }

        .font-size-extra-large {
          font-size: calc(1.4rem * var(--font-size-multiplier));
        }
      `}</style>
      
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="skip-link"
        onFocus={(e) => e.target.style.top = '6px'}
        onBlur={(e) => e.target.style.top = '-40px'}
      >
        Skip to main content
      </a>

      {children}
    </>
  );
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
};

export default AccessibilityEnhancer;
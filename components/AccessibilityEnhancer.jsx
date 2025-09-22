import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    // Check user preferences
    const checkUserPreferences = () => {
      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setReducedMotion(true);
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      }

      // Check for high contrast preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true);
        document.documentElement.classList.add('high-contrast');
      }

      // Check for large text preference
      if (window.matchMedia('(prefers-reduced-data: reduce)').matches) {
        setFontSize('large');
        document.documentElement.classList.add('large-text');
      }
    };

    checkUserPreferences();

    // Add keyboard navigation enhancements
    const handleKeyDown = (e) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key to close modals
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.style.display !== 'none') {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
          }
        });
      }
    };

    // Add focus visible styles
    const handleFocusIn = (e) => {
      setFocusVisible(true);
      e.target.classList.add('focus-visible');
    };

    const handleFocusOut = (e) => {
      setFocusVisible(false);
      e.target.classList.remove('focus-visible');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

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

    addAriaLandmarks();

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#services" class="skip-link">Skip to services</a>
        <a href="#contact" class="skip-link">Skip to contact</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Add accessibility styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        font-weight: bold;
        z-index: 1001;
        border-radius: 0 0 4px 0;
        transform: translateY(-100%);
        transition: transform 0.3s;
      }
      
      .skip-link:focus {
        transform: translateY(0);
      }
      
      .focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .high-contrast {
        --text-color: #000;
        --bg-color: #fff;
        --border-color: #000;
      }
      
      .high-contrast * {
        color: var(--text-color) !important;
        background-color: var(--bg-color) !important;
        border-color: var(--border-color) !important;
      }
      
      .large-text {
        font-size: 1.2em;
      }
      
      .large-text h1 { font-size: 2.5em; }
      .large-text h2 { font-size: 2em; }
      .large-text h3 { font-size: 1.75em; }
      .large-text p { font-size: 1.1em; }
      
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* High contrast mode */
      @media (prefers-contrast: high) {
        .bg-gradient-to-r {
          background: #000 !important;
          color: #fff !important;
        }
        
        .text-gray-300 {
          color: #fff !important;
        }
        
        .border-white\\/10 {
          border-color: #fff !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add accessibility controls
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleFontSize = () => {
    const sizes = ['normal', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    const newSize = sizes[nextIndex];
    
    setFontSize(newSize);
    document.documentElement.className = document.documentElement.className
      .replace(/font-size-\w+/g, '')
      .replace(/large-text|extra-large-text/g, '');
    
    if (newSize !== 'normal') {
      document.documentElement.classList.add(`${newSize}-text`);
    }
  };

  // Add accessibility toolbar
  const AccessibilityToolbar = () => (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-2 rounded-lg">
      <div className="flex flex-col space-y-2">
        <button
          onClick={toggleHighContrast}
          className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded"
          aria-label="Toggle high contrast mode"
        >
          {isHighContrast ? 'Normal' : 'High Contrast'}
        </button>
        <button
          onClick={toggleFontSize}
          className="px-3 py-1 text-xs bg-green-600 hover:bg-green-700 rounded"
          aria-label="Toggle font size"
        >
          Font: {fontSize}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {process.env.NODE_ENV === 'development' && <AccessibilityToolbar />}
    </>
  );
};

export default AccessibilityEnhancer;
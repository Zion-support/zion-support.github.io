import React, { useEffect, useState } from 'react';

const EnhancedAccessibility: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility enhancements
    const applyAccessibilityEnhancements = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #8b5cf6;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
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
          padding: 8px;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    applyAccessibilityEnhancements();

    // Listen for preference changes
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    motionMediaQuery.addEventListener('change', handleMotionChange);
    contrastMediaQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionMediaQuery.removeEventListener('change', handleMotionChange);
      contrastMediaQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.style.setProperty('--tw-bg-opacity', '1');
      document.documentElement.style.setProperty('--tw-text-opacity', '1');
    }

    // Apply reduced motion
    if (isReducedMotion) {
      document.documentElement.style.setProperty('--tw-transition-duration', '0ms');
      document.documentElement.style.setProperty('--tw-animate-duration', '0ms');
    }
  }, [isHighContrast, isReducedMotion]);

  useEffect(() => {
    // Apply font size changes
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + M: Skip to main content
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Alt + H: Go to home
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        window.location.href = '/';
      }

      // Alt + C: Go to contact
      if (event.altKey && event.key === 'c') {
        event.preventDefault();
        window.location.href = '/contact';
      }

      // Alt + S: Go to services
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        window.location.href = '/services';
      }

      // Ctrl + Plus: Increase font size
      if (event.ctrlKey && event.key === '=') {
        event.preventDefault();
        setFontSize(prev => Math.min(prev + 2, 24));
      }

      // Ctrl + Minus: Decrease font size
      if (event.ctrlKey && event.key === '-') {
        event.preventDefault();
        setFontSize(prev => Math.max(prev - 2, 12));
      }

      // Ctrl + 0: Reset font size
      if (event.ctrlKey && event.key === '0') {
        event.preventDefault();
        setFontSize(16);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
};

export default EnhancedAccessibility;

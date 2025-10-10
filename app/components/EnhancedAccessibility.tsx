'use client';

import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  enableReducedMotion?: boolean;
  enableHighContrast?: boolean;
  enableFocusVisible?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  enableReducedMotion = true,
  enableHighContrast = true,
  enableFocusVisible = true
}) => {
  useEffect(() => {
    // Reduced motion support
    if (enableReducedMotion) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      // Set initial state
      handleMotionChange(mediaQuery);
      
      // Listen for changes
      mediaQuery.addEventListener('change', handleMotionChange);
      
      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    }
  }, [enableReducedMotion]);

  useEffect(() => {
    // High contrast support
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      // Set initial state
      handleContrastChange(mediaQuery);
      
      // Listen for changes
      mediaQuery.addEventListener('change', handleContrastChange);
      
      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus visible support
    if (enableFocusVisible) {
      const addFocusVisibleStyles = () => {
        const style = document.createElement('style');
        style.id = 'focus-visible-styles';
        style.textContent = `
          .js-focus-visible :focus:not(.focus-visible) {
            outline: none;
          }
          
          .js-focus-visible .focus-visible {
            outline: 2px solid #06b6d4;
            outline-offset: 2px;
          }
          
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
          
          @media (prefers-contrast: high) {
            .cyber-card, .quantum-card, .hologram-card {
              border: 2px solid currentColor !important;
            }
            
            .cyber-button, .quantum-button {
              border: 2px solid currentColor !important;
            }
          }
        `;
        document.head.appendChild(style);
      };

      addFocusVisibleStyles();

      // Add focus-visible polyfill behavior
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('js-focus-visible');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('js-focus-visible');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableFocusVisible]);

  useEffect(() => {
    // Add ARIA landmarks
    const addAriaLandmarks = () => {
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
    };

    addAriaLandmarks();

    // Re-run when DOM changes
    const observer = new MutationObserver(addAriaLandmarks);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default EnhancedAccessibility;
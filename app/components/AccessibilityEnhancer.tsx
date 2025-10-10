'use client';
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode toggle
    const addHighContrastToggle = () => {
      const toggle = document.createElement('button');
      toggle.textContent = 'Toggle High Contrast';
      toggle.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
      });
      document.body.appendChild(toggle);
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.body.classList.add('reduce-motion');
      }
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    };

    addHighContrastToggle();
    addReducedMotionSupport();
    addFocusIndicators();
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
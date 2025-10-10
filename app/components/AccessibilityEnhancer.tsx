'use client';

import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
<<<<<<< HEAD
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlind: false,
    dyslexia: false
=======
    fontSize: 'medium',
    focusVisible: true
  });
>>>>>>> cursor/analyze-improve-and-deploy-application-87e5

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to the document
    const root = document.documentElement;

    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

<<<<<<< HEAD
    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Color blind support
    if (newSettings.colorBlind) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.classList.add('dyslexia-support');
    } else {
      root.classList.remove('dyslexia-support');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));

    }, []);

  // Initialize accessibility settings
=======
  // Add CSS for accessibility features
>>>>>>> cursor/analyze-improve-and-deploy-application-87e5
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* High contrast mode */
      .high-contrast {
        --neon-cyan: #00ffff;
        --neon-purple: #ff00ff;
        --neon-pink: #ff0080;
        --neon-green: #00ff00;
        --neon-orange: #ff8000;
        --neon-red: #ff0040;
        --neon-yellow: #ffff00;
        --neon-blue: #0080ff;
      }

      .high-contrast .neon-text {
        text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
      }

      .high-contrast .cyber-card {
        border-width: 2px;
        border-color: var(--neon-cyan);
      }

      .high-contrast .cyber-button {
        border-width: 2px;
        border-color: var(--neon-cyan);
      }

      /* Reduced motion */
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      /* Font size adjustments */
      .font-small {
        font-size: 0.875rem;
      }

      .font-medium {
        font-size: 1rem;
      }

      .font-large {
        font-size: 1.125rem;
      }

      /* Focus visible improvements */
      .focus-visible *:focus {
        outline: 2px solid var(--neon-cyan);
        outline-offset: 2px;
      }

      .focus-visible .cyber-button:focus {
        box-shadow: 0 0 0 2px var(--neon-cyan);
      }

      /* Skip link */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--neon-cyan);
        color: #000;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        font-weight: bold;
      }

      .skip-link:focus {
        top: 6px;
      }

      /* Screen reader only content */
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

      /* High contrast text */
      .high-contrast .text-gray-300 {
        color: #ffffff !important;
      }

      .high-contrast .text-gray-400 {
        color: #cccccc !important;
      }

      .high-contrast .text-gray-500 {
        color: #999999 !important;
      }

      /* High contrast backgrounds */
      .high-contrast .bg-slate-800 {
        background-color: #000000 !important;
      }

      .high-contrast .bg-slate-900 {
        background-color: #000000 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
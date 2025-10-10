'use client';
import React, { useEffect, useCallback } from 'react';
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
}
/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true
}) => {
  // Add skip links
  useEffect(() => {
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableSkipLinks]);
  // Add keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (enableKeyboardNav) {
      // Handle keyboard navigation
      if (event.key === 'Tab') {
        // Ensure focus indicators are visible
        document.body.classList.add('keyboard-navigation');
      }
    }
  }, [enableKeyboardNav]);
  useEffect(() => {
    if (enableKeyboardNav) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNav, handleKeyDown]);
  // Add focus indicators
  useEffect(() => {
    if (enableFocusIndicators) {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        .focus-visible:focus {
          outline: 2px solid #00ffff;
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
        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableFocusIndicators]);

  // Add screen reader support
  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
      
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableScreenReaderSupport]);

  // Add high contrast support
  useEffect(() => {
    if (enableHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .high-contrast {
            --text-primary: #ffffff;
            --text-secondary: #e5e5e5;
            --bg-primary: #000000;
            --bg-secondary: #1a1a1a;
            --accent: #00ffff;
          }
          
          .high-contrast .cyber-card,
          .high-contrast .hologram-card,
          .high-contrast .quantum-card {
            border: 2px solid var(--accent);
            background: var(--bg-secondary);
            color: var(--text-primary);
          }
          
          .high-contrast .neon-text {
            color: var(--accent);
            text-shadow: 0 0 10px var(--accent);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableHighContrast]);

  return <>{children}</>;
};
export default AccessibilityEnhancer;
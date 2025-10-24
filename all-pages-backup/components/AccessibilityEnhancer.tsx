<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
"use client"

import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  useEffect(() => {
    // Accessibility enhancements
    if (typeof window !== 'undefined') {
      // Add skip to content link
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)

      // Add main content ID
      const main = document.querySelector('main')
      if (main && !main.id) {
        main.id = 'main-content'
      }

      return () => {
        const existingSkipLink = document.querySelector('a[href="#main-content"]')
        if (existingSkipLink) {
          existingSkipLink.remove()
        }
      }
    }
  }, [])
;
  return <>{children}</>};
'use client';
import { useEffect } from 'react';
=======
'use client'
import Navigation from './Navigation';
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/AccessibilityEnhancer.tsx

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation support
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {;
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' })}
      }

      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a') as HTMLElement
          if (firstLink) {
            firstLink.focus()}
=======
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {;
          const mainContent = document.querySelector('main, [role=&quot;main&quot;]');
          if (mainContent) {
            (mainContent as HTMLElement).focus();
            event.preventDefault();
          }
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/AccessibilityEnhancer.tsx
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
      document.removeEventListener('keydown', handleKeyDown)}}, []);
=======
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/AccessibilityEnhancer.tsx

  useEffect(() => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
      *:focus {
        outline: 2px solid #8b5cf6 !important
        outline-offset: 2px !important
=======
      *:focus {;
        outline: 2px solid #8b5cf6 !important;
        outline-offset: 2px !important;
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/AccessibilityEnhancer.tsx
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')}

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')}
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Add high contrast support
    if (enableHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
          * {
            border-color: currentColor !important
=======
          * {;
            border-color: currentColor !important;
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/AccessibilityEnhancer.tsx
          }
          button, a {
            border: 2px solid currentColor !important
          }
        }
      `;
      document.head.appendChild(style)}
  }, [enableHighContrast]);

  useEffect(() => {
    // Add focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])';
      
      .sr-only {
        position: absolute,
  width: 1px,
  height: 1px,
  padding: 0,
  margin: -1px,
  overflow: hidden,
  clip: rect(0, 0, 0, 0);
        white-space: nowrap,
  border: 0
      }
      
      .high-contrast {
        filter: contrast(150%)}
      
      .reduce-motion * {
        animation-duration: 0.01ms !important
        animation-iteration-count: 1 !important
        transition-duration: 0.01ms !important
      }
    `;
    document.head.appendChild(style);

    return () => {
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
      document.head.removeChild(style)}}, []);
=======
      document.head.removeChild(style);
    }
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/AccessibilityEnhancer.tsx

      // Apply focus trapping to modals
      const modals = document.querySelectorAll('[role=&quot;dialog&quot;]');
      modals.forEach(trapFocus);
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
  useEffect(() => {
    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main')}
=======
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/AccessibilityEnhancer.tsx

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation')}

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo')}
  }, []);

<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
  return <>{children}</>};

export default AccessibilityEnhancer
=======
  return <>{children}</>
}
export default AccessibilityEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/AccessibilityEnhancer.tsx

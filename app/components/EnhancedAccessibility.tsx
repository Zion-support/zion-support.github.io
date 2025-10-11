<<<<<<< HEAD
'use client';
=======
<<<<<<< HEAD
'use client';
import React, { useEffect, useState } from 'react';
>>>>>>> origin/main

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

<<<<<<< HEAD
=======
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false
  });
=======
'use client'
import React, { useEffect } from 'react'
>>>>>>> origin/main

>>>>>>> origin/main
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
<<<<<<< HEAD
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    document.documentElement.style.fontSize = `${settings.fontSize}px`;

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
=======
    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-contrast: high) {
          .text-gray-300 { color: #ffffff !important; }
          .text-gray-400 { color: #e5e7eb !important; }
          .bg-slate-800 { background-color: #000000 !important; }
          .border-gray-700 { border-color: #ffffff !important; }
        }
      `
      document.head.appendChild(style)
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style')
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
      `
      document.head.appendChild(style)
    }

    // Add screen reader support
    const addScreenReaderSupport = () => {
      // Add skip links
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])')
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')
        }
      })

      const links = document.querySelectorAll('a:not([aria-label])')
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link')
        }
      })
    }

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation')
        }
      })

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation')
      })
    }

    // Initialize all accessibility features
    addHighContrastSupport()
    addReducedMotionSupport()
    addFocusIndicators()
    addScreenReaderSupport()
    addKeyboardNavigation()

    // Re-run screen reader support when DOM changes
    const observer = new MutationObserver(() => {
      addScreenReaderSupport()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
>>>>>>> origin/main
    }
  }, [])

<<<<<<< HEAD
  return <>{children}</>;
};
=======
  return <>{children}</>
}
>>>>>>> origin/main

<<<<<<< HEAD
export default EnhancedAccessibility;
=======
export default EnhancedAccessibility
>>>>>>> origin/main

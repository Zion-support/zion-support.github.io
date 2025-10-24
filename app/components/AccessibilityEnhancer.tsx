<<<<<<< HEAD
'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableVoiceNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  enableVoiceNavigation = false
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    }

    if (enableScreenReaderSupport) {
      // Add screen reader support
      const skipLinks = document.querySelectorAll('[data-skip-link]');
      skipLinks.forEach(link => {
        link.setAttribute('tabindex', '0');
      });
    }

    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    if (enableFocusManagement) {
      // Focus management
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach(element => {
        element.setAttribute('tabindex', '0');
      });
    }

    if (enableVoiceNavigation) {
      // Voice navigation support
      const voiceElements = document.querySelectorAll('[data-voice-command]');
      voiceElements.forEach(element => {
        element.setAttribute('aria-label', element.textContent || '');
      });
    }

    return () => {
      // Cleanup
      document.body.classList.remove('keyboard-navigation');
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement, enableVoiceNavigation]);

  return (
    <div
      className={`accessibility-enhancer ${
        enableHighContrast ? 'high-contrast' : ''
      }`}
      role="main"
      aria-label="Enhanced accessibility container"
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
=======
'use client'
import Navigation from './Navigation'
import React, { useEffect } from 'react'
interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
}
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true
  enableScreenReaderSupport = true
  enableHighContrast = true
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return
    // Add keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const mainContent = document.querySelector('main, [role=&quot;main&quot;]')
          if (mainContent) {
            (mainContent as HTMLElement).focus()
            event.preventDefault()
          }
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return (
    <>
      ) => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [enableKeyboardNavigation])
  useEffect(() => {
    // Add screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild)
      // Add ARIA landmarks
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
      }
      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
      }
      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }
  }, [enableScreenReaderSupport])
  useEffect(() => {
  // Add high contrast support
    if (enableHighContrast) {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important
  }
          button, a {
  border: 2px solid currentColor !important
  }
        }
      `
      document.head.appendChild(style)
    }
  }, [enableHighContrast])
  useEffect(() => {
    // Add focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])'
      const trapFocus = (element: HTMLElement) => {
        const focusableContent = element.querySelectorAll(focusableElements)
        const firstFocusableElement = focusableContent[0] as HTMLElement
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement
        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus()
                e.preventDefault()
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus()
                e.preventDefault()
              }
            }
          }
        })
      }
      // Apply focus trapping to modals
      const modals = document.querySelectorAll('[role=&quot;dialog&quot;]')
      modals.forEach(trapFocus)
    }
  }, [enableFocusManagement]
    </>
  )
  return null
}
export default AccessibilityEnhancer
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)

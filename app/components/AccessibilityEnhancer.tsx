<<<<<<< HEAD
=======
'use client';

import React, { useEffect } from 'react';
>>>>>>> cursor/website-audit-and-update-with-deployment-635f

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  children
}) => {

  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
  useEffect(() => {
    if (typeof window === 'undefined') return;


      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Add screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLinks = document.createElement('div');
      skipLinks.className = 'sr-only';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.id = 'main-content';
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.id = 'navigation';
      }

      // Add live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    }
  }, [enableKeyboardNavigation]);

};

export default AccessibilityEnhancer;
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
'use client'
import React, { useEffect } from 'react'

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50'
      skipLink.setAttribute('tabindex', '1')
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
        main.setAttribute('aria-label', 'Main content')
      }

      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
        nav.setAttribute('aria-label', 'Main navigation')
      }

      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form')
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select')
        inputs.forEach((input, index) => {
          const inputElement = input as HTMLInputElement
          
          // Add ARIA labels if missing
          if (!inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`)
            if (label) {
              inputElement.setAttribute('aria-labelledby', label.id || `label-${index}`)
              if (!label.id) {
                label.id = `label-${index}`
              }
            }
          }

          // Add required indicator
          if (inputElement.required && !inputElement.getAttribute('aria-required')) {
            inputElement.setAttribute('aria-required', 'true')
          }

          // Add error handling
          if (inputElement.hasAttribute('aria-invalid')) {
            const errorId = `error-${inputElement.id || index}`
            inputElement.setAttribute('aria-describedby', errorId)
          }
        })
      })
    }

    // Add focus management
    const addFocusManagement = () => {
      // Trap focus in modals
      const modals = document.querySelectorAll('[role="dialog"]')
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus()
                e.preventDefault()
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus()
                e.preventDefault()
              }
            }
          }
        }

        modal.addEventListener('keydown', handleTabKey)
      })
    }

    // Add keyboard navigation
    const addKeyboardNavigation = () => {
      // Add keyboard support for custom buttons
      const customButtons = document.querySelectorAll('[role="button"]')
      customButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            ;(button as HTMLElement).click()
          }
        })
      })
    }

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-contrast: high) {
          .bg-white\\/10 {
            background-color: rgba(255, 255, 255, 0.2) !important;
          }
          .text-gray-300 {
            color: #ffffff !important;
          }
          .border-gray-600 {
            border-color: #ffffff !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Initialize all enhancements
    addSkipLinks()
    addAriaLandmarks()
    enhanceFormAccessibility()
    addFocusManagement()
    addKeyboardNavigation()
    addHighContrastSupport()
    addReducedMotionSupport()

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLandmarks()
      enhanceFormAccessibility()
      addFocusManagement()
      addKeyboardNavigation()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return <>{children}</>
}

export default AccessibilityEnhancer
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-635f

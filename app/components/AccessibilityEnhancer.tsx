<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-aca8
'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add keyboard navigation support
      if (enableKeyboardNavigation) {
        document.body.classList.add('keyboard-navigation')
      }

      // Add screen reader support
      if (enableScreenReaderSupport) {
        // Add skip links
        const skipLinks = document.createElement('div')
        skipLinks.innerHTML = `
          <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50">
            Skip to main content
          </a>
        `
        document.body.insertBefore(skipLinks, document.body.firstChild)
      }

      // Add high contrast mode
      if (enableHighContrast) {
        document.body.classList.add('high-contrast')
      }

      // Add focus management
      if (enableFocusManagement) {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        const focusableContent = document.querySelectorAll(focusableElements)
        
        focusableContent.forEach(element => {
          element.addEventListener('focus', () => {
            element.classList.add('focus-visible')
          })
          element.addEventListener('blur', () => {
            element.classList.remove('focus-visible')
          })
        })
      }
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement])

  return <>{children}</>
}

export default AccessibilityEnhancer
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-635f

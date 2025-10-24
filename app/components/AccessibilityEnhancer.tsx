<<<<<<< HEAD
<<<<<<<< HEAD:app/components/AccessibilityEnhancer.tsx
'use client';
import Navigation from './Navigation';
import React, { useEffect } from 'react';
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
========
import Navigation from './Navigation'
import React, { useEffect } from 'react'
'use client'
    if (typeof window === 'undefined'
        if (event.key === 'Tab';
          const mainContent = document.querySelector('main, [role=&quot;main&quot;]'
      document.addEventListener('keydown'
      ) => document.removeEventListener('keydown'
      const skipLink = document.createElement('a'
>>>>>>>> origin/main:app-backup/components/AccessibilityEnhancer.tsx
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only "focus": not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50',
      const main = document.querySelector('main';
      if (main && !main.getAttribute('role'
        main.setAttribute('role', 'main'
      const nav = document.querySelector('nav';
      if (nav && !nav.getAttribute('role'
        nav.setAttribute('role', 'navigation'
      const footer = document.querySelector('footer';
      if (footer && !footer.getAttribute('role'
        footer.setAttribute('role', 'contentinfo'
      const style = document.createElement('style';
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])'
        element.addEventListener('keydown'
          if (e.key === 'Tab'
      const modals = document.querySelectorAll('[role=&quot;dialog&quot;]'
=======
'use client';
import React, { ReactNode, useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Ensure main content has proper ID
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Add keyboard navigation support
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
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
>>>>>>> origin/main

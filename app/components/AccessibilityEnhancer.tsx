import React, { useEffect } from 'react';

import React,{ useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Enhance accessibility features
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.altKey) {
          event.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  },[enableKeyboardNavigation, enableHighContrast]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader announcements
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live','polite');
        announcement.setAttribute('aria-atomic','true');
        announcement.className ='sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type==='childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode && addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`Page updated: ${heading.textContent}`);
              }
            }
          }
        });
      });

      // Add ARIA labels where needed
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        img.setAttribute('alt', '');
      });
    };

    enhanceAccessibility();

  useEffect(() => {
    if (enableFocusManagement) {
      // Focus management for modals and dropdowns
      const manageFocus = (event: FocusEvent) => {
        const target = event.target as Element;
        if (target && target.closest('[role="dialog"],[role="menu"],[role="listbox"]')) {
          const focusableElements = target.closest('[role="dialog"],[role="menu"],[role="listbox"]')?.querySelectorAll(
            'button,[href], input, select, textarea,[tabindex]:not([tabindex ="-1"])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (event.key ==='Tab') {
              if (event.shiftKey && target === firstElement) {
                event.preventDefault();
                lastElement.focus();
              } else if (!event.shiftKey && target === lastElement) {
                event.preventDefault();
                firstElement.focus();
              }
            }
          }
        }
      };

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
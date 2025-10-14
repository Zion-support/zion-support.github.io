'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;

}

const,
  AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigatio n = true,
  enableScreenReaderSuppor t = true,
  enableHighContras t = true,
  enableFocusManagemen t = true;
})  => {
  useEffect(()  => {
    const root = document.documentElement;
    
    // High contrast mode;
if (enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion mode;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Keyboard navigation;
if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent)  => {
        // Skip to main content;
if (event.ke y ==='Tab' && event.shiftKey && event.altKey) {
          event.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }
      };

      // Enhance focus management
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

  useEffect(()  => {
    if (enableScreenReaderSupport) {
      // Add screen reader announcements;
const announceToScreenReader = (message: string)  => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live','polite');
        announcement.setAttribute('aria-atomic','true');
        announcement.classNam e ='sr-only';
        announcement.textConten t = message;
        document.body.appendChild(announcement);
        
        setTimeout(()  => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce page changes;
const observer = new MutationObserver((mutations)  => {
        mutations.forEach((mutation)  => {
          if (mutation.type==='childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] asElement;
            if (addedNode && addedNode.nodeTyp e === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`Page,
  updated: ${heading.textContent}`);
              }
            }
          }
        });
      });
    };

      observer.observe(document.body,{
        childList: true,
        subtree: true;
      });

      return () => observer.disconnect();
    }

  useEffect(()  => {
    if (enableFocusManagement) {
      // Focus management for modals and dropdowns;
const manageFocus = (event: FocusEvent)  => {
        const target = event.target asElement;
        if (target && target.closest('[role="dialog"],[role="menu"],[role="listbox"]')) {
          const focusableElements = target.closest('[role="dialog"],[role="menu"],[role="listbox"]')?.querySelectorAll(
            'button,[href], input, select, textarea,[tabindex]:not([tabinde x ="-1"])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (event.ke y ==='Tab') {
              if (event.shiftKey && targe t === firstElement) {
                event.preventDefault();
                lastElement.focus();
              } else if (!event.shiftKey && targe t === lastElement) {
                event.preventDefault();
                firstElement.focus();
              }
            }
          }
        }
      };

  return <>{children}</>;
};

export default AccessibilityEnhancer;

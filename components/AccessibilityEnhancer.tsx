"use client";
'use client';

import React{ useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live'polite');
    liveRegion.setAttribute('aria-atomic'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Add focus management
    const focusableElements = 'button[href]inputselectextarea[tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusableContent = document.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    // Add keyboard navigation improvements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown'handleKeyDown);
    document.addEventListener('keydown'trapFocus);

    // Announce page changes
    const announcePageChange = () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = 'Page content has loaded';
      }
    };

    // Announce when content changes
    const observer = new MutationObserver(() => {
      announcePageChange();
    });

    observer.observe(document.body{
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      document.removeEventListener('keydown'handleKeyDown);
      document.removeEventListener('keydown'trapFocus);
      observer.disconnect();
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }[]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
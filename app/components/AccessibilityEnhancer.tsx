'use client';

import React from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

export default function AccessibilityEnhancer({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}: AccessibilityEnhancerProps) {
  React.useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #2563eb !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('id')) {
        main.id = 'main-content';
        main.setAttribute('role', 'main');
      }

      const header = document.querySelector('header');
      if (header) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer) {
        footer.setAttribute('role', 'contentinfo');
      }

      const nav = document.querySelector('nav');
      if (nav) {
        nav.setAttribute('role', 'navigation');
      }
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;
      
      document.addEventListener('keydown', (e) => {
        // Skip to main content with Enter key
        if (e.key === 'Enter' && e.target === document.querySelector('a[href="#main-content"]')) {
          const main = document.getElementById('main-content');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    };

    // Add screen reader announcements
    const addAnnouncementRegion = () => {
      if (!enableScreenReaderSupport) return;
      
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    };

    // Initialize accessibility enhancements
    addSkipLink();
    addFocusIndicators();
    addAriaLandmarks();
    addKeyboardNavigation();
    addAnnouncementRegion();

    // Cleanup
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport]);

  return <>{children}</>;
}
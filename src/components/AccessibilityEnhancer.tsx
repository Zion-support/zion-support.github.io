import React, { useState, useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastSupport?: boolean;
  enableReducedMotionSupport?: boolean;
}

export default function AccessibilityEnhancer({
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableScreenReaderSupport = true,
  enableHighContrastSupport = true,
  enableReducedMotionSupport = true
}: AccessibilityEnhancerProps): null {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // High contrast mode detection
    if (enableHighContrastSupport) {
      const isHighContrastMode = () => {
        return window.matchMedia('(forced-colors: active)').matches;
      };
      
      const mediaQuery = window.matchMedia('(forced-colors: active)');
      const handleChange = () => setIsHighContrast(isHighContrastMode());
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableHighContrastSupport]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Reduced motion detection
    if (enableReducedMotionSupport) {
      const prefersReducedMotion = () => {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      };
      
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleChange = () => setPrefersReduced(prefersReducedMotion());
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableReducedMotionSupport]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip links
    if (enableSkipLinks) {
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
        padding: 8px;
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
      
      return () => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      };
    }
  }, [enableSkipLinks]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Focus management
    if (enableFocusManagement) {
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
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Screen reader support
    if (enableScreenReaderSupport) {
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          if (announcement.parentNode) {
            announcement.parentNode.removeChild(announcement);
          }
        }, 1000);
      };

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`New section: ${heading.textContent}`);
              }
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Apply high contrast styles
    if (enableHighContrastSupport && isHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        * {
          background-color: ButtonFace !important;
          color: ButtonText !important;
        }
        a {
          text-decoration: underline !important;
        }
        button, input, select, textarea {
          border: 2px solid ButtonText !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    }
  }, [enableHighContrastSupport, isHighContrast]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Apply reduced motion styles
    if (enableReducedMotionSupport && prefersReduced) {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    }
  }, [enableReducedMotionSupport, prefersReduced]);

  return null;
}
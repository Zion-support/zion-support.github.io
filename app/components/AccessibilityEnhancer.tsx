'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Check for user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for high contrast preference
    if (enableHighContrast) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(highContrastQuery.matches);

      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
      };

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      return () => highContrastQuery.removeEventListener('change', handleHighContrastChange);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for reduced motion preference
    if (enableReducedMotion) {
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(reducedMotionQuery.matches);

      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };

      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
      return () => reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    }
  }, [enableReducedMotion]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          announce('Skipped to main content');
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          let nextIndex = currentIndex;
          
          switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
              nextIndex = (currentIndex + 1) % focusableElements.length;
              break;
            case 'ArrowUp':
            case 'ArrowLeft':
              nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
              break;
          }
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement || typeof window === 'undefined') return;

    const handleFocusIn = (event: FocusEvent) => {
      setFocusVisible(true);
      const target = event.target as HTMLElement;
      
      // Add focus ring
      target.classList.add('focus-visible');
      
      // Announce focus changes for screen readers
      if (enableScreenReader) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent?.trim() || 
                     target.tagName.toLowerCase();
        announce(`Focused on ${label}`);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement, enableScreenReader]);

  // Screen reader announcements
  const announce = useCallback((message: string) => {
    if (!enableScreenReader) return;
    
    setAnnouncements(prev => [...prev, message]);
    
    // Create live region for announcements
    const liveRegion = document.getElementById('a11y-live-region') || 
                      (() => {
                        const region = document.createElement('div');
                        region.id = 'a11y-live-region';
                        region.setAttribute('aria-live', 'polite');
                        region.setAttribute('aria-atomic', 'true');
                        region.className = 'sr-only';
                        document.body.appendChild(region);
                        return region;
                      })();
    
    liveRegion.textContent = message;
    
    // Clear after a delay
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  }, [enableScreenReader]);

  // Apply accessibility styles
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus visible mode
    if (focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [isHighContrast, isReducedMotion, focusVisible]);

  // Add skip links
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const skipLinks = document.getElementById('skip-links');
    if (!skipLinks) {
      const skipLinksDiv = document.createElement('div');
      skipLinksDiv.id = 'skip-links';
      skipLinksDiv.className = 'sr-only focus-within:not-sr-only';
      
      const links = [
        { href: '#main-content', text: 'Skip to main content' },
        { href: '#navigation', text: 'Skip to navigation' },
        { href: '#footer', text: 'Skip to footer' }
      ];
      
      links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        a.className = 'block p-2 bg-cyan-500 text-white focus:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300';
        skipLinksDiv.appendChild(a);
      });
      
      document.body.insertBefore(skipLinksDiv, document.body.firstChild);
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        /* High contrast mode */
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: var(--tw-bg-opacity) !important;
          color: var(--tw-text-opacity) !important;
          border-color: currentColor !important;
        }
        
        /* Reduced motion mode */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Focus visible */
        .focus-visible:focus {
          outline: 2px solid #0ea5e9 !important;
          outline-offset: 2px !important;
        }
        
        /* Screen reader only */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .sr-only.focus-within:not-sr-only {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
        
        /* Focus management */
        .focus-visible {
          outline: 2px solid #0ea5e9;
          outline-offset: 2px;
        }
        
        /* Skip links */
        #skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }
        
        #skip-links:focus-within {
          top: 6px;
        }
        
        /* ARIA live region */
        #a11y-live-region {
          position: absolute;
          left: -10000px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
      `}</style>
      
      {children}
      
      {/* Live region for announcements */}
      <div id="a11y-live-region" aria-live="polite" aria-atomic="true" className="sr-only" />
    </>
  );
};

export default AccessibilityEnhancer;
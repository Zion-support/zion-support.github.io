'use client';

import React, { useEffect, useState } from 'react';

interface AdvancedAccessibilityEnhancerProps {
  children: React.ReactNode;
}

export default function AdvancedAccessibilityEnhancer({ children }: AdvancedAccessibilityEnhancerProps) {
  const [isClient, setIsClient] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      // Check for reduced motion preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);

      // Check for high contrast preference
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      setHighContrast(highContrastQuery.matches);

      const handleContrastChange = (e: MediaQueryListEvent) => {
        setHighContrast(e.matches);
      };

      highContrastQuery.addEventListener('change', handleContrastChange);

      // Skip to main content functionality
      const skipToMain = () => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView();
        }
      };

      // Add skip to main button
      const skipButton = document.createElement('button');
      skipButton.textContent = 'Skip to main content';
      skipButton.className = 'sr-only focus:not-sr-only absolute top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded';
      skipButton.onclick = skipToMain;
      document.body.insertBefore(skipButton, document.body.firstChild);

      // Keyboard navigation enhancements
      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement && modal.style.display !== 'none') {
              modal.style.display = 'none';
              modal.setAttribute('aria-hidden', 'true');
            }
          });
        }

        // Tab navigation enhancement
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      // Focus management for dynamic content
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node instanceof HTMLElement) {
                // Auto-focus new interactive elements
                const interactiveElements = node.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (interactiveElements.length === 1) {
                  (interactiveElements[0] as HTMLElement).focus();
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Announce dynamic content changes
      const announceContent = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);

        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Make announcement function globally available
      (window as any).announceContent = announceContent;

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        highContrastQuery.removeEventListener('change', handleContrastChange);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
        observer.disconnect();
      };
    }
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <div 
      className={`accessibility-enhanced ${prefersReducedMotion ? 'reduce-motion' : ''} ${highContrast ? 'high-contrast' : ''}`}
      style={{
        '--motion-reduce': prefersReducedMotion ? 'none' : 'initial',
        '--contrast-high': highContrast ? 'contrast(150%)' : 'initial'
      } as React.CSSProperties}
    >
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only absolute top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Skip to main content
      </a>
      
      {children}
      
      {/* Screen reader announcements */}
      <div 
        id="announcements" 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      />
    </div>
  );
}
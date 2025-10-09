'use client';
import React, { useEffect, useCallback, useState } from 'react';

interface EnhancedAccessibilityProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
  enableAriaLive?: boolean;
  enableReducedMotion?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableSkipLinks = true,
  enableAriaLive = true,
  enableReducedMotion = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // High contrast mode
  useEffect(() => {
    if (enableHighContrast) {
      const checkHighContrast = () => {
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
        setIsHighContrast(prefersHighContrast);
        
        if (prefersHighContrast) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      checkHighContrast();
      
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      mediaQuery.addEventListener('change', checkHighContrast);
      
      return () => mediaQuery.removeEventListener('change', checkHighContrast);
    }
  }, [enableHighContrast]);

  // Reduced motion
  useEffect(() => {
    if (enableReducedMotion) {
      const checkReducedMotion = () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setIsReducedMotion(prefersReducedMotion);
        
        if (prefersReducedMotion) {
          document.documentElement.classList.add('reduced-motion');
        } else {
          document.documentElement.classList.remove('reduced-motion');
        }
      };

      checkReducedMotion();
      
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', checkReducedMotion);
      
      return () => mediaQuery.removeEventListener('change', checkReducedMotion);
    }
  }, [enableReducedMotion]);

  // Keyboard navigation
  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && document.activeElement === document.body) {
          const skipLink = document.querySelector('[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const activeModal = document.querySelector('.modal[aria-hidden="false"]');
          if (activeModal) {
            (activeModal as HTMLElement).setAttribute('aria-hidden', 'true');
            const trigger = document.querySelector('[aria-expanded="true"]');
            if (trigger) {
              (trigger as HTMLElement).focus();
            }
          }
        }

        // Arrow keys for navigation
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
          
          if (currentIndex !== -1) {
            const nextIndex = event.key === 'ArrowDown' 
              ? Math.min(currentIndex + 1, focusableElements.length - 1)
              : Math.max(currentIndex - 1, 0);
            
            (focusableElements[nextIndex] as HTMLElement).focus();
            event.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (enableFocusManagement) {
      const manageFocus = () => {
        // Trap focus in modals
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            const handleTabKey = (event: KeyboardEvent) => {
              if (event.key === 'Tab') {
                if (event.shiftKey) {
                  if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                  }
                } else {
                  if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                  }
                }
              }
            };
            
            modal.addEventListener('keydown', handleTabKey);
          }
        });
      };

      manageFocus();
    }
  }, [enableFocusManagement]);

  // Screen reader announcements
  const announce = useCallback((message: string) => {
    if (enableAriaLive) {
      setAnnouncements(prev => [...prev, message]);
      
      // Clear announcement after 5 seconds
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 5000);
    }
  }, [enableAriaLive]);

  // Expose announce function globally for use in components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).announceToScreenReader = announce;
    }
  }, [announce]);

  // Add ARIA landmarks
  useEffect(() => {
    if (enableScreenReader) {
      const addLandmarks = () => {
        // Add main landmark if not present
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        // Add navigation landmarks
        const navs = document.querySelectorAll('nav');
        navs.forEach((nav, index) => {
          if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
            nav.setAttribute('aria-label', `Navigation ${index + 1}`);
          }
        });

        // Add banner landmark
        const header = document.querySelector('header');
        if (header && !header.getAttribute('role')) {
          header.setAttribute('role', 'banner');
        }

        // Add contentinfo landmark
        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }

        // Add complementary landmarks
        const asides = document.querySelectorAll('aside');
        asides.forEach((aside, index) => {
          if (!aside.getAttribute('aria-label') && !aside.getAttribute('aria-labelledby')) {
            aside.setAttribute('aria-label', `Complementary content ${index + 1}`);
          }
        });
      };

      addLandmarks();
    }
  }, [enableScreenReader]);

  // Add skip links
  useEffect(() => {
    if (enableSkipLinks) {
      const addSkipLinks = () => {
        const skipLinks = [
          { href: '#main-content', text: 'Skip to main content' },
          { href: '#navigation', text: 'Skip to navigation' },
          { href: '#footer', text: 'Skip to footer' }
        ];

        const skipLinksContainer = document.createElement('div');
        skipLinksContainer.className = 'skip-links';
        skipLinksContainer.style.cssText = `
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        `;

        skipLinks.forEach(({ href, text }) => {
          const link = document.createElement('a');
          link.href = href;
          link.textContent = text;
          link.className = 'skip-link';
          link.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
          `;
          
          link.addEventListener('focus', () => {
            link.style.top = '6px';
          });
          
          link.addEventListener('blur', () => {
            link.style.top = '-40px';
          });
          
          skipLinksContainer.appendChild(link);
        });

        document.body.insertBefore(skipLinksContainer, document.body.firstChild);
      };

      addSkipLinks();
    }
  }, [enableSkipLinks]);

  return (
    <>
      {/* Screen reader announcements */}
      {enableAriaLive && (
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          style={{
            position: 'absolute',
            left: '-10000px',
            width: '1px',
            height: '1px',
            overflow: 'hidden'
          }}
        >
          {announcements.map((announcement, index) => (
            <div key={index}>{announcement}</div>
          ))}
        </div>
      )}

      {/* High contrast mode styles */}
      {enableHighContrast && (
        <style>
          {`
            .high-contrast {
              --neon-cyan: #00ffff;
              --neon-purple: #ffffff;
              --neon-pink: #ffffff;
              --neon-green: #00ff00;
              --neon-blue: #0080ff;
              --neon-orange: #ff8000;
              --neon-red: #ff0000;
              --cyber-bg: #000000;
              --cyber-surface: #ffffff;
              --cyber-border: #ffffff;
              --cyber-text: #ffffff;
              --cyber-text-secondary: #ffffff;
            }
            
            .high-contrast .cyber-card {
              border: 2px solid #ffffff;
              background: #000000;
              color: #ffffff;
            }
            
            .high-contrast .neon-text {
              color: #00ffff;
              text-shadow: 0 0 10px #00ffff;
            }
          `}
        </style>
      )}

      {/* Reduced motion styles */}
      {enableReducedMotion && (
        <style>
          {`
            .reduced-motion * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
            
            .reduced-motion .cyber-scan-line,
            .reduced-motion .neon-pulse,
            .reduced-motion .energy-pulse {
              animation: none !important;
            }
          `}
        </style>
      )}
    </>
  );
};

export default EnhancedAccessibility;
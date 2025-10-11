'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    // High contrast mode detection
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          setFocusVisible(true);
        }
      };

      const handleMouseDown = () => {
        setFocusVisible(false);
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
    // Skip to main content link
    if (enableKeyboardNavigation) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #06b6d4;
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
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader announcements
    if (enableScreenReaderSupport) {
      const announceToScreenReader = (message: string) => {
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

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3');
              if (heading) {
                announceToScreenReader(`Page updated: ${heading.textContent}`);
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

  return (
    <div
      className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${focusVisible ? 'focus-visible' : ''}`}
      style={{
        '--focus-ring': focusVisible ? '2px solid #06b6d4' : 'none',
        '--high-contrast-bg': isHighContrast ? '#000000' : 'transparent',
        '--high-contrast-text': isHighContrast ? '#ffffff' : 'inherit',
        '--high-contrast-border': isHighContrast ? '#ffffff' : 'transparent'
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
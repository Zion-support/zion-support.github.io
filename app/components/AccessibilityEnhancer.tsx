<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
'use client;

import React, { useEffect } from 'react;
=======
'use client';

import React, { useEffect } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac

interface AccessibilityEnhancerProps {}
  enableKeyboardNavigation?: boolean;

  enableScreenReaderSupport?: boolean;

  enableHighContrast?: boolean;

  enableFocusManagement?: boolean;

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
}

export default function AccessibilityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Accessibility enhancements
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });
=======
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
=======
import React, { useEffect } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
<<<<<<< HEAD
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
    };
    
    setIsHighContrast(highContrastQuery.matches);
    highContrastQuery.addEventListener('change', handleContrastChange);

<<<<<<< HEAD
        // Close dropdowns with Escape key
        if (event.key === 'Escape) {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true]);;

          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false);

          })        }

    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSettings(prev => ({ ...prev, reducedMotion: prefersReducedMotion }));

    // Apply settings
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings: AccessibilitySettings) => {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
=======
    // Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
    };
  }, []);

<<<<<<< HEAD
    // Screen reader enhancements
    const enhanceScreenReader = () => {
      if (!enableScreenReader) return;
      // Add live regions for dynamic content
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      return () => {
        const existingLiveRegion = document.getElementById('live-region');
        if (existingLiveRegion) {
          existingLiveRegion.remove();
        }
      };
=======
    // Add keyboard navigation improvements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink && document.activeElement === document.body) {
          (skipLink as HTMLElement).focus();
        }
      }

      // Close modals with Escape
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        });
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
    };

    // Add focus management for dropdowns
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Ensure dropdowns are properly managed
      if (target.hasAttribute('aria-expanded')) {
        const isExpanded = target.getAttribute('aria-expanded') === 'true';
        const menu = target.nextElementSibling as HTMLElement;
        
        if (menu && menu.hasAttribute('role')) {
          menu.setAttribute('aria-hidden', (!isExpanded).toString());
        }
      }
    };

    // Add ARIA live region for dynamic content
    const addLiveRegion = () => {
      if (!document.getElementById('aria-live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    // Announce page changes
    const announcePageChange = () => {
      const liveRegion = document.getElementById('aria-live-region');
      if (liveRegion) {
        const pageTitle = document.title;
        liveRegion.textContent = `Page loaded: ${pageTitle}`;
      }
    };

    // Add high contrast mode detection
    const handleHighContrastChange = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    // Add reduced motion detection
    const handleReducedMotionChange = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

<<<<<<< HEAD
    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setSettings(prev => ({ ...prev, focusVisible: true }));
        document.body.classList.add('keyboard-navigation');
      }
    };

=======
  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Skip to main content with Alt + M
    if (e.altKey && e.key === 'm') {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        (main as HTMLElement).focus();
        (main as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Skip to navigation with Alt + N
    if (e.altKey && e.key === 'n') {
      e.preventDefault();
      const nav = document.querySelector('nav');
      if (nav) {
        (nav as HTMLElement).focus();
        (nav as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Close modals/dropdowns with Escape
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
      modals.forEach((modal) => {
        const closeButton = modal.querySelector('[aria-label*="close" i], [aria-label*="dismiss" i]');
        if (closeButton) {
          (closeButton as HTMLElement).click();
        }
      });
    }
  }, []);

  useEffect(() => {
    if (!enableKeyboardNav) return;

    // Add keyboard navigation class on first keyboard use
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    // Remove keyboard navigation class on mouse use
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
    const handleMouseDown = () => {
      setSettings(prev => ({ ...prev, focusVisible: false }));
      document.body.classList.remove('keyboard-navigation');
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      skipLinks.className = 'skip-links';
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();

    // Cleanup
    return () => {
<<<<<<< HEAD
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };
  // Removed unused functions - functionality is handled by updateSetting directly
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed top-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        aria-label="Toggle accessibility settings"
        title="Accessibility Settings"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>
=======
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNav]);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74

      {/* Settings Panel */}
      <style dangerouslySetInnerHTML={{
        __html: `
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);

  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableHighContrast]);

<<<<<<< HEAD
  useEffect(() => {
    if (enableScreenReaderSupport) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #0891b2;
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
=======
  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
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
  }, []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74

      document.body.insertBefore(skipLink, document.body.firstChild);

      return () => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
=======
    // Initialize accessibility features
    addLiveRegion();
    handleHighContrastChange();
    handleReducedMotionChange();
    announcePageChange();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    
    const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    highContrastMedia.addEventListener('change', handleHighContrastChange);
    reducedMotionMedia.addEventListener('change', handleReducedMotionChange);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      highContrastMedia.removeEventListener('change', handleHighContrastChange);
      reducedMotionMedia.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
  return <>{children}</>;
};

export default AccessibilityEnhancer;
export default AccessibilityEnhancer;
  return <>{children}</>
=======
import React, { useEffect } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50'
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #06b6d4;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px'
      })
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px'
      })
      
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
        main.setAttribute('aria-label', 'Main content')
      }

      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
        nav.setAttribute('aria-label', 'Main navigation')
      }

      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }

    // Add focus management
    const addFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
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
        
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 8px 16px;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `
      document.head.appendChild(style)
    }

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement
          if (activeElement && activeElement.blur) {
            activeElement.blur()
          }
        }
      })
    }

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)')
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast')
        } else {
          document.documentElement.classList.remove('high-contrast')
        }
      }

      mediaQuery.addEventListener('change', handleContrastChange)
      handleContrastChange(mediaQuery)
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion')
        } else {
          document.documentElement.classList.remove('reduce-motion')
        }
      }

      mediaQuery.addEventListener('change', handleMotionChange)
      handleMotionChange(mediaQuery)
    }

    // Initialize all accessibility features
    addSkipLink()
    addAriaLandmarks()
    addFocusManagement()
    addKeyboardNavigation()
    addHighContrastSupport()
    addReducedMotionSupport()

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]')
      if (skipLink) {
        skipLink.remove()
      }
    }
  }, [])

  return null
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
}


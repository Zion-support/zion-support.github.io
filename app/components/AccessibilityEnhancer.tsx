<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
'use client;
=======
import React, { useEffect } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb

import React, { useEffect } from 'react;
=======
'use client';
<<<<<<< HEAD

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
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
    // Add skip link functionality
=======
const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip navigation link
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
<<<<<<< HEAD
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
=======
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.setAttribute('tabindex', '1');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }
<<<<<<< HEAD
=======
import React, { useEffect } from 'react';
=======
import React, { useEffect, useRef, useState, useCallback } from 'react';


import { Link } from 'react-router-dom';interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
  enableSkipLinks: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

interface AccessibilityEnhancerProps {
  config?: Partial<AccessibilityConfig>;
  children: React.ReactNode;
}

interface AccessibilityEnhancerRef {
  announceToScreenReader: (message: string) => void;
  setFontSize: (size: number) => void;
}

const AccessibilityEnhancer = React.forwardRef<AccessibilityEnhancerRef, AccessibilityEnhancerProps>(({
  config = {},
  children
}, ref) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const announcementRef = useRef<HTMLDivElement>(null);

  const defaultConfig: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableHighContrast: true,
    enableReducedMotion: true,
    enableFocusManagement: true,
    enableSkipLinks: true,
    enableARIALabels: true,
    enableColorContrast: true,
    ...config
  };

  const announceToScreenReader = useCallback((message: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
      announcementRef.current.setAttribute('aria-live', 'polite');
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      setIsKeyboardNavigation(true);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsKeyboardNavigation(false);
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    // Add keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
        footer.setAttribute('aria-label', 'Site footer');
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
    };
    
    setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
      return () => document.removeEventListener('keydown', handleKeyDown);
=======
    // Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);
=======
    // Add focus management
    const addFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .skip-link:focus {
          top: 6px !important;
        }
        
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus-visible {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-slate-900 { background-color: #000000 !important; }
          .text-white { color: #ffffff !important; }
          .text-gray-300 { color: #cccccc !important; }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `;
      document.head.appendChild(style);
    };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      // Trap focus in modals
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();
      };

      // Apply to all modals
      const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    };

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      // Add live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `;
      document.body.appendChild(liveRegion);

      // Function to announce messages
      window.announceToScreenReader = (message: string) => {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      };
    };

    // Add color contrast checking
    const addColorContrastSupport = () => {
      // Check if user prefers high contrast
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
=======
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip focus management for keyboard navigation
    const skipLinks = document.querySelectorAll('[data-skip-link]');
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href') || '');
        if (target) {
          (target as HTMLElement).focus();
        }
      });
    });

    // Announce page changes to screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has loaded';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
      }

      // Listen for changes in contrast preference
      window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      });
    };

<<<<<<< HEAD
    // Initialize all accessibility features
    addSkipLink();
    addAriaLandmarks();
    addFocusManagement();
    addKeyboardNavigation();
    addScreenReaderSupport();
    addColorContrastSupport();

    // Cleanup function
    return () => {
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
        // Tab key enhancements
        if (e.key === 'Tab') {
          // Add visible focus indicators
          document.body.classList.add('keyboard-navigation');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
        }
      });
    }
  }, []);

<<<<<<< HEAD
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
=======
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Cleanup
=======
    // Check for user preferences
    if (defaultConfig.enableHighContrast) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      setIsHighContrast(prefersHighContrast);
    }

    if (defaultConfig.enableReducedMotion) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsReducedMotion(prefersReducedMotion);
    }

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
<<<<<<< HEAD
  }, []);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Add screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableScreenReaderSupport]);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  return <>{children}</>;
};

export default AccessibilityEnhancer;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
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
<<<<<<< HEAD
=======
        }
      `;
      document.head.appendChild(style);
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const modal = document.querySelector('[role="dialog"]');
          if (modal) {
            const closeButton = modal.querySelector('[aria-label="Close"]');
            if (closeButton) {
              (closeButton as HTMLElement).click();
            }
          }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
        }
      `
      document.head.appendChild(style)
    }

<<<<<<< HEAD
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
=======
  }, [defaultConfig.enableHighContrast, defaultConfig.enableReducedMotion, handleKeyDown, handleMouseDown]);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (isKeyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Set font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, isKeyboardNavigation, fontSize]);

  // Expose methods via ref
  React.useImperativeHandle(ref, () => ({
    announceToScreenReader,
    setFontSize: (size: number) => {
      setFontSize(Math.max(12, Math.min(24, size)));
    }
  }), [announceToScreenReader]);

  return (
    <div className="accessibility-enhancer">
      {defaultConfig.enableSkipLinks && (
        <div className="skip-links">
          <Link to="#main-content" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to main content
          </Link>
          <Link to="#navigation" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to navigation
          </Link>
        </div>
      )}
      
      {children}
      
      {/* Screen reader announcements */}
      {defaultConfig.enableScreenReaderSupport && (
        <div
          ref={announcementRef}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        />
      )}
    </div>
  );
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
        // Tab navigation enhancement
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      // Remove keyboard navigation class on mouse use
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);

      // Add high contrast styles
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          filter: contrast(1.2) brightness(1.1);
        }
        
        .high-contrast .text-gray-300 {
          color: #ffffff !important;
        }
        
        .high-contrast .text-gray-400 {
          color: #e5e7eb !important;
        }
        
        .high-contrast .bg-white\/10 {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduce-motion');
        } else {
          document.body.classList.remove('reduce-motion');
        }
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);

      // Add reduced motion styles
      const style = document.createElement('style');
      style.textContent = `
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .reduce-motion .animate-pulse {
          animation: none !important;
        }
        
        .reduce-motion .animate-bounce {
          animation: none !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize all accessibility enhancements
    addSkipLink();
    addAriaLandmarks();
    enhanceFocusManagement();
    addKeyboardNavigation();
    addHighContrastSupport();
    addReducedMotionSupport();

    // Add live region for screen readers
    const addLiveRegion = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    addLiveRegion();

    // Announce page changes to screen readers
    const announcePageChange = (pageTitle: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `Navigated to ${pageTitle}`;
      }
    };

    // Listen for route changes
    const observer = new MutationObserver(() => {
      const title = document.title;
      if (title) {
        announcePageChange(title);
      }
    });

    observer.observe(document.head, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
=======
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    };

    // Screen reader enhancements
    const enhanceScreenReader = () => {
      if (!enableScreenReader) return;

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.id = 'main-content';
      }

      // Add navigation landmarks
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
      });
    };

    // High contrast mode
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return;

      // Add high contrast styles
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        .high-contrast * {
          border-color: currentColor !important;
        }
      `;
      document.head.appendChild(style);

      // Toggle high contrast mode
      const toggleHighContrast = () => {
        document.body.classList.toggle('high-contrast');
      };

      // Add keyboard shortcut (Ctrl+Shift+H)
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'H') {
          e.preventDefault();
          toggleHighContrast();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    };

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return;

      // Trap focus in modals
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => element.removeEventListener('keydown', handleTabKey);
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"], .modal');
      modals.forEach(modal => {
        if (modal instanceof HTMLElement) {
          trapFocus(modal);
        }
      });
    };

    // Initialize all enhancements
    addSkipLink();
    const cleanupKeyboard = enhanceKeyboardNavigation();
    enhanceScreenReader();
    const cleanupHighContrast = enhanceHighContrast();
    enhanceFocusManagement();

    // Cleanup function
    return () => {
      if (cleanupKeyboard) cleanupKeyboard();
      if (cleanupHighContrast) cleanupHighContrast();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
};

export default AccessibilityEnhancer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b

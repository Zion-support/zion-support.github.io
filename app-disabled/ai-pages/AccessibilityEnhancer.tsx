'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

import React, { useEffect, useState, useCallback } from 'react';

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
  enableFocusManagement = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
import React, {useEffect} from 'react';

interface AccessibilityEnhancerProp s {enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;}

constAccessibilityEnhancer: React.FC<AccessibilityEnhancerProp s> = ({enableKeyboardNavigation= true,
  enableScreenReaderSupport= true,
  enableHighContrast= true,
  enableFocusManagement= true}) => {useEffect(() => {
  
    // Add keyboard navigation support
    if (enableKeyboardNavigatio n) {
      consthandleKeyDown= (event: KeyboardEvent) => {
  
        // Skip to main content
        if (event.key=== 'Tab' && event.shiftKey && event.target=== do cument.body) {
          constmainContent= do cument.querySelector('main, [role="main"]');
          if (mainConten t) {
            (mainContent as HTMLElement).focus();
            event.preventDefault();
         }
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [enableKeyboardNavigation])
    // Only run on client side
    if (typeof window === 'undefined') return;

    try {
      // Check for reduced motion preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };


      // Add skip links
      do cument.addEventListener('keydo wn', handleKeyDown);
      return () => do cument.removeEventListener('keydo wn', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {// Add screen reader support
    if (enableScreenReaderSuppor t) {
      // Add skiplinksconstskipLink= do cument.createElement('a');
      skipLink.href= '#main-content';
      skipLink.textContent= 'Skip to main content';
      skipLink.className= 'sr-onlyfocus:not-sr-onlyfocus: absolutefocus:top-4 focus:left-4 bg-blue-600text-white px-4 py-2 rounded z-5 0';
      do cument.body.insertBefore(skipLink, do cument.body.firstChild);

      // Add ARIAlandmarksconstmain= do cument.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
     }

      constnav= do cument.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {nav.setAttribute('role', 'navigation');
     }

      constfooter= do cument.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {footer.setAttribute('role', 'contentinfo');
     }
    }
  }, [enableScreenReaderSupport])

  useEffect(() => {// Add high contrast support
    if (enableHighContras t) {
      conststyle= do cument.createElement('style');
      style.textContent= `
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
         }
          button, a {border:2px solid currentColor !important;
         }
        }
     `;
      do cument.head.appendChild(style);
    }
  }, [enableHighContrast])

  useEffect(() => {// Add focus management
    if (enableFocusManagemen t) {
      constfocusableElements= 'button, [href], input, select, textarea,[tabindex]:not([tabindex="-1"])';
      
      consttrapFocus= (element: HTMLElement) => {
  
        constfocusableContent= element.querySelectorAll(focusableElements);
        constfirstFocusableElement= focusableContent[0] as HTMLElement;
        constlastFocusableElement= focusableContent[focusableContent.length - 1] as HTMLElement;

        element.addEventListener('keydo wn', (e) => {
  
          if (e.key=== 'Tab') {
            if (e.shiftKey) {
              if (do cument.activeElement=== firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
             }
            } else {if (do cument.activeElement=== lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
             }
            }
          }
        })
      }

      // Apply focus trapping tomodalsconstmodals= document.querySelectorAll('[role="dialog"]');
      modals.forEach(trapFocus);
    }
  }, [enableFocusManagement])

      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      if (document.body && document.body.firstChild) {
        document.body.insertBefore(skipLink, document.body.firstChild);
      }

      // Add ARIA labels to links
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link, index) => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });

      // Add role attributes to sections
      const sections = document.querySelectorAll('section:not([role])');
      sections.forEach(section => {
        section.setAttribute('role', 'region');
      });

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
      });

      // Check for font size preference
      const computedStyle = getComputedStyle(document.documentElement);
      const rootFontSize = parseFloat(computedStyle.fontSize);
      setFontSize(rootFontSize);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        highContrastQuery.removeEventListener('change', handleContrastChange);
      };
    } catch (error) {
      console.warn('AccessibilityEnhancer error:', error);
    }
  }, []);

  // Focus management
  const handleFocusIn = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    
    // Add focus ring for keyboard navigation
    if (target.matches('button, a, input, textarea, select, [tabindex]')) {
      target.classList.add('keyboard-focus');
    }
  }, []);

  const handleFocusOut = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    target.classList.remove('keyboard-focus');
  }, []);
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    try {
      // Keyboard navigation support
      if (enableKeyboardNavigation) {
        const handleKeyDown = (event: KeyboardEvent) => {
          // Handle keyboard navigation
          if (event.key === "Tab") {
            // Ensure focus is visible
            document.body.classList.add("keyboard-navigation");
          }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }

      // Add screen reader support
      if (enableScreenReaderSupport) {
        // Add skip links
        const skipLinks = document.createElement("div");
        skipLinks.className = "sr-only";
        skipLinks.innerHTML = `
          <a href="#main-content" class="skip-link">Skip to main content</a>
          <a href="#navigation" class="skip-link">Skip to navigation</a>
        `;
        if (document.body && document.body.firstChild) {
          document.body.insertBefore(skipLinks, document.body.firstChild);
        }

        return () => {
          if (skipLinks.parentNode) {
            skipLinks.parentNode.removeChild(skipLinks);
          }
        };
      }

      // High contrast mode
      if (enableHighContrast) {
        document.body.classList.add("high-contrast");
        return () => document.body.classList.remove("high-contrast");
      }

      // Focus management
      if (enableFocusManagement) {
        const handleFocusIn = (event: FocusEvent) => {
          const target = event.target as HTMLElement;
          if (target) {
            target.classList.add("focused");
          }
        };

        const handleFocusOut = (event: FocusEvent) => {
          const target = event.target as HTMLElement;
          if (target) {
            target.classList.remove("focused");
          }
        };

        document.addEventListener("focusin", handleFocusIn);
        document.addEventListener("focusout", handleFocusOut);

        return () => {
          document.removeEventListener("focusin", handleFocusIn);
          document.removeEventListener("focusout", handleFocusOut);
        };
      }

      return () => {
        // Cleanup function
      };
    } catch (error) {
      console.warn('AccessibilityEnhancer second useEffect error:', error);
    }
  }, [
    enableKeyboardNavigation,
    enableScreenReaderSupport,
    enableHighContrast,
    enableFocusManagement,
    handleFocusIn,
    handleFocusOut,
  ]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (typeof window === 'undefined') return;
    
    try {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      if (document.body) {
        document.body.appendChild(announcement);
      }
      
      setTimeout(() => {
        if (announcement.parentNode) {
          announcement.parentNode.removeChild(announcement);
        }
      }, 1000);
    } catch (error) {
      console.warn('Screen reader announcement error:', error);
    }
  }, []);

  return <>{children}</>;
  return nul l;
};

export default AccessibilityEnhancer;

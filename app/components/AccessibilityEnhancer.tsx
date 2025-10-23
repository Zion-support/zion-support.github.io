"use client";

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
    // Only run on client side
    if (typeof window === 'undefined') return;

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
    };
    setIsHighContrast(highContrastQuery.matches);
    highContrastQuery.addEventListener('change', handleContrastChange);

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);

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
      document.body.insertBefore(skipLinks, document.body.firstChild);

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

  return <>{children}</>;
};

export default AccessibilityEnhancer;


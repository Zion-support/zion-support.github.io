import React, { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  skipLinks: boolean;
}

export function AccessibilityEnhancer() {
  const location = useLocation();
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    skipLinks: true
  });

  // Apply high contrast mode
  const applyHighContrast = useCallback((enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#e5e7eb');
      document.documentElement.style.setProperty('--bg-primary', '#000000');
      document.documentElement.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--text-primary');
      document.documentElement.style.removeProperty('--text-secondary');
      document.documentElement.style.removeProperty('--bg-primary');
      document.documentElement.style.removeProperty('--bg-secondary');
    }
  }, []);

  // Apply large text mode
  const applyLargeText = useCallback((enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('large-text');
      document.documentElement.style.fontSize = '18px';
    } else {
      document.documentElement.classList.remove('large-text');
      document.documentElement.style.fontSize = '16px';
    }
  }, []);

  // Apply reduced motion
  const applyReducedMotion = useCallback((enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      document.documentElement.style.removeProperty('--transition-duration');
    }
  }, []);

  // Enhanced focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus-visible class to all focusable elements
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }, []);

  // Add skip links
  const addSkipLinks = useCallback(() => {
    if (!document.getElementById('skip-links')) {
      const skipLinks = document.createElement('div');
      skipLinks.id = 'skip-links';
      skipLinks.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50';
      
      skipLinks.innerHTML = `
        <a href="#main-content" class="block px-4 py-2 bg-blue-600 text-white rounded shadow-lg">
          Skip to main content
        </a>
        <a href="#navigation" class="block px-4 py-2 bg-blue-600 text-white rounded shadow-lg mt-2">
          Skip to navigation
        </a>
      `;
      
      document.body.insertBefore(skipLinks, document.body.firstChild);
    }
  }, []);

  // Enhance form accessibility
  const enhanceFormAccessibility = useCallback(() => {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach((input) => {
        const id = input.getAttribute('id');
        const name = input.getAttribute('name');
        
        if (!id && name) {
          input.setAttribute('id', name);
        }
        
        // Add aria-describedby for validation messages
        const validationMessage = input.parentNode?.querySelector('.validation-message');
        if (validationMessage) {
          const messageId = `validation-${Math.random().toString(36).substr(2, 9)}`;
          validationMessage.id = messageId;
          input.setAttribute('aria-describedby', messageId);
        }
      });
    });
  }, []);

  // Add ARIA landmarks
  const addAriaLandmarks = useCallback(() => {
    // Main content area
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.getAttribute('role')) {
      mainContent.setAttribute('role', 'main');
      mainContent.id = 'main-content';
    }

    // Navigation
    const navigation = document.querySelector('nav, [role="navigation"]');
    if (navigation && !navigation.id) {
      navigation.id = 'navigation';
    }

    // Search
    const search = document.querySelector('form[role="search"], .search-form');
    if (search && !search.getAttribute('role')) {
      search.setAttribute('role', 'search');
    }

    // Banner
    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    // Content info
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Enhance image accessibility
  const enhanceImageAccessibility = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        // Generate descriptive alt text for decorative images
        const src = img.src || '';
        const filename = src.split('/').pop()?.split('.')[0] || '';
        img.alt = `Image: ${filename}`;
      }
      
      // Add loading state for better UX
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }, []);

  // Add live regions for dynamic content
  const addLiveRegions = useCallback(() => {
    if (!document.getElementById('live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
  }, []);

  // Announce route changes to screen readers
  const announceRouteChange = useCallback(() => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      const pageTitle = document.title || 'Page loaded';
      liveRegion.textContent = `Navigated to ${pageTitle}`;
      
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    enhanceFocusManagement();
    addSkipLinks();
    enhanceFormAccessibility();
    addAriaLandmarks();
    enhanceImageAccessibility();
    addLiveRegions();
  }, [
    enhanceFocusManagement,
    addSkipLinks,
    enhanceFormAccessibility,
    addAriaLandmarks,
    enhanceImageAccessibility,
    addLiveRegions
  ]);

  // Apply settings when they change
  useEffect(() => {
    applyHighContrast(settings.highContrast);
    applyLargeText(settings.largeText);
    applyReducedMotion(settings.reducedMotion);
  }, [settings.highContrast, settings.largeText, settings.reducedMotion, applyHighContrast, applyLargeText, applyReducedMotion]);

  // Announce route changes
  useEffect(() => {
    announceRouteChange();
  }, [location, announceRouteChange]);

  // Add CSS for accessibility features
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
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

      .focus-visible {
        outline: 3px solid #3b82f6;
        outline-offset: 2px;
      }

      .keyboard-navigation .focus-visible {
        outline: 3px solid #3b82f6;
        outline-offset: 2px;
      }

      .high-contrast {
        color-scheme: dark;
      }

      .large-text {
        font-size: 18px;
      }

      .reduced-motion * {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
      }

      @media (prefers-reduced-motion: reduce) {
        .reduced-motion * {
          animation-duration: 0.1s !important;
          transition-duration: 0.1s !important;
        }
      }

      @media (prefers-contrast: high) {
        .high-contrast {
          color-scheme: dark;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Expose accessibility controls to window for testing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).zionAccessibility = {
        setHighContrast: (enabled: boolean) => setSettings(prev => ({ ...prev, highContrast: enabled })),
        setLargeText: (enabled: boolean) => setSettings(prev => ({ ...prev, largeText: enabled })),
        setReducedMotion: (enabled: boolean) => setSettings(prev => ({ ...prev, reducedMotion: enabled })),
        getSettings: () => settings
      };
    }
  }, [settings]);

  return null; // This component doesn't render anything
}

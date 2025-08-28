import React, { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AccessibilityFeatures {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

export function AccessibilityEnhancer() {
  const location = useLocation();
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusIndicator: false,
    screenReader: false
  });

  // Enhanced focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex], [role="button"], [role="link"]'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('focus', (e) => {
        const target = e.target as HTMLElement;
        target.style.outline = '2px solid #22ddd2';
        target.style.outlineOffset = '2px';
        target.style.borderRadius = '4px';
      });

      element.addEventListener('blur', (e) => {
        const target = e.target as HTMLElement;
        target.style.outline = '';
        target.style.outlineOffset = '';
        target.style.borderRadius = '';
      });
    });
  }, []);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-cyan focus:text-white focus:rounded focus:outline-none';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhanced tab navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }, []);

  // Enhanced ARIA labels
  const enhanceARIALabels = useCallback(() => {
    // Add missing ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      } else {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      img.setAttribute('alt', 'Decorative image');
      img.setAttribute('aria-hidden', 'true');
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input) => {
      const placeholder = input.getAttribute('placeholder');
      const label = input.getAttribute('label');
      if (placeholder) {
        input.setAttribute('aria-label', placeholder);
      } else if (label) {
        input.setAttribute('aria-label', label);
      }
    });
  }, []);

  // Enhanced screen reader support
  const enhanceScreenReaderSupport = useCallback(() => {
    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce route changes
    const announceRouteChange = (path: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `Navigated to ${path}`;
      }
    };

    // Announce loading states
    const announceLoading = (message: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Add to window for global access
    (window as any).announceRouteChange = announceRouteChange;
    (window as any).announceLoading = announceLoading;
  }, []);

  // Enhanced color contrast
  const enhanceColorContrast = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --text-primary: #ffffff !important;
        --text-secondary: #e5e7eb !important;
        --background-primary: #000000 !important;
        --background-secondary: #1f2937 !important;
        --accent-primary: #22ddd2 !important;
        --accent-secondary: #8c15e9 !important;
      }
      
      .high-contrast * {
        color: var(--text-primary) !important;
        background-color: var(--background-primary) !important;
        border-color: var(--accent-primary) !important;
      }
      
      .high-contrast button,
      .high-contrast a {
        background-color: var(--accent-primary) !important;
        color: var(--background-primary) !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Enhanced motion preferences
  const enhanceMotionPreferences = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
      
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Enhanced text sizing
  const enhanceTextSizing = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      .large-text {
        font-size: 1.25rem !important;
        line-height: 1.6 !important;
      }
      
      .large-text h1 { font-size: 2.5rem !important; }
      .large-text h2 { font-size: 2rem !important; }
      .large-text h3 { font-size: 1.75rem !important; }
      .large-text p { font-size: 1.25rem !important; }
      .large-text button { font-size: 1.25rem !important; }
      .large-text input { font-size: 1.25rem !important; }
    `;
    document.head.appendChild(style);
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    enhanceFocusManagement();
    enhanceKeyboardNavigation();
    enhanceARIALabels();
    enhanceScreenReaderSupport();
    enhanceColorContrast();
    enhanceMotionPreferences();
    enhanceTextSizing();

    // Check user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setFeatures(prev => ({ ...prev, reducedMotion: true }));
      document.body.classList.add('reduced-motion');
    }

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    if (highContrastQuery.matches) {
      setFeatures(prev => ({ ...prev, highContrast: true }));
      document.body.classList.add('high-contrast');
    }
  }, [
    enhanceFocusManagement,
    enhanceKeyboardNavigation,
    enhanceARIALabels,
    enhanceScreenReaderSupport,
    enhanceColorContrast,
    enhanceMotionPreferences,
    enhanceTextSizing
  ]);

  // Update accessibility features on route change
  useEffect(() => {
    // Announce route change to screen readers
    if ((window as any).announceRouteChange) {
      (window as any).announceRouteChange(location.pathname);
    }

    // Re-apply ARIA enhancements
    setTimeout(() => {
      enhanceARIALabels();
    }, 100);
  }, [location, enhanceARIALabels]);

  // Add accessibility controls to the page
  useEffect(() => {
    const accessibilityPanel = document.createElement('div');
    accessibilityPanel.className = 'fixed top-4 right-4 z-50 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-4 text-white';
    accessibilityPanel.innerHTML = `
      <h3 class="text-lg font-semibold mb-3 text-zion-cyan">Accessibility</h3>
      <div class="space-y-2 text-sm">
        <label class="flex items-center space-x-2">
          <input type="checkbox" id="high-contrast" class="w-4 h-4 text-zion-cyan bg-slate-700 border-slate-600 rounded focus:ring-zion-cyan">
          <span>High Contrast</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" id="reduced-motion" class="w-4 h-4 text-zion-cyan bg-slate-700 border-slate-600 rounded focus:ring-zion-cyan">
          <span>Reduced Motion</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" id="large-text" class="w-4 h-4 text-zion-cyan bg-slate-700 border-slate-600 rounded focus:ring-zion-cyan">
          <span>Large Text</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" id="focus-indicator" class="w-4 h-4 text-zion-cyan bg-slate-700 border-slate-600 rounded focus:ring-zion-cyan" checked>
          <span>Focus Indicator</span>
        </label>
      </div>
    `;

    document.body.appendChild(accessibilityPanel);

    // Add event listeners
    const highContrastCheckbox = document.getElementById('high-contrast') as HTMLInputElement;
    const reducedMotionCheckbox = document.getElementById('reduced-motion') as HTMLInputElement;
    const largeTextCheckbox = document.getElementById('large-text') as HTMLInputElement;
    const focusIndicatorCheckbox = document.getElementById('focus-indicator') as HTMLInputElement;

    highContrastCheckbox.checked = features.highContrast;
    reducedMotionCheckbox.checked = features.reducedMotion;
    largeTextCheckbox.checked = features.largeText;
    focusIndicatorCheckbox.checked = features.focusIndicator;

    highContrastCheckbox.addEventListener('change', (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      setFeatures(prev => ({ ...prev, highContrast: checked }));
      document.body.classList.toggle('high-contrast', checked);
    });

    reducedMotionCheckbox.addEventListener('change', (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      setFeatures(prev => ({ ...prev, reducedMotion: checked }));
      document.body.classList.toggle('reduced-motion', checked);
    });

    largeTextCheckbox.addEventListener('change', (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      setFeatures(prev => ({ ...prev, largeText: checked }));
      document.body.classList.toggle('large-text', checked);
    });

    focusIndicatorCheckbox.addEventListener('change', (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      setFeatures(prev => ({ ...prev, focusIndicator: checked }));
      if (checked) {
        enhanceFocusManagement();
      }
    });

    return () => {
      document.body.removeChild(accessibilityPanel);
    };
  }, [features, enhanceFocusManagement]);

  return null; // This component doesn't render anything visible
}

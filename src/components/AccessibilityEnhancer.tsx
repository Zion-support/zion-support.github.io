import React, { useEffect, useCallback, useRef } from 'react';

interface AccessibilityFeatures {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusVisible: boolean;
}

export function AccessibilityEnhancer() {
  const featuresRef = useRef<AccessibilityFeatures>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusVisible: false
  });

  const focusableElements = useRef<HTMLElement[]>([]);

  // Check user preferences
  const checkUserPreferences = useCallback(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      featuresRef.current.reducedMotion = true;
      document.documentElement.classList.add('reduced-motion');
    }

    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      featuresRef.current.highContrast = true;
      document.documentElement.classList.add('high-contrast');
    }

    // Check for large text preference
    if (window.matchMedia('(min-resolution: 2dppx)').matches) {
      featuresRef.current.largeText = true;
      document.documentElement.classList.add('large-text');
    }
  }, []);

  // Enhanced focus management
  const setupFocusManagement = useCallback(() => {
    // Get all focusable elements
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];

    focusableElements.current = Array.from(
      document.querySelectorAll(focusableSelectors.join(','))
    ) as HTMLElement[];

    // Add focus indicators
    focusableElements.current.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
        element.setAttribute('aria-describedby', 'focus-description');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
        element.removeAttribute('aria-describedby');
      });
    });

    // Handle keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, shiftKey, target } = event;
      const currentElement = target as HTMLElement;
      const currentIndex = focusableElements.current.indexOf(currentElement);

      if (currentIndex === -1) return;

      let nextIndex: number;

      switch (key) {
        case 'Tab':
          // Let browser handle default tab behavior
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault();
          nextIndex = (currentIndex + 1) % focusableElements.current.length;
          focusableElements.current[nextIndex]?.focus();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          nextIndex = currentIndex === 0 
            ? focusableElements.current.length - 1 
            : currentIndex - 1;
          focusableElements.current[nextIndex]?.focus();
          break;
        case 'Home':
          event.preventDefault();
          focusableElements.current[0]?.focus();
          break;
        case 'End':
          event.preventDefault();
          focusableElements.current[focusableElements.current.length - 1]?.focus();
          break;
        case 'Enter':
        case ' ':
          if (currentElement.tagName === 'BUTTON' || currentElement.getAttribute('role') === 'button') {
            event.preventDefault();
            currentElement.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // ARIA enhancements
  const enhanceARIA = useCallback(() => {
    // Add skip links
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links sr-only focus-within:not-sr-only';
    skipLinksContainer.setAttribute('role', 'navigation');
    skipLinksContainer.setAttribute('aria-label', 'Skip links');

    skipLinks.forEach(({ href, text }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.className = 'skip-link block p-2 bg-zion-blue text-white hover:bg-zion-purple focus:outline-none focus:ring-2 focus:ring-zion-cyan';
      skipLinksContainer.appendChild(link);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);

    // Add landmarks
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
      mainContent.setAttribute('role', 'main');
    }

    const navigation = document.querySelector('nav, [role="navigation"]');
    if (navigation && !navigation.id) {
      navigation.id = 'navigation';
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.id) {
      footer.id = 'footer';
      footer.setAttribute('role', 'contentinfo');
    }

    // Enhance form accessibility
    const forms = document.querySelectorAll('form');
    forms.forEach((form, index) => {
      if (!form.id) {
        form.id = `form-${index}`;
      }
      
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach((input, inputIndex) => {
        const inputElement = input as HTMLInputElement;
        if (!inputElement.id) {
          inputElement.id = `input-${index}-${inputIndex}`;
        }
        
        // Add labels if missing
        if (!inputElement.labels?.length) {
          const label = document.createElement('label');
          label.htmlFor = inputElement.id;
          label.textContent = inputElement.placeholder || inputElement.name || `Field ${inputIndex + 1}`;
          inputElement.parentNode?.insertBefore(label, inputElement);
        }
      });
    });

    // Enhance button accessibility
    const buttons = document.querySelectorAll('button, [role="button"]');
    buttons.forEach((button, index) => {
      const buttonElement = button as HTMLButtonElement;
      if (!buttonElement.id) {
        buttonElement.id = `button-${index}`;
      }
      
      if (!buttonElement.getAttribute('aria-label') && !buttonElement.textContent?.trim()) {
        buttonElement.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Color contrast checker
  const checkColorContrast = useCallback(() => {
    const style = getComputedStyle(document.documentElement);
    const backgroundColor = style.getPropertyValue('--background-color') || '#ffffff';
    const textColor = style.getPropertyValue('--text-color') || '#000000';
    
    // Simple contrast ratio calculation (simplified)
    const getLuminance = (color: string) => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;
      
      const sRGB = [r, g, b].map(c => {
        if (c <= 0.03928) return c / 12.92;
        return Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
    };
    
    const bgLuminance = getLuminance(backgroundColor);
    const textLuminance = getLuminance(textColor);
    
    const contrastRatio = (Math.max(bgLuminance, textLuminance) + 0.05) / 
                         (Math.min(bgLuminance, textLuminance) + 0.05);
    
    if (contrastRatio < 4.5) {
      console.warn('Low color contrast detected:', contrastRatio.toFixed(2));
      announceToScreenReader('Warning: Low color contrast detected');
    }
  }, [announceToScreenReader]);

  // Initialize accessibility features
  useEffect(() => {
    checkUserPreferences();
    setupFocusManagement();
    enhanceARIA();
    
    // Check color contrast after a delay
    const contrastTimer = setTimeout(checkColorContrast, 2000);
    
    return () => {
      clearTimeout(contrastTimer);
    };
  }, [checkUserPreferences, setupFocusManagement, enhanceARIA, checkColorContrast]);

  // Listen for preference changes
  useEffect(() => {
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(min-resolution: 2dppx)')
    ];

    const handlePreferenceChange = () => {
      checkUserPreferences();
    };

    mediaQueries.forEach(query => {
      query.addEventListener('change', handlePreferenceChange);
    });

    return () => {
      mediaQueries.forEach(query => {
        query.removeEventListener('change', handlePreferenceChange);
      });
    };
  }, [checkUserPreferences]);

  // Expose accessibility features globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).zionAccessibility = {
        features: featuresRef.current,
        announce: announceToScreenReader,
        checkContrast: checkColorContrast
      };
    }
  }, [announceToScreenReader, checkColorContrast]);

  return null; // This component doesn't render anything
}

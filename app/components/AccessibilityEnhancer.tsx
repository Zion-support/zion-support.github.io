<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    highContrast: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlind: false,
    dyslexia: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Check for user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));
  }, []);

  // Listen for changes in user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    // Font size
    root.style.setProperty('--font-size', `${settings.fontSize}px`);
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Color blind support
    if (settings.colorBlind) {
      root.classList.add('color-blind');
    } else {
      root.classList.remove('color-blind');
    }
    
    // Dyslexia support
    if (settings.dyslexia) {
      root.classList.add('dyslexia');
    } else {
      root.classList.remove('dyslexia');
    }
  }, [settings]);

  useEffect(() => {
    applySettings();
  }, [applySettings]);

  // Skip to main content functionality
  const skipToMain = useCallback(() => {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  }, []);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
=======
'use client';
import React, { useEffect, useCallback } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const addFocusManagement = useCallback(() => {
    // Add focus management for modals and dropdowns
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (element: HTMLElement) => {
      const focusableContent = element.querySelectorAll(focusableElements);
      const firstFocusableElement = focusableContent[0] as HTMLElement;
      const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

      element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        }
      });
    };

    // Apply focus trapping to modals
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));
  }, []);

  const addKeyboardNavigation = useCallback(() => {
    // Add keyboard navigation for custom components
    const customButtons = document.querySelectorAll('[data-custom-button]');
    
    customButtons.forEach(button => {
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          (button as HTMLElement).click();
        }
      });
    });
  }, []);

  const addAriaLabels = useCallback(() => {
    // Add missing ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      }
    });

    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      const text = link.textContent?.trim();
      if (text && text.length > 0) {
        link.setAttribute('aria-label', text);
      }
    });
  }, []);

  const addSkipLinks = useCallback(() => {
    // Add skip links for better navigation
    if (!document.querySelector('.skip-link')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, []);

  const enhanceColorContrast = useCallback(() => {
    // Check and enhance color contrast
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Simple contrast check (this is a basic implementation)
      if (color && backgroundColor && color !== backgroundColor) {
        // Add high contrast mode toggle
        if (!document.querySelector('.contrast-toggle')) {
          const toggle = document.createElement('button');
          toggle.textContent = 'High Contrast';
          toggle.className = 'contrast-toggle fixed bottom-4 right-4 bg-yellow-600 text-black px-3 py-2 rounded text-sm z-50';
          toggle.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
          });
          document.body.appendChild(toggle);
        }
      }
    });
  }, []);

  const addScreenReaderSupport = useCallback(() => {
    // Add screen reader announcements
    const announce = (message: string) => {
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
            const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
            if (heading) {
              announce(`New section: ${heading.textContent}`);
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }, []);

  useEffect(() => {
    // Run all accessibility enhancements
    addFocusManagement();
    addKeyboardNavigation();
    addAriaLabels();
    addSkipLinks();
    enhanceColorContrast();
    addScreenReaderSupport();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addFocusManagement();
      addKeyboardNavigation();
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
>>>>>>> origin/resolve-merge-conflicts

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [settings.keyboardNavigation]);

  // Add skip links
  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    document.body.insertBefore(skipLink, document.body.firstChild);
  }, []);

  // Add accessibility styles
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      .skip-link:focus {
        top: 6px !important;
      }
      
      .keyboard-navigation *:focus {
        outline: 2px solid #0891b2 !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        filter: contrast(150%) brightness(1.2);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .dyslexia {
        font-family: 'OpenDyslexic', sans-serif !important;
      }
      
      .color-blind {
        filter: hue-rotate(180deg);
      }
      
      .text-gray-300 {
        color: #d1d5db !important;
      }
      
      .text-gray-400 {
        color: #9ca3af !important;
      }
      
      .bg-slate-900 {
        background-color: #0f172a !important;
      }
      
      .bg-slate-800 {
        background-color: #1e293b !important;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [addFocusManagement, addKeyboardNavigation, addAriaLabels, addSkipLinks, enhanceColorContrast, addScreenReaderSupport]);

<<<<<<< HEAD
  // Add ARIA landmarks
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Add heading structure
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      
      // Add skip to heading functionality
      heading.addEventListener('focus', () => {
        announce(`New section: ${heading.textContent}`);
      });
    });
  }, [announce]);

  // Add form labels
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach((input, index) => {
        if (!input.id) {
          input.id = `input-${index}`;
        }
        
        const label = form.querySelector(`label[for="${input.id}"]`);
        if (!label && input.getAttribute('placeholder')) {
          const labelElement = document.createElement('label');
          labelElement.setAttribute('for', input.id);
          labelElement.textContent = input.getAttribute('placeholder') || '';
          input.parentNode?.insertBefore(labelElement, input);
        }
      });
    });
  }, []);

  // Add button labels
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });
  }, []);

  return null; // This component doesn't render anything visible
};

export default AccessibilityEnhancer;
=======
  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
>>>>>>> origin/resolve-merge-conflicts

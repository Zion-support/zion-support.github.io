<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader enhancements
    if (enableScreenReader) {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add role attributes where needed
      const cards = document.querySelectorAll('.cyber-card, .hologram-card, .quantum-card');
      cards.forEach(card => {
        if (!card.getAttribute('role')) {
          card.setAttribute('role', 'article');
        }
      });
    }
  }, [enableScreenReader]);

  useEffect(() => {
    // High contrast mode detection
    if (enableHighContrast) {
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

      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      // Ensure focus is visible
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast * {
          border-color: #ffffff !important;
          color: #ffffff !important;
          background-color: #000000 !important;
        }
        
        .high-contrast .neon-text,
        .high-contrast .cyber-text,
        .high-contrast .holographic-text {
          color: #ffffff !important;
          text-shadow: none !important;
        }
      `;
      document.head.appendChild(style);

      // Manage focus for modals and dropdowns
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('[role="dialog"]') || target.closest('[role="menu"]')) {
          // Keep focus within modal/dropdown
          const container = target.closest('[role="dialog"], [role="menu"]');
          if (container) {
            const focusableElements = container.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (event.target === lastElement && event.key === 'Tab' && !event.shiftKey) {
              event.preventDefault();
              firstElement?.focus();
            } else if (event.target === firstElement && event.key === 'Tab' && event.shiftKey) {
              event.preventDefault();
              lastElement?.focus();
            }
          }
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      return () => document.removeEventListener('focusin', handleFocusIn);
    }
  }, [enableFocusManagement]);
=======

import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
}

const AccessibilityEnhancer: React.FC = () => {,
  const [settings, setSettings] = useState<AccessibilitySettings>({
<<<<<<< HEAD
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
<<<<<<< HEAD
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlind: false,
    dyslexia: false
=======
    focusVisible: true
>>>>>>> cursor/fix-errors-and-merge-to-main-1d1a
=======
    highContrast: false;
    reducedMotion: false;
    fontSize: 'medium'
    focusVisible: true;
    screenReader: false;
    keyboardNavigation: true;
    colorBlind: false;
    dyslexia: false;
    focusVisible: true;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  });

  useEffect(() => {
    // Check for user preferences;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;

    setSettings(prev => ({)
      ...prev),
      reducedMotion: prefersReducedMotion),
      highContrast: prefersHighContrast;
    }));

    // Listen for changes in user preferences;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
,
    const handleMotionChange = (e: MediaQueryListEvent) => {,
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {,
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to the document;
    const root = document.documentElement;

    // High contrast mode;
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion;
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size;
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Focus visible;
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

<<<<<<< HEAD
<<<<<<< HEAD
    // Screen reader optimizations
=======
  // Screen reader optimizations;
  useEffect(() => {
    const root = document.documentElement;
    
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation;
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Color blind support;
    if (settings.colorBlind) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Dyslexia support;
    if (settings.dyslexia) {
      root.classList.add('dyslexia-support');
    } else {
      root.classList.remove('dyslexia-support');
    }

    // Store settings in localStorage;
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);
=======
    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-1d1a

  // Add CSS for accessibility features;
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* High contrast mode */
      .high-contrast {
        --neon-cyan: #00ffff;
        --neon-purple: #ff00ff;
        --neon-pink: #ff0080;
        --neon-green: #00ff00;
        --neon-orange: #ff8000;
        --neon-red: #ff0040;
        --neon-yellow: #ffff00;
        --neon-blue: #0080ff;
      }

      .high-contrast .neon-text {
        text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
      }

      .high-contrast .cyber-card {
        border-width: 2px;
        border-color: var(--neon-cyan);
      }

      .high-contrast .cyber-button {
        border-width: 2px;
        border-color: var(--neon-cyan);
      }

      /* Reduced motion */
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      /* Font size adjustments */
      .font-small {
        font-size: 0.875rem;
      }

      .font-medium {
        font-size: 1rem;
      }

      .font-large {
        font-size: 1.125rem;
      }

      /* Focus visible improvements */
      .focus-visible *:focus {
        outline: 2px solid var(--neon-cyan);
        outline-offset: 2px;
      }

      .focus-visible .cyber-button: focus {,
        box-shadow: 0 0 0 2px var(--neon-cyan);
      }

      /* Skip link */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--neon-cyan);
        color: #000;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        font-weight: bold;
      }

      .skip-link: focus {,
        top: 6px;
      }

      /* Screen reader only content */
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

      /* High contrast text */
      .high-contrast .text-gray-300 {
        color: #ffffff !important;
      }

      .high-contrast .text-gray-400 {
        color: #cccccc !important;
      }

      .high-contrast .text-gray-500 {
        color: #999999 !important;
      }

      /* High contrast backgrounds */
      .high-contrast .bg-slate-800 {
        background-color: #000000 !important;
      }

      .high-contrast .bg-slate-900 {
        background-color: #000000 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
=======
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add accessibility enhancements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    };
  }, []);
>>>>>>> origin/main

<<<<<<< HEAD
=======
    const addFocusManagement = () => {
      // Add focus management for better keyboard navigation
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).style.outline = '2px solid #06b6d4';
        });
        
        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).style.outline = 'none';
        });
      });
    };

    const addSkipLinks = () => {
      // Add skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded z-50';
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
    };

    const addColorContrast = () => {
      // Ensure sufficient color contrast
      const style = document.createElement('style');
      style.textContent = `
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
    };

    const addKeyboardNavigation = () => {
      // Add keyboard navigation support
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });
      
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    const addScreenReaderSupport = () => {
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
    };

    const addFormAccessibility = () => {
      // Enhance form accessibility
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach((input) => {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (!label && !input.getAttribute('aria-label')) {
            input.setAttribute('aria-label', input.getAttribute('placeholder') || 'Input field');
          }
        });
      });
    };

    // Initialize accessibility enhancements
    addAriaLabels();
    addFocusManagement();
    addSkipLinks();
    addColorContrast();
    addKeyboardNavigation();
    addScreenReaderSupport();
    addFormAccessibility();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
      addFocusManagement();
      addFormAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  return null;
};

export default AccessibilityEnhancer;
<<<<<<< HEAD
import React, { useState, useEffect, useCallback, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const addSkipLinks = useCallback(() => {
    if (!enableSkipLinks) return;
    
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
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
    `;
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, [enableSkipLinks]);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };
    
    highContrastQuery.addEventListener('change', handleContrastChange);
    setIsHighContrast(highContrastQuery.matches);

    // Check for font size preference
    const computedStyle = getComputedStyle(document.documentElement);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    setFontSize(rootFontSize);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility enhancements
    if (enableSkipLinks) {
      addSkipLinks();
    }

    if (enableFocusIndicators) {
=======
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Improve focus management
    const improveFocusManagement = () => {
>>>>>>> cursor/analyze-improve-and-deploy-application-187f
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
<<<<<<< HEAD
          outline: 2px solid #4F46E5 !important;
          outline-offset: 2px !important;
        }
        .skip-link:focus {
          outline: 2px solid #fff !important;
        }
      `;
      document.head.appendChild(style);
    }

    if (enableKeyboardNav) {
      // Add keyboard navigation support
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

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableSkipLinks, enableFocusIndicators, enableKeyboardNav, addSkipLinks]);

  useEffect(() => {
    // Apply reduced motion styles
    if (isReducedMotion) {
      document.documentElement.style.setProperty('--motion-duration', '0.01ms');
      document.documentElement.style.setProperty('--motion-delay', '0.01ms');
    } else {
      document.documentElement.style.removeProperty('--motion-duration');
      document.documentElement.style.removeProperty('--motion-delay');
    }
  }, [isReducedMotion]);

  useEffect(() => {
    // Apply high contrast styles
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size adjustments
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // const getMetrics = () => ({
  //   isReducedMotion,
  //   isHighContrast,
  //   fontSize,
  //   overallScore: (isReducedMotion ? 25 : 0) + (isHighContrast ? 25 : 0) + (fontSize >= 16 ? 25 : 0) + 25
  // });

  return (
    <div 
      className="accessibility-enhanced"
      data-reduced-motion={isReducedMotion}
      data-high-contrast={isHighContrast}
      data-font-size={fontSize}
    >
      {children}
    </div>
  );
=======
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      // Trap focus in modals
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        element.addEventListener('keydown', (e) => {
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
        });
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      // Add keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Alt + M for main menu
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const menuButton = document.querySelector('[aria-label="Toggle menu"]') as HTMLElement;
          menuButton?.click();
        }

        // Alt + H for home
        if (e.altKey && e.key === 'h') {
          e.preventDefault();
          window.location.href = '/';
        }

        // Alt + C for contact
        if (e.altKey && e.key === 'c') {
          e.preventDefault();
          window.location.href = '/contact';
        }
      });
    };

    // Improve color contrast
    const improveColorContrast = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .text-gray-300 {
            color: #ffffff !important;
          }
          .text-gray-400 {
            color: #e5e7eb !important;
          }
          .text-gray-500 {
            color: #d1d5db !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.id = 'announcer';
      document.body.appendChild(announcer);

      // Function to announce messages
      (window as any).announceToScreenReader = (message: string) => {
        const announcer = document.getElementById('announcer');
        if (announcer) {
          announcer.textContent = message;
        }
      };
    };

    // Initialize accessibility enhancements
    addSkipLinks();
    addAriaLabels();
    improveFocusManagement();
    addKeyboardNavigation();
    improveColorContrast();
    addScreenReaderAnnouncements();

    // Re-run accessibility checks when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
>>>>>>> cursor/analyze-improve-and-deploy-application-187f
};

export default AccessibilityEnhancer;
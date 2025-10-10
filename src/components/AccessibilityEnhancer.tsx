import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableSkipLinks?: boolean;
  enableColorContrast?: boolean;
  enableTextScaling?: boolean;
  enableMotionReduction?: boolean;
  enableVoiceNavigation?: boolean;
  enableAnalytics?: boolean;
  enableErrorReporting?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true,
  enableSkipLinks = true,
  enableColorContrast = true,
  enableTextScaling = true,
  enableMotionReduction = true,
  enableVoiceNavigation = true,
  enableAnalytics = true,
  enableErrorReporting = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // High contrast mode detection
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      
      if (mediaQuery.matches) {
        document.body.classList.add('high-contrast');
      }
    }

    // Reduced motion detection
    if (enableMotionReduction) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      
      if (mediaQuery.matches) {
        document.body.classList.add('reduced-motion');
      }
    }

    // Skip links
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-cyan-400 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #00ffff;
        color: #000;
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
    }

    // Focus management
    if (enableFocusManagement) {
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
      const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      // Add keyboard event listeners for custom components
      const handleKeyboardNavigation = (e: KeyboardEvent) => {
        const target = e.target as HTMLElement;
        
        // Handle Enter and Space for custom buttons
        if ((e.key === 'Enter' || e.key === ' ') && target.getAttribute('role') === 'button') {
          e.preventDefault();
          target.click();
        }
        
        // Handle arrow keys for custom menus
        if (target.getAttribute('role') === 'menuitem') {
          const menu = target.closest('[role="menu"]');
          if (menu) {
            const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
            const currentIndex = menuItems.indexOf(target);
            
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              const nextIndex = (currentIndex + 1) % menuItems.length;
              menuItems[nextIndex].focus();
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
              menuItems[prevIndex].focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add live region for dynamic content
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announce = (message: string) => {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      };

      // Announce navigation changes
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;
      
      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        announce('Page navigation occurred');
      };
      
      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        announce('Page content updated');
      };
    }

    // Color contrast checking
    if (enableColorContrast) {
      const checkColorContrast = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
          const styles = window.getComputedStyle(element);
          const color = styles.color;
          const backgroundColor = styles.backgroundColor;
          
          // Basic contrast check (simplified)
          if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
            // This is a simplified check - in a real implementation,
            // you'd use a proper contrast ratio calculation
            console.log(`Color contrast check for element: ${element.tagName}`);
          }
        });
      };

      // Run contrast check after page load
      setTimeout(checkColorContrast, 1000);
    }

    // Text scaling
    if (enableTextScaling) {
      const updateFontSize = (newSize: number) => {
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}px`;
        localStorage.setItem('fontSize', newSize.toString());
      };

      // Load saved font size
      const savedFontSize = localStorage.getItem('fontSize');
      if (savedFontSize) {
        updateFontSize(parseInt(savedFontSize));
      }

      // Add font size controls
      const fontControls = document.createElement('div');
      fontControls.className = 'font-size-controls fixed top-4 right-4 z-50 bg-slate-800 p-2 rounded';
      fontControls.innerHTML = `
        <button id="decrease-font" class="text-white px-2 py-1 bg-slate-700 rounded mr-1">A-</button>
        <span id="font-size-display" class="text-white px-2">${fontSize}px</span>
        <button id="increase-font" class="text-white px-2 py-1 bg-slate-700 rounded ml-1">A+</button>
      `;
      document.body.appendChild(fontControls);

      document.getElementById('decrease-font')?.addEventListener('click', () => {
        if (fontSize > 12) {
          updateFontSize(fontSize - 2);
        }
      });

      document.getElementById('increase-font')?.addEventListener('click', () => {
        if (fontSize < 24) {
          updateFontSize(fontSize + 2);
        }
      });
    }

    // Voice navigation
    if (enableVoiceNavigation && 'speechSynthesis' in window) {
      const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
      };

      // Speak focused elements
      document.addEventListener('focusin', (e) => {
        const target = e.target as HTMLElement;
        const text = target.getAttribute('aria-label') || target.textContent || target.alt;
        if (text) {
          speak(text);
        }
      });
    }

    // Analytics
    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      
      // Track accessibility features usage
      const trackAccessibilityFeature = (feature: string) => {
        gtag('event', 'accessibility_feature_used', {
          event_category: 'Accessibility',
          event_label: feature
        });
      };

      // Track keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          trackAccessibilityFeature('keyboard_navigation');
        }
      });

      // Track screen reader usage
      if (navigator.userAgent.includes('NVDA') || navigator.userAgent.includes('JAWS')) {
        trackAccessibilityFeature('screen_reader_detected');
      }
    }

    // Error reporting
    if (enableErrorReporting) {
      window.addEventListener('error', (event) => {
        console.error('Accessibility error:', event.error);
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as any).gtag;
          gtag('event', 'accessibility_error', {
            event_category: 'Accessibility',
            event_label: event.error?.message || 'Unknown error'
          });
        }
      });
    }

  }, [
    enableKeyboardNavigation,
    enableScreenReaderSupport,
    enableHighContrast,
    enableFocusManagement,
    enableAriaLabels,
    enableSkipLinks,
    enableColorContrast,
    enableTextScaling,
    enableMotionReduction,
    enableVoiceNavigation,
    enableAnalytics,
    enableErrorReporting
  ]);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
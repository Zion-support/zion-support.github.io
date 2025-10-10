import React, { useEffect } from 'react';

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
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add skip links
    if (enableSkipLinks) {
      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);

      // Add skip link styles
      const style = document.createElement('style');
      style.textContent = `
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        .skip-link:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals/menus
        if (e.key === 'Escape') {
          const openMenus = document.querySelectorAll('[aria-expanded="true"]');
          openMenus.forEach(menu => {
            menu.setAttribute('aria-expanded', 'false');
            menu.blur();
          });
        }

        // Tab navigation improvements
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      // Remove keyboard navigation class on mouse use
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
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
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (element.hasAttribute('role') && element.getAttribute('role') === 'dialog') {
                trapFocus(element);
              }
            }
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    // High contrast mode
    if (enableHighContrast) {
      const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');
      const updateHighContrast = () => {
        if (highContrastMediaQuery.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };
      highContrastMediaQuery.addListener(updateHighContrast);
      updateHighContrast();
    }

    // Motion reduction
    if (enableMotionReduction) {
      const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const updateMotionReduction = () => {
        if (motionMediaQuery.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };
      motionMediaQuery.addListener(updateMotionReduction);
      updateMotionReduction();
    }

    // Text scaling
    if (enableTextScaling) {
      const textScalingMediaQuery = window.matchMedia('(min-resolution: 2dppx)');
      const updateTextScaling = () => {
        if (textScalingMediaQuery.matches) {
          document.body.classList.add('high-dpi');
        } else {
          document.body.classList.remove('high-dpi');
        }
      };
      textScalingMediaQuery.addListener(updateTextScaling);
      updateTextScaling();
    }

    // Voice navigation support
    if (enableVoiceNavigation && 'speechSynthesis' in window) {
      const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
      };

      // Add voice navigation to buttons
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' && target.textContent) {
          speak(target.textContent);
        }
      });
    }

    // Analytics for accessibility
    if (enableAnalytics) {
      // Track keyboard usage
      document.addEventListener('keydown', (e) => {
        if ('gtag' in window) {
          (window as any).gtag('event', 'keyboard_navigation', {
            event_category: 'Accessibility',
            event_label: e.key,
            value: 1
          });
        }
      });

      // Track screen reader usage
      if ('speechSynthesis' in window) {
        (window as any).gtag('event', 'screen_reader_detected', {
          event_category: 'Accessibility',
          event_label: 'Screen Reader',
          value: 1
        });
      }
    }
  }, []);

  return null;
};

export default AccessibilityEnhancer;

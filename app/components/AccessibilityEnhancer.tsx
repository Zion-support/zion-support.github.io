'use client';
import { useEffect } from 'react';

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
  enableErrorReporting = true,
}) => {
  useEffect(() => {
    // Skip to main content link
    if (enableSkipLinks) {
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
    }

    // High contrast mode detection
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };
      
      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);
    }

    // Reduced motion detection
    if (enableMotionReduction) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };
      
      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);
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

        const handleTabKey = (e: KeyboardEvent) => {
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
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        trapFocus(modal as HTMLElement);
      });
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
          modals.forEach(modal => {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            closeButton?.click();
          });
        }

        // Arrow keys for menu navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const menu = document.querySelector('[role="menu"]');
          if (menu && menu.contains(e.target as Node)) {
            e.preventDefault();
            const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
            const currentIndex = items.indexOf(e.target as HTMLElement);
            const nextIndex = e.key === 'ArrowDown' 
              ? (currentIndex + 1) % items.length
              : (currentIndex - 1 + items.length) % items.length;
            items[nextIndex]?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Screen reader announcements
    if (enableScreenReaderSupport) {
      const announceToScreenReader = (message: string) => {
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
          if (mutation.type === 'childList') {
            const addedNodes = Array.from(mutation.addedNodes);
            const hasNewContent = addedNodes.some(node => 
              node.nodeType === Node.ELEMENT_NODE && 
              (node as Element).querySelector('h1, h2, h3, [role="main"]')
            );
            
            if (hasNewContent) {
              announceToScreenReader('Page content updated');
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }

    // Color contrast monitoring
    if (enableColorContrast && enableAnalytics) {
      const checkColorContrast = () => {
        const elements = document.querySelectorAll('*');
        let lowContrastElements = 0;

        elements.forEach(element => {
          const styles = window.getComputedStyle(element);
          const color = styles.color;
          const backgroundColor = styles.backgroundColor;
          
          // Basic contrast check (simplified)
          if (color && backgroundColor && color !== backgroundColor) {
            // This is a simplified check - in production, use a proper contrast ratio calculator
            const hasLowContrast = color === backgroundColor;
            if (hasLowContrast) {
              lowContrastElements++;
            }
          }
        });

        if (lowContrastElements > 0 && 'gtag' in window) {
          (window as any).gtag('event', 'accessibility_issue', {
            event_category: 'Accessibility',
            event_label: 'Low Color Contrast',
            value: lowContrastElements
          });
        }
      };

      // Check contrast on page load and after dynamic content changes
      setTimeout(checkColorContrast, 1000);
      
      const observer = new MutationObserver(() => {
        setTimeout(checkColorContrast, 500);
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
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
    enableErrorReporting,
  ]);

  return null;
};

export default AccessibilityEnhancer;
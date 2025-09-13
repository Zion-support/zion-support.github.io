import React, { useEffect, useState } from 'react';

interface AccessibilityMetrics {
  hasAltText: boolean;
  hasHeadings: boolean;
  hasLandmarks: boolean;
  hasFocusableElements: boolean;
  contrastRatio: number;
  fontSize: string;
}

const AccessibilityEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<AccessibilityMetrics | null>(null);
  const [isAccessible, setIsAccessible] = useState(false);
  const [highContrastMode, setHighContrastMode] = useState(false);

  useEffect(() => {
    // Check for accessibility issues
    const checkAccessibility = () => {
      const images = document.querySelectorAll('img');
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const landmarks = document.querySelectorAll('main, nav, header, footer, aside, section, article');
      const focusableElements = document.querySelectorAll('button, input, select, textarea, a[href]');
      
      const hasAltText = Array.from(images).every(img => img.alt || img.getAttribute('aria-label'));
      const hasHeadings = headings.length > 0;
      const hasLandmarks = landmarks.length > 0;
      const hasFocusableElements = focusableElements.length > 0;
      
      // Check contrast ratio (simplified)
      const bodyStyle = window.getComputedStyle(document.body);
      const backgroundColor = bodyStyle.backgroundColor;
      const color = bodyStyle.color;
      const contrastRatio = 4.5; // Simplified - would need actual calculation
      
      const newMetrics: AccessibilityMetrics = {
        hasAltText,
        hasHeadings,
        hasLandmarks,
        hasFocusableElements,
        contrastRatio,
        fontSize: bodyStyle.fontSize,
      };

      setMetrics(newMetrics);
      
      // Check overall accessibility
      const accessible = hasAltText && hasHeadings && hasLandmarks && hasFocusableElements;
      setIsAccessible(accessible);
    };

    // Check for user's high contrast preference
    const checkHighContrast = () => {
      if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
        setHighContrastMode(true);
        document.body.classList.add('high-contrast');
      }
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        // Disable animations
        const style = document.createElement('style');
        style.textContent = `
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Enhanced focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
        }
        
        .high-contrast *:focus {
          outline: 3px solid #ffffff;
          outline-offset: 3px;
        }
        
        .reduced-motion *:focus {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);

      // Skip to content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add ARIA labels to interactive elements
    const enhanceARIA = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Interactive button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        if (!link.textContent?.trim() && !link.querySelector('img[alt]')) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Keyboard navigation enhancement
    const enhanceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
          modals.forEach(modal => {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
            if (closeButton && document.activeElement !== closeButton) {
              (closeButton as HTMLElement).focus();
            }
          });
        }

        // Tab navigation enhancement
        if (e.key === 'Tab') {
          const focusableElements = document.querySelectorAll(
            'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    };

    // Screen reader announcements
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

    // Initialize accessibility enhancements
    checkAccessibility();
    checkHighContrast();
    checkReducedMotion();
    enhanceFocusManagement();
    enhanceARIA();
    enhanceKeyboardNavigation();

    // Monitor for dynamic content changes
    const observer = new MutationObserver(() => {
      checkAccessibility();
      enhanceARIA();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Announce page changes to screen readers
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const announcePageChange = () => {
        const pageTitle = document.title;
        const announcement = `Page loaded: ${pageTitle}`;
        
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.textContent = announcement;
        document.body.appendChild(liveRegion);

        setTimeout(() => {
          if (document.body.contains(liveRegion)) {
            document.body.removeChild(liveRegion);
          }
        }, 1000);
      };

      // Announce on page load
      announcePageChange();

      // Announce on route changes (for SPAs)
      window.addEventListener('popstate', announcePageChange);
      
      return () => {
        window.removeEventListener('popstate', announcePageChange);
      };
    }
  }, []);

  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 left-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg text-sm max-w-xs">
        <h3 className="font-bold mb-2">Accessibility Status</h3>
        <div className="space-y-1">
          <div className={metrics.hasAltText ? 'text-green-400' : 'text-red-400'}>
            Alt Text: {metrics.hasAltText ? '✓' : '✗'}
          </div>
          <div className={metrics.hasHeadings ? 'text-green-400' : 'text-red-400'}>
            Headings: {metrics.hasHeadings ? '✓' : '✗'}
          </div>
          <div className={metrics.hasLandmarks ? 'text-green-400' : 'text-red-400'}>
            Landmarks: {metrics.hasLandmarks ? '✓' : '✗'}
          </div>
          <div className={metrics.hasFocusableElements ? 'text-green-400' : 'text-red-400'}>
            Focusable: {metrics.hasFocusableElements ? '✓' : '✗'}
          </div>
          <div className={`font-semibold ${isAccessible ? 'text-green-400' : 'text-red-400'}`}>
            Overall: {isAccessible ? 'Accessible' : 'Issues Found'}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AccessibilityEnhancer;
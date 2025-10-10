import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableARIALabels = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility enhancements
    if (enableKeyboardNavigation) {
      setupKeyboardNavigation();
    }
    if (enableScreenReader) {
      setupScreenReaderSupport();
    }
    if (enableHighContrast) {
      setupHighContrastMode();
    }
    if (enableFocusManagement) {
      setupFocusManagement();
    }
    if (enableARIALabels) {
      setupARIALabels();
    }

    // Setup skip links
    setupSkipLinks();

    // Setup focus indicators
    setupFocusIndicators();

    // Setup color contrast checker
    setupColorContrastChecker();

  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement, enableARIALabels]);

  const setupKeyboardNavigation = () => {
    // Add keyboard navigation support
    document.addEventListener('keydown', (event) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.ctrlKey) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView();
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.ctrlKey) {
        const navigation = document.querySelector('nav');
        if (navigation) {
          navigation.focus();
          navigation.scrollIntoView();
        }
      }

      // Close modals with Escape
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.classList.contains('open')) {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
          }
        });
      }
    });
  };

  const setupScreenReaderSupport = () => {
    // Add screen reader announcements
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
          addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.hasAttribute('data-announce')) {
                announceToScreenReader(element.getAttribute('data-announce') || '');
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  const setupHighContrastMode = () => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Toggle high contrast mode
    const toggleHighContrast = () => {
      setIsHighContrast(!isHighContrast);
      document.documentElement.classList.toggle('high-contrast');
    };

    // Add high contrast toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle High Contrast';
    toggleButton.className = 'accessibility-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle high contrast mode');
    toggleButton.onclick = toggleHighContrast;
    document.body.appendChild(toggleButton);
  };

  const setupFocusManagement = () => {
    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      element.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      });
    };

    // Apply focus trap to all modals
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));
  };

  const setupARIALabels = () => {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element) => {
      if (!element.hasAttribute('aria-label') && !element.hasAttribute('aria-labelledby')) {
        const text = element.textContent?.trim();
        if (text) {
          element.setAttribute('aria-label', text);
        }
      }
    });

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.hasAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const navigation = document.querySelector('nav');
    if (navigation && !navigation.hasAttribute('role')) {
      navigation.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.hasAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  };

  const setupSkipLinks = () => {
    // Create skip links
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);
  };

  const setupFocusIndicators = () => {
    // Add focus indicators
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
      
      .accessibility-toggle {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
        background: #00ffff;
        color: #000;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
      }
      
      .high-contrast {
        --text-color: #ffffff;
        --bg-color: #000000;
        --accent-color: #ffff00;
        --border-color: #ffffff;
      }
      
      .high-contrast * {
        color: var(--text-color) !important;
        background-color: var(--bg-color) !important;
        border-color: var(--border-color) !important;
      }
      
      .high-contrast .text-gray-300 {
        color: #ffffff !important;
      }
      
      .high-contrast .bg-slate-900 {
        background-color: #000000 !important;
      }
      
      .high-contrast .border-cyan-400 {
        border-color: #ffff00 !important;
      }
      
      /* Focus indicators */
      *:focus {
        outline: 2px solid #00ffff;
        outline-offset: 2px;
      }
      
      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const setupColorContrastChecker = () => {
    // Check color contrast ratios
    const checkContrast = (element: Element) => {
      const computedStyle = window.getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;
      const color = computedStyle.color;
      
      // This is a simplified contrast checker
      // In a real implementation, you'd use a proper contrast calculation library
      console.log('Contrast check for element:', element, {
        backgroundColor,
        color
      });
    };

    // Check contrast for all text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button');
    textElements.forEach(checkContrast);
  };

  return null;
};

export default AccessibilityEnhancer;
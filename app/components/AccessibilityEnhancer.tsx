import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
interface AccessibilityEnhancerProps {
  isHighContrast?: boolean;
  isReducedMotion?: boolean;
  fontSize?: number;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    enableKeyboard: true,
    enableScreenReader: true,
    enableHighContrast: false,
    enableFocusManagement: true,
    enableLargeText: false,
    enableReducedMotion: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        }
    }
  }, []);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (newSettings.enableLargeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.enableReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus management
    if (newSettings.enableFocusManagement) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Keyboard navigation
    if (newSettings.enableKeyboard) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings, applyAccessibilitySettings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!settings.enableKeyboard) return;

    // Focus management for modals and dropdowns
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const openElements = document.querySelectorAll('[aria-expanded="true"]');
        openElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.setAttribute('aria-expanded', 'false');
            element.blur();
          }
        });
      }
    };

    // Add keyboard navigation for custom elements
    const addKeyboardNavigation = () => {
      const customButtons = document.querySelectorAll('[role="button"]:not(button)');
      customButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (button as HTMLElement).click();
          }
        });
      });
    };

    // Improve focus indicators
    const improveFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .focus\:ring-2:focus {
          box-shadow: 0 0 0 2px #3b82f6 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
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
    };

    // Initialize accessibility enhancements
    improveFocusIndicators();
    addKeyboardNavigation();
    addAriaLandmarks();

    // Re-run on navigation changes
    const observer = new MutationObserver(() => {
      addKeyboardNavigation();
      addAriaLandmarks();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return (
    <>
      {/* Accessibility Styles */}
      <style jsx global>{`
        /* High Contrast Mode */
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }

        .high-contrast * {
          border-color: currentColor !important;
        }

        /* Large Text Mode */
        .large-text {
          font-size: 1.2em;
        }

        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text h4 { font-size: 1.5em; }
        .large-text h5 { font-size: 1.25em; }
        .large-text h6 { font-size: 1.1em; }

        /* Reduced Motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }

        /* Focus Visible */
        .focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Keyboard Navigation */
        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation select:focus,
        .keyboard-navigation textarea:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Skip Link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }

        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;

'use client';

import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false
  });

  useEffect(() => {
    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Apply accessibility enhancements
    const applyAccessibilityEnhancements = () => {
      const root = document.documentElement;
      
      // High contrast mode
      if (settings.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }

      // Large text mode
      if (settings.largeText) {
        root.classList.add('large-text');
      } else {
        root.classList.remove('large-text');
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
    };

    applyAccessibilityEnhancements();

    // Add keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
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
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);

      // Enhance focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableList = document.querySelectorAll(focusableElements);
      
      focusableList.forEach(element => {
        element.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (element.tagName === 'BUTTON' || element.getAttribute('role') === 'button') {
              e.preventDefault();
              (element as HTMLElement).click();
            }
          }
        });
      });

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add role attributes
      const navElements = document.querySelectorAll('nav');
      navElements.forEach(nav => {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      });

      // Add main content landmark
      const mainContent = document.querySelector('#main-content') || document.querySelector('main');
      if (mainContent) {
        mainContent.setAttribute('role', 'main');
        mainContent.setAttribute('aria-label', 'Main content');
      }
    };

    enhanceKeyboardNavigation();

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

    // Monitor for dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Announce new content to screen readers
          const newContent = Array.from(mutation.addedNodes)
            .filter(node => node.nodeType === Node.ELEMENT_NODE)
            .map(node => (node as Element).textContent)
            .join(' ');
          
          if (newContent.trim()) {
            announceToScreenReader('New content loaded');
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, [settings]);

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="accessibility-enhancer">
      <div className="accessibility-controls">
        <h3>Accessibility Options</h3>
        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={() => toggleSetting('highContrast')}
            />
            High Contrast
          </label>
        </div>
        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={() => toggleSetting('largeText')}
            />
            Large Text
          </label>
        </div>
        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={() => toggleSetting('reducedMotion')}
            />
            Reduced Motion
          </label>
        </div>
        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={settings.focusVisible}
              onChange={() => toggleSetting('focusVisible')}
            />
            Enhanced Focus
          </label>
        </div>
      </div>

      <style jsx>{`
        .accessibility-enhancer {
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          max-width: 300px;
          display: none; /* Hidden by default, can be enabled for testing */
        }

        .accessibility-controls h3 {
          margin: 0 0 15px 0;
          font-size: 16px;
          color: #333;
        }

        .control-group {
          margin-bottom: 10px;
        }

        .control-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #555;
          cursor: pointer;
        }

        .control-group input[type="checkbox"] {
          width: 16px;
          height: 16px;
        }

        .skip-link:focus {
          top: 6px !important;
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

        /* High contrast styles */
        :global(.high-contrast) {
          filter: contrast(150%) brightness(120%);
        }

        :global(.high-contrast) * {
          border-color: currentColor !important;
        }

        /* Large text styles */
        :global(.large-text) {
          font-size: 1.2em;
        }

        :global(.large-text) h1 {
          font-size: 2.5em;
        }

        :global(.large-text) h2 {
          font-size: 2em;
        }

        :global(.large-text) h3 {
          font-size: 1.5em;
        }

        /* Reduced motion styles */
        :global(.reduced-motion) * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Enhanced focus styles */
        :global(.focus-visible) *:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
        }

        :global(.focus-visible) *:focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default AccessibilityEnhancer;
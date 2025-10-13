<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
<<<<<<< HEAD
'use client;

import React, { useEffect } from 'react;

interface AccessibilityEnhancerProps {}
  enableKeyboardNavigation?: boolean;

  enableScreenReaderSupport?: boolean;

  enableHighContrast?: boolean;

  enableFocusManagement?: boolean;
>>>>>>> origin/cursor/ad-creation-and-management-f267

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
}

<<<<<<< HEAD
export default function AccessibilityEnhancer() {
=======
interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false
  });

<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD
=======
        // Skip to main content
        if (event.key === 'Tab && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content]) as HTMLAnchorElement;;

          if (skipLink) {
=======
    if (enableKeyboardNavigation && typeof window !== 'undefined') {}
      const handleKeyDown = (event: KeyboardEvent) => {}
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {}
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
            skipLink.focus();

            event.preventDefault();

          }

=======
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Accessibility enhancements
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
        }
      });
    };

<<<<<<< HEAD
        // Close dropdowns with Escape key
<<<<<<< HEAD
        if (event.key === 'Escape) {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true]);;

          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false);

          })        }

=======
        if (event.key === 'Escape') {}
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {}
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          })
        }
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      };

      document.addEventListener(keydown, handleKeyDown);

      return () => document.removeEventListener(keydown, handleKeyDown);
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSettings(prev => ({ ...prev, reducedMotion: prefersReducedMotion }));

    // Apply settings
    applySettings(settings);
  }, [settings]);

<<<<<<< HEAD
  const applySettings = (newSettings: AccessibilitySettings) => {
=======
      // Large text preference
      const savedLargeText = localStorage.getItem('large-text');
      if (savedLargeText === 'true') {
        setSettings(prev => ({ ...prev, largeText: true }));
        document.documentElement.classList.add('large-text');
      }
    };

    checkPreferences();

    // Listen for changes in preferences
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setSettings(prev => ({ ...prev, focusVisible: true }));
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      setSettings(prev => ({ ...prev, focusVisible: false }));
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      skipLinks.className = 'skip-links';
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();

    // Cleanup
    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

<<<<<<< HEAD
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };
=======
=======
    enhanceAccessibility();
  }, []);

  return <>{children}</>;
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};
>>>>>>> origin/cursor/ad-creation-and-management-f267

  const togglePanel = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed top-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        aria-label="Toggle accessibility settings"
        title="Accessibility Settings"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>

<<<<<<< HEAD
      {/* Settings Panel */}
=======
      {/* Accessibility Panel */}
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
      {isVisible && (
        <div className="fixed top-16 right-4 z-50 bg-white rounded-lg shadow-xl p-6 w-80 max-w-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Accessibility Settings
          </h3>
          
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">High Contrast</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Large Text</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Reduce Motion</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Enhanced Focus</span>
            </label>
          </div>

          <button
            onClick={togglePanel}
            className="mt-4 w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      )}

      {/* CSS for accessibility features */}
<<<<<<< HEAD
      <style dangerouslySetInnerHTML={{
        __html: `
=======
      <style jsx global>{`
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
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .large-text {
          font-size: 1.25rem;
        }
        
        .large-text h1 {
          font-size: 3rem;
        }
        
        .large-text h2 {
          font-size: 2.5rem;
        }
        
        .large-text h3 {
          font-size: 2rem;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        `
      }} />
    </>
  );
}
=======
'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);

  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableHighContrast]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
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

      return () => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      };
    }
  }, [enableScreenReaderSupport]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

<<<<<<< HEAD
import React, { useEffect } from 'react'
const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
    document.body.insertBefore(skipLink, document.body.firstChild)
    // Focus management
    let isUsingMouse = false
    const handleMouseDown = () => {
      isUsingMouse = true
      document.body.classList.add('using-mouse')
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isUsingMouse = false
        document.body.classList.remove('using-mouse')
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('keydown', handleKeyDown)
    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', 'polite')
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.id = 'live-region'
    document.body.appendChild(liveRegion)
    // Announce page changes
    const announcePageChange = (message: string) => {
      const liveRegion = document.getElementById('live-region')
      if (liveRegion) {
        liveRegion.textContent = message
      }
    }
    // Listen for route changes (Next.js specific)
    const handleRouteChange = () => {
      announcePageChange('Page loaded')
    }
    // Add route change listener if available
    if (typeof window !== 'undefined' && window.history) {
      const originalPushState = window.history.pushState
      const originalReplaceState = window.history.replaceState
      window.history.pushState = function(...args) {
        originalPushState.apply(this, args)
        setTimeout(handleRouteChange, 100)
      }
      window.history.replaceState = function(...args) {
        originalReplaceState.apply(this, args)
        setTimeout(handleRouteChange, 100)
      }
      window.addEventListener('popstate', handleRouteChange)
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleKeyDown)
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink)
      }
      if (liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion)
      }
    }
  }, [])
  return null
}
// Add CSS for focus management
const focusStyles = `
  .using-mouse *:focus {
    outline: none !important
  }
  .focus-visible:focus {
    outline: 2px solid #2563eb !important
    outline-offset: 2px !important
  }
  .sr-only {
    position: absolute
    width: 1px
    height: 1px
    padding: 0
    margin: -1px
    overflow: hidden
    clip: rect(0, 0, 0, 0)
    white-space: nowrap
    border: 0
  }
  .sr-only.focus:not-sr-only:focus {
    position: static
    width: auto
    height: auto
    padding: inherit
    margin: inherit
    overflow: visible
    clip: auto
    white-space: normal
  }
`
// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = focusStyles
  document.head.appendChild(styleSheet)
}

export default AccessibilityEnhancer
=======
<<<<<<< HEAD

'use client';

import React, { useState, useEffect } from 'react';

>>>>>>> origin/chore/fix-lint-and-merge
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
<<<<<<< HEAD
  const [fontSize, setFontSize] = useState<'small | normal' | 'large | extra-large'>('normal);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia((prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    const savedHighContrast = localStorage.getItem('highContrast) === true';
    const savedFontSize = (localStorage.getItem('fontSize) as small' | 'normal | large' | 'extra-large) || normal';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      if (liveRegion && liveRegion.parentNode) {
        liveRegion && liveRegion.parentNode.removeChild(liveRegion);
      }
    }
  }, []);
  return null;
    } else {}
      if (liveRegion && liveRegion.parentNode) {liveRegion && liveRegion.parentNode.removeChild(liveRegion)}
    }
  }, [])return null;

                {size && size.charAt(0).toUpperCase()}
              </button>;
            ))}
      {/* Skip to main content link */}
      <a;

      >;
        className="sr-only "focus":not-sr-only "focus":absolute "focus":top-4 "focus":left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">"

        Skip to main content;
      </a>;
      {/* Screen reader only content */}
}
export default AccessibilityEnhancer;</div>;
        </div>;
      </div>;
}{/* Skip to main content link */}
      <a;

        <h1>Zion Tech Group - Technology Solutions Provider</h1>;
        <p>Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum;
          computing, blockchain infrastructure, and innovative development services.;
        </p>;
      </div>;
      {/* Main content */}

    </>;
  )}
import React, { useEffect, useState } from 'react';'

interface AccessibilityEnhancerProps {
  }
  "children": React.ReactNode;
}

const "AccessibilityEnhancer": React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  }
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal');'

export default AccessibilityEnhancer;

export default AccessibilityEnhancer;
ursor/automate-test-improve-and-merge-code-646c;

        </div>;
      </div>;
    </div>;
  )}}
      if (liveRegion && liveRegion.parentNode) {liveRegion && liveRegion.parentNode.removeChild(liveRegion)}
    }
  }, [])return null;

              >;
                {size && size.charAt(0).toUpperCase()}
              </button>;
            ))}
      {/* Skip to main content link */}

      {/* Screen reader only content */}
}

export default AccessibilityEnhancer;</div>;
export default AccessibilityEnhancer;

          </div>;
        </div>;
      </div>;

        <h1>Zion Tech Group - Technology Solutions Provider</h1>;
        <p>;
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum;
          computing, blockchain infrastructure, and innovative development services.;
        </p>;
      </div>;
      {/* Main content */}

    </>;
  );
}
export default AccessibilityEnhancer;

import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

export default function AccessibilityEnhancer() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }));

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setSettings(prev => ({ ...prev, highContrast: highContrastQuery.matches }));

    // Detect screen reader usage
    const screenReaderDetected = 
      'speechSynthesis' in window || 
      'speechRecognition' in window ||
      navigator.userAgent.includes('NVDA') ||
      navigator.userAgent.includes('JAWS') ||
      navigator.userAgent.includes('VoiceOver');
    
    setSettings(prev => ({ ...prev, screenReader: screenReaderDetected }));

    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: mediaQuery.matches,
      highContrast: highContrastQuery.matches,
      screenReader: screenReaderDetected,
    });
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
=======
  const [fontSize, setFontSize] = useState('medium');
  const [reducedMotion, setReducedMotion] = useState(false);

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, motion: boolean) => {
    const root = document.documentElement;
    
    if (highContrast) {
>>>>>>> origin/chore/fix-lint-and-merge
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (motion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.style.setProperty('--font-size-multiplier', getFontSizeMultiplier(fontSize));
  };

  const getFontSizeMultiplier = (size: string): string => {
    switch (size) {
      case 'small': return '0.875';
      case 'medium': return '1';
      case 'large': return '1.125';
      case 'extra-large': return '1.25';
      default: return '1';
    }
  };

  useEffect(() => {
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    setReducedMotion(savedReducedMotion);

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, savedReducedMotion);
  }, [applyAccessibilityStyles]);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };

  const changeFontSize = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('reducedMotion', newValue.toString());
    applyAccessibilityStyles(isHighContrast, fontSize, newValue);

  };

  return (
    <>

      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Options</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
          
          <div className="text-xs text-gray-600 dark:text-gray-300">Font Size:</div>
          <div className="flex gap-1">
            {['small', 'medium', 'large', 'extra-large'].map((size) => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'

                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase()}
              </button>
            ))}

          </div>

          <button
            onClick={toggleReducedMotion}
            className={`w-full px-3 py-1 text-xs rounded ${
              reducedMotion ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {reducedMotion ? 'Disable' : 'Enable'} Reduced Motion
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="accessibility-enhanced">
        {children}
      </div>

      <style jsx global>{`
        .high-contrast {
          --text-color: #ffffff;
          --bg-color: #000000;
          --border-color: #ffffff;
        }

        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .accessibility-enhanced {
          font-size: calc(1rem * var(--font-size-multiplier, 1));
        }
      `}</style>
    <   />
  );
}

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Load saved font size preference
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
    // Add ARIA live region for announcements;
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    // Announce page changes;
    const announcePageChange = (message: string) => {;
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {;
        liveRegion.textContent = message;
      ,};
    };
    // Listen for route changes (Next.js specific);
    const handleRouteChange = () => {;
      announcePageChange('Page loaded');
    };
    // Add route change listener if available;
    if (typeof window !== 'undefined' && window.history) {;
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;
      window.history.pushState = function(...args) {;
        originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };
      window.history.replaceState = function(...args) {;
        originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };
      window.addEventListener('popstate', handleRouteChange);
    };
    // Cleanup;
    return () => {;
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
      if (skipLink.parentNode) {;
        skipLink.parentNode.removeChild(skipLink);
      };
      if (liveRegion.parentNode) {;
        liveRegion.parentNode.removeChild(liveRegion);
      };
    };
  }, []);
  return null;
};
// Add CSS for focus management;
const focusStyles = `;
  .using-mouse *:focus {;
    outline: none !important;
  ,};
  .focus-visible: focus {;
    outline: 2px solid #2563eb !important;
    outline-offset: 2px !important;
  ,};
  .sr-only {;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  ,};
  .sr-only.focus: not-sr-only:focus {;
    position: static;
    width: auto;
    height: auto;
    padding: inherit;
    margin: inherit;
    overflow: visible;
    clip: auto;
    white-space: normal;
  ,};
`;
// Inject styles;
if (typeof document !== 'undefined') {;
  const styleSheet = document.createElement('style');
  styleSheet.textContent = focusStyles;
  document.head.appendChild(styleSheet);
};
export default AccessibilityEnhancer;
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
'use client';

'use client;

import React, { useEffect } from react';
import { useAccessibility } from './AccessibilityProvider;

export default function AccessibilityEnhancer() {
  const { highContrast, reducedMotion, fontSize } = useAccessibility();

  useEffect(() => {
    // Apply global accessibility styles
    const style = document.createElement(style');
    style.textContent = `
      :root {
        --font-size-small: 0.875rem;
        --font-size-medium: 1rem;
        --font-size-large: 1.125rem;
      }

      [data-font-size="small] {
        font-size: var(--font-size-small);
      }

      [data-font-size=medium"] {
        font-size: var(--font-size-medium);
      }

      [data-font-size="large] {
        font-size: var(--font-size-large);
      }

      [data-high-contrast=true"] {
        --tw-bg-opacity: 1;
        --tw-text-opacity: 1;
      }

      [data-reduced-motion="true] * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      /* Focus indicators */
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* Skip to content link */
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
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    }
  }, [highContrast, reducedMotion, fontSize]);

  return (
    <>
      {/* Skip to content link */}
      <a href=#main-content" className="skip-link">
        Skip to main content
      </a>
    </>
  );
}
<<<<<<< HEAD
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const AccessibilityEnhancer: React.FC = () => {;
  useEffect(() => {;
    // Add skip link for keyboard navigation;
    const skipLink = document && document.createElement('a');
    skipLink && skipLink.href = '#main-content';
    skipLink && skipLink.textContent = 'Skip to main content',;
    skipLink && skipLink.className = 'sr-only focus: not-sr-only',;
    skipLink && skipLink.style.cssText = `;
      position: absolute, top: -40px,;
      left: 6px, background: #000,;
      color: #fff, padding: 8px,;
      text-decoration: none, z-index: 1000,;
<<<<<<< HEAD
import React, { useEffect } from 'react';
const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus: not-sr-only'
    skipLink.style.cssText = `
      position: absolute, top: -40px
      left: 6px, background: #000
      color: #fff, padding: 8px
      text-decoration: none, z-index: 1000
    `;
    document && document.body.insertBefore(skipLink, document && document.body.firstChild);
    // Focus management;
    const handleMouseDown = () => {;
      document && document.body.classList && classList.add('using-mouse');
    };
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e && e.key === 'Tab') {;
        document && document.body.classList && classList.remove('using-mouse'),;
      }
    };
    document && document.addEventListener('mousedown', handleMouseDown);
    document && document.addEventListener('keydown', handleKeyDown);
    // Add ARIA live region for announcements;
    const liveRegion = document && document.createElement('div');
    liveRegion && liveRegion.setAttribute('aria-live', 'polite');
    liveRegion && liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion && liveRegion.className = 'sr-only';
    liveRegion && liveRegion.id = 'live-region';
    document && document.body.appendChild(liveRegion);
    // Announce page changes;
    const announcePageChange = (message: string) => {;
      const liveRegion = document && document.getElementById('live-region');
      if (liveRegion) {;
        liveRegion && liveRegion.textContent = message,;
      }
    };
    // Listen for route changes (Next && Next.js specific);
    const handleRouteChange = () => {;
      announcePageChange('Page loaded');
    };
    // Add route change listener if available;
    if (typeof window !== 'undefined' && window && window.history) {;
      const originalPushState = window && window.history.pushState;
      const originalReplaceState = window && window.history.replaceState;
      window && window.history.pushState = function(...args) {;
        originalPushState && originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };
      window && window.history.replaceState = function(...args) {;
        originalReplaceState && originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };
      window && window.addEventListener('popstate', handleRouteChange);
    }
    // Cleanup;
    return () => {;
      document && document.removeEventListener('mousedown', handleMouseDown);
      document && document.removeEventListener('keydown', handleKeyDown);
      if (skipLink && skipLink.parentNode) {;
        skipLink && skipLink.parentNode.removeChild(skipLink);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      if (liveRegion && liveRegion.parentNode) {;
        liveRegion && liveRegion.parentNode.removeChild(liveRegion);
      }
    }
  }, []);
  return null;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect } from 'react';
;
const AccessibilityEnhancer: React.FC = () => {
  useEffect (() => {
    // Add skip link for keyboard navigation;
    const skip_link = document.create_element ('a');
    skip_link.href = '#main - content';
    skip_link.text_content = 'Skip to main content',
    skip_link.class_name = 'sr - only focus: not - sr - only',
    skip_link.style.css_text = `;
      position: absolute, top: -40px,
      left: 6px, background: #000,
      color: #fff, padding: 8px,
      text - decoration: none, z - index: 1000,
    `;
    document.body.insert_before (skip_link, document.body.first_child);
;
    // Focus management;
    const handleMouseDown = () =>: any {
      document.body.class_list.add ('using - mouse');
    }
    const handleKeyDown = (e: KeyboardEvent) =>: any {
      // Check condition
if ( {) {
  $2
}
        document.body.class_list.remove ('using - mouse'),
      }
    }
;
    document.addEventListener ('mousedown', handleMouseDown);
    document.addEventListener ('keydown', handleKeyDown);
;
    // Add ARIA live region for announcements;
    const live_region = document.create_element ('div');
    live_region.set_attribute ('aria - live', 'polite');
    live_region.set_attribute ('aria - atomic', 'true');
    live_region.class_name = 'sr - only';
    live_region.id = 'live - region';
    document.body.append_child (live_region);
;
    // Announce page changes;
    const announcePageChange = (message: string) =>: any {
      const live_region = document.getElementById ('live - region');
      // Check condition
if ( {) {
  $2
}
        live_region.text_content = message,
      }
    }
;
    // Listen for route changes (Next.js specific);
    const handleRouteChange = () =>: any {
      announcePageChange ('Page loaded');
    }
;
    // Add route change listener if available;
    // Check condition
if ( {) {
  $2
}
      const originalPushState = window.history.push_state;
      const originalReplaceState = window.history.replace_state;
;
      window.history.push_state = function (...args) {
        originalPushState.apply (this, args);
        set_timeout (handleRouteChange, 100);
      }
;
      window.history.replace_state = function (...args) {
        originalReplaceState.apply (this, args);
        set_timeout (handleRouteChange, 100);
      }
;
      window.addEventListener ('popstate', handleRouteChange);
    }
    // Cleanup;
    return () => {
      document.removeEventListener ('mousedown', handleMouseDown);
      document.removeEventListener ('keydown', handleKeyDown);
      // Check condition
if ( {) {
  $2
}
        skip_link.parent_node.remove_child (skip_link);
      }
      // Check condition
if ( {) {
  $2
}
        live_region.parent_node.remove_child (live_region);
      }
    }
  }, []);
;
  return null;
}
;
// Add CSS for focus management;
const focus_styles = `;
  .using - mouse *:focus {
    outline: none !important,
  }
  .focus - visible:focus {
    outline: 2px solid #2563eb !important, outline - offset: 2px !important,
  }
  .sr - only {
    position: absolute, width: 1px,
    height: 1px, padding: 0,
    margin: -1px, overflow: hidden,
    clip: rect (0, 0, 0, 0);
    white - space: nowrap, border: 0,
  }
  .sr - only.focus:not - sr - only:focus {
    position: static, width: auto,
    height: auto, padding: inherit,
    margin: inherit, overflow: visible,
    clip: auto, white - space: normal,
  }
`;
;
// Inject styles;
// Check condition
if ( {) {
  $2
}
  const style_sheet = document.create_element ('style');
  style_sheet.text_content = focus_styles;
  document.head.append_child (style_sheet);
}
export default AccessibilityEnhancer;
import React, { useEffect, useState } from 'react';
;
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}
const AccessibilityEnhancer: React.FC < AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState (false);
  const [font_size, setFontSize] = useState ('normal');
  const [reduced_motion, setReducedMotion] = useState (false);
;
  useEffect (() => {
    const prefersReducedMotion = window.match_media ('(prefers - reduced - motion: reduce)').matches;
    setReducedMotion (prefersReducedMotion);
;
    const savedHighContrast = local_storage.get_item ('high_contrast') === 'true';
    const savedFontSize = local_storage.get_item ('font_size') || 'normal';
    setIsHighContrast (savedHighContrast);
    setFontSize (savedFontSize);
  }, []);
;
  const applyAccessibilityStyles = (
    high_contrast: boolean,
    fontSizeValue: string,
    reducedMotionValue: boolean) =>: any {
    const root = document.document_element;
;
    // Check condition
if ( {) {
  $2
}
      root.class_list.add ('high - contrast');
<<<<<<< HEAD
    } else {
      root.class_list.remove ('high - contrast');
    }
=======

    } else {
      root.class_list.remove ('high - contrast');
    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    root.class_list.remove ('font - small', 'font - normal', 'font - large', 'font - extra - large');
    root.class_list.add (`font-${fontSizeValue}`);
;
    // Check condition
if ( {) {
  $2
}
      root.class_list.add ('reduced - motion');
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } else {
      root.class_list.remove ('reduced - motion');
    }
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
// Add CSS for focus management;
const focusStyles = `;
  .using-mouse *:focus {;
    outline: none !important,;
  }
  .focus-visible:focus {;
    outline: 2px solid #2563eb !important, outline-offset: 2px !important,;
  }
  .sr-only {;
    position: absolute, width: 1px,;
    height: 1px, padding: 0,;
    margin: -1px, overflow: hidden,;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap, border: 0,;
  }
  .sr-only && only.focus:not-sr-only:focus {;
    position: static, width: auto,;
    height: auto, padding: inherit,;
    margin: inherit, overflow: visible,;
    clip: auto, white-space: normal,;
  }
`;
// Inject styles;
if (typeof document !== 'undefined') {;
  const styleSheet = document && document.createElement('style');
  styleSheet && styleSheet.textContent = focusStyles;
  document && document.head.appendChild(styleSheet);
}
export default AccessibilityEnhancer;
import React, { useEffect, useState } from 'react';
interface AccessibilityEnhancerProps {;
  children: React && React.ReactNode;
}
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {;
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState("normal");
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    // Check for user"s motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);
    const savedHighContrast = localStorage && localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage && localStorage.getItem('fontSize') || 'normal';
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);
  const applyAccessibilityStyles = (;
    highContrast: boolean,;
    fontSizeValue: string,;
    reducedMotionValue: boolean;
  ) => {;
    const root = document && document.documentElement;
    if (highContrast) {;
      root && root.classList.add('high-contrast');
    } else {;
      root && root.classList.remove('high-contrast');
    }
    root && root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    root && root.classList.add(`font-${fontSizeValue}`);
    if (reducedMotionValue) {;
      root && root.classList.add('reduced-motion');
    } else {;
      root && root.classList.remove('reduced-motion');
    }
  };
  const toggleHighContrast = () => {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage && localStorage.setItem('highContrast', newValue && newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
<<<<<<< HEAD
  };
  const changeFontSize = (newSize: string) => {;
=======

  };
  const changeFontSize = (newSize: string) => {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setFontSize(newSize);
    localStorage && localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  }
  return (
    <>;
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">;
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Options</h3>;
        <div className="space-y-2">;
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}>;
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast;
          </button>;
          <div className="text-xs text-gray-600 dark:text-gray-300">Font Size:</div>;
          <div className="flex gap-1">;
            {['small', 'normal', 'large', 'extra-large'].map((size) => (;
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${;
                  fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
                }`}
                aria-label={`Set font size to ${size}`}
              >;
                {size && size.charAt(0).toUpperCase()}
              </button>;
            ))}
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

          </div>;
        </div>;
      </div>;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export default AccessibilityEnhancer;
};


<<<<<<< HEAD
          </div>;
        </div>;
      </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


export default AccessibilityEnhancer;
=======
};


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">;
        Skip to main content;
      </a>;
      {/* Screen reader only content */}
      <div className="sr-only">;
        <h1>Zion Tech Group - Technology Solutions Provider</h1>;
        <p>;
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum;
          computing, blockchain infrastructure, and innovative development services.;
        </p>;
      </div>;
      {/* Main content */}
      <div id="main-content">{children}</div>;
    </>;
  );
}
export default AccessibilityEnhancer;
<<<<<<< HEAD
<<<<<<< HEAD
export default AccessibilityEnhancer;
};

export default AccessibilityEnhancer;
export default AccessibilityEnhancer;
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default AccessibilityEnhancer;
<<<<<<< HEAD
;
  const toggleHighContrast = () =>: any {
    const new_value = !isHighContrast;
    setIsHighContrast (new_value);
    local_storage.set_item ('high_contrast', new_value.to_string ());
    applyAccessibilityStyles (new_value, font_size, reduced_motion);
  }
;
  const changeFontSize = (new_size: string) =>: any {
    setFontSize (new_size);
    local_storage.set_item ('font_size', new_size);
    applyAccessibilityStyles (isHighContrast, new_size, reduced_motion);
  }
;
  return (
    <>;
      {/* Accessibility Controls */}
      <div className="accessibility - controls fixed top - 4 right - 4 z - 50 bg - white dark:bg - gray - 800 shadow - lg rounded - lg p - 4 border">;
        <h3 className="text - sm font - semibold mb - 2 text - gray - 900 dark:text - white">Accessibility Options</h3>;
        <div className="space - y-2">;
          <button;
            on_click={toggleHighContrast}
            className={`w - full px - 3 py - 1 text - xs rounded ${
              isHighContrast ? 'bg - blue - 600 text - white' : 'bg - gray - 200 text - gray - 700 hover:bg - gray - 300';
            }`}
            aria - label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >;
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast;
          </button>;
          <div className="text - xs text - gray - 600 dark:text - gray - 300">Font Size:</div>;
          <div className="flex gap - 1">;
            {['small', 'normal', 'large', 'extra - large'].map ((size) => (
              <button;
                key={size}
                on_click={() => changeFontSize (size)}
                className={`px - 2 py - 1 text - xs rounded ${
                  font_size === size ? 'bg - blue - 600 text - white' : 'bg - gray - 200 text - gray - 700 hover:bg - gray - 300';
                }`}
                aria - label={`Set font size to ${size}`}
              >;
                {size.char_at (0).toUpperCase ()}
              </button>))}
          </div>;
        </div>;
      </div>;
      {/* Skip to main content link */}
      <a;
        href="#main - content";
        className="sr - only focus:not - sr - only focus:absolute focus:top - 4 focus:left - 4 bg - blue - 600 text - white px - 4 py - 2 rounded z - 50";
      >;
        Skip to main content;
      </a>;
      {/* Screen reader only content */}
      <div className="sr - only">;
        <h1 > Zion Tech Group - Technology Solutions Provider</h1>;
        <p>;
          Leading technology solutions provider helping businesses transform their digital presence with cutting - edge AI, quantum;
          computing, blockchain infrastructure, and innovative development services.;
        </p>;
      </div>;
      {/* Main content */}
      <div id="main - content">{children}</div>;
    </>);
}
;
export default AccessibilityEnhancer;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
export default AccessibilityEnhancer;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

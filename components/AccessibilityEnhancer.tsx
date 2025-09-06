import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus: not-sr-only',
    skipLink.style.cssText = `
      position: absolute, top: -40px,
      left: 6px, background: #000,
      color: #fff, padding: 8px,
      text-decoration: none, z-index: 1000,
    `;
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management
    const handleMouseDown = () => {
      document.body.classList.add('using-mouse');
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.remove('using-mouse');
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = (message: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Listen for route changes (Next.js specific)
    const handleRouteChange = () => {
      announcePageChange('Page loaded');
    };

    // Add route change listener if available
    if (typeof window !== 'undefined' && window.history) {
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = function(...args) {
        originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.history.replaceState = function(...args) {
        originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.addEventListener('popstate', handleRouteChange);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion);
      }
    };
  }, []);

  return null;
};

// Add CSS for focus management
const focusStyles = `
  .using-mouse *:focus {
    outline: none !important,
  }
  .focus-visible:focus {
    outline: 2px solid #2563eb !important, outline-offset: 2px !important,
  }
  .sr-only {
    position: absolute, width: 1px,
    height: 1px, padding: 0,
    margin: -1px, overflow: hidden,
    clip: rect(0, 0, 0, 0);
    white-space: nowrap, border: 0,
  }
  .sr-only.focus:not-sr-only:focus {
    position: static, width: auto,
    height: auto, padding: inherit,
    margin: inherit, overflow: visible,
    clip: auto, white-space: normal,
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = focusStyles;
  document.head.appendChild(styleSheet);
}

export default AccessibilityEnhancer;
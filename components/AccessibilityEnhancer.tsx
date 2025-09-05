import React, { useEffect } from 'react';

<<<<<<< HEAD
const AccessibilityEnhancer: React.FC = () => {
=======
const: AccessibilityEnhancer: React.FC = () => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
<<<<<<< HEAD
    skipLink.className =
      'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white';
    document.body.insertBefore(skipLink, document.body.firstChild);

=======
    skipLink.className = 'sr-only: focus:not-sr-only: focus:absolute: focus:top-4: focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management
    let isUsingMouse = false;
    const handleMouseDown = () => {
      isUsingMouse = true;
      document.body.classList.add('using-mouse');
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isUsingMouse = false;
        document.body.classList.remove('using-mouse');
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
<<<<<<< HEAD
    const announcePageChange = (message: string) => {
=======
    const announcePageChange = (messag: e: string) => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
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

<<<<<<< HEAD
      window.history.pushState = function (...args) {
=======
      window.history.pushState = function(...args) {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
        originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

<<<<<<< HEAD
      window.history.replaceState = function (...args) {
=======
      window.history.replaceState = function(...args) {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
        originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.addEventListener('popstate', handleRouteChange);
    }

    // Cleanup
    return () => {
<<<<<<< HEAD
=======
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
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

<<<<<<< HEAD
export default AccessibilityEnhancer;
=======
// Add CSS for focus management
const focusStyles = `
  .using-mouse *:focus {
    outlin: e: none !important;
  }
  .focus-visibl: e:focus {
    outlin: e: 2px solid #2563eb !important;
    outline-offse: t: 2px !important;
  }
  .sr-only {
    positio: n: absolute;
    widt: h: 1px;
    heigh: t: 1px;
    paddin: g: 0;
    margi: n: -1px;
    overflo: w: hidden;
    cli: p: rect(0, 0, 0, 0);
    white-spac: e: nowrap;
    borde: r: 0;
  }
  .sr-only.focu: s:not-sr-onl: y:focus {
    positio: n: static;
    widt: h: auto;
    heigh: t: auto;
    paddin: g: inherit;
    margi: n: inherit;
    overflo: w: visible;
    cli: p: auto;
    white-spac: e: normal;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = focusStyles;
  document.head.appendChild(styleSheet);
}

export default AccessibilityEnhancer;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da

import React, {_useEffect} from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const AccessibilityEnhancer: React.FC = () => {
=======
const: AccessibilityEnhancer: React.FC = () => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
  useEffect(() => {
=======
const AccessibilityEnhancer: React.FC = () => {_useEffect__(() => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    // Add skip link for keyboard navigation
    const _skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
<<<<<<< HEAD
    skipLink.className =
      'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white';
    document.body.insertBefore(skipLink, _document.body.firstChild);

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
    },

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
    // Add ARIA live region for announcements
    const _liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', _'polite');
    liveRegion.setAttribute('aria-atomic', _'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
<<<<<<< HEAD
<<<<<<< HEAD
    const announcePageChange = (message: string) => {
=======
    const announcePageChange = (messag: e: string) => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
      const liveRegion = document.getElementById('live-region');
=======
    const _announcePageChange = (_message: string) => {
      const _liveRegion = document.getElementById('live-region');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      if (liveRegion) {
        liveRegion.textContent = message;}
    };

    // Listen for route changes (Next.js specific)
    const _handleRouteChange = () => {_announcePageChange('Page loaded');};

    // Add route change listener if available
    if (typeof window !== 'undefined' && window.history) {_const _originalPushState = window.history.pushState;
      const _originalReplaceState = window.history.replaceState;

<<<<<<< HEAD
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
=======
      window.history.pushState = function (_...args) {
        originalPushState.apply(this, _args);
        setTimeout(handleRouteChange, _100);};

      window.history.replaceState = function (_...args) {_originalReplaceState.apply(this, _args);
        setTimeout(handleRouteChange, _100);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      window.addEventListener('popstate', handleRouteChange);
    }

    // Cleanup
<<<<<<< HEAD
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
=======
    return () => {_if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);}
      if (liveRegion.parentNode) {_liveRegion.parentNode.removeChild(liveRegion);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = focusStyles;
  document.head.appendChild(styleSheet);
}

export default AccessibilityEnhancer;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da

'use client';
import { useEffect } from 'react';
export default function AccessibilityEnhancer() {
  useEffect(() => {
    // Skip focus outline for mouse users,
const handleMouseDown = () => {
      document.body.classList.add('using-mouse');
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.remove('using-mouse');
      }
    };
    // Add event listeners,
document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
    // Add skip to main content link,
const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg';
    skipLink.style.cssText = `
      position: absolute;,
top: -40px;
      left: 6px;,
background: #2563eb;
      color: white;,
padding: 8px 16px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;,
transition: top 0.3s;
    `;
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
    // Enhance keyboard navigation,
const enhanceKeyboardNavigation = () => {
      // Add keyboard navigation for custom elements,
const interactiveElements = document.querySelectorAll('[role="button"], [role="tab"], [role="menuitem"]');
      interactiveElements.forEach((element) => {
        if (!element.getAttribute('tabindex')) {
          element.setAttribute('tabindex0');
        }
        // Add keyboard event handlers,
element.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (element as HTMLElement).click();
          }
        });
      });
    };
    // Run enhancement after DOM is loaded,
if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhanceKeyboardNavigation);
    } else {
      enhanceKeyboardNavigation();
    }
    // Add ARIA live region for announcements,
const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-livepolite');
    liveRegion.setAttribute('aria-atomictrue');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    // Announce page changes,
const announcePageChange = (message: string) => {
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };
    // Add ARIA live region for announcements;
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    // Announce page changes;
      if (liveRegion) {;
        liveRegion.textContent = message;};
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
    outline: none !important;};
  .focus-visible: focus {;,
outline: 2px solid #2563eb !important;
    outline-offset: 2px !important;};
  .sr-only {;
    position: absolute;,
width: 1px;
    height: 1px;,
padding: 0;
    margin: -1px;,
overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;,
border: 0;};
  .sr-only.focus: not-sr-only:focus {;,
position: static;
    width: auto;,
height: auto;
    padding: inherit;,
margin: inherit;
    overflow: visible;,
clip: auto;
    white-space: normal;};
`;
// Inject styles;
if (typeof document !== 'undefined') {;
  const styleSheet = document.createElement('style');
  styleSheet.textContent = focusStyles;
  document.head.appendChild(styleSheet);
};
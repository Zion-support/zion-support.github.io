import React, { useEffect, useState } from 'react';
import { logInfo } from '../utils/logger';

const AccessibilityEnhancer: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setReducedMotion(prefersReducedMotion);
    setHighContrast(prefersHighContrast);

    // Add skip links
    const existingSkipLink = document.querySelector('.skip-link');
    if (!existingSkipLink) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.setAttribute('aria-label', 'Skip to main content');
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add additional skip links for different sections
    const skipLinks = [
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(({ href, text }) => {
      const existingLink = document.querySelector(`.skip-link[href="${href}"]`);
      if (!existingLink) {
        const skipLink = document.createElement('a');
        skipLink.href = href;
        skipLink.textContent = text;
        skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        skipLink.setAttribute('aria-label', text);
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    });

    // Add main content landmark
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
      main.setAttribute('role', 'main');
      main.setAttribute('aria-label', 'Main content');
    }

    // Add navigation landmark
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.id = 'navigation';
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add footer landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.id = 'footer';
      footer.setAttribute('role', 'contentinfo');
      footer.setAttribute('aria-label', 'Site footer');
    }

    // Add heading hierarchy validation
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (index === 0 && level !== 1) {
        logWarn(`First heading should be h1, found ${heading.tagName}`, 'Accessibility');
      }
      if (level > previousLevel + 1) {
        logWarn(`Heading level skipped from h${previousLevel} to h${level}`, 'Accessibility');
      }
      previousLevel = level;
    });

    // Add alt text validation for images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        logWarn(`Image missing alt text: ${img.src}`, 'Accessibility');
      }
    });

    // Add form labels validation
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        logWarn(`Form control missing label: ${input.tagName}`, 'Accessibility');
      }
    });

    // Enhance focus management
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
      
      // Handle escape key for closing modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus visible styles and accessibility enhancements
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #ffffff !important;
        outline-offset: 2px !important;
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        * {
          border-color: currentColor !important;
        }
        
        .bg-slate-900 {
          background-color: #000000 !important;
        }
        
        .text-white {
          color: #ffffff !important;
        }
        
        .text-gray-300 {
          color: #ffffff !important;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* Focus indicators for all interactive elements */
      button:focus-visible,
      a:focus-visible,
      input:focus-visible,
      textarea:focus-visible,
      select:focus-visible,
      [tabindex]:focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }

      /* Screen reader only content */
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

      .sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 0.5rem;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);

    // Add live region for announcements
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

    // Monitor route changes for announcements
    const observer = new MutationObserver(() => {
      const main = document.querySelector('main');
      if (main && main.getAttribute('data-page-loaded') !== 'true') {
        main.setAttribute('data-page-loaded', 'true');
        announcePageChange('Page content loaded');
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    logInfo('Accessibility enhancements initialized', 'AccessibilityEnhancer');

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      observer.disconnect();
    };
  }, []);

  // Add accessibility controls
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast', !highContrast);
    logInfo(`High contrast mode ${!highContrast ? 'enabled' : 'disabled'}`, 'AccessibilityEnhancer');
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    document.body.classList.toggle('reduced-motion', !reducedMotion);
    logInfo(`Reduced motion mode ${!reducedMotion ? 'enabled' : 'disabled'}`, 'AccessibilityEnhancer');
  };

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50">
      <div className="flex flex-col gap-2">
        <button
          onClick={toggleHighContrast}
          className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
        >
          {highContrast ? 'High Contrast: On' : 'High Contrast: Off'}
        </button>
        <button
          onClick={toggleReducedMotion}
          className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`${reducedMotion ? 'Disable' : 'Enable'} reduced motion mode`}
        >
          {reducedMotion ? 'Reduced Motion: On' : 'Reduced Motion: Off'}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;

import React, { useEffect, useCallback, useRef } from 'react';

interface AccessibilityOptions {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancerImproved: React.FC<AccessibilityOptions> = ({
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableReducedMotion = true
}) => {
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const skipLinksRef = useRef<HTMLAnchorElement[]>([]);

  // Add skip links
  const addSkipLinks = useCallback(() => {
    if (!enableSkipLinks) return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(({ href, text }) => {
      const existingLink = document.querySelector(`a[href="${href}"]`);
      if (existingLink) return;

      const skipLink = document.createElement('a');
      skipLink.href = href;
      skipLink.textContent = text;
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-all duration-200';
      skipLink.setAttribute('aria-label', text);
      skipLink.setAttribute('tabindex', '0');
      
      document.body.insertBefore(skipLink, document.body.firstChild);
      skipLinksRef.current.push(skipLink);
    });
  }, [enableSkipLinks]);

  // Add ARIA landmarks
  const addAriaLandmarks = useCallback(() => {
    if (!enableScreenReaderSupport) return;

    // Main content landmark
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
      main.setAttribute('role', 'main');
      main.setAttribute('aria-label', 'Main content');
    }

    // Navigation landmark
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.id = 'navigation';
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Footer landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.id = 'footer';
      footer.setAttribute('role', 'contentinfo');
      footer.setAttribute('aria-label', 'Site footer');
    }

    // Add heading hierarchy check
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
    });
  }, [enableScreenReaderSupport]);

  // Enhanced focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    let isKeyboardNavigation = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isKeyboardNavigation = true;
        document.body.classList.add('keyboard-navigation');
      }
      
      // Handle escape key for closing modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
        
        // Close any open modals or dropdowns
        const modals = document.querySelectorAll('[role="dialog"], [role="menu"], [aria-expanded="true"]');
        modals.forEach(modal => {
          const element = modal as HTMLElement;
          if (element.blur) element.blur();
        });
      }

      // Handle Enter and Space for custom interactive elements
      if ((e.key === 'Enter' || e.key === ' ') && activeElement) {
        if (activeElement.getAttribute('role') === 'button' || 
            activeElement.classList.contains('interactive')) {
          e.preventDefault();
          activeElement.click();
        }
      }
    };

    const handleMouseDown = () => {
      isKeyboardNavigation = false;
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableFocusManagement]);

  // Add accessibility styles
  const addAccessibilityStyles = useCallback(() => {
    if (styleRef.current) return;

    const style = document.createElement('style');
    style.textContent = `
      /* Focus management */
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #ffffff !important;
        outline-offset: 2px !important;
        background-color: #1d4ed8 !important;
        transform: translateY(0) !important;
        opacity: 1 !important;
      }

      /* Screen reader only content */
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      .sr-only:focus {
        position: static !important;
        width: auto !important;
        height: auto !important;
        padding: 0.5rem !important;
        margin: 0 !important;
        overflow: visible !important;
        clip: auto !important;
        white-space: normal !important;
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        * {
          border-color: currentColor !important;
        }
        
        .bg-gray-100 {
          background-color: #000000 !important;
          color: #ffffff !important;
        }
        
        .text-gray-600 {
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

      /* Focus visible for better keyboard navigation */
      .focus-visible:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }

      /* Interactive elements */
      .interactive {
        cursor: pointer;
        user-select: none;
      }

      .interactive:hover {
        opacity: 0.8;
      }

      .interactive:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `;
    
    document.head.appendChild(style);
    styleRef.current = style;
  }, []);

  // Add missing alt attributes to images
  const enhanceImages = useCallback(() => {
    if (!enableScreenReaderSupport) return;

    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      const image = img as HTMLImageElement;
      if (!image.alt) {
        // Try to get meaningful alt text from nearby text or aria-label
        const nearbyText = image.getAttribute('aria-label') || 
                          image.getAttribute('title') ||
                          image.closest('figure')?.querySelector('figcaption')?.textContent ||
                          `Image ${index + 1}`;
        
        image.alt = nearbyText;
      }
    });
  }, [enableScreenReaderSupport]);

  // Initialize all accessibility enhancements
  useEffect(() => {
    addSkipLinks();
    addAriaLandmarks();
    setupFocusManagement();
    addAccessibilityStyles();
    enhanceImages();

    return () => {
      // Cleanup skip links
      skipLinksRef.current.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      skipLinksRef.current = [];

      // Cleanup styles
      if (styleRef.current && styleRef.current.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [addSkipLinks, addAriaLandmarks, setupFocusManagement, addAccessibilityStyles, enhanceImages]);

  return null;
};

export default AccessibilityEnhancerImproved;
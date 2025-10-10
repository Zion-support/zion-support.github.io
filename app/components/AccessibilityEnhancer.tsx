'use client';
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      if (document.querySelector('.skip-links')) return;
      
      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#navigation" className="skip-link">Skip to navigation</a>
        <a href="#footer" className="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus indicators and accessibility styles
    const addAccessibilityStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
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
        }
        .skip-link:focus {
          top: 6px;
        }
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
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
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        @media (prefers-contrast: high) {
          .bg-white\\/5 {
            background-color: rgba(255, 255, 255, 0.2) !important;
          }
          .text-gray-300 {
            color: #ffffff !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });

      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        img.setAttribute('alt', 'Image');
      });
    };

    // Initialize accessibility features
    addSkipLinks();
    addAccessibilityStyles();
    addAriaLabels();
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Re-run aria labels when content changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
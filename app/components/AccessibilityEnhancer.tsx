'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ className = '' }) => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const addSkipLink = () => {
      const existingSkipLink = document.querySelector('.skip-link');
      if (existingSkipLink) return;

      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
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
    };

    // Enhance focus indicators
    const enhanceFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-enhanced:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        
        .skip-link:focus {
          top: 6px !important;
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
    };

    // Initialize accessibility enhancements
    addSkipLink();
    enhanceFocusIndicators();
    addAriaLabels();

    // Re-run accessibility enhancements when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Accessibility enhancer doesn't render anything visible
  return null;
};

export default AccessibilityEnhancer;
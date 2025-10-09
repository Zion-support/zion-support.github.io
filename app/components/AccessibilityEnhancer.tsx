'use client';
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    const addAriaLabels = () => {
      // Add ARIA labels to buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button) => {
        const text = button.textContent?.trim();
        if (!text || text.length === 0) {
          const icon = button.querySelector('svg, i, img');
          if (icon) {
            button.setAttribute('aria-label', 'Button');
          }
        }
      });

      // Add ARIA labels to images without alt text
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        img.setAttribute('alt', 'Image');
      });

      // Add ARIA labels to links without text
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link) => {
        const text = link.textContent?.trim();
        if (!text || text.length === 0) {
          const icon = link.querySelector('svg, i, img');
          if (icon) {
            link.setAttribute('aria-label', 'Link');
          }
        }
      });
    };

    const addFocusManagement = () => {
      // Add focus indicators
      const focusableElements = document.querySelectorAll(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    addAriaLabels();
    addFocusManagement();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
      addFocusManagement();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
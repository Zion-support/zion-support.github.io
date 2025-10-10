'use client';
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const enhanceAccessibility = () => {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      // Add navigation landmarks
      const navs = document.querySelectorAll('nav');
      navs.forEach((nav, index) => {
        if (!nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }
        if (!nav.getAttribute('aria-label')) {
          nav.setAttribute('aria-label', `Navigation ${index + 1}`);
        }
      });

      // Add footer landmarks
      const footers = document.querySelectorAll('footer');
      footers.forEach(footer => {
        if (!footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      });

      // Add section landmarks
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        if (!section.getAttribute('role')) {
          section.setAttribute('role', 'region');
        }
        if (!section.getAttribute('aria-label')) {
          const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
          if (heading) {
            section.setAttribute('aria-label', heading.textContent || `Section ${index + 1}`);
          }
        }
      });

      // Add heading hierarchy and IDs
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          if (text) {
            heading.setAttribute('id', `${text}-${index}`);
          }
        }
      });

      // Add alt text to images
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        img.setAttribute('alt', '');
      });

      // Add button labels
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add link descriptions
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
          const href = link.getAttribute('href');
          if (href) {
            link.setAttribute('aria-label', `Link to ${href}`);
          }
        }
      });

      // Add form labels
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach(input => {
        const id = input.getAttribute('id');
        if (id) {
          const label = document.querySelector(`label[for="${id}"]`);
          if (!label) {
            input.setAttribute('aria-label', 'Input field');
          }
        }
      });

      // Add table accessibility
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        if (!table.getAttribute('role')) {
          table.setAttribute('role', 'table');
        }
        
        const caption = table.querySelector('caption');
        if (!caption) {
          const captionElement = document.createElement('caption');
          captionElement.textContent = 'Data table';
          table.insertBefore(captionElement, table.firstChild);
        }
      });

      // Add list accessibility
      const lists = document.querySelectorAll('ul, ol');
      lists.forEach(list => {
        if (!list.getAttribute('role')) {
          list.setAttribute('role', list.tagName === 'UL' ? 'list' : 'list');
        }
      });

      // Add focus management for modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
              if (event.shiftKey && event.target === firstElement) {
                event.preventDefault();
                lastElement.focus();
              } else if (!event.shiftKey && event.target === lastElement) {
                event.preventDefault();
                firstElement.focus();
              }
            }
          };

          modal.addEventListener('keydown', handleKeyDown);
        }
      });
    };

    // Run on initial load
    enhanceAccessibility();

    // Run on dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              enhanceAccessibility();
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && event.target === document.body) {
        const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
      
      // Close modals with Escape key
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
          if (closeButton) {
            closeButton.click();
          }
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;
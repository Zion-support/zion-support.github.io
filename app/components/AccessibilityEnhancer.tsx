import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);

      // Add keyboard navigation support
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Add ARIA labels and roles
    const enhanceARIA = () => {
      // Add main landmark
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
      }

      // Add navigation landmark
      const nav = document.querySelector('nav');
      if (nav && !nav.id) {
        nav.id = 'navigation';
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      // Add footer landmark
      const footer = document.querySelector('footer');
      if (footer && !footer.id) {
        footer.id = 'footer';
        footer.setAttribute('role', 'contentinfo');
      }

      // Enhance buttons
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Enhance links
      const links = document.querySelectorAll('a');
      links.forEach((link) => {
        if (link.getAttribute('href')?.startsWith('tel:')) {
          link.setAttribute('aria-label', `Call ${link.textContent}`);
        } else if (link.getAttribute('href')?.startsWith('mailto:')) {
          link.setAttribute('aria-label', `Email ${link.textContent}`);
        }
      });

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
      });
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        // Add form labels
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input) => {
          if (!input.getAttribute('aria-label') && !form.querySelector(`label[for="${input.id}"]`)) {
            const placeholder = input.getAttribute('placeholder');
            if (placeholder) {
              input.setAttribute('aria-label', placeholder);
            }
          }
        });

        // Add form validation
        inputs.forEach((input) => {
          input.addEventListener('invalid', () => {
            input.setAttribute('aria-invalid', 'true');
          });

          input.addEventListener('input', () => {
            if (input.checkValidity()) {
              input.setAttribute('aria-invalid', 'false');
            }
          });
        });
      });
    };

    // Add live regions for dynamic content
    const addLiveRegions = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    // Announce page changes
    const announcePageChange = () => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `Page loaded: ${document.title}`;
      }
    };

    // Initialize accessibility enhancements
    addSkipLinks();
    enhanceFocusManagement();
    enhanceARIA();
    enhanceForms();
    addLiveRegions();
    announcePageChange();

    // Re-run enhancements when content changes
    const observer = new MutationObserver(() => {
      enhanceARIA();
      enhanceForms();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
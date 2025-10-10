import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Skip to main content functionality
    const setupSkipLinks = () => {
      const skipLink = document.querySelector('[href="#main-content"]') as HTMLAnchorElement;
      if (skipLink) {
        skipLink.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector('#main-content');
          if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    };

    // Keyboard navigation enhancement
    const enhanceKeyboardNavigation = () => {
      // Add keyboard support for dropdowns
      const dropdowns = document.querySelectorAll('[aria-haspopup="true"]');
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (dropdown as HTMLElement).click();
          }
        });
      });

      // Add keyboard support for cards
      const cards = document.querySelectorAll('.cyber-card');
      cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (card as HTMLElement).click();
          }
        });
      });
    };

    // Focus management
    const setupFocusManagement = () => {
      // Trap focus in modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (firstElement && lastElement) {
          modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
              if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                  e.preventDefault();
                  lastElement.focus();
                }
              } else {
                if (document.activeElement === lastElement) {
                  e.preventDefault();
                  firstElement.focus();
                }
              }
            }
          });
        }
      });
    };

    // ARIA labels enhancement
    const enhanceARIALabels = () => {
      // Add ARIA labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach(button => {
        const icon = button.querySelector('svg');
        if (icon && !button.textContent?.trim()) {
          const iconName = icon.getAttribute('data-icon') || 'button';
          button.setAttribute('aria-label', iconName);
        }
      });

      // Add ARIA labels to links
      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
          const href = link.getAttribute('href');
          if (href) {
            link.setAttribute('aria-label', `Link to ${href.replace('/', '').replace('-', ' ')}`);
          }
        }
      });
    };

    // High contrast mode detection
    const setupHighContrastMode = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      prefersHighContrast.addEventListener('change', handleContrastChange);
      handleContrastChange(prefersHighContrast);
    };

    // Reduced motion detection
    const setupReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };

      prefersReducedMotion.addEventListener('change', handleMotionChange);
      handleMotionChange(prefersReducedMotion);
    };

    // Screen reader announcements
    const setupScreenReaderAnnouncements = () => {
      const announcementRegion = document.createElement('div');
      announcementRegion.setAttribute('aria-live', 'polite');
      announcementRegion.setAttribute('aria-atomic', 'true');
      announcementRegion.className = 'sr-only';
      announcementRegion.id = 'announcements';
      document.body.appendChild(announcementRegion);

      // Function to announce messages
      window.announceToScreenReader = (message: string) => {
        announcementRegion.textContent = message;
        setTimeout(() => {
          announcementRegion.textContent = '';
        }, 1000);
      };
    };

    // Initialize all accessibility enhancements
    setupSkipLinks();
    enhanceKeyboardNavigation();
    setupFocusManagement();
    enhanceARIALabels();
    setupHighContrastMode();
    setupReducedMotion();
    setupScreenReaderAnnouncements();

    // Add CSS for screen reader only content
    const style = document.createElement('style');
    style.textContent = `
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
      
      .high-contrast .cyber-card {
        border: 2px solid #00ffff !important;
        background: rgba(0, 0, 0, 0.9) !important;
      }
      
      .high-contrast .neon-button {
        border: 2px solid #00ffff !important;
        background: #000 !important;
        color: #fff !important;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .reduced-motion .neon-glow-cyan,
      .reduced-motion .neon-glow-purple,
      .reduced-motion .neon-glow-pink {
        animation: none !important;
      }
    `;
    document.head.appendChild(style);

  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

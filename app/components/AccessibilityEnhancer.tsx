import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusIndicators = true,
  enableReducedMotion = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Check for user preferences
    if (enableHighContrast) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(highContrastQuery.matches);
      
      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
      };
      
      highContrastQuery.addEventListener('change', handleHighContrastChange);
      
      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
      };
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Check for reduced motion preference
    if (enableReducedMotion) {
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(reducedMotionQuery.matches);
      
      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };
      
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
      
      return () => {
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      };
    }
  }, [enableReducedMotion]);

  useEffect(() => {
    // Apply high contrast styles
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply reduced motion styles
    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [isReducedMotion]);

  useEffect(() => {
    // Enhanced keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          event.preventDefault();
          const mainContent = document.querySelector('main') as HTMLElement;
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
            activeElement.click();
          }
        }

        // Arrow key navigation for custom components
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) as NodeListOf<HTMLElement>;
          
          const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
          
          if (currentIndex !== -1) {
            let nextIndex = currentIndex;
            
            switch (event.key) {
              case 'ArrowDown':
              case 'ArrowRight':
                nextIndex = (currentIndex + 1) % focusableElements.length;
                break;
              case 'ArrowUp':
              case 'ArrowLeft':
                nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
                break;
            }
            
            if (nextIndex !== currentIndex) {
              event.preventDefault();
              focusableElements[nextIndex].focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Focus management
    if (enableFocusIndicators) {
      const handleFocusIn = (event: FocusEvent) => {
        setCurrentFocus(event.target as HTMLElement);
        event.target?.classList.add('focus-visible');
      };

      const handleFocusOut = (event: FocusEvent) => {
        event.target?.classList.remove('focus-visible');
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);
      
      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [enableFocusIndicators]);

  useEffect(() => {
    // Screen reader announcements
    if (enableScreenReader) {
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as HTMLElement;
            if (addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`New section: ${heading.textContent}`);
              }
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [enableScreenReader]);

  // Add ARIA landmarks
  useEffect(() => {
    const addAriaLandmarks = () => {
      // Main content area
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      // Navigation
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      // Footer
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
        footer.setAttribute('aria-label', 'Site footer');
      }

      // Sidebar
      const sidebar = document.querySelector('[data-sidebar]');
      if (sidebar && !sidebar.getAttribute('role')) {
        sidebar.setAttribute('role', 'complementary');
        sidebar.setAttribute('aria-label', 'Sidebar navigation');
      }

      // Buttons
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Links
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link, index) => {
        if (!link.textContent?.trim() && !link.getAttribute('title')) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });

      // Images
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.setAttribute('alt', `Image ${index + 1}`);
      });
    };

    addAriaLandmarks();
    
    // Re-run when DOM changes
    const observer = new MutationObserver(addAriaLandmarks);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <style jsx global>{`
      /* High contrast mode */
      .high-contrast {
        --text-primary: #ffffff;
        --text-secondary: #ffffff;
        --bg-primary: #000000;
        --bg-secondary: #000000;
        --border-color: #ffffff;
      }

      .high-contrast .holographic-card {
        border: 2px solid #ffffff;
        background: #000000;
      }

      .high-contrast .cyber-button {
        border: 2px solid #ffffff;
        background: #000000;
        color: #ffffff;
      }

      /* Reduced motion */
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      /* Focus indicators */
      .focus-visible {
        outline: 3px solid #00f5ff !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 3px rgba(0, 245, 255, 0.3) !important;
      }

      /* Skip to content link */
      .skip-to-content {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000000;
        color: #ffffff;
        padding: 8px;
        text-decoration: none;
        border: 2px solid #ffffff;
        z-index: 1000;
      }

      .skip-to-content:focus {
        top: 6px;
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

      /* Enhanced focus styles */
      button:focus,
      a:focus,
      input:focus,
      select:focus,
      textarea:focus,
      [tabindex]:focus {
        outline: 3px solid #00f5ff;
        outline-offset: 2px;
        box-shadow: 0 0 0 3px rgba(0, 245, 255, 0.3);
      }

      /* High contrast text */
      .high-contrast h1,
      .high-contrast h2,
      .high-contrast h3,
      .high-contrast h4,
      .high-contrast h5,
      .high-contrast h6 {
        color: #ffffff;
        text-shadow: 2px 2px 4px #000000;
      }

      /* Ensure sufficient color contrast */
      .high-contrast .text-gray-300,
      .high-contrast .text-gray-400 {
        color: #ffffff !important;
      }

      /* Button states */
      button:active {
        transform: scale(0.98);
      }

      /* Loading states for screen readers */
      [aria-busy="true"]::after {
        content: "Loading...";
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
    `}</style>
  );
};

export default AccessibilityEnhancer;
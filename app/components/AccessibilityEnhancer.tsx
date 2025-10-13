      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;

      // Re-run enhancements when DOM changes
      const observer = new MutationObserver(() => {
        enhanceFocusManagement()
        enhanceKeyboardNavigation()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      // Cleanup function
      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // High contrast mode
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return () => {};

      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.id = 'accessibility-high-contrast';
        style.textContent = `
          .high-contrast {
            filter: contrast(150%) brightness(110%);
          }
          .high-contrast * {
            border-color: currentColor !important;
          }
        `;
        document.head.appendChild(style);
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery as any);

      return () => {
        const existingStyle = document.getElementById('accessibility-high-contrast');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      `;
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }
    };

    const enhanceScreenReader = () => {
      if (!enableScreenReader) return;

      // Add ARIA landmarks
      const addLandmarks = () => {
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
    // Enhanced focus management
    const enhanceFocusManagement = () => {
      // Add visible focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
        }
        
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
    }

    // Initialize accessibility features
    const cleanup = initAccessibility()

    // Cleanup on unmount
    return cleanup
  }, [])

  return <>{children}</>
}

  return (
    <>
      {children}
      <style>{`
        /* Keyboard navigation styles */
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* Screen reader only content */
        
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
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
        
        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Enhanced ARIA attributes
    const enhanceARIA = () => {
      // Add ARIA landmarks
      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const id = heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || `heading-${index}`;
          heading.id = id;
        }
      });

      // Add alt text to images without alt
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        img.setAttribute('alt', '');
      });
    };

    // Enhanced color contrast
    const enhanceColorContrast = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Ensure sufficient color contrast */
        .text-gray-300 {
          color: #d1d5db !important;
        }
        
        .text-gray-400 {
          color: #9ca3af !important;
        }
        
        .bg-white\/10 {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .bg-white\/20 {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Enhanced screen reader support
    const enhanceScreenReaderSupport = () => {
      // Add live regions for dynamic content
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

      // Listen for route changes (if using React Router)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        announcePageChange('Page navigation occurred');
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        announcePageChange('Page content updated');
      };
    };

    // Enhanced form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          const inputElement = input as HTMLInputElement;
          
          // Add required indicator
          if (inputElement.required && !form.querySelector(`[for="${inputElement.id}"] .required`)) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`);
            if (label) {
              const requiredSpan = document.createElement('span');
              requiredSpan.textContent = ' *';
              requiredSpan.className = 'text-red-500';
              requiredSpan.setAttribute('aria-label', 'required');
              label.appendChild(requiredSpan);
            }
          }

          // Add error handling
          inputElement.addEventListener('invalid', () => {
            const errorId = `${inputElement.id}-error`;
            let errorElement = document.getElementById(errorId);
            
            if (!errorElement) {
              errorElement = document.createElement('div');
              errorElement.id = errorId;
              errorElement.className = 'text-red-500 text-sm mt-1';
              errorElement.setAttribute('role', 'alert');
              inputElement.parentNode?.insertBefore(errorElement, inputElement.nextSibling);
            }
            
            errorElement.textContent = inputElement.validationMessage;
            inputElement.setAttribute('aria-describedby', errorId);
          });

          inputElement.addEventListener('input', () => {
            const errorElement = document.getElementById(`${inputElement.id}-error`);
            if (errorElement) {
              errorElement.textContent = '';
            }
          });
        });
      });
    };

    // Initialize all enhancements
    enhanceKeyboardNavigation();
    enhanceFocusManagement();
    enhanceARIA();
    enhanceColorContrast();
    enhanceScreenReaderSupport();
    enhanceFormAccessibility();

    // Cleanup function
    return () => {
      // Remove any added elements or event listeners
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
      
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
};

export default AccessibilityEnhancer;
export default AccessibilityEnhancer
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18

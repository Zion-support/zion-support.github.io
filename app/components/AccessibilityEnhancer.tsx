  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false
}) => {      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    // Initialize accessibility features
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown);
    }

    if (enableHighContrast) {
      applyHighContrast();
    }

    if (enableScreenReader) {
      // Announce page load
      announceToScreenReader('Page loaded successfully');
    }

      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      focusableElements.forEach(element => {
        element.removeEventListener('focus', handleFocus);
        element.removeEventListener('blur', handleBlur);
      });
      
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`);
        }

      });
    };

    // Initialize accessibility enhancements
    addSkipLink();
    addFocusStyles();
    addAriaLandmarks();
    addAltText();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Cleanup
    return () => {
      if (enableKeyboardNavigation) {
        document.removeEventListener('keydown', handleKeyDown);
      }
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast]);

  // Add ARIA attributes to container
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('role', 'main');
      containerRef.current.setAttribute('aria-label', 'Main content');
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="accessibility-enhanced"
      style={{
        // Ensure proper focus indicators
        '--focus-ring': '2px solid #3b82f6',
        '--focus-ring-offset': '2px'
      } as React.CSSProperties}
    >
      {children}
      
      {/* Skip links for keyboard navigation */}
      {enableKeyboardNavigation && (
        <div className="skip-links">
          <a 
            href="#main-content" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to main content
          </a>
          <a 
            href="#navigation" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to navigation
          </a>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;cursor/analyze-improve-and-deploy-application-c573
export default AccessibilityEnhancer;

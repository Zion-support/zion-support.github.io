import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true,
}) => {
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    // High contrast enhancement
    const enhanceHighContrast = () => {
      if (!enableHighContrast) return () => {};
      
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          filter: contrast(1.5) brightness(1.2);
        }
        .high-contrast * {
          border-color: #ffffff !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    };

    // Reduced motion enhancement
    const enhanceReducedMotion = () => {
      if (!enableReducedMotion) return () => {};
      
      const style = document.createElement('style');
      style.textContent = `
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    };

    // Focus management enhancement
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return () => {};
      
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #00ffff !important;
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
        }
        .skip-link:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);

      // Add skip link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-link';
      skipLink.textContent = 'Skip to main content';
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
        if (document.body.contains(skipLink)) {
          document.body.removeChild(skipLink);
        }
      };
    };

    // Keyboard navigation enhancement
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return () => {};
      
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && e.ctrlKey) {
          e.preventDefault();
          const main = document.querySelector('main');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    };

    // Apply enhancements
    cleanupFunctions.push(enhanceHighContrast());
    cleanupFunctions.push(enhanceReducedMotion());
    cleanupFunctions.push(enhanceFocusManagement());
    cleanupFunctions.push(enhanceKeyboardNavigation());

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableHighContrast, enableReducedMotion, enableFocusManagement, enableKeyboardNavigation]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

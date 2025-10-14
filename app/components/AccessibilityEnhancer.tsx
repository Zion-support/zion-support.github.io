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
    addAriaLabels();
    handleHighContrast();
    handleReducedMotion();
    manageFocus();

    // Set up event listeners
    document.addEventListener('keydown', handleKeyDown);
    
    const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    highContrastMedia.addEventListener('change', handleHighContrast);
    reducedMotionMedia.addEventListener('change', handleReducedMotion);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      highContrastMedia.removeEventListener('change', handleHighContrast);
      reducedMotionMedia.removeEventListener('change', handleReducedMotion);
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  // Screen reader announcements
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

  // Expose announcement function globally for use by other components
  useEffect(() => {
    (window as any).announceToScreenReader = announceToScreenReader;
    
    return () => {
      delete (window as any).announceToScreenReader;
    };
  }, []);

  return (
    <div ref={containerRef} className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer; cursor/analyze-improve-and-deploy-application-c573
import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addAccessibilityFeatures = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
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
        .focus\\:not-sr-only:focus {
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

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add keyboard navigation support
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    const cleanup = addAccessibilityFeatures();
    return cleanup;
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

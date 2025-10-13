import { useEffect, ReactNode } from 'react';

interface EnhancedAccessibilityProps {
  children: ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Enhanced accessibility features
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
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
      `;
      document.head.appendChild(style);
    };

    const addAriaLabels = () => {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach((link) => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', '');
        }
      });
    };

    const setupKeyboardNavigation = () => {
      // Enhanced keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Initialize accessibility enhancements
    addSkipLinks();
    enhanceFocusManagement();
    addAriaLabels();
    setupKeyboardNavigation();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;
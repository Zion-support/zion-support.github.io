import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 4px;
    `;
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }

    // Add focus management
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return (
    <>
      {children}
      {/* Accessibility Styles */}
      <style jsx global>{`
        /* High Contrast Mode */
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }

        /* Large Text Mode */
        .large-text {
          font-size: 1.2em;
        }

        /* Reduced Motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }

        /* Focus Management */
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Skip Link */
        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;

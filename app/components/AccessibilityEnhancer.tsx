import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const existingSkipLink = document.querySelector('.skip-link');
      if (existingSkipLink) return;

      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.zIndex = '9999';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #8b5cf6;
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
        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // ARIA labels and roles
    const enhanceARIA = () => {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // High contrast mode
    const toggleHighContrast = () => {
      if (isHighContrast) {
        document.documentElement.style.filter = 'contrast(1.2) brightness(1.1)';
      } else {
        document.documentElement.style.filter = 'none';
      }
    };

    // Large text mode
    const toggleLargeText = () => {
      if (isLargeText) {
        document.documentElement.style.fontSize = '18px';
      } else {
        document.documentElement.style.fontSize = '16px';
      }
    };

    // Initialize accessibility features
    addSkipLink();
    enhanceKeyboardNavigation();
    enhanceARIA();
    toggleHighContrast();
    toggleLargeText();

    // Listen for keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + H for high contrast toggle
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        setIsHighContrast(!isHighContrast);
      }
      
      // Alt + T for large text toggle
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        setIsLargeText(!isLargeText);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isHighContrast, isLargeText]);

  return (
    <>
      {children}
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-50 space-y-2">
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="bg-purple-600 text-white px-3 py-2 rounded text-sm hover:bg-purple-700 transition-colors"
          aria-label="Toggle high contrast mode"
        >
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
        <button
          onClick={() => setIsLargeText(!isLargeText)}
          className="bg-cyan-600 text-white px-3 py-2 rounded text-sm hover:bg-cyan-700 transition-colors"
          aria-label="Toggle large text mode"
        >
          {isLargeText ? 'Normal Text' : 'Large Text'}
        </button>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
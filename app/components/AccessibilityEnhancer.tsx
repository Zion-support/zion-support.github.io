import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Add accessibility enhancements
    addSkipLink();
    enhanceFocusManagement();
    addAriaLabels();
    setupKeyboardNavigation();
  }, []);

  const addSkipLink = () => {
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
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      .focus-visible:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  };

  const addAriaLabels = () => {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  };

  const setupKeyboardNavigation = () => {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast', !isHighContrast);
  };

  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    document.body.classList.toggle('large-text', !isLargeText);
  };

  return (
    <div className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${isLargeText ? 'large-text' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}>
      {/* Accessibility Controls */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:right-4 bg-slate-800 text-white p-4 rounded-lg z-50">
        <h3 className="text-lg font-semibold mb-2">Accessibility Options</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className="block w-full text-left px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded"
            aria-pressed={isHighContrast}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
          <button
            onClick={toggleLargeText}
            className="block w-full text-left px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded"
            aria-pressed={isLargeText}
          >
            {isLargeText ? 'Disable' : 'Enable'} Large Text
          </button>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
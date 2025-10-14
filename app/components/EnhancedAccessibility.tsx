import React, { useEffect, useState } from 'react';

const EnhancedAccessibility: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [screenReader, setScreenReader] = useState(false);

  useEffect(() => {
    // Enhanced accessibility features
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
          button.setAttribute('aria-label', button.textContent || 'Button');
        }
      });
    };

    addSkipLinks();
    addAriaLabels();
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    document.documentElement.classList.toggle('reduced-motion');
  };

  return (
    <div className="accessibility-controls fixed bottom-4 left-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Accessibility</h3>
        <button
          onClick={toggleHighContrast}
          className={`w-full text-left px-3 py-2 rounded text-sm ${
            isHighContrast ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          High Contrast
        </button>
        <button
          onClick={toggleReducedMotion}
          className={`w-full text-left px-3 py-2 rounded text-sm ${
            reducedMotion ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Reduced Motion
        </button>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
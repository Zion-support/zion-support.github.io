import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal');

  // Add skip link functionality
  const addSkipLink = () => {
    const existingSkipLink = document.getElementById('skip-link');
    if (existingSkipLink) return;

    const skipLink = document.createElement('a');
    skipLink.id = 'skip-link';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  };

  // Add ARIA landmarks
  const addAriaLandmarks = () => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
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
  useEffect(() => {
    const root = document.documentElement;

    // Add CSS for high contrast mode
    if (isHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        .high-contrast button,
        .high-contrast a,
        .high-contrast input,
        .high-contrast textarea,
        .high-contrast select {
          border: 2px solid currentColor !important;
        }
        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation textarea:focus,
        .keyboard-navigation select:focus {
          box-shadow: 0 0 0 2px #8b5cf6 !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1'
    );

    // Initialize accessibility features
    addSkipLink();
    addAriaLandmarks();
    addAltText();
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Accessibility controls
  const accessibilityControls = (
    <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-sm z-50">
      <h3 className="font-bold mb-2">Accessibility</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={(e) => setIsHighContrast(e.target.checked)}
            className="mr-2"
          />
          High Contrast
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isReducedMotion}
            onChange={(e) => setIsReducedMotion(e.target.checked)}
            className="mr-2"
          />
          Reduced Motion
        </label>
        <div>
          <label className="block text-xs mb-1">Font Size:</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as any)}
            className="w-full bg-slate-700 text-white px-2 py-1 rounded text-xs"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${isHighContrast ? 'high-contrast' : ''} keyboard-navigation`}>
      {children}
      {accessibilityControls}
    </div>
  );
};

export default AccessibilityEnhancer;
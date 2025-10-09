import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility settings
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Add skip navigation link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded z-50';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.zIndex = '9999';
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.left = '1rem';
      skipLink.style.top = '1rem';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.left = '-9999px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
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

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Add color blind support
    const colorBlindSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        .color-blind-protanopia {
          filter: hue-rotate(90deg) saturate(1.2);
        }
        .color-blind-deuteranopia {
          filter: hue-rotate(180deg) saturate(1.2);
        }
        .color-blind-tritanopia {
          filter: hue-rotate(270deg) saturate(1.2);
        }
      `;
      document.head.appendChild(style);
    };

    colorBlindSupport();

    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Make announcements available globally
    (window as { announceToScreenReader: (message: string) => void }).announceToScreenReader = announceToScreenReader;

    // Add keyboard shortcuts
    const handleKeyboardShortcuts = (e: KeyboardEvent) => {
      // Alt + 1: Skip to main content
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          mainContent.scrollIntoView();
        }
      }

      // Alt + 2: Skip to navigation
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        const navigation = document.querySelector('nav, [role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
          navigation.scrollIntoView();
        }
      }

      // Alt + 3: Skip to footer
      if (e.altKey && e.key === '3') {
        e.preventDefault();
        const footer = document.querySelector('footer, [role="contentinfo"]');
        if (footer) {
          (footer as HTMLElement).focus();
          footer.scrollIntoView();
        }
      }
    };

    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyboardShortcuts);
      
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

  // Font size controls
  const increaseFontSize = () => {
    const sizes = ['normal', 'large', 'larger'];
    const currentIndex = sizes.indexOf(fontSize);
    const newIndex = Math.min(currentIndex + 1, sizes.length - 1);
    setFontSize(sizes[newIndex]);
    
    document.documentElement.style.fontSize = 
      fontSize === 'normal' ? '16px' : 
      fontSize === 'large' ? '18px' : '20px';
  };

  const decreaseFontSize = () => {
    const sizes = ['normal', 'large', 'larger'];
    const currentIndex = sizes.indexOf(fontSize);
    const newIndex = Math.max(currentIndex - 1, 0);
    setFontSize(sizes[newIndex]);
    
    document.documentElement.style.fontSize = 
      fontSize === 'normal' ? '14px' : 
      fontSize === 'large' ? '16px' : '18px';
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle('reduced-motion');
  };

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-white text-sm font-semibold mb-2">Accessibility</h3>
      <div className="space-y-2">
        <button
          onClick={increaseFontSize}
          className="block w-full text-left text-cyan-400 hover:text-cyan-300 text-sm"
          aria-label="Increase font size"
        >
          A+ Larger Text
        </button>
        <button
          onClick={decreaseFontSize}
          className="block w-full text-left text-cyan-400 hover:text-cyan-300 text-sm"
          aria-label="Decrease font size"
        >
          A- Smaller Text
        </button>
        <button
          onClick={toggleHighContrast}
          className={`block w-full text-left text-sm ${
            isHighContrast ? 'text-yellow-400' : 'text-cyan-400 hover:text-cyan-300'
          }`}
          aria-label="Toggle high contrast mode"
        >
          {isHighContrast ? '✓' : ''} High Contrast
        </button>
        <button
          onClick={toggleReducedMotion}
          className={`block w-full text-left text-sm ${
            isReducedMotion ? 'text-yellow-400' : 'text-cyan-400 hover:text-cyan-300'
          }`}
          aria-label="Toggle reduced motion"
        >
          {isReducedMotion ? '✓' : ''} Reduced Motion
        </button>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
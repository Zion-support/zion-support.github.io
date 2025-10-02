import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setHighContrast(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setHighContrast(e.matches);
    };

    highContrastQuery.addEventListener('change', handleContrastChange);

    // Apply accessibility enhancements
    applyAccessibilityEnhancements();

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  const applyAccessibilityEnhancements = () => {
    // Add skip navigation link
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
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    if (!document.querySelector('.skip-link')) {
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #4A90E2 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #fff !important;
        outline-offset: 2px !important;
      }
      
      ${reducedMotion ? `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      ` : ''}
      
      ${highContrast ? `
        body {
          filter: contrast(150%) !important;
        }
      ` : ''}
    `;
    
    if (!document.querySelector('#accessibility-styles')) {
      style.id = 'accessibility-styles';
      document.head.appendChild(style);
    }

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', handleKeyboardNavigation);
  };

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    // Handle escape key for modals
    if (event.key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
        if (closeButton) {
          closeButton.focus();
        }
      }
    }

    // Handle arrow keys for custom components
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const focusedElement = document.activeElement;
      if (focusedElement && focusedElement.getAttribute('role') === 'menuitem') {
        event.preventDefault();
        const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
        const currentIndex = menuItems.indexOf(focusedElement);
        const nextIndex = event.key === 'ArrowDown' 
          ? Math.min(currentIndex + 1, menuItems.length - 1)
          : Math.max(currentIndex - 1, 0);
        
        (menuItems[nextIndex] as HTMLElement)?.focus();
      }
    }
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 0.1, 1.5));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 0.1, 0.8));
  };

  const resetFontSize = () => {
    setFontSize(1);
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}rem`;
  }, [fontSize]);

  return (
    <>
      {/* Accessibility Controls */}
      <div 
        className="accessibility-controls"
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '8px',
          fontSize: '14px'
        }}
        role="region"
        aria-label="Accessibility controls"
      >
        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Accessibility</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={increaseFontSize}
            aria-label="Increase font size"
            style={{
              background: '#4A90E2',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            A+
          </button>
          <button
            onClick={decreaseFontSize}
            aria-label="Decrease font size"
            style={{
              background: '#4A90E2',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            A-
          </button>
          <button
            onClick={resetFontSize}
            aria-label="Reset font size"
            style={{
              background: '#4A90E2',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
        </div>
        <div style={{ marginTop: '10px', fontSize: '12px' }}>
          <div>Reduced Motion: {reducedMotion ? 'On' : 'Off'}</div>
          <div>High Contrast: {highContrast ? 'On' : 'Off'}</div>
          <div>Font Size: {Math.round(fontSize * 100)}%</div>
        </div>
      </div>

      {/* Screen Reader Only Content */}
      <div className="sr-only" style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0'
      }}>
        <h1>Zion Tech Group - Advanced AI and IT Solutions</h1>
        <p>Leading provider of AI-powered IT solutions, enterprise automation, and cutting-edge technology services.</p>
      </div>

      {children}
    </>
  );
};

export default AccessibilityEnhancer;
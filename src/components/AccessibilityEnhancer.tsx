import React, { type ReactNode, useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = (localStorage.getItem('fontSize') as 'small' | 'normal' | 'large') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, prefersReducedMotion);

    // Add accessibility enhancements
    addSkipLinks();
    addAriaLandmarks();
    enhanceFocusManagement();
  }, []);

  const applyAccessibilityStyles = (
    highContrast: boolean,
    fontSize: 'small' | 'normal' | 'large',
    reducedMotion: boolean
  ) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--border-color', '#ffffff');
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size adjustments
    const fontSizeMap = {
      small: '14px',
      normal: '16px',
      large: '18px'
    };
    root.style.fontSize = fontSizeMap[fontSize];

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const addSkipLinks = () => {
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
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  };

  const addAriaLandmarks = () => {
    // Add main landmark if it doesn't exist
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }

    // Add navigation landmarks
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });
  };

  const enhanceFocusManagement = () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .high-contrast *:focus {
        outline: 3px solid #ffff00;
        outline-offset: 3px;
      }
    `;
    document.head.appendChild(style);
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };

  const changeFontSize = (newSize: 'small' | 'normal' | 'large') => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Accessibility</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={toggleHighContrast}
              style={{ marginRight: '5px' }}
            />
            High Contrast
          </label>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>
            Font Size:
          </label>
          <select
            value={fontSize}
            onChange={(e) => changeFontSize(e.target.value as 'small' | 'normal' | 'large')}
            style={{ width: '100%', padding: '2px' }}
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
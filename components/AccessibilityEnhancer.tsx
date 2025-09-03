import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply accessibility settings from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, reducedMotion: boolean) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size adjustment
    root.style.setProperty('--font-size-base', fontSize === 'large' ? '18px' : fontSize === 'small' ? '14px' : '16px');

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  useEffect(() => {
    applyAccessibilityStyles(isHighContrast, fontSize, reducedMotion);
  }, [isHighContrast, fontSize, reducedMotion]);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
  };

  const changeFontSize = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('reducedMotion', newValue.toString());
  };

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <button
          onClick={toggleHighContrast}
          className={`accessibility-btn ${isHighContrast ? 'active' : ''}`}
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: isHighContrast ? '#000' : '#f0f0f0',
            color: isHighContrast ? '#fff' : '#000',
            cursor: 'pointer'
          }}
          aria-label="Toggle high contrast mode"
        >
          High Contrast
        </button>
        
        <div style={{ display: 'flex', gap: '5px' }}>
          <button
            onClick={() => changeFontSize('small')}
            className={`accessibility-btn ${fontSize === 'small' ? 'active' : ''}`}
            style={{
              padding: '5px 10px',
              border: 'none',
              borderRadius: '3px',
              backgroundColor: fontSize === 'small' ? '#007bff' : '#f0f0f0',
              color: fontSize === 'small' ? '#fff' : '#000',
              cursor: 'pointer'
            }}
            aria-label="Small font size"
          >
            A-
          </button>
          <button
            onClick={() => changeFontSize('normal')}
            className={`accessibility-btn ${fontSize === 'normal' ? 'active' : ''}`}
            style={{
              padding: '5px 10px',
              border: 'none',
              borderRadius: '3px',
              backgroundColor: fontSize === 'normal' ? '#007bff' : '#f0f0f0',
              color: fontSize === 'normal' ? '#fff' : '#000',
              cursor: 'pointer'
            }}
            aria-label="Normal font size"
          >
            A
          </button>
          <button
            onClick={() => changeFontSize('large')}
            className={`accessibility-btn ${fontSize === 'large' ? 'active' : ''}`}
            style={{
              padding: '5px 10px',
              border: 'none',
              borderRadius: '3px',
              backgroundColor: fontSize === 'large' ? '#007bff' : '#f0f0f0',
              color: fontSize === 'large' ? '#fff' : '#000',
              cursor: 'pointer'
            }}
            aria-label="Large font size"
          >
            A+
          </button>
        </div>
        
        <button
          onClick={toggleReducedMotion}
          className={`accessibility-btn ${reducedMotion ? 'active' : ''}`}
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: reducedMotion ? '#28a745' : '#f0f0f0',
            color: reducedMotion ? '#fff' : '#000',
            cursor: 'pointer'
          }}
          aria-label="Toggle reduced motion"
        >
          Reduce Motion
        </button>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
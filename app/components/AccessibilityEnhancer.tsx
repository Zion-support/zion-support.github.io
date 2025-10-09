import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Check for high contrast mode
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setIsHighContrast(prefersHighContrast);

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Tab
      if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    root.style.setProperty('--font-size', fontSize === 'large' ? '1.2em' : '1em');
  }, [isHighContrast, reducedMotion, fontSize]);

  return (
    <div 
      className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${reducedMotion ? 'reduced-motion' : ''}`}
      style={{ fontSize: fontSize === 'large' ? '1.2em' : '1em' }}
    >
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '10px',
        borderRadius: '8px',
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="accessibility-btn"
          style={{
            background: isHighContrast ? '#ffff00' : '#333',
            color: isHighContrast ? '#000' : '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
          aria-label="Toggle high contrast mode"
        >
          High Contrast
        </button>
        
        <button
          onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
          className="accessibility-btn"
          style={{
            background: fontSize === 'large' ? '#ffff00' : '#333',
            color: fontSize === 'large' ? '#000' : '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
          aria-label="Toggle large text"
        >
          Large Text
        </button>
        
        <button
          onClick={() => setReducedMotion(!reducedMotion)}
          className="accessibility-btn"
          style={{
            background: reducedMotion ? '#ffff00' : '#333',
            color: reducedMotion ? '#000' : '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
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
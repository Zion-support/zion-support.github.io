'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AdvancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Apply accessibility enhancements
    document.documentElement.setAttribute('data-accessibility-enhanced', 'true');
    
    // Add keyboard navigation support
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

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast', !isHighContrast);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    document.documentElement.setAttribute('data-font-size', size);
  };

  return (
    <div 
      className={`accessibility-enhancer ${isHighContrast ? 'high-contrast' : ''} ${fontSize} ${isReducedMotion ? 'reduced-motion' : ''}`}
      data-font-size={fontSize}
    >
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 9999 }}>
        <button
          onClick={toggleHighContrast}
          className="accessibility-button"
          aria-label="Toggle high contrast mode"
          style={{
            background: isHighContrast ? '#000' : '#fff',
            color: isHighContrast ? '#fff' : '#000',
            border: '2px solid #000',
            padding: '8px 12px',
            margin: '4px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isHighContrast ? 'Normal' : 'High Contrast'}
        </button>
        
        <div style={{ display: 'inline-block', margin: '4px' }}>
          <label htmlFor="font-size-select" style={{ color: isHighContrast ? '#fff' : '#000' }}>
            Font Size:
          </label>
          <select
            id="font-size-select"
            value={fontSize}
            onChange={(e) => changeFontSize(e.target.value)}
            style={{
              background: isHighContrast ? '#000' : '#fff',
              color: isHighContrast ? '#fff' : '#000',
              border: '2px solid #000',
              padding: '4px',
              marginLeft: '8px',
              borderRadius: '4px'
            }}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="enhanced-content">
        {children}
      </div>

      <style jsx>{`
        .accessibility-enhancer {
          --font-size-small: 0.875rem;
          --font-size-medium: 1rem;
          --font-size-large: 1.125rem;
          --font-size-xlarge: 1.25rem;
        }

        .accessibility-enhancer.small {
          font-size: var(--font-size-small);
        }

        .accessibility-enhancer.medium {
          font-size: var(--font-size-medium);
        }

        .accessibility-enhancer.large {
          font-size: var(--font-size-large);
        }

        .accessibility-enhancer.xlarge {
          font-size: var(--font-size-xlarge);
        }

        .accessibility-enhancer.high-contrast {
          --bg-color: #000;
          --text-color: #fff;
          --border-color: #fff;
        }

        .accessibility-enhancer.high-contrast * {
          background-color: var(--bg-color) !important;
          color: var(--text-color) !important;
          border-color: var(--border-color) !important;
        }

        .accessibility-enhancer.reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .keyboard-navigation *:focus {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px !important;
        }

        .accessibility-button:hover {
          opacity: 0.8;
        }

        .accessibility-button:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;
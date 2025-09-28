import React, { useEffect, useCallback, useState } from 'react';
import { clsx } from 'clsx';

interface AccessibilityEnhancerProps {
  className?: string;
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  className,
  children
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState('medium');

  // Check for user preferences
  useEffect(() => {
    // Check for high contrast mode
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      setIsHighContrast(true);
    }

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsReducedMotion(true);
    }

    // Listen for preference changes
    const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)');
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    contrastMediaQuery.addEventListener('change', handleContrastChange);
    motionMediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      contrastMediaQuery.removeEventListener('change', handleContrastChange);
      motionMediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Apply accessibility enhancements
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${fontSize}`);
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip to main content (Alt + M)
    if (event.altKey && event.key === 'm') {
      event.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.focus();
        main.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Toggle high contrast (Alt + H)
    if (event.altKey && event.key === 'h') {
      event.preventDefault();
      setIsHighContrast(prev => !prev);
    }

    // Font size controls (Alt + Plus/Minus)
    if (event.altKey && (event.key === '+' || event.key === '=')) {
      event.preventDefault();
      setFontSize(prev => {
        if (prev === 'small') return 'medium';
        if (prev === 'medium') return 'large';
        return 'large';
      });
    }

    if (event.altKey && event.key === '-') {
      event.preventDefault();
      setFontSize(prev => {
        if (prev === 'large') return 'medium';
        if (prev === 'medium') return 'small';
        return 'small';
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Focus management
  useEffect(() => {
    // Ensure focus is visible
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast .focus-visible:focus {
        outline: 3px solid #ffffff !important;
        outline-offset: 3px !important;
      }
      
      .high-contrast {
        filter: contrast(150%) brightness(110%);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .font-small {
        font-size: 0.875rem;
      }
      
      .font-medium {
        font-size: 1rem;
      }
      
      .font-large {
        font-size: 1.125rem;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add skip links
  useEffect(() => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    // Add skip link styles
    const skipLinkStyles = document.createElement('style');
    skipLinkStyles.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: -100px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      .high-contrast .skip-link {
        background: #fff;
        color: #000;
        border: 2px solid #000;
      }
    `;
    
    document.head.appendChild(skipLinkStyles);
    document.body.insertBefore(skipLinks, document.body.firstChild);

    return () => {
      document.head.removeChild(skipLinkStyles);
      document.body.removeChild(skipLinks);
    };
  }, []);

  return (
    <div className={clsx('accessibility-enhanced', className)}>
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{ display: 'none' }}>
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          aria-label={`Toggle high contrast mode. Currently ${isHighContrast ? 'on' : 'off'}`}
          className="accessibility-button"
        >
          {isHighContrast ? '🌞' : '🌙'} High Contrast
        </button>
        
        <div className="font-size-controls">
          <button
            onClick={() => setFontSize('small')}
            aria-label="Set small font size"
            className={clsx('accessibility-button', { active: fontSize === 'small' })}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('medium')}
            aria-label="Set medium font size"
            className={clsx('accessibility-button', { active: fontSize === 'medium' })}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('large')}
            aria-label="Set large font size"
            className={clsx('accessibility-button', { active: fontSize === 'large' })}
          >
            A
          </button>
        </div>
      </div>

      {/* Accessibility Status Indicator */}
      <div 
        className="accessibility-status"
        role="status"
        aria-live="polite"
        aria-label="Accessibility features status"
        style={{ 
          position: 'fixed', 
          bottom: '10px', 
          left: '10px', 
          background: 'rgba(0,0,0,0.8)', 
          color: 'white', 
          padding: '8px', 
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 1000,
          display: 'none' // Hidden by default, can be shown for debugging
        }}
      >
        High Contrast: {isHighContrast ? 'ON' : 'OFF'} | 
        Reduced Motion: {isReducedMotion ? 'ON' : 'OFF'} | 
        Font Size: {fontSize.toUpperCase()}
      </div>

      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
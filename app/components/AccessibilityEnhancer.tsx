import React, { useState, useEffect, useCallback } from 'react';

interface AccessibilityState {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: false,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Check for system preferences
  useEffect(() => {
    const checkSystemPreferences = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setAccessibilityState(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast
      }));
    };

    checkSystemPreferences();
    
    // Listen for changes in system preferences
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)')
    ];

    const handleChange = () => checkSystemPreferences();
    mediaQueries.forEach(mq => mq.addEventListener('change', handleChange));

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleChange));
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    if (accessibilityState.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (accessibilityState.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    root.classList.add(`font-size-${accessibilityState.fontSize}`);
  }, [accessibilityState]);

  const toggleHighContrast = useCallback(() => {
    setAccessibilityState(prev => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  }, []);

  const toggleReducedMotion = useCallback(() => {
    setAccessibilityState(prev => ({
      ...prev,
      reducedMotion: !prev.reducedMotion
    }));
  }, []);

  const setFontSize = useCallback((size: 'small' | 'medium' | 'large') => {
    setAccessibilityState(prev => ({
      ...prev,
      fontSize: size
    }));
  }, []);

  const toggleFocusVisible = useCallback(() => {
    setAccessibilityState(prev => ({
      ...prev,
      focusVisible: !prev.focusVisible
    }));
  }, []);

  const toggleScreenReader = useCallback(() => {
    setAccessibilityState(prev => ({
      ...prev,
      screenReader: !prev.screenReader
    }));
  }, []);

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls">
        <button
          onClick={toggleHighContrast}
          className={`accessibility-toggle ${accessibilityState.highContrast ? 'active' : ''}`}
          aria-label="Toggle high contrast mode"
        >
          High Contrast
        </button>
        
        <button
          onClick={toggleReducedMotion}
          className={`accessibility-toggle ${accessibilityState.reducedMotion ? 'active' : ''}`}
          aria-label="Toggle reduced motion"
        >
          Reduced Motion
        </button>
        
        <div className="font-size-controls">
          <label htmlFor="font-size-select">Font Size:</label>
          <select
            id="font-size-select"
            value={accessibilityState.fontSize}
            onChange={(e) => setFontSize(e.target.value as 'small' | 'medium' | 'large')}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        
        <button
          onClick={toggleFocusVisible}
          className={`accessibility-toggle ${accessibilityState.focusVisible ? 'active' : ''}`}
          aria-label="Toggle focus indicators"
        >
          Focus Indicators
        </button>
        
        <button
          onClick={toggleScreenReader}
          className={`accessibility-toggle ${accessibilityState.screenReader ? 'active' : ''}`}
          aria-label="Toggle screen reader mode"
        >
          Screen Reader Mode
        </button>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
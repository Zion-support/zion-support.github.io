import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility enhancements
    const root = document.documentElement;
    
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Font size adjustment
    root.style.fontSize = `${fontSize}px`;
    
    // Reduced motion
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
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
  }, [isHighContrast, fontSize, isReducedMotion]);

  // Add accessibility controls
  const accessibilityControls = (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
      <h3 className="font-semibold text-gray-900 mb-3 text-sm">Accessibility</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="high-contrast"
            checked={isHighContrast}
            onChange={(e) => setIsHighContrast(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="high-contrast" className="text-sm text-gray-700">
            High Contrast
          </label>
        </div>
        
        <div className="flex items-center gap-2">
          <label htmlFor="font-size" className="text-sm text-gray-700">
            Font Size:
          </label>
          <input
            type="range"
            id="font-size"
            min="12"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-20"
          />
          <span className="text-xs text-gray-500">{fontSize}px</span>
        </div>
        
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="reduced-motion"
            checked={isReducedMotion}
            onChange={(e) => setIsReducedMotion(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="reduced-motion" className="text-sm text-gray-700">
            Reduced Motion
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {children}
      {accessibilityControls}
      
      <style jsx>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .accessibility-controls {
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </>
  );
}
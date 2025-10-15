import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  className = '', 
  children 
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Load saved font size preference
    const savedFontSize = localStorage.getItem('font-size');
    if (savedFontSize) {
      setFontSize(parseFloat(savedFontSize));
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
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
    
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    root.style.fontSize = `${fontSize}rem`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  const handleFontSizeChange = (newSize: number) => {
    setFontSize(newSize);
    localStorage.setItem('font-size', newSize.toString());
  };

  return (
    <div className={`accessibility-enhancer ${className}`}>
      {children}
      
      {/* Accessibility Controls - Only show in development or when enabled */}
      {(process.env.NODE_ENV === 'development' || localStorage.getItem('show-accessibility-controls')) && (
        <div className="fixed top-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg border border-slate-700 text-sm z-50">
          <h3 className="font-semibold mb-2 text-purple-400">Accessibility</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-xs mb-1">Font Size</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleFontSizeChange(Math.max(0.8, fontSize - 0.1))}
                  className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs"
                >
                  A-
                </button>
                <span className="text-xs w-8 text-center">{Math.round(fontSize * 100)}%</span>
                <button
                  onClick={() => handleFontSizeChange(Math.min(1.5, fontSize + 0.1))}
                  className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs"
                >
                  A+
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="high-contrast"
                checked={isHighContrast}
                onChange={(e) => setIsHighContrast(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="high-contrast" className="text-xs">High Contrast</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="reduced-motion"
                checked={isReducedMotion}
                onChange={(e) => setIsReducedMotion(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="reduced-motion" className="text-xs">Reduce Motion</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;
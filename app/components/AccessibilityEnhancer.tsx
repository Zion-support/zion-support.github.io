import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

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

    // Keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Increase font size with Ctrl + Plus
      if (e.ctrlKey && e.key === '=') {
        e.preventDefault();
        setFontSize(prev => Math.min(prev + 2, 24));
      }

      // Decrease font size with Ctrl + Minus
      if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        setFontSize(prev => Math.max(prev - 2, 12));
      }

      // Reset font size with Ctrl + 0
      if (e.ctrlKey && e.key === '0') {
        e.preventDefault();
        setFontSize(16);
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

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  return (
    <div className="accessibility-enhanced">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-slate-900/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-2 space-y-2">
          <button
            onClick={() => setIsHighContrast(!isHighContrast)}
            className="block w-full px-3 py-1 text-xs text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors"
            title="Toggle high contrast mode"
          >
            {isHighContrast ? 'High Contrast: On' : 'High Contrast: Off'}
          </button>
          <button
            onClick={() => setIsReducedMotion(!isReducedMotion)}
            className="block w-full px-3 py-1 text-xs text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors"
            title="Toggle reduced motion"
          >
            {isReducedMotion ? 'Reduced Motion: On' : 'Reduced Motion: Off'}
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
              className="px-2 py-1 text-xs text-cyan-400 hover:bg-cyan-500/10 rounded"
              title="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs text-gray-300">{fontSize}px</span>
            <button
              onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
              className="px-2 py-1 text-xs text-cyan-400 hover:bg-cyan-500/10 rounded"
              title="Increase font size"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
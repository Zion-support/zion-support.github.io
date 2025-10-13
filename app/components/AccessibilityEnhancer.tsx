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
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Keyboard navigation improvements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.ctrlKey) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Increase font size with Ctrl + Plus
      if (e.ctrlKey && e.key === '=') {
        e.preventDefault();
        setFontSize(prev => {
          const sizes = ['small', 'normal', 'large', 'xlarge'];
          const currentIndex = sizes.indexOf(prev);
          return currentIndex < sizes.length - 1 ? sizes[currentIndex + 1] : prev;
        });
      }
      
      // Decrease font size with Ctrl + Minus
      if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        setFontSize(prev => {
          const sizes = ['small', 'normal', 'large', 'xlarge'];
          const currentIndex = sizes.indexOf(prev);
          return currentIndex > 0 ? sizes[currentIndex - 1] : prev;
        });
      }
      
      // Reset font size with Ctrl + 0
      if (e.ctrlKey && e.key === '0') {
        e.preventDefault();
        setFontSize('normal');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        filter: contrast(1.5) brightness(1.2);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .font-small {
        font-size: 0.875rem;
      }
      
      .font-normal {
        font-size: 1rem;
      }
      
      .font-large {
        font-size: 1.125rem;
      }
      
      .font-xlarge {
        font-size: 1.25rem;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);

    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.head.removeChild(style);
      document.body.removeChild(skipLink);
    };
  }, []);

  // Apply accessibility classes to body
  useEffect(() => {
    const body = document.body;
    body.className = body.className.replace(/high-contrast|reduced-motion|font-\w+/g, '').trim();
    
    if (isHighContrast) body.classList.add('high-contrast');
    if (reducedMotion) body.classList.add('reduced-motion');
    body.classList.add(`font-${fontSize}`);
  }, [isHighContrast, reducedMotion, fontSize]);

  return (
    <div 
      id="main-content"
      className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${reducedMotion ? 'reduced-motion' : ''} font-${fontSize}`}
      role="main"
      tabIndex={-1}
    >
      {children}
      
      {/* Accessibility Controls */}
      <div 
        className="fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
        role="toolbar"
        aria-label="Accessibility controls"
      >
        <h3 className="text-white text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={() => setIsHighContrast(!isHighContrast)}
            className="block w-full text-left text-xs text-gray-300 hover:text-white transition-colors"
            aria-pressed={isHighContrast}
          >
            {isHighContrast ? '✓' : '○'} High Contrast
          </button>
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className="block w-full text-left text-xs text-gray-300 hover:text-white transition-colors"
            aria-pressed={reducedMotion}
          >
            {reducedMotion ? '✓' : '○'} Reduce Motion
          </button>
          <div className="text-xs text-gray-300">
            Font Size: {fontSize}
            <div className="flex gap-1 mt-1">
              <button
                onClick={() => setFontSize('small')}
                className="px-1 py-0.5 text-xs bg-white/20 rounded hover:bg-white/30"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('normal')}
                className="px-1 py-0.5 text-sm bg-white/20 rounded hover:bg-white/30"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className="px-1 py-0.5 text-base bg-white/20 rounded hover:bg-white/30"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className="px-1 py-0.5 text-lg bg-white/20 rounded hover:bg-white/30"
              >
                A
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
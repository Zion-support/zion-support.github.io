import { useEffect, useState } from 'react';

const AccessibilityEnhancer = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility features
    applyAccessibilityFeatures();

    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e) => setReducedMotion(e.matches);
    const handleContrastChange = (e) => setIsHighContrast(e.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  const applyAccessibilityFeatures = () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      /* Enhanced focus indicators */
      *:focus {
        outline: 3px solid #06b6d4 !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
      }
      
      /* High contrast mode */
      .high-contrast {
        filter: contrast(150%) brightness(110%);
      }
      
      /* Reduced motion */
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      /* Skip to content link */
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
      
      /* Screen reader only content */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(style);

    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Enhance form accessibility
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
          input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
        }
      }
    });

    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  };

  const announceToScreenReader = (message) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const toggleHighContrast = () => {
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    document.documentElement.classList.toggle('high-contrast', newState);
    announceToScreenReader(`High contrast mode ${newState ? 'enabled' : 'disabled'}`);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    document.documentElement.style.fontSize = 
      size === 'small' ? '14px' : 
      size === 'large' ? '18px' : 
      size === 'xlarge' ? '20px' : '16px';
    announceToScreenReader(`Font size changed to ${size}`);
  };

  const toggleReducedMotion = () => {
    const newState = !reducedMotion;
    setReducedMotion(newState);
    document.documentElement.classList.toggle('reduced-motion', newState);
    announceToScreenReader(`Reduced motion ${newState ? 'enabled' : 'disabled'}`);
  };

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Alt + 1: Skip to main content
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        const main = document.getElementById('main-content');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Alt + 2: Toggle high contrast
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        toggleHighContrast();
      }
      
      // Alt + 3: Toggle reduced motion
      if (e.altKey && e.key === '3') {
        e.preventDefault();
        toggleReducedMotion();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isHighContrast, reducedMotion]);

  return (
    <div className="accessibility-controls fixed bottom-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg text-sm">
      <h3 className="font-bold mb-2">Accessibility</h3>
      
      <div className="space-y-2">
        <button
          onClick={toggleHighContrast}
          className="block w-full text-left px-2 py-1 hover:bg-white/20 rounded"
          aria-pressed={isHighContrast}
        >
          {isHighContrast ? '✓' : '○'} High Contrast
        </button>
        
        <div className="space-y-1">
          <span className="block text-xs text-gray-300">Font Size:</span>
          <div className="flex space-x-1">
            {['small', 'normal', 'large', 'xlarge'].map(size => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size ? 'bg-cyan-500' : 'hover:bg-white/20'
                }`}
                aria-pressed={fontSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <button
          onClick={toggleReducedMotion}
          className="block w-full text-left px-2 py-1 hover:bg-white/20 rounded"
          aria-pressed={reducedMotion}
        >
          {reducedMotion ? '✓' : '○'} Reduced Motion
        </button>
        
        <div className="text-xs text-gray-400 mt-2">
          <div>Alt+1: Skip to content</div>
          <div>Alt+2: Toggle contrast</div>
          <div>Alt+3: Toggle motion</div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
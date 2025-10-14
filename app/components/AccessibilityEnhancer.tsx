import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const enhanceAccessibility = () => {
      // Add skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = 'position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden;';
      document.body.insertBefore(skipLink, document.body.firstChild);

    // High contrast mode
    if (isHighContrast) => {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion mode
    if (isReducedMotion) => {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1'
    );
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) => {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) => {
          (main as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Add ARIA landmarks
  useEffect(() => {
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) => {
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) => {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) => {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    addAriaLandmarks();
  }, []);

  // Add alt text to images without alt attributes
  useEffect(() => {
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) => {
          img.setAttribute('alt', `Image ${index + 1}`);
        }
      });
    };

    addAltText();
  }, []);

  return (
    <div className="accessibility-control s fixedbottom-4left-4z-50bg-slate-800p-4rounded-lgshadow-lg">
      <h3 className="text-whitefont-semiboldmb-3">Accessibility</h3>
      
      const handleKeyDown = (e: KeyboardEvent) => {
        // Trap focus within modals
        if (e.key === 'Tab') {
          const modal = document.querySelector('[role="dialog"]');
          if (modal) {
            const focusableContent = modal.querySelectorAll(focusableElements);
            const firstFocusableElement = focusableContent[0] as HTMLElement;
            const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        }

        <div className="space-y-1">
          <label className="text-whitetext-sm">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as 'small' | 'normal' | 'large')}
            className="w-fullbg-slate-700text-whiteroundedpx-2py-1text-sm"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
          </div>
        </div>
      </div>
    </div> ); }; export default Accessibility Enhancer;
=======
  )
export default Accessibility;; Enhancer

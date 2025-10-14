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

      // Add focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
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

        // Escape key handling
        if (e.key === 'Escape') {
          const modal = document.querySelector('[role="dialog"]');
          if (modal) {
            const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      // Add ARIA live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Add high contrast mode detection
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast');
      }

      // Add reduced motion detection
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduced-motion');
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        const skipLink = document.querySelector('a[href="#main-content"]');
        if (skipLink) {
          skipLink.remove();
        }
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.remove();
        }
      };
    };

    const cleanup = enhanceAccessibility();
    return cleanup;
  }, []);
  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  )
}
import React, {use Effect, use State }from 'react'; const Accessibility Enhancer: React.FC = ( )=> {const [is High Contrast, set Is High Contrast ]= use State (false ); const [is Reduced Motion, set Is Reduced Motion ]= use State (false ); const [font Size, set Font Size ]= use State<'small' | 'normal' | 'large' | 'extra-large'> ('normal' ); use Effect ( ( )=> {const root = document.document Element; // High contrast mode if (is High Contrast ){root.class List.add ('high-contrast' ); }else {root.class List.remove ('high-contrast' ); }// Reduced motion mode if (is Reduced Motion ){root.class List.add ('reduced-motion' ); }else {root.class List.remove ('reduced-motion' ); }// Font size adjustment root.style.set Property ('--font-size-multiplier', font Size === 'large' ? '1.2' : font Size === 'extra-large' ? '1.4' : font Size === 'small' ? '0.9' : '1' ); }, [is High Contrast, is Reduced Motion, font Size ]); // Keyboard navigation enhancement use Effect ( ( )=> {const handle Key Down = (e: Keyboard Event )=> {// Skip to main content if (e.key === 'Tab' && e.shift Key && e.target === document.body ){e.prevent Default ( ); const main = document.query Selector ('main' ); if (main ){ (main as HTMLElement ).focus ( ); } } }; document.add Event Listener ('keydown', handle Key Down ); return ( )=> document.remove Event Listener ('keydown', handle Key Down ); }, [ ]); // Add ARIA landmarks use Effect ( ( )=> {const add Aria Landmarks = ( )=> {const main = document.query Selector ('main' ); if (main && !main.get Attribute ('role' ) ){main.set Attribute ('role', 'main' ); }const nav = document.query Selector ('nav' ); if (nav && !nav.get Attribute ('role' ) ){nav.set Attribute ('role', 'navigation' ); }const footer = document.query Selector ('footer' ); if (footer && !footer.get Attribute ('role' ) ){footer.set Attribute ('role', 'contentinfo' ); } }; add Aria Landmarks ( ); }, [ ]); // Add alt text to images without alt attributes use Effect ( ( )=> {const add Alt Text = ( )=> {const images = document.query Selector All ('img:not ( [alt ])' ); images.for Each ( (img, index )=> {if (!img.get Attribute ('alt' ) ){img.set Attribute ('alt', `Image $ {index + 1 }` ); } } ); }; add Alt Text ( ); }, [ ]); return (<div className="accessibility controls fixed bottom 4 left-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg"> <h3 className="text white font semibold mb-3">Accessibility</h3> <div className="space y 3"> <label className="flex items center space x-2 text-white text-sm"> <input type="checkbox"checked= {is High Contrast }on Change= { (e )=> set Is High Contrast (e.target.checked )}className="rounded"/> <span>High Contrast</span> </label> <label className="flex items center space x-2 text-white text-sm"> <input type="checkbox"checked= {is Reduced Motion }on Change= { (e )=> set Is Reduced Motion (e.target.checked )}className="rounded"/> <span>Reduce Motion</span> </label> <div className="space y 1"> <label className="text white text sm">Font Size</label> <select value= {font Size }on Change= { (e )=> set Font Size (e.target.value as 'small' | 'normal' | 'large' | 'extra-large' )}className="w full bg slate-700 text-white rounded px-2 py-1 text-sm"> <option value="small">Small</option> <option value="normal">Normal</option> <option value="large">Large</option> <option value="extra-large">Extra Large</option> </select> 
          
        </div>
      </div>
    </div> ); }; export default Accessibility Enhancer;
=======
  )
export default Accessibility;; Enhancer

import React, { useEffect, useState } from 'react';


const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal');

  useEffect(() => {
    const root = document.documentElement;
    // High contrast mode
    if (is High Contrast) {
      root.class List.add('high-contrast')
    } else {
      root.class List.remove('high-contrast')
    }
  )
    // Reduced motion mode
    if (is Reduced Motion) {
      root.class List.add('reduced-motion')
    } else {
      root.class List.remove('reduced-motion')
    }
  )
    // Font size adjustment
    root.style.fontSize = fontSize === 'small' ? '14px' : 
                         fontSize === 'normal' ? '16px' : 
                         fontSize === 'large' ? '18px' : '20px';

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Close dropdowns with Escape key
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('role', 'main');
      }
    }

    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (element: HTMLElement) => {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
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
        });
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // High contrast preference detection
    if (enableHighContrast && typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      const updateHighContrast = () => setIsHighContrast(prefersHighContrast.matches);
      
      updateHighContrast();
      prefersHighContrast.addEventListener('change', updateHighContrast);

      return () => prefersHighContrast.removeEventListener('change', updateHighContrast);
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement, isHighContrast, isReducedMotion, fontSize]);

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Accessibility Controls</h3>
        
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={(e) => setIsHighContrast(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isReducedMotion}
              onChange={(e) => setIsReducedMotion(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Reduced Motion</span>
          </label>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-700">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as 'small' | 'normal' | 'large' | 'extra-large')}
            className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
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

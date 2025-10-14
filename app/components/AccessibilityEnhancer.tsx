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
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
          e.preventDefault();
          const main = document.querySelector('main');
          if (main) {
            (main as HTMLElement).focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  // Add ARIA landmarks
  useEffect(() => {
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      const addAriaLandmarks = () => {
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        const nav = document.querySelector('nav');
        if (nav && !nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }

        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      };

      addAriaLandmarks();
    }
  }, [enableScreenReaderSupport]);

  // Add alt text to images without alt attributes
  useEffect(() => {
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      const addAltText = () => {
        const images = document.querySelectorAll('img:not([alt])');
        images.forEach((img, index) => {
          if (!img.getAttribute('alt')) {
            img.setAttribute('alt', `Image ${index + 1}`);
          }
        });
      };

      addAltText();
    }
  }, [enableScreenReaderSupport]);

  return (
    <div className="accessibility-controls fixed bottom-4 left-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg">
        
      <h3 className="text-white font-semibold mb-3">Accessibility</h3>
      <div className="space-y-3">
        
        <label className="flex items-center space-x-2 text-white">
          <input
            type="checkbox"
            checked={is High Contrast}
  )
            on Change={(e) => set Is High Contrast(e.target.checked)}
  )
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        <label className="flex items-center space-x-2 text-white text-sm">
          <input
            type="checkbox"
            checked={is Reduced Motion}
  )
            on Change={(e) => set Is Reduced Motion(e.target.checked)}
  )
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>
        
        <div className="space-y-2">
        
          <label className="text-white text-sm">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as 'small' | 'normal' | 'large' | 'extra-large')}
            className="w-full p-2 rounded bg-slate-700 text-white"
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

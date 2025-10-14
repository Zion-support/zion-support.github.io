import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal');

  useEffect(() => {
    const root = document.documentElement;

    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion mode
    if (isReducedMotion) {
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

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
    };
    
    addAriaLandmarks();
  }, [isHighContrast, isReducedMotion, fontSize]);

    // Focus management
    if (enableFocusManagement) {
      const setupFocusManagement = () => {
        let lastFocusedElement: HTMLElement | null = null;
        
        const handleFocusIn = (event: FocusEvent) => {
          lastFocusedElement = event.target as HTMLElement;
        };
        
        const handleFocusOut = (event: FocusEvent) => {
          const target = event.target as HTMLElement;
          if (target && !target.contains(document.activeElement)) {
            lastFocusedElement = target;
          }
        };
        
        document.addEventListener('focusin', handleFocusIn);
        document.addEventListener('focusout', handleFocusOut);
        
        return () => {
          document.removeEventListener('focusin', handleFocusIn);
          document.removeEventListener('focusout', handleFocusOut);
        };
      };
      
      cleanupFunctions.push(setupFocusManagement());
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const setupKeyboardNavigation = () => {
        const handleKeyDown = (event: KeyboardEvent) => {
          // Skip to main content with Alt + M
          if (event.altKey && event.key === 'm') {
            event.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
              mainContent.focus();
              mainContent.scrollIntoView({ behavior: 'smooth' });
            }
          }
          
          // Skip to navigation with Alt + N
          if (event.altKey && event.key === 'n') {
            event.preventDefault();
            const navigation = document.querySelector('nav');
            if (navigation) {
              const firstFocusable = navigation.querySelector('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
              if (firstFocusable) {
                firstFocusable.focus();
              }
            }
          }
        };
        
        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      };
      
      cleanupFunctions.push(setupKeyboardNavigation());
    }

    // Add skip link
    cleanupFunctions.push(addSkipLink());

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add('keyboard-navigation');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('keyboard-navigation');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return (
    <div className="accessibility-enhanced">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-50 bg-slate-800 rounded-lg p-4 shadow-lg">
        <h3 className="text-white text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-white text-xs">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={(e) => setIsHighContrast(e.target.checked)}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2 text-white text-xs">
            <input
              type="checkbox"
              checked={isReducedMotion}
              onChange={(e) => setIsReducedMotion(e.target.checked)}
              className="rounded"
            />
            <span>Reduce Motion</span>
          </label>
          
          <div className="text-white text-xs">
            <label>Font Size:</label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value as any)}
              className="ml-2 bg-slate-700 text-white rounded px-1 py-0.5 text-xs"
            >
              <option value="small">Small</option>
              <option value="normal">Normal</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;

import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large' | 'extra-large'>('medium');

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
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.target === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, []);

  return (
    <div className="accessibility-enhanced">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-slate-800 rounded-lg p-4 shadow-lg">
          <h3 className="text-white text-sm font-semibold mb-2">Accessibility</h3>
          
          <div className="space-y-2">
            <label className="flex items-center text-white text-xs">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={(e) => setIsHighContrast(e.target.checked)}
                className="mr-2"
              />
              High Contrast
            </label>
            
            <label className="flex items-center text-white text-xs">
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={(e) => setIsReducedMotion(e.target.checked)}
                className="mr-2"
              />
              Reduced Motion
            </label>
            
            <div>
              <label className="text-white text-xs block mb-1">Font Size</label>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value as any)}
                className="text-xs bg-slate-700 text-white rounded px-2 py-1"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
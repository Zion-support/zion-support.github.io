import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'normal' | 'large' | 'extra-large';
  reducedMotion: boolean;
  screenReader: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'normal',
    reducedMotion: false,
    screenReader: false
  });

  useEffect(() => {
    // Check for system preferences
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    setSettings(prev => ({
      ...prev,
      highContrast: highContrastQuery.matches,
      reducedMotion: reducedMotionQuery.matches
    }));

    // Apply accessibility settings
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    root.classList.add(`font-size-${settings.fontSize}`);
  }, [settings]);

  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const setFontSize = (size: 'small' | 'normal' | 'large' | 'extra-large') => {
    setSettings(prev => ({ ...prev, fontSize: size }));
  };

  const toggleReducedMotion = () => {
    setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

  return (
    <div className="enhanced-accessibility">
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Accessibility Settings</h3>
        
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={toggleHighContrast}
              className="mr-2"
            />
            High Contrast
          </label>
          
          <div>
            <label className="block text-sm font-medium mb-1">Font Size</label>
            <select
              value={settings.fontSize}
              onChange={(e) => setFontSize(e.target.value as any)}
              className="w-full p-1 border rounded"
            >
              <option value="small">Small</option>
              <option value="normal">Normal</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>
          
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={toggleReducedMotion}
              className="mr-2"
            />
            Reduced Motion
          </label>
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
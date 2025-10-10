import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    screenReader: false
  });

  useEffect(() => {
    // Detect screen reader
    const detectScreenReader = () => {
      const isScreenReader = window.speechSynthesis !== undefined;
      setSettings(prev => ({ ...prev, screenReader: isScreenReader }));
    };

    // Apply accessibility settings
    const applySettings = () => {
      const root = document.documentElement;
      
      // Font size
      root.style.setProperty('--font-size', 
        settings.fontSize === 'small' ? '14px' : 
        settings.fontSize === 'large' ? '18px' : '16px'
      );
      
      // High contrast
      if (settings.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }
      
      // Reduced motion
      if (settings.reducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }
    };

    detectScreenReader();
    applySettings();
  }, [settings]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <div className="accessibility-enhanced">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => updateSettings({ fontSize: settings.fontSize === 'small' ? 'medium' : settings.fontSize === 'medium' ? 'large' : 'small' })}
          className="bg-purple-600 text-white p-2 rounded-full mb-2 hover:bg-purple-700 transition-colors"
          aria-label="Toggle font size"
        >
          A
        </button>
        
        <button
          onClick={() => updateSettings({ highContrast: !settings.highContrast })}
          className="bg-purple-600 text-white p-2 rounded-full mb-2 hover:bg-purple-700 transition-colors"
          aria-label="Toggle high contrast"
        >
          C
        </button>
        
        <button
          onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
          className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
          aria-label="Toggle reduced motion"
        >
          M
        </button>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
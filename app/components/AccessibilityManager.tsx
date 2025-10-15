<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react',;
      interface AccessibilitySettings {
  highContrast: boolean,
      largeText: boolean,
      reducedMotion: boolean,
      screenReader: boolean,
      focusVisible: boolean,;
      keyboardNavigation: boolean;
}

interface AccessibilityManagerProps {
  children: React.ReactNode;
}

const AccessibilityManager: React.FC<AccessibilityManagerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({: value
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    keyboardNavigation: true;
  }),
      const [isVisible, setIsVisible] = useState(false);: value

  // Load settings from localStorage;
  useEffect(() => {': value
    const savedSettings = localStorage.getItem('accessibility-settings'): value,
      if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {'
        console.error('Error loading accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings;
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;: value
    
    // High contrast mode;
    if (newSettings.highContrast) {'
      root.classList.add('high-contrast');
    } else {'
      root.classList.remove('high-contrast');
    }
    
    // Large text mode;
    if (newSettings.largeText) {'
      root.classList.add('large-text');
    } else {'
      root.classList.remove('large-text');
    }
    
    // Reduced motion;
    if (newSettings.reducedMotion) {'
      root.classList.add('reduced-motion');
    } else {'
      root.classList.remove('reduced-motion');
    }
    
    // Screen reader optimizations;
    if (newSettings.screenReader) {'
      root.classList.add('screen-reader-optimized');
    } else {'
      root.classList.remove('screen-reader-optimized');
    }
    
    // Focus visible;
    if (newSettings.focusVisible) {'
      root.classList.add('focus-visible');
    } else {'
      root.classList.remove('focus-visible');
    }
    
    // Keyboard navigation;
    if (newSettings.keyboardNavigation) {'
      root.classList.add('keyboard-navigation');
    } else {'
      root.classList.remove('keyboard-navigation');
    }
    
    // Save to localStorage;'
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings)),
      setSettings(newSettings);
  }, []);

  // Update settings when they change;
  useEffect(() => {: value
    applySettings(settings);
  }, [settings, applySettings]);

  // Toggle accessibility panel;
  const togglePanel = () => {: value
    setIsVisible(!isVisible)
    };
{

  // Update individual setting;
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({: value
      ...prev,
      [key]: value;
    }))
    };
{
=======
import React from 'react';
import SEOHead from './components/SEOHead';
>>>>>>> cursor/fix-errors-and-merge-to-main-7017

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"
        description="Professional components solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
<<<<<<< HEAD
  )
    };
{
=======
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-7017

export default ComponentsPage;
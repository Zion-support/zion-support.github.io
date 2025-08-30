import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Palette, 
  Monitor, 
  Smartphone,
  Keyboard,
  MousePointer,
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  colorBlindMode: boolean;
  dyslexiaFriendly: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
}

interface AccessibilityAnnouncement {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? JSON.parse(saved) : {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      colorBlindMode: false,
      dyslexiaFriendly: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true
    };
  });
  
  const [announcements, setAnnouncements] = useState<AccessibilityAnnouncement[]>([]);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<AccessibilityAnnouncement | null>(null);

  // Memoized settings object for performance
  const settingsObject = useMemo(() => ({
    'high-contrast': settings.highContrast,
    'large-text': settings.largeText,
    'reduced-motion': settings.reducedMotion,
    'color-blind-mode': settings.colorBlindMode,
    'dyslexia-friendly': settings.dyslexiaFriendly,
    'keyboard-nav': settings.keyboardNavigation,
    'focus-visible': settings.focusIndicators
  }), [settings]);

  // Apply accessibility classes to body
  useEffect(() => {
    const body = document.body;
    
    // Remove all accessibility classes first
    Object.keys(settingsObject).forEach(key => {
      body.classList.remove(key);
    });
    
    // Add active classes
    Object.entries(settingsObject).forEach(([key, value]) => {
      if (value) {
        body.classList.add(key);
      }
    });
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings, settingsObject]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
      
      // Ctrl/Cmd + Shift + H for high contrast
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
      
      // Ctrl/Cmd + Shift + L for large text
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Announce changes to screen readers
  const announce = useCallback((message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const announcement: AccessibilityAnnouncement = {
      id: Date.now().toString(),
      message,
      type,
      timestamp: new Date()
    };
    
    setAnnouncements(prev => [...prev, announcement]);
    setCurrentAnnouncement(announcement);
    
    // Remove announcement after 5 seconds
    setTimeout(() => {
      setCurrentAnnouncement(null);
    }, 5000);
    
    // Remove from list after 10 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a.id !== announcement.id));
    }, 10000);
  }, []);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    const settingNames = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      colorBlindMode: 'Color blind mode',
      dyslexiaFriendly: 'Dyslexia friendly',
      screenReader: 'Screen reader mode',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicators: 'Focus indicators'
    };
    
    announce(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`);
  }, [announce]);

  // Reset all settings
  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      colorBlindMode: false,
      dyslexiaFriendly: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true
    });
    announce('All accessibility settings have been reset');
  }, [announce]);

  // Toggle panel visibility
  const togglePanel = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  // Close panel
  const closePanel = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Get setting icon
  const getSettingIcon = (key: keyof AccessibilitySettings) => {
    const icons = {
      highContrast: Palette,
      largeText: Type,
      reducedMotion: Monitor,
      colorBlindMode: Eye,
      dyslexiaFriendly: Type,
      screenReader: Volume2,
      keyboardNavigation: Keyboard,
      focusIndicators: MousePointer
    };
    return icons[key];
  };

  // Get setting description
  const getSettingDescription = (key: keyof AccessibilitySettings) => {
    const descriptions = {
      highContrast: 'Increases contrast for better visibility',
      largeText: 'Makes text larger and easier to read',
      reducedMotion: 'Reduces animations and motion',
      colorBlindMode: 'Adjusts colors for color blindness',
      dyslexiaFriendly: 'Uses dyslexia-friendly fonts and spacing',
      screenReader: 'Optimizes for screen readers',
      keyboardNavigation: 'Enhances keyboard navigation',
      focusIndicators: 'Shows clear focus indicators'
    };
    return descriptions[key];
  };

  // Get keyboard shortcut
  const getKeyboardShortcut = (key: keyof AccessibilitySettings) => {
    const shortcuts = {
      highContrast: 'Ctrl/Cmd + Shift + H',
      largeText: 'Ctrl/Cmd + Shift + L',
      reducedMotion: 'None',
      colorBlindMode: 'None',
      dyslexiaFriendly: 'None',
      screenReader: 'None',
      keyboardNavigation: 'None',
      focusIndicators: 'None'
    };
    return shortcuts[key];
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-6 right-6 z-50 p-4 bg-zion-cyan text-zion-slate-dark rounded-full shadow-lg hover:bg-zion-cyan-light transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Ctrl/Cmd + Shift + A)"
      >
        <Settings size={24} />
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-zion-slate-light text-zion-slate-dark rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-slate/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-zion-cyan rounded-lg">
                  <Settings size={24} className="text-zion-slate-dark" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Accessibility Settings</h2>
                  <p className="text-sm text-zion-slate/70">
                    Customize your experience for better accessibility
                  </p>
                </div>
              </div>
              <button
                onClick={closePanel}
                className="p-2 hover:bg-zion-slate/10 rounded-lg transition-colors"
                aria-label="Close accessibility settings"
              >
                <X size={20} />
              </button>
            </div>

            {/* Settings Grid */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(settings).map(([key, value]) => {
                  const settingKey = key as keyof AccessibilitySettings;
                  const Icon = getSettingIcon(settingKey);
                  const description = getSettingDescription(settingKey);
                  const shortcut = getKeyboardShortcut(settingKey);
                  
                  return (
                    <div
                      key={key}
                      className="p-4 border border-zion-slate/20 rounded-lg hover:border-zion-cyan/50 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-zion-slate/10 rounded-lg">
                          <Icon size={20} className="text-zion-cyan" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => handleSettingChange(settingKey, e.target.checked)}
                                className="sr-only"
                              />
                              <div className={`
                                w-11 h-6 bg-zion-slate/30 rounded-full transition-colors
                                ${value ? 'bg-zion-cyan' : ''}
                              `}>
                                <div className={`
                                  w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out
                                  ${value ? 'translate-x-5' : 'translate-x-0.5'}
                                `} />
                              </div>
                            </label>
                          </div>
                          <p className="text-sm text-zion-slate/70 mb-2">{description}</p>
                          {shortcut !== 'None' && (
                            <p className="text-xs text-zion-cyan font-mono bg-zion-slate/10 px-2 py-1 rounded">
                              {shortcut}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zion-slate/20 bg-zion-slate/5">
              <div className="flex items-center justify-between">
                <button
                  onClick={resetSettings}
                  className="px-4 py-2 text-sm text-zion-slate/70 hover:text-zion-slate hover:bg-zion-slate/10 rounded-lg transition-colors"
                >
                  Reset All Settings
                </button>
                <div className="text-xs text-zion-slate/50">
                  Press Ctrl/Cmd + Shift + A to toggle this panel
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Announcements */}
      {currentAnnouncement && (
        <div
          className={`
            fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg
            transition-all duration-300 ease-in-out
            ${currentAnnouncement.type === 'success' ? 'bg-green-500 text-white' : ''}
            ${currentAnnouncement.type === 'warning' ? 'bg-yellow-500 text-white' : ''}
            ${currentAnnouncement.type === 'error' ? 'bg-red-500 text-white' : ''}
            ${currentAnnouncement.type === 'info' ? 'bg-zion-cyan text-zion-slate-dark' : ''}
          `}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center space-x-2">
            {currentAnnouncement.type === 'success' && <Check size={16} />}
            {currentAnnouncement.type === 'warning' && <AlertTriangle size={16} />}
            {currentAnnouncement.type === 'error' && <AlertTriangle size={16} />}
            {currentAnnouncement.type === 'info' && <Settings size={16} />}
            <span>{currentAnnouncement.message}</span>
          </div>
        </div>
      )}

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentAnnouncement?.message}
      </div>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;

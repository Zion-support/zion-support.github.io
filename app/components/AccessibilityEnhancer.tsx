import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Type, Volume2, VolumeX, Contrast, ZoomIn, ZoomOut } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  zoom: number;
}

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    zoom: 100
  });

  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Detect screen reader
    const hasScreenReader = window.speechSynthesis && window.speechSynthesis.getVoices().length > 0;
    setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    root.style.zoom = `${settings.zoom}%`;

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const adjustZoom = (delta: number) => {
    setSettings(prev => ({
      ...prev,
      zoom: Math.max(50, Math.min(200, prev.zoom + delta))
    }));
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowPanel(!showPanel)}
          className="bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 text-white hover:bg-slate-700/90 transition-all duration-300"
          aria-label="Toggle accessibility options"
        >
          <Eye className="w-5 h-5" />
        </button>
        
        {showPanel && (
          <div className="absolute top-14 right-0 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 w-64 text-white">
            <h3 className="font-semibold mb-4 text-cyan-400">Accessibility Options</h3>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm">High Contrast</span>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm">Large Text</span>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm">Reduced Motion</span>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </label>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Zoom: {settings.zoom}%</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => adjustZoom(-10)}
                    className="p-1 hover:bg-slate-700 rounded"
                    aria-label="Decrease zoom"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => adjustZoom(10)}
                    className="p-1 hover:bg-slate-700 rounded"
                    aria-label="Increase zoom"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-600">
              <button
                onClick={() => setSettings({
                  highContrast: false,
                  largeText: false,
                  reducedMotion: false,
                  screenReader: false,
                  zoom: 100
                })}
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: var(--tw-bg-opacity) !important;
          color: var(--tw-text-opacity) !important;
          border-color: currentColor !important;
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text p { font-size: 1.1em; }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
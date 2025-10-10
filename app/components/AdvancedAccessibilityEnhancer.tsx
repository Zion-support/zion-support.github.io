'use client';
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  zoomLevel: number;
  focusVisible: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    zoomLevel: 100,
    focusVisible: true
  });
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Detect screen reader
    const detectScreenReader = () => {
      const hasScreenReader = window.speechSynthesis && 
        (navigator.userAgent.includes('NVDA') || 
         navigator.userAgent.includes('JAWS') ||
         navigator.userAgent.includes('VoiceOver'));
      setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));
    };

    detectScreenReader();
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Zoom level
    root.style.fontSize = `${settings.zoomLevel}%`;

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateZoom = (delta: number) => {
    setSettings(prev => ({
      ...prev,
      zoomLevel: Math.max(50, Math.min(200, prev.zoomLevel + delta))
    }));
  };

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  };

  useEffect(() => {
    // Keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.ctrlKey) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          announceToScreenReader('Skipped to main content');
        }
      }

      // Toggle accessibility panel
      if (event.key === 'F1') {
        event.preventDefault();
        setShowPanel(prev => !prev);
        announceToScreenReader(showPanel ? 'Accessibility panel closed' : 'Accessibility panel opened');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showPanel, settings.screenReader]);

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      {showPanel && (
        <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm max-w-sm z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Accessibility Settings</h3>
            <button
              onClick={() => setShowPanel(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Contrast className="w-4 h-4" />
                <span>High Contrast</span>
              </span>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Type className="w-4 h-4" />
                <span>Large Text</span>
              </span>
              <button
                onClick={() => toggleSetting('largeText')}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.largeText ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4" />
                <span>Screen Reader</span>
              </span>
              <span className="text-gray-400">
                {settings.screenReader ? 'Detected' : 'Not detected'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>Zoom Level</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateZoom(-10)}
                  className="p-1 hover:bg-white/20 rounded"
                  aria-label="Decrease zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{settings.zoomLevel}%</span>
                <button
                  onClick={() => updateZoom(10)}
                  className="p-1 hover:bg-white/20 rounded"
                  aria-label="Increase zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-4 left-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-colors z-40"
        aria-label="Open accessibility settings"
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AdvancedAccessibilityEnhancer;
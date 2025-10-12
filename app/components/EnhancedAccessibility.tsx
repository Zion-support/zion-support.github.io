'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: false,
    screenReader: false
  });

  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Detect screen reader
    const screenReader = window.speechSynthesis !== undefined;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      screenReader
    }));

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;
    
    // High contrast mode
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
    
    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);
    
    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          e.preventDefault();
        }
      }
      
      // Skip to navigation
      if (e.key === 'Tab' && !e.shiftKey && e.target === document.body) {
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstFocusable = navigation.querySelector('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (firstFocusable) {
            (firstFocusable as HTMLElement).focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Announce page changes to screen readers
  useEffect(() => {
    if (settings.screenReader) {
      const announcePageChange = () => {
        const pageTitle = document.title;
        const announcement = `Page loaded: ${pageTitle}`;
        
        // Create a live region for announcements
        let liveRegion = document.getElementById('live-region');
        if (!liveRegion) {
          liveRegion = document.createElement('div');
          liveRegion.id = 'live-region';
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('aria-atomic', 'true');
          liveRegion.className = 'sr-only';
          document.body.appendChild(liveRegion);
        }
        
        liveRegion.textContent = announcement;
      };
      
      // Announce after a short delay to ensure page is loaded
      const timer = setTimeout(announcePageChange, 1000);
      return () => clearTimeout(timer);
    }
  }, [settings.screenReader]);

  return (
    <div className={`accessibility-wrapper ${settings.highContrast ? 'high-contrast' : ''} ${settings.reducedMotion ? 'reduced-motion' : ''}`}>
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50">
        <button
          onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
          className="bg-gray-800 text-white p-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Toggle high contrast mode"
        >
          {settings.highContrast ? '🌞' : '🌙'}
        </button>
        
        <button
          onClick={() => setSettings(prev => ({ 
            ...prev, 
            fontSize: prev.fontSize === 'small' ? 'medium' : prev.fontSize === 'medium' ? 'large' : 'small'
          }))}
          className="bg-gray-800 text-white p-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors ml-2"
          aria-label="Change font size"
        >
          A{settings.fontSize === 'large' ? 'A' : settings.fontSize === 'medium' ? 'A' : 'a'}
        </button>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
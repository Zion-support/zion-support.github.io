<<<<<<< HEAD
import React from "react";

const EnhancedAccessibility = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">EnhancedAccessibility</h2>
      <p>This component is under construction.</p>
=======
'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false
  });

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
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
    // Apply accessibility settings to the document
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
    
    // Screen reader optimizations
    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a') as HTMLElement;
          if (firstLink) {
            firstLink.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Announce page changes to screen readers
  useEffect(() => {
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has loaded';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    announcePageChange();
  }, []);

  return (
    <div className="accessibility-wrapper">
      {/* Accessibility Controls */}
      <div className="accessibility-controls" role="toolbar" aria-label="Accessibility controls">
        <button
          className="sr-only focus:not-sr-only"
          onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
          aria-label="Toggle high contrast mode"
        >
          {settings.highContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        <button
          className="sr-only focus:not-sr-only"
          onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
          aria-label="Toggle reduced motion"
        >
          {settings.reducedMotion ? 'Enable' : 'Disable'} Animations
        </button>
        
        <div className="font-size-controls" role="group" aria-label="Font size controls">
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'small' }))}
            aria-label="Small font size"
          >
            A
          </button>
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'medium' }))}
            aria-label="Medium font size"
          >
            A
          </button>
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'large' }))}
            aria-label="Large font size"
          >
            A
          </button>
        </div>
      </div>
      
      {children}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
    </div>
  );
};

export default EnhancedAccessibility;
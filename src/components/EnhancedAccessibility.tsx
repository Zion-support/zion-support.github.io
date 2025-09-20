import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, Eye, EyeOff, Volume2, VolumeX, Settings, RotateCcw } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlindSupport: boolean;
  dyslexiaFriendly: boolean;
  autoAnnouncements: boolean;
  skipLinks: boolean;
}

export default function EnhancedAccessibility({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    keyboardNavigation: false,
    screenReader: false,
    focusIndicator: false,
    colorBlindSupport: false,
    dyslexiaFriendly: false,
    autoAnnouncements: false,
    skipLinks: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [skipLinksVisible, setSkipLinksVisible] = useState(false);

  useEffect(() => {
    // Apply accessibility settings to document
    document.documentElement.setAttribute('data-high-contrast', settings.highContrast.toString());
    document.documentElement.setAttribute('data-large-text', settings.largeText.toString());
    document.documentElement.setAttribute('data-reduced-motion', settings.reducedMotion.toString());
    document.documentElement.setAttribute('data-keyboard-navigation', settings.keyboardNavigation.toString());
    document.documentElement.setAttribute('data-screen-reader', settings.screenReader.toString());
    document.documentElement.setAttribute('data-focus-indicator', settings.focusIndicator.toString());
    document.documentElement.setAttribute('data-color-blind-support', settings.colorBlindSupport.toString());
    document.documentElement.setAttribute('data-dyslexia-friendly', settings.dyslexiaFriendly.toString());
    document.documentElement.setAttribute('data-auto-announcements', settings.autoAnnouncements.toString());
    document.documentElement.setAttribute('data-skip-links', settings.skipLinks.toString());
  }, [settings]);

  useEffect(() => {
    // Handle keyboard navigation
    if (settings.keyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          setCurrentFocus(document.activeElement as HTMLElement);
        }
        
        // Skip links functionality
        if (e.key === 'Enter' && settings.skipLinks) {
          const target = e.target as HTMLElement;
          if (target.getAttribute('data-skip-link')) {
            const targetId = target.getAttribute('data-skip-link');
            const targetElement = document.getElementById(targetId || '');
            if (targetElement) {
              targetElement.focus();
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings.keyboardNavigation, settings.skipLinks]);

  useEffect(() => {
    // Update focus indicator position
    if (settings.focusIndicator && currentFocus) {
      const rect = currentFocus.getBoundingClientRect();
      const indicator = document.getElementById('focus-indicator');
      if (indicator) {
        indicator.style.left = `${rect.left}px`;
        indicator.style.top = `${rect.top}px`;
        indicator.style.width = `${rect.width}px`;
        indicator.style.height = `${rect.height}px`;
      }
    }
  }, [currentFocus, settings.focusIndicator]);

  const announce = useCallback((message: string) => {
    if (!isMuted && settings.autoAnnouncements) {
      setAnnouncements(prev => [...prev, message]);
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 3000);
    }
  }, [isMuted, settings.autoAnnouncements]);

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    const newValue = !settings[setting];
    setSettings(prev => ({ ...prev, [setting]: newValue }));
    
    const settingNames = {
      highContrast: 'High contrast mode',
      largeText: 'Large text mode',
      reducedMotion: 'Reduced motion mode',
      keyboardNavigation: 'Keyboard navigation mode',
      screenReader: 'Screen reader mode',
      focusIndicator: 'Focus indicator mode',
      colorBlindSupport: 'Color blind support',
      dyslexiaFriendly: 'Dyslexia friendly mode',
      autoAnnouncements: 'Auto announcements',
      skipLinks: 'Skip links'
    };
    
    announce(`${settingNames[setting]} ${newValue ? 'enabled' : 'disabled'}`);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    announce(`Announcements ${isMuted ? 'enabled' : 'muted'}`);
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      keyboardNavigation: false,
      screenReader: false,
      focusIndicator: false,
      colorBlindSupport: false,
      dyslexiaFriendly: false,
      autoAnnouncements: false,
      skipLinks: false
    });
    announce('Accessibility settings reset');
  };

  const toggleSkipLinks = () => {
    setSkipLinksVisible(!skipLinksVisible);
  };

  if (!isVisible) {
    return (
      <>
        {children}
        <button
          onClick={() => setIsVisible(true)}
          className="fixed top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          title="Show Accessibility Settings"
          aria-label="Open accessibility settings"
        >
          <Accessibility className="w-5 h-5" />
        </button>
      </>
    );
  }

  return (
    <>
      {children}
      
      {/* Focus Indicator */}
      {settings.focusIndicator && (
        <div
          id="focus-indicator"
          className="fixed pointer-events-none border-2 border-blue-500 rounded transition-all duration-200 z-50"
          style={{ display: currentFocus ? 'block' : 'none' }}
        />
      )}
      
      {/* Skip Links */}
      {settings.skipLinks && skipLinksVisible && (
        <div className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Skip Links</h3>
            <div className="flex flex-wrap gap-2">
              <button
                data-skip-link="main-content"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Skip to main content
              </button>
              <button
                data-skip-link="navigation"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Skip to navigation
              </button>
              <button
                data-skip-link="footer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Skip to footer
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Announcements */}
      <AnimatePresence>
        {announcements.map((announcement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            role="status"
            aria-live="polite"
          >
            {announcement}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Accessibility Panel */}
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm z-50"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Accessibility Settings</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-white"
              title={isMuted ? 'Unmute announcements' : 'Mute announcements'}
              aria-label={isMuted ? 'Unmute announcements' : 'Mute announcements'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
              title="Close accessibility settings"
              aria-label="Close accessibility settings"
            >
              <EyeOff className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="flex items-center justify-between">
              <span>High Contrast</span>
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={() => toggleSetting('highContrast')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Large Text</span>
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={() => toggleSetting('largeText')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Reduced Motion</span>
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={() => toggleSetting('reducedMotion')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Keyboard Navigation</span>
              <input
                type="checkbox"
                checked={settings.keyboardNavigation}
                onChange={() => toggleSetting('keyboardNavigation')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Screen Reader Mode</span>
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={() => toggleSetting('screenReader')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Focus Indicator</span>
              <input
                type="checkbox"
                checked={settings.focusIndicator}
                onChange={() => toggleSetting('focusIndicator')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Color Blind Support</span>
              <input
                type="checkbox"
                checked={settings.colorBlindSupport}
                onChange={() => toggleSetting('colorBlindSupport')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Dyslexia Friendly</span>
              <input
                type="checkbox"
                checked={settings.dyslexiaFriendly}
                onChange={() => toggleSetting('dyslexiaFriendly')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Auto Announcements</span>
              <input
                type="checkbox"
                checked={settings.autoAnnouncements}
                onChange={() => toggleSetting('autoAnnouncements')}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Skip Links</span>
              <input
                type="checkbox"
                checked={settings.skipLinks}
                onChange={() => toggleSetting('skipLinks')}
                className="w-4 h-4"
              />
            </label>
          </div>
          
          <div className="border-t border-gray-700 pt-3 space-y-2">
            <button
              onClick={toggleSkipLinks}
              className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              aria-label="Toggle skip links visibility"
            >
              {skipLinksVisible ? 'Hide' : 'Show'} Skip Links
            </button>
            <button
              onClick={resetSettings}
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              aria-label="Reset all accessibility settings"
            >
              <RotateCcw className="w-4 h-4 inline mr-2" />
              Reset Settings
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
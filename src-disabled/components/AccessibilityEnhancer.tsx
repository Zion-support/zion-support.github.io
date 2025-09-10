:src_backup/components/AccessibilityEnhancer.tsx
import React, { useEffect, useState } from 'react';



;
import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from react';
interface AccessibilityEnhancerProps  {children: React.ReactNode;
}const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {const [isHighContrast, setIsHighContrast] = useState(false)const [isReducedMotion, setIsReducedMotion] = useState(false)const [fontSize, setFontSize]  = useState(16)useEffect(() => {// Check for user preferences;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast  = window.matchMedia('(prefers-contrast: high)').matches;setIsReducedMotion(prefersReducedMotion)setIsHighContrast(prefersHighContrast)// Apply initial styles;
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`)if (prefersReducedMotion) {document.documentElement.classList.add('reduce-motion')}if (prefersHighContrast) {document.documentElement.classList.add('high-contrast')}// Add keyboard navigation support;
    const handleKeyDown = (e: KeyboardEvent) => {if (e.key === 'Tab') {document.body.classList.add('keyboard-navigation')import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Eye,EyeOff,Volume2,VolumeX,Contrast,Type,MousePointer,Keyboard,Accessibility,Settings,X,Check,AlertTriangle,Info;
 } from 'lucide-react';
interface AccessibilitySettings  {highContrast: boolean;
:src_backup/components/AccessibilityEnhancer.tsx
        console.warn('Failed to parse accessibility settings:', error);
}export function AccessibilityEnhancer() {const [isOpen, setIsOpen] = useState(false)const [settings, setSettings] = useState<AccessibilitySettings>({highContrast: false,largeText: false,reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true,colorBlindness: 'normal',fontSize: 'normal';
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);
origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4210
        console.warn('Failed to parse accessibility settings:, error);
}export function AccessibilityEnhancer() {const [isOpen, setIsOpen] = useState(false)const [settings, setSettings] = useState<AccessibilitySettings>({highContrast: false,largeText: false,reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true,colorBlindness: normal',fontSize: 'normal;
  })// Apply accessibility settings to document;
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {const root  = document.documentElement;// High contrast;
    if (newSettings.highContrast) {root.classList.add('high-contrast')root.style.setProperty('--zion-cyan', '#00ffff')root.style.setProperty('--zion-slate-900', '#000000')root.style.setProperty('--zion-slate-100', '#ffffff')} else {root.classList.remove('high-contrast')root.style.removeProperty('--zion-cyan')root.style.removeProperty('--zion-slate-900')root.style.removeProperty('--zion-slate-100')}// Large text;
    if (newSettings.largeText) {root.classList.add('large-text')root.style.fontSize = '120%';
    } else {root.classList.remove('large-text')root.style.fontSize = '';
    }// Reduced motion;
    if (newSettings.reducedMotion) {root.classList.add('reduced-motion')root.style.setProperty('--reduced-motion', 'true')} else {root.classList.remove('reduced-motion')root.style.removeProperty('--reduced-motion')}// Focus indicator;
    if (newSettings.focusIndicator) {root.classList.add('focus-visible')} else {root.classList.remove('focus-visible')}// Color blindness simulation;
    if (newSettings.colorBlindness !== 'normal') {root.classList.add(`color-blind-${newSettings.colorBlindness}`)} else {root.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia')}// Font size;
    root.classList.remove('font-size-normal', 'font-size-large', 'font-size-xlarge')root.classList.add(`font-size-${newSettings.fontSize}`)}, [])// Enhanced keyboard navigation;
  const setupKeyboardNavigation = useCallback(() => {if (!settings.keyboardNavigation) return;const handleKeyDown = (e: KeyboardEvent) => {// Skip to main content;
      if (e.key === 'Tab' && e.altKey) {e.preventDefault()const mainContent = document.querySelector('main')if (mainContent) {(mainContent as HTMLElement).focus()}}
    }const handleMouseDown = () => {document.body.classList.remove('keyboard-navigation')}document.addEventListener('keydown', handleKeyDown)document.addEventListener('mousedown', handleMouseDown)return () => {document.removeEventListener('keydown', handleKeyDown)document.removeEventListener('mousedown', handleMouseDown)}}, [fontSize])// Skip to navigation;
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {e.preventDefault()const navigation = document.querySelector('nav')if (navigation) {(navigation as HTMLElement).focus()}
      }// Skip to footer;
      if (e.key === 'Tab' && e.ctrlKey) {e.preventDefault()const footer = document.querySelector('footer')if (footer) {(footer as HTMLElement).focus()}
      }
    }document.addEventListener('keydown', handleKeyDown)return () => document.removeEventListener('keydown', handleKeyDown)}, [settings.keyboardNavigation])// Screen reader announcements;
  const announceToScreenReader = useCallback((message: string) => {if (!settings.screenReader) return;const announcement = document.createElement('div')announcement.setAttribute('aria-live', 'polite')announcement.setAttribute('aria-atomic', 'true')announcement.className = 'sr-only';
    announcement.textContent = message;document.body.appendChild(announcement)setTimeout(() => {document.body.removeChild(announcement)}, 1000)}, [settings.screenReader])// Enhanced focus management;
  const setupFocusManagement = useCallback(() => {if (!settings.focusIndicator) return;const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    )focusableElements.forEach(element => {element.addEventListener('focus', () => {element.classList.add('focus-ring')announceToScreenReader(`${element.textContent || element.getAttribute('aria-label') || 'Element'} focused`)})element.addEventListener('blur', () => {element.classList.remove('focus-ring')})})}, [settings.focusIndicator, announceToScreenReader])// Apply settings when they change;
  useEffect(() => {applyAccessibilitySettings(settings)}, [settings, applyAccessibilitySettings])// Setup keyboard navigation and focus management;
  useEffect(() => {const cleanupKeyboard = setupKeyboardNavigation()const cleanupFocus  = setupFocusManagement()return () => {cleanupKeyboard?.()cleanupFocus?.()}}, [setupKeyboardNavigation, setupFocusManagement])// Save settings to localStorage;
  useEffect(() => {localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings))}, [settings])// Load settings from localStorage on mount;
  useEffect(() => {const savedSettings = localStorage.getItem('zion-accessibility-settings')if (savedSettings) {try {const parsed = JSON.parse(savedSettings)setSettings(parsed)} catch (error) {console.warn('Failed to parse accessibility settings:', error)}
    }
:src_backup/components/AccessibilityEnhancer.tsx
  }, []);
origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4210
:src_backup/components/AccessibilityEnhancer.tsx
:src_backup/components/AccessibilityEnhancer.tsx
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">


          className="fixed bottom-4 left-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
  }, [])const toggleHighContrast = () => {setIsHighContrast(!isHighContrast)document.documentElement.classList.toggle('high-contrast')}const toggleReducedMotion = () => {setIsReducedMotion(!isReducedMotion)document.documentElement.classList.toggle('reduce-motion')}const increaseFontSize = () => {const newSize = Math.min(fontSize + 2, 24)setFontSize(newSize)document.documentElement.style.setProperty('--font-size', `${newSize}px`)}const decreaseFontSize = () => {const newSize = Math.max(fontSize - 2, 12)setFontSize(newSize)document.documentElement.style.setProperty('--font-size', `${newSize}px`)}return (<>;
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">;
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>;
        <div className="space-y-2">;
          className="fixed bottom-4 left-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Accessibility Settings"
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=fixed bottom-4 left-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
  }, [])const toggleHighContrast = () => {setIsHighContrast(!isHighContrast)document.documentElement.classList.toggle('high-contrast)}const toggleReducedMotion = () => {setIsReducedMotion(!isReducedMotion)document.documentElement.classList.toggle(reduce-motion')}const increaseFontSize = () => {const newSize = Math.min(fontSize + 2, 24)setFontSize(newSize)document.documentElement.style.setProperty('--font-size, `${newSize}px`)}const decreaseFontSize = () => {const newSize = Math.max(fontSize - 2, 12)setFontSize(newSize)document.documentElement.style.setProperty(--font-size', `${newSize}px`)}return (<>;
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border>;
        <h3 className=text-sm font-semibold mb-2">Accessibility</h3>;
        <div className="space-y-2>;
          <button;
            onClick={toggleHighContrast}
            className="block w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded";
            aria-label="Toggle high contrast mode";
          >;
            {isHighContrast ? '✓' : '○'} High Contrast;
          </button>;
          <button;
            onClick={toggleReducedMotion}
            className="block w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded";
            aria-label="Toggle reduced motion";
          >;
            {isReducedMotion ? '✓' : '○'} Reduce Motion;
          </button>;
          <div className="flex items-center space-x-2">;
            <button;
              onClick={decreaseFontSize}
              className="text-sm px-2 py-1 hover:bg-gray-100 rounded";
              aria-label="Decrease font size";
            >;
              A-;
            </button>;
            <span className="text-sm">{fontSize}px</span>;
            <button;
              onClick={increaseFontSize}
              className="text-sm px-2 py-1 hover:bg-gray-100 rounded";
              aria-label="Increase font size";
            >;
              A+;
            </button>;
          </div>;
      {/* Skip to main content link */}
      <a;
        href="#main-content";
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";
      >;
        Skip to main content;
      </a>;
      {children}
    </>;
  )}export default AccessibilityEnhancer;{/* Accessibility Controls Button */}
      {showControls && (<motion.button;
          className="fixed bottom-4 left-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-cyan-400/50";
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Accessibility Settings";
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >;
          <Accessibility className="w-6 h-6" />;
        </motion.button>;
      )}{/* Accessibility Panel */}
      <AnimatePresence>;
        {isOpen && (<motion.div;
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4";


          >
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto"
          >;
            <motion.div;
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto";
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">;
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">;
                  <Accessibility className="w-5 h-5 text-cyan-600" />;
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-cyan-600" />
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>


              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700>;
                <h2 className=text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">;
                  <Accessibility className="w-5 h-5 text-cyan-600 />;
                  Accessibility Settings;
                </h2>;
                <button;
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300";
                  aria-label="Close accessibility settings";
                >;
                  <X className="w-5 h-5" />;
                </button>;
              </div>;
              {/* Settings Content */}
              <div className="p-6 space-y-6">;
                {/* Visual Settings */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Visual</h3>;
                  <label className="flex items-center gap-3 cursor-pointer">;
                    <input;
                      type="checkbox";
                      checked={settings.highContrast}
                      onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                      className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500";
                    />;
                    <Contrast className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
                    <span className="text-slate-700 dark:text-slate-300">High Contrast</span>;
                  </label>;
                  <label className="flex items-center gap-3 cursor-pointer">;
                    <input;
                      type="checkbox";
                      checked={settings.largeText}
                      onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                      className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500";
                    />;
                    <Type className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
                    <span className="text-slate-700 dark:text-slate-300">Large Text</span>;
                  </label>;
                  <label className="flex items-center gap-3 cursor-pointer">;
                    <input;
                      type="checkbox";
                      checked={settings.reducedMotion}
                      onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                      className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500";
                    />;
                    <MousePointer className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
                    <span className="text-slate-700 dark:text-slate-300">Reduced Motion</span>;
                  </label>;
                </div>;
                {/* Navigation Settings */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Navigation</h3>;
                  <label className="flex items-center gap-3 cursor-pointer">;
                    <input;
                      type="checkbox";
                      checked={settings.keyboardNavigation}
                      onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                      className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500";
                    />;
                    <Keyboard className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
                    <span className="text-slate-700 dark:text-slate-300">Enhanced Keyboard Navigation</span>;
                  </label>;
                  <label className="flex items-center gap-3 cursor-pointer">;
                    <input;
                      type="checkbox";
                      checked={settings.focusIndicator}
                      onChange={(e) => setSettings(prev => ({ ...prev, focusIndicator: e.target.checked }))}
                      className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500";
                    />;
                    <MousePointer className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
                    <span className="text-slate-700 dark:text-slate-300">Focus Indicators</span>;
                  </label>;
                </div>;
                {/* Font Size Selection */}
                <div className="space-y-3">;
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Font Size</h3>;
                  <div className="grid grid-cols-3 gap-2">;
                    {(['normal', 'large', 'xlarge'] as const).map((size) => (<button;
                        key={size}
                        onClick={() => setSettings(prev => ({ ...prev, fontSize: size }))}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${settings.fontSize === size;
                            ? 'bg-cyan-600 text-white';
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600';
                        }`}
                      >;
                        {size === 'normal' && 'Normal'}
                        {size === 'large' && 'Large'}
                        {size === 'xlarge' && 'X-Large'}
                      </button>;
                  </div>;
                {/* Color Blindness Support */}
                <div className="space-y-3">;
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Color Vision</h3>;
                <div className=space-y-3">;
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white>Color Vision</h3>;
                  <select;
                    value={settings.colorBlindness}
                    onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                  >;
                    <option value="normal">Normal Vision</option>;
                    <option value="protanopia">Protanopia (Red-Blind)</option>;
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>;
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>;
                  </select>;
                </div>;
                {/* Keyboard Shortcuts Info */}
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">;
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">;
                    <Info className="w-4 h-4 text-cyan-600" />;
                    Keyboard Shortcuts;
                  </h4>;
                  <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">;
                    <div>• <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-600 rounded text-xs">Alt + Tab</kbd> Skip to main content</div>;
                    <div>• <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-600 rounded text-xs">Alt + Shift + Tab</kbd> Skip to navigation</div>;
                    <div>• <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-600 rounded text-xs">Ctrl + Tab</kbd> Skip to footer</div>;
                  </div>;
              {/* Footer */}
              <div className="p-6 border-t border-slate-200 dark:border-slate-700">;
                <button;
                  onClick={() => {setSettings({highContrast: false,largeText: false,reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true,colorBlindness: 'normal',fontSize: 'normal';
                    })}}
                  className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors";
                >;
                  Reset to Defaults;
                </button>;
              </div>;
            </motion.div>;
        )}
:src_backup/components/AccessibilityEnhancer.tsx
:src_backup/components/AccessibilityEnhancer.tsx
      </AnimatePresence>;
    </>;
  )}import React, { useState, useEffect } from 'react' interface AccessibilityEnhancerProps {"";
  children: React.ReactNode} const AccessibilityEnhancer: React.FC < AccessibilityEnhancerProps> = ({ children }) => { const [accessibilitySettings, setAccessibilitySettings] = useState ({ highContrast: false, largeText: false, reducedMotion: false, focusVisible: true })  useEffect ( () => {'';"";
}}
:src_backup/components/AccessibilityEnhancer.tsx
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
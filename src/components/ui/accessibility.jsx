import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { Eye, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut, Settings, Accessibility, X } from 'lucide-react';
import { Button } from "./button";
export function AccessibilityPanel({ enabled = true, className = "", onSettingsChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        highContrast: false,
        largeText: false,
        reducedMotion: false,
        screenReader: false,
        fontSize: 16,
        colorBlindMode: 'normal'
    });
    // Apply accessibility settings to document
    useEffect(() => {
        if (!enabled)
            return;
        const root = document.documentElement;
        // High contrast
        if (settings.highContrast) {
            root.classList.add('high-contrast')}
        else {
            root.classList.remove('high-contrast')}
        // Large text
        if (settings.largeText) {
            root.style.fontSize = '18px'}
        else {
            root.style.fontSize = '16px'}
        // Reduced motion
        if (settings.reducedMotion) {
            root.style.setProperty('--reduced-motion', 'reduce')}
        else {
            root.style.setProperty('--reduced-motion', 'no-preference')}
        // Font size
        root.style.setProperty('--font-size', `${settings.fontSize}px`);
        // Color blind mode
        root.setAttribute('data-color-blind', settings.colorBlindMode);
        // Notify parent component
        onSettingsChange?.(settings)}, [settings, enabled, onSettingsChange]);
    // Load saved settings from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('accessibility-settings');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setSettings(prev => ({ ...prev, ...parsed }))}
            catch {
                // Silently handle parsing errors
    }, []);
    // Save settings to localStorage
    const saveSettings = useCallback((newSettings) => {
        setSettings(newSettings);
        localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))}, []);
    // Toggle settings
    const toggleSetting = useCallback((key, value) => {
        const newSettings = {
  ...settings,
  [key]: value !== null ? value : !settings[key]
};
        saveSettings(newSettings);
    }, [settings, saveSettings]);
    // Reset to defaults
    const resetSettings = useCallback(() => {
        const defaults = {
  highContrast: false,
            largeText: false,
            reducedMotion: false,
            screenReader: false,
            fontSize: 16,
  colorBlindMode: 'normal'
};
        saveSettings(defaults);
    }, [saveSettings]);
    // Font size controls
    const increaseFontSize = useCallback(() => {
        toggleSetting('fontSize', Math.min(settings.fontSize + 2, 24))}, [settings.fontSize, toggleSetting]);
    const decreaseFontSize = useCallback(() => {
        toggleSetting('fontSize', Math.max(settings.fontSize - 2, 12))}, [settings.fontSize, toggleSetting]);
    // Screen reader announcement
    const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);
            setTimeout(() => {
                document.body.removeChild(announcement)}, 1000)}
    }, [settings.screenReader]);
    if (!enabled)
        return null;
    return (<>
      {/* Accessibility Toggle Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className={`fixed top-4 right-4 z-50 p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg transition-all duration-300 ${className}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Accessibility settings">
        <Accessibility className="w-6 h-6"/>
      </motion.button>
      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (<motion.div className="fixed inset-0 z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}/>
            {/* Panel */}
            <motion.div className="absolute top-4 right-4 w-80 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-6 max-h-[calc(100vh-2rem)] overflow-y-auto" initial = {
  { opacity: 0, x: 300,
  scale: 0.95 
}} animate = {
  { opacity: 1, x: 0,
  scale: 1 
}} exit = {
  { opacity: 0, x: 300,
  scale: 0.95 
}} transition = {
  { duration: 0.3,
  ease: "easeOut" 
}}>
=======
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Type, 
  MousePointer, 
  Keyboard,
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';
import { Button } from "./button";

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindness: 'none'
  });
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState([]);
  const panelRef = useRef(null);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    applyAccessibilitySettings();
  }, [settings]);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = () => {
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
    
    if (settings.focusIndicators) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  // Add notification
  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  // Toggle setting
  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    addNotification(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${!settings[key] ? 'enabled' : 'disabled'}`);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (settings.keyboardNavigation) {
        // Tab navigation enhancement
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const firstFocusable = panelRef.current.querySelector('button, input, select');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [isOpen]);

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'audio', label: 'Audio', icon: Volume2 },
    { id: 'navigation', label: 'Navigation', icon: Keyboard }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">High Contrast Mode</h4>
                <p className="text-sm text-gray-600">Increase contrast for better visibility</p>
              </div>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Large Text</h4>
                <p className="text-sm text-gray-600">Increase font size for better readability</p>
              </div>
              <button
                onClick={() => toggleSetting('largeText')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text mode`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Reduced Motion</h4>
                <p className="text-sm text-gray-600">Reduce animations and transitions</p>
              </div>
              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        );

      case 'visual':
        return (
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Color Blindness Support</h4>
              <div className="grid grid-cols-2 gap-2">
                {['none', 'protanopia', 'deuteranopia', 'tritanopia'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSettings(prev => ({ ...prev, colorBlindness: type }))}
                    className={`p-2 rounded-lg border text-sm transition-colors ${
                      settings.colorBlindness === type
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Focus Indicators</h4>
                <p className="text-sm text-gray-600">Show clear focus indicators</p>
              </div>
              <button
                onClick={() => toggleSetting('focusIndicators')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusIndicators ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        );

      case 'audio':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Screen Reader Support</h4>
                <p className="text-sm text-gray-600">Enable enhanced screen reader support</p>
              </div>
              <button
                onClick={() => toggleSetting('screenReader')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium">Screen Reader Tips</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Use Tab to navigate between elements</li>
                    <li>• Press Enter or Space to activate buttons</li>
                    <li>• Use arrow keys to navigate menus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'navigation':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Enhanced Keyboard Navigation</h4>
                <p className="text-sm text-gray-600">Improve keyboard navigation experience</p>
              </div>
              <button
                onClick={() => toggleSetting('keyboardNavigation')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <p className="font-medium">Keyboard Shortcuts</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Tab: Navigate between elements</li>
                    <li>• Shift + Tab: Navigate backwards</li>
                    <li>• Enter/Space: Activate buttons</li>
                    <li>• Escape: Close modals/dropdowns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
        aria-label="Open accessibility settings"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              ref={panelRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Accessibility Settings</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
<<<<<<< HEAD
              {/* Visual Settings */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Visual</h3>
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5 text-zion-cyan"/>
                    <span className="text-zinc-300">High Contrast</span>
                  </div>
                  <Button size="sm" variant={settings.highContrast ? "default" : "outline"} onClick={() => toggleSetting('highContrast')} className={settings.highContrast ? 'bg-zion-cyan text-zion-blue-dark' : ''}>
                    {settings.highContrast ? 'On' : 'Off'}
                  </Button>
                </div>
                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-zion-cyan"/>
                    <span className="text-zinc-300">Large Text</span>
                  </div>
                  <Button size="sm" variant={settings.largeText ? "default" : "outline"} onClick={() => toggleSetting('largeText')} className={settings.largeText ? 'bg-zion-cyan text-zion-blue-dark' : ''}>
                    {settings.largeText ? 'On' : 'Off'}
                  </Button>
                </div>
                {/* Font Size Control */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-zion-cyan"/>
                    <span className="text-zinc-300">Font Size: {settings.fontSize}px</span>
                  </div>
                  <div className="flex items-center gap-2 ml-8">
                    <Button size="sm" variant="outline" onClick={decreaseFontSize} disabled={settings.fontSize <= 12} className="p-1">
                      <ZoomOut className="w-4 h-4"/>
                    </Button>
                    <Button size="sm" variant="outline" onClick={increaseFontSize} disabled={settings.fontSize >= 24} className="p-1">
                      <ZoomIn className="w-4 h-4"/>
                    </Button>
                  </div>
                </div>
                {/* Color Blind Mode */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-zion-cyan"/>
                    <span className="text-zinc-300">Color Blind Mode</span>
                  </div>
                  <select value={settings.colorBlindMode} onChange = {
  (e) => toggleSetting('colorBlindMode',
  e.target.value)
} className="ml-8 px-3 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm focus:border-zion-cyan focus:outline-none">
                    <option value="normal">Normal</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>
              </div>
              {/* Motion Settings */}
              <div className="space-y-4 mt-6">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Motion</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-zion-cyan"/>
                    <span className="text-zinc-300">Reduced Motion</span>
                  </div>
                  <Button size="sm" variant={settings.reducedMotion ? "default" : "outline"} onClick={() => toggleSetting('reducedMotion')} className={settings.reducedMotion ? 'bg-zion-cyan text-zion-blue-dark' : ''}>
                    {settings.reducedMotion ? 'On' : 'Off'}
                  </Button>
                </div>
              </div>
              {/* Audio Settings */}
              <div className="space-y-4 mt-6">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Audio</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {settings.screenReader ? (<Volume2 className="w-5 h-5 text-zion-cyan"/>) : (<VolumeX className="w-5 h-5 text-zinc-400"/>)}
                    <span className="text-zinc-300">Screen Reader</span>
                  </div>
                  <Button size="sm" variant={settings.screenReader ? "default" : "outline"} onClick={() => toggleSetting('screenReader')} className={settings.screenReader ? 'bg-zion-cyan text-zion-blue-dark' : ''}>
                    {settings.screenReader ? 'On' : 'Off'}
                  </Button>
                </div>
              </div>
              {/* Test Announcement */}
              {settings.screenReader && (<div className="mt-4 p-3 bg-zion-blue/20 rounded-lg">
                  <p className="text-zinc-300 text-sm mb-2">Test screen reader announcement:</p>
                  <Button size="sm" onClick={() => announceToScreenReader('This is a test announcement for screen readers')} className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                    Test Announcement
                  </Button>
                </div>)}
              {/* Reset Button */}
              <div className="mt-6 pt-6 border-t border-zion-blue-light/20">
                <Button onClick={resetSettings} variant="outline" className="w-full border-zinc-500 text-zinc-300 hover:bg-zinc-500/20">
                  Reset to Defaults
                </Button>
              </div>
              {/* Help Text */}
              <div className="mt-4 text-xs text-zinc-400 text-center">
                <p>These settings are saved locally and will persist across sessions.</p>
                <p className="mt-1">For more accessibility options, check your browser settings.</p>
=======

              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-96">
                {renderTabContent()}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={() => {
                    setSettings({
                      highContrast: false,
                      largeText: false,
                      reducedMotion: false,
                      screenReader: false,
                      keyboardNavigation: false,
                      focusIndicators: true,
                      colorBlindness: 'none'
                    });
                    addNotification('Settings reset to default', 'info');
                  }}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Reset to Default
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Done
                </button>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
      {/* Screen Reader Only Class */}
      <style dangerouslySetInnerHTML = {
  {
            __html: `
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0,
  0);
            white-space: nowrap;
            border: 0;
}
          .high-contrast {
            --zion-cyan: #00ffff;
            --zion-blue: #0066ff;
            --zion-purple: #9900ff;
            --zion-blue-dark: #000033;
            --zion-blue-light: #3399ff;
            --zion-cyan-light: #33ffff;
            --zion-purple-dark: #6600cc;
            --zion-purple-light: #cc33ff}
          [data-color-blind="protanopia"] {
            filter: url('#protanopia-filter')}
          [data-color-blind="deuteranopia"] {
            filter: url('#deuteranopia-filter')}
          [data-color-blind="tritanopia"] {
            filter: url('#tritanopia-filter')}
          :root {
            --font-size: 16px;
            --reduced-motion: no-preference}
          * {
            font-size: var(--font-size)}
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important}
          }
          [style*="--reduced-motion: reduce"] * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important}
        `
        }}/>
      {/* SVG Filters for Color Blind Modes */}
      <svg style = {
  { position: 'absolute', width: 0,
  height: 0 
}}>
        <defs>
          <filter id="protanopia-filter">
            <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="deuteranopia-filter">
            <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="tritanopia-filter">
            <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
          </filter>
        </defs>
      </svg>
    </>)}
=======

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-60 space-y-2">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className={`p-4 rounded-lg shadow-lg max-w-sm ${
              notification.type === 'info' ? 'bg-blue-500 text-white' :
              notification.type === 'success' ? 'bg-green-500 text-white' :
              'bg-yellow-500 text-white'
            }`}
          >
            <div className="flex items-center space-x-2">
              {notification.type === 'info' && <Info className="w-4 h-4" />}
              {notification.type === 'success' && <Check className="w-4 h-4" />}
              {notification.type === 'warning' && <AlertTriangle className="w-4 h-4" />}
              <span className="text-sm font-medium">{notification.message}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AccessibilityPanel;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

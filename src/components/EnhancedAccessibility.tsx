import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Type, 
  Palette, 
  MousePointer, 
  Keyboard, 
  Monitor, 
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
  Sun,
  Moon,
  Smartphone,
  Headphones,
  Mic,
  MicOff,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  HelpCircle,
  Zap,
  Contrast, 
  ZoomIn, 
  ZoomOut,
  Volume2, 
  VolumeX,
  Hand,
  ArrowLeft,
  ArrowRight,
  Space
} from 'lucide-react';
interface AccessibilitySettings {
  // Visual
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  colorBlindness: string;
  fontSize: number;
  
  // Audio
  screenReader: boolean;
  audioDescriptions: boolean;
  volume: number;
  muteAudio: boolean;
  
  // Navigation
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  skipLinks: boolean;
  
  // Cognitive
  simplifiedLayout: boolean;
  readingGuide: boolean;
  distractionFree: boolean;
}
export default function EnhancedAccessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    colorBlindness: 'none',
    fontSize: 16,
    screenReader: false,
    audioDescriptions: false,
    volume: 50,
    muteAudio: false,
    keyboardNavigation: false,
    focusIndicators: false,
    skipLinks: false,
    simplifiedLayout: false,
    readingGuide: false,
    distractionFree: false
  });
<<<<<<< HEAD
=======

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  const [activeTab, setActiveTab] = useState('visual');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('info');
<<<<<<< HEAD
=======

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setToastMessage(`${key} updated`);
    setToastType('success');
    setShowToast(true);
    
    // Apply setting immediately
    applySetting(key, value);
    
    setTimeout(() => setShowToast(false), 3000);
  }, []);
<<<<<<< HEAD
=======

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  const applySetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const root = document.documentElement;
    
    switch (key) {
      case 'highContrast':
        if (value) {
          root.style.setProperty('--contrast', 'high');
          root.classList.add('high-contrast');
        } else {
          root.style.removeProperty('--contrast');
          root.classList.remove('high-contrast');
        }
        break;
        
      case 'largeText':
        if (value) {
          root.style.setProperty('--font-size', 'large');
          root.classList.add('large-text');
        } else {
          root.style.removeProperty('--font-size');
          root.classList.remove('large-text');
        }
        break;
        
      case 'reducedMotion':
        if (value) {
          root.style.setProperty('--motion', 'reduced');
          root.classList.add('reduced-motion');
        } else {
          root.style.removeProperty('--motion');
          root.classList.remove('reduced-motion');
        }
        break;
        
      case 'fontSize':
        root.style.setProperty('--base-font-size', `${value}px`);
        break;
        
      case 'focusIndicators':
        if (value) {
          root.classList.add('focus-visible');
        } else {
          root.classList.remove('focus-visible');
        }
        break;
    }
  }, []);
  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      colorBlindness: 'none',
      fontSize: 16,
      screenReader: false,
      audioDescriptions: false,
      volume: 50,
      muteAudio: false,
      keyboardNavigation: false,
      focusIndicators: false,
      skipLinks: false,
      simplifiedLayout: false,
      readingGuide: false,
      distractionFree: false
    });
    
    // Reset all applied styles
    const root = document.documentElement;
    root.style.removeProperty('--contrast');
    root.style.removeProperty('--font-size');
    root.style.removeProperty('--motion');
    root.style.removeProperty('--base-font-size');
    root.classList.remove('high-contrast', 'large-text', 'reduced-motion', 'focus-visible');
    
    setToastMessage('Settings reset to default');
    setToastType('info');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);
  const tabs = [
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'audio', label: 'Audio', icon: Headphones },
    { id: 'navigation', label: 'Navigation', icon: MousePointer },
    { id: 'cognitive', label: 'Cognitive', icon: Brain }
  ];
  return (
<>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </button>
      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Accessibility className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Close accessibility settings"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              {/* Tab Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {activeTab === 'visual' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Display Options</h3>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.highContrast}
                            onChange={(e) => updateSetting('highContrast', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                        </label>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.largeText}
                            onChange={(e) => updateSetting('largeText', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                        </label>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.reducedMotion}
                            onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                        </label>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Font Size</h3>
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => updateSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                            className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label="Decrease font size"
                          >
                            <ZoomOut className="w-5 h-5" />
                          </button>
                          <span className="text-lg font-medium text-gray-900 dark:text-white min-w-[3rem] text-center">
                            {settings.fontSize}px
                          </span>
                          <button
                            onClick={() => updateSetting('fontSize', Math.min(32, settings.fontSize + 2))}
                            className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label="Increase font size"
                          >
                            <ZoomIn className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'audio' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Audio Options</h3>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.screenReader}
                            onChange={(e) => updateSetting('screenReader', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Screen Reader</span>
                        </label>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.audioDescriptions}
                            onChange={(e) => updateSetting('audioDescriptions', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Audio Descriptions</span>
                        </label>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Volume Control</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <VolumeX className="w-5 h-5 text-gray-400" />
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={settings.volume}
                              onChange={(e) => updateSetting('volume', parseInt(e.target.value))}
                              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <Volume2 className="w-5 h-5 text-gray-400" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 text-center block">
                            {settings.volume}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'navigation' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation Options</h3>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.keyboardNavigation}
                            onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                        </label>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.focusIndicators}
                            onChange={(e) => updateSetting('focusIndicators', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Focus Indicators</span>
                        </label>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.skipLinks}
                            onChange={(e) => updateSetting('skipLinks', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Skip Links</span>
                        </label>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Keyboard Shortcuts</h3>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex justify-between">
                            <span>Open accessibility panel:</span>
                            <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Alt + A</kbd>
                          </div>
                          <div className="flex justify-between">
                            <span>Increase font size:</span>
                            <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Ctrl + +</kbd>
                          </div>
                          <div className="flex justify-between">
                            <span>Decrease font size:</span>
                            <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Ctrl + -</kbd>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'cognitive' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cognitive Support</h3>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.simplifiedLayout}
                            onChange={(e) => updateSetting('simplifiedLayout', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Simplified Layout</span>
                        </label>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.readingGuide}
                            onChange={(e) => updateSetting('readingGuide', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Reading Guide</span>
                        </label>
                        
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={settings.distractionFree}
                            onChange={(e) => updateSetting('distractionFree', e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Distraction Free Mode</span>
                        </label>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Additional Features</h3>
                        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                          <p>• Clear, simple language</p>
                          <p>• Consistent navigation</p>
                          <p>• Predictable behavior</p>
                          <p>• Error prevention</p>
                          <p>• Help and documentation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={resetSettings}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Default</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Apply Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-6 right-6 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
          toastType === 'success' ? 'bg-green-500 text-white' :
          toastType === 'error' ? 'bg-red-500 text-white' :
          'bg-blue-500 text-white'
        }`}>
          <div className="flex items-center space-x-2">
            {toastType === 'success' && <Check className="w-5 h-5" />}
            {toastType === 'error' && <AlertTriangle className="w-5 h-5" />}
            {toastType === 'info' && <Info className="w-5 h-5" />}
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
</>
  );
}
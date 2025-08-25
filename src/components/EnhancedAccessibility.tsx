import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
<<<<<<< HEAD
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Settings, 
  X, 
  Plus, 
  Minus, 
  RotateCcw,
  Sun,
  Moon,
  Monitor,
  Keyboard,
  Headphones,
  Accessibility,
  Highlighter,
  Type,
  Palette,
  Navigation,
  MousePointer,
  Mic,
  MicOff
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  reducedMotion: boolean;
  soundEffects: boolean;
  autoPlayMedia: boolean;
  voiceCommands: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  theme: 'light' | 'dark' | 'auto';
}

const EnhancedAccessibility: React.FC = () => {
=======
  EyeIcon, 
  EyeSlashIcon, 
  SpeakerWaveIcon, 
  SpeakerXMarkIcon,
  SunIcon,
  MoonIcon,
  AdjustmentsHorizontalIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  severity: 'low' | 'medium' | 'high';
  fix?: string;
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showScanner?: boolean;
  className?: string;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  position = 'bottom-right',
  showScanner = true,
  className = ''
}) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'navigation'>('general');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
<<<<<<< HEAD
    fontSize: 100,
    colorBlindness: 'none',
    reducedMotion: false,
    soundEffects: true,
    autoPlayMedia: false,
    voiceCommands: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    theme: 'auto'
  });
  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [isListening, setIsListening] = useState(false);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--accent-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--border-color', '#000000');
    } else {
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--border-color');
    }

    // Font size
    root.style.fontSize = `${settings.fontSize}%`;

    // Color blindness
    if (settings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.filter = filters[settings.colorBlindness];
    } else {
      root.style.filter = 'none';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--motion-reduce', '1');
    } else {
      root.style.removeProperty('--motion-reduce');
    }

    // Theme
    if (settings.theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (settings.theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-visible', '2px solid #10B981');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }

    // Calculate accessibility score
    calculateAccessibilityScore();
  }, [settings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'a':
            e.preventDefault();
            setIsOpen(!isOpen);
            break;
          case 'h':
            e.preventDefault();
            setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
            break;
          case 'f':
            e.preventDefault();
            setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }));
            break;
          case 'r':
            e.preventDefault();
            resetSettings();
            break;
          case 't':
            e.preventDefault();
            setSettings(prev => ({ 
              ...prev, 
              theme: prev.theme === 'light' ? 'dark' : prev.theme === 'dark' ? 'auto' : 'light' 
            }));
            break;
          case 's':
            e.preventDefault();
            setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
            break;
          case 'k':
            e.preventDefault();
            showKeyboardShortcuts();
            break;
        }
      }
      
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Voice commands
  useEffect(() => {
    if (settings.voiceCommands && isListening) {
      startVoiceRecognition();
    }
  }, [settings.voiceCommands, isListening]);

  const calculateAccessibilityScore = useCallback(() => {
    let score = 100;
    
    if (!settings.highContrast) score -= 5;
    if (settings.fontSize < 100) score -= 3;
    if (settings.colorBlindness !== 'none') score += 5; // Bonus for color blindness support
    if (settings.reducedMotion) score += 3; // Bonus for motion sensitivity support
    if (!settings.soundEffects) score -= 2;
    if (settings.autoPlayMedia) score -= 5;
    if (settings.voiceCommands) score += 5; // Bonus for voice control
    if (settings.screenReader) score += 5; // Bonus for screen reader support
    if (settings.keyboardNavigation) score += 5; // Bonus for keyboard navigation
    if (!settings.focusIndicator) score -= 5;
    
    setAccessibilityScore(Math.max(0, Math.min(100, score)));
  }, [settings]);

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(transcript);
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      alert('Speech recognition not supported in this browser');
      setIsListening(false);
    }
  };

  const handleVoiceCommand = (command: string) => {
    if (command.includes('open accessibility') || command.includes('open panel')) {
      setIsOpen(true);
    } else if (command.includes('close accessibility') || command.includes('close panel')) {
      setIsOpen(false);
    } else if (command.includes('high contrast')) {
      setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
    } else if (command.includes('normal contrast')) {
      setSettings(prev => ({ ...prev, highContrast: false }));
    } else if (command.includes('increase font') || command.includes('bigger font')) {
      setSettings(prev => ({ ...prev, fontSize: Math.min(200, prev.fontSize + 10) }));
    } else if (command.includes('decrease font') || command.includes('smaller font')) {
      setSettings(prev => ({ ...prev, fontSize: Math.max(50, prev.fontSize - 10) }));
    } else if (command.includes('reset font')) {
      setSettings(prev => ({ ...prev, fontSize: 100 }));
    } else if (command.includes('dark theme')) {
      setSettings(prev => ({ ...prev, theme: 'dark' }));
    } else if (command.includes('light theme')) {
      setSettings(prev => ({ ...prev, theme: 'light' }));
    } else if (command.includes('auto theme')) {
      setSettings(prev => ({ ...prev, theme: 'auto' }));
    }
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      fontSize: 100,
      colorBlindness: 'none',
      reducedMotion: false,
      soundEffects: true,
      autoPlayMedia: false,
      voiceCommands: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      theme: 'auto'
    });
  };

  const showKeyboardShortcuts = () => {
    alert(`
Keyboard Shortcuts:
Alt + A: Toggle accessibility panel
Alt + H: Toggle high contrast
Alt + F: Toggle focus indicator
Alt + R: Reset all settings
Alt + T: Toggle theme
Alt + S: Toggle screen reader mode
Alt + K: Show keyboard shortcuts
Escape: Close panels
    `);
  };

  const toggleVoiceCommands = () => {
    if (settings.voiceCommands) {
      setIsListening(!isListening);
    } else {
      setSettings(prev => ({ ...prev, voiceCommands: true }));
      setIsListening(true);
=======
    reducedMotion: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'medium'
  });
  
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<'settings' | 'scanner' | 'help'>('settings');

  // Apply accessibility settings to document
  useEffect(() => {
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
    
    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Font size
    root.style.setProperty('--font-size-base', {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'xlarge': '20px'
    }[settings.fontSize]);
    
    // Color blindness simulation
    root.style.setProperty('--color-blindness', settings.colorBlindness);
    
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Load saved settings on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }
      
      // Skip to navigation
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const nav = document.querySelector('nav') || document.querySelector('header');
        if (nav) {
          (nav as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus indicator
  useEffect(() => {
    if (settings.focusIndicator) {
      document.body.classList.add('show-focus-indicator');
    } else {
      document.body.classList.remove('show-focus-indicator');
    }
  }, [settings.focusIndicator]);

  // Accessibility scanner
  const runAccessibilityScan = useCallback(async () => {
    setIsScanning(true);
    setIssues([]);
    
    // Simulate scanning delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newIssues: AccessibilityIssue[] = [];
    
    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          id: `img-${index}`,
          type: 'error',
          message: 'Image missing alt text or aria-label',
          element: img.tagName.toLowerCase(),
          severity: 'medium',
          fix: 'Add alt text or aria-label attribute'
        });
      }
    });
    
    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        newIssues.push({
          id: `heading-${index}`,
          type: 'warning',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading.tagName.toLowerCase(),
          severity: 'low',
          fix: 'Ensure proper heading hierarchy'
        });
      }
      previousLevel = level;
    });
    
    // Check for form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control, index) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');
      
      if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
        newIssues.push({
          id: `form-${index}`,
          type: 'error',
          message: 'Form control missing label or aria-label',
          element: control.tagName.toLowerCase(),
          severity: 'high',
          fix: 'Add label element or aria-label attribute'
        });
      }
    });
    
    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor || color === 'transparent') {
        newIssues.push({
          id: `contrast-${index}`,
          type: 'warning',
          message: 'Potential color contrast issue',
          element: element.tagName.toLowerCase(),
          severity: 'medium',
          fix: 'Ensure sufficient color contrast ratio'
        });
      }
    });
    
    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Toggle setting
  const toggleSetting = (key: keyof AccessibilitySettings, value?: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value !== undefined ? value : !prev[key]
    }));
  };

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
<<<<<<< HEAD
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
=======
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
<<<<<<< HEAD
            className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Accessibility className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Accessibility Settings</h2>
                      <p className="text-green-100">Customize your experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{accessibilityScore}</div>
                      <div className="text-sm text-green-100">Accessibility Score</div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-green-200 transition-colors"
                      aria-label="Close accessibility panel"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {[
                  { id: 'general', label: 'General', icon: Settings },
                  { id: 'visual', label: 'Visual', icon: Eye },
                  { id: 'audio', label: 'Audio', icon: Volume2 },
                  { id: 'navigation', label: 'Navigation', icon: Navigation }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {/* General Tab */}
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Theme & Display</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Theme</label>
                          <select
                            value={settings.theme}
                            onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value as any }))}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="auto">Auto (System)</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Font Size</label>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.max(50, prev.fontSize - 10) }))}
                              className="p-2 bg-gray-100 dark:bg-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-500"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="min-w-[4rem] text-center font-medium">{settings.fontSize}%</span>
                            <button
                              onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.min(200, prev.fontSize + 10) }))}
                              className="p-2 bg-gray-100 dark:bg-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-500"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button
                          onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                          className={`p-3 rounded-lg border transition-colors ${
                            settings.highContrast
                              ? 'bg-green-100 border-green-500 text-green-700'
                              : 'bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                          }`}
                        >
                          <Highlighter className="w-6 h-6 mx-auto mb-2" />
                          High Contrast
                        </button>
                        <button
                          onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                          className={`p-3 rounded-lg border transition-colors ${
                            settings.reducedMotion
                              ? 'bg-green-100 border-green-500 text-green-700'
                              : 'bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                          }`}
                        >
                          <MousePointer className="w-6 h-6 mx-auto mb-2" />
                          Reduced Motion
                        </button>
                        <button
                          onClick={() => setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }))}
                          className={`p-3 rounded-lg border transition-colors ${
                            settings.focusIndicator
                              ? 'bg-green-100 border-green-500 text-green-700'
                              : 'bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                          }`}
                        >
                          <Keyboard className="w-6 h-6 mx-auto mb-2" />
                          Focus Indicator
                        </button>
                        <button
                          onClick={resetSettings}
                          className="p-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                        >
                          <RotateCcw className="w-6 h-6 mx-auto mb-2" />
                          Reset All
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Tab */}
                {activeTab === 'visual' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Visual Enhancements</h3>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.highContrast}
                            onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>High Contrast Mode</span>
                        </label>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Color Blindness Support</label>
                          <select
                            value={settings.colorBlindness}
                            onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="none">No Color Blindness</option>
                            <option value="protanopia">Protanopia (Red-Blind)</option>
                            <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                            <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                          </select>
                        </div>

                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.reducedMotion}
                            onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Reduced Motion</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Audio Tab */}
                {activeTab === 'audio' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Audio Controls</h3>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.soundEffects}
                            onChange={(e) => setSettings(prev => ({ ...prev, soundEffects: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Sound Effects</span>
                        </label>
                        
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.autoPlayMedia}
                            onChange={(e) => setSettings(prev => ({ ...prev, autoPlayMedia: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Auto-play Media</span>
                        </label>

                        <div>
                          <label className="block text-sm font-medium mb-2">Voice Commands</label>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={toggleVoiceCommands}
                              className={`px-4 py-2 rounded-lg border transition-colors ${
                                isListening
                                  ? 'bg-red-100 border-red-500 text-red-700'
                                  : settings.voiceCommands
                                  ? 'bg-green-100 border-green-500 text-green-700'
                                  : 'bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                              }`}
                            >
                              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                              {isListening ? 'Listening...' : settings.voiceCommands ? 'Voice Active' : 'Enable Voice'}
                            </button>
                            {isListening && (
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Try saying: "open accessibility", "high contrast", "increase font"
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Tab */}
                {activeTab === 'navigation' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Navigation Support</h3>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.screenReader}
                            onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Screen Reader Mode</span>
                        </label>
                        
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.keyboardNavigation}
                            onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Enhanced Keyboard Navigation</span>
                        </label>

                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.focusIndicator}
                            onChange={(e) => setSettings(prev => ({ ...prev, focusIndicator: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Focus Indicator</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Keyboard Shortcuts</h3>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + A</kbd> Toggle panel</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + H</kbd> High contrast</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + F</kbd> Focus indicator</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + R</kbd> Reset settings</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + T</kbd> Toggle theme</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Escape</kbd> Close panels</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
=======
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed ${getPositionClasses()} z-50 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-hidden`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close accessibility panel"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {[
                { id: 'settings', label: 'Settings', icon: AdjustmentsHorizontalIcon },
                { id: 'scanner', label: 'Scanner', icon: InformationCircleIcon },
                { id: 'help', label: 'Help', icon: InformationCircleIcon }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-120px)]">
              {activeTab === 'settings' && (
                <div className="space-y-4">
                  {/* Visual Settings */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Visual Settings
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={() => toggleSetting('highContrast')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          High Contrast Mode
                        </span>
                      </label>
                      
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.largeText}
                          onChange={() => toggleSetting('largeText')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Large Text
                        </span>
                      </label>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Font Size
                        </label>
                        <select
                          value={settings.fontSize}
                          onChange={(e) => toggleSetting('fontSize', e.target.value)}
                          className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xlarge">Extra Large</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Color Blindness Support
                        </label>
                        <select
                          value={settings.colorBlindness}
                          onChange={(e) => toggleSetting('colorBlindness', e.target.value)}
                          className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                          <option value="none">None</option>
                          <option value="protanopia">Protanopia (Red-Blind)</option>
                          <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                          <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Motion Settings */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Motion & Navigation
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={() => toggleSetting('reducedMotion')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Reduced Motion
                        </span>
                      </label>
                      
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={() => toggleSetting('keyboardNavigation')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Enhanced Keyboard Navigation
                        </span>
                      </label>
                      
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.focusIndicator}
                          onChange={() => toggleSetting('focusIndicator')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Enhanced Focus Indicators
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Screen Reader */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Screen Reader
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={settings.screenReader}
                          onChange={() => toggleSetting('screenReader')}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Enhanced Screen Reader Support
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'scanner' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      Accessibility Scanner
                    </h3>
                    <button
                      onClick={runAccessibilityScan}
                      disabled={isScanning}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-sm rounded-md transition-colors"
                    >
                      {isScanning ? 'Scanning...' : 'Run Scan'}
                    </button>
                  </div>
                  
                  {issues.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Found {issues.length} issue{issues.length !== 1 ? 's' : ''}
                      </h4>
                      {issues.map(issue => (
                        <div
                          key={issue.id}
                          className={`p-3 rounded-md border-l-4 ${
                            issue.type === 'error'
                              ? 'bg-red-50 border-red-400 dark:bg-red-900/20 dark:border-red-600'
                              : issue.type === 'warning'
                              ? 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-600'
                              : 'bg-blue-50 border-blue-400 dark:bg-blue-900/20 dark:border-blue-600'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {issue.type === 'error' ? (
                              <ExclamationTriangleIcon className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            ) : issue.type === 'warning' ? (
                              <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <InformationCircleIcon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm text-gray-900 dark:text-white font-medium">
                                {issue.message}
                              </p>
                              {issue.element && (
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                  Element: {issue.element}
                                </p>
                              )}
                              {issue.fix && (
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                  Fix: {issue.fix}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {issues.length === 0 && !isScanning && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <InformationCircleIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-sm">Click "Run Scan" to check for accessibility issues</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'help' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Accessibility Help
                  </h3>
                  
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <h4 className="font-medium mb-2">Keyboard Shortcuts</h4>
                      <ul className="space-y-1 text-xs">
                        <li>• <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Tab</kbd> - Navigate through interactive elements</li>
                        <li>• <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Alt + Tab</kbd> - Skip to main content</li>
                        <li>• <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Shift + Alt + Tab</kbd> - Skip to navigation</li>
                        <li>• <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Enter</kbd> or <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Space</kbd> - Activate buttons and links</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Screen Reader Support</h4>
                      <p className="text-xs">
                        This website is optimized for screen readers with proper ARIA labels, 
                        semantic HTML, and keyboard navigation support.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Need More Help?</h4>
                      <p className="text-xs">
                        Contact our support team for additional accessibility assistance.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* Color Blindness Filters */}
      <svg style={{ position: 'absolute', left: '-9999px', width: '0', height: '0' }}>
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0 0, 0.433, 0.567, 0, 0 0, 0.475, 0.525, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
        </defs>
      </svg>
=======
      {/* Global CSS for accessibility features */}
      <style>{`
        /* High contrast mode */
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --border-color: #000000;
          --accent-color: #0000ff;
        }
        
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }
        
        /* Reduced motion */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Large text */
        .large-text {
          font-size: 1.2em;
        }
        
        /* Focus indicators */
        .show-focus-indicator *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        /* Color blindness support */
        [style*="--color-blindness: protanopia"] {
          filter: url('#protanopia');
        }
        
        [style*="--color-blindness: deuteranopia"] {
          filter: url('#deuteranopia');
        }
        
        [style*="--color-blindness: tritanopia"] {
          filter: url('#tritanopia');
        }
        
        /* Font size variables */
        :root {
          --font-size-base: 16px;
        }
        
        body {
          font-size: var(--font-size-base);
        }
      `}</style>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
    </>
  );
};

export default EnhancedAccessibility;
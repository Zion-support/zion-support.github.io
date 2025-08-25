<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React, { useState, useEffect, useCallback } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
import React, { useState, useEffect, useCallback } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
import { 
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React, { useState, useEffect, useRef } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
import { 
  Accessibility, 
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bec0
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  Volume2, 
  VolumeX, 
<<<<<<< HEAD
<<<<<<< HEAD
  Type, 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  Contrast, 
  MousePointer, 
  Keyboard,
=======
=======
>>>>>>> origin/main
  Palette, 
  MousePointer, 
  Keyboard, 
  Monitor, 
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bec0
=======
>>>>>>> origin/main
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
<<<<<<< HEAD
<<<<<<< HEAD
  Accessibility
=======
=======
>>>>>>> origin/main
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
  Zap
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bec0
=======
>>>>>>> origin/main
=======
  Contrast, 
  ZoomIn, 
  ZoomOut,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Tablet
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Sun, 
  Moon,
  Accessibility,
  Keyboard,
  MousePointer,
  BookOpen
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
=======
  MousePointer, 
  Keyboard,
  Sun,
  Moon,
  Monitor,
  Settings,
  X,
  Plus,
  Minus,
  RotateCcw
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
} from 'lucide-react';

interface AccessibilitySettings {
  // Visual
  highContrast: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
  largeText: boolean;
=======
  fontSize: number;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
  reducedMotion: boolean;
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  soundEffects: boolean;
  autoPlayMedia: boolean;
  voiceCommands: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
<<<<<<< HEAD
  theme: 'light' | 'dark' | 'auto';
}

const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'navigation'>('general');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
=======
<<<<<<< HEAD
  colorBlindSupport: boolean;
}

<<<<<<< HEAD
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
<<<<<<< HEAD
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
<<<<<<< HEAD
<<<<<<< HEAD
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  severity: 'low' | 'medium' | 'high';
  fix?: string;
=======
  dyslexia: boolean;
  highContrastText: boolean;
  largeCursor: boolean;
  soundEffects: boolean;
  autoPlay: boolean;
  showFocusRings: boolean;
  showKeyboardShortcuts: boolean;
  showScreenReaderHints: boolean;
  showAccessibilityInfo: boolean;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-3b7b
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
=======
  fontSize: number;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  deviceMode: 'desktop' | 'tablet' | 'mobile';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
  theme: 'light' | 'dark' | 'auto';
>>>>>>> origin/main
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
<<<<<<< HEAD
  showScanner?: boolean;
  className?: string;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  position = 'bottom-right',
  showScanner = true,
  className = ''
=======
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ 
  position = 'bottom-right' 
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
  theme: 'light' | 'dark' | 'auto';
}

const EnhancedAccessibility: React.FC<{ position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' }> = ({ 
  position = 'bottom-right' 
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
}) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
=======
interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ 
  position = 'bottom-right' 
}) => {
>>>>>>> origin/main
=======
  soundEnabled: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

export const EnhancedAccessibility: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    fontSize: 100,
    colorBlindness: 'none',
=======
    largeText: false,
>>>>>>> origin/main
=======
    largeText: false,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    fontSize: 100,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
    reducedMotion: false,
<<<<<<< HEAD
    soundEffects: true,
    autoPlayMedia: false,
    voiceCommands: false,
    screenReader: false,
    keyboardNavigation: false,
<<<<<<< HEAD
    focusIndicator: true,
    theme: 'auto'
  });
  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [isListening, setIsListening] = useState(false);

  // Apply accessibility settings to the document
  useEffect(() => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    focusIndicator: true,
    colorBlindSupport: false,
=======
    colorBlindness: 'none',
<<<<<<< HEAD
    dyslexia: false,
    highContrastText: false,
    largeCursor: false,
    soundEffects: false,
    autoPlay: false,
    showFocusRings: true,
    showKeyboardShortcuts: false,
    showScreenReaderHints: false,
    showAccessibilityInfo: false
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-3b7b
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
=======
    focusIndicator: true,
    theme: 'auto'
>>>>>>> origin/main
  });
  const [activeTab, setActiveTab] = useState<'quick' | 'advanced' | 'help'>('quick');
  const [announcement, setAnnouncement] = useState<string>('');
  const [isAnnouncing, setIsAnnouncing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  useEffect(() => {
=======
    theme: 'auto'
  });

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
<<<<<<< HEAD
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
=======
      root.classList.add('high-contrast');
<<<<<<< HEAD
      root.style.setProperty('--contrast-ratio', '4.5');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-ratio');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
      root.style.setProperty('--font-size-scale', '1.25');
    } else {
      root.classList.remove('large-text');
      root.style.removeProperty('--font-size-scale');
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }

    // Reduced motion
    if (settings.reducedMotion) {
<<<<<<< HEAD
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
=======
=======
      root.style.setProperty('--contrast-filter', 'contrast(1.5) brightness(1.2)');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-filter');
    }
    
    // Font size
    root.style.setProperty('--font-size-multiplier', `${newSettings.fontSize / 100}`);
    
    // Reduced motion
    if (newSettings.reducedMotion) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }
<<<<<<< HEAD

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
      root.style.setProperty('--focus-outline', '3px solid #3b82f6');
    } else {
      root.classList.remove('focus-visible');
      root.style.removeProperty('--focus-outline');
    }

    // Color blind support
    if (settings.colorBlindSupport) {
      root.classList.add('color-blind-support');
      root.style.setProperty('--color-blind-filter', 'protanopia');
    } else {
      root.classList.remove('color-blind-support');
      root.style.removeProperty('--color-blind-filter');
    }

    // Announce changes to screen readers
    if (settings.screenReader) {
      announceChange('Accessibility settings updated');
    }
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation
          e.preventDefault();
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
          const nextIndex = e.shiftKey ? (currentIndex - 1 + focusableElements.length) % focusableElements.length : (currentIndex + 1) % focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
        case 'Escape':
          if (isOpen) {
            setIsOpen(false);
            setIsExpanded(false);
          }
          break;
        case 'h':
        case 'H':
          if (e.ctrlKey) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
          break;
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
<<<<<<< HEAD
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

=======
  }, [settings.keyboardNavigation, isOpen]);

  // Screen reader announcements
  const announceChange = (message: string) => {
    if (!settings.screenReader) return;
    
    setAnnouncement(message);
    setIsAnnouncing(true);
    
    setTimeout(() => {
      setIsAnnouncing(false);
      setAnnouncement('');
    }, 3000);
  };

  // Toggle setting with announcement
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    
    const settingNames = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      screenReader: 'Screen reader support',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicator: 'Focus indicator',
      colorBlindSupport: 'Color blind support'
    };
    
    announceChange(`${settingNames[key]} ${newSettings[key] ? 'enabled' : 'disabled'}`);
  };

  // Quick actions
  const quickActions = [
    {
      icon: Contrast,
      label: 'High Contrast',
      description: 'Increase color contrast',
      action: () => toggleSetting('highContrast'),
      active: settings.highContrast
    },
    {
      icon: Type,
      label: 'Large Text',
      description: 'Increase text size',
      action: () => toggleSetting('largeText'),
      active: settings.largeText
    },
    {
      icon: MousePointer,
      label: 'Focus Indicator',
      description: 'Show focus outlines',
      action: () => toggleSetting('focusIndicator'),
      active: settings.focusIndicator
    },
    {
      icon: Volume2,
      label: 'Screen Reader',
      description: 'Enable announcements',
      action: () => toggleSetting('screenReader'),
      active: settings.screenReader
    }
  ];
=======
    
    // Color blindness
    if (newSettings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.setProperty('--color-filter', filters[newSettings.colorBlindness]);
    } else {
      root.style.removeProperty('--color-filter');
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('show-focus');
    } else {
      root.classList.remove('show-focus');
    }
    
    // Theme
    if (newSettings.theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (newSettings.theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const savedSettings = JSON.parse(saved);
        setSettings(savedSettings);
        applySettings(savedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Reset to defaults
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 100,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none',
      theme: 'auto'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  }, [applySettings]);

  // Increase/decrease font size
  const adjustFontSize = useCallback((direction: 'increase' | 'decrease') => {
    const newSize = direction === 'increase' 
      ? Math.min(settings.fontSize + 10, 200)
      : Math.max(settings.fontSize - 10, 80);
    updateSetting('fontSize', newSize);
  }, [settings.fontSize, updateSetting]);

  // Toggle high contrast
  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast', !settings.highContrast);
  }, [settings.highContrast, updateSetting]);

  // Toggle reduced motion
  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  }, [settings.reducedMotion, updateSetting]);

  // Toggle screen reader mode
  const toggleScreenReader = useCallback(() => {
    updateSetting('screenReader', !settings.screenReader);
  }, [settings.screenReader, updateSetting]);

  // Toggle keyboard navigation
  const toggleKeyboardNavigation = useCallback(() => {
    updateSetting('keyboardNavigation', !settings.keyboardNavigation);
  }, [settings.keyboardNavigation, updateSetting]);

  // Toggle focus indicator
  const toggleFocusIndicator = useCallback(() => {
    updateSetting('focusIndicator', !settings.focusIndicator);
  }, [settings.focusIndicator, updateSetting]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to open accessibility panel
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Ctrl/Cmd + Plus to increase font size
      if ((event.ctrlKey || event.metaKey) && event.key === '=') {
        event.preventDefault();
        adjustFontSize('increase');
      }
      
      // Ctrl/Cmd + Minus to decrease font size
      if ((event.ctrlKey || event.metaKey) && event.key === '-') {
        event.preventDefault();
        adjustFontSize('decrease');
      }
      
      // Ctrl/Cmd + 0 to reset font size
      if ((event.ctrlKey || event.metaKey) && event.key === '0') {
        event.preventDefault();
        updateSetting('fontSize', 100);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, adjustFontSize, updateSetting]);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87

<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
=======
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
=======
    fontSize: 16,
    colorBlindMode: 'none',
    deviceMode: 'desktop'
  });

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
      root.classList.add('high-contrast');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--accent-color');
    }
<<<<<<< HEAD
    
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

=======

    // Large text mode
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Color blind modes
    const colorBlindFilters = {
      none: 'none',
      protanopia: 'url(#protanopia)',
      deuteranopia: 'url(#deuteranopia)',
      tritanopia: 'url(#tritanopia)'
    };
    root.style.filter = colorBlindFilters[newSettings.colorBlindMode];

    // Device mode simulation
    if (newSettings.deviceMode !== 'desktop') {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        const width = newSettings.deviceMode === 'mobile' ? '375' : '768';
        viewport.setAttribute('content', `width=${width}, initial-scale=1`);
      }
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/main
  fontSize: number; // 50% to 200%
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  reducedMotion: boolean;
  darkMode: 'auto' | 'light' | 'dark';
  
  // Audio
  soundEffects: boolean;
  autoPlayMedia: boolean;
  voiceCommands: boolean;
  
  // Navigation
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  
  // Advanced
  dyslexia: boolean;
  lineSpacing: number; // 1.0 to 2.0
  wordSpacing: number; // 0.5 to 2.0
  letterSpacing: number; // -0.5 to 2.0
}

interface VoiceCommand {
  command: string;
  action: string;
  description: string;
}

const EnhancedAccessibility: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'navigation'>('general');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 100,
    colorBlindness: 'none',
    reducedMotion: false,
    darkMode: 'auto',
    soundEffects: true,
    autoPlayMedia: true,
    voiceCommands: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    dyslexia: false,
    lineSpacing: 1.5,
    wordSpacing: 1.0,
    letterSpacing: 0.0
  });
  
  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  // Voice commands
  const voiceCommands: VoiceCommand[] = [
    { command: 'open accessibility', action: 'open', description: 'Open accessibility panel' },
    { command: 'close accessibility', action: 'close', description: 'Close accessibility panel' },
    { command: 'high contrast', action: 'highContrast', description: 'Toggle high contrast mode' },
    { command: 'normal contrast', action: 'normalContrast', description: 'Disable high contrast mode' },
    { command: 'increase font', action: 'increaseFont', description: 'Increase font size' },
    { command: 'decrease font', action: 'decreaseFont', description: 'Decrease font size' },
    { command: 'reset font', action: 'resetFont', description: 'Reset font size to default' },
    { command: 'dark theme', action: 'darkTheme', description: 'Switch to dark theme' },
    { command: 'light theme', action: 'lightTheme', description: 'Switch to light theme' },
    { command: 'auto theme', action: 'autoTheme', description: 'Switch to auto theme' },
    { command: 'screen reader', action: 'screenReader', description: 'Toggle screen reader mode' },
    { command: 'keyboard navigation', action: 'keyboardNav', description: 'Toggle keyboard navigation' },
    { command: 'focus indicator', action: 'focusIndicator', description: 'Toggle focus indicator' },
    { command: 'reduced motion', action: 'reducedMotion', description: 'Toggle reduced motion' },
    { command: 'help', action: 'help', description: 'Show keyboard shortcuts' }
  ];
=======
      const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (event.shiftKey) {
            if (currentIndex <= 0) {
              event.preventDefault();
              (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
            }
          } else {
            if (currentIndex >= focusableElements.length - 1) {
              event.preventDefault();
              (focusableElements[0] as HTMLElement).focus();
            }
          }
          break;
        case 'Escape':
          // Close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;
        case 'Enter':
        case ' ':
          // Activate focused elements
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
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
  }, [settings.screenReader]);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    
    // Announce changes to screen reader
    const settingNames = {
      highContrast: 'High contrast mode',
      largeText: 'Large text mode',
      reducedMotion: 'Reduced motion mode',
      screenReader: 'Screen reader mode',
      keyboardNavigation: 'Keyboard navigation mode',
      fontSize: 'Font size',
      colorBlindMode: 'Color blind mode',
      deviceMode: 'Device mode'
    };
    
    announceToScreenReader(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`);
  }, [settings, announceToScreenReader]);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(command);
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      setRecognition(recognition);
    }
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    applyAccessibilitySettings();
    calculateAccessibilityScore();
  }, [settings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        switch (event.key.toLowerCase()) {
          case 'a':
            event.preventDefault();
            setIsVisible(!isVisible);
            break;
          case 'h':
            event.preventDefault();
            setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
            break;
          case 'f':
            event.preventDefault();
            setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }));
            break;
          case 'r':
            event.preventDefault();
            resetAllSettings();
            break;
          case 't':
            event.preventDefault();
            setSettings(prev => ({ 
              ...prev, 
              darkMode: prev.darkMode === 'light' ? 'dark' : 'light' 
            }));
            break;
          case 's':
            event.preventDefault();
            setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
            break;
          case 'k':
            event.preventDefault();
            setShowKeyboardShortcuts(!showKeyboardShortcuts);
            break;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bec0
        }
      }
      
      if (event.key === 'Escape') {
        setIsVisible(false);
        setShowKeyboardShortcuts(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  // Get position classes
>>>>>>> origin/main
  const getPositionClasses = () => {
    switch (position) {
<<<<<<< HEAD
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
=======
>>>>>>> origin/main
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  };

  return (
    <>
<<<<<<< HEAD
      {/* Accessibility Toggle Button */}
      <motion.button
=======
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Accessibility Button */}
      <motion.button
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
<<<<<<< HEAD
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
=======
=======
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
=======
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50`}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
=======
      {/* Screen Reader Announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        style={{ 
          position: 'absolute', 
          left: '-10000px', 
          width: '1px', 
          height: '1px', 
          overflow: 'hidden' 
        }}
>>>>>>> origin/main
      >
<<<<<<< HEAD
        {announcement}
      </div>
=======
        <Eye className="w-6 h-6" />
      </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
    soundEnabled: true,
    focusIndicator: true,
    screenReader: false
  });
  
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Enhanced focus management
  useEffect(() => {
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target !== currentFocus) {
        setFocusHistory(prev => [...prev.slice(-4), target]);
        setCurrentFocus(target);
        
        // Announce focus changes for screen readers
        if (settings.screenReader) {
          announceFocus(target);
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Enhanced keyboard navigation
      if (event.key === 'Tab') {
        // Track tab navigation
        document.body.classList.add('keyboard-navigation');
      }
      
      // Escape key to close accessibility panel
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
      
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, currentFocus, settings.screenReader]);

  // Announce focus changes for screen readers
  const announceFocus = (element: HTMLElement) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    
    const text = element.getAttribute('aria-label') || 
                 element.textContent || 
                 element.tagName.toLowerCase();
    
    announcement.textContent = `Focused on ${text}`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Toggle setting
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Change font size
  const changeFontSize = (size: 'small' | 'medium' | 'large') => {
    setSettings(prev => ({
      ...prev,
      fontSize: size
    }));
  };

  // Reset to default settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 'medium',
      reducedMotion: false,
      soundEnabled: true,
      focusIndicator: true,
      screenReader: false
    };
    setSettings(defaultSettings);
  };

  // Enhanced keyboard navigation for the panel
  const handlePanelKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Accessibility className="w-6 h-6" />
      </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
=======
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      case 'bottom-left':
        return 'bottom-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50`}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        title="Accessibility Settings (Ctrl+Shift+A)"
      >
        <Settings className="w-6 h-6" />
      </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87

<<<<<<< HEAD
      {/* Accessibility Panel */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <AnimatePresence>
        {isOpen && (
          <motion.div
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
<<<<<<< HEAD
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
=======
=======
      {/* Main Accessibility Button */}
      <div className={`fixed ${getPositionClasses()} z-50`}>
        <motion.button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Accessibility controls"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>

        {/* Accessibility Panel */}
        <AnimatePresence>
          {isOpen && (
>>>>>>> origin/main
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute bottom-full right-0 mb-2 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              role="dialog"
              aria-label="Accessibility Settings"
              aria-modal="true"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Accessibility className="w-5 h-5" />
                    Accessibility
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-blue-100 text-sm mt-1">
                  Customize your experience
                </p>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {[
<<<<<<< HEAD
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
=======
                  { id: 'quick', label: 'Quick', icon: Settings },
                  { id: 'advanced', label: 'Advanced', icon: Settings },
                  { id: 'help', label: 'Help', icon: Info }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTab === id
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                    aria-selected={activeTab === id}
                    role="tab"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
=======
      {isOpen && (
        <div 
          className={`fixed ${getPositionClasses()} z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6`}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white">
              Accessibility Settings
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Contrast className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              </div>
              <button
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
=======
      {isOpen && (
        <div
          ref={panelRef}
          className="fixed bottom-20 left-4 z-50 w-80 bg-gray-900 border border-cyan-500/30 rounded-lg shadow-2xl backdrop-blur-sm"
          role="dialog"
          aria-label="Accessibility settings"
          aria-modal="true"
          onKeyDown={handlePanelKeyDown}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-white flex items-center">
              <Accessibility className="w-5 h-5 mr-2 text-cyan-400" />
              Accessibility
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Close accessibility settings"
            >
              <EyeOff className="w-5 h-5" />
            </button>
          </div>

          {/* Settings Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Contrast className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">High Contrast</div>
                  <div className="text-sm text-gray-400">Enhanced visibility</div>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.highContrast}
                aria-label="Toggle high contrast mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
=======
      {isOpen && (
        <div className={`fixed ${getPositionClasses()} z-50 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Accessibility Settings</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
              aria-label="Close accessibility panel"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Font Size Control */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Type className="w-4 h-4 mr-2" />
                Font Size: {settings.fontSize}%
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => adjustFontSize('decrease')}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Decrease font size"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-cyan-500 rounded-full transition-all duration-300"
                    style={{ width: `${((settings.fontSize - 80) / 120) * 100}%` }}
                  />
                </div>
                <button
                  onClick={() => adjustFontSize('increase')}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Increase font size"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => updateSetting('fontSize', 100)}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Reset font size"
                  title="Reset (Ctrl+0)"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Contrast className="w-4 h-4 mr-2" />
                High Contrast
              </label>
              <button
                onClick={toggleHighContrast}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle high contrast"
                role="switch"
                aria-checked={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              </div>
              <button
                onClick={() => updateSetting('largeText', !settings.largeText)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.largeText ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.largeText}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
              </div>
              <button
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.reducedMotion}
=======
            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Eye className="w-4 h-4 mr-2" />
                Reduced Motion
              </label>
              <button
                onClick={toggleReducedMotion}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle reduced motion"
                role="switch"
                aria-checked={settings.reducedMotion}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

<<<<<<< HEAD
            {/* Screen Reader */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
              </div>
              <button
                onClick={() => updateSetting('screenReader', !settings.screenReader)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.screenReader ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.screenReader}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
=======
            {/* Focus Indicator Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <MousePointer className="w-4 h-4 mr-2" />
                Focus Indicator
              </label>
              <button
                onClick={toggleFocusIndicator}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusIndicator ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle focus indicator"
                role="switch"
                aria-checked={settings.focusIndicator}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
                  }`}
                />
              </button>
            </div>

<<<<<<< HEAD
            {/* Keyboard Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
              </div>
              <button
                onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  settings.keyboardNavigation ? 'bg-cyan-600' : 'bg-gray-200'
                }`}
                aria-pressed={settings.keyboardNavigation}
=======
            {/* Keyboard Navigation Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Keyboard className="w-4 h-4 mr-2" />
                Keyboard Navigation
              </label>
              <button
                onClick={toggleKeyboardNavigation}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle keyboard navigation"
                role="switch"
                aria-checked={settings.keyboardNavigation}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

<<<<<<< HEAD
            {/* Font Size */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Font Size</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-700 dark:text-gray-300 min-w-[3rem] text-center">
                  {settings.fontSize}px
                </span>
                <button
                  onClick={() => updateSetting('fontSize', Math.min(24, settings.fontSize + 2))}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Color Blind Mode */}
            <div className="space-y-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Color Blind Mode</span>
              <select
                value={settings.colorBlindMode}
                onChange={(e) => updateSetting('colorBlindMode', e.target.value)}
                className="w-full p-2 text-sm border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
=======
            {/* Color Blindness Support */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Color Blindness Support
              </label>
              <select
                value={settings.colorBlindness}
                onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia (Red-Blind)</option>
                <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                <option value="tritanopia">Tritanopia (Blue-Blind)</option>
              </select>
            </div>

<<<<<<< HEAD
            {/* Device Mode */}
            <div className="space-y-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Device Mode</span>
              <div className="flex space-x-2">
                {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => updateSetting('deviceMode', mode)}
                    className={`p-2 rounded-md text-xs transition-colors ${
                      settings.deviceMode === mode
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                    aria-pressed={settings.deviceMode === mode}
                  >
                    {mode === 'desktop' && <Monitor className="w-4 h-4" />}
                    {mode === 'tablet' && <Tablet className="w-4 h-4" />}
                    {mode === 'mobile' && <Smartphone className="w-4 h-4" />}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
            {/* Font Size */}
            <div className="space-y-2">
              <div className="flex items-center">
                <ZoomIn className="w-5 h-5 mr-3 text-cyan-400" />
                <div className="text-white font-medium">Font Size</div>
              </div>
              <div className="flex space-x-2">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => changeFontSize(size)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                      settings.fontSize === size
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    aria-label={`Set font size to ${size}`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
=======
            {/* Theme Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme
              </label>
              <div className="flex space-x-2">
                {(['light', 'dark', 'auto'] as const).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => updateSetting('theme', theme)}
                    className={`p-2 rounded-md transition-colors ${
                      settings.theme === theme
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    aria-label={`Select ${theme} theme`}
                  >
                    {theme === 'light' && <Sun className="w-4 h-4" />}
                    {theme === 'dark' && <Moon className="w-4 h-4" />}
                    {theme === 'auto' && <Monitor className="w-4 h-4" />}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                  </button>
                ))}
              </div>

              {/* Tab Content */}
<<<<<<< HEAD
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
=======
              <div className="p-4 max-h-96 overflow-y-auto">
                {/* Quick Actions Tab */}
                {activeTab === 'quick' && (
                  <div className="space-y-3">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className={`w-full p-3 rounded-lg border transition-all duration-200 text-left hover:shadow-md ${
                          action.active
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        aria-pressed={action.active}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            action.active 
                              ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400' 
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }`}>
                            <action.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white">
                              {action.label}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {action.description}
                            </div>
                          </div>
                          {action.active && (
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Advanced Settings Tab */}
                {activeTab === 'advanced' && (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">Advanced Features</h4>
                      
                      <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Keyboard Navigation</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Enhanced keyboard shortcuts</div>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={() => toggleSetting('keyboardNavigation')}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 transition-colors ${
                          settings.keyboardNavigation
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {settings.keyboardNavigation && (
                            <Check className="w-4 h-4 text-white m-0.5" />
                          )}
                        </div>
                      </label>

                      <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Color Blind Support</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Enhanced color perception</div>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.colorBlindSupport}
                          onChange={() => toggleSetting('colorBlindSupport')}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 transition-colors ${
                          settings.colorBlindSupport
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {settings.colorBlindSupport && (
                            <Check className="w-4 h-4 text-white m-0.5" />
                          )}
                        </div>
                      </label>

                      <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Reduced Motion</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Minimize animations</div>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={() => toggleSetting('reducedMotion')}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 transition-colors ${
                          settings.reducedMotion
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {settings.reducedMotion && (
                            <Check className="w-4 h-4 text-white m-0.5" />
                          )}
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {/* Help Tab */}
                {activeTab === 'help' && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div className="text-sm text-blue-800 dark:text-blue-200">
                          <p className="font-medium mb-2">Keyboard Shortcuts</p>
                          <ul className="space-y-1 text-xs">
                            <li><kbd className="bg-white dark:bg-gray-800 px-1 py-0.5 rounded text-xs">Ctrl + H</kbd> Toggle accessibility panel</li>
                            <li><kbd className="bg-white dark:bg-gray-800 px-1 py-0.5 rounded text-xs">Tab</kbd> Navigate between elements</li>
                            <li><kbd className="bg-white dark:bg-gray-800 px-1 py-0.5 rounded text-xs">Escape</kbd> Close panels</li>
                          </ul>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                        </div>
                      </div>
                    </div>

<<<<<<< HEAD
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
          </motion.div>
        )}
      </AnimatePresence>

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
    </>
=======
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                        <div className="text-sm text-yellow-800 dark:text-yellow-200">
                          <p className="font-medium mb-2">Need Help?</p>
                          <p>Contact our support team for additional accessibility assistance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
<<<<<<< HEAD
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
          </div>

<<<<<<< HEAD
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
            {/* Reset Button */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={resetSettings}
                className="w-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Reset to Defaults
              </button>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="pt-2 text-xs text-gray-500 dark:text-gray-400 space-y-1">
              <div><strong>Keyboard Shortcuts:</strong></div>
              <div>Ctrl+Shift+A: Open/Close Panel</div>
              <div>Ctrl+Plus: Increase Font Size</div>
              <div>Ctrl+Minus: Decrease Font Size</div>
              <div>Ctrl+0: Reset Font Size</div>
            </div>
          </div>
        </div>
      )}

      {/* SVG Filters for Color Blindness */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
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
    </>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4e87

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
=======

              {/* Footer */}
              <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-3 text-center">
                <button
                  onClick={() => {
                    setSettings({
                      highContrast: false,
                      largeText: false,
                      reducedMotion: false,
                      screenReader: false,
                      keyboardNavigation: false,
                      focusIndicator: true,
                      colorBlindSupport: false,
                    });
                    announceChange('Accessibility settings reset to default');
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm transition-colors"
                  aria-label="Reset to default settings"
                >
                  Reset to Default
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
>>>>>>> origin/main
    </>
=======
=======
>>>>>>> origin/main
  }, [isVisible, settings]);

  // Apply accessibility settings to DOM
  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSize}%`;
    
    // Line spacing
    root.style.setProperty('--line-spacing', settings.lineSpacing.toString());
    
    // Word spacing
    root.style.setProperty('--word-spacing', `${settings.wordSpacing}em`);
    
    // Letter spacing
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}em`);
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Color blindness
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (settings.colorBlindness !== 'none') {
      root.classList.add(settings.colorBlindness);
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Dark mode
    if (settings.darkMode === 'dark' || 
        (settings.darkMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-indicator');
    } else {
      root.classList.remove('focus-indicator');
    }
    
    // Dyslexia support
    if (settings.dyslexia) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }
  }, [settings]);

<<<<<<< HEAD
  // Calculate accessibility score
  const calculateAccessibilityScore = useCallback(() => {
    let score = 100;
=======
  // Toggle setting with announcement
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
>>>>>>> origin/main
    
    // Visual accessibility
    if (settings.highContrast) score += 5;
    if (settings.fontSize > 100) score += 3;
    if (settings.reducedMotion) score += 2;
    if (settings.colorBlindness !== 'none') score += 3;
    
    // Audio accessibility
    if (settings.voiceCommands) score += 5;
    if (!settings.autoPlayMedia) score += 2;
    
    // Navigation accessibility
    if (settings.screenReader) score += 5;
    if (settings.keyboardNavigation) score += 5;
    if (settings.focusIndicator) score += 3;
    
    // Advanced accessibility
    if (settings.dyslexia) score += 3;
    if (settings.lineSpacing > 1.2) score += 2;
    
    setAccessibilityScore(Math.min(100, score));
  }, [settings]);

  // Handle voice commands
  const handleVoiceCommand = useCallback((command: string) => {
    const matchedCommand = voiceCommands.find(cmd => 
      command.includes(cmd.command) || cmd.command.includes(command)
    );
    
    if (matchedCommand) {
      switch (matchedCommand.action) {
        case 'open':
          setIsVisible(true);
          break;
        case 'close':
          setIsVisible(false);
          break;
        case 'highContrast':
          setSettings(prev => ({ ...prev, highContrast: true }));
          break;
        case 'normalContrast':
          setSettings(prev => ({ ...prev, highContrast: false }));
          break;
        case 'increaseFont':
          setSettings(prev => ({ ...prev, fontSize: Math.min(200, prev.fontSize + 10) }));
          break;
        case 'decreaseFont':
          setSettings(prev => ({ ...prev, fontSize: Math.max(50, prev.fontSize - 10) }));
          break;
        case 'resetFont':
          setSettings(prev => ({ ...prev, fontSize: 100 }));
          break;
        case 'darkTheme':
          setSettings(prev => ({ ...prev, darkMode: 'dark' }));
          break;
        case 'lightTheme':
          setSettings(prev => ({ ...prev, darkMode: 'light' }));
          break;
        case 'autoTheme':
          setSettings(prev => ({ ...prev, darkMode: 'auto' }));
          break;
        case 'screenReader':
          setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
          break;
        case 'keyboardNav':
          setSettings(prev => ({ ...prev, keyboardNavigation: !prev.keyboardNavigation }));
          break;
        case 'focusIndicator':
          setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }));
          break;
        case 'reducedMotion':
          setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
          break;
        case 'help':
          setShowKeyboardShortcuts(true);
          break;
      }
      
      // Play confirmation sound
      if (audioRef.current && settings.soundEffects) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [voiceCommands, settings.soundEffects]);

  // Start voice recognition
  const startVoiceRecognition = useCallback(() => {
    if (recognition && settings.voiceCommands) {
      try {
        recognition.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error starting voice recognition:', error);
      }
    }
  }, [recognition, settings.voiceCommands]);

  // Reset all settings
  const resetAllSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      fontSize: 100,
      colorBlindness: 'none',
      reducedMotion: false,
      darkMode: 'auto',
      soundEffects: true,
      autoPlayMedia: true,
      voiceCommands: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: false,
      dyslexia: false,
<<<<<<< HEAD
      lineSpacing: 1.5,
      wordSpacing: 1.0,
      letterSpacing: 0.0
=======
      highContrastText: false,
      largeCursor: false,
      soundEffects: false,
      autoPlay: false,
      showFocusRings: true,
      showKeyboardShortcuts: false,
      showScreenReaderHints: false,
      showAccessibilityInfo: false
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-3b7b
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
    });
  }, []);

  // Tab component
  const TabButton: React.FC<{ id: string; icon: React.ReactNode; label: string }> = ({ 
    id, icon, label 
  }) => (
    <button
      onClick={() => setActiveTab(id as any)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        activeTab === id
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
          : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings (Alt + A)"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100, scale: 0.9 }}
        className="fixed bottom-4 left-4 z-50 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Accessibility className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Accessibility</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close accessibility settings"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Accessibility Score */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm opacity-90">Accessibility Score</span>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span className="text-xl font-bold">{accessibilityScore}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 p-3 bg-gray-50 dark:bg-gray-800">
          <TabButton id="general" icon={<Settings className="w-4 h-4" />} label="General" />
          <TabButton id="visual" icon={<Eye className="w-4 h-4" />} label="Visual" />
          <TabButton id="audio" icon={<Volume2 className="w-4 h-4" />} label="Audio" />
          <TabButton id="navigation" icon={<Keyboard className="w-4 h-4" />} label="Navigation" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-[50vh] overflow-y-auto">
          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Voice Commands
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, voiceCommands: !prev.voiceCommands }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.voiceCommands ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.voiceCommands ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {settings.voiceCommands && (
                <div className="space-y-3">
                  <button
                    onClick={startVoiceRecognition}
                    disabled={isListening}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isListening
                        ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                        <span>Listening...</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-4 h-4" />
                        <span>Start Voice Commands</span>
                      </>
                    )}
                  </button>
                  
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-2">Available Commands:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {voiceCommands.slice(0, 5).map((cmd, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-mono">"{cmd.command}"</span>
                          <span>{cmd.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sound Effects
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, soundEffects: !prev.soundEffects }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.soundEffects ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Auto-play Media
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, autoPlayMedia: !prev.autoPlayMedia }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    !settings.autoPlayMedia ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      !settings.autoPlayMedia ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <button
                onClick={resetAllSettings}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Settings</span>
              </button>
            </div>
          )}

          {/* Visual Tab */}
          {activeTab === 'visual' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    High Contrast
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reduced Motion
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Font Size: {settings.fontSize}%
                  </span>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="10"
                    value={settings.fontSize}
                    onChange={(e) => setSettings(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50%</span>
                    <span>100%</span>
                    <span>200%</span>
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Line Spacing: {settings.lineSpacing.toFixed(1)}x
                  </span>
                  <input
                    type="range"
                    min="1.0"
                    max="2.0"
                    step="0.1"
                    value={settings.lineSpacing}
                    onChange={(e) => setSettings(prev => ({ ...prev, lineSpacing: parseFloat(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </label>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Color Blindness Support
                  </span>
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Theme
                  </span>
                  <div className="flex space-x-2">
                    {(['light', 'auto', 'dark'] as const).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setSettings(prev => ({ ...prev, darkMode: theme }))}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${
                          settings.darkMode === theme
                            ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        {theme === 'light' && <Sun className="w-4 h-4" />}
                        {theme === 'auto' && <Smartphone className="w-4 h-4" />}
                        {theme === 'dark' && <Moon className="w-4 h-4" />}
                        <span className="capitalize">{theme}</span>
                      </button>
                    ))}
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Audio Tab */}
          {activeTab === 'audio' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Voice Commands
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, voiceCommands: !prev.voiceCommands }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.voiceCommands ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.voiceCommands ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sound Effects
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, soundEffects: !prev.soundEffects }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.soundEffects ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Auto-play Media
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, autoPlayMedia: !prev.autoPlayMedia }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      !settings.autoPlayMedia ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        !settings.autoPlayMedia ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {settings.voiceCommands && (
                <div className="space-y-3">
                  <button
                    onClick={startVoiceRecognition}
                    disabled={isListening}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isListening
                        ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                        <span>Listening...</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-4 h-4" />
                        <span>Start Voice Commands</span>
                      </>
                    )}
                  </button>
                  
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-2">Voice Commands:</p>
                    <div className="space-y-1">
                      {voiceCommands.map((cmd, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-mono">"{cmd.command}"</span>
                          <span>{cmd.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation Tab */}
          {activeTab === 'navigation' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Screen Reader Mode
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.screenReader ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Enhanced Keyboard Navigation
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, keyboardNavigation: !prev.keyboardNavigation }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Focus Indicator
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-yellow-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Dyslexia Support
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, dyslexia: !prev.dyslexia }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.dyslexia ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.dyslexia ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {settings.dyslexia && (
                  <div className="space-y-3">
                    <label className="block">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Word Spacing: {settings.wordSpacing.toFixed(1)}em
                      </span>
                      <input
                        type="range"
                        min="0.5"
                        max="2.0"
                        step="0.1"
                        value={settings.wordSpacing}
                        onChange={(e) => setSettings(prev => ({ ...prev, wordSpacing: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Letter Spacing: {settings.letterSpacing.toFixed(1)}em
                      </span>
                      <input
                        type="range"
                        min="-0.5"
                        max="2.0"
                        step="0.1"
                        value={settings.letterSpacing}
                        onChange={(e) => setSettings(prev => ({ ...prev, letterSpacing: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-medium mb-1">Keyboard Shortcuts:</p>
                    <p>Alt + A: Toggle accessibility panel</p>
                    <p>Alt + H: Toggle high contrast</p>
                    <p>Alt + F: Toggle focus indicator</p>
                    <p>Alt + K: Show all shortcuts</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-800 p-3 flex items-center justify-between">
          <button
            onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Keyboard Shortcuts</span>
          </button>
          
          <div className="text-xs text-gray-500">
            Score: {accessibilityScore}/100
          </div>
        </div>

        {/* Keyboard Shortcuts Modal */}
        <AnimatePresence>
          {showKeyboardShortcuts && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center z-10"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Keyboard Shortcuts
                  </h3>
                  <button
                    onClick={() => setShowKeyboardShortcuts(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  {[
                    { key: 'Alt + A', action: 'Toggle accessibility panel' },
                    { key: 'Alt + H', action: 'Toggle high contrast' },
                    { key: 'Alt + F', action: 'Toggle focus indicator' },
                    { key: 'Alt + R', action: 'Reset all settings' },
                    { key: 'Alt + T', action: 'Toggle theme' },
                    { key: 'Alt + S', action: 'Toggle screen reader mode' },
                    { key: 'Alt + K', action: 'Show keyboard shortcuts' },
                    { key: 'Escape', action: 'Close panels' }
                  ].map((shortcut, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm font-mono">
                        {shortcut.key}
                      </kbd>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {shortcut.action}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden audio element for sound effects */}
        <audio ref={audioRef} preload="none">
          <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT" type="audio/wav" />
        </audio>
      </motion.div>
    </AnimatePresence>
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bec0
=======
>>>>>>> origin/main
=======
          {/* Help Text */}
          <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Use Tab to navigate, Enter/Space to activate, and Escape to close. 
              These settings are saved automatically.
            </p>
=======
            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MousePointer className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Reduced Motion</div>
                  <div className="text-sm text-gray-400">Minimize animations</div>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.reducedMotion}
                aria-label="Toggle reduced motion"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Keyboard className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Focus Indicator</div>
                  <div className="text-sm text-gray-400">Show keyboard focus</div>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('focusIndicator')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  settings.focusIndicator ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.focusIndicator}
                aria-label="Toggle focus indicator"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader Support */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">Screen Reader</div>
                  <div className="text-sm text-gray-400">Enhanced announcements</div>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('screenReader')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  settings.screenReader ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.screenReader}
                aria-label="Toggle screen reader support"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <div className="pt-4 border-t border-gray-700">
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Reset accessibility settings to default"
              >
                Reset to Default
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="p-4 bg-gray-800/50 border-t border-gray-700">
            <div className="text-sm text-gray-400">
              <div className="font-medium text-white mb-2">Keyboard Shortcuts:</div>
              <div className="space-y-1">
                <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Alt + A</kbd> Toggle panel</div>
                <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Tab</kbd> Navigate</div>
                <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Escape</kbd> Close</div>
              </div>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
          </div>
        </div>
      )}

<<<<<<< HEAD
      {/* Color Blind SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
          </filter>
        </defs>
      </svg>

      {/* Screen Reader Only Class */}
      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
      {/* Focus History Indicator (for debugging) */}
      {process.env.NODE_ENV === 'development' && focusHistory.length > 0 && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono backdrop-blur-sm max-w-xs">
          <div className="font-bold mb-2">Focus History:</div>
          {focusHistory.slice(-3).map((element, index) => (
            <div key={index} className="text-cyan-400">
              {element.tagName.toLowerCase()}: {element.textContent?.slice(0, 30)}...
            </div>
          ))}
        </div>
      )}
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  );
};

export default EnhancedAccessibility;
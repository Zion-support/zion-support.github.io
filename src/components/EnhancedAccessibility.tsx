import React, { useState, useEffect, useCallback } from 'react';
=======
import React, { useState, useEffect, useCallback } from 'react';
=======
import React, { useState, useEffect, useRef } from 'react';
=======
import { 
=======
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React, { useState, useEffect, useRef } from 'react';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
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
=======
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
=======
  Contrast, 
  ZoomIn, 
  ZoomOut,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Tablet
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
=======
  Volume2, 
  VolumeX, 
  MousePointer, 
  Keyboard, 
  Monitor, 
  Sun, 
  Moon,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
=======
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
=======
  Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  // Visual
  highContrast: boolean;
  largeText: boolean;
  fontSize: number;
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
=======
=======
=======
  reducedMotion: boolean;
  soundEffects: boolean;
  autoPlayMedia: boolean;
  voiceCommands: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  dyslexia: boolean;
  highContrastText: boolean;
  largeCursor: boolean;
  soundEffects: boolean;
  autoPlay: boolean;
  showFocusRings: boolean;
  showKeyboardShortcuts: boolean;
  showScreenReaderHints: boolean;
  showAccessibilityInfo: boolean;
=======
  fontSize: number;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  deviceMode: 'desktop' | 'tablet' | 'mobile';
=======
  theme: 'light' | 'dark' | 'auto';
=======
  colorBlindSupport: boolean;
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ 
  theme: 'light' | 'dark' | 'auto';
}

const EnhancedAccessibility: React.FC<{ position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' }> = ({ 
  position = 'bottom-right' 
}) => {
=======
interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ 
  position = 'bottom-right' 
}) => {
=======
  soundEnabled: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

export const EnhancedAccessibility: React.FC = () => {
=======
}

const EnhancedAccessibility: React.FC<{ position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ 
=======
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
=======
    fontSize: 100,
    reducedMotion: false,
    fontSize: 16,
    reducedMotion: false,
=======
    largeText: false,
    reducedMotion: false,
    soundEffects: true,
    autoPlayMedia: false,
    voiceCommands: false,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindness: 'none',
=======
    focusIndicator: true,
    colorBlindSupport: false,
  });
  const [activeTab, setActiveTab] = useState<'quick' | 'advanced' | 'help'>('quick');
  const [announcement, setAnnouncement] = useState<string>('');
  const [isAnnouncing, setIsAnnouncing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
    colorBlindness: 'none',
    dyslexia: false,
    highContrastText: false,
    largeCursor: false,
    soundEffects: false,
    autoPlay: false,
    showFocusRings: true,
    showKeyboardShortcuts: false,
    showScreenReaderHints: false,
    showAccessibilityInfo: false,
  });
=======

  // Apply accessibility settings to the document
  useEffect(() => {
    theme: 'auto'
  });

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-filter', 'contrast(1.5) brightness(1.2)');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-filter');
    }
    
    // Font size
    root.style.setProperty('--font-size-multiplier', `${newSettings.fontSize / 100}`);
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
=======
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);

    // Set up keyboard shortcuts
    setupKeyboardShortcuts();

    // Set up focus tracking
    setupFocusTracking();

    // Set up screen reader announcements
    setupScreenReaderAnnouncements();

    // Set up high contrast detection
    setupHighContrastDetection();

    // Set up motion detection
    setupMotionDetection();

    // Set up color blindness simulation
    setupColorBlindnessSimulation();

    // Set up dyslexia support
    setupDyslexiaSupport();

    // Set up large cursor
    setupLargeCursor();

    // Set up sound effects
    setupSoundEffects();

    // Set up auto-play prevention
    setupAutoPlayPrevention();

    // Set up focus rings
    setupFocusRings();

    // Set up keyboard navigation
    setupKeyboardNavigation();

    // Set up screen reader hints
    setupScreenReaderHints();

    // Set up accessibility info
    setupAccessibilityInfo();

  }, []);

  // Apply accessibility settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
=======
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
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

    // Font size
    root.style.setProperty('--font-size-base', `${newSettings.fontSize}px`);
    root.style.setProperty('--font-size-lg', `${newSettings.fontSize * 1.125}px`);
    root.style.setProperty('--font-size-xl', `${newSettings.fontSize * 1.25}px`);
    root.style.setProperty('--font-size-2xl', `${newSettings.fontSize * 1.5}px`);

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--transition-duration', '0s');
      root.style.setProperty('--animation-duration', '0s');
    } else {
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(`color-blindness-${newSettings.colorBlindness}`);
    } else {
      root.classList.remove('color-blindness-protanopia', 'color-blindness-deuteranopia', 'color-blindness-tritanopia');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.classList.add('dyslexia-friendly');
      root.style.setProperty('--font-family', 'OpenDyslexic, Arial, sans-serif');
      root.style.setProperty('--line-height', '1.5');
      root.style.setProperty('--letter-spacing', '0.1em');
    } else {
      root.classList.remove('dyslexia-friendly');
      root.style.removeProperty('--font-family');
      root.style.removeProperty('--line-height');
      root.style.removeProperty('--letter-spacing');
    }

    // High contrast text
    if (newSettings.highContrastText) {
      root.classList.add('high-contrast-text');
    } else {
      root.classList.remove('high-contrast-text');
    }

    // Large cursor
    if (newSettings.largeCursor) {
      root.classList.add('large-cursor');
    } else {
      root.classList.remove('large-cursor');
    }
    
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
=======
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

    if (newSettings.focusIndicator) {
      root.classList.add('show-focus');
    } else {
      root.classList.remove('show-focus');
    }
  };

  };

  const setupFocusTracking = () => {
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      const focusId = target.getAttribute('data-focus-id') || target.tagName.toLowerCase();
      setCurrentFocus(focusId);
      setFocusHistory(prev => [...prev.slice(-9), focusId]);
      
      if (settings.screenReader) {
        announceToScreenReader(`${target.textContent || target.getAttribute('aria-label') || focusId} focused`);
      }
    });

    document.addEventListener('focusout', (e) => {
      const target = e.target as HTMLElement;
      if (settings.screenReader) {
        announceToScreenReader(`${target.textContent || target.getAttribute('aria-label') || 'Element'} lost focus`);
      }
    });
  };

  const setupScreenReaderAnnouncements = () => {
    // Create live region for screen reader announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  };

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

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
=======
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
        }
      }
      
      if (event.key === 'Escape') {
        setIsVisible(false);
        setShowKeyboardShortcuts(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
=======
=======
  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...prev, message]);
      
      // Remove announcement after 5 seconds
      setTimeout(() => {
        setAnnouncements(prev => prev.filter(a => a !== message));
      }, 5000);
=======
  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
    }
  };

  return (
    <>
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
=======
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50`}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
=======
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
      >
        <Eye className="w-6 h-6" />
      </button>
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
      {/* Accessibility Panel */}
      <div 
        ref={accessibilityRef}
        className={`fixed ${getPositionClasses()} z-50 transition-all duration-300 ${
          isOpen ? 'w-80' : 'w-16'
        }`}
        onMouseDown={handleDragStart}
      >
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5" />
                <span className="font-semibold">Accessibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Minimize accessibility panel"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label={isOpen ? 'Collapse accessibility panel' : 'Expand accessibility panel'}
                >
                  {isOpen ? <X className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          {!isOpen && (
            <div className="p-3 space-y-2">
              <button
                onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                className={`w-full p-2 rounded transition-colors ${
                  settings.highContrast 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                aria-label="Toggle high contrast"
              >
                <Contrast className="w-4 h-4 mx-auto" />
              </button>
              
              <button
                onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 24) }))}
                className="w-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Increase font size"
              >
                <ZoomIn className="w-4 h-4 mx-auto" />
              </button>
              
              <button
                onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                className={`w-full p-2 rounded transition-colors ${
                  settings.reducedMotion 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                aria-label="Toggle reduced motion"
              >
                <Monitor className="w-4 h-4 mx-auto" />
              </button>
            </div>
          )}

          {/* Expanded Panel */}
          {isOpen && (
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Visual Adjustments */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Visual Adjustments
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">High Contrast</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.highContrastText}
                      onChange={(e) => setSettings(prev => ({ ...prev, highContrastText: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">High Contrast Text</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.largeCursor}
                      onChange={(e) => setSettings(prev => ({ ...prev, largeCursor: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Large Cursor</span>
                  </label>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Font Size:</span>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 2, 12) }))}
                      className="p-1 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <ZoomOut className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-300 w-8 text-center">
                      {settings.fontSize}
                    </span>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 24) }))}
                      className="p-1 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <ZoomIn className="w-3 h-3" />
                    </button>
                  </div>
=======
                </div>
                <p className="text-blue-100 text-sm mt-1">
                  Customize your experience
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {[
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
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

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
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

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
                  }`}
                />
              </button>
            </div>

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
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Color Blindness Support */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Color Blindness Support
              </label>
              <select
                value={settings.colorBlindness}
                onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia (Red-Blind)</option>
                <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                <option value="tritanopia">Tritanopia (Blue-Blind)</option>
              </select>
            </div>

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
=======
              {/* Motion and Interaction */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                  <MousePointer className="w-4 h-4 mr-2" />
                  Motion & Interaction
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Reduced Motion</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.soundEffects}
                      onChange={(e) => setSettings(prev => ({ ...prev, soundEffects: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Sound Effects</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.autoPlay}
                      onChange={(e) => setSettings(prev => ({ ...prev, autoPlay: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Prevent Auto-play</span>
                  </label>
                </div>
              </div>

              {/* Accessibility Features */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                  <Accessibility className="w-4 h-4 mr-2" />
                  Accessibility Features
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Screen Reader Mode</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Enhanced Keyboard Navigation</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => setSettings(prev => ({ ...prev, focusIndicator: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Show Focus Indicator</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.showFocusRings}
                      onChange={(e) => setSettings(prev => ({ ...prev, showFocusRings: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Show Focus Rings</span>
                  </label>
                </div>
              </div>

              {/* Specialized Support */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Specialized Support
                </h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm text-gray-600 dark:text-gray-400">Color Blindness:</label>
                    <select
                      value={settings.colorBlindness}
                      onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                      className="w-full mt-1 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      <option value="none">None</option>
                      <option value="protanopia">Protanopia (Red-Blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                    </select>
                  </div>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.dyslexia}
                      onChange={(e) => setSettings(prev => ({ ...prev, dyslexia: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Dyslexia Support</span>
                  </label>
                </div>
              </div>

              {/* Information Display */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Information Display
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.showKeyboardShortcuts}
                      onChange={(e) => setSettings(prev => ({ ...prev, showKeyboardShortcuts: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Show Keyboard Shortcuts</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.showScreenReaderHints}
                      onChange={(e) => setSettings(prev => ({ ...prev, showScreenReaderHints: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Show Screen Reader Hints</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.showAccessibilityInfo}
                      onChange={(e) => setSettings(prev => ({ ...prev, showAccessibilityInfo: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Show Accessibility Info</span>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <button
                    onClick={resetSettings}
                    className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 inline mr-1" />
                    Reset
=======
                  </button>
                ))}
              </div>

              {/* Tab Content */}
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
                        </div>
                      </div>
                    </div>

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
=======
      {/* Screen Reader Announcements */}
      {announcements.length > 0 && (
        <div
          ref={announcementRef}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {announcements.map((announcement, index) => (
            <div key={index}>{announcement}</div>
          ))}
        </div>
      )}

      {/* Keyboard Shortcuts Help */}
      {settings.showKeyboardShortcuts && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl max-h-96 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Keyboard Shortcuts</h2>
            <div className="grid grid-cols-2 gap-4">
              {Array.from(keyboardShortcuts.entries()).map(([shortcut, description]) => (
                <div key={shortcut} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono">
                    {shortcut}
                  </kbd>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{description}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSettings(prev => ({ ...prev, showKeyboardShortcuts: false }))}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Focus History */}
      {isExpanded && focusHistory.length > 0 && (
        <div className="fixed bottom-20 right-4 z-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-xs">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Focus History</h3>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {focusHistory.slice().reverse().map((focus, index) => (
              <div key={index} className="text-xs text-gray-600 dark:text-gray-400">
                {focus}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

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
    </>
=======
=======
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

  // Toggle setting with announcement
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    
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
      highContrastText: false,
      largeCursor: false,
      soundEffects: false,
      autoPlay: false,
      showFocusRings: true,
      showKeyboardShortcuts: false,
      showScreenReaderHints: false,
      showAccessibilityInfo: false
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
          </div>
        </div>
      )}

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
=======

              {/* Footer */}
              <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-3 text-center">
                <button
                  onClick={() => {
                    setSettings({
                      highContrast: false,
                      largeText: false,
                      reducedMotion: false,
                      soundEffects: true,
                      autoPlayMedia: false,
                      voiceCommands: false,
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
    </>
  );
};
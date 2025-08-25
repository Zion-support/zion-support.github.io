import React, { useState, useEffect, useRef } from 'react';
import { 
  Eye, 
  EyeOff, 
  Type, 
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
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  Accessibility,
  Headphones,
  Hand,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Space
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  dyslexia: boolean;
  highContrastText: boolean;
  largeCursor: boolean;
  soundEffects: boolean;
  autoPlay: boolean;
  showFocusRings: boolean;
  showKeyboardShortcuts: boolean;
  showScreenReaderHints: boolean;
  showAccessibilityInfo: boolean;
}

const EnhancedAccessibility: React.FC<{ position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
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

  const [currentFocus, setCurrentFocus] = useState<string>('');
  const [focusHistory, setFocusHistory] = useState<string[]>([]);
  const [keyboardShortcuts, setKeyboardShortcuts] = useState<Map<string, string>>(new Map());
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [positionState, setPositionState] = useState(position);
  const [isMinimized, setIsMinimized] = useState(false);

  const accessibilityRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Initialize accessibility features
  useEffect(() => {
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

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('show-focus');
    } else {
      root.classList.remove('show-focus');
    }
  };

  const setupKeyboardShortcuts = () => {
    const shortcuts = new Map([
      ['Alt + A', 'Toggle accessibility panel'],
      ['Alt + H', 'Toggle high contrast'],
      ['Alt + F', 'Increase font size'],
      ['Alt + Shift + F', 'Decrease font size'],
      ['Alt + M', 'Toggle reduced motion'],
      ['Alt + S', 'Toggle screen reader mode'],
      ['Alt + K', 'Toggle keyboard navigation'],
      ['Alt + C', 'Toggle color blindness simulation'],
      ['Alt + D', 'Toggle dyslexia support'],
      ['Alt + L', 'Toggle large cursor'],
      ['Alt + T', 'Toggle focus rings'],
      ['Alt + I', 'Show accessibility info'],
      ['Escape', 'Close accessibility panel'],
      ['Tab', 'Navigate through elements'],
      ['Enter', 'Activate element'],
      ['Space', 'Toggle element'],
      ['Arrow keys', 'Navigate through options'],
    ]);
    setKeyboardShortcuts(shortcuts);
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

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...prev, message]);
      
      // Remove announcement after 5 seconds
      setTimeout(() => {
        setAnnouncements(prev => prev.filter(a => a !== message));
      }, 5000);
    }
  };

  const setupHighContrastDetection = () => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    if (mediaQuery.matches) {
      setSettings(prev => ({ ...prev, highContrast: true }));
    }
    
    mediaQuery.addEventListener('change', (e) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    });
  };

  const setupMotionDetection = () => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }
    
    mediaQuery.addEventListener('change', (e) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    });
  };

  const setupColorBlindnessSimulation = () => {
    // CSS filters for color blindness simulation
    const style = document.createElement('style');
    style.textContent = `
      .color-blindness-protanopia { filter: url('#protanopia'); }
      .color-blindness-deuteranopia { filter: url('#deuteranopia'); }
      .color-blindness-tritanopia { filter: url('#tritanopia'); }
    `;
    document.head.appendChild(style);
  };

  const setupDyslexiaSupport = () => {
    // Load OpenDyslexic font if needed
    if (settings.dyslexia) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=OpenDyslexic:wght@400;700&display=swap';
      document.head.appendChild(link);
    }
  };

  const setupLargeCursor = () => {
    if (settings.largeCursor) {
      document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'><circle cx=\'16\' cy=\'16\' r=\'14\' fill=\'none\' stroke=\'black\' stroke-width=\'2\'/><circle cx=\'16\' cy=\'16\' r=\'4\' fill=\'black\'/></svg>") 16 16, auto';
    } else {
      document.body.style.cursor = '';
    }
  };

  const setupSoundEffects = () => {
    if (settings.soundEffects) {
      // Add sound effects for interactions
      document.addEventListener('click', () => {
        playSound('click');
      });
      
      document.addEventListener('focusin', () => {
        playSound('focus');
      });
    }
  };

  const playSound = (type: string) => {
    // Simple sound effects using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch (type) {
      case 'click':
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        break;
      case 'focus':
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        break;
    }
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const setupAutoPlayPrevention = () => {
    if (settings.autoPlay) {
      // Prevent autoplay of media
      const mediaElements = document.querySelectorAll('video, audio');
      mediaElements.forEach((media: any) => {
        media.setAttribute('preload', 'none');
        media.setAttribute('autoplay', 'false');
        media.setAttribute('muted', 'true');
      });
    }
  };

  const setupFocusRings = () => {
    if (settings.showFocusRings) {
      document.documentElement.classList.add('show-focus-rings');
    } else {
      document.documentElement.classList.remove('show-focus-rings');
    }
  };

  const setupKeyboardNavigation = () => {
    if (settings.keyboardNavigation) {
      // Enhanced keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (e.shiftKey) {
            // Shift + Tab: navigate backwards
            const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            (focusableElements[prevIndex] as HTMLElement).focus();
          } else {
            // Tab: navigate forwards
            const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
            const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
            (focusableElements[nextIndex] as HTMLElement).focus();
          }
        }
      });
    }
  };

  const setupScreenReaderHints = () => {
    if (settings.showScreenReaderHints) {
      // Add ARIA labels and descriptions to elements
      const elements = document.querySelectorAll('[data-sr-hint]');
      elements.forEach((element) => {
        const hint = element.getAttribute('data-sr-hint');
        if (hint) {
          element.setAttribute('aria-label', hint);
          element.setAttribute('aria-describedby', `sr-hint-${element.id || Math.random()}`);
        }
      });
    }
  };

  const setupAccessibilityInfo = () => {
    if (settings.showAccessibilityInfo) {
      // Show accessibility information for elements
      document.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        const info = target.getAttribute('data-accessibility-info');
        if (info) {
          showAccessibilityTooltip(target, info);
        }
      });
    }
  };

  const showAccessibilityTooltip = (element: HTMLElement, info: string) => {
    const tooltip = document.createElement('div');
    tooltip.className = 'accessibility-tooltip';
    tooltip.textContent = info;
    tooltip.style.cssText = `
      position: absolute;
      background: #000;
      color: #fff;
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      z-index: 10000;
      pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 40}px`;
    
    setTimeout(() => {
      document.body.removeChild(tooltip);
    }, 3000);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 16,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
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
    };
    setSettings(defaultSettings);
  };

  const getPositionClasses = () => {
    switch (positionState) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
      default:
        return 'bottom-4 right-4';
    }
  };

  const handleDragStart = (e: React.MouseEvent) => {
    if (e.button === 0) { // Left mouse button only
      setIsDragging(true);
      const rect = accessibilityRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }
  };

  const handleDragMove = (e: MouseEvent) => {
    if (isDragging && accessibilityRef.current) {
      const x = e.clientX - dragOffset.x;
      const y = e.clientY - dragOffset.y;
      
      accessibilityRef.current.style.position = 'fixed';
      accessibilityRef.current.style.left = `${x}px`;
      accessibilityRef.current.style.top = `${y}px`;
      accessibilityRef.current.style.transform = 'none';
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [isDragging, dragOffset]);

  if (isMinimized) {
    return (
      <div 
        ref={accessibilityRef}
        className={`fixed ${getPositionClasses()} z-50`}
        onMouseDown={handleDragStart}
      >
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          aria-label="Open accessibility panel"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <>
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
                </div>
              </div>

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
                  </button>
                  
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    {isExpanded ? 'Less' : 'More'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

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

export default EnhancedAccessibility;
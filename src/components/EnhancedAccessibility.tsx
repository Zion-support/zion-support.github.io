impor, t, Reac, t, { useStat, e, useEffec, t, useCallback } from 'react';
=======
impor, t, Reac, t, { useStat, e, useEffec, t, useCallback } from 'react';
=======
impor, t, Reac, t, { useStat, e, useEffec, t, useRef } from 'react';
import { 
=======
impor, t, Reac, t, { useStat, e, useEffec, t, useCallbac, k, useRef } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
=======
impor, t, Reac, t, { useStat, e, useEffec, t, useRef } from 'react';
import { 
  Accessibilit, y, 
  Ey, e, 
  EyeOf, f, 
  Typ, e, 
=======
  Palett, e, 
  MousePointe, r, 
  Keyboar, d, 
  Monito, r, 
  Setting, s,
  X,
  Chec, k,
  AlertTriangl, e,
  Inf, o,
=======
  Su, n,
  Moo, n,
  Smartphon, e,
  Headphone, s,
  Mi, c,
  MicOf, f,
  ArrowU, p,
  ArrowDow, n,
  RotateCc, w,
  HelpCircl, e,
  Zap
=======
  Contras, t, 
  ZoomI, n, 
  ZoomOu, t,
  Keyboar, d,
  MousePointe, r,
  Monito, r,
  Smartphon, e,
  Tablet
=======
  ZoomI, n, 
  ZoomOu, t, 
  Contras, t, 
  Su, n, 
  Moo, n,
  Accessibilit, y,
  Keyboar, d,
  MousePointe, r,
  BookOpen
=======
  MousePointe, r, 
  Keyboar, d,
  Su, n,
  Moo, n,
  Monito, r,
  Setting, s,
  X,
  Plu, s,
  Minu, s,
  RotateCcw
=======
  Volume, 2, 
  Volume, X, 
  MousePointe, r, 
  Keyboar, d, 
  Monito, r, 
  Su, n, 
  Moo, n,
  Contras, t,
  ZoomI, n,
  ZoomOu, t,
  RotateCc, w,
  Setting, s,
  X,
  Chec, k,
  AlertTriangl, e,
  Inf, o,
  HelpCircl, e,
  Accessibilit, y,
  Headphone, s,
  Han, d,
  ArrowU, p,
  ArrowDow, n,
  ArrowLef, t,
  ArrowRigh, t,
  Space
} from 'lucide-react';

interface AccessibilitySettings {
  // Visual
  highContras, t: boolean;
  largeTex, t: boolean;
=======
  fontSiz, e: number;
  EyeIco, n, 
  EyeSlashIco, n, 
  SpeakerWaveIco, n, 
  SpeakerXMarkIco, n,
  SunIco, n,
  MoonIco, n,
  AdjustmentsHorizontalIco, n,
  InformationCircleIco, n,
  CheckCircleIco, n,
  ExclamationTriangleIco, n,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface AccessibilitySettings {
  highContras, t: boolean;
  reducedMotio, n: boolean;
  largeTex, t: boolean;
  screenReade, r: boolean;
  keyboardNavigatio, n: boolean;
=======
  reducedMotio, n: boolean;
  screenReade, r: boolean;
  keyboardNavigatio, n: boolean;
  focusIndicato, r: boolean;
  colorBlindnes, s: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  dyslexi, a: boolean;
  highContrastTex, t: boolean;
  largeCurso, r: boolean;
  soundEffect, s: boolean;
  autoPla, y: boolean;
  showFocusRing, s: boolean;
  showKeyboardShortcut, s: boolean;
  showScreenReaderHint, s: boolean;
  showAccessibilityInf, o: boolean;
=======
  fontSiz, e: number;
  colorBlindMod, e: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  deviceMod, e: 'desktop' | 'tablet' | 'mobile';
=======
  them, e: 'light' | 'dark' | 'auto';
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const EnhancedAccessibilit, y: React.FC<EnhancedAccessibilityProps> = ({ 
  position = 'bottom-right' 
=======
  them,  e: 'light' | 'dark' | 'auto';
}

const EnhancedAccessibilit, y: React.FC<{ position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' }> = ({ 
  position = 'bottom-right' 
}) => {
=======
interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const EnhancedAccessibilit, y: React.FC<EnhancedAccessibilityProps> = ({ 
  position = 'bottom-right' 
}) => {
=======
  soundEnable,  d: boolean;
  focusIndicato, r: boolean;
  screenReade, r: boolean;
}

export const EnhancedAccessibilit, y: React.FC = () => {
=======
}

const EnhancedAccessibilit, y: React.FC<{ position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const [isExpand, e, d, setIsExpand, e, d] = useState(false);
  const [settin,  g, s, setSettin, g, s] = useState<AccessibilitySettings>({
    highContras, t: fals, e,
    largeTex, t: fals, e,
=======
    largeTex, t: fals, e,
=======
    fontSiz, e: 10, 0,
    reducedMotio, n: fals, e,
    fontSiz, e: 1, 6,
    reducedMotio, n: fals, e,
    screenReade, r: fals, e,
    keyboardNavigatio, n: fals, e,
    colorBlindnes, s: 'none',
=======
    focusIndicato, r: tru, e,
    colorBlindnes, s: 'none',
    dyslexi, a: fals, e,
    highContrastTex, t: fals, e,
    largeCurso, r: fals, e,
    soundEffect, s: fals, e,
    autoPla, y: fals, e,
    showFocusRing, s: tru, e,
    showKeyboardShortcut, s: fals, e,
    showScreenReaderHint, s: fals, e,
    showAccessibilityInf, o: fals, e,
  });

  const [currentFoc, u, s, setCurrentFoc, u, s] = useState<string>('');
  const [focusHisto,  r, y, setFocusHisto, r, y] = useState<string[]>([]);
  const [keyboardShortcu, t, s, setKeyboardShortcu, t, s] = useState<Map<strin, g, string>>(new Map());
  const [announcemen,  t, s, setAnnouncemen, t, s] = useState<string[]>([]);
  const [isDraggi, n, g, setIsDraggi, n, g] = useState(false);
  const [dragOffs,  e, t, setDragOffs, e, t] = useState({ x: 0,
    y: 0 });
  const [positionSta, t, e, setPositionSta, t, e] = useState(position);
  const [isMinimiz,  e, d, setIsMinimiz, e, d] = useState(false);

  const accessibilityRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Initialize accessibility features
  useEffect(() => {
    them,  e: 'auto'
  });

  // Apply accessibility settings to document
  const applySettings = useCallback((newSetting,  s: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-filter',  'contrast(1.5) brightness(1.2)');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-filter');
    }
    
    // Font size
    root.style.setProperty('--font-size-multiplier',  `${newSettings.fontSize / 10, 0}`);
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration',  '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
=======
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...pre,  v, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility setting,  s:', error);
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

  },  []);

  // Apply accessibility settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
    localStorage.setItem('accessibility-settings',  JSON.stringify(settings));
  }, [settin, g, s]);

  const applyAccessibilitySettings = (newSetting,  s: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--bg-primary',  '#000000');
      root.style.setProperty('--text-primary',  '#ffffff');
      root.style.setProperty('--accent-color',  '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--accent-color');
    }

    // Font size
    root.style.setProperty('--font-size-base',  `${newSettings.fontSize}p, x`);
    root.style.setProperty('--font-size-lg',  `${newSettings.fontSize * 1.125}p, x`);
    root.style.setProperty('--font-size-xl',  `${newSettings.fontSize * 1.25}p, x`);
    root.style.setProperty('--font-size-2xl',  `${newSettings.fontSize * 1.5}p, x`);

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--transition-duration',  '0s');
      root.style.setProperty('--animation-duration',  '0s');
    } else {
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(`color-blindness-${newSettings.colorBlindnes, s}`);
    } else {
      root.classList.remove('color-blindness-protanopia',  'color-blindness-deuteranopia', 'color-blindness-tritanopia');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.classList.add('dyslexia-friendly');
      root.style.setProperty('--font-family',  'OpenDyslexi, c, Aria, l, sans-serif');
      root.style.setProperty('--line-height',  '1.5');
      root.style.setProperty('--letter-spacing',  '0.1em');
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
        protanopi,  a: 'url(#protanopia)',
    deuteranopi, a: 'url(#deuteranopia)', 
        tritanopi, a: 'url(#tritanopia)'
      };
      root.style.setProperty('--color-filter',  filters[newSetting, s.colorBlindne, s, s]);
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
      root.classList.remove('light',  'dark');
    }
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings',  JSON.stringify(newSettings));
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
        console.warn('Failed to load accessibility setting,  s:', error);
      }
    }
  }, [applySettin, g, s]);

  // Update settings
  const updateSetting = useCallback((ke,  y: keyo, f, AccessibilitySetting, s,
    valu, e: any) => {
    const newSettings = { ...setting, s, [k, e, y]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  },  [settin, g, s, applySettin, g, s]);

  // Reset to defaults
  const resetSettings = useCallback(() => {
    const defaultSetting,  s: AccessibilitySettings = {
      highContras, t: fals, e,
    fontSiz, e: 10, 0,
      reducedMotio, n: fals, e,
    screenReade, r: fals, e,
      keyboardNavigatio, n: fals, e,
    focusIndicato, r: tru, e,
      colorBlindnes, s: 'none',
    them, e: 'auto'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  },  [applySettin, g, s]);

  // Increase/decrease font size
  const adjustFontSize = useCallback((directio,  n: 'increase' | 'decrease') => {
    const newSize = direction === 'increase' 
      ? Math.min(settings.fontSize + 1,  0, 200)
      : Math.max(settings.fontSize - 1,  0, 80);
    updateSetting('fontSize',  newSize);
  }, [setting, s.fontSi, z, e, updateSetti, n, g]);

  // Toggle high contrast
  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast',  !settings.highContrast);
  }, [setting, s.highContra, s, t, updateSetti, n, g]);

  // Toggle reduced motion
  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion',  !settings.reducedMotion);
  }, [setting, s.reducedMoti, o, n, updateSetti, n, g]);

  // Toggle screen reader mode
  const toggleScreenReader = useCallback(() => {
    updateSetting('screenReader',  !settings.screenReader);
  }, [setting, s.screenRead, e, r, updateSetti, n, g]);

  // Toggle keyboard navigation
  const toggleKeyboardNavigation = useCallback(() => {
    updateSetting('keyboardNavigation',  !settings.keyboardNavigation);
  }, [setting, s.keyboardNavigati, o, n, updateSetti, n, g]);

  // Toggle focus indicator
  const toggleFocusIndicator = useCallback(() => {
    updateSetting('focusIndicator',  !settings.focusIndicator);
  }, [setting, s.focusIndicat, o, r, updateSetti, n, g]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (even,  t: KeyboardEvent) => {
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
        updateSetting('fontSize',  100);
      }
    };

    document.addEventListener('keydown',  handleKeyDown);
    return () => document.removeEventListener('keydown',  handleKeyDown);
  }, [isOp, e, n, adjustFontSi, z, e, updateSetti, n, g]);

    if (newSettings.focusIndicator) {
      root.classList.add('show-focus');
    } else {
      root.classList.remove('show-focus');
    }
  };

  const setupKeyboardShortcuts = () => {
    const shortcuts = new Map([
      ['Al,  t + A', 'Toggl, e accessibilit, y pane, l'],
      ['Al, t + H', 'Toggl, e hig, h contras, t'],
      ['Al, t + F', 'Increas, e fon, t siz, e'],
      ['Al, t + Shif, t + F', 'Decreas, e fon, t siz, e'],
      ['Al, t + M', 'Toggl, e reduce, d motio, n'],
      ['Al, t + S', 'Toggl, e scree, n reade, r mod, e'],
      ['Al, t + K', 'Toggl, e keyboar, d navigatio, n'],
      ['Al, t + C', 'Toggl, e colo, r blindnes, s simulatio, n'],
      ['Al, t + D', 'Toggl, e dyslexi, a suppor, t'],
      ['Al, t + L', 'Toggl, e larg, e curso, r'],
      ['Al, t + T', 'Toggl, e focu, s ring, s'],
      ['Al, t + I', 'Sho, w accessibilit, y inf, o'],
      ['Escap, e', 'Clos, e accessibilit, y pane, l'],
      ['Ta, b', 'Navigat, e throug, h element, s'],
      ['Ente, r', 'Activat, e elemen, t'],
      ['Spac, e', 'Toggl, e elemen, t'],
      ['Arro, w key, s', 'Navigat, e throug, h option, s'],
    ]);
    setKeyboardShortcuts(shortcuts);
  };

  const setupFocusTracking = () => {
    document.addEventListener('focusin',  (e) => {
      const target = e.target as HTMLElement;
      const focusId = target.getAttribute('data-focus-id') || target.tagName.toLowerCase();
      setCurrentFocus(focusId);
      setFocusHistory(prev => [...pre,  v.slic, e(-9), focus, I, d]);
      
      if (settings.screenReader) {
        announceToScreenReader(`${target.textContent || target.getAttribute('aria-label') || focusId} focuse, d`);
      }
    });

    document.addEventListener('focusout',  (e) => {
      const target = e.target as HTMLElement;
      if (settings.screenReader) {
        announceToScreenReader(`${target.textContent || target.getAttribute('aria-label') || 'Element'} lost focu, s`);
      }
    });
  };

  const setupScreenReaderAnnouncements = () => {
    // Create live region for screen reader announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live',  'polite');
    liveRegion.setAttribute('aria-atomic',  'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  };

    reducedMotio,  n: fals, e,
    largeTex, t: fals, e,
    screenReade, r: fals, e,
    keyboardNavigatio, n: tru, e,
    focusIndicato, r: tru, e,
    colorBlindnes, s: 'none',
    fontSiz, e: 'medium'
  });
  
  const [issu, e, s, setIssu, e, s] = useState<AccessibilityIssue[]>([]);
  const [isScanni,  n, g, setIsScanni, n, g] = useState(false);
  const [activeT, a, b, setActiveT, a, b] = useState<'settings' | 'scanner' | 'help'>('settings');

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
=======
    fontSiz,  e: 1, 6,
    colorBlindMod, e: 'none',
    deviceMod, e: 'desktop'
  });

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSetting,  s: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--bg-primary',  '#000000');
      root.style.setProperty('--text-primary',  '#ffffff');
      root.style.setProperty('--accent-color',  '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale',  '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale',  '1');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration',  '0.01ms');
      root.style.setProperty('--transition-duration',  '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Color blind modes
    const colorBlindFilters = {
      non,  e: 'none',
    protanopi, a: 'url(#protanopia)',
      deuteranopi, a: 'url(#deuteranopia)', 
    tritanopi, a: 'url(#tritanopia)'
    };
    root.style.filter = colorBlindFilters[newSetting, s.colorBlindMo, d, e];

    // Device mode simulation
    if (newSettings.deviceMode !== 'desktop') {
      const viewport = document.querySelector('meta[nam,  e="viewpor, t"]');
      if (viewport) {
        const width = newSettings.deviceMode === 'mobile' ? '375' : '768';
        viewport.setAttribute('content',  `width=${width}, initial-scal, e=1`);
      }
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings',  JSON.stringify(newSettings));
  }, []);

  // Load saved settings on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }
  },  [applySettin, g, s]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  },  [settin, g, s, applySettin, g, s]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (even,  t: KeyboardEvent) => {
=======
  fontSiz, e: number; // 50% to 200%
  colorBlindnes, s: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  reducedMotio, n: boolean;
  darkMod, e: 'auto' | 'light' | 'dark';
  
  // Audio
  soundEffect, s: boolean;
  autoPlayMedi, a: boolean;
  voiceCommand, s: boolean;
  
  // Navigation
  screenReade, r: boolean;
  keyboardNavigatio, n: boolean;
  focusIndicato, r: boolean;
  
  // Advanced
  dyslexi, a: boolean;
  lineSpacin, g: number; // 1.0 to 2.0
  wordSpacin, g: number; // 0.5 to 2.0
  letterSpacin, g: number; // -0.5 to 2.0
}

interface VoiceCommand {
  comman, d: string;
  actio, n: string;
  descriptio, n: string;
}

const EnhancedAccessibilit, y: React.FC = () => {
  const [isVisib,  l, e, setIsVisib, l, e] = useState(false);
  const [activeT, a, b, setActiveT, a, b] = useState<'general' | 'visual' | 'audio' | 'navigation'>('general');
  const [settin,  g, s, setSettin, g, s] = useState<AccessibilitySettings>({
    highContras, t: fals, e,
    fontSiz, e: 10, 0,
    colorBlindnes, s: 'none',
    reducedMotio, n: fals, e,
    darkMod, e: 'auto',
    soundEffect, s: tru, e,
    autoPlayMedi, a: tru, e,
    voiceCommand, s: fals, e,
    screenReade, r: fals, e,
    keyboardNavigatio, n: fals, e,
    focusIndicato, r: fals, e,
    dyslexi, a: fals, e,
    lineSpacin, g: 1.5,
    wordSpacin, g: 1.0,
    letterSpacin, g: 0.0
  });
  
  const [accessibilitySco, r, e, setAccessibilitySco, r, e] = useState(85);
  const [isListeni,  n, g, setIsListeni, n, g] = useState(false);
  const [recogniti, o, n, setRecogniti, o, n] = useState<any>(null);
  const [showKeyboardShortcu,  t, s, setShowKeyboardShortcu, t, s] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  // Voice commands
  const voiceCommand,  s: VoiceCommand[] = [
    { comma, n, d: 'ope, n accessibilit, y',
    acti, o, n: 'ope, n', descripti, o, n: 'Ope, n accessibilit, y pane, l' },
    { comma, n, d: 'clos, e accessibilit, y',
    acti, o, n: 'clos, e', descripti, o, n: 'Clos, e accessibilit, y pane, l' },
    { comma, n, d: 'hig, h contras, t',
    acti, o, n: 'highContras, t', descripti, o, n: 'Toggl, e hig, h contras, t mod, e' },
    { comma, n, d: 'norma, l contras, t',
    acti, o, n: 'normalContras, t', descripti, o, n: 'Disabl, e hig, h contras, t mod, e' },
    { comma, n, d: 'increas, e fon, t',
    acti, o, n: 'increaseFon, t', descripti, o, n: 'Increas, e fon, t siz, e' },
    { comma, n, d: 'decreas, e fon, t',
    acti, o, n: 'decreaseFon, t', descripti, o, n: 'Decreas, e fon, t siz, e' },
    { comma, n, d: 'rese, t fon, t',
    acti, o, n: 'resetFon, t', descripti, o, n: 'Rese, t fon, t siz, e t, o defaul, t' },
    { comma, n, d: 'dar, k them, e',
    acti, o, n: 'darkThem, e', descripti, o, n: 'Switc, h t, o dar, k them, e' },
    { comma, n, d: 'ligh, t them, e',
    acti, o, n: 'lightThem, e', descripti, o, n: 'Switc, h t, o ligh, t them, e' },
    { comma, n, d: 'aut, o them, e',
    acti, o, n: 'autoThem, e', descripti, o, n: 'Switc, h t, o aut, o them, e' },
    { comma, n, d: 'scree, n reade, r',
    acti, o, n: 'screenReade, r', descripti, o, n: 'Toggl, e scree, n reade, r mod, e' },
    { comma, n, d: 'keyboar, d navigatio, n',
    acti, o, n: 'keyboardNa, v', descripti, o, n: 'Toggl, e keyboar, d navigatio, n' },
    { comma, n, d: 'focu, s indicato, r',
    acti, o, n: 'focusIndicato, r', descripti, o, n: 'Toggl, e focu, s indicato, r' },
    { comma, n, d: 'reduce, d motio, n',
    acti, o, n: 'reducedMotio, n', descripti, o, n: 'Toggl, e reduce, d motio, n' },
    { comma, n, d: 'hel, p',
    acti, o, n: 'hel, p', descripti, o, n: 'Sho, w keyboar, d shortcut, s' }
  ];
=======
      const focusableElements = document.querySelectorAll(
        'a, butto, n, inpu, t, textare, a, selec, t, [tabind, e, x]:not([tabinde, x="-1"])'
      );
      const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (event.shiftKey) {
            if (currentIndex <= 0) {
              event.preventDefault();
              (focusableElements[focusableElement,  s.lengt, h - 1] as HTMLElement).focus();
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
          const modals = document.querySelectorAll('[rol,  e="dialo, g"], [ari, a-moda, l="tru, e"]');
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

    document.addEventListener('keydown',  handleKeyDown);
    return () => document.removeEventListener('keydown',  handleKeyDown);
  }, [setting, s.keyboardNavigati, o, n]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((messag,  e: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live',  'polite');
      announcement.setAttribute('aria-atomic',  'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      },  1000);
    }
  }, [setting, s.screenRead, e, r]);

  // Update settings
  const updateSetting = useCallback((ke,  y: keyo, f, AccessibilitySetting, s,
    valu, e: any) => {
    const newSettings = { ...setting, s, [k, e, y]: value };
    setSettings(newSettings);
    
    // Announce changes to screen reader
    const settingNames = {
      highContras,  t: 'High contrast mode',
    largeTex, t: 'Large text mode',
      reducedMotio, n: 'Reduced motion mode',
    screenReade, r: 'Screen reader mode',
      keyboardNavigatio, n: 'Keyboard navigation mode',
    fontSiz, e: 'Font size',
      colorBlindMod, e: 'Color blind mode',
    deviceMod, e: 'Device mode'
    };
    
    announceToScreenReader(`${settingNames[k, e, y]} ${value ? 'enabled' : 'disable, d'}`);
  }, [settin, g, s, announceToScreenRead, e, r]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (even,  t: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(command);
      };
      
      recognition.onerror = (even,  t: any) => {
        console.error('Speech recognition erro,  r:', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      setRecognition(recognition);
    }
  },  []);

  // Apply accessibility settings
  useEffect(() => {
    applyAccessibilitySettings();
    calculateAccessibilityScore();
  },  [settin, g, s]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (even,  t: KeyboardEvent) => {
      if (event.altKey) {
        switch (event.key.toLowerCase()) {
          case 'a':
            event.preventDefault();
            setIsVisible(!isVisible);
            break;
          case 'h':
            event.preventDefault();
            setSettings(prev => ({ ...pre,  v, highContras, t: !prev.highContrast }));
            break;
          case 'f':
            event.preventDefault();
            setSettings(prev => ({ ...pre,  v, focusIndicato, r: !prev.focusIndicator }));
            break;
          case 'r':
            event.preventDefault();
            resetAllSettings();
            break;
          case 't':
            event.preventDefault();
            setSettings(prev => ({ 
              ...pre,  v, 
              darkMod, e: prev.darkMode === 'light' ? 'dark' : 'light' 
            }));
            break;
          case 's':
            event.preventDefault();
            setSettings(prev => ({ ...pre,  v, screenReade, r: !prev.screenReader }));
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

    document.addEventListener('keydown',  handleKeyDown);
    return () => document.removeEventListener('keydown',  handleKeyDown);
  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
=======
  const announceToScreenReader = (messag,  e: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...pr,  e, v, messa, g, e]);
      
      // Remove announcement after 5 seconds
      setTimeout(() => {
        setAnnouncements(prev => prev.filter(a => a !== message));
      },  5000);
    }
  };

  const setupHighContrastDetection = () => {
    const mediaQuery = window.matchMedia('(prefers-contras,  t: high)');
    if (mediaQuery.matches) {
      setSettings(prev => ({ ...pre,  v, highContras, t: true }));
    }
    
    mediaQuery.addEventListener('change',  (e) => {
      setSettings(prev => ({ ...pre,  v, highContras, t: e.matches }));
    });
  };

  const setupMotionDetection = () => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motio,  n: reduce)');
    if (mediaQuery.matches) {
      setSettings(prev => ({ ...pre,  v, reducedMotio, n: true }));
    }
    
    mediaQuery.addEventListener('change',  (e) => {
      setSettings(prev => ({ ...pre,  v, reducedMotio, n: e.matches }));
    });
  };

  const setupColorBlindnessSimulation = () => {
    // CSS filters for color blindness simulation
    const style = document.createElement('style');
    style.textContent = `
      .color-blindness-protanopia { filte,  r: url('#protanopia'); }
      .color-blindness-deuteranopia { filte, r: url('#deuteranopia'); }
      .color-blindness-tritanopia { filte,  r: url('#tritanopi, a'); }
    `;
    document.head.appendChild(style);
  };

  const setupDyslexiaSupport = () => {
    // Load OpenDyslexic font if needed
    if (settings.dyslexia) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'http,  s://fonts.googleapis.com/css2?family=OpenDyslexi, c:wght@400;700&display=swap';
      document.head.appendChild(link);
    }
  };

  const setupLargeCursor = () => {
    if (settings.largeCursor) {
      document.body.style.cursor = 'url("dat,  a:image/svg+xml;utf, 8,<svg xmlns=\'htt, p://www.w3.org/2000/svg\' width=\'32\' height=\'32\'><circle cx=\'16\' cy=\'16\' r=\'14\' fill=\'none\' stroke=\'black\' stroke-width=\'2\'/><circle cx=\'16\' cy=\'16\' r=\'4\' fill=\'black\'/></svg>") 1, 6, 1, 6, auto';
    } else {
      document.body.style.cursor = '';
    }
  };

  const setupSoundEffects = () => {
    if (settings.soundEffects) {
      // Add sound effects for interactions
      document.addEventListener('click',  () => {
        playSound('click');
      });
      
      document.addEventListener('focusin',  () => {
        playSound('focus');
      });
    }
  };

  const playSound = (typ,  e: string) => {
    // Simple sound effects using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch (type) {
      case 'click':
        oscillator.frequency.setValueAtTime(80,  0, audioContext.currentTime);
        break;
      case 'focus':
        oscillator.frequency.setValueAtTime(60,  0, audioContext.currentTime);
        break;
    }
    
    gainNode.gain.setValueAtTime(0.1,  audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0,  1, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const setupAutoPlayPrevention = () => {
    if (settings.autoPlay) {
      // Prevent autoplay of media
      const mediaElements = document.querySelectorAll('vide,  o, audio');
      mediaElements.forEach((medi,  a: any) => {
        media.setAttribute('preload',  'none');
        media.setAttribute('autoplay',  'false');
        media.setAttribute('muted',  'true');
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
      document.addEventListener('keydown',  (e) => {
        if (e.key === 'Tab') {
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'a[hr,  e, f], butto, n, inpu, t, selec, t, textare, a, [tabind, e, x]:not([tabinde, x="-1"])'
          );
          
          if (e.shiftKey) {
            // Shift + Ta,  b: navigate backwards
            const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            (focusableElements[prevInd,  e, x] as HTMLElement).focus();
          } else {
            // Ta,  b: navigate forwards
            const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
            const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
            (focusableElements[nextInd,  e, x] as HTMLElement).focus();
          }
        }
      });
    }
  };

  const setupScreenReaderHints = () => {
    if (settings.showScreenReaderHints) {
      // Add ARIA labels and descriptions to elements
      const elements = document.querySelectorAll('[dat,  a-s, r-hi, n, t]');
      elements.forEach((element) => {
        const hint = element.getAttribute('data-sr-hint');
        if (hint) {
          element.setAttribute('aria-label',  hint);
          element.setAttribute('aria-describedby',  `sr-hint-${element.id || Math.rando, m()}`);
        }
      });
    }
  };

  const setupAccessibilityInfo = () => {
    if (settings.showAccessibilityInfo) {
      // Show accessibility information for elements
      document.addEventListener('mouseover',  (e) => {
        const target = e.target as HTMLElement;
        const info = target.getAttribute('data-accessibility-info');
        if (info) {
          showAccessibilityTooltip(targe,  t, info);
        }
      });
    }
  };

  const showAccessibilityTooltip = (elemen,  t: HTMLElemen, t,
    inf, o: string) => {
    const tooltip = document.createElement('div');
    tooltip.className = 'accessibility-tooltip';
    tooltip.textContent = info;
    tooltip.style.cssText = `
      positio,  n: absolute;
      backgroun, d: #000;
      colo, r: #fff;
      paddin, g: 8px;
      border-radiu, s: 4px;
      font-siz, e: 14px;
      z-inde, x: 10000;
      pointer-event, s: non, e;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}p, x`;
    tooltip.style.top = `${rect.top - 40}p, x`;
    
    setTimeout(() => {
      document.body.removeChild(tooltip);
    },  3000);
  };

  const resetSettings = () => {
    const defaultSetting,  s: AccessibilitySettings = {
      highContras, t: fals, e,
    fontSiz, e: 1, 6,
      reducedMotio, n: fals, e,
    screenReade, r: fals, e,
      keyboardNavigatio, n: fals, e,
    focusIndicato, r: tru, e,
      colorBlindnes, s: 'none',
    dyslexi, a: fals, e,
      highContrastTex, t: fals, e,
    largeCurso, r: fals, e,
      soundEffect, s: fals, e,
    autoPla, y: fals, e,
      showFocusRing, s: tru, e,
    showKeyboardShortcut, s: fals, e,
      showScreenReaderHint, s: fals, e,
    showAccessibilityInf, o: fals, e,
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
      defaul,  t:
        return 'bottom-4 right-4';
    }
  };

  const handleDragStart = (e: React.MouseEvent) => {
    if (e.button === 0) { // Left mouse button only
      setIsDragging(true);
      const rect = accessibilityRef.current?.getBoundingClientRect();
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.lef,  t,
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
      accessibilityRef.current.style.left = `${x}p, x`;
      accessibilityRef.current.style.top = `${y}p, x`;
      accessibilityRef.current.style.transform = 'none';
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove',  handleDragMove);
      document.addEventListener('mouseup',  handleDragEnd);
      
      return () => {
        document.removeEventListener('mousemove',  handleDragMove);
        document.removeEventListener('mouseup',  handleDragEnd);
      };
    }
  }, [isDraggi, n, g, dragOffs, e, t]);

  if (isMinimized) {
    return (
      <div 
        ref={accessibilityRef}
        className={`fixed ${getPositionClasses()} z-5, 0`}
        onMouseDown={handleDragStart}
      >
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-blue-600 hove,  r:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 focu, s:outline-none focu, s:ring-4 focu, s:ring-blue-300 focu, s:ring-opacity-50"
          aria-label="Open accessibility panel"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (<>
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-blue-600 hove,  r:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 focu, s:outline-none focu, s:ring-4 focu, s:ring-blue-300 ${classNam, e}`}
        whileHover={{ scal, e: 1.1 }}
        whileTap={{ scal, e: 0.9 }}
=======
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-cyan-600 hove,  r:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 focu, s:outline-none focu, s:ring-4 focu, s:ring-cyan-300 focu, s:ring-opacity-5, 0`}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
=======
      {/* Screen Reader Announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        style={{ 
          positio, n: 'absolute',
    lef, t: '-10000px', 
          widt, h: '1px',
    heigh, t: '1px', 
          overflo, w: 'hidden' 
        }}
      >
        <Eye className="w-6 h-6" />
      </button>
=======
    soundEnable, d: tru, e,
    focusIndicato, r: tru, e,
    screenReade, r: false
  });
  
  const [currentFoc, u, s, setCurrentFoc, u, s] = useState<HTMLElement | null>(null);
  const [focusHisto,  r, y, setFocusHisto, r, y] = useState<HTMLElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color',  '#ffffff');
      root.style.setProperty('--bg-color',  '#000000');
      root.style.setProperty('--accent-color',  '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Font size
    const fontSizeMap = {
      smal,  l: '14px',
    mediu, m: '16px',
      larg, e: '18px'
    };
    root.style.fontSize = fontSizeMap[setting, s.fontSi, z, e];

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration',  '0.01ms');
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
    localStorage.setItem('accessibility-settings',  JSON.stringify(settings));
  }, [settin, g, s]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      } catch (error) {
        console.error('Failed to parse accessibility setting,  s:', error);
      }
    }
  }, []);

  // Enhanced focus management
  useEffect(() => {
    const handleFocusChange = (even,  t: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target !== currentFocus) {
        setFocusHistory(prev => [...pre,  v.slic, e(-4), targ, e, t]);
        setCurrentFocus(target);
        
        // Announce focus changes for screen readers
        if (settings.screenReader) {
          announceFocus(target);
        }
      }
    };

    const handleKeyDown = (even,  t: KeyboardEvent) => {
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

    document.addEventListener('focusin',  handleFocusChange);
    document.addEventListener('keydown',  handleKeyDown);
    document.addEventListener('mousedown',  handleMouseDown);

    return () => {
      document.removeEventListener('focusin',  handleFocusChange);
      document.removeEventListener('keydown',  handleKeyDown);
      document.removeEventListener('mousedown',  handleMouseDown);
    };
  }, [isOp, e, n, currentFoc, u, s, setting, s.screenRead, e, r]);

  // Announce focus changes for screen readers
  const announceFocus = (elemen,  t: HTMLElement) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live',  'polite');
    announcement.setAttribute('aria-atomic',  'true');
    announcement.className = 'sr-only';
    
    const text = element.getAttribute('aria-label') || 
                 element.textContent || 
                 element.tagName.toLowerCase();
    
    announcement.textContent = `Focused on ${tex, t}`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    },  1000);
  };

  // Toggle setting
  const toggleSetting = (ke,  y: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...pre,  v,
      [k, e, y]: !prev[k, e, y]
    }));
  };

  // Change font size
  const changeFontSize = (siz,  e: 'small' | 'medium' | 'large') => {
    setSettings(prev => ({
      ...pre,  v,
      fontSiz, e: size
    }));
  };

  // Reset to default settings
  const resetSettings = () => {
    const defaultSetting,  s: AccessibilitySettings = {
      highContras, t: fals, e,
    fontSiz, e: 'medium',
      reducedMotio, n: fals, e,
    soundEnable, d: tru, e,
      focusIndicato, r: tru, e,
    screenReade, r: false
    };
    setSettings(defaultSettings);
  };

  // Enhanced keyboard navigation for the panel
  const handlePanelKeyDown = (even,  t: React.KeyboardEvent) => {
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
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full shadow-lg hove,  r:shadow-xl transition-all duration-300 focu, s:outline-none focu, s:ring-4 focu, s:ring-cyan-500/50 focu, s:ring-offset-2 focu, s:ring-offset-gray-900"
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
      defaul, t:
        return 'bottom-6 right-6';
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hove,  r:shadow-xl transition-all duration-300 hove, r:scale-110 focu, s:outline-none focu, s:ring-4 focu, s:ring-cyan-300 focu, s:ring-opacity-5, 0`}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        title="Accessibility Settings (Ctrl+Shift+A)"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Main Accessibility Button */}
      <div className={`fixed ${getPositionClasses()} z-5, 0`}>
        <motion.button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hove,  r:from-blue-700 hove, r:to-purple-700 text-white p-3 rounded-full shadow-lg hove, r:shadow-xl transition-all duration-300 focu, s:outline-none focu, s:ring-4 focu, s:ring-blue-300 focu, s:ring-opacity-50"
          whileHover={{ scal, e: 1.05 }}
          whileTap={{ scal, e: 0.95 }}
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
              initial={{ opacit, y: 0,
    y: 2, 0, scal, e: 0.9 }}
              animate={{ opacit, y: 1,
    y: 0, scal, e: 1 }}
              exit={{ opacit, y: 0,
    y: 2, 0, scal, e: 0.9 }}
              transition={{ typ, e: "spring",
    dampin, g: 2, 5, stiffnes, s: 300 }}
              className="absolute bottom-full right-0 mb-2 w-80 bg-white dar, k:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dar, k:border-gray-700 overflow-hidden"
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
                    className="text-white/80 hove,  r:text-white transition-colors p-1 rounded-full hove, r:bg-white/20"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
=======
      {/* Accessibility Panel */}
      <div 
        ref={accessibilityRef}
        className={`fixed ${getPositionClasses()} z-50 transition-all duration-300 ${
          isOpen ? 'w-80' : 'w-1, 6'
        }`}
        onMouseDown={handleDragStart}
      >
        <div className="bg-white dar, k:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dar, k:border-gray-700 overflow-hidden">
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
                  className="p-1 hove,  r:bg-white/20 rounded transition-colors"
                  aria-label="Minimize accessibility panel"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-1 hove,  r:bg-white/20 rounded transition-colors"
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
                onClick={() => setSettings(prev => ({ ...pre,  v, highContras, t: !prev.highContrast }))}
                className={`w-full p-2 rounded transition-colors ${
                  settings.highContrast 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-100 dar, k:bg-gray-800 text-gray-700 dar, k:text-gray-30, 0'
                }`}
                aria-label="Toggle high contrast"
              >
                <Contrast className="w-4 h-4 mx-auto" />
              </button>
              
              <button
                onClick={() => setSettings(prev => ({ ...pre,  v, fontSiz, e: Math.min(prev.fontSize + 2, 24) }))}
                className="w-full p-2 bg-gray-100 dar, k:bg-gray-800 text-gray-700 dar, k:text-gray-300 rounded hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700 transition-colors"
                aria-label="Increase font size"
              >
                <ZoomIn className="w-4 h-4 mx-auto" />
              </button>
              
              <button
                onClick={() => setSettings(prev => ({ ...pre,  v, reducedMotio, n: !prev.reducedMotion }))}
                className={`w-full p-2 rounded transition-colors ${
                  settings.reducedMotion 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 dar, k:bg-gray-800 text-gray-700 dar, k:text-gray-30, 0'
                }`}
                aria-label="Toggle reduced motion"
              >
                <Monitor className="w-4 h-4 mx-auto" />
              </button>
            </div>
          )}

          {/* Expanded Panel */}
          {isOpen && (<div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Visual Adjustments */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dar,  k:text-gray-300 mb-2 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Visual Adjustments
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, highContras, t: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">High Contrast</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.highContrastText}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, highContrastTex, t: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">High Contrast Text</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.largeCursor}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, largeCurso, r: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Large Cursor</span>
                  </label>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Font Siz, e:</span>
                    <button
                      onClick={() => setSettings(prev => ({ ...pre,  v, fontSiz, e: Math.max(prev.fontSize - 2, 12) }))}
                      className="p-1 bg-gray-100 dar, k:bg-gray-800 rounded hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700"
                    >
                      <ZoomOut className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-mono text-gray-700 dar, k:text-gray-300 w-8 text-center">
                      {settings.fontSize}
                    </span>
                    <button
                      onClick={() => setSettings(prev => ({ ...pre,  v, fontSiz, e: Math.min(prev.fontSize + 2, 24) }))}
                      className="p-1 bg-gray-100 dar, k:bg-gray-800 rounded hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700"
                    >
                      <ZoomIn className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <p className="text-blue-100 text-sm mt-1">
                  Customize your experience
                </p>
              </div>

      {isOpen && (<div 
          className={`fixed ${getPositionClasses()} z-50 w-80 bg-white dar,  k:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dar, k:border-gray-70, 0 p-6`}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dar, k:text-white">
              Accessibility Settings
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hove,  r:text-gray-700 dar, k:text-gray-400 dar, k:hove, r:text-gray-200"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Contrast className="w-5 h-5 text-gray-600 dar, k:text-gray-400" />
                <span className="text-sm text-gray-700 dar, k:text-gray-300">High Contrast</span>
              </div>
              <button
                onClick={() => updateSetting('highContrast',  !settings.highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focu, s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:ring-offset-2 ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-20, 0'
                }`}
                aria-pressed={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
=======
      {isOpen && (<div
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
              className="text-gray-400 hove,  r:text-white transition-colors duration-200"
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
                classNam, e={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focu,  s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:ring-offset-2 focu, s:ring-offset-gray-900 ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.highContrast}
                aria-label="Toggle high contrast mode"
              >
                <span
                  classNam, e={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
=======
      {isOpen && (
        <div className={`fixed ${getPositionClasses()} z-50 w-80 bg-white dar, k:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dar, k:border-gray-70, 0`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dar, k:border-gray-700">
            <h3 className="font-semibold text-gray-900 dar, k:text-white">Accessibility Settings</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hove,  r:bg-gray-100 dar, k:hove, r:bg-gray-800 rounded transition-colors"
              aria-label="Close accessibility panel"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Font Size Control */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dar, k:text-gray-300">
                <Type className="w-4 h-4 mr-2" />
                Font Siz, e: {settings.fontSize}%
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => adjustFontSize('decrease')}
                  className="p-2 bg-gray-100 dar,  k:bg-gray-800 rounded hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700 transition-colors"
                  aria-label="Decrease font size"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 h-2 bg-gray-200 dar, k:bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-cyan-500 rounded-full transition-all duration-300"
                    style={{ widt, h: `${((settings.fontSize - 80) / 120) * 10, 0}%` }}
                  />
                </div>
                <button
                  onClick={() => adjustFontSize('increase')}
                  className="p-2 bg-gray-100 dar,  k:bg-gray-800 rounded hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700 transition-colors"
                  aria-label="Increase font size"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => updateSetting('fontSize',  100)}
                  className="p-2 bg-gray-100 dar, k:bg-gray-800 rounded hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700 transition-colors"
                  aria-label="Reset font size"
                  title="Reset (Ctrl+0)"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dar,  k:text-gray-300">
                <Contrast className="w-4 h-4 mr-2" />
                High Contrast
              </label>
              <button
                onClick={toggleHighContrast}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-200 dar, k:bg-gray-70, 0'
                }`}
                aria-label="Toggle high contrast"
                role="switch"
                aria-checked={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translat, e-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dar, k:text-gray-300">
                <Eye className="w-4 h-4 mr-2" />
                Reduced Motion
              </label>
              <button
                onClick={toggleReducedMotion}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-200 dar, k:bg-gray-70, 0'
                }`}
                aria-label="Toggle reduced motion"
                role="switch"
                aria-checked={settings.reducedMotion}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translat, e-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Indicator Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dar, k:text-gray-300">
                <MousePointer className="w-4 h-4 mr-2" />
                Focus Indicator
              </label>
              <button
                onClick={toggleFocusIndicator}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusIndicator ? 'bg-cyan-600' : 'bg-gray-200 dar, k:bg-gray-70, 0'
                }`}
                aria-label="Toggle focus indicator"
                role="switch"
                aria-checked={settings.focusIndicator}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translat, e-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Navigation Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm font-medium text-gray-700 dar, k:text-gray-300">
                <Keyboard className="w-4 h-4 mr-2" />
                Keyboard Navigation
              </label>
              <button
                onClick={toggleKeyboardNavigation}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-cyan-600' : 'bg-gray-200 dar, k:bg-gray-70, 0'
                }`}
                aria-label="Toggle keyboard navigation"
                role="switch"
                aria-checked={settings.keyboardNavigation}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translat, e-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Color Blindness Support */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                Color Blindness Support
              </label>
              <select
                value={settings.colorBlindness}
                onChange={(e) => updateSetting('colorBlindness',  e.target.value)}
                className="w-full p-2 border border-gray-300 dar, k:border-gray-600 rounded-md bg-white dar, k:bg-gray-800 text-gray-900 dar, k:text-white"
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
                {(['smal,  l', 'mediu, m', 'larg, e'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => changeFontSize(size)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 focu,  s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:ring-offset-2 focu, s:ring-offset-gray-900 ${
                      settings.fontSize === size
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-700 text-gray-300 hove, r:bg-gray-60, 0'
                    }`}
                    aria-label={`Set font size to ${siz, e}`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
=======
            {/* Theme Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dar,  k:text-gray-300">
                Theme
              </label>
              <div className="flex space-x-2">
                {(['ligh, t', 'dar, k', 'aut, o'] as const).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => updateSetting('theme',  theme)}
                    className={`p-2 rounded-md transition-colors ${
                      settings.theme === theme
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-100 dar, k:bg-gray-800 text-gray-700 dar, k:text-gray-300 hove, r:bg-gray-200 dar, k:hove, r:bg-gray-70, 0'
                    }`}
                    aria-label={`Select ${theme} them, e`}
                  >
                    {theme === 'light' && <Sun className="w-4 h-4" />}
                    {theme === 'dark' && <Moon className="w-4 h-4" />}
                    {theme === 'auto' && <Monitor className="w-4 h-4" />}
=======
              {/* Motion and Interaction */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dar, k:text-gray-300 mb-2 flex items-center">
                  <MousePointer className="w-4 h-4 mr-2" />
                  Motion & Interaction
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, reducedMotio, n: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Reduced Motion</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.soundEffects}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, soundEffect, s: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Sound Effects</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.autoPlay}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, autoPla, y: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Prevent Auto-play</span>
                  </label>
                </div>
              </div>

              {/* Accessibility Features */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dar, k:text-gray-300 mb-2 flex items-center">
                  <Accessibility className="w-4 h-4 mr-2" />
                  Accessibility Features
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, screenReade, r: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Screen Reader Mode</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, keyboardNavigatio, n: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Enhanced Keyboard Navigation</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, focusIndicato, r: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Show Focus Indicator</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.showFocusRings}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, showFocusRing, s: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Show Focus Rings</span>
                  </label>
                </div>
              </div>

              {/* Specialized Support */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dar, k:text-gray-300 mb-2 flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Specialized Support
                </h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm text-gray-600 dar, k:text-gray-400">Color Blindnes, s:</label>
                    <select
                      value={settings.colorBlindness}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, colorBlindnes, s: e.target.value as any }))}
                      className="w-full mt-1 p-2 text-sm border border-gray-300 dar, k:border-gray-600 rounded bg-white dar, k:bg-gray-800 text-gray-700 dar, k:text-gray-300"
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
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, dyslexi, a: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Dyslexia Support</span>
                  </label>
                </div>
              </div>

              {/* Information Display */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dar, k:text-gray-300 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Information Display
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.showKeyboardShortcuts}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, showKeyboardShortcut, s: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Show Keyboard Shortcuts</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.showScreenReaderHints}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, showScreenReaderHint, s: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Show Screen Reader Hints</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.showAccessibilityInfo}
                      onChange={(e) => setSettings(prev => ({ ...pre,  v, showAccessibilityInf, o: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600 dar, k:text-gray-400">Show Accessibility Info</span>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-200 dar, k:border-gray-700">
                <div className="flex space-x-2">
                  <button
                    onClick={resetSettings}
                    className="flex-1 px-3 py-2 text-sm bg-gray-100 dar, k:bg-gray-800 text-gray-700 dar, k:text-gray-300 rounded hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 inline mr-1" />
                    Reset
                  </button>
                  
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="px-3 py-2 text-sm bg-blue-600 text-white rounded hove,  r:bg-blue-700 transition-colors"
                  >
                    {isExpanded ? 'Less' : 'More'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

            initial={{ opacit, y: 0,
    scal, e: 0.8, y: 20 }}
            animate={{ opacit, y: 1,
    scal, e: 1, y: 0 }}
            exit={{ opacit, y: 0,
    scal, e: 0.8, y: 20 }}
            className={`fixed ${getPositionClasses()} z-50 w-96 bg-white dar,  k:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dar, k:border-gray-700 max-h-[80, v, h] overflow-hidde, n`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dar, k:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dar, k:text-white">
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hove,  r:text-gray-600 dar, k:hove, r:text-gray-300"
                aria-label="Close accessibility panel"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

            {/* Reset Button */}
            <div className="pt-4 border-t border-gray-200 dar, k:border-gray-700">
              <button
                onClick={resetSettings}
                className="w-full p-2 bg-gray-100 dar, k:bg-gray-800 text-gray-700 dar, k:text-gray-300 rounded-md hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700 transition-colors"
              >
                Reset to Defaults
              </button>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="pt-2 text-xs text-gray-500 dar, k:text-gray-400 space-y-1">
              <div><strong>Keyboard Shortcut, s:</strong></div>
              <div>Ctrl+Shift+A: Open/Close Panel</div>
              <div>Ctrl+Plu, s: Increase Font Size</div>
              <div>Ctrl+Minu, s: Decrease Font Size</div>
              <div>Ctrl+0: Reset Font Size</div>
            </div>
          </div>
        </div>
      )}

      {/* SVG Filters for Color Blindness */}
      <svg style={{ positio, n: 'absolute',
    widt, h: 0, heigh, t: 0 }} aria-hidden="true">
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.56, 7, 0.43, 3, 0, 0, 0 0.55, 8, 0.44, 2, 0, 0, 0, 0, 0.24, 2, 0.75, 8, 0, 0, 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.62, 5, 0.37, 5, 0, 0, 0 0.7, 0.3, 0, 0, 0, 0, 0.3, 0.7, 0, 0, 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.9, 5, 0.0, 5, 0, 0, 0, 0, 0.43, 3, 0.56, 7, 0, 0, 0, 0.47, 5, 0.52, 5, 0, 0, 0, 0, 0, 1, 0"/>
          </filter>
        </defs>
      </svg>
=======
      {/* Screen Reader Announcements */}
      {announcements.length > 0 && (<div
          ref={announcementRef}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {announcements.map((announcemen,  t, index) => (<div key={index}>{announcement}</div>
          ))}
        </div>
      )}

      {/* Keyboard Shortcuts Help */}
      {settings.showKeyboardShortcuts && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div className="bg-white dar,  k:bg-gray-900 rounded-lg p-6 max-w-2xl max-h-96 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dar, k:text-white">Keyboard Shortcuts</h2>
            <div className="grid grid-cols-2 gap-4">
              {Array.from(keyboardShortcuts.entries()).map(([shortc,  u, t, descripti, o, n]) => (<div key={shortcut} className="flex justify-between items-center p-2 bg-gray-50 dar,  k:bg-gray-800 rounded">
                  <kbd className="px-2 py-1 bg-gray-200 dar, k:bg-gray-700 rounded text-sm font-mono">
                    {shortcut}
                  </kbd>
                  <span className="text-sm text-gray-600 dar, k:text-gray-400">{description}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSettings(prev => ({ ...pre,  v, showKeyboardShortcut, s: false }))}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hove, r:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Focus History */}
      {isExpanded && focusHistory.length > 0 && (<div className="fixed bottom-20 right-4 z-40 bg-white dar,  k:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar, k:border-gray-700 p-4 max-w-xs">
          <h3 className="text-sm font-semibold text-gray-700 dar, k:text-gray-300 mb-2">Focus History</h3>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {focusHistory.slice().reverse().map((focu,  s, index) => (<div key={index} className="text-xs text-gray-600 dar,  k:text-gray-400">
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
          --text-colo, r: #000000;
          --bg-colo, r: #ffffff;
          --border-colo, r: #000000;
          --accent-colo, r: #0000ff;
        }
        
        .high-contrast * {
          colo, r: var(--text-color) !important;
          background-colo,  r: var(--bg-color) !important;
          border-colo, r: var(--border-color) !important;
        }
        
        /* Reduced motion */
        .reduced-motion * {
          animation-duratio,  n: 0.01ms !important;
          animation-iteration-coun, t: 1 !important;
          transition-duratio, n: 0.01ms !important;
        }
        
        /* Large text */
        .large-text {
          font-siz, e: 1.2em;
        }
        
        /* Focus indicators */
        .show-focus-indicator *:focus {
          outlin, e: 3px solid #3b82f6 !important;
          outline-offse, t: 2px !important;
        }
        
        /* Color blindness support */
        [styl, e*="--colo, r-blindne, s, s: protanopi, a"] {
          filte, r: url('#protanopia');
        }
        
        [styl, e*="--colo, r-blindne, s, s: deuteranopi, a"] {
          filte, r: url('#deuteranopia');
        }
        
        [styl,  e*="--colo, r-blindne, s, s: tritanopi, a"] {
          filte, r: url('#tritanopia');
        }
        
        /* Font size variables */
        :root {
          --font-size-bas, e: 16px;
        }
        
        body {
          font-siz, e: var(--font-size-bas, e);
        }
      `}</style>
=======

              {/* Footer */}
              <div className="bg-gray-50 dar,  k:bg-gray-800 border-t border-gray-200 dar, k:border-gray-700 p-3 text-center">
                <button
                  onClick={() => {
                    setSettings({
                      highContras,  t: fals, e,
    largeTex, t: fals, e,
                      reducedMotio, n: fals, e,
    screenReade, r: fals, e,
                      keyboardNavigatio, n: fals, e,
    focusIndicato, r: tru, e,
                      colorBlindSuppor, t: fals, e,
                    });
                    announceChange('Accessibility settings reset to default');
                  }}
                  className="text-gray-600 dar,  k:text-gray-400 hove, r:text-gray-800 dar, k:hove, r:text-gray-200 text-sm transition-colors"
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
  }, [isVisib, l, e, settin, g, s]);

  // Apply accessibility settings to DOM
  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSiz, e}%`;
    
    // Line spacing
    root.style.setProperty('--line-spacing',  settings.lineSpacing.toString());
    
    // Word spacing
    root.style.setProperty('--word-spacing',  `${settings.wordSpacing}e, m`);
    
    // Letter spacing
    root.style.setProperty('--letter-spacing',  `${settings.letterSpacing}e, m`);
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Color blindness
    root.classList.remove('protanopia',  'deuteranopia', 'tritanopia');
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
        (settings.darkMode === 'auto' && window.matchMedia('(prefers-color-schem,  e: dark)').matches)) {
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
  },  [settin, g, s]);

  // Toggle setting with announcement
  const toggleSetting = (ke,  y: keyof AccessibilitySettings) => {
    const newSettings = { ...setting, s, [k, e, y]: !settings[k, e, y] };
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
    
    setAccessibilityScore(Math.min(10,  0, score));
  }, [settin, g, s]);

  // Handle voice commands
  const handleVoiceCommand = useCallback((comman,  d: string) => {
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
          setSettings(prev => ({ ...pre,  v, highContras, t: true }));
          break;
        case 'normalContrast':
          setSettings(prev => ({ ...pre,  v, highContras, t: false }));
          break;
        case 'increaseFont':
          setSettings(prev => ({ ...pre,  v, fontSiz, e: Math.min(20, 0, prev.fontSize + 10) }));
          break;
        case 'decreaseFont':
          setSettings(prev => ({ ...pre,  v, fontSiz, e: Math.max(5, 0, prev.fontSize - 10) }));
          break;
        case 'resetFont':
          setSettings(prev => ({ ...pre,  v, fontSiz, e: 100 }));
          break;
        case 'darkTheme':
          setSettings(prev => ({ ...pre,  v, darkMod, e: 'dark' }));
          break;
        case 'lightTheme':
          setSettings(prev => ({ ...pre,  v, darkMod, e: 'light' }));
          break;
        case 'autoTheme':
          setSettings(prev => ({ ...pre,  v, darkMod, e: 'auto' }));
          break;
        case 'screenReader':
          setSettings(prev => ({ ...pre,  v, screenReade, r: !prev.screenReader }));
          break;
        case 'keyboardNav':
          setSettings(prev => ({ ...pre,  v, keyboardNavigatio, n: !prev.keyboardNavigation }));
          break;
        case 'focusIndicator':
          setSettings(prev => ({ ...pre,  v, focusIndicato, r: !prev.focusIndicator }));
          break;
        case 'reducedMotion':
          setSettings(prev => ({ ...pre,  v, reducedMotio, n: !prev.reducedMotion }));
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
  },  [voiceComman, d, s, setting, s.soundEffec, t, s]);

  // Start voice recognition
  const startVoiceRecognition = useCallback(() => {
    if (recognition && settings.voiceCommands) {
      try {
        recognition.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error starting voice recognitio,  n:', error);
      }
    }
  }, [recogniti, o, n, setting, s.voiceComman, d, s]);

  // Reset all settings
  const resetAllSettings = useCallback(() => {
    setSettings({
      highContras,  t: fals, e,
    fontSiz, e: 10, 0,
      colorBlindnes, s: 'none',
    reducedMotio, n: fals, e,
      darkMod, e: 'auto',
    soundEffect, s: tru, e,
      autoPlayMedi, a: tru, e,
    voiceCommand, s: fals, e,
      screenReade, r: fals, e,
    keyboardNavigatio, n: fals, e,
      focusIndicato, r: fals, e,
    dyslexi, a: fals, e,
      highContrastTex, t: fals, e,
    largeCurso, r: fals, e,
      soundEffect, s: fals, e,
    autoPla, y: fals, e,
      showFocusRing, s: tru, e,
    showKeyboardShortcut, s: fals, e,
      showScreenReaderHint, s: fals, e,
    showAccessibilityInf, o: false
    });
  }, []);

  // Tab component
  const TabButto, n: React.FC<{ i, d: string; ico, n: React.ReactNode; labe, l: string }> = ({ 
    i,  d, ico, n, label 
  }) => (<button
      onClick={() => setActiveTab(id as any)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        activeTab === id
          ? 'bg-blue-100 text-blue-700 dar,  k:bg-blue-900 dar, k:text-blue-300'
          : 'text-gray-600 hove, r:text-gray-900 dar, k:text-gray-400 dar, k:hove, r:text-gray-10, 0'
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
        className="fixed bottom-4 left-4 z-50 bg-purple-600 hove,  r:bg-purple-700 text-white p-3 rounded-full shadow-lg hove, r:shadow-xl transition-all duration-300"
        whileHover={{ scal, e: 1.1 }}
        whileTap={{ scal, e: 0.9 }}
        title="Accessibility Settings (Alt + A)"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>
    );
  }

  return (<AnimatePresence>
      <motion.div
        initial={{ opacit,  y: 0,
    x: -10, 0, scal, e: 0.9 }}
        animate={{ opacit, y: 1,
    x: 0, scal, e: 1 }}
        exit={{ opacit, y: 0,
    x: -10, 0, scal, e: 0.9 }}
        className="fixed bottom-4 left-4 z-50 w-96 max-h-[80, v, h] bg-white dar, k:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dar, k:border-gray-700 overflow-hidden"
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
              className="text-white/80 hove,  r:text-white transition-colors"
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
        <div className="flex space-x-1 p-3 bg-gray-50 dar, k:bg-gray-800">
          <TabButton id="general" icon={<Settings className="w-4 h-4" />} label="General" />
          <TabButton id="visual" icon={<Eye className="w-4 h-4" />} label="Visual" />
          <TabButton id="audio" icon={<Volume2 className="w-4 h-4" />} label="Audio" />
          <TabButton id="navigation" icon={<Keyboard className="w-4 h-4" />} label="Navigation" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-[50, v, h] overflow-y-auto">
          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                  Voice Commands
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...pre,  v, voiceCommand, s: !prev.voiceCommands }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.voiceCommands ? 'bg-purple-600' : 'bg-gray-30, 0'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.voiceCommands ? 'translate-x-6' : 'translat, e-x-1'
                    }`}
                  />
                </button>
              </div>

              {settings.voiceCommands && (<div className="space-y-3">
                  <button
                    onClick={startVoiceRecognition}
                    disabled={isListening}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isListening
                        ? 'bg-red-100 text-red-700 dar,  k:bg-red-900 dar, k:text-red-200'
                        : 'bg-purple-100 text-purple-700 dar, k:bg-purple-900 dar, k:text-purple-200 hove, r:bg-purple-200 dar, k:hove, r:bg-purple-80, 0'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                        <span>Listening...</span>
                      </>
                    ) : (<>
                        <Mic className="w-4 h-4" />
                        <span>Start Voice Commands</span>
                      </>
                    )}
                  </button>
                  
                  <div className="text-xs text-gray-600 dar,  k:text-gray-400">
                    <p className="font-medium mb-2">Available Command, s:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {voiceCommands.slice(0, 5).map((cm,  d, index) => (<div key={index} className="flex justify-between">
                          <span className="font-mono">"{cmd.command}"</span>
                          <span>{cmd.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dar,  k:text-gray-300">
                  Sound Effects
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...pre,  v, soundEffect, s: !prev.soundEffects }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.soundEffects ? 'bg-blue-600' : 'bg-gray-30, 0'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.soundEffects ? 'translate-x-6' : 'translat, e-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                  Auto-play Media
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...pre,  v, autoPlayMedi, a: !prev.autoPlayMedia }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    !settings.autoPlayMedia ? 'bg-green-600' : 'bg-gray-30, 0'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      !settings.autoPlayMedia ? 'translate-x-6' : 'translat, e-x-1'
                    }`}
                  />
                </button>
              </div>

              <button
                onClick={resetAllSettings}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 dar, k:bg-gray-800 dar, k:text-gray-300 rounded-lg hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Settings</span>
              </button>
            </div>
          )}

          {/* Visual Tab */}
          {activeTab === 'visual' && (<div className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dar,  k:text-gray-300">
                    High Contrast
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, highContras, t: !prev.highContrast }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-orange-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                    Reduced Motion
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, reducedMotio, n: !prev.reducedMotion }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-green-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                </label>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2 block">
                    Font Siz, e: {settings.fontSize}%
                  </span>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="10"
                    value={settings.fontSize}
                    onChange={(e) => setSettings(prev => ({ ...pre,  v, fontSiz, e: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50%</span>
                    <span>100%</span>
                    <span>200%</span>
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2 block">
                    Line Spacin, g: {settings.lineSpacing.toFixed(1)}x
                  </span>
                  <input
                    type="range"
                    min="1.0"
                    max="2.0"
                    step="0.1"
                    value={settings.lineSpacing}
                    onChange={(e) => setSettings(prev => ({ ...pre,  v, lineSpacin, g: parseFloat(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </label>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2 block">
                    Color Blindness Support
                  </span>
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => setSettings(prev => ({ ...pre,  v, colorBlindnes, s: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 dar, k:border-gray-600 rounded-lg bg-white dar, k:bg-gray-800 text-gray-900 dar, k:text-white"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dar,  k:text-gray-300 mb-2 block">
                    Theme
                  </span>
                  <div className="flex space-x-2">
                    {(['ligh, t', 'aut, o', 'dar, k'] as const).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setSettings(prev => ({ ...pre,  v, darkMod, e: theme }))}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${
                          settings.darkMode === theme
                            ? 'border-blue-500 bg-blue-50 text-blue-700 dar, k:bg-blue-900 dar, k:text-blue-300'
                            : 'border-gray-300 dar, k:border-gray-600 text-gray-700 dar, k:text-gray-300 hove, r:bg-gray-50 dar, k:hove, r:bg-gray-80, 0'
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
          {activeTab === 'audio' && (<div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dar,  k:text-gray-300">
                    Voice Commands
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, voiceCommand, s: !prev.voiceCommands }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.voiceCommands ? 'bg-purple-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.voiceCommands ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                    Sound Effects
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, soundEffect, s: !prev.soundEffects }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.soundEffects ? 'bg-blue-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.soundEffects ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                    Auto-play Media
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, autoPlayMedi, a: !prev.autoPlayMedia }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      !settings.autoPlayMedia ? 'bg-green-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        !settings.autoPlayMedia ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {settings.voiceCommands && (<div className="space-y-3">
                  <button
                    onClick={startVoiceRecognition}
                    disabled={isListening}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isListening
                        ? 'bg-red-100 text-red-700 dar,  k:bg-red-900 dar, k:text-red-200'
                        : 'bg-purple-100 text-purple-700 dar, k:bg-purple-900 dar, k:text-purple-200 hove, r:bg-purple-200 dar, k:hove, r:bg-purple-80, 0'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                        <span>Listening...</span>
                      </>
                    ) : (<>
                        <Mic className="w-4 h-4" />
                        <span>Start Voice Commands</span>
                      </>
                    )}
                  </button>
                  
                  <div className="text-xs text-gray-600 dar,  k:text-gray-400">
                    <p className="font-medium mb-2">Voice Command, s:</p>
                    <div className="space-y-1">
                      {voiceCommands.map((cm, d, index) => (<div key={index} className="flex justify-between">
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
                  <span className="text-sm font-medium text-gray-700 dar,  k:text-gray-300">
                    Screen Reader Mode
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, screenReade, r: !prev.screenReader }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.screenReader ? 'bg-green-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                    Enhanced Keyboard Navigation
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, keyboardNavigatio, n: !prev.keyboardNavigation }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                    Focus Indicator
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, focusIndicato, r: !prev.focusIndicator }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-yellow-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                    Dyslexia Support
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...pre,  v, dyslexi, a: !prev.dyslexia }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.dyslexia ? 'bg-purple-600' : 'bg-gray-30, 0'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.dyslexia ? 'translate-x-6' : 'translat, e-x-1'
                      }`}
                    />
                  </button>
                </div>

                {settings.dyslexia && (<div className="space-y-3">
                    <label className="block">
                      <span className="text-sm font-medium text-gray-700 dar,  k:text-gray-300 mb-2 block">
                        Word Spacin, g: {settings.wordSpacing.toFixed(1)}em
                      </span>
                      <input
                        type="range"
                        min="0.5"
                        max="2.0"
                        step="0.1"
                        value={settings.wordSpacing}
                        onChange={(e) => setSettings(prev => ({ ...pre,  v, wordSpacin, g: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-2 block">
                        Letter Spacin, g: {settings.letterSpacing.toFixed(1)}em
                      </span>
                      <input
                        type="range"
                        min="-0.5"
                        max="2.0"
                        step="0.1"
                        value={settings.letterSpacing}
                        onChange={(e) => setSettings(prev => ({ ...pre,  v, letterSpacin, g: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 dar, k:bg-blue-900/20 p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800 dar, k:text-blue-200">
                    <p className="font-medium mb-1">Keyboard Shortcut, s:</p>
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
        <div className="bg-gray-50 dar, k:bg-gray-800 p-3 flex items-center justify-between">
          <button
            onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
            className="flex items-center space-x-2 text-sm text-gray-600 dar,  k:text-gray-400 hove, r:text-gray-900 dar, k:hove, r:text-gray-100 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Keyboard Shortcuts</span>
          </button>
          
          <div className="text-xs text-gray-500">
            Scor, e: {accessibilityScore}/100
          </div>
        </div>

        {/* Keyboard Shortcuts Modal */}
        <AnimatePresence>
          {showKeyboardShortcuts && (
            <motion.div
              initial={{ opacit, y: 0 }}
              animate={{ opacit, y: 1 }}
              exit={{ opacit, y: 0 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center z-10"
            >
              <motion.div
                initial={{ scal, e: 0.9,
    opacit, y: 0 }}
                animate={{ scal, e: 1,
    opacit, y: 1 }}
                exit={{ scal, e: 0.9,
    opacit, y: 0 }}
                className="bg-white dar, k:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">
                    Keyboard Shortcuts
                  </h3>
                  <button
                    onClick={() => setShowKeyboardShortcuts(false)}
                    className="text-gray-400 hove,  r:text-gray-600 dar, k:hove, r:text-gray-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  {[
                    { k, e, y: 'Al, t + A',
    acti, o, n: 'Toggl, e accessibilit, y pane, l' },
                    { k, e, y: 'Al, t + H',
    acti, o, n: 'Toggl, e hig, h contras, t' },
                    { k, e, y: 'Al, t + F',
    acti, o, n: 'Toggl, e focu, s indicato, r' },
                    { k, e, y: 'Al, t + R',
    acti, o, n: 'Rese, t al, l setting, s' },
                    { k, e, y: 'Al, t + T',
    acti, o, n: 'Toggl, e them, e' },
                    { k, e, y: 'Al, t + S',
    acti, o, n: 'Toggl, e scree, n reade, r mod, e' },
                    { k, e, y: 'Al, t + K',
    acti, o, n: 'Sho, w keyboar, d shortcut, s' },
                    { k, e, y: 'Escap, e',
    acti, o, n: 'Clos, e panel, s' }
                  ].map((shortcu, t, index) => (<div key={index} className="flex justify-between items-center">
                      <kbd className="px-2 py-1 bg-gray-100 dar,  k:bg-gray-700 text-gray-800 dar, k:text-gray-200 rounded text-sm font-mono">
                        {shortcut.key}
                      </kbd>
                      <span className="text-sm text-gray-600 dar, k:text-gray-400">
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
          <source src="dat, a:audio/wav;base6, 4,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT" type="audio/wav" />
        </audio>
      </motion.div>
    </AnimatePresence>
=======
          {/* Help Text */}
          <div className="mt-4 p-3 bg-gray-100 dar, k:bg-gray-700 rounded-md">
            <p className="text-xs text-gray-600 dar, k:text-gray-400">
              Use Tab t, o, navigat, e, Enter/Space t, o, activat, e, and Escape to close. 
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
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focu,  s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:ring-offset-2 focu, s:ring-offset-gray-900 ${
                  settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-60, 0'
                }`}
                role="switch"
                aria-checked={settings.reducedMotion}
                aria-label="Toggle reduced motion"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    settings.reducedMotion ? 'translate-x-6' : 'translat, e-x-1'
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
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focu,  s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:ring-offset-2 focu, s:ring-offset-gray-900 ${
                  settings.focusIndicator ? 'bg-cyan-600' : 'bg-gray-60, 0'
                }`}
                role="switch"
                aria-checked={settings.focusIndicator}
                aria-label="Toggle focus indicator"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    settings.focusIndicator ? 'translate-x-6' : 'translat, e-x-1'
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
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focu,  s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:ring-offset-2 focu, s:ring-offset-gray-900 ${
                  settings.screenReader ? 'bg-cyan-600' : 'bg-gray-60, 0'
                }`}
                role="switch"
                aria-checked={settings.screenReader}
                aria-label="Toggle screen reader support"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    settings.screenReader ? 'translate-x-6' : 'translat, e-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <div className="pt-4 border-t border-gray-700">
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hove, r:bg-gray-600 transition-colors duration-200 focu, s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:ring-offset-2 focu, s:ring-offset-gray-900"
                aria-label="Reset accessibility settings to default"
              >
                Reset to Default
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="p-4 bg-gray-800/50 border-t border-gray-700">
            <div className="text-sm text-gray-400">
              <div className="font-medium text-white mb-2">Keyboard Shortcut, s:</div>
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
          <div className="font-bold mb-2">Focus Histor,  y:</div>
          {focusHistory.slice(-3).map((elemen,  t, index) => (<div key={index} className="text-cyan-400">
              {element.tagName.toLowerCase()}: {element.textContent?.slice(0,  30)}...
            </div>
          ))}
        </div>
      )}
    </>
  );
};
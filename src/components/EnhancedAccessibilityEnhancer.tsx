import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard, 
  Mic, 
  MicOff,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Accessibility,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Zap,
  Moon,
  Sun,
  Plus,
  Minus,
  Braille,
  Shield,
  Target,
  Award,
  BarChart3,
  Palette,
  RotateCcw,
  Save,
  Loader2
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  voiceNavigation: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  dyslexiaFriendly: boolean;
  colorBlindSupport: boolean;
  focusIndicators: boolean;
  altText: boolean;
  autoRead: boolean;
  voiceControl: boolean;
  gestureControl: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  colorScheme: 'light' | 'dark' | 'high-contrast' | 'sepia' | 'custom';
  customColors: {
    background: string;
    text: string;
  };
}

interface WCAGScore {
  overall: number;
  perceivable: number;
  operable: number;
  understandable: number;
  robust: number;
}

const EnhancedAccessibilityEnhancer: React.FC<{ enabled?: boolean; showControls?: boolean }> = ({ 
  enabled = true, 
  showControls = true 
}) => {
    primary: string;
    secondary: string;
  };
}

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  category: 'vision' | 'hearing' | 'motor' | 'cognitive' | 'general';
  enabled: boolean;
  wcagLevel: 'A' | 'AA' | 'AAA';
  impact: 'high' | 'medium' | 'low';
}

export default function EnhancedAccessibilityEnhancer({ 
  enabled = true, 
  showControls = true 
}: { 
  enabled?: boolean; 
  showControls?: boolean; 
}) {
>>>>>>> pr-9693
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
<<<<<<< HEAD
    voiceNavigation: false,
    keyboardNavigation: false,
    screenReader: false,
    dyslexiaFriendly: false,
    colorBlindSupport: false,
    focusIndicators: true,
    altText: true
=======
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false,
    colorBlindSupport: false,
    dyslexiaFriendly: false,
    autoRead: false,
    voiceControl: false,
    gestureControl: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    colorScheme: 'light',
    customColors: {
      background: '#ffffff',
      text: '#000000',
      primary: '#3b82f6',
      secondary: '#64748b'
    }
>>>>>>> pr-9693
  });
  const [wcagScore, setWcagScore] = useState<WCAGScore>({
    overall: 85,
    perceivable: 90,
    operable: 85,
    understandable: 80,
    robust: 85
  });
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const [fontSize, setFontSize] = useState(16);

<<<<<<< HEAD
  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
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

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '120%';
    } else {
      root.style.fontSize = '100%';
=======
  const [features, setFeatures] = useState<AccessibilityFeature[]>([
    {
      id: 'high-contrast',
      name: 'High Contrast Mode',
      description: 'Enhances text and background contrast for better visibility',
      category: 'vision',
      enabled: false,
      wcagLevel: 'AA',
      impact: 'high'
    },
    {
      id: 'large-text',
      name: 'Large Text Support',
      description: 'Increases font sizes for better readability',
      category: 'vision',
      enabled: false,
      wcagLevel: 'AA',
      impact: 'high'
    },
    {
      id: 'reduced-motion',
      name: 'Reduced Motion',
      description: 'Reduces or eliminates animations for users with motion sensitivity',
      category: 'general',
      enabled: false,
      wcagLevel: 'A',
      impact: 'medium'
    },
    {
      id: 'screen-reader',
      name: 'Screen Reader Support',
      description: 'Enhanced compatibility with screen reading software',
      category: 'vision',
      enabled: false,
      wcagLevel: 'AA',
      impact: 'high'
    },
    {
      id: 'keyboard-navigation',
      name: 'Keyboard Navigation',
      description: 'Full keyboard accessibility for all interactive elements',
      category: 'motor',
      enabled: false,
      wcagLevel: 'A',
      impact: 'high'
    },
    {
      id: 'focus-indicators',
      name: 'Focus Indicators',
      description: 'Clear visual indicators for keyboard focus',
      category: 'vision',
      enabled: false,
      wcagLevel: 'AA',
      impact: 'medium'
    },
    {
      id: 'color-blind-support',
      name: 'Color Blind Support',
      description: 'Alternative color schemes for color vision deficiencies',
      category: 'vision',
      enabled: false,
      wcagLevel: 'AA',
      impact: 'medium'
    },
    {
      id: 'dyslexia-friendly',
      name: 'Dyslexia Friendly',
      description: 'Typography and spacing optimized for dyslexic readers',
      category: 'cognitive',
      enabled: false,
      wcagLevel: 'AAA',
      impact: 'medium'
    }
  ]);

  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
  const [wcagScore, setWcagScore] = useState({ A: 0, AA: 0, AAA: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [voiceRecognition, setVoiceRecognition] = useState<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const accessibilityRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      body.style.setProperty('--zion-bg', '#000000');
      body.style.setProperty('--zion-text', '#ffffff');
      body.style.setProperty('--zion-primary', '#ffff00');
      body.style.setProperty('--zion-secondary', '#00ffff');
    } else {
      root.classList.remove('high-contrast');
      body.style.removeProperty('--zion-bg');
      body.style.removeProperty('--zion-text');
      body.style.removeProperty('--zion-primary');
      body.style.removeProperty('--zion-secondary');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--zion-font-size', '18px');
      root.style.setProperty('--zion-line-height', '1.6');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--zion-font-size', '16px');
      root.style.setProperty('--zion-line-height', '1.5');
>>>>>>> pr-9693
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--zion-reduced-motion', 'reduce');
      document.body.classList.add('reduced-motion');
    } else {
      root.style.removeProperty('--zion-reduced-motion');
      document.body.classList.remove('reduced-motion');
    }

<<<<<<< HEAD
    // Focus indicators
    if (newSettings.focusIndicators) {
      root.style.setProperty('--focus-visible', '2px solid #0066cc');
    } else {
      root.style.removeProperty('--focus-visible');
=======
    // Custom colors
    if (newSettings.colorScheme === 'custom') {
      root.style.setProperty('--zion-custom-bg', newSettings.customColors.background);
      root.style.setProperty('--zion-custom-text', newSettings.customColors.text);
      root.style.setProperty('--zion-custom-primary', newSettings.customColors.primary);
      root.style.setProperty('--zion-custom-secondary', newSettings.customColors.secondary);
>>>>>>> pr-9693
    }

    // Dyslexia friendly
    if (newSettings.dyslexiaFriendly) {
<<<<<<< HEAD
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      root.style.lineHeight = '1.6';
      root.style.letterSpacing = '0.1em';
    } else {
      root.style.fontFamily = '';
      root.style.lineHeight = '';
      root.style.letterSpacing = '';
    }

    // Color blind support
    if (newSettings.colorBlindSupport) {
      root.classList.add('colorblind-friendly');
    } else {
      root.classList.remove('colorblind-friendly');
    }
  }, []);

  // Voice recognition setup
  useEffect(() => {
    if (!settings.voiceNavigation) return;

    let recognition: any = null;
    
    if ('webkitSpeechRecognition' in window) {
      recognition = new (window as any).webkitSpeechRecognition();
=======
      body.style.setProperty('--zion-font-family', 'OpenDyslexic, Arial, sans-serif');
      body.style.setProperty('--zion-letter-spacing', '0.12em');
      body.style.setProperty('--zion-word-spacing', '0.16em');
    } else {
      body.style.removeProperty('--zion-font-family');
      body.style.removeProperty('--zion-letter-spacing');
      body.style.removeProperty('--zion-word-spacing');
    }

    // Focus indicators
    if (newSettings.focusIndicators) {
      body.classList.add('enhanced-focus');
    } else {
      body.classList.remove('enhanced-focus');
    }

    setSettings(newSettings);
  }, []);

  // Initialize voice recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
>>>>>>> pr-9693
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

<<<<<<< HEAD
      recognition.onstart = () => {
        setIsListening(true);
        setVoiceCommand('Listening...');
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map(result => result.transcript)
          .join('');
        
        setVoiceCommand(transcript);
        processVoiceCommand(transcript);
=======
      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          setTranscript(finalTranscript);
          handleVoiceCommand(finalTranscript.toLowerCase());
        }
>>>>>>> pr-9693
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
<<<<<<< HEAD
        setVoiceCommand('Error: ' + event.error);
      };

      recognition.onend = () => {
        setIsListening(false);
        setVoiceCommand('');
      };
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [settings.voiceNavigation]);

  // Process voice commands
  const processVoiceCommand = useCallback((command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('go home') || lowerCommand.includes('navigate home')) {
      window.location.href = '/';
    } else if (lowerCommand.includes('go to services') || lowerCommand.includes('navigate services')) {
      window.location.href = '/services';
    } else if (lowerCommand.includes('go to contact') || lowerCommand.includes('navigate contact')) {
      window.location.href = '/contact';
    } else if (lowerCommand.includes('go to about') || lowerCommand.includes('navigate about')) {
      window.location.href = '/about';
    } else if (lowerCommand.includes('increase font') || lowerCommand.includes('larger text')) {
      setFontSize(prev => Math.min(prev + 2, 24));
    } else if (lowerCommand.includes('decrease font') || lowerCommand.includes('smaller text')) {
      setFontSize(prev => Math.max(prev - 2, 12));
    } else if (lowerCommand.includes('high contrast') || lowerCommand.includes('toggle contrast')) {
      setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
    } else if (lowerCommand.includes('stop listening') || lowerCommand.includes('exit voice')) {
      setIsListening(false);
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to open accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(true);
      }
      
      // Alt + H for high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
      
      // Alt + L for large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
      }
      
      // Alt + R for reduced motion
      if (event.altKey && event.key === 'r') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      }
      
      // Alt + V for voice navigation
      if (event.altKey && event.key === 'v') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, voiceNavigation: !prev.voiceNavigation }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  if (!enabled) return null;

  const getWCAGColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getWCAGStatus = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Fair';
    return 'Poor';
  };

  return (
    <>
      {/* Floating Action Button */}
      {showControls && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open Accessibility Panel"
=======
      };

      setVoiceRecognition(recognition);
    }
  }, []);

  // Handle voice commands
  const handleVoiceCommand = useCallback((command: string) => {
    if (command.includes('open') || command.includes('show')) {
      if (command.includes('accessibility') || command.includes('settings')) {
        setIsOpen(true);
      }
    } else if (command.includes('close') || command.includes('hide')) {
      setIsOpen(false);
    } else if (command.includes('high contrast')) {
      toggleFeature('high-contrast');
    } else if (command.includes('large text')) {
      toggleFeature('large-text');
    } else if (command.includes('reduced motion')) {
      toggleFeature('reduced-motion');
    }
  }, []);

  // Toggle accessibility features
  const toggleFeature = useCallback((featureId: string) => {
    setFeatures(prev => prev.map(f => 
      f.id === featureId ? { ...f, enabled: !f.enabled } : f
    ));

    // Update active features
    setActiveFeatures(prev => {
      if (prev.includes(featureId)) {
        return prev.filter(id => id !== featureId);
      } else {
        return [...prev, featureId];
      }
    });

    // Apply feature-specific settings
    const feature = features.find(f => f.id === featureId);
    if (feature) {
      const newSettings = { ...settings };
      
      switch (featureId) {
        case 'high-contrast':
          newSettings.highContrast = !newSettings.highContrast;
          break;
        case 'large-text':
          newSettings.largeText = !newSettings.largeText;
          break;
        case 'reduced-motion':
          newSettings.reducedMotion = !newSettings.reducedMotion;
          break;
        case 'screen-reader':
          newSettings.screenReader = !newSettings.screenReader;
          break;
        case 'keyboard-navigation':
          newSettings.keyboardNavigation = !newSettings.keyboardNavigation;
          break;
        case 'focus-indicators':
          newSettings.focusIndicators = !newSettings.focusIndicators;
          break;
        case 'color-blind-support':
          newSettings.colorBlindSupport = !newSettings.colorBlindSupport;
          break;
        case 'dyslexia-friendly':
          newSettings.dyslexiaFriendly = !newSettings.dyslexiaFriendly;
          break;
      }
      
      applyAccessibilitySettings(newSettings);
    }
  }, [features, settings, applyAccessibilitySettings]);

  // Calculate WCAG compliance score
  useEffect(() => {
    const scores = { A: 0, AA: 0, AAA: 0 };
    const totalFeatures = features.length;
    
    features.forEach(feature => {
      if (feature.enabled) {
        scores[feature.wcagLevel]++;
      }
    });

    setWcagScore({
      A: Math.round((scores.A / totalFeatures) * 100),
      AA: Math.round((scores.AA / totalFeatures) * 100),
      AAA: Math.round((scores.AAA / totalFeatures) * 100)
    });
  }, [features]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to open accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(true);
      }
      
      // Escape to close
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      
      // Tab navigation enhancement
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
        setTimeout(() => {
          document.body.classList.remove('keyboard-navigation');
        }, 1000);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback(async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate save
    } catch (error) {
      console.error('Failed to save settings:', error);
    } finally {
      setIsLoading(false);
    }
  }, [settings]);

  // Load settings from localStorage
  const loadSettings = useCallback(async () => {
    setIsLoading(true);
    try {
      const saved = localStorage.getItem('zion-accessibility-settings');
      if (saved) {
        const parsedSettings = JSON.parse(saved);
        setSettings(parsedSettings);
        applyAccessibilitySettings(parsedSettings);
      }
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate load
    } catch (error) {
      console.error('Failed to load settings:', error);
    } finally {
      setIsLoading(false);
    }
  }, [applyAccessibilitySettings]);

  // Reset to default settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: false,
      colorBlindSupport: false,
      dyslexiaFriendly: false,
      autoRead: false,
      voiceControl: false,
      gestureControl: false,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0,
      colorScheme: 'light',
      customColors: {
        background: '#ffffff',
        text: '#000000',
        primary: '#3b82f6',
        secondary: '#64748b'
      }
    };
    
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
    setActiveFeatures([]);
  }, [applyAccessibilitySettings]);

  // Toggle voice recognition
  const toggleVoiceRecognition = useCallback(() => {
    if (!voiceRecognition) return;
    
    if (isListening) {
      voiceRecognition.stop();
      setIsListening(false);
    } else {
      voiceRecognition.start();
      setIsListening(true);
    }
  }, [voiceRecognition, isListening]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      {showControls && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Accessibility Settings"
>>>>>>> pr-9693
        >
          <Accessibility className="w-6 h-6 text-white" />
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </motion.button>
      )}

      {/* Accessibility Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
<<<<<<< HEAD
=======
            ref={accessibilityRef}
>>>>>>> pr-9693
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
<<<<<<< HEAD
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
=======
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zion-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg">
>>>>>>> pr-9693
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Accessibility Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
<<<<<<< HEAD
                      WCAG 2.1 AA Compliance & Accessibility Features
=======
                      Enhanced accessibility features and WCAG compliance
>>>>>>> pr-9693
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
<<<<<<< HEAD
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
=======
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zion-slate-800 rounded-lg transition-colors"
                  aria-label="Close accessibility settings"
>>>>>>> pr-9693
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
<<<<<<< HEAD
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* WCAG Compliance */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      WCAG 2.1 AA Compliance
                    </h3>
                    
                    {/* Overall Score */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Score</span>
                        <span className={`text-2xl font-bold ${getWCAGColor(wcagScore.overall)}`}>
                          {wcagScore.overall}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-300 ${
                            wcagScore.overall >= 90 ? 'bg-green-500' : 
                            wcagScore.overall >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${wcagScore.overall}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Status: <span className={getWCAGColor(wcagScore.overall)}>{getWCAGStatus(wcagScore.overall)}</span>
                      </p>
                    </div>

                    {/* Individual Scores */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">Compliance Areas</h4>
                      {Object.entries(wcagScore).filter(([key]) => key !== 'overall').map(([key, score]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-medium ${getWCAGColor(score)}`}>
                              {score}/100
                            </span>
                            {score >= 90 ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : score >= 70 ? (
                              <AlertTriangle className="w-4 h-4 text-yellow-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Keyboard Shortcuts */}
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Keyboard Shortcuts</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + A</span>
                          <span className="text-blue-600 dark:text-blue-400">Open Accessibility Panel</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + H</span>
                          <span className="text-blue-600 dark:text-blue-400">Toggle High Contrast</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + L</span>
                          <span className="text-blue-600 dark:text-blue-400">Toggle Large Text</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + R</span>
                          <span className="text-blue-600 dark:text-blue-400">Toggle Reduced Motion</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + V</span>
                          <span className="text-blue-600 dark:text-blue-400">Toggle Voice Navigation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accessibility Controls */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Accessibility Controls
                    </h3>
                    
                    {/* Visual Controls */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Visual Adjustments</h4>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.highContrast}
                            onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Contrast className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">High Contrast Mode</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.largeText}
                            onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Large Text</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.reducedMotion}
                            onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Zap className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Reduced Motion</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.dyslexiaFriendly}
                            onChange={(e) => setSettings(prev => ({ ...prev, dyslexiaFriendly: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dyslexia Friendly Font</span>
                        </label>
                      </div>

                      {/* Font Size Control */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Font Size: {fontSize}px
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Decrease font size"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${((fontSize - 12) / (24 - 12)) * 100}%` }}
                            />
                          </div>
                          <button
                            onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Increase font size"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Navigation & Interaction</h4>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.keyboardNavigation}
                            onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enhanced Keyboard Navigation</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.voiceNavigation}
                            onChange={(e) => setSettings(prev => ({ ...prev, voiceNavigation: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Mic className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Voice Navigation</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.focusIndicators}
                            onChange={(e) => setSettings(prev => ({ ...prev, focusIndicators: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enhanced Focus Indicators</span>
                        </label>
                      </div>
                    </div>

                    {/* Voice Navigation Status */}
                    {settings.voiceNavigation && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          {isListening ? (
                            <Mic className="w-5 h-5 text-green-600 dark:text-green-400 animate-pulse" />
                          ) : (
                            <MicOff className="w-5 h-5 text-gray-400" />
                          )}
                          <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            Voice Navigation {isListening ? 'Active' : 'Ready'}
                          </span>
                        </div>
                        {voiceCommand && (
                          <p className="text-sm text-green-600 dark:text-green-400">
                            Command: "{voiceCommand}"
                          </p>
                        )}
                        <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                          Try saying: "go home", "navigate services", "increase font", "high contrast"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
=======
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <button
                    onClick={() => toggleFeature('high-contrast')}
                    className={`p-4 rounded-xl border transition-all ${
                      settings.highContrast
                        ? 'bg-zion-cyan text-white border-zion-cyan'
                        : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-cyan'
                    }`}
                  >
                    <Contrast className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">High Contrast</span>
                  </button>

                  <button
                    onClick={() => toggleFeature('large-text')}
                    className={`p-4 rounded-xl border transition-all ${
                      settings.largeText
                        ? 'bg-zion-cyan text-white border-zion-cyan'
                        : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-cyan'
                    }`}
                  >
                    <Type className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Large Text</span>
                  </button>

                  <button
                    onClick={() => toggleFeature('reduced-motion')}
                    className={`p-4 rounded-xl border transition-all ${
                      settings.reducedMotion
                        ? 'bg-zion-cyan text-white border-zion-cyan'
                        : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-cyan'
                    }`}
                  >
                    <Move className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Reduced Motion</span>
                  </button>

                  <button
                    onClick={toggleVoiceRecognition}
                    className={`p-4 rounded-xl border transition-all ${
                      isListening
                        ? 'bg-green-500 text-white border-green-500'
                        : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-green-500'
                    }`}
                  >
                    <Headphones className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      {isListening ? 'Listening...' : 'Voice Control'}
                    </span>
                  </button>
                </div>

                {/* WCAG Compliance Score */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    WCAG Compliance Score
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <Target className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-500">Level A</span>
                      </div>
                      <div className="text-2xl font-bold text-green-500">{wcagScore.A}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Basic compliance</div>
                    </div>
                    
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <Award className="w-5 h-5 text-blue-500" />
                        <span className="text-sm text-gray-500">Level AA</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-500">{wcagScore.AA}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Standard compliance</div>
                    </div>
                    
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <Shield className="w-5 h-5 text-purple-500" />
                        <span className="text-sm text-gray-500">Level AAA</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-500">{wcagScore.AAA}%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Enhanced compliance</div>
                    </div>
                  </div>
                </div>

                {/* Accessibility Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Accessibility Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          feature.enabled
                            ? 'bg-zion-cyan/10 border-zion-cyan'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-cyan'
                        }`}
                        onClick={() => toggleFeature(feature.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                feature.impact === 'high' ? 'bg-red-100 text-red-800' :
                                feature.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {feature.impact.toUpperCase()}
                              </span>
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                                WCAG {feature.wcagLevel}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {feature.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                          
                          <div className={`w-5 h-5 rounded-full border-2 transition-colors ${
                            feature.enabled
                              ? 'bg-zion-cyan border-zion-cyan'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}>
                            {feature.enabled && (
                              <CheckCircle className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Advanced Settings */}
                <div className="mb-8">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-dark transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Settings</span>
                  </button>
                  
                  {showAdvanced && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-gray-50 dark:bg-zion-slate-800 rounded-xl"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Font Size: {settings.fontSize}px
                          </label>
                          <input
                            type="range"
                            min="12"
                            max="24"
                            value={settings.fontSize}
                            onChange={(e) => {
                              const newSettings = { ...settings, fontSize: parseInt(e.target.value) };
                              setSettings(newSettings);
                              applyAccessibilitySettings(newSettings);
                            }}
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Line Height: {settings.lineHeight}
                          </label>
                          <input
                            type="range"
                            min="1.2"
                            max="2.0"
                            step="0.1"
                            value={settings.lineHeight}
                            onChange={(e) => {
                              const newSettings = { ...settings, lineHeight: parseFloat(e.target.value) };
                              setSettings(newSettings);
                              applyAccessibilitySettings(newSettings);
                            }}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Voice Recognition Transcript */}
                {isListening && (
                  <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Voice Recognition Active
                      </span>
                    </div>
                    {transcript && (
                      <p className="text-sm text-green-700 dark:text-green-300">
                        "I heard: {transcript}"
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-zion-slate-700">
                  <div className="flex space-x-3">
                    <button
                      onClick={saveSettings}
                      disabled={isLoading}
                      className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors disabled:opacity-50"
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      <span>Save Settings</span>
                    </button>
                    
                    <button
                      onClick={loadSettings}
                      disabled={isLoading}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-zion-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-zion-slate-600 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Settings className="w-4 h-4" />}
                      <span>Load Settings</span>
                    </button>
                    
                    <button
                      onClick={resetSettings}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset to Default</span>
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-zion-slate-700 rounded text-xs">Alt + A</kbd> to open
                  </div>
                </div>
>>>>>>> pr-9693
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          --zion-bg: #000000 !important;
          --zion-text: #ffffff !important;
          --zion-primary: #ffff00 !important;
          --zion-secondary: #00ffff !important;
        }
        
        .enhanced-focus *:focus {
          outline: 3px solid #22ddd2 !important;
          outline-offset: 2px !important;
        }
        
        .keyboard-navigation *:focus {
          outline: 2px solid #22ddd2 !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        [data-voice-control="true"] {
          cursor: pointer;
        }
      `}</style>
    </>
  );
<<<<<<< HEAD
};

export default EnhancedAccessibilityEnhancer;
=======
}
>>>>>>> pr-9693

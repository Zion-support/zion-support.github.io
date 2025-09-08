import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  X, 
  Type, 
  Contrast, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff,
  Keyboard,
  Settings,
  Check,
  Plus,
  Minus
}

}

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'x-large';
  contrast: 'normal' | 'high' | 'inverted';
  reducedMotion: boolean;
  soundEnabled: boolean;
  focusIndicator: boolean;
  highContrast: boolean;
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState<'normal' | 'high' | 'inverted'>('normal');
  const [isMuted, setIsMuted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('dark');

  // Position classes based on prop
  const getPositionClasses = () => {
    switch (position) {
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

  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    contrast: 'normal',
    reducedMotion: false,
    soundEnabled: true,
    focusIndicator: true,
    highContrast: false
  });

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.setProperty('--font-size-base', getFontSizeValue(settings.fontSize));
    
    // Contrast
    if (settings.contrast === 'high') {
      root.classList.add('high-contrast');
      root.classList.remove('inverted-contrast');
    } else if (settings.contrast === 'inverted') {
      root.classList.add('inverted-contrast');
      root.classList.remove('high-contrast');
    } else {
      root.classList.remove('high-contrast', 'inverted-contrast');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast-mode');
    } else {
      root.classList.remove('high-contrast-mode');
    }
  }, [settings]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
    setSettings(defaultSettings);
  };
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
  // Save settings to localStorage
  const saveSettings = () => {
    const settings = {
      highContrast,
      largeText,
      reducedMotion,
      mutedAudio,
      zoomLevel
    };
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  };

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        setHighContrast(settings.highContrast || false);
        setLargeText(settings.largeText || false);
        setReducedMotion(settings.reducedMotion || false);
        setMutedAudio(settings.mutedAudio || false);
        setZoomLevel(settings.zoomLevel || 100);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Auto-save settings
  useEffect(() => {
    saveSettings();
  }, [highContrast, largeText, reducedMotion, mutedAudio, zoomLevel]);

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  const keyboardShortcuts = [
    { key: 'Alt + A', description: 'Toggle accessibility panel' },
    { key: 'Alt + H', description: 'Toggle high contrast' },
    { key: 'Alt + L', description: 'Toggle large text' },
    { key: 'Alt + M', description: 'Toggle reduced motion' },
    { key: 'Alt + Z', description: 'Reset zoom' },
    { key: 'Escape', description: 'Close panel' }
  ];

  return (
    <div className={`fixed ${getPositionClasses()} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl max-w-sm w-80"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Accessibility</h3>
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 w-80 bg-zion-blue-dark border border-zion-cyan/30 rounded-lg shadow-2xl backdrop-blur-sm"
          role="dialog"
          aria-label="Accessibility settings"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Accessibility className="w-5 h-5 mr-2 text-zion-cyan" />
              Accessibility
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Contrast className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="high-contrast" className="text-white font-medium">
                    High Contrast
                  </label>
                  <p className="text-sm text-gray-400">Enhanced color contrast</p>
                </div>
              </div>
              <button
                id="high-contrast"
                onClick={() => setHighContrast(!highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  highContrast ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={highContrast}
                aria-label="Toggle high contrast mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Type className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="large-text" className="text-white font-medium">
                    Large Text
                  </label>
                  <p className="text-sm text-gray-400">Increase text size</p>
                </div>
              </div>
              <button
                id="large-text"
                onClick={() => setLargeText(!largeText)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  largeText ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={largeText}
                aria-label="Toggle large text mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MousePointer className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="reduced-motion" className="text-white font-medium">
                    Reduced Motion
                  </label>
                  <p className="text-sm text-gray-400">Minimize animations</p>
                </div>
              </div>
              <button
                id="reduced-motion"
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  reducedMotion ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={reducedMotion}
                aria-label="Toggle reduced motion mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Zoom Control */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <ZoomIn className="w-5 h-5 text-zion-cyan" />
                <label className="text-white font-medium">Zoom Level</label>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
                  className="p-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-white min-w-[3rem] text-center">{zoomLevel}%</span>
                <button
                  onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))}
                  className="p-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Font Size Control */}
              <div>
                <label className="text-white font-medium mb-2 block">Font Size</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize === 'small'}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-white min-w-[60px] text-center">
                    {settings.fontSize.replace('-', ' ').toUpperCase()}
                  </span>
                  <button
                    onClick={increaseFontSize}
                    disabled={settings.fontSize === 'x-large'}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-4 h-4 text-white" />
                <label className="text-white font-medium mb-2 block">Contrast</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'high', 'inverted'] as const).map((contrast) => (
                    <button
                      key={contrast}
                      onClick={() => updateSetting('contrast', contrast)}
                      className={`p-2 rounded text-sm transition-colors ${
                        settings.contrast === contrast
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {contrast.charAt(0).toUpperCase() + contrast.slice(1)}
              {/* Toggle Options */}
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={() => toggleSetting('reducedMotion')}
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">Reduce Motion</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.soundEnabled}
                    onChange={() => toggleSetting('soundEnabled')}
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">Sound Effects</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicator}
                    onChange={() => toggleSetting('focusIndicator')}
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">Focus Indicators</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={() => toggleSetting('highContrast')}
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">High Contrast Mode</span>
                </label>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
              >
                Reset to Defaults
              </button>
    </div>
  );
};

      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title="Accessibility Controls"
          aria-label="Open accessibility controls"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default AccessibilityControls;

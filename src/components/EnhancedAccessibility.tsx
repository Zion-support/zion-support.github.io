import React, { useEffect, useState } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Accessibility,
  Settings,
  X
 } from 'lucide-react.ts';

interface AccessibilitySettings {

  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean}

export const EnhancedAccessibility: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<any>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicator: true,
    colorBlind: false,
    dyslexia: false
  });
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(()  => {
    // Apply accessibility settings to document
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast')} else {
      document.documentElement.classList.remove('high-contrast')}

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion')} else {
      document.documentElement.classList.remove('reduced-motion')}

    if (settings.largeText) {
      document.documentElement.classList.add('large-text')} else {
      document.documentElement.classList.remove('large-text')}

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings]);

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      setSettings(JSON.parse(saved))}
  }, []);

  const toggleSetting = (key: keyof AccessibilitySettings)  => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))};

  const handleKeyDown = (e: React.KeyboardEvent)  => {
    if (e.key === 'Escape') {
      setIsOpen(false)}
  };

  return (
    <React.Fragment>
      {/* Accessibility Toggle Button */}
      {showControls && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 p-4 bg-cyan-600 text-white rounded-full shadow-2xl shadow-cyan-500/30 hover:bg-cyan-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          aria-label="Open accessibility settings"
          title="Accessibility Settings"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Quick Actions Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-24 left-6 z-40 space-y-2"
      >
        {quickActions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={action.action}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
              action.active 
                ? 'bg-cyan-600 text-white shadow-cyan-500/50' 
                : 'bg-slate-800/90 text-gray-300 hover:bg-slate-700/90 hover:text-white'
            }`}
            aria-label={action.label}
            title={action.label}
          >
            <action.icon className="w-5 h-5" />
          </motion.button>
        ))}
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
                  <Accessibility className="w-7 h-7 text-cyan-400" />
                  <span>Accessibility Settings</span>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Settings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {Object.entries(settings).map(([key, value]) => {
                  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                  const Icon = key === 'highContrast' ? Contrast : 
                              key === 'largeText' ? Type : 
                              key === 'reducedMotion' ? Eye : 
                              key === 'screenReader' ? Volume2 : 
                              key === 'keyboardNavigation' ? Keyboard : 
                              key === 'focusIndicator' ? MousePointer : 
                              key === 'colorBlind' ? Eye : 
                              key === 'dyslexia' ? Type : Settings;

                  return (
                    <div key={key} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-medium">{label}</span>
                      </div>
                      <button
                        onClick={() => {
                          const newSettings = { ...settings, [key]: !value };
                          applySettings(newSettings);
                          announce(`${label} ${newSettings[key as keyof AccessibilitySettings] ? 'enabled' : 'disabled'}`);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          value ? 'bg-cyan-600' : 'bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={value}
                        aria-label={`Toggle ${label}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Quick Tips */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center space-x-2">
                  <Info className="w-5 h-5" />
                  <span>Accessibility Tips</span>
                </h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Use Tab key to navigate through interactive elements</li>
                  <li>• Press Enter or Space to activate buttons</li>
                  <li>• Use Escape key to close modals and menus</li>
                  <li>• High contrast mode improves text readability</li>
                  <li>• Large text mode increases font sizes</li>
                  <li>• Screen reader announcements provide audio feedback</li>
                </ul>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Focus Management</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Keyboard Navigation</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Screen Reader Ready</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </React.Fragment>
  )};
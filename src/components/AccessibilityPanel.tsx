import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon, 
  SpeakerWaveIcon, 
  Cog6ToothIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  SpeakerXMarkIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';

interface AccessibilitySettings {
  // Visual
  highContrast: boolean;
  fontSize: number;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  reducedMotion: boolean;
  
  // Audio
  soundEffects: boolean;
  autoPlayMedia: boolean;
  voiceCommands: boolean;
  
  // Navigation
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityPanelProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({ 
  isVisible = false, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'navigation'>('general');
  const [settings, setSettings] = useState<AccessibilitySettings>({
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
  });
  const [accessibilityScore, setAccessibilityScore] = useState(85);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    applySettings();
    
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Calculate accessibility score
    calculateAccessibilityScore();
  }, [settings]);

  const applySettings = () => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${settings.fontSize}%`;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply color blindness filters
    root.style.filter = getColorBlindnessFilter(settings.colorBlindness);
    
    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }
    
    // Apply focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-visible', 'auto');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }
  };

  const getColorBlindnessFilter = (type: string) => {
    switch (type) {
      case 'protanopia':
        return 'url(#protanopia)';
      case 'deuteranopia':
        return 'url(#deuteranopia)';
      case 'tritanopia':
        return 'url(#tritanopia)';
      default:
        return 'none';
    }
  };

  const calculateAccessibilityScore = () => {
    let score = 100;
    
    // Deduct points for disabled features
    if (!settings.highContrast) score -= 5;
    if (settings.fontSize < 100) score -= 10;
    if (settings.colorBlindness !== 'none') score -= 5;
    if (settings.reducedMotion) score -= 5;
    if (!settings.soundEffects) score -= 5;
    if (settings.autoPlayMedia) score -= 10;
    if (!settings.voiceCommands) score -= 5;
    if (!settings.screenReader) score -= 10;
    if (!settings.keyboardNavigation) score -= 10;
    if (!settings.focusIndicator) score -= 10;
    
    setAccessibilityScore(Math.max(0, score));
  };

  const handleFontSizeChange = (newSize: number) => {
    setSettings(prev => ({ ...prev, fontSize: newSize }));
  };

  const handleToggle = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed right-0 top-0 h-full w-96 bg-slate-800/95 backdrop-blur-sm border-l border-slate-600/50 shadow-2xl z-50 overflow-y-auto"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Cog6ToothIcon className="w-6 h-6 mr-2" />
              Accessibility
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          {/* Accessibility Score */}
          <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(accessibilityScore)}`}>
                {accessibilityScore}
              </div>
              <div className="text-slate-300 text-sm">/100</div>
              <div className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${
                accessibilityScore >= 90 ? 'bg-green-500/20 text-green-400' :
                accessibilityScore >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {getScoreLabel(accessibilityScore)}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6 bg-slate-700/50 rounded-lg p-1">
            {[
              { id: 'general', label: 'General', icon: Cog6ToothIcon },
              { id: 'visual', label: 'Visual', icon: EyeIcon },
              { id: 'audio', label: 'Audio', icon: SpeakerWaveIcon },
              { id: 'navigation', label: 'Navigation', icon: Cog6ToothIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-600/50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleFontSizeChange(120)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
                      >
                        Increase Font
                      </button>
                      <button
                        onClick={() => handleFontSizeChange(100)}
                        className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
                      >
                        Reset Font
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Keyboard Shortcuts</h3>
                    <div className="space-y-2 text-sm text-slate-300">
                      <div className="flex justify-between">
                        <span>Open Accessibility Panel:</span>
                        <kbd className="bg-slate-600 px-2 py-1 rounded text-xs">Alt + A</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Toggle High Contrast:</span>
                        <kbd className="bg-slate-600 px-2 py-1 rounded text-xs">Alt + H</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Toggle Focus Indicator:</span>
                        <kbd className="bg-slate-600 px-2 py-1 rounded text-xs">Alt + F</kbd>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual Tab */}
              {activeTab === 'visual' && (
                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Display Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">High Contrast</span>
                        <button
                          onClick={() => handleToggle('highContrast')}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            settings.highContrast ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      
                      <div>
                        <label className="text-slate-300 text-sm mb-2 block">Font Size: {settings.fontSize}%</label>
                        <input
                          type="range"
                          min="50"
                          max="200"
                          step="10"
                          value={settings.fontSize}
                          onChange={(e) => handleFontSizeChange(Number(e.target.value))}
                          className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <div>
                        <label className="text-slate-300 text-sm mb-2 block">Color Blindness Support</label>
                        <select
                          value={settings.colorBlindness}
                          onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                          className="w-full bg-slate-700 text-white rounded-md px-3 py-2 border border-slate-600 focus:border-blue-500 focus:outline-none"
                        >
                          <option value="none">None</option>
                          <option value="protanopia">Protanopia (Red-Green)</option>
                          <option value="deuteranopia">Deuteranopia (Red-Green)</option>
                          <option value="tritanopia">Tritanopia (Blue-Yellow)</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Reduced Motion</span>
                        <button
                          onClick={() => handleToggle('reducedMotion')}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            settings.reducedMotion ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Audio Tab */}
              {activeTab === 'audio' && (
                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Audio Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Sound Effects</span>
                        <button
                          onClick={() => handleToggle('soundEffects')}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            settings.soundEffects ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Auto-play Media</span>
                        <button
                          onClick={() => handleToggle('autoPlayMedia')}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            settings.autoPlayMedia ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.autoPlayMedia ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Voice Commands</span>
                        <button
                          onClick={() => handleToggle('voiceCommands')}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            settings.voiceCommands ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.voiceCommands ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Tab */}
              {activeTab === 'navigation' && (
                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Navigation Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Screen Reader Mode</span>
                        <button
                          onClick={() => handleToggle('screenReader')}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            settings.screenReader ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Enhanced Keyboard Navigation</span>
                        <button
                          onClick={() => handleToggle('keyboardNavigation')}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            settings.keyboardNavigation ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">Focus Indicator</span>
                        <button
                          onClick={() => handleToggle('focusIndicator')}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            settings.focusIndicator ? 'bg-blue-600' : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
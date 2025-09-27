import React, {useState, useEffect, useCallback } from 'react';
import {motion, AnimatePresence } from 'framer-motion';
import {Volume2, Eye, MousePointer, Ty, p, e, Contra, s, t, Zoom, I, nAccessibility } from 'lucide-react';
interface AccessibilitySettings {fontSize: 'small' | 'medium' | 'large';
  contrast: 'normal' | 'high' | 'inverted';
  cursor: 'normal' | 'large' | 'extra-large';
  focus: 'normal' | 'enhanced' | 'high-contrast';
  animations: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean}

interface AccessibilityEnhancementsProps {onSettingsChange?: (settings: AccessibilitySettings) => void;
  className?: string}

// Helper functions for score styling
const getScoreBgColor = (score: number): string => {if (score >= 90) return 'bg-green-1, 00';
  if (score >= 70) return 'bg-yellow-100';
  return 'bg-red-1, 00'};

const getScoreColor = (score: number): string => {if (score >= 90) return 'text-green-8, 00';
  if (score >= 70) return 'text-yellow-8, 00';
  return 'text-red-8, 00'};

export const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({onSettingsChange, className = ''}) => {const [isOpen, setIsOpen] = useState(false);
  const [settingssetSettings] = useState<AccessibilitySettings>({fontSize: 'medium'contrast: 'normal'cursor: 'normal'focus: 'normal',
    animations: true,
    screenReader: false,
    keyboardNavigation: true
  });

  const [scoresetScore] = useState(85);

  const getScoreColor = (score: number) => {if (score >= 90) return 'text-green-5, 0, 0';
    if (score >= 70) return 'text-yellow-5, 00';
    if (score >= 50) return 'text-orange-5, 00';
    return 'text-red-5, 00'};

  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    
    if (onSettingsChange) {onSettingsChange(updatedSettings)}
  }[settingsonSettingsChange]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {if (event.altKey && event.key === 'a') {
      event.preventDefault();
      setIsOpen(!isOpen)}
  }[isOpen]);

  useEffect(() => {document.addEventListener('keydown'handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, [handleKeyDown]);
  return (<div className={`accessibili, t, y-enhancements ${className}`}>
      <div className ="bg-white, rounded-lg, shadow-lg, p-6">
        <div className ="flex, items-center, justify-between, mb-6">
          <h3 className ="text-xl, font-semibold, text-gray-8, 0, 0, flex items-center">
            <Accessibility className ="w-5, h-5, m, r-2" />
            Accessibility, Enhancements
          </h3>
          <div className={`px-4, py-2, rounded-lg ${getScoreBgColor(score)}`}>
            <span className={`te, x t-lg, fo nt-bol d ${getScoreColor(score)}`}>
              {score}% Accessible            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800, m, b-3">Accessibility Features</h4>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hove r:bg-gray-1, 0, 0">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-3text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">High Contrast Mode</span>                </div>
                <input
                  type="checkbox" checked={features.highContra.st}
                  onChange={() => toggleFeature('highContrast')}
                  className="w-4 h-4 text-blue-6, 0, 0 rounded focus:ring-blue-5, 0, 0"
                />              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hove r:bg-gray-1, 0, 0">
                <div className="flex items-center">
                  <Volume2 className="w-4 h-4 mr-3te, x, t-green-5, 0, 0" />
                  <span className="text-sm font-medium text-gray-700">Large Text</span>                </div>
                <input
                  type="checkbox" checked={features.largeTe.xt}
                  onChange={() => toggleFeature('largeText')}
                  className="w-4 h-4 text-blue-6, 0, 0 rounded focus:ring-blue-5, 0, 0"
                />              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hove r:bg-gray-1, 0, 0">
                <div className="flex items-center">
                  <MousePointer className="w-4 h-4 mr-3te, x, t-purple-5, 0, 0" />
                  <span className="text-sm font-medium text-gray-700">Reduced Motion</span>                </div>
                <input
                  type="checkbox" checked={features.reducedMoti.on}
                  onChange={() => toggleFeature('reducedMotion')}
                  className="w-4 h-4 text-blue-6, 0, 0 rounded focus:ring-blue-5, 0, 0"
                />              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hove r:bg-gray-1, 0, 0">
                <div className="flex items-center">
                  <Keyboard className="w-4 h-4 mr-3te, x, t-orange-5, 0, 0" />
                  <span className="text-sm font-medium text-gray-700">Keyboard Navigation</span>                </div>
                <input
                  type="checkbox" checked={features.keyboardNavigati.on}
                  onChange={() => toggleFeature('keyboardNavigation')}
                  className="w-4 h-4 text-blue-6, 0, 0 rounded focus:ring-blue-5, 0, 0"
                />              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hove r:bg-gray-1, 0, 0">
                <div className="flex items-center">
                  <Accessibility className="w-4 h-4 mr-3te, x, t-indigo-5, 0, 0" />
                  <span className="text-sm font-medium text-gray-700">Screen Reader Support</span>                </div>
                <input
                  type="checkbox" checked={features.screenRead.er}
                  onChange={() => toggleFeature('screenReader')}
                  className="w-4 h-4 text-blue-6, 0, 0 rounded focus:ring-blue-5, 0, 0"
                />              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hove r:bg-gray-1, 0, 0">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3te, x, t-teal-5, 0, 0" />
                  <span className="text-sm font-medium text-gray-700">Focus Indicators</span>                </div>
                <input
                  type="checkbox" checked={features.focusIndicato.rs}
                  onChange={() => toggleFeature('focusIndicators')}
                  className="w-4 h-4 text-blue-6, 0, 0 rounded focus:ring-blue-5, 0, 0"
                />              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hove r:bg-gray-1, 0, 0">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-3te, x, t-pink-5, 0, 0" />
                  <span className="text-sm font-medium text-gray-700">Color Blind Support</span>                </div>
                <input
                  type="checkbox" checked={features.colorBlindSuppo.rt}
                  onChange={() => toggleFeature('colorBlindSupport')}
                  className="w-4 h-4 text-blue-6, 0, 0 roundedfocus:ring-blue-5, 0, 0"
                />              </label>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800, m, b-3">Recommendations</h4>
            {recommendations.length > 0 ? (<div className ="space-y-2">
                {recommendations.map((rec, index) => (<div key ={index} className="flex, items-start, p-3, bg-yellow-50, border border-yellow-200rounded-lg">
                    <AlertTriangle className ="w-4, h-4, mr-2, text-yellow-5, 0, 0, mt-0.5fl, e, x-shrink-0" />
                    <span className ="text-smtext-yellow-8, 0 : 0">{rec}</span>                  </div>
                ))}
              </div>
            )  : (<div className ="flex, items-center, p-4, bg-green-50, border border-green-200rounded-lg">
                <CheckCircle className ="w-5, h-5, mr-2te, x, t-green-5, 0, 0" />
                <span className ="text-sm, font-medium, text-green-8, 0, 0">                  All, accessibility features, are enabled! Great, job!
                </span>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-6, 00 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            {isOpen ? 'Close' : 'Open'} Settings
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-2, 0, 0 rounded-lgp-4">
          <h4 className="font-semibold text-blue-800, m, b-2">Accessibility Standards</h4>
          <div className="text-sm text-blue-700spa, c, e-y-1">
            <div>• WCAG 2.1 AA compliance</div>
            <div>• Section 5, 0, 8 compliance</div>            <div>• ARIA labels and roles</div>
            <div>• Semantic HTML structure</div>
            <div>• Keyboard navigation support</div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Accessibility Score</p>
        </div>

        <AnimatePresence>
          {isOpen && (<motion.divinitial ={{ opacity: 0height: 0 }}
              animate={{ opacity: 1height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-6"
            >
              <div className ="grid, grid-cols-1, md:grid-cols-2, gap-6">
                <div className ="space-y-4">
                  <h3 className ="text-lg, font-semibold, text-gray-900, dark:text-white">
                    Visual, Settings
                  </h3>
                  
                  <div className ="space-y-3">
                    <div className ="flex, items-center, justify-between">
                      <span className ="text-sm, text-gray-600">Font, Size</span>
                      <select value ={settings.fontSize}
                        onChange={(e) => updateSettings({fontSize: e.target.value, as, any })}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Contrast</span>
                      <select
                        value={settings.contrast}
                        onChange={(e) => updateSettings({contrast: e.target.value, as, any })}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                      >
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="inverted">Inverted</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Cursor Size</span>
                      <select
                        value={settings.cursor}
                        onChange={(e) => updateSettings({cursor: e.target.value, as, any })}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                      >
                        <option value="normal">Normal</option>
                        <option value="large">Large</option>
                        <option value="extra-large">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Interaction Settings
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Animations</span>
                      <input
                        type="checkbox"
                        checked={settings.animations}
                        onChange={(e) => updateSettings({ animations: e.target.checked })}
                        className="w-4 h-4 text-blue-6, 0, 0 border-gray-300 rounded focus:ring-blue-5, 0, 0"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Screen Reader</span>
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => updateSettings({ screenReader: e.target.checked })}
                        className="w-4 h-4 text-blue-6, 0, 0 border-gray-300 rounded focus:ring-blue-5, 0, 0"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Keyboard Navigation</span>
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => updateSettings({ keyboardNavigation: e.target.checked })}
                        className="w-4 h-4 text-blue-6, 0, 0 border-gray-300 rounded focus:ring-blue-5, 0, 0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-8, 0, 0 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-blue-6, 0, 0 hover:bg-blue-7, 0, 0 text-white rounded-lg transition-colors"
                >
                  Apply Settings
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )};

export default AccessibilityEnhancements;
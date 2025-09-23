import { useState, useEffect } from 'react';
 from 'react';
export /**
import { motion, AnimatePresence  } from 'framer-motion';

 params - Function parameters
 * @returns {*} Function return value
 */
function Accessibility () {

  Accessibility as AccessibilityIcon,
  Type,
  Eye,
  Volume2,
Keyboard,
{/* Header */}
Keyboard,              {/* Header */}
<div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <AccessibilityIcon className="w-5 h-5 text-cyan-400"  />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  
                >
                  <X className="w-5 h-5"  />
                </button>
              </div>

              {/* Font Size Control */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <Type className="w-4 h-4"  />
                  Font Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize <= 12}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                    
                  >
                    <Minus className="w-4 h-4 text-white"  />
                  </button>
                  <span className="flex-1 text-center text-sm font-medium text-gray-900 dark:text-white">
                    {settings.fontSize}px
                  </span>
                  <button
                    onClick={increaseFontSize}
                    disabled={settings.fontSize >= 24}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                    
                  >
                    <Plus className="w-4 h-4 text-white"  />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                  />
                </div>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

              {/* High Contrast Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Contrast className="w-4 h-4"  />
                    High Contrast
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => updateSetting('highContrast', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.highContrast ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </label>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Eye className="w-4 h-4"  />
                    Reduced Motion
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.reducedMotion ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </label>
                <button
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Theme Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4"  />
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'light', icon: Sun, label: 'Light' },
                    { value: 'dark', icon: Moon, label: 'Dark' },
                    { value: 'auto', icon: Settings, label: 'Auto' }
                  ].map(({ value, icon: Icon, label }) => (
                    <button
                      key={theme}
                      onClick={() => updateSetting('theme', theme)}
                      className={`p-2 rounded-md text-xs font-medium transition-colors ${settings.theme === theme
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {theme === 'auto' && 'Auto'}
                      {theme === 'light' && <Sun className="w-4 h-4 mx-auto"  />}
                      {theme === 'dark' && <Moon className="w-4 h-4 mx-auto"  />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sound Toggle */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Volume2 className="w-4 h-4" />
                    Sound Effects
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.soundEnabled}
                    onChange={(e) => updateSetting('soundEnabled', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.soundEnabled ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </label>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                  <Keyboard className="w-4 h-4"  />
                  Keyboard Shortcuts
                </h3>
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Increase Font:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl + +</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Decrease Font:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl + -</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Reset Font:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Ctrl + 0</kbd>
                  </div>
                </div>
              </label>
            </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )}
;,"});,})";

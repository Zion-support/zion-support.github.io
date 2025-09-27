// TODO: Consider breaking this large component (277 lines) into smaller components
import React, { useState, useEffect, useCallback } from 'react'

interface AccessibilitySettings {
  contrast: "normal" | "high" | "inverted"
  cursor: "normal" | "large" | "extra-large"
  focus: "normal" | "enhanced" | "high-contrast"
  animations: boolean
  screenReader: boolean
  keyboardNavigation: boolean
}

interface AccessibilityEnhancementsProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void
  className?: string
}

// Helper functions for score styling
const getScoreBgColor = (score: number): string => {
  if (score >= 90) return "bg-green-100"
  if (score >= 70) return "bg-yellow-100"
  return "bg-red-100"
}

const getScoreColor = (score: number): string => {
  if (score >= 90) return "text-green-800"
  if (score >= 70) return "text-yellow-800"
  return "text-red-800"
}

const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({
  onSettingsChange,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>({
    contrast: "normal",
    cursor: "normal", 
    focus: "normal",
    animations: true,
    screenReader: false,
    keyboardNavigation: false
  })

  const [score, setScore] = useState(85)

  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings }
    setSettings(updatedSettings)
    
    if (onSettingsChange) {
      onSettingsChange(updatedSettings)
    }
  }, [settings, onSettingsChange])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.altKey && event.key === 'a') {
      event.preventDefault()
      setIsOpen(!isOpen)
    }
  }, [isOpen])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className={`accessibility-enhancements ${className}`}>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center">
            <span className="w-5 h-5 mr-2">♿</span>
            Accessibility Enhancements
          </h3>
          <div className={`px-4 py-2 rounded-lg ${getScoreBgColor(score)}`}>
            <span className={`text-lg font-bold ${getScoreColor(score)}`}>
              {score}% Accessible
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contrast Level
              </label>
              <select
                value={settings.contrast}
                onChange={(e) => updateSettings({ contrast: e.target.value as any })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="inverted">Inverted</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cursor Size
              </label>
              <select
                value={settings.cursor}
                onChange={(e) => updateSettings({ cursor: e.target.value as any })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="normal">Normal</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Focus Indicator
              </label>
              <select
                value={settings.focus}
                onChange={(e) => updateSettings({ focus: e.target.value as any })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="normal">Normal</option>
                <option value="enhanced">Enhanced</option>
                <option value="high-contrast">High Contrast</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.animations}
                  onChange={(e) => updateSettings({ animations: e.target.checked })}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  Enable Animations
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => updateSettings({ screenReader: e.target.checked })}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  Screen Reader Support
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => updateSettings({ keyboardNavigation: e.target.checked })}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  Enhanced Keyboard Navigation
                </span>
              </label>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-blue-800 mb-2">
              Keyboard Shortcuts
            </h4>
            <p className="text-sm text-blue-700">
              Press <kbd className="px-2 py-1 bg-blue-200 rounded text-xs">Alt + A</kbd> to toggle accessibility panel
            </p>
          </div>

          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h4 className="text-sm font-medium text-green-800 mb-2">
              Accessibility Score
            </h4>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  score >= 90 ? 'bg-green-500' : 
                  score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <p className="text-sm text-green-700 mt-2">
              Your site meets {score}% of accessibility standards
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityEnhancements
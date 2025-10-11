'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Eye, Volume2, MousePointer, Keyboard } from 'lucide-react'

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large'
  contrast: 'normal' | 'high'
  screenReader: boolean
  keyboardNavigation: boolean
  animations: boolean
  focusIndicator: boolean
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    contrast: 'normal',
    screenReader: false,
    keyboardNavigation: true,
    animations: true,
    focusIndicator: true
  })

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Apply accessibility settings to the document
    const root = document.documentElement
    
    // Font size
    root.style.setProperty('--font-size', settings.fontSize === 'small' ? '14px' : settings.fontSize === 'large' ? '18px' : '16px')
    
    // Contrast
    if (settings.contrast === 'high') {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    
    // Animations
    if (!settings.animations) {
      root.classList.add('no-animations')
    } else {
      root.classList.remove('no-animations')
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-indicator')
    } else {
      root.classList.remove('focus-indicator')
    }
    
  }, [settings])

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const toggleAccessibility = () => {
    setIsActive(!isActive)
  }

  const features = [
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: 'Visual Enhancements',
      description: 'Adjust font size, contrast, and visual elements for better readability',
      settings: ['Font size control', 'High contrast mode', 'Focus indicators', 'Color adjustments']
    },
    {
      icon: <Volume2 className="w-8 h-8 text-green-500" />,
      title: 'Audio Support',
      description: 'Screen reader compatibility and audio descriptions for multimedia content',
      settings: ['Screen reader support', 'Audio descriptions', 'Text-to-speech', 'Audio controls']
    },
    {
      icon: <MousePointer className="w-8 h-8 text-purple-500" />,
      title: 'Navigation Aids',
      description: 'Enhanced keyboard navigation and alternative input methods',
      settings: ['Keyboard navigation', 'Tab order optimization', 'Skip links', 'Focus management']
    },
    {
      icon: <Keyboard className="w-8 h-8 text-orange-500" />,
      title: 'Input Assistance',
      description: 'Alternative input methods and assistive technologies support',
      settings: ['Voice input', 'Switch navigation', 'Gesture controls', 'Custom shortcuts']
    }
  ]

  const benefits = [
    'WCAG 2.1 AA compliance',
    'Screen reader compatibility',
    'Keyboard navigation support',
    'High contrast modes',
    'Font size adjustments',
    'Focus management',
    'Alternative text support',
    'Audio descriptions'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Accessibility Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleAccessibility}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            isActive 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label="Toggle accessibility features"
        >
          <Zap className="w-4 h-4 inline mr-2" />
          Accessibility
        </button>
      </div>

      {/* Accessibility Panel */}
      {isActive && (
        <div className="fixed top-16 right-4 z-40 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Settings</h3>
          
          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* Contrast */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contrast</label>
              <select
                value={settings.contrast}
                onChange={(e) => updateSetting('contrast', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Screen Reader */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="screenReader"
                checked={settings.screenReader}
                onChange={(e) => updateSetting('screenReader', e.target.checked)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="screenReader" className="ml-2 text-sm text-gray-700">
                Screen Reader Support
              </label>
            </div>

            {/* Keyboard Navigation */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keyboardNav"
                checked={settings.keyboardNavigation}
                onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="keyboardNav" className="ml-2 text-sm text-gray-700">
                Enhanced Keyboard Navigation
              </label>
            </div>

            {/* Animations */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="animations"
                checked={settings.animations}
                onChange={(e) => updateSetting('animations', e.target.checked)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="animations" className="ml-2 text-sm text-gray-700">
                Reduce Animations
              </label>
            </div>

            {/* Focus Indicator */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="focusIndicator"
                checked={settings.focusIndicator}
                onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="focusIndicator" className="ml-2 text-sm text-gray-700">
                Enhanced Focus Indicators
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Enhanced <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Accessibility</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
              Making the web accessible to everyone with advanced accessibility features and WCAG 2.1 AA compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Enable Accessibility
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Learn More
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Comprehensive accessibility solutions designed to make your content accessible to all users
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.settings.map((setting, settingIndex) => (
                      <li key={settingIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {setting}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16 bg-white rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accessibility Benefits</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Why accessibility matters for your business and users
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Make Your Site Accessible?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Implement our accessibility enhancements and ensure your content is accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default EnhancedAccessibilityEnhancer
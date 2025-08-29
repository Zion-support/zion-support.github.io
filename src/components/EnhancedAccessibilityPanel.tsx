import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  MousePointer, 
  Keyboard, 
  Monitor, 
  Smartphone,
  X,
  Settings,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
}

export function EnhancedAccessibilityPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: boolean,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindness: 'none',
    fontSize: 'medium'
  });

  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [issues, setIssues] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Accessibility recommendations
  const accessibilityRecommendations = [
    {
      id: 'alt-text',
      title: 'Image Alt Text',
      description: 'Ensure all images have descriptive alt text for screen readers',
      status: 'warning',
      impact: 'high'
    },
    {
      id: 'heading-structure',
      title: 'Heading Structure',
      description: 'Use proper heading hierarchy (H1, H2, H3) for better navigation',
      status: 'good',
      impact: 'medium'
    },
    {
      id: 'color-contrast',
      title: 'Color Contrast',
      description: 'Maintain sufficient color contrast ratios for text readability',
      status: 'good',
      impact: 'high'
    },
    {
      id: 'keyboard-navigation',
      title: 'Keyboard Navigation',
      description: 'All interactive elements should be accessible via keyboard',
      status: 'good',
      impact: 'high'
    },
    {
      id: 'focus-management',
      title: 'Focus Management',
      description: 'Visible focus indicators for keyboard navigation',
      status: 'good',
      impact: 'medium'
    }
  ];

  useEffect(() => {
    // Apply accessibility settings to document
    applyAccessibilitySettings();
    
    // Analyze current accessibility
    analyzeAccessibility();
  }, [settings]);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Font size
    root.style.setProperty('--font-size-base', getFontSizeValue(settings.fontSize));
    
    // Color blindness simulation
    applyColorBlindnessFilter(settings.colorBlindness);
  };

  const getFontSizeValue = (size: string): string => {
    switch (size) {
      case 'small': return '14px';
      case 'medium': return '16px';
      case 'large': return '18px';
      case 'xlarge': return '20px';
      default: return '16px';
    }
  };

  const applyColorBlindnessFilter = (type: string) => {
    const root = document.documentElement;
    root.style.filter = '';
    
    switch (type) {
      case 'protanopia':
        root.style.filter = 'url(#protanopia)';
        break;
      case 'deuteranopia':
        root.style.filter = 'url(#deuteranopia)';
        break;
      case 'tritanopia':
        root.style.filter = 'url(#tritanopia)';
        break;
    }
  };

  const analyzeAccessibility = () => {
    // Simulate accessibility analysis
    const newIssues: string[] = [];
    const newSuggestions: string[] = [];
    
    // Check for images without alt text
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      newIssues.push(`${imagesWithoutAlt.length} images missing alt text`);
    }
    
    // Check heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      newIssues.push('No heading structure found');
    }
    
    // Check for proper ARIA labels
    const interactiveElements = document.querySelectorAll('button, input, select, textarea');
    const elementsWithoutAria = Array.from(interactiveElements).filter(el => 
      !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')
    );
    if (elementsWithoutAria.length > 0) {
      newSuggestions.push('Consider adding ARIA labels to interactive elements');
    }
    
    setIssues(newIssues);
    setSuggestions(newSuggestions);
    
    // Calculate accessibility score
    let score = 100;
    if (newIssues.length > 0) score -= newIssues.length * 10;
    if (newSuggestions.length > 0) score -= newSuggestions.length * 5;
    setAccessibilityScore(Math.max(0, score));
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getAccessibilityGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const getAccessibilityColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-yellow-500';
    if (score >= 70) return 'text-orange-500';
    return 'text-red-500';
  };

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Open Accessibility Panel"
        title="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      className="fixed left-4 top-4 z-50 w-80 max-h-[90vh] overflow-y-auto"
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <Accessibility className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Accessibility</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label={isExpanded ? 'Collapse Panel' : 'Expand Panel'}
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Close Accessibility Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Accessibility Score */}
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {accessibilityScore}
            </div>
            <div className={`text-2xl font-bold ${getAccessibilityColor(accessibilityScore)}`}>
              Grade: {getAccessibilityGrade(accessibilityScore)}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Accessibility Score
            </p>
          </div>

          {/* Quick Settings */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">Quick Settings</h4>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle High Contrast"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              <button
                onClick={() => toggleSetting('largeText')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle Large Text"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-label="Toggle Reduced Motion"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900 dark:text-white">Font Size</h4>
            <div className="grid grid-cols-4 gap-2">
              {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => updateSetting('fontSize', size)}
                  className={`px-3 py-2 text-xs rounded-lg transition-colors ${
                    settings.fontSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  aria-label={`Set font size to ${size}`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Color Blindness */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900 dark:text-white">Color Vision</h4>
            <select
              value={settings.colorBlindness}
              onChange={(e) => updateSetting('colorBlindness', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Select color vision type"
            >
              <option value="none">Normal Vision</option>
              <option value="protanopia">Protanopia (Red-Blind)</option>
              <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
              <option value="tritanopia">Tritanopia (Blue-Blind)</option>
            </select>
          </div>

          {/* Issues and Suggestions */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                {/* Issues */}
                {issues.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-red-600 dark:text-red-400 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Issues Found
                    </h4>
                    <div className="space-y-1">
                      {issues.map((issue, index) => (
                        <div key={index} className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                          {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggestions */}
                {suggestions.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-yellow-600 dark:text-yellow-400 flex items-center">
                      <Info className="w-4 h-4 mr-2" />
                      Suggestions
                    </h4>
                    <div className="space-y-1">
                      {suggestions.map((suggestion, index) => (
                        <div key={index} className="text-sm text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded">
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Accessibility Checklist</h4>
                  <div className="space-y-2">
                    {accessibilityRecommendations.map((rec) => (
                      <div key={rec.id} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          rec.status === 'good' ? 'bg-green-500' : 
                          rec.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                            {rec.title}
                          </h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {rec.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex space-x-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => window.open('/accessibility', '_blank')}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={() => analyzeAccessibility()}
              className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium py-2 px-3 rounded-lg transition-colors"
            >
              Re-analyze
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
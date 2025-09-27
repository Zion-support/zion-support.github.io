import React, { useState, useEffect, useCallback } from 'react';
import { Accessibility, Eye, Volume2, Keyboard, MousePointer, CheckCircle, AlertTriangle } from 'lucide-react';

interface AccessibilityFeatures {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  focusIndicator, s: boolean;
  colorBlindSuppor, t: boolean;
}

interface AccessibilityEnhancementsProps {
  className?: string;
}

const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({ className = '' }) => {
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    keyboardNavigation: true,
    screenReader: false,
    focusIndicators: true,
    colorBlindSupport: false
  });

  const [score, setScore] = useState(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const calculateScore = useCallback(() => {
    const totalFeatures = Object.keys(features).length;
    const enabledFeatures = Object.values(features).filter(Boolean).length;
    const newScore = Math.round((enabledFeatures / totalFeatures) * 100);
    setScore(newScore);
  }, [features]);

  const generateRecommendations = useCallback(() => {
    const recs: string[] = [];
    
    if (!features.highContrast) {
      recs.push('Enable high contrast mode for better visibility');
    }
    if (!features.largeText) {
      recs.push('Increase text size for better readability');
    }
    if (!features.reducedMotion) {
      recs.push('Enable reduced motion for users with vestibular disorders');
    }
    if (!features.screenReader) {
      recs.push('Add screen reader support for visually impaired users');
    }
    if (!features.colorBlindSupport) {
      recs.push('Implement color-blind friendly color schemes');
    }
    
    setRecommendations(recs);
  }, [features]);

  const toggleFeature = (feature: keyof AccessibilityFeatures) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    
    if (features.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (features.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (features.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (features.colorBlindSupport) {
      root.classList.add('colorblind-support');
    } else {
      root.classList.remove('colorblind-support');
    }
  }, [features]);

  useEffect(() => {
    calculateScore();
    generateRecommendations();
    applyAccessibilitySettings();
  }, [features, calculateScore, generateRecommendations, applyAccessibilitySettings]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className={`accessibility-enhancements `}>
      <div className="bg-white rounded-lg shadow-lgp-6">
        <div className="flex items-center justify-between mb-6">
          <h3className="text-xl font-semibold text-gray-800flexitems-center">
            <Accessibility className="w-5h-5mr-2" />
            Accessibility Enhancements
          </h3>
          <div className={`px-4py-2rounded-lg ${getScoreBgColor(score)}`}
            <span className={`text-lg font-bold ${getScoreColor(score)}`}
              {score}% Accessible
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1md:grid-cols-2gap-6mb-6">
          <div className="space-y-4">
            <h4className="font-semibold text-gray-800mb-3">Accessibility Features</h4>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3bg-gray-50rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flexitems-center">
                  <Eye className="w-4h-4mr-3text-blue-500" />
                  <span className="text-sm font-mediumtext-gray-700">High Contrast Mode</span>
                </div>
                <input
                  type="checkbox"
                  checked={features.highContrast}
                  onChange={() => toggleFeature('highContrast')}
                  className="w-4h-4text-blue-600rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3bg-gray-50rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flexitems-center">
                  <Volume2className="w-4h-4mr-3text-green-500" />
                  <span className="text-sm font-mediumtext-gray-700">Large Text</span>
                </div>
                <input
                  type="checkbox"
                  checked={features.largeText}
                  onChange={() => toggleFeature('largeText')}
                  className="w-4h-4text-blue-600rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3bg-gray-50rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flexitems-center">
                  <MousePointer className="w-4h-4mr-3text-purple-500" />
                  <span className="text-sm font-mediumtext-gray-700">Reduced Motion</span>
                </div>
                <input
                  type="checkbox"
                  checked={features.reducedMotion}
                  onChange={() => toggleFeature('reducedMotion')}
                  className="w-4h-4text-blue-600rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3bg-gray-50rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flexitems-center">
                  <Keyboard className="w-4h-4mr-3text-orange-500" />
                  <span className="text-sm font-mediumtext-gray-700">Keyboard Navigation</span>
                </div>
                <input
                  type="checkbox"
                  checked={features.keyboardNavigation}
                  onChange={() => toggleFeature('keyboardNavigation')}
                  className="w-4h-4text-blue-600rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3bg-gray-50rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flexitems-center">
                  <Accessibility className="w-4h-4mr-3text-indigo-500" />
                  <span className="text-sm font-mediumtext-gray-700">Screen Reader Support</span>
                </div>
                <input
                  type="checkbox"
                  checked={features.screenReader}
                  onChange={() => toggleFeature('screenReader')}
                  className="w-4h-4text-blue-600rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3bg-gray-50rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flexitems-center">
                  <CheckCircle className="w-4h-4mr-3text-teal-500" />
                  <span className="text-sm font-mediumtext-gray-700">Focus Indicators</span>
                </div>
                <input
                  type="checkbox"
                  checked={features.focusIndicators}
                  onChange={() => toggleFeature('focusIndicators')}
                  className="w-4h-4text-blue-600rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3bg-gray-50rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flexitems-center">
                  <Eye className="w-4h-4mr-3text-pink-500" />
                  <span className="text-sm font-mediumtext-gray-700">Color Blind Support</span>
                </div>
                <input
                  type="checkbox"
                  checked={features.colorBlindSupport}
                  onChange={() => toggleFeature('colorBlindSupport')}
                  className="w-4h-4text-blue-600roundedfocus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          <div>
            <h4className="font-semibold text-gray-800mb-3">Recommendations</h4>
            {recommendations.length > 0 ? (
              <div className="space-y-2">
                {recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start p-3bg-yellow-50border border-yellow-200rounded-lg">
                    <AlertTriangle className="w-4h-4mr-2text-yellow-500mt-0.5flex-shrink-0" />
                    <span className="text-smtext-yellow-800">{rec}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center p-4bg-green-50border border-green-200rounded-lg">
                <CheckCircle className="w-5h-5mr-2text-green-500" />
                <span className="text-sm font-mediumtext-green-800">
                  All accessibility features are enabled! Great job!
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50border border-blue-200rounded-lgp-4">
          <h4className="font-semibold text-blue-800mb-2">Accessibility Standards</h4>
          <div className="text-sm text-blue-700space-y-1">
            <div>• WCAG2.1AA compliance</div>
            <div>• Section508compliance</div>
            <div>• ARIA labels and roles</div>
            <div>• Semantic HTML structure</div>
            <div>• Keyboard navigation support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancements;
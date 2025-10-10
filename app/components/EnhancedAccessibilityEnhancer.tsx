'use client';
import React, { useState, useEffect } from 'react';
import { Eye, Volume2, MousePointer, Keyboard, Monitor, Settings, CheckCircle, AlertTriangle } from 'lucide-react';

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  enabled: boolean;
  category: 'visual' | 'auditory' | 'motor' | 'cognitive';
  impact: 'high' | 'medium' | 'low';
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [features, setFeatures] = useState<AccessibilityFeature[]>([
    {
      id: 'high-contrast',
      name: 'High Contrast Mode',
      description: 'Enhance text and background contrast for better readability',
      icon: Eye,
      enabled: false,
      category: 'visual',
      impact: 'high'
    },
    {
      id: 'text-to-speech',
      name: 'Text-to-Speech',
      description: 'Convert text content to audio for better accessibility',
      icon: Volume2,
      enabled: false,
      category: 'auditory',
      impact: 'high'
    },
    {
      id: 'focus-indicators',
      name: 'Enhanced Focus Indicators',
      description: 'Improved focus indicators for keyboard navigation',
      icon: MousePointer,
      enabled: false,
      category: 'motor',
      impact: 'medium'
    },
    {
      id: 'keyboard-shortcuts',
      name: 'Keyboard Shortcuts',
      description: 'Customizable keyboard shortcuts for common actions',
      icon: Keyboard,
      enabled: false,
      category: 'motor',
      impact: 'medium'
    },
    {
      id: 'screen-reader',
      name: 'Screen Reader Support',
      description: 'Optimized content structure for screen readers',
      icon: Monitor,
      enabled: false,
      category: 'visual',
      impact: 'high'
    },
    {
      id: 'font-size',
      name: 'Font Size Control',
      description: 'Adjustable font sizes for better readability',
      icon: Settings,
      enabled: false,
      category: 'visual',
      impact: 'medium'
    }
  ]);

  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const savedFeatures = localStorage.getItem('enhanced-accessibility-features');
    if (savedFeatures) {
      const parsed = JSON.parse(savedFeatures);
      setFeatures(parsed);
      setIsActive(parsed.some((f: AccessibilityFeature) => f.enabled));
    }
  }, []);

  const toggleFeature = (featureId: string) => {
    const updatedFeatures = features.map(feature =>
      feature.id === featureId
        ? { ...feature, enabled: !feature.enabled }
        : feature
    );
    setFeatures(updatedFeatures);
    localStorage.setItem('enhanced-accessibility-features', JSON.stringify(updatedFeatures));
    setIsActive(updatedFeatures.some(f => f.enabled));
  };

  const enableAllFeatures = () => {
    const updatedFeatures = features.map(feature => ({ ...feature, enabled: true }));
    setFeatures(updatedFeatures);
    localStorage.setItem('enhanced-accessibility-features', JSON.stringify(updatedFeatures));
    setIsActive(true);
  };

  const disableAllFeatures = () => {
    const updatedFeatures = features.map(feature => ({ ...feature, enabled: false }));
    setFeatures(updatedFeatures);
    localStorage.setItem('enhanced-accessibility-features', JSON.stringify(updatedFeatures));
    setIsActive(false);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'visual': return '👁️';
      case 'auditory': return '🔊';
      case 'motor': return '🖱️';
      case 'cognitive': return '🧠';
      default: return '⚙️';
    }
  };

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(f => f.category === selectedCategory);

  const categories = ['all', 'visual', 'auditory', 'motor', 'cognitive'];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Enhanced Accessibility Enhancer</h3>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-400' : 'bg-gray-400'}`} />
          <span className="text-sm text-gray-300">
            {isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Features List */}
      <div className="space-y-4 mb-6">
        {filteredFeatures.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                feature.enabled
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
              onClick={() => toggleFeature(feature.id)}
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{getCategoryIcon(feature.category)}</span>
                  <div className={`p-2 rounded-lg ${
                    feature.enabled ? 'bg-green-500/20' : 'bg-white/10'
                  }`}>
                    <IconComponent className={`h-5 w-5 ${
                      feature.enabled ? 'text-green-400' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(feature.impact)}`}>
                    {feature.impact.toUpperCase()}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-white font-medium">{feature.name}</h4>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      feature.enabled
                        ? 'border-green-400 bg-green-400'
                        : 'border-gray-400 hover:border-gray-300'
                    }`}>
                      {feature.enabled && <CheckCircle className="h-3 w-3 text-white" />}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={enableAllFeatures}
          className="flex-1 bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-medium hover:bg-green-500/30 transition-colors duration-300"
        >
          Enable All
        </button>
        <button
          onClick={disableAllFeatures}
          className="flex-1 bg-gray-500/20 text-gray-400 px-4 py-2 rounded-lg font-medium hover:bg-gray-500/30 transition-colors duration-300"
        >
          Disable All
        </button>
      </div>

      {/* Status Summary */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white">
              {features.filter(f => f.enabled).length}
            </div>
            <div className="text-sm text-gray-400">Enabled</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">
              {features.filter(f => f.impact === 'high').length}
            </div>
            <div className="text-sm text-gray-400">High Impact</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">
              {categories.length - 1}
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAccessibilityEnhancer;
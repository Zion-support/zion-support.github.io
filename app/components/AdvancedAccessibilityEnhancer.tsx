'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, Eye, Volume2, MousePointer, Keyboard, Monitor } from 'lucide-react';

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  enabled: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC = () => {
  const [features, setFeatures] = useState<AccessibilityFeature[]>([
    {
      id: 'high-contrast',
      name: 'High Contrast Mode',
      description: 'Enhance text and background contrast for better readability',
      icon: Eye,
      enabled: false
    },
    {
      id: 'text-to-speech',
      name: 'Text-to-Speech',
      description: 'Convert text content to audio for better accessibility',
      icon: Volume2,
      enabled: false
    },
    {
      id: 'focus-indicators',
      name: 'Focus Indicators',
      description: 'Enhanced focus indicators for keyboard navigation',
      icon: MousePointer,
      enabled: false
    },
    {
      id: 'keyboard-shortcuts',
      name: 'Keyboard Shortcuts',
      description: 'Customizable keyboard shortcuts for common actions',
      icon: Keyboard,
      enabled: false
    },
    {
      id: 'screen-reader',
      name: 'Screen Reader Support',
      description: 'Optimized content structure for screen readers',
      icon: Monitor,
      enabled: false
    }
  ]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if accessibility features are already enabled
    const savedFeatures = localStorage.getItem('accessibility-features');
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
    localStorage.setItem('accessibility-features', JSON.stringify(updatedFeatures));
    setIsActive(updatedFeatures.some(f => f.enabled));
  };

  const enableAllFeatures = () => {
    const updatedFeatures = features.map(feature => ({ ...feature, enabled: true }));
    setFeatures(updatedFeatures);
    localStorage.setItem('accessibility-features', JSON.stringify(updatedFeatures));
    setIsActive(true);
  };

  const disableAllFeatures = () => {
    const updatedFeatures = features.map(feature => ({ ...feature, enabled: false }));
    setFeatures(updatedFeatures);
    localStorage.setItem('accessibility-features', JSON.stringify(updatedFeatures));
    setIsActive(false);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Accessibility Enhancer</h3>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-400' : 'bg-gray-400'}`} />
          <span className="text-sm text-gray-300">
            {isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                feature.enabled
                  ? 'bg-green-500/20 border-green-500/50'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
              onClick={() => toggleFeature(feature.id)}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  feature.enabled ? 'bg-green-500/20' : 'bg-white/10'
                }`}>
                  <IconComponent className={`h-5 w-5 ${
                    feature.enabled ? 'text-green-400' : 'text-gray-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium">{feature.name}</h4>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  feature.enabled
                    ? 'border-green-400 bg-green-400'
                    : 'border-gray-400'
                }`}>
                  {feature.enabled && <CheckCircle className="h-3 w-3 text-white" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;
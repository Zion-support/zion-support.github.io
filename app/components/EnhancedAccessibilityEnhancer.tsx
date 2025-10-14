'use client';
import React, { useState, useEffect } from 'react';
import { Eye, Volume2, MousePointer, Keyboard } from 'lucide-react';

interface AccessibilityFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [features, setFeatures] = useState<AccessibilityFeature[]>([
    {
      id: 'high-contrast',
      title: 'High Contrast Mode',
      description: 'Increase contrast for better visibility',
      icon: Eye,
      enabled: false,
      onToggle: (enabled) => {
        document.body.classList.toggle('high-contrast', enabled);
        localStorage.setItem('accessibility-high-contrast', enabled.toString());
      }
    },
    {
      id: 'text-size',
      title: 'Large Text',
      description: 'Increase text size for better readability',
      icon: Volume2,
      enabled: false,
      onToggle: (enabled) => {
        document.body.classList.toggle('large-text', enabled);
        localStorage.setItem('accessibility-large-text', enabled.toString());
      }
    },
    {
      id: 'focus-indicators',
      title: 'Enhanced Focus Indicators',
      description: 'Make focus indicators more visible',
      icon: MousePointer,
      enabled: false,
      onToggle: (enabled) => {
        document.body.classList.toggle('enhanced-focus', enabled);
        localStorage.setItem('accessibility-enhanced-focus', enabled.toString());
      }
    },
    {
      id: 'keyboard-navigation',
      title: 'Keyboard Navigation',
      description: 'Improve keyboard navigation experience',
      icon: Keyboard,
      enabled: false,
      onToggle: (enabled) => {
        document.body.classList.toggle('keyboard-navigation', enabled);
        localStorage.setItem('accessibility-keyboard-nav', enabled.toString());
      }
    }
  ]);

  useEffect(() => {
    // Load saved preferences
    features.forEach(feature => {
      const saved = localStorage.getItem(`accessibility-${feature.id}`);
      if (saved === 'true') {
        feature.onToggle(true);
        setFeatures(prev => prev.map(f => 
          f.id === feature.id ? { ...f, enabled: true } : f
        ));
      }
    });
  }, [features]);

  const toggleFeature = (featureId: string) => {
    setFeatures(prev => prev.map(feature => {
      if (feature.id === featureId) {
        const newEnabled = !feature.enabled;
        feature.onToggle(newEnabled);
        return { ...feature, enabled: newEnabled };
      }
      return feature;
    }));
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-white mb-6">Accessibility Enhancements</h3>
      <p className="text-gray-300 mb-6">
        Customize your browsing experience with these accessibility features.
      </p>
      
      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <feature.icon className="w-6 h-6 text-cyan-400" />
              <div>
                <h4 className="text-white font-medium">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
            
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={feature.enabled}
                onChange={() => toggleFeature(feature.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedAccessibilityEnhancer;
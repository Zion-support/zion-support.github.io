'use client';

import React from 'react';
import { CheckCircle, Eye, Volume2, MousePointer } from 'lucide-react';

interface AdvancedAccessibilityEnhancerProps {
  className?: string;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({ className = '' }) => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'Visual Enhancements',
      description: 'High contrast modes, text scaling, and color adjustments for better visibility.'
    },
    {
      icon: Volume2,
      title: 'Audio Support',
      description: 'Screen reader compatibility and audio descriptions for multimedia content.'
    },
    {
      icon: MousePointer,
      title: 'Navigation Aid',
      description: 'Keyboard navigation, focus indicators, and alternative input methods.'
    }
  ];

  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">Accessibility Enhanced</h3>
      </div>
      
      <div className="space-y-4">
        {accessibilityFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <feature.icon className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;
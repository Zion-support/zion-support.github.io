'use client';

import React from 'react';
import { CheckCircle, Search, Target, BarChart3 } from 'lucide-react';

interface AdvancedSEOOptimizerProps {
  className?: string;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({ className = '' }) => {
  const seoFeatures = [
    {
      icon: Search,
      title: 'Keyword Optimization',
      description: 'Advanced keyword research and optimization for better search rankings.'
    },
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'AI-powered content recommendations and optimization strategies.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking',
      description: 'Comprehensive SEO analytics and performance tracking.'
    }
  ];

  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-green-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">SEO Optimized</h3>
      </div>
      
      <div className="space-y-4">
        {seoFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <feature.icon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
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

export default AdvancedSEOOptimizer;
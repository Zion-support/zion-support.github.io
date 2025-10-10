'use client';

import React from 'react';
import { CheckCircle, Search, Target, BarChart3, Globe, Zap } from 'lucide-react';

interface AdvancedSEOOptimizerNewProps {
  className?: string;
}

const AdvancedSEOOptimizerNew: React.FC<AdvancedSEOOptimizerNewProps> = ({ className = '' }) => {
  const seoFeatures = [
    {
      icon: Search,
      title: 'Advanced Keyword Research',
      description: 'AI-powered keyword discovery and competitive analysis.'
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'Smart content recommendations and optimization strategies.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive SEO metrics and performance tracking.'
    },
    {
      icon: Globe,
      title: 'Global SEO',
      description: 'Multi-language and international SEO optimization.'
    },
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Site speed, mobile optimization, and technical improvements.'
    }
  ];

  return (
    <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-white/10 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Advanced SEO Optimizer</h3>
          <p className="text-sm text-gray-400">Next-generation SEO optimization</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {seoFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
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

export default AdvancedSEOOptimizerNew;
import React from 'react';
import { Search, TrendingUp, BarChart3 } from 'lucide-react';

interface SEOOptimizerProps {
  className?: string;
  showMetrics?: boolean;
}

export default function EnhancedSEOOptimizer({ 
  className = '',
  showMetrics = true 
}: SEOOptimizerProps) {
  const seoMetrics = [
    { label: 'Page Speed', value: 95, status: 'excellent' },
    { label: 'SEO Score', value: 88, status: 'good' },
    { label: 'Mobile Friendly', value: 100, status: 'excellent' },
    { label: 'Accessibility', value: 92, status: 'excellent' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-yellow-400';
      case 'needs-work': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ${className}`}>
      <div className="flex items-center mb-6">
        <Search className="w-6 h-6 text-cyan-400 mr-3" />
        <h3 className="text-xl font-semibold text-white">SEO Optimizer</h3>
      </div>

      {showMetrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {seoMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold ${getStatusColor(metric.status)} mb-1`}>
                {metric.value}%
              </div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-400 mr-3" />
            <span className="text-white">Page Title Optimization</span>
          </div>
          <span className="text-green-400 text-sm">Optimized</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center">
            <BarChart3 className="w-5 h-5 text-yellow-400 mr-3" />
            <span className="text-white">Meta Description</span>
          </div>
          <span className="text-yellow-400 text-sm">Needs Review</span>
        </div>
      </div>
    </div>
  );
}

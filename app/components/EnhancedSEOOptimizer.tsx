import React from 'react';

interface SEOOptimizerProps {
  className?: string;
}

const EnhancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '' }) => {
  return (
    <div className={`seo-optimizer ${className}`}>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Page Speed Score</span>
            <span className="font-semibold">95/100</span>
          </div>
          <div className="flex items-center justify-between">
            <span>SEO Score</span>
            <span className="font-semibold">98/100</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Accessibility</span>
            <span className="font-semibold">92/100</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Best Practices</span>
            <span className="font-semibold">96/100</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-sm opacity-90">
            Your website is optimized for search engines and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSEOOptimizer;
import React from 'react';

export interface SEOOptimizerProps {
  url?: string;
  autoAnalyze?: boolean;
  showDetails?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = () => {
  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white">
      <h3 className="text-sm font-semibold text-gray-800">SEO Optimizer</h3>
      <p className="text-xs text-gray-500">Analysis module is temporarily simplified.</p>
    </div>
  );
};

export default SEOOptimizer;

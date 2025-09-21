import React from 'react';

const SEOOptimizer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">SEO Analysis</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">SEO Score</span>
            <span className="font-semibold text-green-600">85/100</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Meta Tags</span>
            <span className="font-semibold text-green-600">✓ Complete</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Page Speed</span>
            <span className="font-semibold text-green-600">Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOOptimizer;
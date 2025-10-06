import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Unified Content Promotion
      </h2>
      <p className="text-gray-600 mb-6">
        Discover our comprehensive content promotion strategies that drive engagement and growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📈</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600">Track performance metrics</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Targeting</h3>
          <p className="text-gray-600">Precise audience targeting</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Optimization</h3>
          <p className="text-gray-600">Continuous improvement</p>
        </div>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;
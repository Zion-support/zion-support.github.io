import React from 'react';

export const FeatureHighlights = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group</h2>
          <p className="text-lg text-gray-600">Discover the advantages that make us the preferred choice</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Solutions</h3>
            <p className="text-gray-600">Cutting-edge artificial intelligence for business optimization</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Optimized performance and rapid deployment capabilities</p>
          </div>
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
            <p className="text-gray-600">Bank-level security with comprehensive compliance</p>
          </div>
        </div>
      </div>
    </div>
  );
};
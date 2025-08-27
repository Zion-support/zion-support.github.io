import React from 'react';

export const MobileFeatureShowcase = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          App Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
            <p className="text-gray-600">Optimized for mobile devices</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-gray-600">Enterprise-grade security</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-gray-600">Lightning-fast performance</p>
          </div>
        </div>
      </div>
    </div>
  );
};
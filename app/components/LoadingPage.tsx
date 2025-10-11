import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">Z</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
          <p className="text-gray-300">Loading amazing content...</p>
        </div>
        <LoadingSpinner size="lg" />
      </div>
    </div>
  );
};

export default LoadingPage;
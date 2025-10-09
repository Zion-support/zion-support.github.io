import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" role="status" aria-label="Loading">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="w-16 h-16 mx-auto mb-8 relative">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
          <div className="absolute inset-1 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 animate-pulse"></div>
          <div className="absolute inset-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4">Loading...</h2>
        <p className="text-gray-300 mb-8">Please wait while we prepare your experience</p>
        
        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
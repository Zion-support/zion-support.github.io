import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="cyber-loading mx-auto mb-4">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        </div>
        <div className="text-white text-xl font-medium">Loading application...</div>
        <div className="text-cyan-400 text-sm mt-2">Please wait while we prepare your experience</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
import React from 'react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
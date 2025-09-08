import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-zion-cyan mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold mb-2">Loading...</h2>
        <p className="text-zion-slate-light">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export default LoadingPage;
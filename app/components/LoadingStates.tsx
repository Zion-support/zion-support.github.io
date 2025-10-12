import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-4 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" 
               style={{ animationDuration: '2s' }} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h3>
        <p className="text-gray-300">Initializing advanced AI systems...</p>
      </div>
    </div>
  );
};

export default PageLoader;
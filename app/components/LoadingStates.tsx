import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading...</p>
      </div>
    </div>
  );
};

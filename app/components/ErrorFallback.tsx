import React from 'react';

const ErrorFallback: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-gray-300">Please try refreshing the page.</p>
      </div>
    </div>
  );
};

export default ErrorFallback;

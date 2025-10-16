import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" role="status" aria-live="polite">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" aria-hidden="true"></div>
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className="w-8 h-8 border-2 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      </div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
};

export default LoadingSpinner;

import React from 'react';

export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-cyan-500 rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <LoadingSpinner size="xl" className="mb-4" />
        <p className="text-white text-lg">Loading Zion Tech Group...</p>
      </div>
    </div>
  );
};

export const LoadingButton = ({ children, loading, ...props }) => {
  return (
    <button 
      {...props} 
      disabled={loading || props.disabled}
      className={`${props.className || ''} ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner size="sm" className="mr-2" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};
import React from 'react';

interface LoadingPageProps {
  type?: 'loading' | 'error' | 'success';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className={`${sizeClasses[size]} mx-auto mb-4`}>
          {type === 'loading' && (
            <div className="animate-spin rounded-full h-full w-full border-4 border-cyan-500/20 border-t-cyan-500"></div>
          )}
          {type === 'error' && (
            <div className="w-full h-full rounded-full bg-red-500/20 flex items-center justify-center">
              <svg className="w-1/2 h-1/2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
          {type === 'success' && (
            <div className="w-full h-full rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-1/2 h-1/2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
        <p className={`text-gray-300 ${textSizeClasses[size]}`}>{message}</p>
      </div>
    </div>
  );
};

export default LoadingPage;

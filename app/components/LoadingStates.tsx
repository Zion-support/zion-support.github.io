import React from 'react';

interface LoadingPageProps {
  type?: 'loading' | 'error' | 'empty';
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className={`${sizeClasses[size]} border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4`}></div>
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  );
};

export const ErrorPage: React.FC<{ message?: string }> = ({ message = 'Something went wrong' }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white text-2xl">!</span>
      </div>
      <p className="text-white text-lg">{message}</p>
    </div>
  </div>
);

export const EmptyPage: React.FC<{ message?: string }> = ({ message = 'No content available' }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white text-2xl">?</span>
      </div>
      <p className="text-white text-lg">{message}</p>
    </div>
  </div>
);

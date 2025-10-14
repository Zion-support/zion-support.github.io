import React from 'react';
import { Loader2 } from 'lucide-react';


import { Helmet } from 'react-helmet-async';
'use client'
export default function Page() {


  return (
    <div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizes[size]}`}></div>
  );
};


const LoadingStates = () => <LoadingPage />;

export default LoadingStates;

=======
export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the content</p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
  );
};

export const LoadingCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-white/20 rounded w-3/4"></div>
        <div className="h-4 bg-white/20 rounded w-1/2"></div>
        <div className="h-4 bg-white/20 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export const LoadingButton: React.FC<{ children: React.ReactNode; loading?: boolean }> = ({ 
  children, 
  loading = false 
}) => {
  return (
    <button 
      disabled={loading}
      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      <span>{children}</span>
    </button>
  );
};

export default LoadingPage;
>>>>>>> b6a79d58bbb2871f8f125676d4144daa6eb0bda7

import React from 'react';
import { Loader2 } from 'lucide-react';

<<<<<<< HEAD
const LoadingStates: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default LoadingStates;
=======
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
    </div>
  );
};

export const LoadingCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-gray-300/20 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300/20 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300/20 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export const LoadingGrid: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
};

export default LoadingPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-e238

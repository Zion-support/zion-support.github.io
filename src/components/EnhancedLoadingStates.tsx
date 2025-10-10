import React from 'react';

interface PageLoaderProps {
  message?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 animate-pulse">
    <div className="h-8 bg-gray-600 rounded mb-4"></div>
    <div className="h-4 bg-gray-600 rounded mb-2"></div>
    <div className="h-4 bg-gray-600 rounded mb-2"></div>
    <div className="h-4 bg-gray-600 rounded w-3/4"></div>
  </div>
);

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default PageLoader;
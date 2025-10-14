import React from 'react';
import { Loader2 } from 'lucide-react';

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
    <Loader2 className={`${sizeClasses[size]} text-blue-400 animate-spin`} />
  );
};

export const LoadingCard: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export const LoadingButton: React.FC = () => {
  return (
    <button 
      disabled 
      className="px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed flex items-center"
    >
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Loading...
    </button>
  );
};

export const LoadingTable: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <div className="h-4 bg-gray-700 rounded w-1/4"></div>
      </div>
      <div className="p-4 space-y-3">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div 
                key={colIndex} 
                className="h-4 bg-gray-700 rounded flex-1"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const LoadingGrid: React.FC<{ items?: number }> = ({ items = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: items }).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ 
  width?: string; 
  height?: string; 
  className?: string 
}> = ({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '' 
}) => {
  return (
    <div className={`${width} ${height} bg-gray-700 rounded animate-pulse ${className}`}></div>
  );
};

export default LoadingPage;
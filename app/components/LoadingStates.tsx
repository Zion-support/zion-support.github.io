import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />
    </div>
  );
};

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-2 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <h3 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h3>
        <p className="text-lg text-gray-300 mb-8">Initializing advanced AI systems...</p>
        </div>
      </div>
    </div>
  );
};

export const LoadingDots: React.FC = () => {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
    </div>
  );
};

export const LoadingPulse: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="h-4 bg-gray-300 rounded animate-pulse"></div>
      ))}
    </div>
  );
};

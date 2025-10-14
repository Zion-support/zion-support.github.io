'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  color?: string;
}

const EnhancedLoading: React.FC<LoadingProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    cyan: 'text-cyan-500',
    purple: 'text-purple-500',
    white: 'text-white',
    gray: 'text-gray-500'
  };

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Loader2 className={`animate-spin ${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses]}`} />
      {text && (
        <p className={`text-sm ${colorClasses[color as keyof typeof colorClasses]}`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return <LoadingSpinner />;
};

export default EnhancedLoading;
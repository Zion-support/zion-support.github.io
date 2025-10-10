'use client';
import React from 'react';

interface LoadingStateProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  type = 'spinner',
  size = 'md',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const renderSpinner = () => (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-cyan-500 ${sizeClasses[size]} ${className}`} />
  );

  const renderSkeleton = () => (
    <div className={`animate-pulse bg-gray-300 rounded ${sizeClasses[size]} ${className}`} />
  );

  const renderDots = () => (
    <div className={`flex space-x-1 ${className}`}>
      <div className={`w-2 h-2 bg-cyan-500 rounded-full animate-bounce ${sizeClasses[size]}`} style={{ animationDelay: '0ms' }} />
      <div className={`w-2 h-2 bg-cyan-500 rounded-full animate-bounce ${sizeClasses[size]}`} style={{ animationDelay: '150ms' }} />
      <div className={`w-2 h-2 bg-cyan-500 rounded-full animate-bounce ${sizeClasses[size]}`} style={{ animationDelay: '300ms' }} />
    </div>
  );

  const renderPulse = () => (
    <div className={`animate-pulse bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full ${sizeClasses[size]} ${className}`} />
  );

  const renderLoader = () => {
    switch (type) {
      case 'skeleton':
        return renderSkeleton();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {renderLoader()}
      {text && (
        <p className={`text-gray-600 ${textSizeClasses[size]} ${className}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingState;
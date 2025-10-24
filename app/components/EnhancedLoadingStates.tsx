'use client';
import React from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface LoadingStateProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'success' | 'error';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const EnhancedLoadingStates: React.FC<LoadingStateProps> = ({
  type = 'spinner',
  size = 'md',
  text = 'Loading...',
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

  const renderLoadingIcon = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        );
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-cyan-400 rounded-full animate-pulse`}></div>
        );
      case 'success':
        return <CheckCircle className={`${sizeClasses[size]} text-green-400`} />;
      case 'error':
        return <AlertCircle className={`${sizeClasses[size]} text-red-400`} />;
      default:
        return <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderLoadingIcon()}
      {text && (
        <p className={`text-gray-300 ${textSizeClasses[size]} font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default EnhancedLoadingStates;
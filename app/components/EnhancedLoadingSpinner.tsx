import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedLoadingSpinnerProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'minimal' | 'futuristic';
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  message = "Loading...",
  showProgress = false,
  progress = 0,
  size = 'md',
  variant = 'futuristic'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'minimal':
        return (
          <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-cyan-500 rounded-full animate-spin`} />
        );
      
      case 'futuristic':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20" />
            {/* Inner spinning ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-400 animate-spin" />
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
            </div>
          </div>
        );
      
      default:
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 rounded-full border-4 border-gray-300" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 animate-spin" />
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>Loading - Zion Tech Group</title>
        <meta name="description" content="Loading page" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          {/* Spinner */}
          <div className="flex justify-center mb-6">
            {renderSpinner()}
          </div>
          
          {/* Message */}
          <h2 className={`${textSizeClasses[size]} font-semibold text-white mb-4`}>
            {message}
          </h2>
          
          {/* Progress Bar */}
          {showProgress && (
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
          )}
          
          {/* Loading dots animation */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          
          {/* Additional info */}
          <p className="text-gray-400 text-sm mt-4">
            Please wait while we prepare your content...
          </p>
        </div>
      </div>
    </>
  );
};

export default EnhancedLoadingSpinner;
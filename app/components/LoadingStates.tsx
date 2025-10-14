import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStatesProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  size = 'md', 
  message, 
  variant = 'spinner' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const getDefaultMessage = () => {
    switch (variant) {
      case 'dots':
        return 'Loading...';
      case 'pulse':
        return 'Please wait...';
      default:
        return 'Loading...';
    }
  };

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
          <p className="text-gray-300 mb-6">{message || getDefaultMessage()}</p>
        </div>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
          <p className="text-gray-300 mb-6">{message || getDefaultMessage()}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className={`${sizeClasses[size]} text-cyan-500 animate-spin mx-auto mb-2`} />
        <p className="text-gray-600 text-sm">{message || getDefaultMessage()}</p>
      </div>
    </div>
  );
};

export default LoadingStates;